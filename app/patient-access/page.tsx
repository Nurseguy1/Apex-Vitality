import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { healthieLinks, healthieReady } from "../lib/healthie";

export const metadata: Metadata = {
  title: "Secure Patient Access | Apex Vitality",
  description: "Secure scheduling, intake, and patient portal access for Apex Vitality clients.",
};

const accessItems = [
  {
    title: "Schedule a consultation",
    copy: "Choose an available visit type and begin the secure onboarding process.",
    href: healthieLinks.booking,
    label: "Open secure scheduling",
  },
  {
    title: "Complete secure intake",
    copy: "Submit health history, medication information, consent forms, and program questionnaires through the protected patient workflow.",
    href: healthieLinks.intake,
    label: "Open secure intake",
  },
  {
    title: "Existing patient login",
    copy: "Access appointments, assigned forms, messages, care plans, and account information in the Healthie patient portal.",
    href: healthieLinks.portal,
    label: "Log in to the patient portal",
  },
];

export default function PatientAccessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="patient-access-hero">
        <p className="eyebrow">Secure patient access</p>
        <h1>Your care journey, connected through Healthie.</h1>
        <p>Scheduling, clinical intake, assigned forms, and patient communication will take place through Apex Vitality&apos;s secure Healthie workflow.</p>
      </section>
      <section className="patient-access-grid">
        {accessItems.map((item, index) => (
          <article key={item.title}>
            <span>0{index + 1}</span>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
            {item.href ? (
              <a className="primary-button" href={item.href} rel="noreferrer" target="_blank">{item.label} ↗</a>
            ) : (
              <span className="pending-button" aria-disabled="true">Connection being configured</span>
            )}
          </article>
        ))}
      </section>
      <aside className={`healthie-status ${healthieReady ? "is-ready" : ""}`}>
        <strong>{healthieReady ? "Secure patient access is active." : "Healthie connection is being prepared."}</strong>
        <p>{healthieReady ? "Use the options above to continue through Apex Vitality’s protected patient workflow." : "Please do not send medical information through ordinary email or unsecured website messages. These buttons will activate after the clinic’s Healthie links are connected."}</p>
        {!healthieReady && <Link className="text-link" href="/questionnaires">Preview the screening questionnaires →</Link>}
      </aside>
      <SiteFooter />
    </main>
  );
}
