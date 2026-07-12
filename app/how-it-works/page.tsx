import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "How Telehealth Care Works | Apex Vitality",
  description: "Learn how consultation, clinical review, labs, and follow-up work at Apex Vitality.",
};

const steps = [
  ["1", "Request a consultation", "Choose the care area you want to discuss. Do not send sensitive medical details through ordinary email or unsecured forms."],
  ["2", "Complete secure intake", "When scheduling is active, health information will be collected through an appropriate secure patient workflow."],
  ["3", "Meet with a board-certified nurse practitioner", "Discuss symptoms, history, goals, medications, risks, and whether lab work or treatment may be appropriate."],
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
      <SiteFooter />
    </main>
  );
}
