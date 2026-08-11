import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Choose Your Treatment | Peptide & Longevity Care | Apex Vitality",
  description:
    "Explore focused peptide and longevity care options subject to medical evaluation, prescription, state availability, and pharmacy fulfillment.",
};

const treatments = [
  {
    name: "Sermorelin",
    tag: "Sleep · recovery · healthy aging",
    headline: "Make recovery part of your advantage.",
    description:
      "A focused peptide pathway for adults ready to invest in stronger sleep, physical recovery, body composition, and healthy-aging goals.",
    image: "/treatment-sermorelin-v1.png",
    oneMonth: "$249",
    threeMonths: "$549",
    equivalent: "$183/month",
    savings: "Save $198",
  },
  {
    name: "NAD+",
    tag: "Cellular energy · focus · performance",
    headline: "Recharge the way you show up.",
    description:
      "Build NAD+ care around the energy, focus, recovery, and longevity goals that power your work, training, and life.",
    image: "/treatment-nad-v1.png",
    oneMonth: "$249",
    threeMonths: "$549",
    equivalent: "$183/month",
    savings: "Save $198",
  },
  {
    name: "Glutathione",
    tag: "Antioxidant support · resilience · wellness",
    headline: "Support your body from the inside out.",
    description:
      "A streamlined wellness pathway for people who want clinician-guided antioxidant support integrated into a more intentional routine.",
    image: "/treatment-glutathione-v1.png",
    oneMonth: "$249",
    threeMonths: "$549",
    equivalent: "$183/month",
    savings: "Save $198",
  },
  {
    name: "CJC-1295 / Ipamorelin",
    tag: "Performance · recovery · body composition",
    headline: "Build a stronger recovery strategy.",
    description:
      "A performance-minded peptide option for adults seeking a focused clinical pathway around training, recovery, sleep, and body composition.",
    image: "/treatment-cjc-ipamorelin-v1.png",
    oneMonth: "$269",
    threeMonths: "$599",
    equivalent: "About $200/month",
    savings: "Save $208",
  },
];

export default function TreatmentsPage() {
  return (
    <main className="treatment-shop-page">
      <SiteHeader />
      <section className="treatment-shop-hero">
        <p className="eyebrow">Focused treatment options</p>
        <h1>Explore the support that may fit your goals.</h1>
        <p>
          Begin with the option you want to discuss. A licensed clinician reviews
          your information and determines what is medically appropriate and legally
          available where you are located.
        </p>
        <div className="treatment-shop-proof" aria-label="Treatment experience">
          <span>Medical consultation included</span>
          <span>Home delivery when prescribed</span>
          <span>No separate membership required</span>
        </div>
      </section>

      <section className="treatment-showcase" aria-label="Treatment choices">
        {treatments.map((treatment, index) => (
          <article className={`treatment-product treatment-product-${index + 1}`} id={treatment.name.toLowerCase().replace(/\+.*/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} key={treatment.name}>
            <div className="treatment-product-image">
              <Image
                src={treatment.image}
                alt={`Illustrative prescription vial for ${treatment.name} treatment`}
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="treatment-image-title">
                <small>Focused care</small>
                <strong>{treatment.name}</strong>
              </div>
              <span className="treatment-image-note">Illustrative packaging</span>
            </div>

            <div className="treatment-product-copy">
              <p className="eyebrow">{treatment.tag}</p>
              <h2>{treatment.headline}</h2>
              <p>{treatment.description}</p>

              <div className="treatment-price-options">
                <section className="treatment-price-card">
                  <span>Try one month</span>
                  <strong>{treatment.oneMonth}</strong>
                  <small>One-time payment</small>
                  <Link className="secondary-dark-button" href={`/start?treatment=${encodeURIComponent(treatment.name)}&plan=1-month`}>
                    Choose one month
                  </Link>
                </section>

                <section className="treatment-price-card treatment-price-best">
                  <span className="best-value-badge">Best value</span>
                  <span>Three-month supply</span>
                  <strong>{treatment.threeMonths}</strong>
                  <small>{treatment.equivalent} · {treatment.savings}</small>
                  <Link className="primary-button" href={`/start?treatment=${encodeURIComponent(treatment.name)}&plan=3-month`}>
                    Choose three months
                  </Link>
                </section>
              </div>

              <p className="treatment-included">
                The displayed program price applies when the selected program is
                clinically authorized and available through the applicable pharmacy.
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="treatment-how-it-works">
        <p className="eyebrow">From choice to your door</p>
        <h2>A straightforward path from interest to clinical review.</h2>
        <div>
          <span><b>1</b><strong>Choose an option to discuss</strong><small>Select the program that interests you.</small></span>
          <span><b>2</b><strong>Complete your review</strong><small>Answer a brief medical questionnaire and connect with a qualified provider.</small></span>
          <span><b>3</b><strong>Receive your plan</strong><small>If prescribed, your treatment ships directly to your home.</small></span>
        </div>
      </section>

      <aside className="treatment-legal-note">
        <strong>Important treatment information</strong>
        <p>
          Medication eligibility and treatment decisions are made by a licensed
          medical provider after clinical review. A selected treatment is not
          guaranteed. If treatment is not prescribed, the applicable treatment
          purchase will be handled under the refund terms shown before payment.
          Compounded medications are not FDA-approved, and final medication,
          packaging, dispensing pharmacy, and availability vary by state. Qualiphy-supported
          prescription care is currently unavailable in Alabama and Mississippi.
        </p>
      </aside>

      <SiteFooter />
    </main>
  );
}
