import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";
import { getVerifiedCheckout } from "../lib/stripe-checkout";

export const metadata: Metadata = {
  title: "Membership Complete | Apex Vitality",
  robots: { index: false, follow: false },
};

const membershipDetails = [
  { pattern: /Private Client/i, name: "Apex Private Client Care", duration: 45 },
  { pattern: /Performance Membership/i, name: "Apex Performance Membership", duration: 45 },
  { pattern: /Treatment Membership/i, name: "Apex Treatment Membership", duration: 45 },
  { pattern: /Focused Care Membership/i, name: "Focused Care Membership", duration: 15 },
];

export default async function MembershipCompletePage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id = "" } = await searchParams;
  const checkout = await getVerifiedCheckout(session_id);
  const membership = membershipDetails.find((option) => checkout?.items.some((item) => option.pattern.test(item)));
  const verified = checkout?.mode === "subscription" && checkout.state === "CA" && membership;

  return (
    <main>
      <SiteHeader />
      <article className="legal-page membership-complete-page">
        <p className="eyebrow">Membership enrollment</p>
        <h1>{verified ? `${membership.name} is active.` : "Complete your membership setup."}</h1>

        {verified && membership.duration === 45 ? (
          <section className="included-visit-card">
            <p className="eyebrow">Step 3 of 3</p>
            <h2>Schedule your included 45-minute comprehensive initial appointment.</h2>
            <p>This is your initial appointment for the higher membership you selected. Bring your history, goals, medications, and any recent laboratory results so your clinician can build the broader care plan with you.</p>
            {charmLinks.comprehensiveBooking ? (
              <a className="primary-button" href={charmLinks.comprehensiveBooking}>Schedule my included visit →</a>
            ) : (
              charmLinks.portal && <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">Open Charm to schedule my 45-minute appointment ↗</a>
            )}
            {!charmLinks.comprehensiveBooking && <p className="booking-help">In Charm, open <strong>Appointments</strong> and select the 45-minute comprehensive initial appointment. New patients will receive secure account instructions during onboarding.</p>}
          </section>
        ) : verified ? (
          <section className="included-visit-card">
            <p className="eyebrow">Step 3 of 3</p>
            <h2>Schedule your included 15-minute Focused Care initial appointment.</h2>
            <p>Focused Care is the lowest membership for one treatment pathway. If you prefer a 45-minute comprehensive initial appointment, compare Apex Treatment, Performance, and Private Client before scheduling.</p>
            {charmLinks.focusedBooking ? (
              <a className="primary-button" href={charmLinks.focusedBooking}>Schedule my 15-minute appointment →</a>
            ) : (
              charmLinks.portal && <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">Open Charm to schedule my 15-minute appointment ↗</a>
            )}
            {!charmLinks.focusedBooking && <p className="booking-help">In Charm, open <strong>Appointments</strong> and select the 15-minute Focused Care initial appointment. New patients will receive secure account instructions during onboarding.</p>}
            <p><Link className="membership-existing-link" href="/memberships">Compare higher memberships instead →</Link></p>
          </section>
        ) : (
          <p className="screening-notice">We could not verify a completed California membership checkout from this link. Use the return link from Stripe or continue to patient access for help.</p>
        )}

        <p><Link className="primary-button" href="/patient-access">Continue to patient access</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
