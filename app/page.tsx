import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";
import styles from "./home.module.css";

const carePaths = [
  {
    eyebrow: "Personalized guidance · Broadly available",
    title: "Gut Health & Metabolic Balance",
    copy: "For adults who have been told their labs are normal but still do not feel like themselves—root-cause-oriented education, lab-pattern review, and practical gut-health and lifestyle coaching.",
    image: "/program-metabolic-couple-v1.png",
    href: "/gut-health",
    cta: "Explore wellness coaching",
  },
  {
    eyebrow: "Men’s Hormone Health · California",
    title: "Men’s Hormone Health",
    copy: "A clinical evaluation for men concerned about symptoms or laboratory findings that could reflect a hormone deficiency—with medical evaluation, treatment, and monitoring when clinically appropriate.",
    image: "/home-professional-man-35-45-v3.png",
    href: "/mens-health",
    cta: "Explore men’s hormone health",
  },
];

const steps = [
  ["1", "Choose your route", "Start with Gut Health or Men’s Hormone Health."],
  ["2", "Review the details", "See which service best matches your goals and the support you want."],
  ["3", "Begin with clarity", "Take the next step with personalized guidance and a plan for moving forward."],
];

export default function Home() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Two focused paths to better health</p>
          <h1>Start with what matters most.</h1>
          <p className={styles.heroLead}>Gut-health and metabolic-balance coaching for all adults, plus a California medical pathway for men concerned about possible hormone deficiency.</p>
          <div className={styles.actions}>
            <Link className={styles.primaryCta} href="#care">Choose my path</Link>
            <Link className={styles.secondaryCta} href="/patient-access">Men&apos;s Hormone Health patient portal</Link>
          </div>
          <div className={styles.heroProof} aria-label="Apex service highlights">
            <span>Clear advice for moving forward</span><span>Personal attention</span><span>Practical next steps</span>
          </div>
        </div>
      </section>

      <section className={styles.trustGrid} aria-label="Apex service structure">
        <article><strong>Gut Health clients</strong><p>Education, nutrition, lifestyle guidance, tracking, and accountability for sustainable everyday wellness.</p></article>
        <article><strong>Men&apos;s Hormone Health patients</strong><p>Licensed evaluation and treatment for eligible men physically located in California.</p></article>
        <article><strong>Progress toward your goals</strong><p>Personalized guidance, practical strategies, and consistent support to help you keep moving forward.</p></article>
      </section>

      <section className={styles.intro}>
        <p className={styles.kicker}>Choose your route</p>
        <h2>Two services. One clear decision.</h2>
        <p>Choose the path that speaks to your goals and the kind of support you want right now.</p>
      </section>

      <section className={styles.pathStack} id="care" aria-label="Apex Vitality service choices">
        {carePaths.map((path, index) => (
          <article className={styles.pathPanel} key={path.title}>
            <div className={styles.pathImage}>
              <Image src={path.image} alt="Adult focused on personal health and well-being" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className={styles.pathCopy}>
              <p className={styles.kicker}>{path.eyebrow}</p><h2>{path.title}</h2><p>{path.copy}</p>
              <Link className={index === 0 ? styles.primaryCta : styles.darkCta} href={path.href}>{path.cta}</Link>
              {index === 1 && <><p><strong>$69 initial consultation.</strong> No membership is needed for the consultation. Lab orders require the $149/month membership, which includes one appointment each month and baseline and scheduled follow-up TRT labs with interpretation, prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed.</p><Link className={styles.darkCta} href="/memberships">View membership &amp; sign up</Link></>}
            </div>
          </article>
        ))}
      </section>

      <section className={styles.process}>
        <div className={styles.processHeading}>
          <p className={styles.kicker}>How to begin</p><h2>A simpler way forward.</h2><p>Start with the route that matches the kind of support you want.</p>
        </div>
        <ol>{steps.map(([number, title, copy]) => <li key={number}><b>{number}</b><div><strong>{title}</strong><span>{copy}</span></div></li>)}</ol>
      </section>

      <section className={styles.support}>
        <div className={styles.supportImage}><Image src="/program-metabolic-couple-v1.png" alt="Adults building sustainable wellness routines" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className={styles.supportCopy}>
          <p className={styles.kicker}>Not sure which route fits?</p><h2>Start with the change you want to make.</h2>
          <p>Choose Gut Health for nutrition, digestion, energy, and sustainable daily habits. Choose Men&apos;s Hormone Health for evaluation of possible hormone deficiency.</p>
          <Link className={styles.primaryCta} href="/contact">Ask Apex Vitality</Link>
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.kicker}>Your next step</p><h2>Choose the support that matches your goals.</h2>
        <Link className={styles.whiteCta} href="#care">View both routes</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
