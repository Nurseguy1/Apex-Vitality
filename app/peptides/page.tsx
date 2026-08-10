import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import styles from "./peptides.module.css";

export const metadata: Metadata = {
  title: "Peptide Care for Energy, Recovery & Healthy Aging | Apex Vitality",
  description:
    "Explore clinician-guided peptide and NAD+ care with simple online intake, medical review, and convenient home delivery when prescribed.",
};

const treatments = [
  {
    name: "Sermorelin",
    outcome: "Sleep, recovery & healthy aging",
    description:
      "Build a stronger recovery rhythm around deeper sleep, training, body composition, and the way you want to feel each day.",
    image: "/treatment-sermorelin-v1.png",
    oneMonth: "$249",
    threeMonths: "$549",
  },
  {
    name: "NAD+",
    outcome: "Energy, focus & cellular performance",
    description:
      "Bring more intention to energy, mental sharpness, recovery, and healthy-aging goals with a focused NAD+ care pathway.",
    image: "/treatment-nad-v1.png",
    oneMonth: "$249",
    threeMonths: "$549",
  },
  {
    name: "CJC-1295 / Ipamorelin",
    outcome: "Performance, recovery & body composition",
    description:
      "Explore a performance-minded peptide pathway built around training, sleep, recovery, and body-composition goals.",
    image: "/treatment-cjc-ipamorelin-v1.png",
    oneMonth: "$269",
    threeMonths: "$599",
  },
  {
    name: "Glutathione",
    outcome: "Antioxidant support & resilience",
    description:
      "Add clinician-guided antioxidant support to a more intentional wellness, recovery, and longevity routine.",
    image: "/treatment-glutathione-v1.png",
    oneMonth: "$249",
    threeMonths: "$549",
  },
];

const trustPoints = [
  ["Simple online start", "Choose your goal and complete a brief, private medical intake."],
  ["Real medical review", "A qualified clinician reviews your history and treatment request."],
  ["Straightforward pricing", "See your one- and three-month options before moving forward."],
  ["Convenient delivery", "When prescribed, treatment is coordinated for delivery to your home."],
];

export default function PeptidesPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Apex peptide &amp; longevity care</p>
          <h1>Feel stronger. Recover better. Keep moving forward.</h1>
          <p className={styles.heroLead}>
            Choose the peptide or wellness treatment that matches your goals,
            complete a brief medical review, and move directly toward your
            personalized plan.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryCta} href="#treatments">
              Explore treatments
            </Link>
            <Link className={styles.secondaryCta} href="/start?care=peptides">
              Start my medical review
            </Link>
          </div>
          <div className={styles.heroProof} aria-label="Peptide care highlights">
            <span>Online medical review</span>
            <span>One- and three-month options</span>
            <span>Home delivery when prescribed</span>
          </div>
        </div>
      </section>

      <section className={styles.trustGrid} aria-label="Apex peptide care experience">
        {trustPoints.map(([title, copy]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className={styles.intro}>
        <p className={styles.kicker}>Know what you want?</p>
        <h2>Start with the treatment that fits your goal.</h2>
        <p>
          Compare focused options for recovery, energy, performance, and
          healthy aging. Your clinician connects your choice with your health
          history and determines the right plan for you.
        </p>
      </section>

      <section className={styles.treatmentGrid} id="treatments" aria-label="Peptide treatment options">
        {treatments.map((treatment, index) => (
          <article className={styles.treatmentCard} key={treatment.name}>
            <div className={styles.productImage}>
              <Image
                src={treatment.image}
                alt={`Illustrative packaging for ${treatment.name}`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                priority={index < 2}
              />
              <span>Illustrative packaging</span>
            </div>
            <div className={styles.cardCopy}>
              <p className={styles.cardTag}>{treatment.outcome}</p>
              <h3>{treatment.name}</h3>
              <p>{treatment.description}</p>
              <div className={styles.priceRow}>
                <div>
                  <span>One month</span>
                  <strong>{treatment.oneMonth}</strong>
                </div>
                <div className={styles.bestValue}>
                  <small>Best value</small>
                  <span>Three months</span>
                  <strong>{treatment.threeMonths}</strong>
                </div>
              </div>
              <Link
                className={styles.cardCta}
                href={`/start?treatment=${encodeURIComponent(treatment.name)}&plan=3-month`}
              >
                Start with {treatment.name}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.momentum}>
        <div>
          <p className={styles.kicker}>Designed around momentum</p>
          <h2>From your decision to medical review in three simple steps.</h2>
        </div>
        <ol>
          <li><b>1</b><span><strong>Choose your treatment</strong>Start with the goal and option that interest you most.</span></li>
          <li><b>2</b><span><strong>Complete your review</strong>Answer a few health questions for clinician review.</span></li>
          <li><b>3</b><span><strong>Begin your plan</strong>If prescribed, your treatment is coordinated for home delivery.</span></li>
        </ol>
        <Link className={styles.whiteCta} href="/start?care=peptides">
          Start now
        </Link>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.supportImage}>
          <Image
            src="/standout-gym-men-v1.png"
            alt="Active adults training in a modern gym"
            fill
            sizes="(max-width: 800px) 100vw, 52vw"
          />
        </div>
        <div className={styles.supportCopy}>
          <p className={styles.kicker}>More than a shipment</p>
          <h2>Focused treatment. Real clinical support.</h2>
          <p>
            Your goals start the conversation. Clinical review connects those
            goals with your health history, current medications, monitoring,
            and the follow-through needed to use treatment responsibly.
          </p>
          <ul>
            <li>Qualified medical-clinician review</li>
            <li>Clear treatment and follow-up instructions</li>
            <li>Support for questions and plan adjustments</li>
          </ul>
          <Link className={styles.primaryCta} href="/start?care=peptides">
            Begin peptide care
          </Link>
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.kicker}>Your next move starts here</p>
        <h2>Choose your goal. Start your review. Build your plan.</h2>
        <Link className={styles.whiteCta} href="/start?care=peptides">
          Get started
        </Link>
        <p className={styles.clinicalNote}>
          Treatment requires medical review and a prescription when applicable.
          Selecting a product does not guarantee that it will be prescribed.
          Compounded medications are not FDA-approved. Final medication,
          packaging, pharmacy, and availability may vary.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
