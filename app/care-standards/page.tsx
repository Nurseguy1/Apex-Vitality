import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { practiceContact } from "../lib/compliance";

export const metadata: Metadata = {
  title: "Care & Compliance Standards | Apex Vitality",
  description:
    "Learn how Apex Vitality handles clinical review, health goals, privacy, and California telehealth care.",
};

export default function CareStandardsPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Care &amp; compliance standards</p>
        <h1>Clear standards for personalized care.</h1>
        <p>
          Apex Vitality is a California telehealth practice operated by {practiceContact.legalName}. Our website helps patients explore care, but treatment decisions are made by a licensed clinician after an appropriate medical evaluation.
        </p>

        <h2>Licensed clinical review</h2>
        <p>
          California care is provided by {practiceContact.clinician}. A questionnaire, product selection, or payment is a request for clinical review—not a guaranteed prescription. The clinician may approve, modify, postpone, or decline a requested treatment and may require laboratory testing, records, follow-up, or in-person evaluation.
        </p>
        <p><Link href="/providers">View clinician credentials and clinical-partner information.</Link></p>

        <h2>Individualized care planning</h2>
        <p>Your clinician discusses your health goals, lifestyle choices, and appropriate next steps during a private appointment. Care decisions follow an appropriate evaluation and informed discussion.</p>

        <h2>California service area</h2>
        <p>
          Apex Vitality currently provides Men&apos;s Health medical care to eligible adults age 18 and older who are physically located in California at the time of care. Treatment availability also depends on clinical appropriateness, pharmacy coverage, and applicable law. Gut Health &amp; Metabolic Balance is a separate non-medical coaching service and does not include diagnosis, treatment, prescribing, or individualized medical interpretation.
        </p>
        <p><Link href="/service-areas">Review current service-area information.</Link></p>

        <h2>Privacy and secure communication</h2>
        <p>
          Medical information, assigned forms, and records should be handled through the designated secure patient workflow. Ordinary email and general website channels should not be used for sensitive medical information. Clinical questions require a scheduled visit.
        </p>
        <p>
          Review our <Link href="/privacy">Privacy Notice</Link>, <Link href="/notice-of-privacy-practices">Notice of Privacy Practices</Link>, and <Link href="/telehealth-consent">Telehealth Informed Consent</Link>.
        </p>

        <h2>Transparent self-pay terms</h2>
        <p>
          Clinical-care prices and inclusions are presented before checkout. Payment does not guarantee medical eligibility or a prescription. Recurring-payment and outside-service terms are disclosed in the applicable checkout and written agreements.
        </p>
        <p>
          Review the <Link href="/agreements/self-pay">Self-Pay Agreement</Link>, <Link href="/agreements/recurring-payments">Recurring-Payment Terms</Link>, and <Link href="/terms">Terms of Service</Link>.
        </p>

        <h2>Questions or concerns</h2>
        <p>
          Use the secure patient channel for written customer-service, compliance, assigned forms, and records. Schedule a visit for clinical questions. Apex Vitality is not an emergency service; call 911 for an emergency.
        </p>
        <p className="legal-updated">Last updated August 16, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
