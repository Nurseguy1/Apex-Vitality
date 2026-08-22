import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { practiceContact } from "../lib/compliance";

export const metadata: Metadata = {
  title: "Care & Compliance Standards | Apex Vitality",
  description:
    "Learn how Apex Vitality handles clinical review, prescriptions, pharmacy fulfillment, privacy, and California telehealth care.",
};

export default function CareStandardsPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Care &amp; compliance standards</p>
        <h1>Clear standards behind every treatment request.</h1>
        <p>
          Apex Vitality is a California telehealth practice operated by {practiceContact.legalName}. Our website helps patients explore care, but treatment decisions are made by a licensed clinician after an appropriate medical evaluation.
        </p>

        <h2>Licensed clinical review</h2>
        <p>
          California care is provided by {practiceContact.clinician}. A questionnaire, product selection, or payment is a request for clinical review—not a guaranteed prescription. The clinician may approve, modify, postpone, or decline a requested treatment and may require laboratory testing, records, follow-up, or in-person evaluation.
        </p>
        <p><Link href="/providers">View clinician credentials and clinical-partner information.</Link></p>

        <h2>Prescription-only treatment</h2>
        <p>
          Prescription medications are issued only when the treating clinician determines they are clinically appropriate and legally permitted. Patients must provide accurate health and medication information and complete any monitoring required for safe ongoing care.
        </p>

        <h2>Licensed-pharmacy fulfillment</h2>
        <p>
          Apex Vitality is not a pharmacy. When medication is prescribed, the prescription is sent to an independent licensed pharmacy serving the patient&apos;s location. The dispensing pharmacy is identified through the prescription, medication label, or fulfillment process. Product, formulation, packaging, and availability may vary.
        </p>

        <h2>Compounded medications</h2>
        <p>
          Some treatment plans may use a patient-specific compounded medication. Compounded drugs are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality before marketing. Your clinician determines whether a compounded option is appropriate and reviews material risks, benefits, alternatives, and monitoring with you.
        </p>

        <h2>California service area</h2>
        <p>
          Apex Vitality currently provides clinical care only to adults physically located in California at the time of care. Treatment availability also depends on clinical appropriateness, pharmacy coverage, and applicable law.
        </p>
        <p><Link href="/service-areas">Review current service-area information.</Link></p>

        <h2>Privacy and secure communication</h2>
        <p>
          Medical information, assigned forms, records, and care-related messages should be handled through the designated secure patient workflow. Ordinary email and general website channels should not be used for sensitive medical information.
        </p>
        <p>
          Review our <Link href="/privacy">Privacy Notice</Link>, <Link href="/notice-of-privacy-practices">Notice of Privacy Practices</Link>, and <Link href="/telehealth-consent">Telehealth Informed Consent</Link>.
        </p>

        <h2>Transparent self-pay terms</h2>
        <p>
          Clinical-care prices and inclusions are presented before checkout. Payment does not guarantee medical eligibility or a prescription. Medication, pharmacy charges, medication supplies, and medication shipping are paid separately by the patient. Recurring-payment and outside-service terms are disclosed in the applicable checkout and written agreements.
        </p>
        <p>
          Review the <Link href="/agreements/self-pay">Self-Pay Agreement</Link>, <Link href="/agreements/recurring-payments">Recurring-Payment Terms</Link>, and <Link href="/terms">Terms of Service</Link>.
        </p>

        <h2>Questions or concerns</h2>
        <p>
          Call <a href={`tel:${practiceContact.phone.replace(/[^\d+]/g, "")}`}>{practiceContact.phone}</a> for customer-service or compliance questions. Use the secure patient channel for medical questions. Apex Vitality is not an emergency service; call 911 for an emergency.
        </p>
        <p className="legal-updated">Last updated August 16, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
