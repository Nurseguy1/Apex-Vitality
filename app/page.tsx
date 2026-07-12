import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";

const services = [
  {
    title: "Gut health & digestive wellness",
    copy: "A structured evaluation of symptoms, nutrition, lifestyle, medications, and selected laboratory findings when clinically appropriate.",
    href: "/gut-health",
  },
  {
    title: "Metabolic & weight optimization",
    copy: "Medical weight-management care for adults combining clinical evaluation, lab review, lifestyle strategy, and ongoing follow-up.",
    href: "/weight-loss",
  },
  {
    title: "Men's vitality & performance",
    copy: "Telehealth care for changes in energy, sexual health, strength, mood, sleep, recovery, and body composition.",
    href: "/mens-health",
  },
  {
    title: "Longevity & cellular wellness",
    copy: "A goal-based program focused on biomarkers, metabolic resilience, recovery, healthy aging, and evidence-informed care options.",
    href: "/longevity",
  },
];

const steps = [
  ["Start", "Choose the care area you want to discuss."],
  ["Secure intake", "Complete health information through the appropriate patient workflow."],
  ["Clinical review", "Meet with a licensed medical professional to discuss history, goals, and next steps."],
  ["Progress", "Use follow-up, monitoring, and plan adjustments to keep moving forward."],
];

const biomarkers = ["A1C, glucose & insulin", "Lipids & cardiovascular risk", "Thyroid", "Hormonal health", "Liver & kidney function", "Nutrient status", "Inflammation in context", "Digestive testing when indicated"];

const programs = [
  {
    label: "Program 01",
    title: "Metabolic & Gut Optimization Track",
    copy: "A coordinated pathway for digestive wellness, metabolic health, and medical weight-management goals.",
    includes: ["Initial medical evaluation", "Relevant lab review", "Personalized nutrition and lifestyle plan", "Structured clinical follow-up"],
  },
  {
    label: "Program 02",
    title: "Men's Vitality & Hormonal Optimization Track",
    copy: "A focused pathway for energy, sexual health, strength, recovery, body composition, and hormonal evaluation when indicated.",
    includes: ["Comprehensive men's health review", "Baseline and follow-up labs when needed", "Individualized clinical plan", "Secure follow-up and monitoring"],
  },
  {
    label: "Program 03",
    title: "Elite Cellular Longevity & Regeneration Track",
    copy: "A comprehensive pathway connecting metabolic health, recovery, healthy aging, and advanced care conversations.",
    includes: ["Expanded biomarker review", "Gut, metabolic, and vitality coordination", "Priority care planning", "Advanced options only when lawful and appropriate"],
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Modern telehealth wellness care</p>
          <h1>Gut health. Metabolic care. Men&apos;s vitality. Long-term wellness.</h1>
          <p className="hero-lede">
            Apex Vitality offers focused telehealth care from a board-certified
            medical team, with clear pathways for digestive wellness, adult
            weight management, men&apos;s health, and longevity-focused care.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#visit">Start here</a>
            <Link className="secondary-button" href="/how-it-works">How care works</Link>
          </div>
          <div className="trust-row" aria-label="Clinic highlights">
            <span>Gut & metabolic health</span><span>Board-certified medical team</span>
            <span>Physician Medical Director oversight</span><span>Secure telehealth</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Telehealth consultation">
          <div className="hero-image-frame">
            <Image src="/telehealth-consult-v2.png" alt="Couple fully in view while meeting with a medical professional through telehealth" width={1672} height={941} priority />
          </div>
          <div className="visit-card"><span>Private telehealth</span><strong>Focused, medically guided care</strong><p>Health history, goals, labs, and care-path review.</p></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Care principles">
        <div><strong>Evaluate</strong><span>symptoms, goals, history, lifestyle, and relevant biomarkers</span></div>
        <div><strong>Personalize</strong><span>care guided by a board-certified medical team</span></div>
        <div><strong>Progress</strong><span>structured follow-up with responsible plan adjustments</span></div>
      </section>

      <section className="service-band" id="programs">
        <div className="section-heading"><p className="eyebrow">Four connected care paths</p><h2>Start with your goals. Build from your data.</h2><p>Programs can stand alone or work together when multiple areas of health overlap.</p></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.title}><h3>{service.title}</h3><p>{service.copy}</p><Link className="text-link" href={service.href}>Explore this care path →</Link></article>)}
        </div>
      </section>

      <section className="program-section">
        <div className="section-heading"><p className="eyebrow">Program pathways</p><h2>Choose a starting point—not a prewritten prescription.</h2><p>Each pathway is a framework for evaluation and ongoing care. Specific testing and treatment are determined individually by the medical team.</p></div>
        <div className="program-grid">
          {programs.map((program) => <article className="program-card" key={program.title}><span>{program.label}</span><h3>{program.title}</h3><p>{program.copy}</p><ul>{program.includes.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
        <p className="program-note">Program pricing, service areas, and enrollment details will be published before patient intake opens.</p>
      </section>

      <section className="lab-section" id="labs">
        <div className="lab-copy"><p className="eyebrow">Labs and baseline review</p><h2>Use relevant data—not indiscriminate testing.</h2><p>Testing is selected according to symptoms, history, goals, and clinical judgment. Results are interpreted in context rather than used as a stand-alone diagnosis.</p></div>
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
