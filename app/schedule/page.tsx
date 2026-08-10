import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";

export const metadata: Metadata = {
  title: "Start Care and Schedule | Apex Vitality",
  description: "Start with a $259 Apex Vitality initial care visit.",
};

export default function SchedulePage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">Begin your care</p>
        <h1>Start with a $259 initial care visit.</h1>
        <p>Connect with a qualified medical clinician and begin the right next step.</p>
      </section>
      <section className="booking-steps" aria-label="New patient booking steps">
        <article>
          <span>Your first step</span>
          <h2>Initial Care Visit · $259</h2>
          <p>Your visit includes a focused health and medication review plus prescription coordination or a laboratory kit.</p>
          {charmLinks.labPlanningCheckout ? (
            <a className="primary-button" href={charmLinks.labPlanningCheckout} rel="noreferrer" target="_blank">Pay $259 and schedule ↗</a>
          ) : (
            <span className="primary-button enrollment-pending" aria-label="Enrollment opening soon">Enrollment opening soon</span>
          )}
          {!charmLinks.labPlanningCheckout && <p className="enrollment-note">Online enrollment will open after the secure clinical pathway is connected.</p>}
        </article>
        <p className="alternate-start">Already have recent lab results from another provider or laboratory? <a href="/schedule/comprehensive">Go directly to a comprehensive visit →</a></p>
      </section>
      <aside className="screening-notice"><strong>Medical emergency?</strong> Do not use online scheduling. Call 911 or seek immediate in-person care.</aside>
      <SiteFooter />
    </main>
  );
}
