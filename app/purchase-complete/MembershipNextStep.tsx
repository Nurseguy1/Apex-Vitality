"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const focusedDefaultTreatments = new Set(["Sermorelin", "NAD+", "Glutathione"]);
const membershipCheckoutPaths: Record<string, string> = {
  "Focused Care Membership": "/start?treatment=Focused%20Care%20Membership&plan=ongoing",
  "Apex Treatment Membership": "/start?treatment=Apex%20Treatment%20Membership&plan=ongoing",
  "Apex Performance Membership": "/start?treatment=Apex%20Performance%20Membership&plan=ongoing",
  "Apex Private Client Care": "/start?treatment=Apex%20Private%20Client%20Care&plan=ongoing",
};

export default function MembershipNextStep({
  california,
  purchasedItems,
}: {
  california: boolean;
  purchasedItems: string[];
}) {
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [intendedMembership, setIntendedMembership] = useState("");

  useEffect(() => {
    setSelectedTreatment(window.sessionStorage.getItem("apex-selected-treatment") ?? "");
    setIntendedMembership(window.sessionStorage.getItem("apex-intended-membership") ?? "");
  }, []);

  if (!california) return null;

  const focusedAlreadyIncluded = purchasedItems.some((item) => /Focused Care Membership/i.test(item));
  const focusedIsDefault = focusedDefaultTreatments.has(selectedTreatment);
  const intendedMembershipPath = membershipCheckoutPaths[intendedMembership];

  if (focusedAlreadyIncluded) {
    return (
      <section className="california-membership-note">
        <div>
          <strong>Your Focused Care membership is enrolled.</strong>
          <p>Complete patient access next. You can compare higher memberships whenever you want broader care and an included 45-minute comprehensive visit.</p>
        </div>
        <Link href="/memberships">Compare higher memberships →</Link>
      </section>
    );
  }

  return (
    <section className="post-purchase-membership" aria-labelledby="choose-membership-title">
      <p className="eyebrow">Step 2 of 3</p>
      <h2 id="choose-membership-title">Choose your ongoing membership.</h2>
      <p>Your one-time $39 initial-care payment is complete. Membership is a separate checkout, so you can choose the appointment length and level of care that fit you.</p>
      {intendedMembershipPath ? (
        <div className="membership-default-callout">
          <strong>Continue with your choice: {intendedMembership}</strong>
          <p>{intendedMembership === "Focused Care Membership" ? "Focused Care supports one treatment pathway at $149 per month and includes a 15-minute initial appointment." : "After enrollment, schedule the included 45-minute comprehensive visit as your initial appointment."}</p>
          <Link className="primary-button" href={intendedMembershipPath}>Continue to membership enrollment</Link>
        </div>
      ) : focusedIsDefault && (
        <div className="membership-default-callout">
          <strong>Focused Care is your default next step · $149/month</strong>
          <p>For {selectedTreatment}, the lowest Focused Care membership keeps one treatment pathway connected and includes a 15-minute initial appointment. You may choose a higher membership with a 45-minute initial appointment instead.</p>
          <Link className="primary-button" href="/start?treatment=Focused%20Care%20Membership&plan=ongoing">Continue with Focused Care</Link>
        </div>
      )}
      <div className="post-purchase-actions">
        <Link className={focusedIsDefault || intendedMembershipPath ? "secondary-dark-button" : "primary-button"} href="/memberships">Compare all four memberships</Link>
        {!focusedIsDefault && !intendedMembershipPath && <Link className="secondary-dark-button" href="/start?treatment=Focused%20Care%20Membership&plan=ongoing">Choose Focused Care · $149/month</Link>}
      </div>
    </section>
  );
}
