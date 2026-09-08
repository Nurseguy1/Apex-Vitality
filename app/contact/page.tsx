import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { practiceContact } from "../lib/compliance";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Ask Apex Vitality</p>
        <h1>Tell us what you want to improve.</h1>
        <p>Whether you want to feel better day to day, understand your health patterns, or take a closer look at men&apos;s hormone health, Apex Vitality can help you choose a clear way forward.</p>
        <h2>Get in touch</h2>
        <p>For coaching inquiries, enrollment questions, or general information, email <a href="mailto:apexvitality5@gmail.com">apexvitality5@gmail.com</a>.</p>
        <p><a className="primary-button" href="mailto:apexvitality5@gmail.com">Email Apex Vitality</a></p>
        <p>Please keep email to general questions. Use the secure patient portal for medical details, records, or clinical information.</p>
        <h2>Gut Health &amp; Metabolic Balance</h2>
        <p>Receive personalized guidance, practical strategies, and ongoing support for nutrition, digestive wellness, energy, daily routines, and sustainable habits.</p>
        <p><Link className="primary-button" href="/gut-health">Explore Gut Health coaching</Link></p>
        <h2>Men&apos;s Hormone Health</h2>
        <p>Receive personalized evaluation, guidance, and ongoing support for symptoms, laboratory findings, and possible hormone deficiency.</p>
        <p><Link className="primary-button" href="/mens-health">Explore Men&apos;s Hormone Health</Link></p>
        <h2>Already working with Apex?</h2>
        <p>Gut Health clients can follow the contact and enrollment instructions provided to them. Men&apos;s Hormone Health patients can use the patient portal for appointments, forms, billing questions, and other administrative needs.</p>
        <p><Link className="secondary-dark-button" href="/patient-access">Open Men&apos;s Health patient portal</Link></p>
        <h2>About the practice</h2>
        <p><strong>{practiceContact.legalName}</strong><br />{practiceContact.addressLine1}<br />{practiceContact.cityStateZip}</p>
        <p>Learn more about the <Link href="/providers">Apex Vitality care team and clinical partners</Link>.</p>
        <p className="coaching-scope-note"><strong>Important information:</strong> Protect your privacy by using the secure patient workflow for medical information. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department. For an urgent medical concern, seek prompt care from an appropriate urgent-care or medical provider.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
