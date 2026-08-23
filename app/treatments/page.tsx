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
    oneMonth: "$39",
    threeMonths: "$149/month",
    equivalent: "Medication paid separately",
    savings: "Cancel future renewals anytime",
    firstLabel: "Initial visit",
    firstNote: "One-time payment",
    secondLabel: "Ongoing clinical care",
    href: "/sermorelin",
    ctaLabel: "Explore Sermorelin care",
  },
  {
    name: "NAD+",
    tag: "Cellular energy · focus · performance",
    headline: "Recharge the way you show up.",
    description:
      "Build NAD+ care around the energy, focus, recovery, and longevity goals that power your work, training, and life.",
    image: "/treatment-nad-v1.png",
    oneMonth: "$39",
    threeMonths: "$149/month",
    equivalent: "Medication paid separately",
    savings: "Cancel future renewals anytime",
    firstLabel: "Questionnaire review",
    firstNote: "One-time payment",
    secondLabel: "Ongoing clinical care",
    href: "/nad-plus",
    ctaLabel: "Explore NAD+ care",
  },
  {
    name: "Glutathione",
    tag: "Antioxidant support · resilience · wellness",
    headline: "Support your body from the inside out.",
    description:
      "A streamlined wellness pathway for people who want clinician-guided antioxidant support integrated into a more intentional routine.",
    image: "/treatment-glutathione-v1.png",
    oneMonth: "$39",
    threeMonths: "$149/month",
    equivalent: "Medication paid separately",
    savings: "Cancel future renewals anytime",
    firstLabel: "Questionnaire review",
    firstNote: "One-time payment",
    secondLabel: "Ongoing clinical care",
    href: "/glutathione",
    ctaLabel: "Explore Glutathione care",
  },
  {
    name: "Medical Weight Loss",
    tag: "Weight management · metabolic health · ongoing support",
    headline: "Move forward with a plan built around you.",
    description:
      "Personalized clinical evaluation, medication management, progress monitoring, and ongoing support, with FDA-approved options such as Wegovy or Zepbound considered when appropriate.",
    image: "/weight-loss-couple-walking-v1.png",
    oneMonth: "$149/month",
    threeMonths: "Paid separately",
    equivalent: "Direct from the dispensing pharmacy",
    savings: "No medication markup",
    firstLabel: "Clinical membership",
    firstNote: "Ongoing medical care",
    secondLabel: "Medication cost",
    href: "/weight-loss",
    ctaLabel: "Explore weight-loss care",
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
          <span>Clinician-guided care</span>
          <span>Home delivery when prescribed</span>
          <span>Medication paid separately</span>
        </div>
      </section>

      <section className="treatment-showcase" aria-label="Treatment choices">
        {treatments.map((treatment, index) => (
          <article className={`treatment-product treatment-product-${index + 1}`} id={treatment.name.toLowerCase().replace(/\+.*/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} key={treatment.name}>
            <div className="treatment-product-image">
              <Image
                src={treatment.image}
                alt={treatment.name === "Medical Weight Loss"
                  ? "Active man and woman walking together outdoors"
                  : `Illustrative prescription vial for ${treatment.name} treatment`}
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="treatment-image-title">
                <strong>{treatment.name}</strong>
                <small>Focused care</small>
              </div>
              <span className="treatment-image-note">Illustrative packaging</span>
            </div>

            <div className="treatment-product-copy">
              <p className="eyebrow">{treatment.tag}</p>
              <h2>{treatment.headline}</h2>
              <p>{treatment.description}</p>

              <div className="treatment-price-options">
                <section className="treatment-price-card">
                  <span>{treatment.firstLabel}</span>
                  <strong className={treatment.name === "Medical Weight Loss" ? "treatment-price-monthly" : undefined}>
                    {treatment.oneMonth}
                  </strong>
                  <small>{treatment.firstNote}</small>
                  <Link className="secondary-dark-button" href={treatment.href ?? `/start?treatment=${encodeURIComponent(treatment.name)}&plan=initial`}>
                    {treatment.ctaLabel ?? "Choose one month"}
                  </Link>
                </section>

                <section className="treatment-price-card treatment-price-best">
                  <span className="best-value-badge">{treatment.name === "Medical Weight Loss" ? "Medication" : "Ongoing care"}</span>
                  <span>{treatment.secondLabel}</span>
                  <strong className={treatment.threeMonths === "Paid separately" ? "treatment-price-separate" : "treatment-price-monthly"}>
                    {treatment.threeMonths}
                  </strong>
                  <small>{treatment.equivalent} · {treatment.savings}</small>
                  <Link className="primary-button" href={treatment.href ?? `/start?treatment=${encodeURIComponent(treatment.name)}&plan=initial`}>
                    {treatment.ctaLabel ?? "Start with an initial visit"}
                  </Link>
                </section>
              </div>

              <p className="treatment-included">
                Medication and any clinically appropriate laboratory services are
                billed separately.
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
          guaranteed. Clinical-care fees do not guarantee that medication will be prescribed.
          Medication and pharmacy charges are separate and paid by the patient.
          Compounded medications are not FDA-approved, and final medication,
          packaging and dispensing pharmacy may vary. Clinical care is currently
          available only to adults physically located in California at the time of care.
        </p>
      </aside>

      <SiteFooter />
    </main>
  );
}
