import Link from "next/link";
import { charmLinks } from "./lib/charm";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Apex Vitality home">
        <span className="brand-mark">A</span>
        <span>Apex Vitality</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/memberships">Memberships</Link>
        <Link href="/gut-health">Gut Health</Link>
        <Link href="/functional-health">Longevity &amp; Functional Health</Link>
        <Link href="/nad-plus">NAD+</Link>
        <Link href="/mens-health">Men&apos;s Health</Link>
        <Link href="/womens-health">Women&apos;s Health &amp; Healthy Aging</Link>
        <Link href="/how-it-works">How It Works</Link>
      </nav>
      <Link className="header-action" href="/questionnaires">Get Started</Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Apex Vitality</strong>
        <p>Personalized telehealth care from licensed medical providers.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/gut-health">Gut Health</Link>
        <Link href="/weight-loss">Medical Weight Management</Link>
        <Link href="/functional-health">Longevity &amp; Functional Health</Link>
        <Link href="/nad-plus">NAD+ Evaluation &amp; Comprehensive Care</Link>
        <Link href="/mens-health">Men&apos;s Health</Link>
        <Link href="/womens-health">Women&apos;s Health &amp; Healthy Aging</Link>
        <Link href="/longevity">Longevity Care</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/memberships">Memberships &amp; Pricing</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/patient-access">Patient Access</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav aria-label="Legal navigation">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms &amp; Medical Disclaimer</Link>
      </nav>
      <p className="footer-disclaimer">
        Information on this website is educational and is not medical advice.
        Care includes assessment, clinical guidance, and individualized planning.
        Specific tests, prescriptions, and services vary by clinical need and location.
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
        <Link className="primary-button" href="/questionnaires">Start my assessment</Link>
        <Link className="secondary-button" href="/schedule">Book a consultation</Link>
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
