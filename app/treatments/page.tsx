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
    savings: "Choose after the initial visit",
    firstLabel: "Initial visit",
    firstNote: "One-time payment · no automatic membership charge",
    secondLabel: "Ongoing clinical care",
    href: "/sermorelin",
    detailsLabel: "Learn about Sermorelin care",
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
    savings: "Focused Care is the default next step",
    firstLabel: "Questionnaire review",
    firstNote: "One-time payment · membership approved separately",
    secondLabel: "Ongoing clinical care",
    href: "/nad-plus",
    detailsLabel: "Learn about NAD+ care",
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
    savings: "Choose after the initial visit",
    firstLabel: "Questionnaire review",
    firstNote: "One-time payment · membership approved separately",
    secondLabel: "Ongoing clinical care",
    href: "/glutathione",
    detailsLabel: "Learn about Glutathione care",
    ctaLabel: "Explore Glutathione care",
  },
  {
    name: "Medical Weight Loss",
    tag: "Weight management · metabolic health · ongoing support",
    headline: "Move forward with a plan built around you.",
    description:
      "Personalized clinical evaluation, medication management, progress monitoring, and ongoing support, with FDA-approved options such as Wegovy or Zepbound considered when appropriate.",
    image: "/weight-loss-couple-walking-v1.png",
    oneMonth: "$39",
    threeMonths: "$149/month",
    equivalent: "Medication paid separately",
    savings: "Choose after the initial visit",
    firstLabel: "Initial visit",
    firstNote: "One-time payment · membership approved separately",
    secondLabel: "Ongoing clinical care",
    href: "/weight-loss",
    detailsLabel: "Learn about weight-loss care",
    ctaLabel: "Explore weight-loss care",
  },
  {
    name: "Metabolic & Gut Health",
    tag: "Metabolic wellness · digestive support · adult nutrition",
    headline: "Connect nutrition, digestion, and metabolic health.",
    description:
      "Clinician-guided care that brings digestive wellness, metabolic goals, nutrition, lifestyle, and optional Fullscript supplement bundles into one practical plan.",
    image: "/program-metabolic-couple-v1.png",
    oneMonth: "$39",
    threeMonths: "$149/month",
    equivalent: "Fullscript bundles paid separately",
    savings: "Choose after the initial visit",
    firstLabel: "Initial clinical review",
    firstNote: "One-time payment · membership approved separately",
    secondLabel: "Ongoing membership care",
    href: "/programs/metabolic-gut#fullscript-bundles",
    detailsLabel: "See program and Fullscript bundles",
    ctaLabel: "Start metabolic care",
  },
  {
    name: "Special Needs Nutrition",
    tag: "Caregiver-guided nutrition · digestive wellness · practical support",
    headline: "Make everyday nutrition feel more achievable.",
    description:
      "Personalized nutrition and digestive-wellness support designed around preferences, sensory needs, daily routines, and realistic goals for children, teens, and adults with special needs.",
    image: "/nutrition-support-family-v1.png",
    oneMonth: "$39 included",
    threeMonths: "$597 total",
    equivalent: "$199/month equivalent",
    savings: "No automatic renewal",
    firstLabel: "Initial-care portion",
    firstNote: "Included in the $597 total · not charged separately",
    secondLabel: "Fixed three-month program",
    href: "/nutrition-support/care-options",
    detailsLabel: "Review the 3-month program and enrollment",
    ctaLabel: "Start nutrition program",
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
          Standard treatment paths begin with a one-time $39 initial-care payment. Special Needs Nutrition
          combines that portion into one $597 three-month program payment. A licensed clinician reviews your
          information and determines what is medically appropriate and legally available where you are located.
        </p>
        <div className="treatment-shop-proof" aria-label="Treatment experience">
          <span>Clinician-guided care</span>
          <span>Standard care starts at $39</span>
          <span>Special Needs: one $597 payment</span>
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
                  : treatment.name === "Metabolic & Gut Health"
                    ? "Active adult couple walking together as part of a metabolic wellness routine"
                  : treatment.name === "Special Needs Nutrition"
                    ? "Caregiver and family sharing a supportive nutrition routine"
                    : `Illustrative prescription vial for ${treatment.name} treatment`}
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="treatment-image-title">
                <strong>{treatment.name}</strong>
                <small>{treatment.name === "Special Needs Nutrition" ? "Fixed three-month program" : "Focused care"}</small>
              </div>
              {["Sermorelin", "NAD+", "Glutathione"].includes(treatment.name) ? <span className="treatment-image-note">Illustrative packaging</span> : null}
            </div>

            <div className="treatment-product-copy">
              <p className="eyebrow">{treatment.tag}</p>
              <h2>{treatment.headline}</h2>
              <p>{treatment.description}</p>
              <Link className="text-link treatment-details-link" href={treatment.href}>
                {treatment.detailsLabel} →
              </Link>

              <div className="treatment-price-options">
                <section className="treatment-price-card">
                  <span>{treatment.name === "Special Needs Nutrition" ? treatment.firstLabel : "One-time initial-care payment"}</span>
                  <strong>
                    {treatment.oneMonth}
                  </strong>
                  <small>{treatment.firstNote}</small>
                  {treatment.name === "Special Needs Nutrition" ? (
                    <p className="location-router-note"><strong>Included automatically in the program total.</strong></p>
                  ) : (
                    <Link className="secondary-dark-button" href={`/start?treatment=${encodeURIComponent(treatment.name)}&plan=initial`}>Start my $39 visit</Link>
                  )}
                </section>

                <section className="treatment-price-card treatment-price-best">
                  <span className="best-value-badge">{treatment.name === "Special Needs Nutrition" ? "One payment" : "Step 2"}</span>
                  <span>{treatment.name === "Special Needs Nutrition" ? "Three-month program" : "Memberships from"}</span>
                  <strong className={treatment.threeMonths === "Paid separately" ? "treatment-price-separate" : "treatment-price-monthly"}>
                    {treatment.threeMonths}
                  </strong>
                  <small>{treatment.equivalent} · {treatment.savings}</small>
                  <Link className="primary-button" href={treatment.name === "Special Needs Nutrition" ? "/nutrition-support/care-options" : "/memberships"}>
                    {treatment.name === "Special Needs Nutrition" ? "View the 3-month program" : "Compare memberships"}
                  </Link>
                </section>
              </div>

              <p className="treatment-included">
                {treatment.name === "Special Needs Nutrition"
                  ? "Fullscript supplements and bundles, laboratory services, and other outside services are paid separately."
                  : "Medication and any clinically appropriate laboratory services are billed separately."}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="treatment-how-it-works">
        <p className="eyebrow">From choice to your door</p>
        <h2>A straightforward path from interest to ongoing care.</h2>
        <div>
          <span><b>1</b><strong>Choose an option to discuss</strong><small>Select the program that interests you.</small></span>
          <span><b>2</b><strong>Review the starting price</strong><small>Standard care begins at $39. Special Needs Nutrition includes that portion in one $597 payment.</small></span>
          <span><b>3</b><strong>Complete enrollment</strong><small>Choose the membership or fixed program and accept its payment agreement.</small></span>
          <span><b>4</b><strong>Schedule your initial appointment</strong><small>Focused Care includes 15 minutes; higher memberships and the Special Needs Nutrition Program include 45 minutes.</small></span>
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
          available only in California and is subject to the age and eligibility
          requirements of the selected pathway.
        </p>
      </aside>

      <SiteFooter />
    </main>
  );
}
