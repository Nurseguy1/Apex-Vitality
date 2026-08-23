"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ProductOffer } from "../lib/product-offers";

export default function LocationRouter({
  selectedPlan,
  selectedTreatment,
  checkoutUrl,
  offer,
}: {
  selectedPlan: string;
  selectedTreatment: string;
  checkoutUrl: string | null;
  offer: ProductOffer | null;
}) {
  const [state, setState] = useState("");
  const [careTermsAccepted, setCareTermsAccepted] = useState(false);
  const [recurringAccepted, setRecurringAccepted] = useState(false);
  const planLabel = offer?.planLabel ?? "";
  const unavailable = state === "OTHER";
  const isRecurring = selectedPlan === "ongoing";

  useEffect(() => {
    setCareTermsAccepted(window.sessionStorage.getItem("apex-care-terms-accepted") === "true");
    setRecurringAccepted(window.sessionStorage.getItem("apex-recurring-accepted") === "true");
  }, []);

  const updateCareTermsAcceptance = (checked: boolean) => {
    setCareTermsAccepted(checked);
    window.sessionStorage.setItem("apex-care-terms-accepted", String(checked));
  };

  const updateRecurringAcceptance = (checked: boolean) => {
    setRecurringAccepted(checked);
    window.sessionStorage.setItem("apex-recurring-accepted", String(checked));
  };

  return (
    <section className="location-router" aria-labelledby="purchase-title">
      <div className="location-router-intro">
        <div className="location-router-heading">
          <p className="eyebrow">Complete your selection</p>
          <h1 id="purchase-title">Start with the care you want.</h1>
          <p>Confirm your clinical-care selection and continue to secure checkout. Medication is prescribed only when appropriate and is paid separately through the dispensing pharmacy.</p>
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
              <section className="checkout-purchase-summary" aria-labelledby="checkout-summary-title">
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
                  <p><strong>Ongoing care:</strong> If you continue after the initial visit, ongoing clinical care is $149 per month. See the <Link href="/agreements/self-pay">Self-Pay Agreement</Link>.</p>
                </div>
              </section>
            )}

            <label className="checkout-state-field">
              <span>Where will you be physically located for care?</span>
              <select value={state} onChange={(event) => setState(event.target.value)}>
                <option value="">Select your location</option>
                <option value="CA">California</option>
                <option value="OTHER">Outside California</option>
              </select>
            </label>

            {state === "CA" && (
              <div className="checkout-acknowledgments" aria-label="Required purchase acknowledgments">
                <label>
                  <input type="checkbox" checked={careTermsAccepted} onChange={(event) => updateCareTermsAcceptance(event.target.checked)} />
                  <span>I agree to the <Link href="/terms">Terms</Link>, <Link href="/telehealth-consent">Telehealth Consent</Link>, applicable <Link href="/treatment-consents">treatment information</Link>, and <Link href="/agreements/self-pay">self-pay terms</Link>. I understand payment does not guarantee a prescription and medication is billed separately.</span>
                </label>
                {isRecurring && (
                  <label>
                    <input type="checkbox" checked={recurringAccepted} onChange={(event) => updateRecurringAcceptance(event.target.checked)} />
                    <span>I agree to the <Link href="/agreements/recurring-payments">recurring-payment and automatic-renewal terms</Link>, including the disclosed monthly charge and cancellation method.</span>
                  </label>
                )}
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

            <p className="location-router-note">Checkout collects and verifies your address. You must be physically located in California when clinical care is provided. Optional membership services are available but are not required.</p>
          </article>
        )}
      </div>
      <p className="location-router-note">See <Link href="/service-areas">current service areas</Link>, <Link href="/providers">care-team information</Link>, and <Link href="/terms">purchase terms</Link>.</p>
    </section>
  );
}
