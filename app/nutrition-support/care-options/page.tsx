import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components";

export const metadata: Metadata = {
  title: "3-Month Special Needs Nutrition Program | Apex Vitality",
  robots: { index: false, follow: false },
};

const options = [
  {
    label: "Fixed three-month program",
    title: "Special Needs Nutrition Program",
    price: "$597 total",
    description: "Enroll with one fixed $597 payment ($199 per month equivalent). The standard $39 initial-care portion is included in this total—not charged separately. There is no automatic renewal.",
    items: ["The $39 initial-care portion is included in the $597 total", "Month 1: 45-minute initial visit and written plan", "Month 2: one 30-minute follow-up and plan adjustment", "Month 3: one 30-minute follow-up and final plan update", "Clinical messaging, Fullscript bundles, labs, and outside services are not included"],
    action: "Review agreement & enroll · $597",
    featured: true,
    href: "/start?treatment=3-Month%20Special%20Needs%20Nutrition%20Program&plan=program",
  },
  {
    label: "After the three months",
    title: "Optional Focused Care",
    price: "$149/month",
    description: "Patients who are stable but want continued scheduled clinical follow-up may choose Focused Care after completing the program. It is a separate, optional enrollment.",
    items: ["No automatic transition", "One focused treatment pathway", "Scheduled clinical follow-up", "Supplements, labs, and outside services paid separately"],
    action: "Review Focused Care",
    href: "/memberships/initial-care",
  },
];

export default function NutritionCareOptionsPage() {
  return (
    <main className="nutrition-preview">
      <SiteHeader />
      <section className="nutrition-options-hero">
        <p className="eyebrow">Apex Daily Nutrition Support for Special Needs</p>
        <h1>3-Month Special Needs Nutrition Program</h1>
        <p>Review the complete program here first. When you are ready, one agreement and one $597 checkout enroll you in the full three-month program, including the initial-care portion and 45-minute visit.</p>
        <div className="membership-flow" aria-label="Special Needs Nutrition enrollment flow">
          <span><b>1</b><strong>Review the program</strong><small>Confirm the visits, price, and eligibility.</small></span>
          <span><b>2</b><strong>Agree &amp; pay $597 for the three-month program</strong><small>One payment includes the $39 initial-care portion.</small></span>
          <span><b>3</b><strong>Schedule 45 minutes</strong><small>Book the included comprehensive initial visit.</small></span>
        </div>
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
            <Link className={option.featured ? "primary-button" : "secondary-dark-button"} href={option.href}>{option.action}</Link>
          </article>
        ))}
      </section>
      <section className="nutrition-routing">
        <div>
          <p className="eyebrow">Built-in safety without a burdensome intake</p>
          <h2>The questionnaire guides the next conversation.</h2>
        </div>
        <div className="nutrition-routing-list">
          <p><strong>Most families</strong><span>Enroll in the fixed three-month program with one $597 payment, including the initial-care portion.</span></p>
          <p><strong>A specific nutrition or digestive concern</strong><span>Is addressed through the written plan and two scheduled follow-up adjustments.</span></p>
          <p><strong>Growth, swallowing, complex medications, or several concerns</strong><span>Receives additional clinical review and may require coordinated referral before enrollment.</span></p>
        </div>
        <p className="program-fullscript-note">Children age 4+, teens, and adults may be considered. A parent or legal guardian must participate for a minor. Funding or reimbursement is not guaranteed and depends on the approved plan and funding administrator.</p>
      </section>
      <section className="nutrition-cta">
        <p className="eyebrow">Ready when you are</p>
        <h2>Meaningful progress can start with one clear next step.</h2>
        <div className="hero-actions">
          <Link className="primary-button" href="/start?treatment=3-Month%20Special%20Needs%20Nutrition%20Program&plan=program">Review agreement &amp; enroll · $597</Link>
          <Link className="secondary-dark-button" href="/nutrition-support#nutrition-bundles">View supplement bundle examples</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
