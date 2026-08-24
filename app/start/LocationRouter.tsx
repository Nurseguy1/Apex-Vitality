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
  const [recurringAccepted, setRecurringAccepted] = useState(false);
  const planLabel = offer?.planLabel ?? "";
  const unavailable = state === "OTHER";
  const isRecurring = offer?.requiresRenewalConsent === true;

  useEffect(() => {
    setState(window.sessionStorage.getItem("apex-checkout-state") ?? "");
    const careAccepted = window.sessionStorage.getItem("apex-care-terms-accepted") === "true";
    const renewalAccepted = window.sessionStorage.getItem("apex-recurring-accepted") === "true";
    setCareTermsAccepted(isRecurring ? careAccepted && renewalAccepted : careAccepted);
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
    const readyForCheckout = state === "CA" && checkoutUrl && careTermsAccepted && (!isRecurring || recurringAccepted);
    if (readyForCheckout && window.sessionStorage.getItem("apex-auto-checkout-pending") === "true") {
      window.sessionStorage.removeItem("apex-auto-checkout-pending");
      window.location.assign(checkoutUrl);
    }
  }, [careTermsAccepted, checkoutUrl, isRecurring, recurringAccepted, state]);

  const reviewCareTerms = (checked: boolean) => {
    if (checked) {
      window.sessionStorage.setItem("apex-checkout-state", state);
      window.sessionStorage.setItem("apex-auto-checkout-pending", "true");
      const purchase = isRecurring ? "membership" : "initial";
      router.push(`/agreements/self-pay?purchase=${purchase}&selection=${encodeURIComponent(selectedTreatment)}#accept`);
      return;
    }
    setCareTermsAccepted(false);
    setRecurringAccepted(false);
    window.sessionStorage.setItem("apex-care-terms-accepted", "false");
    window.sessionStorage.setItem("apex-recurring-accepted", "false");
  };

  return (
    <section className="location-router" aria-labelledby="purchase-title">
      <div className="location-router-intro">
        <div className="location-router-heading">
          <p className="eyebrow">Complete your selection</p>
          <h1 id="purchase-title">{offer?.plan === "ongoing" ? "Choose your membership." : "Start care with a one-time $39 payment."}</h1>
          <p>{offer?.plan === "ongoing" ? "Review the membership, approve the recurring payment terms, and continue to secure checkout." : selectedTreatment === "Establish Care" ? "If you are not sure which treatment you need, this one-time payment establishes your place in care. After you choose a membership, your initial appointment is 15 minutes with Focused Care or 45 minutes with Treatment, Performance, or Private Client." : "Everyone begins with the same one-time $39 initial-care payment. Afterward, choose the membership that fits the level of care you want and schedule the appointment included with that tier."} Medication is prescribed only when appropriate and is paid separately through the dispensing pharmacy.</p>
          {selectedTreatment ? (
            <p className="location-prompt"><strong>{selectedTreatment}</strong>{planLabel ? ` · ${planLabel}` : ""}</p>
          ) : (
            <p className="location-prompt">Choose a treatment before continuing.</p>
          )}
        </div>
        <div className="location-router-image">
          <Image src="/location-coastal-hiking-diverse-couple-v2.png" alt="Athletic Black woman and Latino man hiking together on a coastal trail" fill priority sizes="(max-width: 760px) 100vw, 54vw" />
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
            <p>Your payment covers the selected Apex Vitality clinical-care plan. It does not establish eligibility or guarantee a prescription. Medication and pharmacy charges are separate and paid by you.</p>

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
                <h4>Clinical services included</h4>
                <ul>
                  {offer.included.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="checkout-summary-notices">
                  <p><strong>Clinical decision:</strong> Payment requests clinician review but does not guarantee eligibility, a prescription, a particular formulation, or a particular dose.</p>
                  <p><strong>Medication cost:</strong> Medication, pharmacy charges, supplies, and shipping are not included in this payment. They are paid separately by the patient through the dispensing pharmacy.</p>
                  {(selectedTreatment === "Metabolic & Gut Health" || selectedTreatment === "Special Needs Nutrition") && <p><strong>Supplements:</strong> Clinician-recommended supplements and bundles may be purchased separately through Fullscript. Supplement purchases are not included in the clinical-care payment.</p>}
                  {isRecurring ? (
                    <p><strong>Membership:</strong> This membership renews monthly at the price shown until canceled. It begins only after your separate authorization and secure Stripe checkout.</p>
                  ) : (
                    <p><strong>Membership comes next:</strong> This one-time $39 payment does not begin a recurring charge. Focused Care includes a 15-minute initial appointment; the three higher memberships include a 45-minute comprehensive initial appointment.</p>
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
              careTermsAccepted && (!isRecurring || recurringAccepted) ? <a className="primary-button" href={checkoutUrl}>Continue to secure Stripe checkout · {offer?.price ?? ""}</a> : <p className="location-router-note"><strong>Review and accept the required acknowledgment to continue.</strong></p>
            ) : state ? (
              <div className="scheduler-pending">
                <h3>Secure checkout is being connected.</h3>
                <p>This purchase option will open as soon as the California checkout connection is finalized.</p>
              </div>
            ) : null}

            <p className="location-router-note">Checkout collects and verifies your address. You must be physically located in California when clinical care is provided. {isRecurring ? "Membership renews monthly until canceled." : "The initial-care payment is a one-time $39 charge; membership enrollment and appointment scheduling happen afterward."}</p>
          </article>
        )}
      </div>
      <p className="location-router-note">See <Link href="/service-areas">current service areas</Link>, <Link href="/providers">care-team information</Link>, and <Link href="/terms">purchase terms</Link>.</p>
    </section>
  );
}
