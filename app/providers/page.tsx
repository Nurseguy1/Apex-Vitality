import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { practiceContact } from "../lib/compliance";

export const metadata: Metadata = {
  title: "Care Team & Clinical Partners | Apex Vitality",
  description: "Learn who provides medical care through Apex Vitality and its Qualiphy-supported telehealth pathway.",
};

export default function ProvidersPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Care team &amp; clinical partners</p>
        <h1>Know who is responsible for your care.</h1>
        <h2>California Apex Vitality care</h2>
        <p><strong>{practiceContact.clinician}</strong> provides California care through {practiceContact.legalName}, operating as Apex Vitality.</p>
        <ul>
          <li>California Nurse Practitioner license: {practiceContact.californiaLicense}</li>
          <li>National Provider Identifier: {practiceContact.npi}</li>
        </ul>
        <h2>Qualiphy-supported care</h2>
        <p>For eligible services outside the direct California pathway, Apex Vitality uses the Qualiphy platform to connect patients with an independent medical group and a clinician licensed in the state where the patient is physically located. Qualiphy operates the technology and booking platform; the assigned medical group and treating clinician are responsible for medical evaluation and treatment decisions.</p>
        <p>The treating clinician&apos;s name, credentials, and professional role are presented in the Qualiphy clinical workflow before care is provided. Patients can communicate with the treating clinician through the designated secure clinical channel.</p>
        <h2>Pharmacy fulfillment</h2>
        <p>Apex Vitality is not a pharmacy. If medication is prescribed, the prescription is sent to an independent licensed pharmacy serving the patient&apos;s location. The dispensing pharmacy&apos;s identity, contact information, medication label, and applicable instructions are provided through the pharmacy or fulfillment workflow. Pharmacy and product availability vary by state.</p>
        <h2>Questions</h2>
        <p>Call {practiceContact.phone} for customer-service questions. Use the designated secure patient channel—not ordinary email—for medical information.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
