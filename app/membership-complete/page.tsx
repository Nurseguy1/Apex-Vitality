import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import BookingCalendar from "../components/BookingCalendar";
import CaliforniaEligibility from "../components/CaliforniaEligibility";
import { charmLinks } from "../lib/charm";
import { annualMemberships } from "../lib/membership-catalog";
import { getVerifiedMembershipCheckout } from "../lib/stripe-checkout";

export const metadata: Metadata = {
  title: "Membership Complete | Apex Vitality",
  robots: { index: false, follow: false },
};
const membershipDetails = Object.values(annualMemberships);

export default async function MembershipCompletePage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id = "" } = await searchParams;
  const checkout = await getVerifiedMembershipCheckout(session_id, membershipDetails.map((offer) => offer.product));
  const membership = membershipDetails.find((option) => option.product === checkout?.membershipProduct);
  return (
    <main>
      <SiteHeader />
      <article className="legal-page membership-complete-page">
        <p className="eyebrow">Membership enrollment</p>
        <h1>{membership ? `${membership.name} is active.` : "Complete your membership setup."}</h1>
        {membership ? (
          <CaliforniaEligibility>
            <section className="included-visit-card">
              <p className="eyebrow">Step 3 of 3</p>
              <h2>Schedule your included 45-minute comprehensive initial appointment.</h2>
              <p>Your membership includes this initial appointment. Bring your history, goals, medications, and any recent laboratory results so your clinician can build the broader care plan with you.</p>
              {charmLinks.comprehensiveBooking ? (
                <BookingCalendar calendar={charmLinks.comprehensiveBooking} title="Schedule your included appointment — select New Patient Visit (45 mins)" flow="membership" />
              ) : (
                <p>Please contact Apex for help scheduling your included appointment.</p>
              )}
            </section>
          </CaliforniaEligibility>
        ) : (
          <section className="included-visit-card">
            <h2>Confirm your membership to schedule.</h2>
            <p>We could not confirm an active, paid membership from this link. Use your Stripe checkout return link. If you have already paid, contact Apex for help before purchasing again.</p>
            <p><a href="mailto:apexvitality5@gmail.com">Contact Apex for scheduling help</a>. Keep health information in your secure patient portal.</p>
            <p><Link href="/#memberships">Review memberships →</Link></p>
          </section>
        )}
        <p><Link className="primary-button" href="/patient-access">Continue to patient access</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
