import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";
import { JsonLd } from "../seo";

export const metadata: Metadata = { title: "Frequently Asked Questions | Apex Vitality" };

const questions = [
  ["Can I ask about a specific treatment I believe will help?", "Yes. Your experience and ideas are an important part of the consultation. Your clinician will listen, explore your ideas with you, answer your questions, explain the options clearly, and build a plan designed around your goals."],
  ["What care begins at the first consultation?", "Your consultation includes individualized assessment, clinical guidance, education, and a personalized care plan. Testing, prescriptions, monitoring, and follow-up can be incorporated when they support your needs and goals."],
  ["How is a medical weight-management plan built?", "Your clinician reviews your goals, health history, medications, risks, and relevant data; explains what those findings mean; and builds an individualized nutrition, activity, medical, testing, and follow-up plan with you."],
  ["Does Apex Vitality offer men's hormonal health care?", "Yes. Care includes assessment of men’s health concerns, education about symptoms and laboratory findings, individualized treatment planning, and the testing and monitoring needed to support that plan."],
  ["Who provides my care?", "Your care is provided by a licensed medical provider. Recommendations are based on your health history, goals, available clinical data, and applicable standards of care."],
  ["Can I start with a specific treatment in mind?", "Yes. Choose the focused care area that matches your goal, complete the secure questionnaire, and bring your treatment ideas into the clinician review. Your clinician works with you to build the plan."],
  ["How is lab work used?", "Your clinician selects laboratory testing that adds useful insight, explains the results clearly, and uses them to guide progress toward your goals."],
  ["Does everyone need specialty gut testing?", "No. Testing is selected only when the clinician believes the result is likely to answer a useful clinical question or change the care plan."],
  ["Does Apex Vitality offer longevity-focused care?", "Yes. The longevity pathway helps you understand modifiable risks, biomarkers, recovery, body composition, and healthy-aging priorities, then turns that information into a practical long-term plan."],
  ["How are specific therapies incorporated?", "Assessment and clinical guidance begin with the consultation. Your clinician explains the options clearly and coordinates an individualized treatment, testing, monitoring, and follow-up plan designed around your goals."],
  ["What does it cost to establish care?", "Every patient can begin with the same one-time $39 USD initial-care payment. Focused Care includes a 15-minute initial appointment; Apex Treatment, Performance, and Private Client include a 45-minute comprehensive initial appointment. Medication, laboratory services, and membership charges are separate."],
  ["What do memberships cost?", "Focused Care is the lowest membership at $149 USD per month and includes a 15-minute initial appointment. Apex Treatment is $499 per month, Apex Performance is $749 per month, and limited-enrollment Apex Private Client Care is $1,250 per month. Those three higher memberships include a 45-minute comprehensive initial appointment."],
  ["Who can use the Special Needs Nutrition Program?", "The program is designed primarily for parents and caregivers of children age 4 and older with special needs and selective or limited diets. Teens and adults may also be considered. A parent or legal guardian must participate and provide required consent for a minor. All other Apex treatments and memberships are adult-only."],
  ["What does the Special Needs Nutrition Program cost?", "After the separate $39 initial-care payment, the fixed three-month program costs $597 total, equivalent to $199 per month. It includes one 45-minute initial visit, a written plan, and two 30-minute follow-up visits. It does not renew automatically. Clinical messaging, supplements, laboratory testing, and outside services are not included."],
  ["Can I send medical information through ordinary email?", "No. Use the secure CharmHealth patient portal for requested medical information, assigned forms, records, and appointments. Clinical questions require a scheduled visit. Do not send sensitive medical information through ordinary email or general website channels."],
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
      <PageIntro eyebrow="Common questions" title="Clear answers. A simple path into care." description="Choose your care, complete the secure intake, and move forward with personal clinician guidance." />
      <section className="faq-list">
        {questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
      <SiteFooter />
    </main>
  );
}
