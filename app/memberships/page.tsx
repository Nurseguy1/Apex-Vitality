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
    features: ["Included 15-minute initial appointment", "Scheduled clinician follow-up", "Prescription and refill management", "Focused progress monitoring", "Secure non-urgent support"],
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
    features: ["Included 45-minute comprehensive initial appointment", "Everything in Focused Care", "Longer, broader clinical reviews", "Multi-treatment coordination", "More frequent treatment-response review", "Clinically appropriate adjustments", "Secure non-urgent support"],
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
    features: ["Included 45-minute comprehensive initial appointment", "Everything in Apex Treatment Membership", "Monthly progress reviews", "Priority scheduling, subject to availability", "Extended appointments", "Quarterly comprehensive reviews", "Lifestyle and nutrition guidance", "Performance optimization planning"],
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
    features: ["Included 45-minute comprehensive initial appointment", "Everything in Apex Performance", "Highly responsive communication", "Frequent strategy visits", "Proactive laboratory and pharmacy coordination", "Concierge-level continuity", "A care cadence designed around your goals"],
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
        <h1>Begin for $39, then choose your membership.</h1>
        <p>If you are not sure which treatment you need, this is the place to establish care: choose a membership, make the one-time $39 initial-care payment, then complete membership enrollment. Focused Care at $149 per month includes a 15-minute initial appointment. The three higher memberships include a 45-minute comprehensive initial appointment.</p>
        <div className="membership-flow" aria-label="How membership enrollment works">
          <span><b>1</b><strong>Choose membership</strong><small>Select the care level you want.</small></span>
          <span><b>2</b><strong>Pay $39</strong><small>Make the one-time initial-care payment.</small></span>
          <span><b>3</b><strong>Schedule your visit</strong><small>15 minutes with Focused Care; 45 minutes with any higher tier.</small></span>
        </div>
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
              <p className="membership-visit-note"><strong>{index === 0 ? "Includes a 15-minute initial appointment" : "Includes a 45-minute comprehensive initial appointment"}</strong></p>
              <ul>{option.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <Link className="primary-button" href={option.detailsUrl}>Explore membership</Link>
            </article>
          </section>
        ))}
      </div>
      <section className="membership-terms">
        <h2>Choose the level of attention that fits your life.</h2>
        <div>
          <p><strong>Focused Care keeps one pathway simple:</strong> The $149 membership is the lowest level, the default ongoing option for peptide and NAD+ patients, and includes a 15-minute initial appointment.</p>
          <p><strong>Higher tiers add time, access, and breadth:</strong> Apex Treatment, Apex Performance, and Apex Private Client Care each include a 45-minute comprehensive initial appointment after enrollment.</p>
          <p><strong>The value is clinical attention:</strong> Medication, laboratory services, pharmacy charges, and other outside services are paid separately unless a written plan expressly says they are included.</p>
          <p><strong>Communication:</strong> Secure messaging is intended for non-urgent questions and is answered during business hours. It is not continuously monitored and is not an emergency service.</p>
          <p><strong>Clinical decisions stay clinical:</strong> Membership does not guarantee a prescription, refill, laboratory order, or particular outcome.</p>
        </div>
      </section>
      <section className="membership-cta"><div><p className="eyebrow">Not sure which treatment you need?</p><h2>Establish care with a one-time $39 payment.</h2><p>Choose Focused Care for a 15-minute initial appointment, or a higher tier for a 45-minute comprehensive initial appointment.</p></div><Link className="primary-button" href="/start?treatment=Establish%20Care&plan=initial">Start establishing care</Link></section>
      <SiteFooter />
    </main>
  );
}
