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
        <p>Apex Vitality currently provides Men&apos;s Health medical services to eligible adults age 18 and older who are physically located in California at the time of care.</p>
        <h2>Independent care partners</h2>
        <p>When your care involves an independent licensed service provider, its identity, role, contact information, relevant instructions, and any separate charges will be provided through the secure patient workflow. Availability depends on your location and the service needed.</p>


        <h2>Questions</h2>
        <p>Use the designated secure patient channel for customer-service needs, assigned forms, and requested records. Clinical questions require a scheduled visit. Do not send medical information through ordinary email.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
