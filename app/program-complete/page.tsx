import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";
import { getVerifiedCheckout } from "../lib/stripe-checkout";

export const metadata: Metadata = {
  title: "Program Enrollment Complete | Apex Vitality",
  robots: { index: false, follow: false },
};

export default async function ProgramCompletePage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id = "" } = await searchParams;
  const checkout = await getVerifiedCheckout(session_id);
  const purchasedProgram = checkout?.items.some((item) => /Special Needs Nutrition.*3-Month Program/i.test(item));
  const verified = checkout?.mode === "payment" && checkout.state === "CA" && purchasedProgram;

  return (
    <main>
      <SiteHeader />
      <article className="legal-page membership-complete-page">
        <p className="eyebrow">Three-month program enrollment</p>
        <h1>{verified ? "Your Special Needs Nutrition Program is enrolled." : "Complete your program setup."}</h1>

        {verified ? (
          <section className="included-visit-card">
            <p className="eyebrow">Step 3 of 3</p>
            <h2>Schedule the included 45-minute initial visit.</h2>
            <p>Bring the current food routine, medications, supplements, relevant records, and the family&apos;s priorities. Your clinician will use the visit to build the written nutrition and supplement plan. The two included 30-minute follow-ups are scheduled as the plan progresses.</p>
            {charmLinks.comprehensiveBooking ? (
              <a className="primary-button" href={charmLinks.comprehensiveBooking}>Schedule the 45-minute visit →</a>
            ) : (
              charmLinks.portal && <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">Open Charm to schedule the 45-minute visit ↗</a>
            )}
            {!charmLinks.comprehensiveBooking && <p className="booking-help">In Charm, open <strong>Appointments</strong> and select the 45-minute comprehensive initial appointment. New patients receive secure account instructions during onboarding.</p>}
            <p className="booking-help">Clinical messaging, supplements, laboratory testing, and outside services are not included. This fixed program does not renew automatically.</p>
          </section>
        ) : (
          <p className="screening-notice">We could not verify a completed California Special Needs Nutrition Program checkout from this link. Use the return link from Stripe or continue to patient access for help.</p>
        )}

        <p><Link className="primary-button" href="/patient-access">Continue to patient access</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
