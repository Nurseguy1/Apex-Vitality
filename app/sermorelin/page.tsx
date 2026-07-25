import type { Metadata } from "next";
import Link from "next/link";
import { CareNotice, SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";
import { JsonLd } from "../seo";
import { sermorelinArticles } from "./articles/article-data";

export const metadata: Metadata = {
  title: "Sermorelin Focused Care | Sleep, Recovery & Healthy Aging | Apex Vitality",
  description: "Start sermorelin care online with personal clinician review, pharmacy coordination, and a plan for sleep, recovery, performance, body composition, and healthy aging.",
};

const included = [
  "Personal review of your history, goals, medications, and supplements",
  "Secure communication with a licensed clinician",
  "A treatment and follow-up plan built around your goals",
  "Prescription and pharmacy coordination",
  "Medication, supplies, and direct shipping included when listed in your plan",
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
        <div>
          <p className="eyebrow">Prescription-based recovery care</p>
          <h1>Activate your body’s natural recovery system with sermorelin care.</h1>
          <p className="focused-care-lede">Sermorelin supports natural growth-hormone signaling involved in tissue maintenance, sleep, and physical recovery. Start prescription-based care and build a plan around recovery, strength, body composition, performance, and healthy-aging goals.</p>
          <div className="hero-actions">
            {charmLinks.portal && <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">Start my sermorelin plan ↗</a>}
            <Link className="secondary-button" href="/schedule">Choose comprehensive care</Link>
          </div>
          <p className="focused-care-note">Complete your secure intake online. Your clinician adds secure messaging, telephone, or video when it moves your care forward.</p>
        </div>
        <aside className="focused-offer-card">
          <span>Build momentum while you recover</span>
          <h2>A focused path to stronger sleep, recovery, and vitality.</h2>
          <ul className="check-list">{included.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>Your total price is presented before payment and clearly lists the clinician review, care coordination, medication, supplies, and shipping included in your selected plan.</p>
        </aside>
      </section>

      <section className="focused-process" aria-labelledby="sermorelin-process">
        <div className="section-heading"><p className="eyebrow">Simple by design</p><h2 id="sermorelin-process">Start your sermorelin plan in three steps.</h2></div>
        <div className="focused-process-grid">
          <article><span>01</span><h3>Complete your secure intake</h3><p>Share your sleep, recovery, performance, health history, medications, supplements, and goals.</p></article>
          <article><span>02</span><h3>Your clinician builds the plan</h3><p>A licensed clinician reviews your information, communicates with you securely, and develops your treatment and monitoring plan.</p></article>
          <article><span>03</span><h3>Begin and build momentum</h3><p>Your prescription is coordinated with the fulfillment pharmacy and shipped directly, with follow-up organized through Charm.</p></article>
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
