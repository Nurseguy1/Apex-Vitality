import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";

const services = [
  {
    title: "Weight loss for men and women",
    copy: "Medical weight-management visits for adults, including GLP-1 care planning, lifestyle strategy, education, and follow-up support.",
    href: "/weight-loss",
  },
  {
    title: "Testosterone care for men",
    copy: "Telehealth care for low energy, libido changes, strength, mood, sleep, and other concerns that may be related to low testosterone.",
    href: "/mens-health",
  },
  {
    title: "Men's health optimization",
    copy: "A practical plan for men focused on vitality, body composition, and long-term health with guidance from licensed medical professionals.",
    href: "/mens-health",
  },
];

const steps = [
  ["Start", "Choose the care area you want to discuss."],
  ["Secure intake", "Complete health information through the appropriate patient workflow."],
  ["Clinical review", "Meet with a licensed medical professional to discuss history, goals, and next steps."],
  ["Progress", "Use follow-up, monitoring, and plan adjustments to keep moving forward."],
];

const biomarkers = ["A1C and glucose", "Weight-loss planning", "Thyroid", "Lipids", "Testosterone", "Liver and kidney health"];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Telehealth weight loss and men&apos;s health</p>
          <h1>Medical weight loss for men and women. Testosterone care for men.</h1>
          <p className="hero-lede">
            Apex Vitality offers focused telehealth care from a board-certified
            medical team, with clear pathways for adult weight management and
            men&apos;s health.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#visit">Start here</a>
            <Link className="secondary-button" href="/how-it-works">How care works</Link>
          </div>
          <div className="trust-row" aria-label="Clinic highlights">
            <span>Weight loss for adults</span><span>Board-certified medical team</span>
            <span>Physician Medical Director oversight</span><span>Telehealth visits</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Telehealth consultation">
          <Image src="/telehealth-consult-v2.png" alt="Couple fully in view while meeting with a medical professional through telehealth" width={1672} height={941} priority />
          <div className="visit-card"><span>Private telehealth</span><strong>Focused, medically guided care</strong><p>Health history, goals, labs, and care-path review.</p></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Care principles">
        <div><strong>Focused</strong><span>clear care paths, not an oversized treatment menu</span></div>
        <div><strong>Clinical</strong><span>care from a board-certified medical team</span></div>
        <div><strong>Personal</strong><span>recommendations based on individual needs and eligibility</span></div>
      </section>

      <section className="service-band" id="programs">
        <div className="section-heading"><p className="eyebrow">Focused care paths</p><h2>Simple, specific, medically guided.</h2><p>Explore the care area that best matches the conversation you want to begin.</p></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.title}><h3>{service.title}</h3><p>{service.copy}</p><Link className="text-link" href={service.href}>Explore this care path →</Link></article>)}
        </div>
      </section>

      <section className="lab-section" id="labs">
        <div className="lab-copy"><p className="eyebrow">Labs and baseline review</p><h2>Use your data to move forward with confidence.</h2><p>When appropriate, our board-certified medical team may review key markers connected to metabolic health, weight-management planning, and testosterone status.</p></div>
        <div className="marker-grid" aria-label="Example biomarker categories">{biomarkers.map((marker) => <span key={marker}>{marker}</span>)}</div>
      </section>

      <section className="split-section" id="process">
        <div><p className="eyebrow">The patient journey</p><h2>Start with questions. Move forward with clarity.</h2><p>Convenient telehealth should still include appropriate clinical review, informed decisions, and responsible follow-up.</p><Link className="text-link" href="/how-it-works">See the complete process →</Link></div>
        <ol className="step-list">{steps.map(([title, copy]) => <li key={title}><strong>{title}</strong><span>{copy}</span></li>)}</ol>
      </section>

      <section className="faq-preview">
        <div><p className="eyebrow">Know before you begin</p><h2>Care should feel clear before it starts.</h2></div>
        <div className="faq-preview-list"><p><strong>Is treatment guaranteed?</strong><span>No. Eligibility and treatment depend on individualized medical evaluation.</span></p><p><strong>Will labs be required?</strong><span>They may be, depending on your health history and requested care.</span></p><Link className="text-link" href="/faq">Read all frequently asked questions →</Link></div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-copy"><p className="eyebrow">Start online</p><h2>Prepare for a confidential consultation.</h2><p>A member of our board-certified medical team can review your health history, goals, medications, and potential care options once secure scheduling and intake are active.</p></div>
        <div className="intake-form readiness-card">
          <span className="status-pill">Secure scheduling in preparation</span>
          <h3>Patient intake is not open yet.</h3>
          <p>A secure scheduling and intake pathway will be activated before patient enrollment begins. Please do not send medical information through ordinary email or website messages.</p>
          <Link className="primary-button" href="/how-it-works">See how care will work</Link>
          <Link className="text-link" href="/faq">Review common questions</Link>
          <p className="form-note">Treatment is guided by our board-certified medical team and depends on clinical eligibility and service availability in your location.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
