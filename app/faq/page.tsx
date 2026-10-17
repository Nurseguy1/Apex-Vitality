import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";
import { JsonLd } from "../seo";

export const metadata: Metadata = { title: "Frequently Asked Questions | Apex Vitality" };

const questions = [
  ["Is the first consultation free?", "Yes. Your first consultation is a free 30-minute conversation with John Bagby, FNP-C, about your lifestyle and health concerns. No membership or payment is required to book."],
  ["Who can book a consultation?", "Apex Vitality serves adult men who will be physically located in California during their appointments."],
  ["What should I bring to the conversation?", "Bring your questions, health priorities, and anything you would like John to understand about your daily life. Complete any assigned intake and consent forms through CharmHealth before your appointment."],
  ["How do I book?", "Open Book your free first consultation, select California, and choose New Patient Consultation (30 mins) in the secure Charm calendar. Choose a time and enter your details. If you are new to Apex, select No when asked whether you are an existing patient."],
  ["What do the memberships cost?", "Apex Treatment is $499/month or $4,990/year. Apex Performance is $749/month or $7,490/year. Apex Private Client Care is $1,250/month or $12,500/year. Annual memberships are paid in full. Applicable tax is shown at checkout. Membership renews at the selected monthly or annual frequency until canceled."],
  ["Do I have to join a membership before my first consultation?", "No. Start with your free first consultation, then decide whether ongoing support fits your priorities. Membership is an optional, separate purchase."],
  ["How do the memberships differ?", "Apex Treatment provides ongoing reviews and individualized planning. Apex Performance adds monthly progress reviews, extended appointments, lifestyle guidance, and priority scheduling subject to availability. Apex Private Client Care adds frequent scheduled planning visits, personal coordination, and an individualized care cadence. Review the membership section for the current inclusions."],
  ["What is the 45-minute New Patient Visit?", "The 45-minute comprehensive initial appointment is included after enrollment in Apex Treatment, Performance, or Private Client Care. For your free first consultation, choose New Patient Consultation (30 mins)."],
  ["How does corporate care enrollment work?", "If your company has arranged corporate care with Apex, use Enroll here for corporate care membership. Your sponsoring company pays Apex directly, and you do not enter a personal payment card. Begin with secure booking and provide your company name to Apex. Booking alone does not activate a corporate membership; Apex completes the membership setup separately."],
  ["How do I cancel a membership renewal?", "Use the cancellation method identified in your enrollment confirmation, or contact apexvitality5@gmail.com for billing assistance. Cancellation stops future renewals. Refunds for the current period follow the membership terms and applicable law."],
  ["Where do I complete forms or access my appointments?", "Use the secure CharmHealth patient portal for assigned intake and consent forms, appointments, and patient communication. New patients receive portal instructions through the secure booking and onboarding process."],
  ["Can I email health information?", "Use the secure patient portal for health information and records. Ordinary email is for scheduling and administrative help."],
  ["Is this website medical advice?", "Website content is general information and does not replace individualized medical advice or emergency care. Call 911 or seek immediate in-person care for an emergency."],
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
      <PageIntro eyebrow="Common questions" title="Before your first conversation." description="Answers about your free 30-minute consultation, memberships, and secure patient access." />
      <section className="faq-list">
        {questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
      <SiteFooter />
    </main>
  );
}
