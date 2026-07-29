import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";

export const metadata: Metadata = {
  title: "Start Care and Schedule | Apex Vitality",
  description: "Choose an Apex Vitality new-patient starting visit, pay securely, and schedule through CharmHealth.",
};

export default function SchedulePage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">Begin your care</p>
        <h1>Choose the starting point that fits your goals.</h1>
        <p>Start with a focused lab-planning visit or begin with a comprehensive consultation. Payment is handled securely by Stripe and scheduling by CharmHealth.</p>
      </section>
      <section className="booking-steps" aria-label="New patient booking steps">
        <article>
          <span>Focused start · 15 minutes</span>
          <h2>New Patient Lab-Planning Visit · $59</h2>
          <p>Establish care, discuss your goals, and plan the labs that will guide your next step. Apply the full $59 toward a comprehensive lab-review and treatment-planning visit booked within 90 days.</p>
          {charmLinks.labPlanningCheckout && <a className="primary-button" href={charmLinks.labPlanningCheckout} rel="noreferrer" target="_blank">Pay $59 and start ↗</a>}
        </article>
        <article>
          <span>Comprehensive start · 45 minutes</span>
          <h2>Comprehensive New Patient Consultation · $325</h2>
          <p>Begin with a complete assessment, clear clinical guidance, and an individualized care plan. Patients who begin with the $59 visit pay the remaining $266 when they return within 90 days.</p>
          {charmLinks.newPatientCheckout && <a className="secondary-dark-button" href={charmLinks.newPatientCheckout} rel="noreferrer" target="_blank">Pay $325 and start ↗</a>}
        </article>
      </section>
      <section className="scheduler-section">
        {charmLinks.booking ? (
          <div className="scheduler-frame">
            <iframe
              src={charmLinks.booking}
              title="Apex Vitality appointment scheduling through CharmHealth"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p>Already paid? Choose the matching appointment above. Secure scheduling is provided by CharmHealth.</p>
          </div>
        ) : (
          <div className="scheduler-pending"><h2>Online scheduling is being configured.</h2><p>Please return soon. Do not send medical information through ordinary email.</p></div>
        )}
      </section>
      <aside className="screening-notice"><strong>Medical emergency?</strong> Do not use online scheduling. Call 911 or seek immediate in-person care.</aside>
      <SiteFooter />
    </main>
  );
}
