"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AgreementAcceptance({
  storageKey,
  label,
  eligibilityStorageKey,
  eligibilityLabel,
  recurringStorageKey,
  recurringLabel,
}: {
  storageKey: string;
  label: string;
  eligibilityStorageKey?: string;
  eligibilityLabel?: string;
  recurringStorageKey?: string;
  recurringLabel?: string;
}) {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);
  const [eligibilityAccepted, setEligibilityAccepted] = useState(false);
  const [recurringAccepted, setRecurringAccepted] = useState(false);

  useEffect(() => {
    setAccepted(window.sessionStorage.getItem(storageKey) === "true");
    if (eligibilityStorageKey) {
      setEligibilityAccepted(window.sessionStorage.getItem(eligibilityStorageKey) === "true");
    }
    if (recurringStorageKey) {
      setRecurringAccepted(window.sessionStorage.getItem(recurringStorageKey) === "true");
    }
  }, [eligibilityStorageKey, recurringStorageKey, storageKey]);

  const updateAccepted = (checked: boolean) => {
    setAccepted(checked);
    window.sessionStorage.setItem(storageKey, String(checked));
    if (checked && (!eligibilityStorageKey || eligibilityAccepted) && (!recurringStorageKey || recurringAccepted)) router.back();
  };

  const updateEligibilityAccepted = (checked: boolean) => {
    if (!eligibilityStorageKey) return;
    setEligibilityAccepted(checked);
    window.sessionStorage.setItem(eligibilityStorageKey, String(checked));
    if (checked && accepted && (!recurringStorageKey || recurringAccepted)) router.back();
  };

  const updateRecurringAccepted = (checked: boolean) => {
    if (!recurringStorageKey) return;
    setRecurringAccepted(checked);
    window.sessionStorage.setItem(recurringStorageKey, String(checked));
    if (checked && accepted && (!eligibilityStorageKey || eligibilityAccepted)) router.back();
  };

  return (
    <section id="accept" className="agreement-acceptance" aria-label="Agreement acknowledgment">
      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(event) => updateAccepted(event.target.checked)}
        />
        <span>{label}</span>
      </label>
      {eligibilityStorageKey && eligibilityLabel && (
        <label>
          <input
            type="checkbox"
            checked={eligibilityAccepted}
            onChange={(event) => updateEligibilityAccepted(event.target.checked)}
          />
          <span>{eligibilityLabel}</span>
        </label>
      )}
      {recurringStorageKey && recurringLabel && (
        <label>
          <input
            type="checkbox"
            checked={recurringAccepted}
            onChange={(event) => updateRecurringAccepted(event.target.checked)}
          />
          <span>{recurringLabel}</span>
        </label>
      )}
      <p>After the required boxes are checked, you return automatically to checkout.</p>
    </section>
  );
}
