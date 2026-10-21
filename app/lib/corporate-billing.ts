import { createHmac } from "node:crypto";

// Private, server-only mapping. Never derive a customer or price from browser input.
export type Sponsor = { name: string; aliases?: string[]; customer: string; price: string; liveAuthorized: boolean; paymentMethod?: string };
export class EnrollmentError extends Error {
  constructor(public code: string, public status = 503) { super(code); }
}
export function normalizeCompany(value: string) {
  return value.normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}
export function sponsorConfig(): Sponsor[] {
  try {
    const config: unknown = JSON.parse(process.env.CORPORATE_SPONSORS_JSON || "[]");
    if (!Array.isArray(config)) return [];
    return config.filter((s): s is Sponsor => s && typeof s.name === "string" &&
      /^cus_[A-Za-z0-9]+$/.test(s.customer) && /^price_[A-Za-z0-9]+$/.test(s.price) &&
      typeof s.liveAuthorized === "boolean" && (s.paymentMethod === undefined || /^pm_[A-Za-z0-9]+$/.test(s.paymentMethod)) && (s.aliases === undefined ||
        (Array.isArray(s.aliases) && s.aliases.every((a: unknown) => typeof a === "string"))));
  } catch { return []; }
}
export function corporateBillingEnabled() {
  const key = process.env.STRIPE_SECRET_KEY || "";
  const mode = process.env.CORPORATE_BILLING_MODE;
  return (mode === "test" && key.startsWith("sk_test_") ||
    mode === "live" && key.startsWith("sk_live_") && process.env.CORPORATE_LIVE_BILLING_APPROVED === "true") &&
    (process.env.CORPORATE_ENROLLMENT_HMAC_SECRET?.length ?? 0) >= 32 && sponsorConfig().length > 0;
}

type Subscription = { id: string; status: string; metadata?: Record<string, string> };
export async function billCorporateEnrollment(input: { company: string; email: string; accepted: boolean }) {
  if (!corporateBillingEnabled()) throw new EnrollmentError("unavailable");
  const company = input.company.trim();
  const email = input.email.trim().toLowerCase();
  if (!company || company.length > 120 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || input.accepted !== true)
    throw new EnrollmentError("invalid_registration", 400);
  const sponsors = sponsorConfig().filter((s) => [s.name, ...(s.aliases || [])].some((name) => normalizeCompany(name) === normalizeCompany(company)));
  if (sponsors.length !== 1) throw new EnrollmentError("company_not_configured", 422);
  const sponsor = sponsors[0];
  const live = process.env.CORPORATE_BILLING_MODE === "live";
  if (live && !sponsor.liveAuthorized) throw new EnrollmentError("company_not_ready", 422);
  const reference = createHmac("sha256", process.env.CORPORATE_ENROLLMENT_HMAC_SECRET!)
    .update(`${sponsor.customer}\n${email}`).digest("hex");
  const headers = { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` };
  async function stripe<T>(path: string, body?: URLSearchParams): Promise<T> {
    let response: Response;
    try {
      response = await fetch(`https://api.stripe.com/v1/${path}`, {
        method: body ? "POST" : "GET", headers: {
          ...headers, ...(body ? { "Content-Type": "application/x-www-form-urlencoded", "Idempotency-Key": `corporate-v1-${reference}` } : {}),
        }, ...(body ? { body } : {}), cache: "no-store", signal: AbortSignal.timeout(15000),
      });
    } catch { throw new EnrollmentError("billing_unavailable"); }
    if (!response.ok) throw new EnrollmentError("billing_unavailable");
    return response.json() as Promise<T>;
  }
  const customer = await stripe<{ id: string; deleted?: boolean; livemode: boolean; invoice_settings?: { default_payment_method?: string | null } }>(`customers/${sponsor.customer}`);
  if (customer.deleted || customer.id !== sponsor.customer || customer.livemode !== live)
    throw new EnrollmentError("company_not_ready", 422);
  const paymentMethod = sponsor.paymentMethod || customer.invoice_settings?.default_payment_method;
  if (!paymentMethod || !/^pm_[A-Za-z0-9]+$/.test(paymentMethod)) throw new EnrollmentError("company_not_ready", 422);
  if (sponsor.paymentMethod) {
    const method = await stripe<{ id: string; customer: string | null; type: string; livemode: boolean }>(`payment_methods/${paymentMethod}`);
    if (method.id !== paymentMethod || method.customer !== sponsor.customer || method.type !== "card" || method.livemode !== live) throw new EnrollmentError("company_not_ready", 422);
  }
  const amount = Number(process.env.CORPORATE_UNIT_AMOUNT);
  if (!Number.isSafeInteger(amount) || amount <= 0) throw new EnrollmentError("company_not_ready", 422);
  const price = await stripe<{ id: string; active: boolean; livemode: boolean; unit_amount: number; currency: string; type: string; recurring?: { interval: string; interval_count: number }; product: string }>(`prices/${sponsor.price}`);
  if (price.id !== sponsor.price || !price.active || price.livemode !== live || price.unit_amount !== amount || price.currency !== "usd" || price.type !== "recurring" || price.recurring?.interval !== "month" || price.recurring.interval_count !== 1 || price.product !== process.env.CORPORATE_STRIPE_PRODUCT_ID)
    throw new EnrollmentError("company_not_ready", 422);
  // All-status listing is immediately consistent and also catches retries after
  // Stripe's 24-hour idempotency retention. Never auto-restart a canceled client.
  let after = "";
  let existing: Subscription | undefined;
  for (;;) {
    const query = new URLSearchParams({ customer: sponsor.customer, status: "all", limit: "100", ...(after ? { starting_after: after } : {}) });
    const page = await stripe<{ data: Subscription[]; has_more: boolean }>(`subscriptions?${query}`);
    existing = page.data.find((s) => s.metadata?.apex_corporate_enrollment === reference);
    if (existing || !page.has_more) break;
    const next = page.data.at(-1)?.id;
    if (!next || next === after) throw new EnrollmentError("billing_unavailable");
    after = next;
  }
  if (existing && ["canceled", "incomplete_expired"].includes(existing.status)) throw new EnrollmentError("contact_apex", 409);
  const subscription = existing ?? await stripe<Subscription>("subscriptions", new URLSearchParams({
    customer: sponsor.customer, "items[0][price]": sponsor.price, "items[0][quantity]": "1",
    collection_method: "charge_automatically", payment_behavior: "allow_incomplete",
    default_payment_method: paymentMethod,
    "metadata[apex_corporate_enrollment]": reference,
    "metadata[apex_enrollment_version]": "2026-10-20",
    "metadata[apex_trigger]": "completed_corporate_enrollment",
    // No patient names, email addresses, diagnoses or clinical information in Stripe.
  }));
  if (!subscription.id || !["active", "incomplete", "past_due", "unpaid", "paused", "trialing"].includes(subscription.status)) throw new EnrollmentError("billing_unavailable");
  return { company: sponsor.name, reference: reference.slice(0, 16), billing: subscription.status === "active" ? "active" : "needs_attention", test: !live };
}

