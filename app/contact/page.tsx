import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Contact &amp; customer service</p>
        <h1>Connect through the secure patient workflow.</h1>
        <h2>New patients</h2>
        <p>Schedule a consultation through Healthie to begin the secure onboarding process.</p>
        <p><Link className="primary-button" href="/schedule">Schedule a consultation</Link></p>
        <h2>Existing patients</h2>
        <p>Use the Healthie patient portal for appointment changes, billing questions, refund requests, non-urgent care messages, and other customer-service needs.</p>
        <p><Link className="secondary-dark-button" href="/patient-access">Open secure patient access</Link></p>
        <h2>Medical privacy</h2>
        <p>Do not send medical information through ordinary email or unsecured website messages. Secure messages are reviewed during business hours and are not an emergency service.</p>
        <h2>Emergency care</h2>
        <p>Call 911 or seek immediate in-person care for urgent or life-threatening concerns.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
