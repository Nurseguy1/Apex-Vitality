import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";

const services = [
  {
    title: "NAD+ Evaluation & Comprehensive Care",
    copy: "Explore energy, recovery, and healthy-aging goals through a focused clinical evaluation. Treatment depends on medical review.",
    href: "/nad-plus",
    cta: "Explore NAD+ care",
  },
  {
    title: "Longevity & Functional Health",
    copy: "Connect the dots between symptoms, nutrition, metabolic health, recovery, biomarkers, and the way you want to live.",
    href: "/functional-health",
    cta: "Explore functional health",
  },
  {
    title: "Gut Health",
    copy: "Stop guessing about digestive symptoms. Build a clearer plan around nutrition, lifestyle, medications, and useful testing.",
    href: "/gut-health",
    cta: "Explore gut health",
  },
  {
    title: "Medical Weight Management",
    copy: "Move toward sustainable change with clinical evaluation, relevant lab review, practical strategy, and ongoing follow-through.",
    href: "/weight-loss",
    cta: "Explore weight management",
  },
  {
    title: "Men's Health",
    copy: "Take changes in energy, sexual health, strength, mood, sleep, recovery, and body composition seriously—and act on them.",
    href: "/mens-health",
    cta: "Explore men's health",
  },
  {
    title: "Women's Health & Healthy Aging",
    copy: "Move through hormonal and metabolic changes with a plan for energy, sleep, strength, confidence, and healthy aging.",
    href: "/womens-health",
    cta: "Explore women's health",
  },
];

const steps = [
  ["1. Find your starting point", "Use a short self-assessment to identify the care area that best matches your concerns and goals."],
  ["2. Book your consultation", "Choose a convenient telehealth time and complete your secure patient intake."],
  ["3. Meet with a real clinician", "Talk directly with John Bagby, MSN, FNP-C about your history, symptoms, goals, and options."],
  ["4. Put your plan into motion", "Leave with clearer priorities, then use follow-up and responsible adjustments to build momentum."],
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
    title: "Longevity & Functional Health Track",
    copy: "A comprehensive pathway connecting metabolic health, digestive wellness, recovery, healthy aging, and women's or men's health goals.",
    includes: ["Goal-directed biomarker review", "Nutrition and supplement review when appropriate", "Men's or women's healthy-aging support", "Specialty testing only when it may change care"],
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
          <p className="eyebrow">Personalized care for what comes next</p>
          <h1>
            Invest in your vitality.
            <span className="headline-line">Feel stronger today.</span>
            <span className="headline-line">Build health for the years ahead.</span>
          </h1>
          <p className="hero-tagline">Proactive, clinician-led care for people ready to feel and perform at their best.</p>
          <blockquote className="hero-quote">
            <p className="hero-lede">
              &ldquo;Your goals, health history, biomarkers, and lifestyle deserve to
              be considered together. Apex Vitality turns that complete picture into
              a thoughtful plan for lasting energy, performance, and healthy aging.&rdquo;
            </p>
            <cite>— John Bagby, MSN, FNP-C</cite>
          </blockquote>
          <div className="hero-actions">
            <Link className="primary-button" href="/questionnaires">Start my health assessment</Link>
            <Link className="secondary-button" href="/schedule">Book a $325 consultation</Link>
          </div>
          <p className="hero-cta-note">45-minute new-patient consultation • Secure online scheduling • Personalized clinical plan</p>
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

      <section className="funnel-section" aria-labelledby="choose-your-path">
        <div className="funnel-heading">
          <p className="eyebrow">Choose your care experience</p>
          <h2 id="choose-your-path">A more personal approach to vitality, performance, and healthy aging.</h2>
          <p>Begin with a focused goal or a comprehensive consultation. Each pathway is designed to help you make informed, confident decisions about your health.</p>
        </div>
        <div className="funnel-options">
          <article className="funnel-card featured-funnel">
            <span className="funnel-label">Best place to start</span>
            <h3>Comprehensive New-Patient Consultation</h3>
            <p className="funnel-price"><strong>$325</strong><span>one-time • 45 minutes</span></p>
            <p>Review your symptoms, health history, medications, goals, and relevant testing needs with John Bagby, MSN, FNP-C.</p>
            <ul>
              <li>Unhurried whole-person evaluation</li>
              <li>Clear priorities and personalized next steps</li>
              <li>Lab planning when clinically appropriate</li>
            </ul>
            <Link className="primary-button" href="/schedule">Book my consultation</Link>
          </article>
          <article className="funnel-card">
            <span className="funnel-label">Focused starting point</span>
            <h3>Explore a Specific Care Area</h3>
            <p>Already know what you want to address? Learn about the relevant evaluation pathway before scheduling.</p>
            <ul>
              <li>Gut, metabolic, men&apos;s, or women&apos;s health</li>
              <li><strong>Longevity &amp; Functional Health</strong></li>
              <li><strong>NAD+ Evaluation &amp; Comprehensive Care</strong></li>
            </ul>
            <Link className="secondary-dark-button care-path-button" href="/questionnaires">Start My Self-Assessment</Link>
          </article>
        </div>
        <p className="funnel-disclaimer">A consultation does not guarantee testing, treatment, a prescription, or medication fulfillment. Recommendations depend on individualized clinical evaluation.</p>
      </section>

      <section className="proof-strip" aria-label="Care principles">
        <div><strong>Insight</strong><span>see your health history, goals, lifestyle, and relevant data as a complete picture</span></div>
        <div><strong>Precision</strong><span>focus your time and effort on the strategies most relevant to your priorities</span></div>
        <div><strong>Partnership</strong><span>work directly with a clinician through thoughtful follow-up and responsible adjustments</span></div>
      </section>

      <section className="service-band" id="care-options">
        <div className="section-heading"><p className="eyebrow">Explore care areas</p><h2>Find the care that matches your health goals.</h2><p>Start with a familiar area of care. Programs can stand alone or work together when multiple aspects of health overlap.</p></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.title}><h3>{service.title}</h3><p>{service.copy}</p><Link className="text-link" href={service.href}>{service.cta} →</Link></article>)}
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
        <div><p className="eyebrow">A simple path forward</p><h2>Four steps to the care you have been looking for.</h2><p>Start online, meet with a real clinician, and move forward with a plan shaped around your life—not a generic protocol.</p><Link className="primary-button" href="/questionnaires">Start my assessment</Link></div>
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
          <Link className="primary-button" href="/schedule">Start changing my health</Link>
          <Link className="text-link" href="/faq">Review common questions</Link>
          <p className="form-note">Treatment depends on individualized clinical evaluation, eligibility, and service availability in your location.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
