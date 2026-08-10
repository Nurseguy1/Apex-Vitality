import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Telehealth Care Works | Apex Vitality",
  description: "Learn how assessment, personalized care planning, labs, and follow-up work at Apex Vitality.",
};

const steps = [
  ["1", "Choose your program", "Start with the goals and results that matter to you."],
  ["2", "Answer a few questions", "Complete a brief, confidential online questionnaire."],
  ["3", "Connect with a qualified medical clinician", "Review your goals and build your personalized treatment plan."],
  ["4", "Begin your plan", "Your medication is delivered directly to your door, with follow-up built around your progress."],
];

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="How it works"
        title="A straightforward process with personalized care at the center."
        description="Choose your program, answer a few questions, connect with a qualified medical clinician, and begin your plan."
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
        <Link className="primary-button" href="/start">Choose my care</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
