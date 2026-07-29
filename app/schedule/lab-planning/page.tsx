import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components";
import { charmLinks } from "../../lib/charm";

export const metadata: Metadata = {
  title: "Schedule Your Lab-Planning Visit | Apex Vitality",
  description: "Schedule your paid Apex Vitality new-patient lab-planning visit through CharmHealth.",
};

export default function LabPlanningSchedulePage() {
  return (
    <main>
      <SiteHeader />
      <section className="schedule-intro">
        <p className="eyebrow">Payment complete</p>
        <h1>Choose your 15-minute lab-planning visit.</h1>
        <p>Select <strong>New Patient Lab-Planning Visit</strong> in the secure CharmHealth calendar below. Your $59 payment can be applied to a comprehensive lab-review and treatment-planning visit booked within 90 days.</p>
      </section>
      <section className="scheduler-section">
        {charmLinks.booking ? (
          <div className="scheduler-frame">
            <iframe src={charmLinks.booking} title="Schedule an Apex Vitality new-patient lab-planning visit through CharmHealth" loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
            <p>Select <strong>New Patient Lab-Planning Visit</strong>. Secure scheduling is provided by CharmHealth.</p>
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
