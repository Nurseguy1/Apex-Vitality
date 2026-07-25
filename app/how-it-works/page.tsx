import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Telehealth Care Works | Apex Vitality",
  description: "Learn how assessment, personalized care planning, labs, and follow-up work at Apex Vitality.",
};

const steps = [
  ["1", "Choose and purchase your care", "Select focused treatment access, comprehensive care, or membership support and pay securely through Stripe."],
  ["2", "Answer a few health questions", "Complete a short confidential questionnaire through the Charm patient portal."],
  ["3", "Receive personal clinician review", "Your clinician reviews your symptoms, history, medications, goals, and treatment ideas."],
  ["4", "Begin your personalized plan", "Move into treatment, pharmacy coordination, home delivery, laboratory planning, and follow-up organized around your care."],
  ["5", "Build momentum", "Use follow-up and monitoring to measure progress and keep your plan moving toward your goals."],
];

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="How it works"
        title="A straightforward process with personalized care at the center."
        description="Choose your care online, answer a few questions, receive personal clinician review, and begin a plan built around your goals."
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
        <div><p className="eyebrow">Secure next step</p><h2>Payment through Stripe. Care coordination through CharmHealth.</h2><p>Appointments, assigned health forms, medication review, secure messages, and portal access are handled through the protected patient workflow.</p></div>
        <Link className="primary-button" href="/questionnaires">Choose my care</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
