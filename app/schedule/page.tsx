import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { healthieLinks } from "../lib/healthie";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Apex Vitality",
  description: "Schedule a secure Apex Vitality telehealth consultation through Healthie.",
};

export default function SchedulePage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">Secure online scheduling</p>
        <h1>Choose your consultation.</h1>
        <p>Select an available appointment below. Scheduling is securely provided through Healthie.</p>
      </section>
      <section className="scheduler-section">
        {healthieLinks.booking ? (
          <div className="scheduler-frame">
            <iframe
              src={healthieLinks.booking}
              title="Apex Vitality appointment scheduling through Healthie"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p>Booking securely provided by <a href="https://gethealthie.com" rel="noreferrer" target="_blank">Healthie ↗</a></p>
          </div>
        ) : (
          <div className="scheduler-pending"><h2>Online scheduling is being configured.</h2><p>Please return soon. Do not send medical information through ordinary email.</p><Link className="secondary-dark-button" href="/patient-access">Return to Patient Access</Link></div>
        )}
      </section>
      <aside className="screening-notice"><strong>Medical emergency?</strong> Do not use online scheduling. Call 911 or seek immediate in-person care.</aside>
      <SiteFooter />
    </main>
  );
}
