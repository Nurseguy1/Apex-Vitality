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
    title: "Book your free first consultation",
    copy: "Start with a free 30-minute conversation with John Bagby, FNP-C. No payment or membership is required. In the Charm calendar, select New Patient Consultation (30 mins). If you are new to Apex, select No when asked whether you are an existing patient.",
    href: "/book-consultation",
    label: "Book my free consultation",
  },
  {
    title: "Explore ongoing membership",
    copy: "After your first conversation, choose the support that fits your priorities. Apex Treatment, Performance, and Private Client Care offer monthly or annual enrollment. Each includes a 45-minute comprehensive initial appointment after enrollment.",
    href: "/#memberships",
    label: "Review memberships",
  },
  {
    title: "Company-sponsored care",
    copy: "If your company has arranged access through Apex, begin with corporate care enrollment. Your sponsoring company handles payment directly; you do not enter a personal payment card.",
    href: "/corporate-enrollment",
    label: "Enroll here for corporate care membership",
  },
  {
    title: "Complete secure intake",
    copy: "Complete your assigned health-history and consent forms through CharmHealth before your appointment. Use the portal instructions provided during onboarding.",
    href: charmLinks.portal,
    label: "Open Charm patient portal",
  },
  {
    title: "Existing patient login",
    copy: "Access appointments, assigned forms, and patient communication in your secure CharmHealth patient portal.",
    href: charmLinks.portal,
    label: "Log in to the patient portal",
  },
];

export default function PatientAccessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="patient-access-hero">
        <p className="eyebrow">Men&apos;s Health · California</p>
        <h1>Your next step in care.</h1>
        <p>Medical care is for patients physically located in California at the time of each visit. Scheduling, clinical intake, assigned forms, and patient communication take place through the secure CharmHealth workflow.</p>
        <p>Clients seeking foundational health and lifestyle coaching: <Link href="/gut-health">Follow the coaching path here</Link>. Existing coaching clients should use their Scalerize invitation.</p>
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
