"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener("apex-booking-finished", listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener("apex-booking-finished", listener);
  };
}

export default function BookingCalendar({ calendar, title, flow }: { calendar: string; title: string; flow: string }) {
  const key = `apex-booking-finished:${flow}`;
  const [finishedHere, setFinishedHere] = useState(false);
  const saved = useSyncExternalStore(subscribe, () => {
    try { return sessionStorage.getItem(key) === "yes"; } catch { return false; }
  }, () => false);
  const finished = finishedHere || saved;
  const heading = useRef<HTMLHeadingElement>(null);
  const calendarSection = useRef<HTMLElement>(null);
  const [dockVisible, setDockVisible] = useState(false);
  useEffect(() => {
    if (finished || !calendarSection.current) return;
    const observer = new IntersectionObserver(([entry]) => setDockVisible(entry.isIntersecting));
    observer.observe(calendarSection.current);
    return () => observer.disconnect();
  }, [finished]);
  useEffect(() => {
    if (finished) {
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [finished]);

  function finish() {
    // This is the visitor's acknowledgment, not an independently verified booking.
    setFinishedHere(true);
    try { sessionStorage.setItem(key, "yes"); } catch { /* Completion still works without storage. */ }
    window.dispatchEvent(new Event("apex-booking-finished"));
  }
  function reopen() {
    setFinishedHere(false);
    try { sessionStorage.removeItem(key); } catch { /* No stored marker to clear. */ }
    window.dispatchEvent(new Event("apex-booking-finished"));
  }

  if (finished) return <section className="booking-finished" aria-labelledby={`booking-finished-${flow}`}>
    <span className="booking-finished-icon" aria-hidden="true">✓</span>
    <h2 id={`booking-finished-${flow}`} ref={heading} tabIndex={-1}>You’re finished here.</h2>
    <p>Thank you for completing the booking steps. You can close this page.</p>
    <p><strong>Check your Charm confirmation email</strong> for your appointment date, time, and visit instructions. If you did not receive confirmation, contact Apex before booking again.</p>
    <div className="booking-finished-links"><Link className="primary-button" href="/patient-access">Go to patient access</Link><Link href="/">Return to Apex home</Link></div>
    <p>Need help? <a href="mailto:apexvitality5@gmail.com">Contact Apex</a>. Keep health information in your secure patient portal.</p>
    <button className="booking-reopen" type="button" onClick={reopen}>I still need to finish booking</button>
  </section>;

  return <section ref={calendarSection} className="booking-calendar-flow" aria-label={title}>
    <aside className="booking-finish-banner">
      <div><strong>Final step: finish here after Charm confirms your booking</strong><p>After confirmation, use the button to close the calendar and view your next steps.</p></div>
      <button className="booking-finish-button" type="button" onClick={finish}><span aria-hidden="true">✓ </span>Click here to finish</button>
    </aside>
    <div className="consultation-calendar"><iframe src={calendar} title={title} loading="eager" referrerPolicy="strict-origin-when-cross-origin" /></div>
    <div className={`booking-finish-bottom${dockVisible ? " booking-finish-dock" : ""}`}><p><strong>After Charm confirms your appointment, press:</strong></p><button className="booking-finish-button" type="button" onClick={finish}><span aria-hidden="true">✓ </span>Click here to finish</button></div>
  </section>;
}
