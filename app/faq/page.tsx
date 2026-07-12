import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Frequently Asked Questions | Apex Vitality" };

const questions = [
  ["Is treatment guaranteed?", "No. A consultation does not guarantee a diagnosis, prescription, or enrollment. Treatment depends on evaluation by our board-certified medical team, eligibility, and service availability."],
  ["Are medical weight-management treatments available to everyone?", "No. A licensed clinician must determine whether a treatment is medically appropriate after reviewing risks, benefits, medical history, and other relevant information."],
  ["Does Apex Vitality offer men's hormonal health care?", "The care model supports evaluation of men’s health concerns and, when clinically appropriate, individualized treatment with appropriate testing and monitoring."],
  ["How are specific treatment options selected?", "Specific options are discussed privately through the secure clinical process after evaluation by Apex Vitality's fully licensed, board-certified medical providers. Public program descriptions do not replace individualized medical recommendations."],
  ["Will I need lab work?", "Lab work may be required depending on your symptoms, medical history, requested care, and clinician recommendations."],
  ["Does everyone need specialty gut testing?", "No. Testing is selected only when the medical team believes the result is likely to answer a useful clinical question or change the care plan."],
  ["Does Apex Vitality offer longevity-focused care?", "The longevity pathway focuses on modifiable risk factors, biomarkers, recovery, body composition, and healthy-aging fundamentals. It does not promise to reverse aging or guarantee a particular result."],
  ["Are compounded or advanced therapies automatically included?", "No. Availability changes and some therapies may be unavailable. Any treatment must be lawful, clinically appropriate, sourced through an appropriately licensed pharmacy when applicable, and supported by informed consent and monitoring."],
  ["Does Apex Vitality use research-use-only products?", "No. Apex Vitality does not offer products labeled for research use only or not for human consumption as patient treatments."],
  ["Are membership prices final?", "Not yet. Program pricing, included services, service areas, cancellation terms, and payment details will be published before enrollment opens."],
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
