import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { getVerifiedCheckout } from "../lib/stripe-checkout";
import MembershipNextStep from "./MembershipNextStep";

export const metadata: Metadata = {
  title: "Purchase Complete | Apex Vitality",
  robots: { index: false, follow: false },
};

export default async function PurchaseCompletePage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id = "" } = await searchParams;
  const checkout = await getVerifiedCheckout(session_id);
  const california = checkout?.state === "CA";

  return (
    <main>
      <SiteHeader />
      <article className="legal-page purchase-complete-page">
        <p className="eyebrow">$39 initial-care payment received</p>
        <h1>Complete the care option that comes next.</h1>
        <p>Your payment establishes your place in the care process. Choose and enroll in the applicable membership or fixed program next, then schedule the initial appointment included with it. A prescription is issued only when clinically appropriate and legally permitted.</p>

        <MembershipNextStep california={california} purchasedItems={checkout?.items ?? []} />

        {!checkout && (
          <p className="screening-notice">We could not verify this checkout from the current link. Use the purchase-complete link from your Stripe receipt or continue to patient access for help.</p>
        )}
        {checkout && !california && (
          <p className="screening-notice">Membership and clinical care are currently available only when you are physically located in California.</p>
        )}

        <p><Link className="primary-button" href="/patient-access">Continue to patient access</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
