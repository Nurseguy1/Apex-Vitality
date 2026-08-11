import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { practiceContact, qualiphyCare } from "../lib/compliance";

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice</h1>
        <p>Apex Vitality is operated by {practiceContact.legalName}. Do not submit protected health information or other sensitive medical details through ordinary email or general website channels.</p>
        <h2>Secure patient information</h2>
        <p>Appointments, assigned intake forms, medical information, and care-related messages should be handled through the secure CharmHealth patient workflow. Apex Vitality uses reasonable privacy and security safeguards and handles patient information according to its Notice of Privacy Practices.</p>
        <h2>Website information</h2>
        <p>Basic technical information may be processed by the hosting provider to operate, secure, and measure this website. General website activity is separate from the clinical record maintained through the patient platform.</p>
        <h2>Qualiphy-supported care</h2>
        <p>Patients using the Qualiphy-supported pathway submit medical information through Qualiphy&apos;s secure workflow. Qualiphy, the assigned medical group, treating clinician, laboratory, and dispensing pharmacy may handle information as described in their applicable notices and as permitted by law. Review Qualiphy&apos;s <a href={qualiphyCare.termsUrl} rel="noreferrer" target="_blank">Terms of Use</a> before using that pathway.</p>
        <h2>Notice of Privacy Practices</h2>
        <p>Read the full <Link href="/notice-of-privacy-practices">Apex Vitality Notice of Privacy Practices</Link> for patient rights, permitted uses and disclosures, our responsibilities, and complaint information.</p>
        <h2>Questions and privacy rights</h2>
        <p>Patients may use the secure patient portal to ask questions about medical records or communication preferences, or call {practiceContact.phone} for privacy questions.</p>
        <p className="legal-updated">Last updated August 11, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
