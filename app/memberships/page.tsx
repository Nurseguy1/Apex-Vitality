import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Memberships & Pricing | Apex Vitality",
  description: "Explore Apex Vitality consultation and monthly membership options for personalized telehealth care.",
};

const options = [
  {
    name: "Comprehensive New Patient Consultation",
    price: "$325 USD",
    cadence: "one-time",
    intro: "A complete first step for connecting your goals and health history with a personalized care plan.",
    features: ["Unhurried clinician review", "Health, medication, and risk review", "Relevant laboratory planning", "Personalized recommendations and next steps"],
    checkoutUrl: "https://buy.stripe.com/eVq9AU1BJ7i00Cr9JOfnO00",
    checkoutLabel: "Pay securely with Stripe",
  },
  {
    name: "Apex Core Membership",
    price: "$225 USD",
    cadence: "per month",
    intro: "Designed for patients who value consistent access and ongoing medical management.",
    features: ["Personalized treatment planning", "Clinically appropriate follow-up visits", "Secure non-urgent messaging during business hours", "Care-plan coordination and treatment management", "Annual wellness planning", "Preferred pricing on selected laboratory services when available"],
    checkoutUrl: "https://buy.stripe.com/5kQcN6cgn1XG0Crg8cfnO01",
    checkoutLabel: "Start Apex Core",
  },
  {
    name: "Apex Performance Membership",
    price: "$375 USD",
    cadence: "per month",
    intro: "For patients seeking elevated access and a deeper focus on performance, prevention, and long-term progress.",
    features: ["Everything in Apex Core", "Priority scheduling, subject to availability", "Extended appointments", "Quarterly comprehensive reviews", "Lifestyle and nutrition guidance", "Annual advanced laboratory interpretation", "Performance optimization planning"],
    checkoutUrl: "https://buy.stripe.com/cNieVe3JRfOwbh5bRWfnO02",
    checkoutLabel: "Start Apex Performance",
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
          <article className={`membership-card ${index === 2 ? "featured" : ""}`} key={option.name}>
            {index === 2 && <span className="membership-badge">Elevated access</span>}
            <h2>{option.name}</h2>
            <p className="membership-price"><strong>{option.price}</strong><span>{option.cadence}</span></p>
            <p>{option.intro}</p>
            <ul>{option.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <a className="primary-button" href={option.checkoutUrl} rel="noreferrer" target="_blank">{option.checkoutLabel}</a>
          </article>
        ))}
      </section>
      <section className="membership-terms">
        <h2>Clear expectations from the beginning.</h2>
        <div>
          <p><strong>What is separate:</strong> Medications, laboratory testing, pharmacy charges, imaging, supplements, and services from outside clinicians or facilities are not included unless expressly stated.</p>
          <p><strong>Communication:</strong> Secure messaging is intended for non-urgent questions and is answered during business hours. It is not continuously monitored and is not an emergency service.</p>
          <p><strong>Clinical partnership:</strong> Membership provides ongoing assessment, education, guidance, and care planning. Your clinician helps you understand your health more clearly and coordinates a plan designed to help you achieve your goals.</p>
        </div>
      </section>
      <section className="membership-cta"><div><p className="eyebrow">Your first step</p><h2>Start with a comprehensive consultation.</h2><p>Your clinician reviews your goals, builds your initial plan, and helps you choose the ongoing support that keeps it moving.</p></div><Link className="primary-button" href="/schedule">Pay and start my care</Link></section>
      <SiteFooter />
    </main>
  );
}
