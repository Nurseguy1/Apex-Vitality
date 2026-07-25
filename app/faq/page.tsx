import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";
import { JsonLd } from "../seo";

export const metadata: Metadata = { title: "Frequently Asked Questions | Apex Vitality" };

const questions = [
  ["Can I ask about a specific treatment I believe may help?", "Yes. Your experience and ideas are an important part of the consultation. Your clinician will listen, take your perspective seriously, review the relevant information with you, explain the options clearly, and build a plan designed around your goals."],
  ["What care begins at the first consultation?", "Your consultation includes individualized assessment, clinical guidance, education, and a personalized care plan. Testing, prescriptions, monitoring, and follow-up can be incorporated when they support your needs and goals."],
  ["How is a medical weight-management plan built?", "Your clinician reviews your goals, health history, medications, risks, and relevant data; explains what those findings mean; and builds an individualized nutrition, activity, medical, testing, and follow-up plan with you."],
  ["Does Apex Vitality offer men's hormonal health care?", "Yes. Care includes assessment of men’s health concerns, education about symptoms and laboratory findings, individualized treatment planning, and the testing and monitoring needed to support that plan."],
  ["Who provides my care?", "Care is led by John Bagby, MSN, FNP-C, a board-certified family nurse practitioner. Recommendations are based on your health history, goals, available clinical data, and applicable standards of care."],
  ["How are specific treatment options selected?", "Specific options are discussed privately through the secure clinical process after an individualized evaluation. Public program descriptions do not replace personalized medical recommendations."],
  ["How is lab work used?", "Your clinician selects laboratory testing that adds useful insight, explains the results clearly, and uses them to guide progress toward your goals."],
  ["Does everyone need specialty gut testing?", "No. Testing is selected only when the clinician believes the result is likely to answer a useful clinical question or change the care plan."],
  ["Does Apex Vitality offer longevity-focused care?", "Yes. The longevity pathway helps you understand modifiable risks, biomarkers, recovery, body composition, and healthy-aging priorities, then turns that information into a practical long-term plan."],
  ["How are specific therapies incorporated?", "Assessment and clinical guidance begin with the consultation. Your clinician explains the options clearly and coordinates an individualized treatment, testing, monitoring, and follow-up plan designed around your goals."],
  ["What does the initial consultation cost?", "The comprehensive new patient consultation is $325 USD. It includes individualized assessment, clinical guidance, and care planning."],
  ["What do memberships cost?", "Apex Core is $225 USD per month and Apex Performance is $375 USD per month. Medications, laboratory testing, pharmacy charges, imaging, and outside services are separate unless expressly stated."],
  ["Can I send medical information through ordinary email?", "No. Use the secure CharmHealth patient portal for medical information, forms, messages, and appointments. Do not send sensitive medical information through ordinary email or general website channels."],
  ["Where is care available?", "Availability depends on clinician licensure, applicable telehealth rules, and the services offered in your location. Confirm availability before relying on the service."],
  ["Is this website medical advice?", "No. Website content is general education and does not replace professional medical advice, diagnosis, treatment, or emergency care."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <SiteHeader />
      <PageIntro eyebrow="Common questions" title="Clear answers before you take the next step." description="Know what telehealth care can—and cannot—provide before beginning." />
      <section className="faq-list">
        {questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
      <SiteFooter />
    </main>
  );
}
