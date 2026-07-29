import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Online Medical Weight Loss in California | Apex Vitality",
  description:
    "Start medical weight-loss care online with a focused questionnaire, personal clinician review, lab planning, treatment options, and ongoing support from Apex Vitality.",
};

const steps = [
  ["01", "Choose your goal", "Decide what you want to achieve and take the first step toward it."],
  ["02", "Share what matters", "Complete a brief questionnaire so we can understand your starting point and priorities."],
  ["03", "Build your strategy", "Bring your goals together with medical expertise, useful labs, and personalized options."],
  ["04", "Put your plan into motion", "Begin with clear next steps, convenient follow-through, and support that keeps you moving."],
];

const benefits = [
  "A plan built around your goals and health history",
  "Medication and metabolic-health review",
  "Recent outside labs accepted for clinician review",
  "Nutrition, movement, sleep, and habit support",
  "Convenient telehealth follow-up",
  "Pharmacy coordination and home delivery when prescribed",
];

export default function WeightLossPage() {
  return (
    <main className="weight-loss-page">
      <SiteHeader />

      <section className="weight-hero">
        <div>
          <p className="eyebrow">Online medical weight loss for California adults</p>
          <h1>Your weight-loss goal is within reach. Start today.</h1>
          <p className="weight-hero-lede">
            You know what you want to change. Make the decision, choose your goal,
            and begin building the energy, confidence, and lasting progress you are
            ready to achieve.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/questionnaires/metabolic-weight">Customize Your Treatment</Link>
            <Link className="secondary-button" href="/schedule/lab-planning">Plan my labs · $59</Link>
          </div>
          <p className="hero-cta-note">Start online • Choose your direction • Build real momentum</p>
        </div>
        <aside className="weight-offer-card">
          <span>Medical weight-loss pathway</span>
          <h2>You decide. You start. You move forward.</h2>
          <ul className="check-list">
            <li>Brief questionnaire</li>
            <li>Clinician-led treatment planning</li>
            <li>Lab review and monitoring</li>
            <li>Medication options discussed</li>
            <li>Ongoing support and adjustments</li>
          </ul>
          <p className="weight-pricing-note"><strong>Medication program pricing coming soon</strong><br />Final pricing will be posted after pharmacy fulfillment is confirmed.</p>
        </aside>
      </section>

      <section className="weight-trust-strip" aria-label="Weight loss care highlights">
        <article><strong>Choose your goal</strong><span>Decide what you are ready to achieve.</span></article>
        <article><strong>Start today</strong><span>Turn your decision into forward motion.</span></article>
        <article><strong>Shape your strategy</strong><span>Build it around your life and priorities.</span></article>
        <article><strong>Keep progressing</strong><span>Stay supported as your results take shape.</span></article>
      </section>

      <section className="content-section weight-benefits">
        <div className="section-heading">
          <p className="eyebrow">Your goal. Your decision. Your progress.</p>
          <h2>The change begins when you choose it.</h2>
          <p>Turn your motivation into action with a personalized path designed around the life, health, and results you want.</p>
        </div>
        <div className="marker-grid" aria-label="Program benefits">
          {benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
        </div>
      </section>

      <section className="weight-process-section">
        <div className="section-heading">
          <p className="eyebrow">A clear path forward</p>
          <h2>Choose your result. Start building it.</h2>
          <p>A few simple steps can turn the decision you make today into forward motion you can feel.</p>
        </div>
        <div className="focused-process-grid">
          {steps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-split weight-treatment-section">
        <div>
          <p className="eyebrow">Built around your success</p>
          <h2>A strategy shaped around the result you want.</h2>
          <p>
            You know your body, your life, and the future you want to create.
            We bring your goals, history, lifestyle, and useful health information
            together holistically to build a strategy designed for meaningful
            progress and practical follow-through.
          </p>
        </div>
        <div className="weight-plan-options">
          <article><strong>Medical options</strong><span>Discuss available prescription pathways and how they fit into your broader plan.</span></article>
          <article><strong>Metabolic insight</strong><span>Use relevant measurements and labs to understand factors affecting progress.</span></article>
          <article><strong>Lasting momentum</strong><span>Strengthen nutrition, movement, recovery, and routines that support continued results.</span></article>
        </div>
      </section>

      <section className="weight-final-cta">
        <p className="eyebrow">The power to begin is yours</p>
        <h2>Your next chapter starts with one decision.</h2>
        <p>Choose your goal. Start online today. Begin creating the progress you want to see.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/questionnaires/metabolic-weight">Customize Your Treatment</Link>
          <Link className="secondary-button" href="/schedule">Choose comprehensive care</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
