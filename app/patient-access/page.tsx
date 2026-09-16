import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";

export const metadata: Metadata = {
  title: "Secure Patient Access | Apex Vitality",
  description: "Secure scheduling, intake, and portal access for Apex Vitality medical patients.",
};

const accessItems = [
  {
    title: "New to Apex Vitality?",
    copy: "Book a $69 consultation without a membership. Your consultation fee is credited toward your first month if you join. If you want lab orders, enroll separately in the $149/month membership.",
    href: "/memberships",
    label: "Begin care enrollment",
  },
  {
    title: "Already paid for your consultation?",
    copy: "Choose New Patient Consultation in the secure calendar and request your appointment. No membership is required and you do not need to pay again.",
    href: "/book-consultation",
    label: "Book my New Patient Consultation",
  },
  {
    title: "Complete secure intake",
    copy: "Submit health history, medication information, consent forms, and program questionnaires through the protected patient workflow.",
    href: charmLinks.portal,
    label: "Open Charm patient portal",
  },
  {
    title: "Existing patient login",
    copy: "Access appointments, assigned forms, messages, and account information in the Charm patient portal.",
    href: charmLinks.portal,
    label: "Log in to the patient portal",
  },
];

export default function PatientAccessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="patient-access-hero">
        <p className="eyebrow">Men&apos;s Health medical patients only</p>
        <h1>Secure medical-patient access through CharmHealth.</h1>
        <p>Scheduling, clinical intake, assigned forms, and patient communication for Men&apos;s Health medical care take place through Apex Vitality&apos;s secure CharmHealth workflow.</p>
        <p><strong>Coaching clients:</strong> Gut Health &amp; Metabolic Balance coaching is non-medical and does not use this portal unless a client is also separately established as a Men&apos;s Health medical patient.</p>
      </section>
      <section className="patient-access-grid">
        {accessItems.map((item, index) => (
          <article key={item.title}>
            <span>0{index + 1}</span>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
            {item.href ? (
              item.href.startsWith("/") ? <Link className="primary-button" href={item.href}>{item.label} →</Link> : <a className="primary-button" href={item.href} rel="noreferrer" target="_blank">{item.label} ↗</a>
            ) : (
              <span className="pending-button" aria-disabled="true">Connection being configured</span>
            )}
          </article>
        ))}
      </section>
      <aside className={`portal-status ${charmLinks.booking && charmLinks.portal ? "is-ready" : ""}`}>
        <strong>{charmLinks.portal ? "Secure patient portal access" : "CharmHealth connection is being prepared."}</strong>
        <p>{charmLinks.portal ? "Existing patients can access appointments and assigned intake forms in their secure Charm account. New patients can begin enrollment above." : "Please do not send medical information through ordinary email or unsecured website messages."}</p>
        {!(charmLinks.booking && charmLinks.portal) && <Link className="text-link" href="/contact">Contact Apex Vitality →</Link>}
      </aside>
      <SiteFooter />
    </main>
  );
}
