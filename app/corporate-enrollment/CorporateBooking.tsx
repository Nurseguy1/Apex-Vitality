"use client";

import { useState, type FormEvent } from "react";
import CaliforniaEligibility from "../components/CaliforniaEligibility";

export default function CorporateBooking({ calendar }: { calendar: string }) {
  const [company, setCompany] = useState("");
  const [submittedCompany, setSubmittedCompany] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const bookingNote = `Corporate Care — ${submittedCompany}`;

  function continueToBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = company.trim();
    if (!name) return;
    setSubmittedCompany(name);
    setCopied(false);
    setCopyError(false);
  }

  async function copyNote() {
    try {
      await navigator.clipboard.writeText(bookingNote);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <>
      {!submittedCompany ? (
        <form onSubmit={continueToBooking} className="corporate-company-form">
          <label htmlFor="corporate-company">Company name</label>
          <input id="corporate-company" name="company" type="text" autoComplete="organization" maxLength={120} required pattern={".*\\S.*"} value={company} onChange={(event) => setCompany(event.target.value)} aria-describedby="company-help" />
          <p id="company-help">Enter the name of the company sponsoring your care.</p>
          <button className="primary-button" type="submit">Continue to registration and scheduling</button>
        </form>
      ) : (
        <section aria-label="Corporate registration and scheduling">
          <h2>Schedule your corporate care visit.</h2>
          <p>Your company: <strong>{submittedCompany}</strong>. <button className="corporate-edit-company" type="button" onClick={() => setSubmittedCompany("")}>Change company</button></p>
          <p>Choose <strong>New Patient Visit (45 mins)</strong> for your initial corporate care appointment. Complete your patient details in the secure calendar. You can book now without waiting for company confirmation or entering a personal payment card.</p>
          <aside className="corporate-booking-note">
            <h3>Include your company in the booking.</h3>
            <p>Paste the following into the calendar&apos;s <strong>Reason for appointment</strong> field so Apex can identify your sponsoring company:</p>
            <p className="corporate-note-text">{bookingNote}</p>
            <button type="button" className="primary-button" onClick={copyNote}>{copied ? "Company note copied" : "Copy company note"}</button>
            <p role="status">{copyError ? "Please select and copy the company note above, then paste it into the booking form." : copied ? "Paste the company note into Reason for appointment when completing your booking." : ""}</p>
          </aside>
          <CaliforniaEligibility>
            <div className="consultation-calendar">
              <iframe src={calendar} title="Corporate care patient registration and appointment scheduling" loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
            </div>
          </CaliforniaEligibility>
        </section>
      )}
    </>
  );
}
