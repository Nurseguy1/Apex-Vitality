import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Frequently Asked Questions | Apex Vitality" };

const questions = [
  ["Is treatment guaranteed?", "No. A consultation or membership does not guarantee a diagnosis, prescription, specific medication, or enrollment in every program. Treatment depends on individualized clinical evaluation, eligibility, and service availability."],
  ["Are medical weight-management treatments available to everyone?", "No. A licensed clinician must determine whether a treatment is medically appropriate after reviewing risks, benefits, medical history, and other relevant information."],
  ["Does Apex Vitality offer men's hormonal health care?", "The care model supports evaluation of men’s health concerns and, when clinically appropriate, individualized treatment with appropriate testing and monitoring."],
  ["Who provides my care?", "Care is led by John Bagby, MSN, FNP-C, a board-certified family nurse practitioner. Recommendations are based on your health history, goals, available clinical data, and applicable standards of care."],
  ["How are specific treatment options selected?", "Specific options are discussed privately through the secure clinical process after an individualized evaluation. Public program descriptions do not replace personalized medical recommendations."],
  ["Will I need lab work?", "Lab work may be required depending on your symptoms, medical history, requested care, and clinician recommendations."],
  ["Does everyone need specialty gut testing?", "No. Testing is selected only when the clinician believes the result is likely to answer a useful clinical question or change the care plan."],
  ["Does Apex Vitality offer longevity-focused care?", "The longevity pathway focuses on modifiable risk factors, biomarkers, recovery, body composition, and healthy-aging fundamentals. It does not promise to reverse aging or guarantee a particular result."],
  ["Are specific treatments included automatically?", "No. Recommendations depend on individualized evaluation, clinical appropriateness, informed consent, monitoring needs, and applicable law."],
  ["What does the initial consultation cost?", "The comprehensive new patient consultation is $325 USD. It includes an individualized clinical evaluation and care planning, but does not guarantee a prescription or membership enrollment."],
  ["What do memberships cost?", "Apex Core is $225 USD per month and Apex Performance is $375 USD per month. Medications, laboratory testing, pharmacy charges, imaging, and outside services are separate unless expressly stated."],
  ["Can I send medical information through ordinary email?", "No. Use the secure CharmHealth patient portal for medical information, forms, messages, and appointments. Do not send sensitive medical information through ordinary email or general website channels."],
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
