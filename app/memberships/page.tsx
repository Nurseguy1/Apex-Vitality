import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Memberships & Pricing | Apex Vitality",
  description: "Explore Apex Vitality membership care available to California residents.",
};

const options = [
  {
    detailsUrl: "/memberships/initial-care",
    image: "/membership-initial-care-v1.png",
    name: "Focused Care Membership",
    price: "$149 USD",
    cadence: "per month",
    intro: "Focused ongoing care for one treatment pathway with the essential clinical support needed to keep it moving.",
    features: ["Scheduled clinician follow-up", "Prescription and refill management", "Focused progress monitoring", "Secure non-urgent support"],
    checkoutUrl: "/schedule",
    checkoutLabel: "Start focused care",
  },
  {
    detailsUrl: "/memberships/treatment",
    image: "/membership-treatment-v1.png",
    name: "Apex Treatment Membership",
    price: "From $499 USD",
    cadence: "per month",
    annual: "From $4,990/year — 2 months free",
    intro: "Broader, more connected care for patients managing multiple goals, treatments, or health priorities.",
    features: ["Everything in Focused Care", "Longer, broader clinical reviews", "Multi-treatment coordination", "More frequent treatment-response review", "Clinically appropriate adjustments", "Secure non-urgent support"],
    checkoutUrl: "/schedule",
    checkoutLabel: "Start with an introductory visit",
  },
  {
    detailsUrl: "/memberships/performance",
    image: "/membership-performance-diverse-v2.png",
    name: "Apex Performance Membership",
    price: "From $749 USD",
    cadence: "per month",
    annual: "From $7,490/year — 2 months free",
    intro: "For patients seeking more frequent monitoring and a deeper focus on performance, prevention, and long-term progress.",
    features: ["Everything in Apex Treatment Membership", "Monthly progress reviews", "Priority scheduling, subject to availability", "Extended appointments", "Quarterly comprehensive reviews", "Lifestyle and nutrition guidance", "Performance optimization planning"],
    checkoutUrl: "/schedule",
    checkoutLabel: "Start with an introductory visit",
  },
  {
    detailsUrl: "/memberships/private-client",
    image: "/membership-private-v1.png",
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
      <section className="membership-availability" aria-label="Membership availability">
        <p className="eyebrow">California membership care</p>
        <h1>Membership care for California residents.</h1>
        <p>Choose closer monitoring, ongoing support, and a more connected relationship with your Apex care team.</p>
      </section>
      <div className="membership-scroll-stack" aria-label="Membership choices">
        {options.map((option, index) => (
          <section
            className={`membership-choice-panel membership-choice-${index + 1}`}
            id={`membership-${index + 1}`}
            style={{ backgroundImage: `linear-gradient(90deg, rgba(242,247,246,.96) 0%, rgba(242,247,246,.76) 34%, rgba(242,247,246,.08) 62%), url('${option.image}')` }}
            key={option.name}
          >
            <article className={`membership-card membership-card-modern membership-tone-${index + 1} ${index === 3 ? "featured" : ""}`}>
              {index === 3 && <span className="membership-badge">Private client</span>}
              <p className="eyebrow">Membership {index + 1} of 4</p>
              <h2>{option.name}</h2>
              <p className={`membership-price ${index === 0 ? "membership-price-focused" : ""}`}><strong>{option.price}</strong><span>{option.cadence}</span></p>
              {"annual" in option && <p className="membership-annual">{option.annual}</p>}
              <p>{option.intro}</p>
              <ul>{option.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <Link className="primary-button" href={option.detailsUrl}>Explore membership</Link>
            </article>
          </section>
        ))}
      </div>
      <section className="membership-terms">
        <h2>Choose the level of attention that fits your life.</h2>
        <div>
          <p><strong>Focused Care keeps one pathway simple:</strong> The $149 membership is designed for patients who want essential ongoing care around a focused treatment plan.</p>
          <p><strong>Higher tiers add time, access, and breadth:</strong> They are designed for people who want broader health oversight, longer and more frequent reviews, proactive coordination, performance planning, or concierge-level continuity.</p>
          <p><strong>The value is clinical attention:</strong> Medication, laboratory services, pharmacy charges, and other outside services are paid separately unless a written plan expressly says they are included.</p>
          <p><strong>Communication:</strong> Secure messaging is intended for non-urgent questions and is answered during business hours. It is not continuously monitored and is not an emergency service.</p>
          <p><strong>Clinical decisions stay clinical:</strong> Membership does not guarantee a prescription, refill, laboratory order, or particular outcome.</p>
        </div>
      </section>
      <section className="membership-cta"><div><p className="eyebrow">Your first step</p><h2>Start focused ongoing care for $149 per month.</h2><p>Choose essential treatment support now, with the option to move into a higher-touch tier as your needs grow.</p></div><Link className="primary-button" href="/start?treatment=Focused%20Care%20Membership&plan=ongoing">Start online today</Link></section>
      <SiteFooter />
    </main>
  );
}
