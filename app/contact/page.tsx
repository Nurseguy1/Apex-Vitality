import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { practiceContact } from "../lib/compliance";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Contact &amp; customer service</p>
        <h1>Start with the path that fits your goal.</h1>
        <h2>Men&apos;s Health medical care</h2>
        <p>For eligible adults located in California seeking a medical evaluation, laboratory review, or possible treatment.</p>
        <p><Link className="primary-button" href="/mens-health">Explore Men&apos;s Health</Link></p>
        <h2>Gut Health &amp; Metabolic Balance coaching</h2>
        <p>For adults seeking non-medical education and practical support around nutrition, digestive wellness, routines, and sustainable habits.</p>
        <p><Link className="primary-button" href="/gut-health">Explore coaching</Link></p>
        <h2>Coaching clients</h2>
        <p>Use the coaching contact and enrollment instructions provided to you. Do not use the medical patient portal for coaching unless you are also separately established as a Men&apos;s Health medical patient.</p>
        <h2>Existing medical patients</h2>
        <p>Use the Charm patient portal for appointment changes, assigned forms, billing questions, and other administrative needs. Clinical questions are addressed during scheduled visits. Stripe receipts and payment details remain available through Stripe.</p>
        <p><Link className="secondary-dark-button" href="/patient-access">Open secure patient access</Link></p>
        <h2>Practice contact</h2>
        <p><strong>{practiceContact.legalName}</strong><br />{practiceContact.addressLine1}<br />{practiceContact.cityStateZip}</p>
        <p>Use the secure patient workflow for written customer-service and billing questions.</p>
        <p>See <Link href="/providers">Care Team &amp; Clinical Partners</Link> for information about licensed medical care.</p>
        <h2>Medical privacy</h2>
        <p>Do not send medical information through ordinary email or unsecured website messages. Administrative channels are not monitored for clinical care or emergencies; clinical questions require a scheduled visit.</p>
        <h2>Emergency care</h2>
        <p>Call 911 or seek immediate in-person care for urgent or life-threatening concerns.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
