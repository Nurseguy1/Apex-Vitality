import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";
import styles from "./home.module.css";

const carePaths = [
  {
    eyebrow: "Start with a $39 initial visit",
    title: "Medical Weight Loss",
    copy: "Build a personalized weight-loss plan with clinician guidance, ongoing support, and medication options tailored to your goals.",
    image: "/weight-loss-couple-walking-v1.png",
    href: "/weight-loss",
    cta: "Start weight-loss care",
  },
  {
    eyebrow: "Know what you want?",
    title: "Peptide & NAD+ Care",
    copy: "Compare focused treatment options, complete a brief medical review, and move directly toward your personalized plan.",
    image: "/standout-gym-men-v1.png",
    href: "/peptides",
    cta: "Explore peptide care",
  },
  {
    eyebrow: "Build a complete plan",
    title: "Men’s, Women’s & Metabolic Health",
    copy: "Choose the health goal that matters most now—energy, strength, hormonal health, weight, digestion, or healthy aging.",
    image: "/program-longevity-couple-v1.png",
    href: "/treatments",
    cta: "Explore care options",
  },
  {
    eyebrow: "Ongoing support",
    title: "Membership Care",
    copy: "Available to California residents. Keep your care, follow-up, treatment coordination, and support connected through one simple membership.",
    image: "/membership-performance-diverse-v2.png",
    href: "/memberships",
    cta: "View memberships",
  },
];

const steps = [
  ["1", "Choose your direction", "Start with the treatment, concern, or health goal that matters most to you."],
  ["2", "Complete your assessment", "Share your history and review your labs with your clinician."],
  ["3", "Collaborate with your clinician", "Review your goals, results, options, benefits, and risks together."],
  ["4", "Begin your care plan", "Get the support you need, with monitoring and adjustments organized around your progress."],
];

export default function Home() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Modern telehealth for vitality, recovery & longevity</p>
          <h1>Your goals are within reach.</h1>
          <p className={styles.heroLead}>Build the energy, strength, confidence, and health to achieve more.</p>
          <div className={styles.actions}>
            <Link className={styles.primaryCta} href="/treatments">Start my care</Link>
            <Link className={styles.secondaryCta} href="#care">Explore options</Link>
          </div>
          <div className={styles.heroProof} aria-label="Apex care highlights">
            <span>Simple online start</span>
            <span>Personal medical review</span>
            <span>A plan built around you</span>
          </div>
        </div>
      </section>

      <section className={styles.trustGrid} aria-label="Apex care experience">
        <article><strong>Start simply</strong><p>Choose the care that matches what you want to accomplish.</p></article>
        <article><strong>Be heard</strong><p>Your history, medications, symptoms, and goals receive personal attention.</p></article>
        <article><strong>Move forward</strong><p>Leave with a clear plan and an easy next step.</p></article>
      </section>

      <section className={styles.intro} id="care">
        <p className={styles.kicker}>Choose your care experience</p>
        <h2>One clear place to start.</h2>
        <p>You do not need to understand every option before beginning. Choose what feels most relevant and let your clinician help tailor the details.</p>
      </section>

      <section className={styles.pathStack} aria-label="Care choices">
        {carePaths.map((path, index) => (
          <article className={styles.pathPanel} key={path.title}>
            <div className={styles.pathImage}>
              <Image src={path.image} alt="Active adults pursuing better health" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className={styles.pathCopy}>
              <p className={styles.kicker}>{path.eyebrow}</p>
              <h2>{path.title}</h2>
              <p>{path.copy}</p>
              <Link className={index < 2 ? styles.primaryCta : styles.darkCta} href={path.href}>{path.cta}</Link>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.process}>
        <div className={styles.processHeading}>
          <p className={styles.kicker}>How it works</p>
          <h2>A simple path forward.</h2>
          <p>Four clear steps take you from interest to personalized, monitored care.</p>
        </div>
        <ol>
          {steps.map(([number, title, copy]) => (
            <li key={number}>
              <b>{number}</b>
              <div><strong>{title}</strong><span>{copy}</span></div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.support}>
        <div className={styles.supportImage}>
          <Image src="/home-professional-man-35-45-v3.png" alt="Active professional focused on his health goals" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className={styles.supportCopy}>
          <p className={styles.kicker}>Care that keeps moving</p>
          <h2>Choose your goal. We’ll help build the route.</h2>
          <p>Start with a brief online intake and connect with a qualified medical clinician who can personalize the next step.</p>
          <Link className={styles.primaryCta} href="/treatments">Get started</Link>
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.kicker}>Your next step</p>
        <h2>Ready to build momentum?</h2>
        <Link className={styles.whiteCta} href="/treatments">Start my care</Link>
        <p className={styles.clinicalNote}>Treatment recommendations and prescriptions, when appropriate, depend on medical evaluation and clinician judgment.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
