import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";
import { JsonLd } from "../seo";

export const metadata: Metadata = { title: "Frequently Asked Questions | Apex Vitality" };

const questions = [
  ["What does Men’s Hormone Health cost?", "The initial consultation is $39, with no membership required. It is consultation only and does not include lab orders or testing. If you want lab orders, you must separately enroll in the $149/month Focused Care membership. If you purchase both, the consultation and first membership month total $188. Membership renews monthly until canceled."],
  ["What does the $149/month membership include?", "Focused Care includes one scheduled clinician appointment each month, baseline and scheduled follow-up TRT labs with interpretation, prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed. Start with a separate $39 consultation, then choose the $149/month membership if you continue."],
  ["What are the two Apex Vitality paths?", "Gut Health & Metabolic Balance is educational wellness coaching for adults. Men’s Hormone Health is licensed medical care for eligible men located in California who are concerned about a possible hormone deficiency."],
  ["How do I know which path to choose?", "Choose Gut Health & Metabolic Balance for non-medical education, structure, lab-pattern education, and coaching. Choose Men’s Hormone Health if you are a man seeking medical evaluation of symptoms or laboratory findings, diagnosis, or possible prescription treatment. Contact Apex Vitality if you are unsure."],
  ["Is Men’s Hormone Health medical care?", "Yes. Men’s Hormone Health is provided through a licensed California clinician after an appropriate medical evaluation. Testing or prescriptions may be recommended when clinically appropriate, but no deficiency, treatment, or prescription is assumed or guaranteed."],
  ["Where is Men’s Hormone Health available?", "Medical care is currently limited to eligible adult men who are physically located in California at the time of care. Availability also depends on clinical appropriateness and applicable law."],
  ["What can Gut Health & Metabolic Balance coaching include?", "Coaching may include general education about food patterns, digestive wellness, sleep, stress, movement, routines, practical behavior-change support, and a personalized educational review of wellness-related laboratory patterns and functional ranges."],
  ["How are labs discussed in coaching?", "A coaching client may receive an educational review explaining what markers generally represent, what results may indicate from a wellness perspective, and questions to discuss with a licensed healthcare provider. This is different from clinical interpretation used to diagnose or treat a medical condition."],
  ["What does root-cause-oriented education mean?", "It means exploring how nutrition, digestion, sleep, stress, movement, habits, and wellness-related lab patterns may fit together. Coaching identifies possible contributing patterns and practical areas to support, track, and refine over time; it does not make a medical diagnosis."],
  ["What is outside the scope of coaching?", "Coaching does not diagnose or treat disease, prescribe medication, direct medication changes, order diagnostic tests as medical care, or provide clinical interpretation of laboratory results. Abnormal, concerning, or medically significant findings are referred to an appropriate licensed provider."],
  ["Is Gut Health & Metabolic Balance only for women?", "No. The coaching path is open to adults of any gender. Some messaging may especially resonate with women ages 35–50 and people supporting neurodivergent family members, but the service is not exclusive to those groups."],
  ["Does Apex Vitality offer peptides, NAD+, or weight-loss programs?", "No. The current public offering is intentionally limited to Gut Health & Metabolic Balance and Men’s Hormone Health."],
  ["Can I send medical information through ordinary email?", "No. Medical patients should use the secure CharmHealth patient portal for requested medical information, assigned forms, records, and appointments. Do not send sensitive medical information through ordinary email or general website channels."],
  ["Is this website medical advice?", "No. Website content is general information and does not replace individualized medical advice, diagnosis, treatment, or emergency care. Call 911 or seek immediate in-person care for an emergency."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <SiteHeader />
      <PageIntro eyebrow="Common questions" title="Two paths, clearly separated." description="Understand the difference between California medical care and non-medical wellness coaching before you begin." />
      <section className="faq-list">
        {questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
      <SiteFooter />
    </main>
  );
}
