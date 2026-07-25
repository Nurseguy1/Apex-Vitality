import type { Metadata } from "next";
import Link from "next/link";
import { CareNotice, SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";
import { JsonLd } from "../seo";
import { nadArticles } from "./articles/article-data";

export const metadata: Metadata = {
  title: "NAD+ Focused Care | Online Provider Review | Apex Vitality",
  description:
    "Begin NAD+ focused care online or connect NAD+ cellular support with a clinician-guided peptide therapy plan.",
};

const included = [
  "Personal review of your health history, goals, medications, and supplements",
  "Secure portal communication with your clinician",
  "A personalized treatment and follow-up plan",
  "Prescription and pharmacy coordination",
  "Medication, supplies, and direct shipping included when listed in your selected plan",
];

const comprehensiveCare = [
  "45-minute comprehensive new-patient consultation",
  "Metabolic, hormonal, nutritional, sleep, stress, and digestive-health review",
  "Laboratory planning selected around your goals",
  "Individualized treatment, nutrition, lifestyle, and Fullscript options",
  "Planned monitoring and ongoing care",
];

export default function NadPlusPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NAD+ Focused Care and Learning Center",
    description:
      "Online NAD+ focused care and clinician-written education for adults interested in energy, recovery, performance, and healthy aging.",
    hasPart: nadArticles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      url: `https://create-a-coral.vercel.app/nad-plus/articles/${article.slug}`,
    })),
  };

  return (
    <main>
      <JsonLd data={pageSchema} />
      <SiteHeader />

      <section className="focused-care-hero">
        <div>
          <p className="eyebrow">More energy. Sharper focus. Stronger days.</p>
          <h1>Recharge how you feel with personalized NAD+ care.</h1>
          <p className="focused-care-lede">
            You know when your energy, focus, or recovery is not where you want
            it to be. Start today. Let&apos;s build an NAD+ plan around your body,
            your routine, and your goals.
          </p>
          <div className="hero-actions">
            {charmLinks.portal && (
              <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">
                Start my NAD+ plan ↗
              </a>
            )}
            <Link className="secondary-button" href="/schedule">
              Choose comprehensive care
            </Link>
          </div>
          <p className="focused-care-note">
            No scheduled visit is required by default. A secure message,
            telephone call, or video conversation can be added whenever it helps
            move your care forward.
          </p>
        </div>
        <aside className="focused-offer-card">
          <span>Your goals can start moving today</span>
          <h2>A simpler path to feeling energized, focused, and ready.</h2>
          <ul className="check-list">
            {included.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>
            Your total price is presented before payment and clearly lists the
            clinician review, care coordination, medication, supplies, and
            shipping included in your selected plan.
          </p>
        </aside>
      </section>

      <section className="focused-process" aria-labelledby="nad-process">
        <div className="section-heading">
          <p className="eyebrow">Simple by design</p>
          <h2 id="nad-process">From your goals to your plan in three steps.</h2>
        </div>
        <div className="focused-process-grid">
          <article>
            <span>01</span>
            <h3>Complete your secure intake</h3>
            <p>
              Share your goals, health history, medications, supplements, and
              relevant safety information through the Charm patient portal.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Your clinician reviews your information</h3>
            <p>
              A licensed clinician personally reviews your submission and
              communicates with you securely to develop your plan.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Begin your personalized plan</h3>
            <p>
              Prescriptions are coordinated with the fulfillment pharmacy and
              shipped directly, with follow-up organized through Charm.
            </p>
          </article>
        </div>
      </section>

      <section className="nad-audiences" aria-labelledby="nad-audiences-title">
        <div className="section-heading">
          <p className="eyebrow">Find yourself in the possibilities</p>
          <h2 id="nad-audiences-title">Bring more energy, focus, and recovery into your life.</h2>
          <p>
            Choose the story that feels most like your life. Learn how NAD+ fits
            your goals, then take the first step toward a personalized plan.
          </p>
        </div>
        <div className="nad-audience-grid">
          {nadArticles.map((article) => (
            <article key={article.slug}>
              <span>{article.audience}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <Link href={`/nad-plus/articles/${article.slug}`}>
                See how NAD+ supports my goals →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="nad-learning-center" id="nad-learning-center">
        <div>
          <p className="eyebrow">NAD+ Learning Center</p>
          <h2>Understand the science. Build your personal plan.</h2>
        </div>
        <p>
          Learn how NAD+ supports cellular energy and connects with focus,
          recovery, healthy-aging, and midlife goals. Choose your starting
          point, begin your secure review, and build a plan designed for you.
        </p>
      </section>

      <section className="peptide-next-step nad-peptide-bridge">
        <p className="eyebrow">Cellular support meets peptide care</p>
        <h2>Supercharge your peptide therapy with the two-nucleotide power of NAD+.</h2>
        <p>NAD+ is made from two nucleotides and supports cellular energy and repair pathways. Connect NAD+ support with clinician-guided sermorelin peptide care, recovery goals, healthy-aging strategy, and monitored follow-up in one coordinated plan.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/sermorelin">Explore sermorelin peptide care</Link>
          <Link className="secondary-dark-button" href="/peptide-care">Explore monitored peptide care</Link>
        </div>
      </section>

      <section className="focused-choice">
        <div>
          <p className="eyebrow">Want a broader view?</p>
          <h2>Choose comprehensive longevity and functional health care.</h2>
          <p>
            When energy, recovery, metabolic health, hormones, nutrition, sleep,
            digestive health, and healthy aging need to be considered together,
            begin with the complete consultation.
          </p>
          <p className="focused-price"><strong>$325</strong><span>one-time · 45 minutes</span></p>
          <Link className="primary-button" href="/schedule">
            Schedule comprehensive care
          </Link>
        </div>
        <ul className="check-list focused-comprehensive-list">
          {comprehensiveCare.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <aside className="screening-notice">
        <strong>About NAD+ products:</strong> Evidence for meaningful wellness
        and longevity outcomes remains limited and evolving. Compounded
        medications are not FDA-approved and are not reviewed by FDA for safety,
        effectiveness, or quality before marketing. Your clinician will explain
        the available options and help you build the plan that fits your goals.
      </aside>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
