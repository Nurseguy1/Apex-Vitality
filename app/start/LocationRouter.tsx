"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LocationRouter({
  selectedPlan,
  selectedTreatment,
  checkoutUrl,
}: {
  selectedPlan: string;
  selectedTreatment: string;
  checkoutUrl: string | null;
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
          <Image src="/location-tennis-couple-early-40s-v1.png" alt="Active adults enjoying a healthy lifestyle" fill priority sizes="(max-width: 760px) 100vw, 46vw" />
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
            <p>Your payment begins the care process. It does not establish eligibility or guarantee a prescription. If the clinician does not authorize the selected treatment, the refund terms shown at checkout apply.</p>

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
                  <span>I understand the <Link href="/agreements/self-pay">self-pay terms</Link>, that payment does not guarantee a prescription, and that the checkout must disclose any nonrefundable clinical-review fee.</span>
                </label>
              </div>
            )}

            {unavailable ? (
              <div className="scheduler-pending">
                <h3>Clinical care is currently limited to California.</h3>
                <p>Please do not purchase this program if you will be physically located outside California during care. Join us later as additional service areas become available.</p>
              </div>
            ) : state && checkoutUrl ? (
              termsAccepted && financialAccepted ? <a className="primary-button" href={checkoutUrl}>Continue to secure checkout</a> : <p className="location-router-note"><strong>Review and accept both acknowledgments to continue.</strong></p>
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
