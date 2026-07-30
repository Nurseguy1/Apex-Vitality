import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components";
import { charmLinks } from "../../lib/charm";

export const metadata: Metadata = {
  title: "Comprehensive Visit | Apex Vitality",
  description: "Begin with a comprehensive Apex Vitality visit when you already have recent laboratory results.",
};

export default function ComprehensiveVisitPage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">Bringing labs from somewhere else?</p>
        <h1>Go directly to your comprehensive visit.</h1>
        <p>If you already completed labs through another provider or laboratory, bring those results and meet with a clinician for an in-depth review, clear guidance, and an individualized treatment plan.</p>
      </section>
      <section className="booking-steps" aria-label="Comprehensive visit booking">
        <article>
          <span>Comprehensive visit · 45 minutes</span>
          <h2>Comprehensive New Patient Consultation · $325</h2>
          <p>Review your history, goals, lifestyle, and recent lab results together, then build a personalized plan for your next steps.</p>
          {charmLinks.newPatientCheckout && <a className="primary-button" href={charmLinks.newPatientCheckout} rel="noreferrer" target="_blank">Pay $325 and schedule ↗</a>}
        </article>
        <p className="alternate-start"><a href="/schedule">← Start with the $59 introductory visit instead</a></p>
      </section>
      <aside className="screening-notice"><strong>Medical emergency?</strong> Do not use online scheduling. Call 911 or seek immediate in-person care.</aside>
      <SiteFooter />
    </main>
  );
}
