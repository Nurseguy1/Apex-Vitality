import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { practiceContact } from "../lib/compliance";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices | Apex Vitality",
  description: "Apex Vitality Notice of Privacy Practices and patient privacy rights.",
};

export default function NoticeOfPrivacyPracticesPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">HIPAA Notice of Privacy Practices</p>
        <h1>Your information. Your rights. Our responsibilities.</h1>
        <p>This notice explains how medical information about you may be used and disclosed, how you may obtain access to that information, and the responsibilities of Apex Vitality, operated by {practiceContact.legalName}.</p>
        <h2>Your privacy rights</h2>
        <p>You may request an electronic or paper copy of your medical record; ask us to correct information; request confidential communications; ask us to limit certain uses or disclosures; request an accounting of certain disclosures; receive a paper copy of this notice; designate an authorized personal representative; and complain without retaliation.</p>
        <p>If you pay in full out of pocket for an item or service, you may ask us not to disclose that information to a health plan for payment or health-care operations unless disclosure is required by law.</p>
        <h2>Your choices</h2>
        <p>When applicable, you may tell us your preferences concerning information shared with family, caregivers, or others involved in your care or payment. We obtain written authorization before uses or disclosures that require it, including most marketing uses, the sale of protected health information, and most disclosures of psychotherapy notes. You may revoke an authorization in writing except to the extent already relied upon.</p>
        <h2>How we may use and disclose information</h2>
        <p>As permitted or required by law, we may use or disclose protected health information for treatment, payment, health-care operations, care coordination, prescribing, laboratory and pharmacy services, public-health and safety activities, health oversight, legal requirements, workers&apos; compensation, certain law-enforcement or government functions, approved research, and preventing a serious threat to health or safety.</p>
        <p>We may work with business associates that are contractually required to safeguard protected health information. Additional federal or state protections may apply to certain mental-health, substance-use-disorder, reproductive-health, HIV, genetic, or minor records.</p>
        <h2>Our responsibilities</h2>
        <p>We maintain the privacy and security of protected health information as required by law, use reasonable safeguards, notify affected individuals when legally required after a breach, follow the notice currently in effect, and do not use or disclose information in a manner not described here unless authorized or otherwise permitted by law.</p>
        <h2>Clinical partners and secure systems</h2>
        <p>Protected information may be handled by Apex Vitality clinicians and staff, CharmHealth, laboratories, licensed pharmacies, and other service providers as permitted by law and described in their applicable notices. Medical information should be submitted only through the designated secure workflow.</p>
        <h2>Questions and complaints</h2>
        <p>Contact the HIPAA Privacy Officer, Apex Vitality, at {practiceContact.addressLine1}, {practiceContact.cityStateZip}, or call {practiceContact.phone}.</p>
        <p>You may also complain to the U.S. Department of Health and Human Services Office for Civil Rights at 200 Independence Avenue SW, Washington, DC 20201, by calling 1-877-696-6775, or through the HHS website. Apex Vitality will not retaliate for a privacy complaint.</p>
        <h2>Changes to this notice</h2>
        <p>We may revise this notice and apply the revised terms to information already maintained and information received in the future. The current version will remain available on this website and upon request.</p>
        <p className="legal-updated">Effective August 13, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
