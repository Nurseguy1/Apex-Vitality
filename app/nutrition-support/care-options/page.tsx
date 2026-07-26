import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components";

export const metadata: Metadata = {
  title: "Daily Nutrition Support Options | Apex Vitality",
  robots: { index: false, follow: false },
};

const options = [
  {
    label: "The simple start",
    title: "Daily Nutrition Foundation",
    price: "$79",
    description: "A short caregiver questionnaire, clinician review, and a practical foundation plan for everyday nutrition support.",
    items: ["Brief starting questionnaire", "Medication and supplement review", "Simple daily plan", "Fullscript recommendations when useful"],
    action: "Start with the foundation",
    featured: true,
  },
  {
    label: "When one concern needs more attention",
    title: "Focused Support",
    price: "$59 follow-up",
    description: "Add a focused visit for selective eating, protein intake, constipation or fiber, probiotics, omega-3s, or supplement questions.",
    items: ["Expanded questions for the concern", "Brief telehealth follow-up", "Plan adjustments", "Clear home observations to track"],
    action: "Explore focused support",
  },
  {
    label: "For the fuller picture",
    title: "Comprehensive Care",
    price: "45-minute visit",
    description: "A longer visit for complex histories, several overlapping concerns, optional lab decisions, or coordination with other clinicians.",
    items: ["Detailed history and goal review", "Longer telehealth visit", "Individualized care plan", "Optional testing or referral planning"],
    action: "Choose comprehensive care",
  },
];

export default function NutritionCareOptionsPage() {
  return (
    <main className="nutrition-preview">
      <SiteHeader />
      <section className="nutrition-options-hero">
        <p className="eyebrow">Support that grows with the need</p>
        <h1>Choose an achievable first step. Build momentum from there.</h1>
        <p>Every family can begin with a clear action they can manage today. Focused and comprehensive support helps overcome the next obstacle as new goals come into view.</p>
      </section>
      <section className="nutrition-option-grid">
        {options.map((option) => (
          <article className={option.featured ? "featured" : ""} key={option.title}>
            {option.featured && <span className="nutrition-best-start">Recommended start</span>}
            <p className="eyebrow">{option.label}</p>
            <h2>{option.title}</h2>
            <strong className="nutrition-price">{option.price}</strong>
            <p>{option.description}</p>
            <ul>{option.items.map((item) => <li key={item}>✓ {item}</li>)}</ul>
            <Link className={option.featured ? "primary-button" : "secondary-dark-button"} href={option.featured ? "/nutrition-support/start" : "/schedule"}>{option.action}</Link>
          </article>
        ))}
      </section>
      <section className="nutrition-routing">
        <div>
          <p className="eyebrow">Built-in safety without a burdensome intake</p>
          <h2>The questionnaire guides the next conversation.</h2>
        </div>
        <div className="nutrition-routing-list">
          <p><strong>Most families</strong><span>Begin with the foundation plan.</span></p>
          <p><strong>A specific nutrition or digestive concern</strong><span>Opens a focused set of questions and follow-up option.</span></p>
          <p><strong>Growth, swallowing, complex medications, or several concerns</strong><span>Moves into comprehensive care or coordinated referral.</span></p>
        </div>
      </section>
      <section className="nutrition-cta">
        <p className="eyebrow">Ready when you are</p>
        <h2>Meaningful progress can start with one clear next step.</h2>
        <Link className="primary-button" href="/nutrition-support/start">Start the questionnaire</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
