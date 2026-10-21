"use client";
import { useState, type FormEvent } from "react";

export default function CorporateBooking({ calendar, enrollmentEnabled = false }: { calendar: string; enrollmentEnabled?: boolean }) {
  const [company, setCompany] = useState("");
  const [submittedCompany, setSubmittedCompany] = useState("");
  const [email, setEmail] = useState("");
  const [enrollment, setEnrollment] = useState<{ company: string; reference: string; billing: string; test: boolean } | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const note = enrollment ? `Corporate Care — ${enrollment.company} — Ref ${enrollment.reference}` : "";

  function chooseCompany(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (company.trim()) { setSubmittedCompany(company.trim()); setError(""); }
  }
  async function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = new FormData(event.currentTarget);
    setBusy(true); setError("");
    try {
      const response = await fetch("/api/corporate-enrollment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ company: submittedCompany, email, accepted: form.get("accepted") === "yes", california: form.get("california") === "yes", website: form.get("website") }) });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error === "contact_apex" ? "An earlier enrollment needs review. Please contact Apex before enrolling again." : result.error === "company_not_configured" || result.error === "company_not_ready" ? "Please check your company name. If it is correct, contact Apex to finish enrollment." : "We could not confirm enrollment. Please retry with the same email or contact Apex for help.");
        return;
      }
      setEnrollment(result);
    } catch { setError("We could not confirm enrollment. Please retry with the same email or contact Apex for help."); }
    finally { setBusy(false); }
  }
  async function copyNote() {
    try { await navigator.clipboard.writeText(note); setCopied(true); }
    catch { setCopied(false); setError("Please select and copy the company note, then paste it into Reason for appointment."); }
  }
  return <>
    {!submittedCompany ? <form onSubmit={chooseCompany} className="corporate-company-form">
      <label htmlFor="corporate-company">Company name</label>
      <input id="corporate-company" name="company" autoComplete="organization" maxLength={120} required pattern={".*\\S.*"} value={company} onChange={e => setCompany(e.target.value)} aria-describedby="company-help" />
      <p id="company-help">Type the name of the company sponsoring your care.</p>
      <button className="primary-button" type="submit">Continue to corporate enrollment</button>
    </form> : !enrollment ? <section aria-label="Complete corporate enrollment">
      <h2>Complete your corporate enrollment.</h2>
      <p>Your company: <strong>{submittedCompany}</strong>. <button className="corporate-edit-company" type="button" disabled={busy} onClick={() => setSubmittedCompany("")}>Change company</button></p>
      {enrollmentEnabled ? <form className="corporate-company-form" onSubmit={register}>
        <label htmlFor="corporate-email">Your email address</label>
        <input id="corporate-email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={e => setEmail(e.target.value)} />
        <p>Use this same email when registering in Charm. Completing enrollment starts monthly billing to your sponsoring company, even if you schedule your appointment later. You do not enter a personal payment card.</p>
        <label className="corporate-confirmation"><input name="california" value="yes" type="checkbox" required /> I will be physically located in California during my visits.</label>
        <label className="corporate-confirmation"><input name="accepted" value="yes" type="checkbox" required /> I request company-sponsored enrollment and understand that Apex will confirm my sponsorship before my visit.</label>
        <div className="corporate-trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        {error && <p role="alert">{error}</p>}
        <button className="primary-button" type="submit" disabled={busy}>{busy ? "Completing enrollment…" : "Complete enrollment and schedule"}</button>
        <p>Enrolling does not book an appointment. Choose your time in the next step.</p>
      </form> : <p>Company enrollment is being finalized. Please <a href="mailto:apexvitality5@gmail.com">contact Apex</a> for help.</p>}
    </section> : <section aria-label="Corporate registration and scheduling">
      <h2>Your corporate enrollment is recorded.</h2>
      {enrollment.test && <p role="status">Test enrollment only. No live company charge was made.</p>}
      <p>Choose <strong>New Patient Visit (45 mins)</strong> in the calendar below and complete your patient details using the same email. You do not need to wait for company verification to schedule.</p>
      <aside className="corporate-booking-note"><h3>Include your company in the booking.</h3><p>Paste this note into <strong>Reason for appointment</strong> so Apex can match your appointment to your enrollment:</p><p className="corporate-note-text">{note}</p><button className="primary-button" type="button" onClick={copyNote}>{copied ? "Company note copied" : "Copy company note"}</button>{error && <p role="alert">{error}</p>}</aside>
      <div className="consultation-calendar"><iframe src={calendar} title="Corporate care patient registration and appointment scheduling" loading="eager" referrerPolicy="strict-origin-when-cross-origin" /></div>
    </section>}
  </>;
}
