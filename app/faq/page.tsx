import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Frequently Asked Questions | Apex Vitality" };

const questions = [
  ["Is treatment guaranteed?", "No. A consultation does not guarantee a diagnosis, prescription, or enrollment. Treatment depends on evaluation by a board-certified nurse practitioner, eligibility, and service availability."],
  ["Are GLP-1 medications available to everyone?", "No. A licensed clinician must determine whether a medication is medically appropriate after reviewing risks, benefits, medical history, and other relevant information."],
  ["Does Apex Vitality offer testosterone care?", "The care model is designed to support evaluation of men’s health concerns and, when clinically appropriate, testosterone treatment with appropriate testing and monitoring."],
  ["Will I need lab work?", "Lab work may be required depending on your symptoms, medical history, requested care, and clinician recommendations."],
  ["Can I submit medical information through this website?", "Not yet. Please do not submit sensitive medical information through ordinary website or email channels. A secure patient workflow must be used for health information."],
  ["Where is care available?", "Availability depends on clinician licensure, applicable telehealth rules, and the services offered in your location. Confirm availability before relying on the service."],
  ["Is this website medical advice?", "No. Website content is general education and does not replace professional medical advice, diagnosis, treatment, or emergency care."],
];

export default function FaqPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Common questions" title="Clear answers before you take the next step." description="Know what telehealth care can—and cannot—provide before beginning." />
      <section className="faq-list">
        {questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
      <SiteFooter />
    </main>
  );
}
