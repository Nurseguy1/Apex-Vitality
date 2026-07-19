import { SiteFooter, SiteHeader } from "../components";

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice</h1>
        <p>Apex Vitality is operated by Elite Functional Health, a Professional Nursing Corporation. Do not submit protected health information or other sensitive medical details through ordinary email or general website channels.</p>
        <h2>Secure patient information</h2>
        <p>Appointments, assigned intake forms, medical information, and care-related messages should be handled through the secure CharmHealth patient workflow. Apex Vitality uses reasonable privacy and security safeguards and handles patient information according to its Notice of Privacy Practices.</p>
        <h2>Website information</h2>
        <p>Basic technical information may be processed by the hosting provider to operate, secure, and measure this website. General website activity is separate from the clinical record maintained through the patient platform.</p>
        <h2>Questions and privacy rights</h2>
        <p>Patients may use the secure patient portal to ask questions about medical records, communication preferences, or the Notice of Privacy Practices.</p>
        <p className="legal-updated">Last updated July 19, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
