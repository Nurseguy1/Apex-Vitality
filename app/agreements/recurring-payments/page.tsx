import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components";
import AgreementAcceptance from "../../components/AgreementAcceptance";

export const metadata: Metadata = {
  title: "Recurring Payment Terms | Apex Vitality",
  description: "Automatic renewal and recurring payment terms for Apex Vitality memberships.",
};

export default function RecurringPaymentsPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Membership billing</p>
        <h1>Recurring-payment and automatic-renewal terms</h1>
        <p>This page describes the rules that apply when you affirmatively enroll in an Apex Vitality membership or another automatically renewing service. It does not enroll you by itself.</p>

        <h2>Disclosures before enrollment</h2>
        <p>Before you agree, the checkout must clearly display the amount charged, billing frequency, renewal period, included clinical services, minimum commitment if any, and how to cancel. Prescription medication, pharmacy charges, medication supplies, and medication shipping are paid separately by the patient. These terms must appear close to the enrollment control.</p>

        <h2>Your affirmative authorization</h2>
        <p>A recurring charge may begin only after you provide separate affirmative consent to the automatic-renewal terms. You authorize Apex Vitality and its identified payment processor to charge the payment method you provide at the disclosed frequency until cancellation. Verification of that consent may be retained as required by law.</p>

        <h2>Confirmation and reminders</h2>
        <p>After enrollment, you will receive a retainable acknowledgment describing the plan, recurring price, billing frequency, cancellation policy, and cancellation method. Required renewal, annual, promotional-period, and price-change notices will be sent using the contact information associated with your account.</p>

        <h2>Cancellation</h2>
        <p>You may cancel online without unnecessary delay through the cancellation method identified at enrollment, or by using the contact method in your acknowledgment. Cancellation stops future renewals and does not retroactively refund the current billing period unless required by law or expressly stated in the plan. Clinical care already in progress will be transitioned or concluded as medically appropriate.</p>

        <h2>Clinical independence</h2>
        <p>Membership does not guarantee a prescription, refill, laboratory order, medication, or result. Clinical decisions remain with the treating clinician. Review the <Link href="/terms">Terms of Service</Link> and <Link href="/agreements/self-pay">Self-Pay Agreement</Link>.</p>

        <h2>Questions or cancellation assistance</h2>
        <p>Use the direct written cancellation method identified in your enrollment confirmation or secure patient portal. The online enrollment screen and confirmation message must identify that method before recurring memberships are activated.</p>
        <AgreementAcceptance
          storageKey="apex-recurring-accepted"
          label="I have read and agree to the recurring-payment and automatic-renewal terms."
        />
        <p className="legal-updated">Effective August 16, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
