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
    firstNote: "Today · then $149/month after 30 days",
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
    firstNote: "Today · then $149/month after 30 days",
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
    firstNote: "Today · then $149/month after 30 days",
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
    oneMonth: "$39",
    threeMonths: "$149/month",
    equivalent: "Medication paid separately",
    savings: "Cancel future renewals anytime",
    firstLabel: "Initial visit",
    firstNote: "Today · then $149/month after 30 days",
    secondLabel: "Ongoing clinical care",
    href: "/weight-loss",
    ctaLabel: "Explore weight-loss care",
  },
  {
    name: "Special Needs Nutrition",
    tag: "Caregiver-guided nutrition · digestive wellness · practical support",
    headline: "Make everyday nutrition feel more achievable.",
    description:
      "Personalized nutrition and digestive-wellness support designed around preferences, sensory needs, daily routines, and realistic goals for children, teens, and adults with special needs.",
    image: "/nutrition-support-family-v1.png",
    oneMonth: "$39",
    threeMonths: "$149/month",
    equivalent: "Fullscript bundles paid separately",
    savings: "Cancel future renewals anytime",
    firstLabel: "Initial clinical review",
    firstNote: "Today · then $149/month after 30 days",
    secondLabel: "Ongoing membership care",
    href: "/nutrition-support",
    ctaLabel: "Start nutrition membership",
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
                  : treatment.name === "Special Needs Nutrition"
                    ? "Caregiver and family sharing a supportive nutrition routine"
                    : `Illustrative prescription vial for ${treatment.name} treatment`}
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="treatment-image-title">
                <strong>{treatment.name}</strong>
                <small>Focused care</small>
              </div>
              {["Sermorelin", "NAD+", "Glutathione"].includes(treatment.name) ? <span className="treatment-image-note">Illustrative packaging</span> : null}
            </div>

            <div className="treatment-product-copy">
              <p className="eyebrow">{treatment.tag}</p>
              <h2>{treatment.headline}</h2>
              <p>{treatment.description}</p>

              <div className="treatment-price-options">
                <section className="treatment-price-card">
                  <span>{treatment.firstLabel}</span>
                  <strong>
                    {treatment.oneMonth}
                  </strong>
                  <small>{treatment.firstNote}</small>
                  <Link className="secondary-dark-button" href={`/start?treatment=${encodeURIComponent(treatment.name)}&plan=initial`}>
                    {treatment.ctaLabel ?? "Choose one month"}
                  </Link>
                </section>

                <section className="treatment-price-card treatment-price-best">
                  <span className="best-value-badge">Ongoing care</span>
                  <span>{treatment.secondLabel}</span>
                  <strong className={treatment.threeMonths === "Paid separately" ? "treatment-price-separate" : "treatment-price-monthly"}>
                    {treatment.threeMonths}
                  </strong>
                  <small>{treatment.equivalent} · {treatment.savings}</small>
                  <Link className="primary-button" href={`/start?treatment=${encodeURIComponent(treatment.name)}&plan=initial`}>
                    {treatment.ctaLabel ?? "Start with an initial visit"}
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
          available only in California and is subject to the age and eligibility
          requirements of the selected pathway.
        </p>
      </aside>

      <SiteFooter />
    </main>
  );
}
