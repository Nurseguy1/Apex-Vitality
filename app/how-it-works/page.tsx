import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Telehealth Care Works | Apex Vitality",
  description: "Learn how assessment, personalized care planning, labs, and follow-up work at Apex Vitality.",
};

const steps = [
  ["1", "Choose your starting point", "Select a treatment, symptom, or health goal. Your selection is a request for clinical review, not a guaranteed prescription."],
  ["2", "Complete your assessment", "Submit a confidential medical intake and complete laboratory testing when clinically indicated."],
  ["3", "Meet your California clinician", "Review your history, results, options, material risks, and alternatives before a treatment decision is made."],
  ["4", "Begin a monitored plan", "If treatment is authorized, receive pharmacy coordination, follow-up, repeat testing when needed, and adjustments based on your response."],
];

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="How it works"
        title="A straightforward process with personalized care at the center."
        description="Choose a starting point, complete an assessment, meet your clinician, and begin only the treatment that is medically appropriate for you."
      />
      <section className="content-section process-page">
        <ol className="journey-list">
          {steps.map(([number, title, copy]) => (
            <li key={number}><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></li>
          ))}
        </ol>
      </section>
      <section className="care-notice">
        <strong>Not for emergencies.</strong>
        <p>If you may be experiencing a medical emergency, call 911 or seek immediate in-person care.</p>
      </section>
      <section className="portal-handoff">
        <div><p className="eyebrow">Your next step</p><h2>Ready to begin?</h2><p>Choose the care experience that fits your goals and start online today.</p></div>
        <Link className="primary-button" href="/treatments">Choose my care</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
