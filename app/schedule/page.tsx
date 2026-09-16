import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Care and Schedule | Apex Vitality",
  description: "Establish Apex Vitality care with a one-time $39 initial-care payment in California.",
};

export default function SchedulePage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">Begin your care</p>
        <h1>Everyone can start care with one $39 payment.</h1>
        <p>Choose the treatment or goal you want to discuss, make the one-time initial-care payment, then select your ongoing membership and schedule the appointment included with it.</p>
        <p><strong>Currently available only to adults physically located in California at the time of care.</strong></p>
      </section>
      <section className="booking-steps" aria-label="New patient booking steps">
        <article>
          <span>Your first step</span>
          <h2>Initial-care payment · $39</h2>
          <p>Focused Care includes a 15-minute initial appointment. Apex Treatment, Performance, and Private Client include a 45-minute comprehensive initial appointment. Medication, laboratory services, and membership charges are separate.</p>
          <p>By continuing, you confirm that you will be physically located in California when clinical care is provided.</p>
          <Link className="primary-button" href="/memberships">Choose my membership and start for $39</Link>
        </article>
        <p className="alternate-start">After the initial visit, <Link href="/memberships">compare all four memberships →</Link></p>
      </section>
      <aside className="screening-notice"><strong>Medical emergency?</strong> Do not use online scheduling. Call 911 or seek immediate in-person care.</aside>
      <SiteFooter />
    </main>
  );
}
