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
    includes: ["Goal-directed biomarker review", "Personalized nutrition and supplement review", "Men's or women's healthy-aging support", "Focused testing that informs care"],
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
              &ldquo;You know your body and your goals. Work with a care team that
              believes in your ability to achieve them. Greater vitality, longevity,
              and a healthier life are within reach.&rdquo;
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
          <div className="visit-card"><span>Concierge telemedicine</span><strong>Executive-level attention. Clinically grounded care.</strong><p>Your history, goals, biomarkers, and lifestyle considered holistically.</p></div>
        </div>
      </section>

      <section className="funnel-section" aria-labelledby="choose-your-path">
        <div className="funnel-heading">
          <p className="eyebrow">Choose your care experience</p>
          <h2 id="choose-your-path">Whatever brings you here, there is a place to start.</h2>
          <p>Come with a focused goal, a concern, or a treatment idea already in mind. Your clinician will listen and collaborate with you to develop options and build a plan.</p>
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
              <li>Personalized lab planning</li>
            </ul>
            <Link className="primary-button" href="/schedule">Book my consultation</Link>
          </article>
          <article className="funnel-card">
            <span className="funnel-label">Focused starting point</span>
            <h3>Explore a Specific Care Area</h3>
            <p>Already know what you want to address—or have a treatment in mind? Start there. We will listen to your perspective and work with you to turn it into a clear clinical plan.</p>
            <ul>
              <li>Gut, metabolic, men&apos;s, or women&apos;s health</li>
              <li><strong>Longevity &amp; Functional Health</strong></li>
              <li><strong>NAD+ Evaluation &amp; Comprehensive Care</strong></li>
            </ul>
            <Link className="secondary-dark-button care-path-button" href="/questionnaires">Start My Self-Assessment</Link>
          </article>
        </div>
        <p className="funnel-disclaimer">Your consultation includes individualized assessment, clinical guidance, and a personalized care plan. Testing, prescriptions, and medication fulfillment are added when they support that plan.</p>
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
        <div className="section-heading"><p className="eyebrow">Program pathways</p><h2>Choose the care experience that fits your goals.</h2><p>Each pathway includes clinician-led assessment, guidance, and ongoing care. Testing and specific therapies are personalized to your needs.</p></div>
        <div className="program-grid">
          {programs.map((program) => <article className="program-card" key={program.title}><span>{program.label}</span><h3>{program.title}</h3><p>{program.copy}</p><ul>{program.includes.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
        <p className="program-note">Your clinician will help you understand your health more clearly and build an individualized treatment plan designed around your goals.</p>
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
        <div className="faq-preview-list"><p><strong>What does the consultation include?</strong><span>Assessment, education, clinical guidance, and a treatment plan built around your goals.</span></p><p><strong>How are labs used?</strong><span>Your clinician selects and explains testing that helps guide progress toward your goals.</span></p><Link className="text-link" href="/faq">Read all frequently asked questions →</Link></div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-copy"><p className="eyebrow">Start online</p><h2>Begin with a confidential consultation.</h2><p>Meet with John Bagby, MSN, FNP-C to understand your health more clearly, learn what your findings mean, and build the treatment plan you need.</p></div>
        <div className="intake-form readiness-card">
          <span className="status-pill">Secure online scheduling</span>
          <h3>Ready to take the next step?</h3>
          <p>Pay securely through Stripe, schedule through CharmHealth, then complete the intake assigned in your patient portal. Please do not send medical information through ordinary email or website messages.</p>
          <Link className="primary-button" href="/schedule">Start changing my health</Link>
          <Link className="text-link" href="/faq">Review common questions</Link>
          <p className="form-note">Care is personalized during your consultation. Specific tests, prescriptions, and services vary according to your needs and location.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
