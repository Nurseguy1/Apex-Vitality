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
    name: "Initial Care Visit",
    price: "$259 USD",
    cadence: "one-time",
    intro: "Connect with a qualified medical clinician and begin the right next step.",
    features: ["Initial clinician visit", "Focused health and medication review", "Prescription coordination or laboratory kit", "Personalized next steps"],
    checkoutUrl: "/schedule",
    checkoutLabel: "Start for $259",
  },
  {
    detailsUrl: "/memberships/treatment",
    image: "/membership-treatment-v1.png",
    name: "Apex Treatment Membership",
    price: "From $499 USD",
    cadence: "per month",
    annual: "From $4,990/year — 2 months free",
    intro: "Ongoing clinical monitoring, follow-up, and treatment coordination in one connected relationship.",
    features: ["Scheduled clinician follow-up", "Prescription and refill management", "Laboratory monitoring when included", "Treatment-response review", "Clinically appropriate adjustments", "Secure non-urgent support"],
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
              <p className="membership-price"><strong>{option.price}</strong><span>{option.cadence}</span></p>
              {"annual" in option && <p className="membership-annual">{option.annual}</p>}
              <p>{option.intro}</p>
              <ul>{option.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <Link className="primary-button" href={option.detailsUrl}>Explore membership</Link>
            </article>
          </section>
        ))}
      </div>
      <section className="membership-terms">
        <h2>Simple from the beginning.</h2>
        <div>
          <p><strong>The value is continuity:</strong> Your selected membership defines its included visits, monitoring, testing, coordination, and support. Medication and outside services are included only when the specific plan expressly says so.</p>
          <p><strong>Communication:</strong> Secure messaging is intended for non-urgent questions and is answered during business hours. It is not continuously monitored and is not an emergency service.</p>
          <p><strong>Clinical decisions stay clinical:</strong> Membership does not guarantee a prescription, refill, laboratory order, or particular outcome.</p>
        </div>
      </section>
      <section className="membership-cta"><div><p className="eyebrow">Your first step</p><h2>Start with a $259 initial care visit.</h2><p>Connect with a qualified medical clinician and begin the right next step.</p></div><Link className="primary-button" href="/start">Start online today</Link></section>
      <SiteFooter />
    </main>
  );
}
