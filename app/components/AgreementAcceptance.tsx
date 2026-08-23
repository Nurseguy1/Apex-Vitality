"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AgreementAcceptance({
  storageKey,
  label,
}: {
  storageKey: string;
  label: string;
}) {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(window.sessionStorage.getItem(storageKey) === "true");
  }, [storageKey]);

  const updateAccepted = (checked: boolean) => {
    setAccepted(checked);
    window.sessionStorage.setItem(storageKey, String(checked));
    if (checked) router.back();
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
      <p>Checking this box returns you automatically to checkout.</p>
    </section>
  );
}
