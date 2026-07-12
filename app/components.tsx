import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Apex Vitality home">
        <span className="brand-mark">A</span>
        <span>Apex Vitality</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/weight-loss">Weight Loss</Link>
        <Link href="/mens-health">Men&apos;s Health</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
      <Link className="header-action" href="/#visit">
        Start here
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Apex Vitality</strong>
        <p>Care from board-certified nurse practitioners with physician Medical Director oversight.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/weight-loss">Weight Loss</Link>
        <Link href="/mens-health">Men&apos;s Health</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
      <nav aria-label="Legal navigation">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms &amp; Medical Disclaimer</Link>
      </nav>
      <p className="footer-disclaimer">
        Information on this website is educational and is not medical advice.
        Treatment requires evaluation by a licensed clinician and is not guaranteed.
        Availability and eligibility vary by location and individual circumstances.
      </p>
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
        <Link className="primary-button" href="/#visit">Start a conversation</Link>
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
        Medication is prescribed only when a licensed nurse practitioner or
        physician determines it is
        medically appropriate. Lab work and follow-up may be required.
      </p>
    </aside>
  );
}
