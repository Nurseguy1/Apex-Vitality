import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { practiceContact } from "../lib/compliance";

export const metadata: Metadata = {
  title: "Care Team & Clinical Partners | Apex Vitality",
  description: "Learn who provides medical care through Apex Vitality in California.",
};

export default function ProvidersPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Care team &amp; clinical partners</p>
        <h1>Know who is responsible for your care.</h1>
        <h2>California clinical care</h2>
        <p><strong>{practiceContact.clinician}</strong> provides California care through {practiceContact.legalName}, operating as Apex Vitality.</p>
        <ul>
          <li>California Nurse Practitioner license: {practiceContact.californiaLicense}</li>
          <li>National Provider Identifier: {practiceContact.npi}</li>
        </ul>
        <h2>Current service area</h2>
        <p>Apex Vitality currently provides clinical services only to adults physically located in California at the time of care. The clinician&apos;s identity and credentials are disclosed before care is provided, and patients may communicate through the designated secure clinical channel.</p>
        <h2>Pharmacy fulfillment</h2>
        <p>Apex Vitality is not a pharmacy. If medication is prescribed, the prescription is sent to an independent licensed pharmacy serving the patient&apos;s location. The dispensing pharmacy&apos;s identity, contact information, medication label, and applicable instructions are provided through the pharmacy or fulfillment workflow. Pharmacy and product availability vary by state.</p>
        <h2>Questions</h2>
        <p>Call {practiceContact.phone} for customer-service questions. Use the designated secure patient channel—not ordinary email—for medical information.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
