import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";

const services = [
  {
    category: "NAD+ Care",
    title: "Explore NAD+ Care for Energy & Healthy Aging",
    copy: "Explore energy, recovery, and healthy-aging goals through focused, personalized care.",
    href: "/nad-plus",
    cta: "Explore NAD+ care",
  },
  {
    category: "Sermorelin Peptide Care",
    title: "Strengthen Sleep, Recovery & Healthy Aging",
    copy: "Answer a quick questionnaire, receive personal clinician review, and have your medication delivered directly to your door.",
    href: "/sermorelin",
    cta: "Explore sermorelin peptide care",
  },
  {
    category: "Peptide Monitoring",
    title: "Already Using BPC-157 or Other Peptides? Add Medical Oversight",
    copy: "Move from online peptide purchases and self-directed protocols to confidential product review, health monitoring, and lawful clinician-guided alternatives.",
    href: "/peptide-care",
    cta: "Start monitored peptide care",
  },
  {
    category: "Longevity & Functional Health",
    title: "Build Your Longevity & Functional Health Plan",
    copy: "Connect the dots between symptoms, nutrition, metabolic health, recovery, biomarkers, and the way you want to live.",
    href: "/functional-health",
    cta: "Explore functional health",
  },
  {
    category: "Gut Health",
    title: "Get to the Root of Your Gut Health",
    copy: "Stop guessing about digestive symptoms. Build a clearer plan around nutrition, lifestyle, medications, and useful testing.",
    href: "/gut-health",
    cta: "Explore gut health",
  },
  {
    category: "Medical Weight Management",
    title: "Make Medical Weight Management Work for You",
    copy: "Start with your goals, receive personal clinician review, and move forward with a practical treatment and follow-up plan.",
    href: "/weight-loss",
    cta: "Explore weight management",
  },
  {
    category: "Men’s Health",
    title: "Restore Energy, Strength & Confidence",
    copy: "Take changes in energy, sexual health, strength, mood, sleep, recovery, and body composition seriously—and act on them.",
    href: "/mens-health",
    cta: "Explore men's health",
  },
  {
    category: "Women’s Health",
    title: "Feel Your Best Through Every Stage of Women’s Health",
    copy: "Move through hormonal and metabolic changes with a plan for energy, sleep, strength, confidence, and healthy aging.",
    href: "/womens-health",
    cta: "Explore women's health",
  },
];

