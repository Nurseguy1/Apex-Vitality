import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Daily Nutrition Support for Special Needs | Apex Vitality",
  description: "A three-month, caregiver-guided nutrition and digestive wellness program for children with special needs and selective or limited diets.",
  robots: { index: false, follow: false },
};

const benefits = [
  ["A simpler daily routine", "Practical recommendations designed around foods, textures, schedules, and supplements your family can realistically use."],
  ["Whole-person support", "Nutrition, digestion, medications, sensitivities, sleep, and daily routines are considered together."],
  ["A defined three-month path", "Start with a written plan, then use two scheduled follow-ups to make practical adjustments."],
];

export default function NutritionSupportPage() {
  return (
    <main className="nutrition-preview">
      <SiteHeader />
      <section className="nutrition-hero">
        <div className="nutrition-hero-copy">
          <p className="eyebrow">Apex Daily Nutrition Support for Special Needs</p>
          <h1>A practical nutrition plan for the child you worry about every day.</h1>
          <p className="nutrition-lead">
            A caregiver-guided nutrition and digestive wellness program created
            primarily for parents of children with special needs and selective or
            limited diets. Share your child&apos;s routine, strengths, preferences,
            and your biggest concerns. We&apos;ll help you build a practical plan that
            creates meaningful wins at home. Teens and adults may also be considered.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/nutrition-support/care-options">Review program &amp; pricing</Link>
            <Link className="secondary-button" href="/nutrition-support/start">Start the questionnaire</Link>
          </div>
          <p className="nutrition-reassurance">No routine lab work is required to get started.</p>
        </div>
      </section>

      <section className="nutrition-achievement-strip" aria-label="Daily Nutrition Support approach">
        <article><strong>Respect preferences</strong><span>Begin with the person&apos;s strengths and accepted routine.</span></article>
        <article><strong>Overcome barriers</strong><span>Find practical ways around sensory, schedule, and food limitations.</span></article>
        <article><strong>Create achievable wins</strong><span>Choose changes that caregivers can confidently carry into daily life.</span></article>
        <article><strong>Build on progress</strong><span>Use the included month 2 and month 3 visits to refine the plan.</span></article>
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

      <section className="program-fullscript" id="nutrition-bundles" aria-labelledby="nutrition-bundles-title">
        <div>
          <p className="eyebrow">Optional Fullscript support</p>
          <h2 id="nutrition-bundles-title">Bundle examples designed around the person and the routine.</h2>
          <p>A clinician may recommend an age-appropriate bundle after reviewing accepted foods, supplement forms, medications, health history, and the family&apos;s priorities.</p>
        </div>
        <div className="program-fullscript-grid">
          <article>
            <span>01</span>
            <h3>Daily nutrition foundation</h3>
            <p>A streamlined starting bundle for likely everyday nutrition gaps, using forms and flavors the person is more likely to accept.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Digestive routine support</h3>
            <p>Personalized options organized around digestive comfort, fiber or regularity goals, hydration, and the existing food routine.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Flexible-format support</h3>
            <p>Powders, liquids, chewables, capsules, or other practical formats selected to respect sensory preferences and caregiver capacity.</p>
          </article>
        </div>
        <p className="program-fullscript-note">These are examples, not preselected prescriptions. Exact products, doses, and whether supplements are appropriate depend on clinician review, age, health history, and current medications. Fullscript purchases are optional, paid separately, and not included in Apex Vitality clinical-care, program, or membership fees.</p>
      </section>

      <section className="nutrition-audience">
        <div className="nutrition-audience-copy">
          <p className="eyebrow">Designed for everyday challenges</p>
          <h2>Begin with what you are seeing at home.</h2>
          <p>This pathway is designed for parents and caregivers managing selective eating, a narrow food repertoire, inconsistent protein or produce intake, supplement confusion, or a desire for a steadier digestive routine.</p>
          <div className="nutrition-tag-cloud">
            <span>Selective eating</span><span>Sensory preferences</span><span>Nutrition gaps</span>
            <span>Digestive routine</span><span>Supplement guidance</span><span>Caregiver-friendly plans</span>
          </div>
        </div>
      </section>

      <section className="nutrition-cta">
        <p className="eyebrow">Take the first step</p>
          <h2>Show us the goal. Let&apos;s create the next win.</h2>
        <p>Enroll in the fixed three-month program with one $597 payment ($199 per month equivalent). The standard $39 initial-care portion is included in that total and is not charged separately. The program includes one 45-minute initial visit, a written plan, and two 30-minute follow-ups. It does not renew automatically.</p>
        <p className="program-fullscript-note">Children age 4+, teens, and adults may be considered. A parent or legal guardian must participate for a minor. Funding or reimbursement depends on the person&apos;s approved plan and funding administrator.</p>
        <Link className="primary-button" href="/nutrition-support/care-options">Review program and enrollment</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
