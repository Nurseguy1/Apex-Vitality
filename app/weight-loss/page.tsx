import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Online Medical Weight Loss in California | Apex Vitality",
  description:
    "Start medical weight-loss care online with a focused questionnaire, personal clinician review, treatment options, and ongoing support from Apex Vitality.",
};

const steps = [
  ["01", "Choose your goal", "Decide what you want to achieve and take the first step toward it."],
  ["02", "Share what matters", "Complete a brief questionnaire so we can understand your starting point and priorities."],
  ["03", "Build your strategy", "Bring your goals together with medical expertise and personalized options."],
  ["04", "Put your plan into motion", "Begin with clear next steps, convenient follow-through, and support that keeps you moving."],
];

const benefits = [
  "A plan built around your goals and health history",
  "Medication and metabolic-health review",
  "A simple start without unnecessary steps",
  "Nutrition, movement, sleep, and habit support",
  "Convenient telehealth follow-up",
  "Pharmacy coordination and home delivery when prescribed",
];

export default function WeightLossPage() {
  return (
    <main className="weight-loss-page">
      <SiteHeader />

      <section className="weight-hero">
        <Image className="weight-hero-image" src="/weight-loss-couple-walking-v1.png" alt="Active man and woman walking together outdoors" fill priority sizes="100vw" />
        <div className="weight-hero-copy">
          <p className="eyebrow">Online care for California adults</p>
          <h1>Medical Weight Loss</h1>
          <h2 className="weight-hero-offer">Start with a $59 initial visit.</h2>
          <p className="weight-hero-lede">
            Get a personalized medical strategy, ongoing clinician support, and a
            clear path toward results that fit your life.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/questionnaires/metabolic-weight">Start for $59</Link>
            <Link className="secondary-button" href="/questionnaires/metabolic-weight">Customize Your Treatment</Link>
          </div>
          <p className="hero-cta-note">Simple online start • Personal clinician guidance • Ongoing support</p>
        </div>
        <div className="weight-pricing-card">
          <span>Medical weight loss</span>
          <strong>Start with $59</strong>
          <b>$149/month for ongoing care</b>
          <p>Medication costs are separate.</p>
        </div>
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
          <article><strong>Metabolic insight</strong><span>Use relevant health information to understand the factors affecting your progress.</span></article>
          <article><strong>Lasting momentum</strong><span>Strengthen nutrition, movement, recovery, and routines that support continued results.</span></article>
        </div>
      </section>

      <section className="weight-final-cta">
        <p className="eyebrow">The power to begin is yours</p>
        <h2>Your next chapter starts with one decision.</h2>
        <p>Start with a $59 initial visit, then continue with ongoing care for $149 per month.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/questionnaires/metabolic-weight">Customize Your Treatment</Link>
          <Link className="secondary-button" href="/questionnaires/metabolic-weight">Start for $59</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
