"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [financialAccepted, setFinancialAccepted] = useState(false);
  const planLabel = selectedPlan === "3-month" ? "Three-month supply" : selectedPlan === "1-month" ? "One-month supply" : "";
  const unavailable = state === "OTHER";

  return (
    <section className="location-router" aria-labelledby="purchase-title">
      <div className="location-router-intro">
        <div className="location-router-heading">
          <p className="eyebrow">Complete your selection</p>
          <h1 id="purchase-title">Start with the care you want.</h1>
          <p>Confirm your selection and continue to secure checkout. Clinical review follows purchase and determines whether treatment is appropriate.</p>
          {selectedTreatment ? (
            <p className="location-prompt"><strong>{selectedTreatment}</strong>{planLabel ? ` · ${planLabel}` : ""}</p>
          ) : (
            <p className="location-prompt">Choose a treatment before continuing.</p>
          )}
        </div>
        <div className="location-router-image">
          <Image src="/location-tennis-couple-athletic-v2.png" alt="Athletic man and woman playing tennis together" fill priority sizes="(max-width: 760px) 100vw, 54vw" />
        </div>
      </div>

      <div className="location-result">
        {!selectedTreatment || !planLabel ? (
          <article>
            <p className="result-kicker">Choose your program</p>
            <h2>Find the treatment option that matches your goal.</h2>
            <p>Compare available programs and select a one- or three-month option to continue.</p>
            <Link className="primary-button" href="/treatments">Explore treatments</Link>
          </article>
        ) : (
          <article>
            <p className="result-kicker">Purchase-first care</p>
            <h2>Continue with {selectedTreatment}.</h2>
            <p>Your payment begins the care process. It does not establish eligibility or guarantee a prescription. If the clinician does not authorize the selected treatment, Apex Vitality will issue a full refund of the treatment purchase.</p>

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
                <h4>Included in this price</h4>
                <ul>
                  {offer.included.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="checkout-summary-notices">
                  <p><strong>Clinical decision:</strong> Payment requests clinician review but does not guarantee eligibility, a prescription, a particular formulation, or a particular dose.</p>
                  <p><strong>Pharmacy fulfillment:</strong> Medication is dispensed only after authorization and a valid prescription. The dispensing pharmacy and final medication details are identified through the prescription and fulfillment workflow.</p>
                  <p><strong>If treatment is not authorized:</strong> Apex Vitality will issue a full refund of this treatment purchase to the original payment method. No clinical-review fee will be retained. See the <Link href="/agreements/self-pay">Self-Pay Agreement</Link>.</p>
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
                  <input type="checkbox" checked={termsAccepted} onChange={(event) => setTermsAccepted(event.target.checked)} />
                  <span>I have reviewed the <Link href="/terms">Terms</Link>, <Link href="/telehealth-consent">Telehealth Consent</Link>, and applicable <Link href="/treatment-consents">treatment information</Link>.</span>
                </label>
                <label>
                  <input type="checkbox" checked={financialAccepted} onChange={(event) => setFinancialAccepted(event.target.checked)} />
                  <span>I understand the <Link href="/agreements/self-pay">self-pay terms</Link>, that payment does not guarantee a prescription, and that I will receive a full refund of this treatment purchase if the clinician does not authorize the selected treatment.</span>
                </label>
              </div>
            )}

            {unavailable ? (
              <div className="scheduler-pending">
                <h3>Clinical care is currently limited to California.</h3>
                <p>Please do not purchase this program if you will be physically located outside California during care. Join us later as additional service areas become available.</p>
              </div>
            ) : state && checkoutUrl ? (
              termsAccepted && financialAccepted ? <a className="primary-button" href={checkoutUrl}>Continue to secure Stripe checkout · {offer?.price ?? ""}</a> : <p className="location-router-note"><strong>Review and accept both acknowledgments to continue.</strong></p>
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
