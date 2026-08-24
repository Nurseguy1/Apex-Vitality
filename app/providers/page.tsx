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
        <p>Apex Vitality currently provides clinical services to adults age 18 and older who are physically located in California at the time of care. Children age 4 and older and teens may be considered only for the Special Needs Nutrition Program with parent or legal-guardian participation and consent. All other care is adult-only.</p>
        <h2>Pharmacy fulfillment</h2>
        <p>Apex Vitality is not a pharmacy. If medication is prescribed, the prescription is sent to an independent licensed pharmacy serving the patient&apos;s location. The dispensing pharmacy&apos;s identity, contact information, medication label, and applicable instructions are provided through the pharmacy or fulfillment workflow. Pharmacy and product availability vary by state.</p>
        <h2>Questions</h2>
        <p>Use the designated secure patient channel for customer-service needs, assigned forms, and requested records. Clinical questions require a scheduled visit. Do not send medical information through ordinary email.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
