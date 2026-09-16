import Link from "next/link";
import { charmLinks } from "./lib/charm";
import { practiceContact } from "./lib/compliance";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Apex Vitality home">
        <span className="brand-mark">A</span>
        <span>Apex Vitality</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/gut-health">Lifestyle Coaching</Link>
        <Link href="/mens-health">Men’s Health · California</Link>
        <Link href="/memberships">Medical Membership</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/patient-access">Medical Patient Portal</Link>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open site navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          <Link href="/gut-health">Lifestyle Coaching</Link>
          <Link href="/mens-health">Men’s Health · California</Link>
          <Link href="/memberships">Medical Membership</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/patient-access">Medical Patient Portal</Link>
        </nav>
      </details>
      <Link className="header-action" href="/#care">Choose a Route</Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Apex Vitality</strong>
        <p>Personalized guidance and support for Gut Health clients and Men&apos;s Hormone Health patients.</p>
        <address>
          {practiceContact.legalName}<br />
          {practiceContact.addressLine1}<br />
          {practiceContact.cityStateZip}
        </address>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/gut-health">Lifestyle Coaching</Link>
        <Link href="/mens-health">Men’s Health · California</Link>
        <Link href="/memberships">Medical Membership</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/patient-access">Medical Patient Portal</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/providers">Care Team &amp; Clinical Partners</Link>
        <Link href="/care-standards">Care &amp; Compliance Standards</Link>
        <Link href="/service-areas">Service Areas</Link>
      </nav>
      <nav aria-label="Legal navigation">
        <Link href="/privacy">Privacy</Link>
        <Link href="/california-privacy">California Privacy</Link>
        <Link href="/notice-of-privacy-practices">HIPAA Notice</Link>
        <Link href="/telehealth-consent">Telehealth Consent</Link>
        <Link href="/treatment-consents/hormone-therapy">Hormone Therapy Consent</Link>
        <Link href="/agreements/self-pay">Self-Pay Agreement</Link>
        <Link href="/agreements/recurring-payments">Recurring Payments</Link>
        <Link href="/terms">Terms &amp; Medical Disclaimer</Link>
      </nav>
      <p className="footer-disclaimer">
        Wellness-coaching information is educational and is not medical advice, diagnosis, or treatment.
        Medical treatment and prescriptions require an appropriate evaluation by a licensed clinician and are offered only where legally permitted and clinically appropriate.
        Apex Vitality is operated by Elite Functional Health, a Professional Nursing Corporation.
      </p>
      {charmLinks.portal && <a className="footer-portal-link" href={charmLinks.portal} rel="noreferrer" target="_blank">Secure Charm patient login ↗</a>}
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="hero-actions">
        <Link className="primary-button" href="/gut-health">Lifestyle Coaching</Link>
        <Link className="secondary-button" href="/mens-health">Men’s Health · California</Link>
      </div>
    </section>
  );
}

export function CareNotice() {
  return (
    <aside className="care-notice">
      <strong>Your assessment is the beginning of care.</strong>
      <p>
        Your clinician will assess your history, goals, symptoms, and
        available data, then provide clinical guidance and a personalized plan.
        Testing, prescriptions, monitoring, and follow-up are incorporated when useful.
      </p>
    </aside>
  );
}
