"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const states = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
  ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
  ["DC", "District of Columbia"], ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"],
  ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"],
  ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"],
  ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
  ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"],
  ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"],
  ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"],
  ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"],
  ["SC", "South Carolina"], ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"],
  ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"],
  ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
];

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
  const planLabel = selectedPlan === "3-month" ? "Three-month supply" : selectedPlan === "1-month" ? "One-month supply" : "";
  const unavailable = state === "AL" || state === "MS";

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
                <option value="">Select your state</option>
                {states.map(([code, name]) => <option value={code} key={code}>{name}</option>)}
              </select>
            </label>

            {unavailable ? (
              <div className="scheduler-pending">
                <h3>This pathway is not currently available in your state.</h3>
                <p>Qualiphy-supported prescription care is currently unavailable in Alabama and Mississippi. Please do not purchase this program.</p>
              </div>
            ) : state && checkoutUrl ? (
              <a className="primary-button" href={checkoutUrl}>Continue to secure checkout</a>
            ) : state ? (
              <div className="scheduler-pending">
                <h3>Secure checkout is being connected.</h3>
                <p>This purchase option will open as soon as the Qualiphy and Stripe product connection is finalized.</p>
              </div>
            ) : null}

            <p className="location-router-note">Checkout collects and verifies the address used to determine your clinical pathway. California purchasers will receive an optional membership offer after purchase; membership is not required.</p>
          </article>
        )}
      </div>
      <p className="location-router-note">See <Link href="/service-areas">current service areas</Link>, <Link href="/providers">care-team information</Link>, and <Link href="/terms">purchase terms</Link>.</p>
    </section>
  );
}
