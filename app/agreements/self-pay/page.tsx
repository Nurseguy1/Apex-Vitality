import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components";
import { practiceContact } from "../../lib/compliance";
import AgreementAcceptance from "../../components/AgreementAcceptance";

export const metadata: Metadata = {
  title: "Self-Pay Agreement | Apex Vitality",
  description: "Apex Vitality self-pay terms for California clinical services.",
};

const membershipPrices: Record<string, string> = {
  "Focused Care Membership": "$149 per month",
  "Apex Treatment Membership": "$499 per month",
  "Apex Performance Membership": "$749 per month",
  "Apex Private Client Care": "$1,250 per month",
};

export default async function SelfPayAgreementPage({
  searchParams,
}: {
  searchParams: Promise<{ purchase?: string; selection?: string }>;
}) {
  const { purchase = "initial", selection = "" } = await searchParams;
  const isMembership = purchase === "membership";
  const isProgram = purchase === "program";
  const isMensInitial = !isMembership && selection === "Men's Health";
  const membershipPrice = membershipPrices[selection] ?? "$149 per month";

  return (
    <main className="self-pay-page">
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Financial agreement</p>
        <h1>Agreement for self-payment of services</h1>
        <p>This agreement explains the financial terms for services purchased from {practiceContact.legalName}, operating as Apex Vitality. The exact price and included items for a purchase must be displayed before payment.</p>

        {(isMensInitial || selection === "Focused Care Membership") && <p><strong>Consultation and membership:</strong> The $39 initial consultation may be purchased without membership. It is consultation only and does not include lab orders or testing. Before any lab orders, you must separately enroll in the $149/month Focused Care membership. Membership includes one scheduled appointment each month and baseline and scheduled follow-up TRT labs, prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed. Purchasing both the consultation and first membership month totals $188. Membership renews monthly until canceled.</p>}

        <h2>Cash-pay services</h2>
        <p>Apex Vitality is a cash-pay practice unless a specific written offer states otherwise. Apex Vitality does not submit claims to health plans and does not promise that a health plan, flexible spending account, or health savings account will reimburse any charge. Upon request, Apex may provide an itemized receipt when appropriate.</p>

        <h2>Coverage eligibility</h2>
        <p>Apex Vitality does not accept patients enrolled in Medicare, Medicare Advantage, Medi-Cal/Medicaid, the Qualified Medicare Beneficiary (QMB) program, or dual-eligible coverage. By continuing, you confirm that you are not currently enrolled in any of these forms of coverage. Eligibility is based on coverage status, not age.</p>

        <h2>What your payment means</h2>
        <p>Payment starts the administrative and clinical-review process. It does not establish medical eligibility and does not guarantee a diagnosis, prescription, laboratory order, refill, medication, or result. A licensed clinician independently determines whether a requested service or treatment is appropriate.</p>

        <h2>Included and separate charges</h2>
        <p>The checkout description controls which Apex Vitality clinical services are included. The $149/month men’s health Focused Care membership includes prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed. Laboratory testing, supplements, imaging, and other outside services are also separate unless the checkout expressly identifies them as included. You are responsible for charges you authorize and for providing accurate billing, shipping, and contact information.</p>

        <h2>{isMembership ? "Membership and automatic renewal" : isProgram ? "Fixed three-month nutrition program" : "$39 initial-care payment"}</h2>
        {isMembership ? (
          <p>The selected {selection || "Apex Vitality membership"} costs {membershipPrice} and renews monthly until canceled. It is a separate purchase from the one-time $39 initial-care payment. You authorize Apex Vitality and its payment processor to charge the payment method provided at checkout according to this schedule. You may cancel future renewals using the online cancellation method identified in your purchase confirmation or patient portal. Review the full <Link href="/agreements/recurring-payments">recurring-payment terms</Link>.</p>
        ) : isProgram ? (
          <p>The 3-Month Special Needs Nutrition Program costs $597 in one payment. The standard $39 initial-care portion is included in the $597 total and is not charged separately. The program includes one 45-minute initial visit, a personalized written nutrition and supplement plan, one 30-minute follow-up in month 2, and one 30-minute follow-up in month 3 with a final plan update. It does not renew automatically. Clinical messaging, supplements, laboratory testing, and outside services are not included. Continuing care after the program requires a separate, affirmative purchase.</p>
        ) : isMensInitial ? (
          <p>The initial consultation costs $39 once. It does not start a recurring charge and does not require membership. Laboratory orders and testing are not included in this consultation. You must separately authorize and purchase the $149/month Focused Care membership before any lab orders.</p>
        ) : (
          <p>The initial consultation costs $39 once and does not require membership. It does not start a recurring charge or include laboratory orders or testing. A separate $149/month Focused Care membership is required before any lab orders.</p>
        )}

        {isProgram && (
          <>
            <h2>Special Needs Nutrition eligibility</h2>
            <p>The program may be considered for children age 4 and older, teens, and adults who will be physically located in California during care. A parent or legal guardian must participate in care and provide required consent for a minor. Clinical eligibility, safety needs, and whether a different level of care or referral is appropriate are determined before or during the initial clinical review.</p>
          </>
        )}

        <h2>Ineligibility refund</h2>
        <p>{isProgram ? "If the reviewing clinician determines that you are not eligible for the Special Needs Nutrition Program before program services begin, Apex Vitality will refund the $597 program payment." : "If the reviewing clinician determines that you are not eligible for the selected care pathway, Apex Vitality will refund the $39 initial-care payment."} A recurring membership charge begins only after the patient separately chooses a membership, accepts its renewal terms, and completes its checkout.</p>

        <h2>When treatment is not authorized</h2>
        <p>Clinical-care fees pay for the professional services described at checkout and do not guarantee a prescription. Included medication is dispensed by an independent pharmacy. Medication outside the stated membership inclusions is paid separately and is subject to the pharmacy&apos;s payment, cancellation, return, and refund policies.</p>

        <h2>Appointments</h2>
        <p>Appointment cancellation, rescheduling, and missed-visit terms are stated in the <Link href="/terms">Terms of Service</Link> and any appointment-specific notice shown before payment. If a checkout notice conflicts with this agreement, contact Apex Vitality before paying.</p>

        <h2>Questions</h2>
        <p>Submit billing questions through the designated written support channel identified in your purchase confirmation or patient portal before purchasing if you do not understand the price, included services, refund terms, or another financial term.</p>
        <AgreementAcceptance
          storageKey="apex-care-terms-accepted"
          label="I agree to these care and self-pay terms, the linked Terms, Telehealth Consent, and applicable treatment information."
          eligibilityStorageKey="apex-coverage-eligibility-attested"
          eligibilityLabel="I attest that I am not currently enrolled in Medicare, Medicare Advantage, Medi-Cal/Medicaid, the Qualified Medicare Beneficiary (QMB) program, or dual-eligible coverage."
          recurringStorageKey={isMembership ? "apex-recurring-accepted" : undefined}
          recurringLabel={isMembership ? `I expressly authorize the ${membershipPrice} recurring membership charge, which renews monthly until I cancel.` : undefined}
        />
        <p className="legal-updated">Effective September 4, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
