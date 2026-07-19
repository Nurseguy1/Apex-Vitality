import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Telehealth Care Works | Apex Vitality",
  description: "Learn how consultation, clinical review, labs, and follow-up work at Apex Vitality.",
};

const steps = [
  ["1", "Pay and schedule", "Pay the consultation fee securely through Stripe, then choose an available 45-minute appointment through CharmHealth."],
  ["2", "Complete secure intake", "Provide your health history, medications, consent forms, and other requested information through the Charm patient portal before your visit."],
  ["3", "Meet with John Bagby, MSN, FNP-C", "Discuss symptoms, history, goals, medications, risks, and whether laboratory testing or treatment may be appropriate."],
  ["4", "Review your plan", "Receive individualized recommendations, education, and clear expectations for follow-up."],
  ["5", "Measure and adjust", "When enrolled in care, follow-up helps assess progress, tolerability, labs, and next steps."],
];

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="How it works"
        title="A straightforward process with clinical review at the center."
        description="Telehealth should feel convenient without cutting corners. Apex Vitality is designed around informed evaluation, clear next steps, and responsible follow-up."
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
        <Link className="primary-button" href="/schedule">Schedule a consultation</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
