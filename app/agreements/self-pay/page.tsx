import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components";
import { practiceContact } from "../../lib/compliance";

export const metadata: Metadata = {
  title: "Self-Pay Agreement | Apex Vitality",
  description: "Apex Vitality self-pay terms for California clinical services.",
};

export default function SelfPayAgreementPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Financial agreement</p>
        <h1>Agreement for self-payment of services</h1>
        <p>This agreement explains the financial terms for services purchased from {practiceContact.legalName}, operating as Apex Vitality. The exact price and included items for a purchase must be displayed before payment.</p>

        <h2>Cash-pay services</h2>
        <p>Apex Vitality is a cash-pay practice unless a specific written offer states otherwise. Apex Vitality does not submit claims to health plans and does not promise that a health plan, flexible spending account, or health savings account will reimburse any charge. Upon request, Apex may provide an itemized receipt when appropriate.</p>

        <h2>What your payment means</h2>
        <p>Payment starts the administrative and clinical-review process. It does not establish medical eligibility and does not guarantee a diagnosis, prescription, laboratory order, refill, medication, or result. A licensed clinician independently determines whether a requested service or treatment is appropriate.</p>

        <h2>Included and separate charges</h2>
        <p>The checkout description controls what is included. Medication, laboratory testing, injection supplies, shipping, consultations, follow-up, supplements, imaging, and outside services are separate unless the checkout expressly identifies them as included. You are responsible for charges you authorize and for providing accurate billing, shipping, and contact information.</p>

        <h2>When treatment is not authorized</h2>
        <p>If a clinician does not authorize the selected treatment, Apex Vitality will issue a full refund of that treatment purchase to the original payment method. No clinical-review fee will be retained. After treatment is authorized, medication generally cannot be returned or refunded once a pharmacy has prepared or shipped it, except when required by law or under the dispensing pharmacy&apos;s written policy.</p>

        <h2>Appointments</h2>
        <p>Appointment cancellation, rescheduling, and missed-visit terms are stated in the <Link href="/terms">Terms of Service</Link> and any appointment-specific notice shown before payment. If a checkout notice conflicts with this agreement, contact Apex Vitality before paying.</p>

        <h2>Questions</h2>
        <p>Call {practiceContact.phone} before purchase if you do not understand the price, included services, refund terms, or another financial term.</p>
        <p className="legal-updated">Effective August 16, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
