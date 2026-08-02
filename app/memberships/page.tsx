import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Memberships & Pricing | Apex Vitality",
  description: "Explore simple monthly and discounted annual Apex Vitality memberships with all your care in one plan.",
};

const options = [
  {
    name: "Introductory Visit",
    price: "$59 USD",
    cadence: "one-time",
    intro: "A simple first visit to establish care, clarify your goals, and plan the right next step.",
    features: ["Focused clinician review", "Health, medication, and risk review", "Relevant laboratory planning", "Full $59 credit toward your comprehensive follow-up within 90 days"],
    checkoutUrl: "https://buy.stripe.com/3cI8wQa8fdGo84TaNSfnO03",
    checkoutLabel: "Start for $59",
  },
  {
    name: "Apex Treatment Membership",
    price: "From $499 USD",
    cadence: "per month",
    annual: "From $4,990/year — 2 months free",
    intro: "One membership connecting clinical care, treatment, labs, and home delivery.",
    features: ["Clinician visits and follow-up", "Prescription and refill management", "Medication fulfillment and delivery", "Included laboratory testing", "Treatment adjustments", "Ongoing support"],
    checkoutUrl: "/schedule",
    checkoutLabel: "Start with an introductory visit",
  },
  {
    name: "Apex Performance Membership",
    price: "From $749 USD",
    cadence: "per month",
    annual: "From $7,490/year — 2 months free",
    intro: "For patients seeking elevated access and a deeper focus on performance, prevention, and long-term progress.",
    features: ["Everything in Apex Treatment Membership", "Monthly progress reviews", "Priority scheduling, subject to availability", "Extended appointments", "Quarterly comprehensive reviews", "Lifestyle and nutrition guidance", "Performance optimization planning"],
    checkoutUrl: "/schedule",
    checkoutLabel: "Start with an introductory visit",
  },
  {
    name: "Apex Private Client Care",
    price: "From $1,250 USD",
    cadence: "per month",
    annual: "From $12,500/year — 2 months free",
    intro: "Limited-enrollment concierge care for patients who value exceptional access, privacy, and proactive coordination.",
    features: ["Everything in Apex Performance", "Highly responsive communication", "Frequent strategy visits", "Proactive laboratory and pharmacy coordination", "Concierge-level continuity", "A care cadence designed around your goals"],
    checkoutUrl: "/schedule",
    checkoutLabel: "Request private client care",
  },
];

export default function MembershipsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="membership-hero">
        <p className="eyebrow">Memberships &amp; pricing</p>
        <h1>One membership. All your care.</h1>
        <p>Choose easy monthly payments or save with an annual membership. Clinician visits, medications, labs, delivery, and ongoing support are included—no separate bills.</p>
      </section>
      <section className="membership-page-grid">
        {options.map((option, index) => (
          <article className={`membership-card ${index === 3 ? "featured" : ""}`} key={option.name}>
            {index === 3 && <span className="membership-badge">Private client</span>}
            <h2>{option.name}</h2>
            <p className="membership-price"><strong>{option.price}</strong><span>{option.cadence}</span></p>
            {"annual" in option && <p className="membership-annual">{option.annual}</p>}
            <p>{option.intro}</p>
            <ul>{option.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <a className="primary-button" href={option.checkoutUrl}>{option.checkoutLabel}</a>
          </article>
        ))}
      </section>
      <section className="membership-terms">
        <h2>Simple from the beginning.</h2>
        <div>
          <p><strong>All your care in one membership:</strong> Clinician visits, medications, labs, delivery, and ongoing support are included in your selected program.</p>
          <p><strong>Communication:</strong> Secure messaging is intended for non-urgent questions and is answered during business hours. It is not continuously monitored and is not an emergency service.</p>
        </div>
      </section>
      <section className="membership-cta"><div><p className="eyebrow">Your first step</p><h2>Start with a $59 introductory visit.</h2><p>Establish care, clarify your goals, and build the path toward treatment and ongoing support.</p></div><Link className="primary-button" href="/schedule">Start online today</Link></section>
      <SiteFooter />
    </main>
  );
}
