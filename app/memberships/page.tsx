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
    intro: "A focused first step for understanding your goals, health history, and appropriate care options.",
    features: ["Unhurried clinical evaluation", "Health, medication, and risk review", "Relevant laboratory planning", "Personalized recommendations and next steps"],
  },
  {
    name: "Apex Core Membership",
    price: "$225 USD",
    cadence: "per month",
    intro: "Designed for patients who value consistent access and ongoing medical management.",
    features: ["Personalized treatment planning", "Clinically appropriate follow-up visits", "Secure non-urgent messaging during business hours", "Care-plan coordination and treatment management", "Annual wellness planning", "Preferred pricing on selected laboratory services when available"],
  },
  {
    name: "Apex Performance Membership",
    price: "$375 USD",
    cadence: "per month",
    intro: "For patients seeking elevated access and a deeper focus on performance, prevention, and long-term progress.",
    features: ["Everything in Apex Core", "Priority scheduling, subject to availability", "Extended appointments", "Quarterly comprehensive reviews", "Lifestyle and nutrition guidance", "Annual advanced laboratory interpretation", "Performance optimization planning"],
  },
];

export default function MembershipsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="membership-hero">
        <p className="eyebrow">Memberships &amp; pricing</p>
        <h1>Ongoing care designed around access, continuity, and your goals.</h1>
        <p>Memberships provide professional clinical services and a more connected care experience. They do not sell or guarantee medication, testing, or a particular outcome.</p>
      </section>
      <section className="membership-page-grid">
        {options.map((option, index) => (
          <article className={`membership-card ${index === 2 ? "featured" : ""}`} key={option.name}>
            {index === 2 && <span className="membership-badge">Elevated access</span>}
            <h2>{option.name}</h2>
            <p className="membership-price"><strong>{option.price}</strong><span>{option.cadence}</span></p>
            <p>{option.intro}</p>
            <ul>{option.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <Link className="primary-button" href="/schedule">{index === 0 ? "Schedule your consultation" : "Start with a consultation"}</Link>
          </article>
        ))}
      </section>
      <section className="membership-terms">
        <h2>Clear expectations from the beginning.</h2>
        <div>
          <p><strong>What is separate:</strong> Medications, laboratory testing, pharmacy charges, imaging, supplements, and services from outside clinicians or facilities are not included unless expressly stated.</p>
          <p><strong>Communication:</strong> Secure messaging is intended for non-urgent questions and is answered during business hours. It is not continuously monitored and is not an emergency service.</p>
          <p><strong>Clinical decisions:</strong> Membership does not guarantee a prescription, a specific therapy, or acceptance into every program. Recommendations follow individualized clinical evaluation.</p>
        </div>
      </section>
      <section className="membership-cta"><div><p className="eyebrow">Your first step</p><h2>Start with a comprehensive consultation.</h2><p>We will review your goals and determine whether an Apex membership or another care path is the right fit.</p></div><Link className="primary-button" href="/schedule">Schedule securely through Healthie</Link></section>
      <SiteFooter />
    </main>
  );
}
