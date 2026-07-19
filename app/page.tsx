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
    title: "Apex Longevity & Preventive Wellness Track",
    copy: "A comprehensive pathway connecting metabolic health, recovery, healthy aging, and advanced care conversations.",
    includes: ["Expanded biomarker review", "Gut, metabolic, and vitality coordination", "Priority care planning", "Advanced options only when lawful and appropriate"],
  },
];

const memberships = [
  {
    name: "Comprehensive New Patient Consultation",
    price: "$325 USD",
    cadence: "one-time",
    description: "An unhurried clinical evaluation and personalized starting plan.",
    includes: ["Detailed health and goal review", "Medication and risk-factor review", "Relevant lab planning", "Personalized next steps"],
  },
  {
    name: "Apex Core Membership",
    price: "$225 USD",
    cadence: "per month",
    description: "Ongoing medical management with convenient, consistent follow-through.",
    includes: ["Personalized treatment planning", "Clinically appropriate follow-ups", "Secure non-urgent messaging", "Prescription management", "Annual wellness planning"],
  },
  {
    name: "Apex Performance Membership",
    price: "$375 USD",
    cadence: "per month",
    description: "Elevated access and deeper performance-focused care planning.",
    includes: ["Everything in Apex Core", "Priority scheduling", "Extended appointments", "Quarterly comprehensive reviews", "Lifestyle, nutrition, and performance planning"],
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Telemedicine for modern health</p>
          <h1>
            Personalized care.
            <span className="headline-line">Measurable progress.</span>
            <span className="headline-line">Built around you.</span>
          </h1>
          <p className="hero-tagline">Helping You Get Back to Health</p>
          <blockquote className="hero-quote">
            <p className="hero-lede">
              &ldquo;Apex Vitality provides discreet, clinician-led care combining
              thoughtful evaluation, evidence-informed treatment, and convenient
              follow-through for long-term health and performance.&rdquo;
            </p>
            <cite>— John Bagby, MSN, FNP-C</cite>
          </blockquote>
          <div className="hero-actions">
            <Link className="primary-button" href="/schedule">Schedule a consultation</Link>
            <Link className="secondary-button" href="/how-it-works">How care works</Link>
          </div>
          <div className="trust-row" aria-label="Clinic highlights">
            <span>Personalized care</span><span>Board-certified family nurse practitioner</span>
            <span>Private &amp; convenient</span><span>Secure telehealth</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Telehealth consultation">
          <div className="hero-image-frame">
            <Image src="/telehealth-consult-v2.png" alt="Couple fully in view while meeting with a medical professional through telehealth" width={1672} height={941} priority />
          </div>
          <div className="visit-card"><span>Concierge telemedicine</span><strong>Executive-level attention. Clinically grounded care.</strong><p>Your history, goals, biomarkers, and lifestyle considered together.</p></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Care principles">
        <div><strong>Evaluate</strong><span>symptoms, goals, history, lifestyle, and relevant biomarkers</span></div>
        <div><strong>Personalize</strong><span>a plan shaped around your goals, history, and clinical needs</span></div>
        <div><strong>Progress</strong><span>structured follow-up with responsible plan adjustments</span></div>
      </section>

      <section className="service-band" id="programs">
        <div className="section-heading"><p className="eyebrow">Four connected care paths</p><h2>Start with your goals. Build from your data.</h2><p>Programs can stand alone or work together when multiple areas of health overlap.</p></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.title}><h3>{service.title}</h3><p>{service.copy}</p><Link className="text-link" href={service.href}>Explore this care path →</Link></article>)}
        </div>
      </section>

      <section className="program-section">
        <div className="section-heading"><p className="eyebrow">Program pathways</p><h2>Choose a starting point—not a prewritten prescription.</h2><p>Each pathway is a framework for evaluation and ongoing care. Specific testing and treatment are determined individually after clinical review.</p></div>
        <div className="program-grid">
          {programs.map((program) => <article className="program-card" key={program.title}><span>{program.label}</span><h3>{program.title}</h3><p>{program.copy}</p><ul>{program.includes.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
        <p className="program-note">Clinical services are individualized. A consultation does not guarantee enrollment, testing, or a prescription.</p>
      </section>

      <section className="membership-section" id="memberships">
        <div className="section-heading"><p className="eyebrow">Membership care</p><h2>Expert guidance with the access and continuity your health deserves.</h2><p>Begin with a comprehensive consultation. For appropriate ongoing care, choose the level of access and support that fits your goals.</p></div>
        <div className="membership-grid">
          {memberships.map((membership, index) => (
            <article className={`membership-card ${index === 2 ? "featured" : ""}`} key={membership.name}>
              {index === 2 && <span className="membership-badge">Elevated access</span>}
              <h3>{membership.name}</h3>
              <p className="membership-price"><strong>{membership.price}</strong><span>{membership.cadence}</span></p>
              <p>{membership.description}</p>
              <ul>{membership.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link className={index === 2 ? "primary-button" : "secondary-dark-button"} href={index === 0 ? "/schedule" : "/memberships"}>{index === 0 ? "Schedule consultation" : "View membership details"}</Link>
            </article>
          ))}
        </div>
        <p className="membership-note">Membership fees cover the professional services listed. Medications, laboratory testing, pharmacy charges, imaging, and outside services are separate unless expressly stated. Secure messaging is for non-urgent questions and is answered during business hours.</p>
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
        <div className="visit-copy"><p className="eyebrow">Start online</p><h2>Begin with a confidential consultation.</h2><p>Meet with John Bagby, MSN, FNP-C to review your health history, goals, medications, relevant data, and the care options that may be appropriate for you.</p></div>
        <div className="intake-form readiness-card">
          <span className="status-pill">Secure online scheduling</span>
          <h3>Ready to take the next step?</h3>
          <p>Pay securely through Stripe, schedule through CharmHealth, then complete the intake assigned in your patient portal. Please do not send medical information through ordinary email or website messages.</p>
          <Link className="primary-button" href="/schedule">Schedule a consultation</Link>
          <Link className="text-link" href="/faq">Review common questions</Link>
          <p className="form-note">Treatment depends on individualized clinical evaluation, eligibility, and service availability in your location.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
