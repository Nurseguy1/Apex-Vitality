export type VerifiedCheckout = {
  state: string | null;
  items: string[];
  mode: string | null;
  products: string[];
  subscription: string | null;
  live: boolean;
};

type StripeCheckoutSession = {
  payment_status?: string;
  status?: string;
  livemode?: boolean;
  subscription?: string | null;
  mode?: string;
  customer_details?: { address?: { state?: string | null } | null } | null;
  shipping_details?: { address?: { state?: string | null } | null } | null;
};

type StripeLineItems = {
  data?: Array<{ description?: string | null; price?: { product?: string } }>;
  has_more?: boolean;
};

export async function getVerifiedCheckout(sessionId: string): Promise<VerifiedCheckout | null> {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret || !/^cs_(live|test)_[a-zA-Z0-9]+$/.test(sessionId)) return null;

  try {
    const headers = { Authorization: `Bearer ${secret}` };
    const [sessionResponse, itemsResponse] = await Promise.all([
      fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
        headers,
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      }),
      fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}/line_items?limit=10`, {
        headers,
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      }),
    ]);

    if (!sessionResponse.ok) return null;
    const session = (await sessionResponse.json()) as StripeCheckoutSession;
    if (session.payment_status !== "paid" || session.status !== "complete") return null;
    if (secret.startsWith("sk_live_") && session.livemode !== true) return null;

    const lineItems = itemsResponse.ok ? (await itemsResponse.json()) as StripeLineItems : null;
    if (!lineItems || lineItems.has_more) return null;
    const state = (session.shipping_details?.address?.state || session.customer_details?.address?.state || "").toUpperCase() || null;

    return {
      state,
      items: lineItems?.data?.map((item) => item.description ?? "").filter(Boolean) ?? [],
      mode: session.mode ?? null,
      products: lineItems.data?.flatMap((item) => item.price?.product ? [item.price.product] : []) ?? [],
      subscription: session.subscription ?? null,
      live: session.livemode === true,
    };
  } catch {
    return null;
  }
}

// Re-check the current subscription on every request. An old paid receipt must
// not unlock booking after cancellation, a failed renewal, or a product change.
export async function getVerifiedMembershipCheckout(sessionId: string, allowedProducts: readonly string[]) {
  const checkout = await getVerifiedCheckout(sessionId);
  if (!checkout || checkout.mode !== "subscription" || !checkout.subscription ||
      !checkout.products.some((product) => allowedProducts.includes(product))) return null;
  try {
    const response = await fetch(`https://api.stripe.com/v1/subscriptions/${encodeURIComponent(checkout.subscription)}?expand[]=latest_invoice`, {
      headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` },
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return null;
    const subscription = await response.json() as {
      status?: string;
      current_period_end?: number;
      livemode?: boolean;
      pause_collection?: unknown;
      latest_invoice?: { status?: string } | string | null;
      items?: { has_more?: boolean; data?: Array<{ price?: { product?: string }; current_period_end?: number }> };
    };
    const now = Date.now() / 1000;
    if (subscription.status !== "active" || subscription.pause_collection ||
        subscription.livemode !== checkout.live || subscription.items?.has_more ||
        typeof subscription.latest_invoice !== "object" || subscription.latest_invoice?.status !== "paid") return null;
    const product = subscription.items?.data?.find((item) => item.price?.product &&
      allowedProducts.includes(item.price.product) && checkout.products.includes(item.price.product) &&
      typeof (item.current_period_end ?? subscription.current_period_end) === "number" &&
      (item.current_period_end ?? subscription.current_period_end ?? 0) > now)?.price?.product;
    return product ? { ...checkout, membershipProduct: product } : null;
  } catch {
    return null;
  }
}
