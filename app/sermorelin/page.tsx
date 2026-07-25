import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CareNotice, SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";
import { JsonLd } from "../seo";
import { sermorelinArticles } from "./articles/article-data";

export const metadata: Metadata = {
  title: "Sermorelin Focused Care | Sleep, Recovery & Healthy Aging | Apex Vitality",
  description: "Start sermorelin care online with personal clinician review, pharmacy coordination, and a plan for sleep, recovery, performance, body composition, and healthy aging.",
};

const experience = [
  ["Weeks 1–4", "Build the routine", "Begin your plan, learn the at-home process, and establish consistent sleep, recovery, nutrition, and training habits."],
  ["Months 2–3", "Notice the pattern", "Use follow-up to connect changes in sleep, energy, exercise recovery, and day-to-day resilience with your goals."],
  ["Months 4–6", "Build lasting momentum", "Refine the plan with your clinician and keep supporting strength, body composition, performance, and healthy aging."],
];

export default function SermorelinPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sermorelin Focused Care and Learning Center",
    description: "Online sermorelin focused care and education for sleep, recovery, performance, body composition, and healthy aging.",
    hasPart: sermorelinArticles.map((article) => ({ "@type": "Article", headline: article.title, url: `https://create-a-coral.vercel.app/sermorelin/articles/${article.slug}` })),
  };

  return (
    <main>
      <JsonLd data={pageSchema} />
      <SiteHeader />
      <section className="focused-care-hero sermorelin-hero">
        <div className="sermorelin-hero-copy">
          <p className="eyebrow">Prescription-based recovery care</p>
          <h1>Activate your body’s natural recovery system with sermorelin care.</h1>
          <p className="focused-care-lede">Sermorelin supports natural growth-hormone signaling involved in tissue maintenance, sleep, and physical recovery. Start prescription-based care and build a plan around recovery, strength, body composition, performance, and healthy-aging goals.</p>
          <p className="focused-care-simple-path">Start with a quick questionnaire. A clinician reviews your symptoms and goals. Your medication is delivered directly to your door.</p>
          <div className="hero-actions">
            {charmLinks.portal && <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">Start my sermorelin plan ↗</a>}
            <Link className="secondary-button" href="/schedule">Choose comprehensive care</Link>
          </div>
          <div className="sermorelin-price-line"><strong>$179</strong><span>month-to-month</span><b>or $149/month with a three-month plan</b></div>
          <p className="focused-care-note">Simple online care with personal clinical review, secure communication, and convenient home delivery.</p>
        </div>
      </section>

      <section className="sermorelin-offer" aria-labelledby="sermorelin-offer-title">
        <div className="sermorelin-kit-image">
          <Image src="/sermorelin-care-kit-apex.png" alt="Sermorelin care kit with medication vial, sealed supplies, and discreet shipping box" width={1456} height={1092} priority />
        </div>
        <div>
          <p className="eyebrow">One clear monthly price</p>
          <h2 id="sermorelin-offer-title">Your care, medication, and delivery in one plan.</h2>
          <p className="sermorelin-offer-lede">Start with focused clinician-led care built for convenience, continuity, and the goals that brought you here.</p>
          <div className="sermorelin-plan-grid">
            <article><span>Flexible</span><strong>$179</strong><b>month-to-month</b><p>Start without a long commitment and continue as your plan develops.</p></article>
            <article className="featured"><span>Best value</span><strong>$447</strong><b>three months · $149/month</b><p>Give your plan time to build momentum while lowering the monthly price.</p></article>
          </div>
          <ul className="check-list"><li>Personal clinician review</li><li>Prescription and pharmacy coordination</li><li>Medication, injection supplies, and direct shipping</li><li>Secure follow-up and refill support</li></ul>
          {charmLinks.portal && <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">Start sermorelin care ↗</a>}
          <p className="sermorelin-pricing-note">Laboratory services are selected and priced separately when they are part of your personalized monitoring plan.</p>
        </div>
      </section>

      <section className="focused-process" aria-labelledby="sermorelin-process">
        <div className="section-heading"><p className="eyebrow">Simple by design</p><h2 id="sermorelin-process">Start your sermorelin plan in three steps.</h2></div>
        <div className="focused-process-grid">
          <article><span>01</span><h3>Answer a quick questionnaire</h3><p>Tell us about your symptoms, sleep, recovery, health history, medications, and goals through the secure portal.</p></article>
          <article><span>02</span><h3>A clinician reviews your symptoms</h3><p>Your clinician personally reviews your answers and builds a treatment and monitoring plan around your goals.</p></article>
          <article><span>03</span><h3>Medication arrives at your door</h3><p>Your prescription is coordinated with a licensed pharmacy and delivered directly to you, with follow-up organized through Charm.</p></article>
        </div>
      </section>

      <section className="nad-audiences sermorelin-audiences" aria-labelledby="sermorelin-audiences-title">
        <div className="section-heading">
          <p className="eyebrow">Find your reason to start</p>
          <h2 id="sermorelin-audiences-title">Build the sleep, recovery, strength, and resilience your goals demand.</h2>
          <p>Choose the goal that matches your life, learn how sermorelin fits, and move directly into your secure clinician review.</p>
        </div>
        <div className="nad-audience-grid">
          {sermorelinArticles.map((article) => (
            <article key={article.slug}><span>{article.audience}</span><h3>{article.title}</h3><p>{article.description}</p><Link href={`/sermorelin/articles/${article.slug}`}>See how sermorelin supports my goals →</Link></article>
          ))}
        </div>
      </section>

      <section className="nad-learning-center sermorelin-learning-center" id="sermorelin-learning-center">
        <div><p className="eyebrow">Sermorelin Learning Center</p><h2>Understand the pathway. Put it to work.</h2></div>
        <p>Learn how natural growth-hormone signaling connects with sleep, recovery, training, body composition, and healthy aging—then build a plan around the outcomes that matter to you.</p>
      </section>

      <section className="sermorelin-education" aria-labelledby="sermorelin-education-title">
        <div>
          <p className="eyebrow">Understand how it fits</p>
          <h2 id="sermorelin-education-title">Work with your body’s own growth-hormone signaling.</h2>
          <p>Sermorelin is a growth hormone-releasing hormone analog. It signals the pituitary gland to release growth hormone in natural pulses, supporting pathways connected with sleep, tissue maintenance, metabolism, recovery, and body composition.</p>
          <Link className="text-link" href="/sermorelin/articles/sermorelin-healthy-aging">Explore sermorelin and healthy aging →</Link>
        </div>
        <div className="sermorelin-signal-path" aria-label="How sermorelin works">
          <article><span>01</span><strong>Sermorelin signal</strong><p>Your prescribed dose starts the signaling pathway.</p></article>
          <article><span>02</span><strong>Pituitary response</strong><p>Your body releases growth hormone through its existing feedback system.</p></article>
          <article><span>03</span><strong>Goal-directed care</strong><p>Your clinician connects response, monitoring, and follow-up with your goals.</p></article>
        </div>
      </section>

      <section className="sermorelin-experience" aria-labelledby="sermorelin-experience-title">
        <div className="section-heading"><p className="eyebrow">What the experience looks like</p><h2 id="sermorelin-experience-title">Give your plan time to build momentum.</h2><p>Sermorelin care is designed as a continuing process. Your experience is personal, and follow-up helps connect what you notice with the next stage of your plan.</p></div>
        <div className="sermorelin-experience-grid">{experience.map(([time, title, copy]) => <article key={time}><span>{time}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        {charmLinks.portal && <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">Start with the quick questionnaire ↗</a>}
      </section>

      <section className="sermorelin-trust-strip" aria-label="Sermorelin care standards">
        <article><strong>Licensed clinician review</strong><span>Your history, symptoms, medications, and goals receive personal review.</span></article>
        <article><strong>Licensed pharmacy fulfillment</strong><span>Patient-specific prescriptions are coordinated for direct delivery.</span></article>
        <article><strong>Transparent pricing</strong><span>Your selected plan clearly shows what is included before payment.</span></article>
        <article><strong>Ongoing connection</strong><span>Secure follow-up keeps your questions and progress connected to care.</span></article>
      </section>

      <section className="focused-choice">
        <div><p className="eyebrow">Want a broader view?</p><h2>Connect sermorelin with your complete longevity plan.</h2><p>Bring hormones, metabolism, nutrition, exercise, sleep, body composition, and healthy aging together through comprehensive care.</p><p className="focused-price"><strong>$325</strong><span>one-time · 45 minutes</span></p><Link className="primary-button" href="/schedule">Schedule comprehensive care</Link></div>
        <ul className="check-list focused-comprehensive-list"><li>45-minute comprehensive consultation</li><li>Hormonal, metabolic, nutritional, sleep, and recovery review</li><li>Laboratory planning selected around your goals</li><li>Personalized treatment and lifestyle strategy</li><li>Planned monitoring and ongoing care</li></ul>
      </section>

      <section className="peptide-next-step sermorelin-peptide-bridge">
        <p className="eyebrow">Already using BPC-157 or another peptide?</p>
        <h2>Bring self-directed peptide use into monitored care.</h2>
        <p>Keep your tissue-recovery and performance goals while adding confidential product review, baseline assessment, laboratory planning, and prescription-based care with a licensed clinician. Sermorelin supports natural growth-hormone signaling involved in tissue maintenance and recovery. Apex Vitality does not prescribe or supply BPC-157.</p>
        <Link className="primary-button" href="/peptide-care">Start monitored peptide care</Link>
      </section>

      <aside className="screening-notice"><strong>About sermorelin products:</strong> Sermorelin used for adult wellness is a compounded prescription medication and is not FDA-approved. Your clinician explains the product, monitoring, risks, and treatment plan before you begin.</aside>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
