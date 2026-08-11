import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Purchase Complete | Apex Vitality",
  robots: { index: false, follow: false },
};

type StripeCheckoutSession = {
  payment_status?: string;
  customer_details?: { address?: { state?: string | null } | null } | null;
  shipping_details?: { address?: { state?: string | null } | null } | null;
};

async function getVerifiedCheckoutState(sessionId: string) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret || !sessionId.startsWith("cs_")) return null;

  try {
    const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
      headers: { Authorization: `Bearer ${secret}` },
      cache: "no-store",
    });
    if (!response.ok) return null;
    const session = (await response.json()) as StripeCheckoutSession;
    if (session.payment_status !== "paid") return null;
    return (session.shipping_details?.address?.state || session.customer_details?.address?.state || "").toUpperCase() || null;
  } catch {
    return null;
  }
}

export default async function PurchaseCompletePage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id = "" } = await searchParams;
  const verifiedState = await getVerifiedCheckoutState(session_id);
  const california = verifiedState === "CA";

  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Purchase received</p>
        <h1>Your clinical review is the next step.</h1>
        <p>Your purchase begins the care process. Watch for instructions to complete the secure medical intake and connect with the clinician assigned to review your request. A prescription is issued only when clinically appropriate and legally permitted.</p>

        {california && (
          <section className="california-membership-note">
            <div>
              <strong>California patients: want a closer care relationship?</strong>
              <p>You may add an optional Apex Vitality membership for closer follow-up, ongoing monitoring, treatment coordination, and Private Client service. Your original purchase does not require membership.</p>
            </div>
            <Link href="/memberships">Compare optional memberships →</Link>
          </section>
        )}

        {!verifiedState && (
          <p className="screening-notice">Your address will be verified through the completed checkout before any location-specific care or membership option is offered.</p>
        )}

        <p><Link className="primary-button" href="/patient-access">Continue to patient access</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
