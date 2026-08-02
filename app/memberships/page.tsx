import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Memberships & Pricing | Apex Vitality",
  description: "Explore Apex Vitality consultation and monthly membership options for personalized telehealth care.",
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
    intro: "One clear monthly program connecting clinical care, treatment management, and home delivery.",
    features: ["Clinician evaluation and follow-up", "Prescription and refill management", "Medication fulfillment and delivery", "Treatment adjustments and coordination", "Secure non-urgent support", "Apex-branded experience"],
    checkoutUrl: "/schedule",
    checkoutLabel: "Start with an introductory visit",
  },
  {
    name: "Apex Performance Membership",
    price: "From $749 USD",
    cadence: "per month",
    intro: "For patients seeking elevated access and a deeper focus on performance, prevention, and long-term progress.",
    features: ["Everything in Apex Treatment Membership", "Monthly progress reviews", "Priority scheduling, subject to availability", "Extended appointments", "Quarterly comprehensive reviews", "Lifestyle and nutrition guidance", "Performance optimization planning"],
    checkoutUrl: "/schedule",
    checkoutLabel: "Start with an introductory visit",
  },
  {
    name: "Apex Private Client Care",
    price: "From $1,250 USD",
    cadence: "per month",
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
        <h1>Ongoing care designed around access, continuity, and your goals.</h1>
        <p>Choose the access, continuity, and level of support that matches the health goals you are ready to pursue.</p>
      </section>
      <section className="membership-page-grid">
        {options.map((option, index) => (
          <article className={`membership-card ${index === 3 ? "featured" : ""}`} key={option.name}>
            {index === 3 && <span className="membership-badge">Private client</span>}
            <h2>{option.name}</h2>
            <p className="membership-price"><strong>{option.price}</strong><span>{option.cadence}</span></p>
            <p>{option.intro}</p>
            <ul>{option.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <a className="primary-button" href={option.checkoutUrl}>{option.checkoutLabel}</a>
          </article>
        ))}
      </section>
      <section className="membership-terms">
        <h2>Clear expectations from the beginning.</h2>
        <div>
          <p><strong>What is included:</strong> Treatment memberships combine the services displayed for the selected program. Available medications, dosing, monitoring, and follow-up are personalized by the treating clinician.</p>
          <p><strong>What may be separate:</strong> Laboratory testing, imaging, supplements, and services outside the selected program are separate unless expressly stated.</p>
          <p><strong>Communication:</strong> Secure messaging is intended for non-urgent questions and is answered during business hours. It is not continuously monitored and is not an emergency service.</p>
          <p><strong>Clinical partnership:</strong> Membership provides ongoing assessment, education, guidance, and care planning. Your clinician helps you understand your health more clearly and coordinates a plan designed to help you achieve your goals.</p>
        </div>
      </section>
      <section className="membership-cta"><div><p className="eyebrow">Your first step</p><h2>Start with a $59 introductory visit.</h2><p>Establish care, clarify your goals, and build the path toward treatment and ongoing support.</p></div><Link className="primary-button" href="/schedule">Start online today</Link></section>
      <SiteFooter />
    </main>
  );
}
