"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { ProductOffer } from "../lib/product-offers";

export default function LocationRouter({
  selectedTreatment,
  checkoutUrl,
  offer,
  intendedMembership,
}: {
  selectedTreatment: string;
  checkoutUrl: string | null;
  offer: ProductOffer | null;
  intendedMembership: string;
}) {
  const router = useRouter();
  const [state, setState] = useState("");
  const [careTermsAccepted, setCareTermsAccepted] = useState(false);
  const [coverageEligibilityAttested, setCoverageEligibilityAttested] = useState(false);
  const [recurringAccepted, setRecurringAccepted] = useState(false);
  const planLabel = offer?.planLabel ?? "";
  const unavailable = state === "OTHER";
  const isRecurring = offer?.requiresRenewalConsent === true;
  const isFixedProgram = offer?.plan === "program";
  const isMensMembership = selectedTreatment === "Focused Care Membership";
  const isMensInitial = selectedTreatment === "Men's Health" && offer?.plan === "initial";

  useEffect(() => {
    setState(window.sessionStorage.getItem("apex-checkout-state") ?? "");
    const careAccepted = window.sessionStorage.getItem("apex-care-terms-accepted") === "true";
    const coverageAccepted = window.sessionStorage.getItem("apex-coverage-eligibility-attested") === "true";
    const renewalAccepted = window.sessionStorage.getItem("apex-recurring-accepted") === "true";
    setCareTermsAccepted(isRecurring ? careAccepted && coverageAccepted && renewalAccepted : careAccepted && coverageAccepted);
    setCoverageEligibilityAttested(coverageAccepted);
    setRecurringAccepted(renewalAccepted);
  }, [isRecurring]);

  useEffect(() => {
    if (selectedTreatment && offer?.plan === "initial") {
      window.sessionStorage.setItem("apex-selected-treatment", selectedTreatment);
      if (intendedMembership) {
        window.sessionStorage.setItem("apex-intended-membership", intendedMembership);
      } else {
        window.sessionStorage.removeItem("apex-intended-membership");
      }
    }
  }, [intendedMembership, offer?.plan, selectedTreatment]);

  useEffect(() => {
    const readyForCheckout = state === "CA" && checkoutUrl && careTermsAccepted && coverageEligibilityAttested && (!isRecurring || recurringAccepted);
    if (readyForCheckout && window.sessionStorage.getItem("apex-auto-checkout-pending") === "true") {
      window.sessionStorage.removeItem("apex-auto-checkout-pending");
      window.location.assign(checkoutUrl);
    }
  }, [careTermsAccepted, checkoutUrl, coverageEligibilityAttested, isRecurring, recurringAccepted, state]);

  const reviewCareTerms = (checked: boolean) => {
    if (checked) {
      window.sessionStorage.setItem("apex-checkout-state", state);
      window.sessionStorage.setItem("apex-auto-checkout-pending", "true");
      const purchase = isRecurring ? "membership" : isFixedProgram ? "program" : "initial";
      router.push(`/agreements/self-pay?purchase=${purchase}&selection=${encodeURIComponent(selectedTreatment)}#accept`);
      return;
    }
    setCareTermsAccepted(false);
    setCoverageEligibilityAttested(false);
    setRecurringAccepted(false);
    window.sessionStorage.setItem("apex-care-terms-accepted", "false");
    window.sessionStorage.setItem("apex-coverage-eligibility-attested", "false");
    window.sessionStorage.setItem("apex-recurring-accepted", "false");
  };

  return (
    <section className="location-router" aria-labelledby="purchase-title">
      <div className="location-router-intro">
        <div className="location-router-heading">
          <p className="eyebrow">Complete your selection</p>
          <h1 id="purchase-title">{isMensInitial ? "Start with a $69 consultation." : offer?.plan === "ongoing" ? "Choose your membership." : isFixedProgram ? "Choose your three-month nutrition program." : "Start care with a one-time $69 payment."}</h1>
          {isMensInitial && <p><strong>Consultation only. No membership is required for this visit.</strong> The $69 consultation does not include lab orders or testing. Before any lab orders, you must enroll separately in the $149/month Focused Care membership. Membership includes one appointment each month and baseline and scheduled follow-up TRT labs, prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed.</p>}
          <p>{offer?.plan === "ongoing" ? "Your $149 monthly membership includes care, scheduled TRT labs, prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed. Review the renewal terms and continue to secure checkout." : isFixedProgram ? "Review the fixed program, approve the one-time payment terms, and continue to secure checkout. This program does not renew automatically. Supplements, laboratory testing, and outside services are paid separately." : isMensInitial ? "Review the consultation terms and complete the one-time $69 checkout. You can schedule the initial consultation without joining a membership. If you continue, the $149/month membership includes care, scheduled TRT labs, prescribed testosterone, supplies, and delivery." : selectedTreatment === "Establish Care" ? "If you are not sure which treatment you need, this one-time payment establishes your place in care. After you choose a membership, your initial appointment is 15 minutes with Focused Care or 45 minutes with Treatment, Performance, or Private Client. Medication is prescribed only when appropriate and is paid separately through the dispensing pharmacy." : "This standard treatment pathway begins with a one-time $69 initial-care payment. Afterward, choose the care option that fits the level of support you want and schedule the appointment included with it. Medication is prescribed only when appropriate and is paid separately through the dispensing pharmacy."}</p>
          {selectedTreatment ? (
            <p className="location-prompt"><strong>{selectedTreatment}</strong>{planLabel ? ` · ${planLabel}` : ""}</p>
          ) : (
            <p className="location-prompt">Choose a treatment before continuing.</p>
          )}
        </div>
        <div className="location-router-image">
          <Image src={isFixedProgram ? "/nutrition-support-family-v1.png" : "/location-coastal-hiking-diverse-couple-v2.png"} alt={isFixedProgram ? "Parent and child sharing a supportive nutrition routine" : "Athletic Black woman and Latino man hiking together on a coastal trail"} fill priority sizes="(max-width: 760px) 100vw, 54vw" />
        </div>
      </div>

      <div className="location-result">
        {!selectedTreatment || !planLabel ? (
          <article>
            <p className="result-kicker">Choose your program</p>
            <h2>Find the treatment option that matches your goal.</h2>
            <p>Compare available programs and choose the care you want to discuss.</p>
            <Link className="primary-button" href="/treatments">Explore treatments</Link>
          </article>
        ) : (
          <article>
            <p className="result-kicker">Clinical care</p>
            <h2>Continue with {selectedTreatment}.</h2>
            <p>{isFixedProgram ? "Your payment covers the scheduled clinical services shown below. It does not establish eligibility, guarantee a particular supplement recommendation, or guarantee a particular result." : isMensMembership ? "One monthly payment covers the care, scheduled labs, and prescribed medications listed below." : isMensInitial ? "Your $69 payment covers the initial consultation. You choose whether to join the $149/month membership afterward." : "Your payment covers the selected Apex Vitality clinical-care plan. Included items are listed below."}</p>

            {offer && (
              <section
                className={`checkout-purchase-summary${selectedTreatment === "Focused Care Membership" ? " checkout-purchase-summary-focused" : ""}`}
                aria-labelledby="checkout-summary-title"
              >
                <div className="checkout-summary-heading">
                  <div>
                    <p className="result-kicker">Purchase summary</p>
                    <h3 id="checkout-summary-title">{offer.treatment} · {offer.planLabel}</h3>
                  </div>
                  <div className="checkout-summary-price">
                    <strong>{offer.price}</strong>
                    <span>{offer.billingLabel}</span>
                  </div>
                </div>
                <h4>What’s included</h4>
                <ul>
                  {offer.included.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="checkout-summary-notices">
                  {isFixedProgram ? (
                    <p><strong>Clinical decision:</strong> Payment requests clinician review but does not guarantee eligibility, a particular nutrition or supplement recommendation, or a particular result.</p>
                  ) : (
                    <>
                      <p><strong>Clinical decision:</strong> Payment requests clinician review but does not guarantee eligibility, a prescription, a particular formulation, or a particular dose.</p>
                      <p><strong>{isMensMembership ? "Medication included:" : "Ongoing membership:"}</strong> {isMensMembership ? "Prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed are included in your $149/month membership." : "The $149/month men’s health membership includes prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed."}</p>
                    </>
                  )}
                  {(selectedTreatment === "Metabolic & Gut Health" || selectedTreatment.includes("Special Needs Nutrition")) && <p><strong>Supplements:</strong> Clinician-recommended supplements and bundles may be purchased separately through Fullscript. Supplement purchases are not included in the clinical-care payment.</p>}
                  {isRecurring ? (
                    <p><strong>Membership:</strong> This membership renews monthly at the price shown until canceled. It begins only after your separate authorization and secure Stripe checkout.</p>
                  ) : isFixedProgram ? (
                    <>
                      <p><strong>One payment:</strong> The standard $39 initial-care portion is included in the $597 program total and is not charged separately.</p>
                      <p><strong>Fixed program:</strong> This is one $597 payment for the three scheduled months shown above. It does not renew automatically. Clinical messaging, supplements, laboratory testing, and outside services are not included.</p>
                      <p><strong>Age eligibility:</strong> Children age 4+, teens, and adults may be considered. A parent or legal guardian must participate and provide required consent for a minor. All other Apex care is adult-only.</p>
                    </>
                  ) : (
                    <p><strong>Consultation only:</strong> This one-time $69 payment covers your initial consultation and does not begin a recurring charge. No membership is needed for the visit. Lab orders require a separate $149/month Focused Care membership.</p>
                  )}
                </div>
              </section>
            )}

            <label className="checkout-state-field">
              <span>Where will you be physically located for care?</span>
              <select value={state} onChange={(event) => {
                setState(event.target.value);
                window.sessionStorage.setItem("apex-checkout-state", event.target.value);
              }}>
                <option value="">Select your location</option>
                <option value="CA">California</option>
                <option value="OTHER">Outside California</option>
              </select>
            </label>

            {state === "CA" && (
              <div className="checkout-acknowledgments" aria-label="Required purchase acknowledgments">
                <label>
                  <input type="checkbox" checked={careTermsAccepted} onChange={(event) => reviewCareTerms(event.target.checked)} />
                  <span>{isRecurring ? "Review the care, self-pay, and automatic-renewal agreement to continue." : "Review the care and self-pay agreement to continue."}</span>
                </label>
              </div>
            )}

            {unavailable ? (
              <div className="scheduler-pending">
                <h3>Clinical care is currently limited to California.</h3>
                <p>Please do not purchase this program if you will be physically located outside California during care. Join us later as additional service areas become available.</p>
              </div>
            ) : state && checkoutUrl ? (
              careTermsAccepted && coverageEligibilityAttested && (!isRecurring || recurringAccepted) ? <a className="primary-button" href={checkoutUrl}>Continue to secure Stripe checkout · {offer?.price ?? ""}</a> : <p className="location-router-note"><strong>Review and accept all required acknowledgments to continue.</strong></p>
            ) : state ? (
              <div className="scheduler-pending">
                <h3>Secure checkout is being connected.</h3>
                <p>This purchase option will open as soon as the California checkout connection is finalized.</p>
              </div>
            ) : null}

            <p className="location-router-note">Checkout collects and verifies your address. You must be physically located in California when clinical care is provided. {isRecurring ? "Membership renews monthly until canceled." : isFixedProgram ? "The $597 program payment is charged once and does not renew automatically." : "The $69 payment covers your initial consultation. Membership is required only if you proceed to lab orders, and must be separately authorized."}</p>
          </article>
        )}
      </div>
      <p className="location-router-note">See <Link href="/service-areas">current service areas</Link>, <Link href="/providers">care-team information</Link>, and <Link href="/terms">purchase terms</Link>.</p>
    </section>
  );
}
