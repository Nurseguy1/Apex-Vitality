import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Daily Nutrition Support | Apex Vitality",
  description: "Caregiver-guided nutrition and digestive wellness support for selective eaters, with a simple starting questionnaire and clinician guidance.",
  robots: { index: false, follow: false },
};

const benefits = [
  ["A simpler daily routine", "Practical recommendations designed around foods, textures, schedules, and supplements your family can realistically use."],
  ["Whole-person support", "Nutrition, digestion, medications, sensitivities, sleep, and daily routines are considered together."],
  ["Room to grow", "Start with the essentials, then add focused or comprehensive support whenever your family needs more."],
];

export default function NutritionSupportPage() {
  return (
    <main className="nutrition-preview">
      <SiteHeader />
      <section className="nutrition-hero">
        <div className="nutrition-hero-copy">
          <p className="eyebrow">Caregiver-guided nutrition support</p>
          <h1>Turn daily nutrition challenges into achievable progress.</h1>
          <p className="nutrition-lead">
            Help the person you care for move beyond the obstacles created by a
            limited range of foods. Share their routine, strengths, preferences,
            and your goals. We&apos;ll help you build a practical nutrition plan
            that creates meaningful wins at home.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/nutrition-support/start">Start the questionnaire</Link>
            <Link className="secondary-button" href="/nutrition-support/care-options">See care options</Link>
          </div>
          <p className="nutrition-reassurance">No routine lab work is required to get started.</p>
        </div>
      </section>

      <section className="nutrition-achievement-strip" aria-label="Daily Nutrition Support approach">
        <article><strong>Respect preferences</strong><span>Begin with the person&apos;s strengths and accepted routine.</span></article>
        <article><strong>Overcome barriers</strong><span>Find practical ways around sensory, schedule, and food limitations.</span></article>
        <article><strong>Create achievable wins</strong><span>Choose changes that caregivers can confidently carry into daily life.</span></article>
        <article><strong>Build on progress</strong><span>Access focused support for future goals.</span></article>
      </section>

      <section className="nutrition-benefits">
        <div className="section-heading">
          <p className="eyebrow">Support that fits real life</p>
          <h2>Progress does not require a perfect diet.</h2>
          <p>Small, sustainable additions can overcome everyday barriers and make a limited routine more complete while respecting preferences, sensory needs, and the caregiver&apos;s capacity.</p>
        </div>
        <div className="nutrition-benefit-grid">
          {benefits.map(([title, description]) => (
            <article key={title}><span>✓</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="nutrition-audience">
        <div className="nutrition-audience-copy">
          <p className="eyebrow">Designed for everyday challenges</p>
          <h2>Begin with what is happening at home.</h2>
          <p>This pathway can support families managing selective eating, a narrow food repertoire, inconsistent protein or produce intake, supplement confusion, or a desire for a steadier digestive routine.</p>
          <div className="nutrition-tag-cloud">
            <span>Selective eating</span><span>Sensory preferences</span><span>Nutrition gaps</span>
            <span>Digestive routine</span><span>Supplement guidance</span><span>Caregiver-friendly plans</span>
          </div>
        </div>
      </section>

      <section className="nutrition-cta">
        <p className="eyebrow">Take the first step</p>
          <h2>Show us the goal. Let&apos;s create the next win.</h2>
        <p>Complete the short starting questionnaire to identify the strongest opportunities for progress and choose the right level of support.</p>
        <Link className="primary-button" href="/nutrition-support/start">Start Daily Nutrition Support</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
