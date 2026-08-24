export type VerifiedCheckout = {
  state: string | null;
  items: string[];
  mode: string | null;
};

type StripeCheckoutSession = {
  payment_status?: string;
  mode?: string;
  customer_details?: { address?: { state?: string | null } | null } | null;
  shipping_details?: { address?: { state?: string | null } | null } | null;
};

type StripeLineItems = {
  data?: Array<{ description?: string | null }>;
};

export async function getVerifiedCheckout(sessionId: string): Promise<VerifiedCheckout | null> {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret || !sessionId.startsWith("cs_")) return null;

  try {
    const headers = { Authorization: `Bearer ${secret}` };
    const [sessionResponse, itemsResponse] = await Promise.all([
      fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
        headers,
        cache: "no-store",
      }),
      fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}/line_items?limit=10`, {
        headers,
        cache: "no-store",
      }),
    ]);

    if (!sessionResponse.ok) return null;
    const session = (await sessionResponse.json()) as StripeCheckoutSession;
    if (session.payment_status !== "paid") return null;

    const lineItems = itemsResponse.ok ? (await itemsResponse.json()) as StripeLineItems : null;
    const state = (session.shipping_details?.address?.state || session.customer_details?.address?.state || "").toUpperCase() || null;

    return {
      state,
      items: lineItems?.data?.map((item) => item.description ?? "").filter(Boolean) ?? [],
      mode: session.mode ?? null,
    };
  } catch {
    return null;
  }
}
