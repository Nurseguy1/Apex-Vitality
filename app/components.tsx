import Link from "next/link";
import { healthieLinks } from "./lib/healthie";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Apex Vitality home">
        <span className="brand-mark">A</span>
        <span>Apex Vitality</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/memberships">Memberships</Link>
        <Link href="/weight-loss">Weight Management</Link>
        <Link href="/mens-health">Men&apos;s Health</Link>
        <Link href="/longevity">Longevity</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
      <Link className="header-action" href="/patient-access">Patient Access</Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Apex Vitality</strong>
        <p>Personalized, clinician-led telehealth care by John Bagby, MSN, FNP-C.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/gut-health">Gut Health</Link>
        <Link href="/weight-loss">Metabolic Health</Link>
        <Link href="/mens-health">Men&apos;s Health</Link>
        <Link href="/longevity">Longevity</Link>
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
        Treatment requires evaluation by a licensed clinician and is not guaranteed.
        Availability and eligibility vary by location and individual circumstances.
        Apex Vitality is operated by Elite Functional Health, a Professional Nursing Corporation.
      </p>
      {healthieLinks.portal && <a className="footer-portal-link" href={healthieLinks.portal} rel="noreferrer" target="_blank">Secure Healthie patient login ↗</a>}
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
        <Link className="primary-button" href="/schedule">Schedule a consultation</Link>
        <Link className="secondary-button" href="/how-it-works">See how care works</Link>
      </div>
    </section>
  );
}

export function CareNotice() {
  return (
    <aside className="care-notice">
      <strong>Care starts with clinical review.</strong>
      <p>
        Every care plan is based on an individualized clinical evaluation by
        John Bagby, MSN, FNP-C. Specific recommendations are discussed privately
        through the secure clinical process, with appropriate monitoring and follow-up.
      </p>
    </aside>
  );
}