const steps = [
  ["1. Choose your care", "Start with the treatment, health concern, or comprehensive care experience that matches your goals."],
  ["2. Purchase and answer a few questions", "Pay securely, then complete a short confidential intake through the patient portal."],
  ["3. Receive personal clinician review", "Your clinician reviews your symptoms, history, medications, goals, and treatment ideas."],
  ["4. Begin your plan", "Move directly into your personalized care plan, pharmacy coordination, delivery, and follow-up."],
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
    <main className="home-sermorelin-vibe">
      <SiteHeader />
      <section
        className="hero home-focus-hero home-active-adults-hero"
        id="top"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7, 27, 33, .98) 0%, rgba(15, 49, 56, .92) 42%, rgba(12, 37, 42, .3) 73%, rgba(7, 21, 24, .08) 100%), url('/home-professional-man-35-45-v3.png?v=20260729-3')",
          backgroundPosition: "70% center",
        }}
      >
        <div className="hero-copy">
          <p className="eyebrow">Modern telehealth for vitality, recovery &amp; longevity</p>
          <h1>
            Your goals are within reach. Build the health to achieve more.
          </h1>
          <p className="hero-tagline">Turn health obstacles into a focused plan for greater energy, strength, recovery, confidence, and longevity.</p>
          <p className="hero-lede">You know your body and what you want to achieve. Work with a care team that listens, connects the details, and helps you create forward momentum.</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/schedule">Start with a $59 visit</Link>
            <Link className="text-link hero-care-link" href="#care-options">Explore care options →</Link>
          </div>
          <p className="hero-cta-note">Simple online start • Personal clinician review • A plan built to move you forward</p>
        </div>
      </section>

      <section className="home-trust-strip" aria-label="Apex Vitality care experience">
        <article><strong>Start online</strong><span>Choose focused care or a comprehensive consultation.</span></article>
        <article><strong>Personal review</strong><span>Your history, symptoms, medications, and goals receive clinician attention.</span></article>
        <article><strong>Overcome the obstacles</strong><span>Connect symptoms, history, habits, and treatment options in one plan.</span></article>
        <article><strong>Build lasting momentum</strong><span>Use convenient follow-through to keep moving toward the life you want.</span></article>
      </section>

      <section className="funnel-section" aria-labelledby="choose-your-path">
        <div className="funnel-heading">
          <p className="eyebrow">Choose your care experience</p>
          <h2 id="choose-your-path">Whatever brings you here, there is a place to start.</h2>
          <p>Come with a focused goal, a concern, or a treatment idea already in mind. Your clinician will listen and collaborate with you to develop options and build a plan.</p>
        </div>
        <div className="funnel-options">
          <article className="funnel-card featured-funnel">
            <span className="funnel-label">Introductory visit</span>
            <h3>New-Patient Lab-Planning Visit</h3>
            <p className="funnel-price"><strong>$59</strong><span>one-time • 15 minutes</span></p>
            <p>Establish care, discuss your goals, and create the lab plan that moves you toward your next step.</p>
            <ul>
              <li>Focused introductory clinician visit</li>
              <li>Personalized lab planning</li>
              <li>Full $59 credit toward your comprehensive follow-up within 90 days</li>
            </ul>
            <Link className="primary-button" href="/schedule">Start for $59</Link>
          </article>
          <article className="funnel-card">
            <span className="funnel-label">Complete care in one visit</span>
            <h3>Comprehensive New-Patient Consultation</h3>
            <p className="funnel-price"><strong>$325</strong><span>one-time • 45 minutes</span></p>
            <p>Review your symptoms, health history, medications, goals, and relevant testing needs with your clinician.</p>
            <ul>
              <li>Unhurried whole-person clinician review</li>
              <li>Clear priorities and personalized next steps</li>
              <li>Personalized lab planning</li>
            </ul>
            <Link className="secondary-dark-button" href="/schedule">Book my consultation</Link>
          </article>
          <article className="funnel-card">
            <span className="funnel-label">Know what you want?</span>
            <h3>Start Focused Care</h3>
            <p>Already know what you want to address—or have a treatment in mind? Start there. We will listen to your perspective and work with you to turn it into a clear clinical plan.</p>
            <ul>
              <li>Gut, metabolic, men&apos;s, or women&apos;s health</li>
              <li><strong>Longevity &amp; Functional Health</strong></li>
              <li><strong>NAD+, Sermorelin &amp; Peptide Monitoring</strong></li>
            </ul>
            <Link className="secondary-dark-button care-path-button" href="#care-options">Choose My Care</Link>
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
          {services.map((service) => <article className="service-card" key={service.title}><p className="service-category">{service.category}</p><h3>{service.title}</h3><p>{service.copy}</p><Link className="text-link" href={service.href}>{service.cta} →</Link></article>)}
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
        <div><p className="eyebrow">A simple path forward</p><h2>Four steps to the care you have been looking for.</h2><p>Choose your care, answer a few questions, receive personal clinician review, and put your plan into motion.</p><Link className="primary-button" href="#care-options">Choose my care</Link></div>
        <ol className="step-list">{steps.map(([title, copy]) => <li key={title}><strong>{title}</strong><span>{copy}</span></li>)}</ol>
      </section>

      <section className="faq-preview">
        <div><p className="eyebrow">Know before you begin</p><h2>Care should feel clear before it starts.</h2></div>
        <div className="faq-preview-list"><p><strong>What does the consultation include?</strong><span>Assessment, education, clinical guidance, and a treatment plan built around your goals.</span></p><p><strong>How are labs used?</strong><span>Your clinician selects and explains testing that helps guide progress toward your goals.</span></p><Link className="text-link" href="/faq">Read all frequently asked questions →</Link></div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-copy"><p className="eyebrow">Start online</p><h2>Begin with a confidential consultation.</h2><p>Meet with a licensed clinician to understand your health more clearly, learn what your findings mean, and build a treatment plan around your goals.</p></div>
        <div className="intake-form readiness-card">
          <span className="status-pill">Secure online scheduling</span>
          <h3>Ready to take the next step?</h3>
          <p>Pay securely through Stripe, schedule through CharmHealth, then complete the intake assigned in your patient portal. Please do not send medical information through ordinary email or website messages.</p>
          <Link className="primary-button" href="/schedule">Start changing my health</Link>
          <Link className="text-link" href="/faq">Review common questions</Link>
          <p className="form-note">Your clinician connects testing, prescriptions, pharmacy coordination, and follow-up with your personalized plan.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
