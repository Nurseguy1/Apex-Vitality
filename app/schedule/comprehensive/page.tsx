import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components";
import { charmLinks } from "../../lib/charm";

export const metadata: Metadata = {
  title: "Comprehensive Visit | Apex Vitality",
  description: "Begin a comprehensive California Apex Vitality visit when you already have recent laboratory results.",
};

export default function ComprehensiveVisitPage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">Bringing labs from somewhere else?</p>
        <h1>Go directly to your comprehensive visit.</h1>
        <p>If you already completed labs through another provider or laboratory, bring those results and meet with a clinician for an in-depth review, clear guidance, and an individualized treatment plan.</p>
        <p><strong>Currently available only to adults physically located in California at the time of care.</strong></p>
      </section>
      <section className="booking-steps" aria-label="Comprehensive visit booking">
        <article>
          <span>Included membership visit · 45 minutes</span>
          <h2>Already choosing a higher membership?</h2>
          <p>Apex Treatment, Apex Performance, and Apex Private Client Care include a 45-minute comprehensive initial appointment after enrollment. Make the $39 initial-care payment and enroll in the membership first, then schedule from the verified confirmation page without a separate visit charge.</p>
          <Link className="primary-button" href="/memberships">Compare memberships</Link>
        </article>
        <article>
          <span>Standalone option · 45 minutes</span>
          <h2>Standalone Comprehensive Consultation · $325</h2>
          <p>Review your history, goals, lifestyle, and recent lab results together, then build a personalized plan for your next steps.</p>
          <p>By continuing, you confirm that you will be physically located in California when clinical care is provided.</p>
          {charmLinks.newPatientCheckout && <a className="primary-button" href={charmLinks.newPatientCheckout} rel="noreferrer" target="_blank">Pay $325 and schedule ↗</a>}
        </article>
        <p className="alternate-start"><Link href="/schedule">← Start with the $39 initial visit instead</Link></p>
      </section>
      <aside className="screening-notice"><strong>Medical emergency?</strong> Do not use online scheduling. Call 911 or seek immediate in-person care.</aside>
      <SiteFooter />
    </main>
  );
}
