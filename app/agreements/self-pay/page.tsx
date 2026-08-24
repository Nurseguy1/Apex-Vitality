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
  const membershipPrice = membershipPrices[selection] ?? "$149 per month";

  return (
    <main className="self-pay-page">
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
        <p>The checkout description controls which Apex Vitality clinical services are included. Prescription medication, pharmacy charges, injection supplies, and medication shipping are always separate and paid by the patient. Laboratory testing, supplements, imaging, and other outside services are also separate unless the checkout expressly identifies them as included. You are responsible for charges you authorize and for providing accurate billing, shipping, and contact information.</p>

        <h2>{isMembership ? "Membership and automatic renewal" : isProgram ? "Fixed three-month nutrition program" : "$39 initial-care payment"}</h2>
        {isMembership ? (
          <p>The selected {selection || "Apex Vitality membership"} costs {membershipPrice} and renews monthly until canceled. It is a separate purchase from the one-time $39 initial-care payment. You authorize Apex Vitality and its payment processor to charge the payment method provided at checkout according to this schedule. You may cancel future renewals using the online cancellation method identified in your purchase confirmation or patient portal. Review the full <Link href="/agreements/recurring-payments">recurring-payment terms</Link>.</p>
        ) : isProgram ? (
          <p>The 3-Month Special Needs Nutrition Program costs $597 in one payment after the separate $39 initial-care payment. It includes one 45-minute initial visit, a personalized written nutrition and supplement plan, one 30-minute follow-up in month 2, and one 30-minute follow-up in month 3 with a final plan update. It does not renew automatically. Clinical messaging, supplements, laboratory testing, and outside services are not included. Continuing care after the program requires a separate, affirmative purchase.</p>
        ) : (
          <p>The initial-care payment is a one-time $39 charge. It does not automatically begin a recurring charge. After payment, you choose and separately authorize the applicable membership or fixed program. Focused Care at $149 per month includes a 15-minute initial appointment. The three higher memberships and the Special Needs Nutrition Program include a 45-minute comprehensive initial appointment.</p>
        )}

        {isProgram && (
          <>
            <h2>Special Needs Nutrition eligibility</h2>
            <p>The program may be considered for children age 4 and older, teens, and adults who will be physically located in California during care. A parent or legal guardian must participate in care and provide required consent for a minor. Clinical eligibility, safety needs, and whether a different level of care or referral is appropriate are determined before or during the initial clinical review.</p>
          </>
        )}

        <h2>Ineligibility refund</h2>
        <p>If the reviewing clinician determines that you are not eligible for the selected care pathway, Apex Vitality will refund the $39 initial-care payment. If a fixed program payment was also collected and program services have not begun, that program payment will also be refunded. A recurring membership charge begins only after the patient separately chooses a membership, accepts its renewal terms, and completes its checkout.</p>

        <h2>When treatment is not authorized</h2>
        <p>Clinical-care fees pay for the professional services described at checkout and do not guarantee a prescription. Medication is purchased separately from the dispensing pharmacy and is subject to that pharmacy&apos;s payment, cancellation, return, and refund policies.</p>

        <h2>Appointments</h2>
        <p>Appointment cancellation, rescheduling, and missed-visit terms are stated in the <Link href="/terms">Terms of Service</Link> and any appointment-specific notice shown before payment. If a checkout notice conflicts with this agreement, contact Apex Vitality before paying.</p>

        <h2>Questions</h2>
        <p>Submit billing questions through the designated written support channel identified in your purchase confirmation or patient portal before purchasing if you do not understand the price, included services, refund terms, or another financial term.</p>
        <AgreementAcceptance
          storageKey="apex-care-terms-accepted"
          label="I agree to these care and self-pay terms, the linked Terms, Telehealth Consent, and applicable treatment information."
          recurringStorageKey={isMembership ? "apex-recurring-accepted" : undefined}
          recurringLabel={isMembership ? `I expressly authorize the ${membershipPrice} recurring membership charge, which renews monthly until I cancel.` : undefined}
        />
        <p className="legal-updated">Effective August 23, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
