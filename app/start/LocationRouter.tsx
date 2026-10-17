"use client";

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
    const savedState = window.sessionStorage.getItem("apex-checkout-state");
    setState(savedState === "CA" || savedState === "OTHER" ? savedState : "");
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
  }, [careTermsAccepted, checkoutUrl, coverageEligibilityAttested, isMensMembership, isRecurring, recurringAccepted, state]);

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

  return <section className="location-router" aria-labelledby="purchase-title">
    <div className="location-router-intro"><h1 id="purchase-title">Enroll in {selectedTreatment}.</h1><p>Choose ongoing support for your lifestyle and health priorities.</p></div>
    {offer && <article className="checkout-purchase-summary"><h2>{offer.treatment}</h2><p><strong>{offer.price}</strong> · {offer.billingLabel}</p><ul>{offer.included.map(item => <li key={item}>{item}</li>)}</ul></article>}
    <label className="checkout-state-field"><span>Where will you be physically located for care?</span><select value={state} onChange={event => {setState(event.target.value);window.sessionStorage.setItem("apex-checkout-state",event.target.value);}}><option value="">Select your location</option><option value="CA">California</option><option value="OTHER">Outside California</option></select></label>
    {unavailable ? <p>Care is currently available for patients physically located in California.</p> : state === "CA" ? <><div className="checkout-acknowledgments"><label><input type="checkbox" checked={careTermsAccepted} onChange={event => reviewCareTerms(event.target.checked)} /><span>Review the care, self-pay, and automatic-renewal agreement to continue.</span></label></div>{careTermsAccepted && coverageEligibilityAttested && recurringAccepted ? checkoutUrl ? <a className="primary-button" href={checkoutUrl}>Continue to secure checkout · {offer?.price}</a> : <p>Online checkout for this membership is not yet available. Please contact Apex for enrollment assistance.</p> : <p>Review and accept the required agreement before continuing.</p>}</> : null}
    <p className="location-router-note">Membership renews monthly until canceled. Your first consultation is free and does not require membership.</p>
  </section>;
}
