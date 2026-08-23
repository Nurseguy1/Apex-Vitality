import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { practiceContact } from "../lib/compliance";

export const metadata: Metadata = {
  title: "California Privacy Notice | Apex Vitality",
  description: "Supplemental California privacy information for Apex Vitality website visitors and patients.",
};

export default function CaliforniaPrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">California privacy</p>
        <h1>Supplemental notice for California residents</h1>
        <p>This notice supplements the Apex Vitality <Link href="/privacy">Privacy Notice</Link> and <Link href="/notice-of-privacy-practices">HIPAA Notice of Privacy Practices</Link>. Medical information governed by HIPAA or California medical-privacy law is handled under the applicable clinical privacy notice.</p>

        <h2>Information collected through the public website</h2>
        <p>Depending on how you use the website, Apex Vitality and its service providers may process identifiers and contact information, device and browser information, IP address, approximate location, website interactions, referral information, purchase and payment-status information, and information you intentionally submit. Do not place sensitive medical information in ordinary website, email, or unsecured communication fields.</p>

        <h2>Purposes of use</h2>
        <p>Information may be used to operate and secure the website, respond to requests, provide purchased services, route users to the appropriate California care workflow, process payments, prevent fraud, maintain records, understand website performance, and comply with legal obligations.</p>

        <h2>Service providers and disclosures</h2>
        <p>Information may be disclosed to hosting, security, analytics, communications, payment, scheduling, laboratory, pharmacy, professional-adviser, and clinical service providers when necessary for the stated purpose and permitted by law. Apex Vitality does not sell medical records. Any use of advertising or analytics technology must remain consistent with the privacy choices and notices presented on the website.</p>

        <h2>California requests</h2>
        <p>Subject to applicable law and exemptions, California residents may request information about collection and disclosure, correction, deletion, access, or a portable copy of certain personal information, and may exercise applicable rights concerning sale, sharing, or sensitive personal information. Apex Vitality will not discriminate against a person for exercising an applicable privacy right.</p>

        <h2>How to submit a request</h2>
        <p>Submit a written request through the secure patient portal or write to {practiceContact.legalName}, {practiceContact.addressLine1}, {practiceContact.cityStateZip}. Identity and authority may need to be verified before a request is completed. An authorized agent may submit a request when permitted by law and supported by appropriate documentation.</p>

        <h2>Clinical records</h2>
        <p>For access, amendment, restrictions, confidential communications, or other rights involving the clinical record, use the secure patient portal or follow the instructions in the <Link href="/notice-of-privacy-practices">HIPAA Notice</Link>.</p>
        <p className="legal-updated">Effective August 16, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
