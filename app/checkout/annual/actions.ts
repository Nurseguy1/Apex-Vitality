"use server";

import { redirect } from "next/navigation";
import { annualMemberships, annualTier } from "../../lib/membership-catalog";

export async function beginAnnualCheckout(form: FormData): Promise<void> {
  const tier = annualTier(form.get("tier"));
  if (!tier) redirect("/#memberships");
  const errorUrl = `/checkout/annual?tier=${tier}&error=unavailable`;
  for (const acknowledgment of ["california", "care", "coverage", "renewal"]) {
    if (form.get(acknowledgment) !== "yes") redirect(`/checkout/annual?tier=${tier}&error=acknowledgments`);
  }
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) redirect(errorUrl);
  const offer = annualMemberships[tier];
  let checkoutUrl: string | null = null;
  try {
    const headers = { Authorization: `Bearer ${secret}`, "Content-Type": "application/x-www-form-urlencoded" };
    const lookup = `apex_${tier}_annual_v1`;
    const prices = await fetch(`https://api.stripe.com/v1/prices?lookup_keys[]=${lookup}&active=true&limit=1`, { headers, cache: "no-store", signal: AbortSignal.timeout(15000) });
    if (!prices.ok) throw new Error("Price unavailable");
    const listed = await prices.json();
    let price = listed.data?.[0];
    if (!price) {
      const created = await fetch("https://api.stripe.com/v1/prices", { method: "POST", headers: { ...headers, "Idempotency-Key": `apex-price-${lookup}` }, body: new URLSearchParams({ product: offer.product, currency: "usd", unit_amount: String(offer.amount), "recurring[interval]": "year", lookup_key: lookup, tax_behavior: "exclusive" }), cache: "no-store", signal: AbortSignal.timeout(15000) });
      if (!created.ok) throw new Error("Price unavailable");
      price = await created.json();
    }
    if (price.product !== offer.product || price.unit_amount !== offer.amount || price.currency !== "usd" || price.recurring?.interval !== "year" || price.recurring?.interval_count !== 1 || price.active !== true) throw new Error("Price mismatch");
    const body = new URLSearchParams({ mode: "subscription", "line_items[0][price]": price.id, "line_items[0][quantity]": "1", success_url: "https://www.goapexvitality.com/membership-complete?session_id={CHECKOUT_SESSION_ID}", cancel_url: `https://www.goapexvitality.com/checkout/annual?tier=${tier}`, billing_address_collection: "required", "automatic_tax[enabled]": "true", "metadata[apex_tier]": tier, "metadata[apex_billing]": "annual", "metadata[apex_agreement_version]": "2026-10-16", "metadata[apex_california_attested]": "true", "metadata[apex_coverage_attested]": "true", "metadata[apex_renewal_authorized]": "true", "metadata[apex_agreement_accepted_at]": new Date().toISOString(), "subscription_data[metadata][apex_tier]": tier, "subscription_data[metadata][apex_billing]": "annual" });
    const requestId = form.get("requestId");
    const session = await fetch("https://api.stripe.com/v1/checkout/sessions", { method: "POST", headers: { ...headers, ...(typeof requestId === "string" && /^[a-f0-9-]{36}$/.test(requestId) ? { "Idempotency-Key": `apex-annual-${requestId}` } : {}) }, body, cache: "no-store", signal: AbortSignal.timeout(15000) });
    if (!session.ok) throw new Error("Checkout unavailable");
    const result = await session.json();
    const url = new URL(result.url);
    if (url.protocol !== "https:" || url.hostname !== "checkout.stripe.com") throw new Error("Invalid checkout");
    checkoutUrl = url.toString();
  } catch { redirect(errorUrl); }
  redirect(checkoutUrl!);
}
