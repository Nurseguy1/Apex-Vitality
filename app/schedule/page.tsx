import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Apex Vitality",
  description: "Pay for and schedule a secure Apex Vitality new patient consultation.",
};

export default function SchedulePage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">New patient consultation</p>
        <h1>Pay securely, then choose your appointment.</h1>
        <p>The comprehensive new patient consultation is $325. Payment is handled by Stripe and scheduling is handled securely by CharmHealth.</p>
      </section>
      <section className="booking-steps" aria-label="New patient booking steps">
        <article>
          <span>Step 1</span>
          <h2>Pay the $325 consultation fee</h2>
          <p>Complete secure payment through Stripe. The consultation fee does not guarantee a prescription, treatment, or membership enrollment.</p>
          {charmLinks.newPatientCheckout && <a className="primary-button" href={charmLinks.newPatientCheckout} rel="noreferrer" target="_blank">Pay $325 securely with Stripe ↗</a>}
        </article>
        <article>
          <span>Step 2</span>
          <h2>Choose your appointment</h2>
          <p>After payment, select a 45-minute New Patient Visit below. Your assigned intake and consent forms will appear in the Charm patient portal.</p>
        </article>
      </section>
      <section className="scheduler-section">
        {charmLinks.booking ? (
          <div className="scheduler-frame">
            <iframe
              src={charmLinks.booking}
              title="Apex Vitality appointment scheduling through CharmHealth"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p>Secure scheduling provided by CharmHealth. If the calendar does not load, refresh this page or contact Apex Vitality for scheduling assistance.</p>
          </div>
        ) : (
          <div className="scheduler-pending"><h2>Online scheduling is being configured.</h2><p>Please return soon. Do not send medical information through ordinary email.</p></div>
        )}
      </section>
      <aside className="screening-notice"><strong>Medical emergency?</strong> Do not use online scheduling. Call 911 or seek immediate in-person care.</aside>
      <SiteFooter />
    </main>
  );
}
