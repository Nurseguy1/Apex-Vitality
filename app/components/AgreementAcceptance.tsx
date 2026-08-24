"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AgreementAcceptance({
  storageKey,
  label,
  recurringStorageKey,
  recurringLabel,
}: {
  storageKey: string;
  label: string;
  recurringStorageKey?: string;
  recurringLabel?: string;
}) {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);
  const [recurringAccepted, setRecurringAccepted] = useState(false);

  useEffect(() => {
    setAccepted(window.sessionStorage.getItem(storageKey) === "true");
    if (recurringStorageKey) {
      setRecurringAccepted(window.sessionStorage.getItem(recurringStorageKey) === "true");
    }
  }, [recurringStorageKey, storageKey]);

  const updateAccepted = (checked: boolean) => {
    setAccepted(checked);
    window.sessionStorage.setItem(storageKey, String(checked));
    if (checked && (!recurringStorageKey || recurringAccepted)) router.back();
  };

  const updateRecurringAccepted = (checked: boolean) => {
    if (!recurringStorageKey) return;
    setRecurringAccepted(checked);
    window.sessionStorage.setItem(recurringStorageKey, String(checked));
    if (checked && accepted) router.back();
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
