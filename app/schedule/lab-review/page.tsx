import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components";
import { charmLinks } from "../../lib/charm";

export const metadata: Metadata = {
  title: "Schedule Your Lab Review | Apex Vitality",
  description: "Schedule your paid Apex Vitality lab-review and treatment-planning visit through CharmHealth.",
};

export default function LabReviewSchedulePage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">Payment complete</p>
        <h1>Schedule your lab review and treatment-planning visit.</h1>
        <p>Your $59 lab-planning credit has been applied. Choose the matching follow-up appointment in CharmHealth below to review your results and build your next-step care plan.</p>
      </section>
      <section className="scheduler-section">
        <div className="scheduler-heading">
          <p className="eyebrow">Secure online scheduling</p>
          <h2>Select your lab-review visit.</h2>
          <p>The calendar below is powered by CharmHealth and presented in the Apex Vitality experience.</p>
        </div>
        {charmLinks.booking ? (
          <div className="scheduler-frame">
            <iframe src={charmLinks.booking} title="Schedule an Apex Vitality lab-review and treatment-planning visit through CharmHealth" loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
            <p>Secure scheduling is provided by CharmHealth.</p>
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
