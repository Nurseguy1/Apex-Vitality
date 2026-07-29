import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Online Medical Weight Loss in California | Apex Vitality",
  description:
    "Start medical weight-loss care online with a focused questionnaire, personal clinician review, lab planning, treatment options, and ongoing support from Apex Vitality.",
};

const steps = [
  ["01", "Complete a brief questionnaire", "Share the essential information your clinician will review before your visit."],
  ["02", "Connect with your clinician", "Review your starting point, ask questions, and build a practical medical weight-loss strategy together."],
  ["03", "Complete useful labs", "Upload recent results or receive a personalized lab plan when updated information is needed."],
  ["04", "Put your plan into motion", "Begin your treatment plan with pharmacy coordination, delivery, and clear follow-up."],
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
          <h1>Lose weight with a medical plan built to move you forward.</h1>
          <p className="weight-hero-lede">
            Start online today. Complete a brief questionnaire, connect with a clinician, and
            build a personalized strategy for weight loss, metabolic health,
            energy, and lasting progress.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/questionnaires/metabolic-weight">Customize Your Treatment</Link>
            <Link className="secondary-button" href="/schedule/lab-planning">Plan my labs · $59</Link>
          </div>
          <p className="hero-cta-note">Simple online start • Personal clinician review • Convenient follow-through</p>
        </div>
        <aside className="weight-offer-card">
          <span>Medical weight-loss pathway</span>
          <h2>Everything starts with your goals.</h2>
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
        <article><strong>Start online</strong><span>Begin with a brief questionnaire.</span></article>
        <article><strong>Bring recent labs</strong><span>Upload useful results you already have.</span></article>
        <article><strong>Build your plan</strong><span>Connect medical treatment with sustainable habits.</span></article>
        <article><strong>Keep progressing</strong><span>Use convenient follow-up to maintain momentum.</span></article>
      </section>

      <section className="content-section weight-benefits">
        <div className="section-heading">
          <p className="eyebrow">More than a prescription</p>
          <h2>Medical care that supports the whole journey.</h2>
          <p>Weight loss works better when treatment, metabolic health, daily habits, and follow-up all move in the same direction.</p>
        </div>
        <div className="marker-grid" aria-label="Program benefits">
          {benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
        </div>
      </section>

      <section className="weight-process-section">
        <div className="section-heading">
          <p className="eyebrow">A clear path forward</p>
          <h2>From first questions to active treatment.</h2>
          <p>No guessing about what happens next. Each step prepares you to make informed decisions and begin moving toward your goals.</p>
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
          <p className="eyebrow">Personalized treatment planning</p>
          <h2>Choose a strategy that fits your health and your life.</h2>
          <p>
            Your clinician considers your goals, weight history, current
            medications, metabolic health, nutrition, activity, sleep, and
            relevant lab results holistically. Together, you will build a plan
            designed for meaningful progress and practical follow-through.
          </p>
        </div>
        <div className="weight-plan-options">
          <article><strong>Medical options</strong><span>Discuss available prescription pathways and how they fit into your broader plan.</span></article>
          <article><strong>Metabolic insight</strong><span>Use relevant measurements and labs to understand factors affecting progress.</span></article>
          <article><strong>Lasting momentum</strong><span>Strengthen nutrition, movement, recovery, and routines that support continued results.</span></article>
        </div>
      </section>

      <section className="weight-final-cta">
        <p className="eyebrow">Your next step can start today</p>
        <h2>Turn your weight-loss goal into a medical plan.</h2>
        <p>Answer a few focused questions now, then connect with Apex Vitality to begin building your path forward.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/questionnaires/metabolic-weight">Customize Your Treatment</Link>
          <Link className="secondary-button" href="/schedule">Choose comprehensive care</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
