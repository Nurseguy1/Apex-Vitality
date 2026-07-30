import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";

export const metadata: Metadata = {
  title: "Start Care and Schedule | Apex Vitality",
  description: "Start with a $59 Apex Vitality introductory visit, then schedule securely through CharmHealth.",
};

export default function SchedulePage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">Begin your care</p>
        <h1>Start with a focused $59 introductory visit.</h1>
        <p>Meet with a clinician, discuss your goals, and plan the labs that will guide your next step. Payment is handled securely by Stripe.</p>
      </section>
      <section className="booking-steps" aria-label="New patient booking steps">
        <article>
          <span>Focused start · 15 minutes</span>
          <h2>New Patient Lab-Planning Visit · $59</h2>
          <p>Establish care, discuss your goals, and plan the labs that will guide your next step. Apply the full $59 toward a comprehensive lab-review and treatment-planning visit booked within 90 days.</p>
          {charmLinks.labPlanningCheckout && <a className="primary-button" href={charmLinks.labPlanningCheckout} rel="noreferrer" target="_blank">Pay $59 and start ↗</a>}
        </article>
        <p className="alternate-start">Already have recent lab results from another provider or laboratory? <a href="/schedule/comprehensive">Go directly to a comprehensive visit →</a></p>
      </section>
      <aside className="screening-notice"><strong>Medical emergency?</strong> Do not use online scheduling. Call 911 or seek immediate in-person care.</aside>
      <SiteFooter />
    </main>
  );
}
