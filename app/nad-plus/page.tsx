import type { Metadata } from "next";
import Link from "next/link";
import { CareNotice, SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";

export const metadata: Metadata = {
  title: "NAD+ Focused Care | Online Provider Review | Apex Vitality",
  description:
    "Begin NAD+ focused care online with a secure health intake, personal clinician review, pharmacy coordination, and comprehensive care available when you want a broader plan.",
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
  return (
    <main>
      <SiteHeader />

      <section className="focused-care-hero">
        <div>
          <p className="eyebrow">Focused treatment access</p>
          <h1>NAD+ care that starts online and moves at your pace.</h1>
          <p className="focused-care-lede">
            Tell us about your health and goals through a secure intake. Your
            clinician personally reviews your information, communicates with you
            through the patient portal, and develops your treatment plan.
          </p>
          <div className="hero-actions">
            {charmLinks.portal && (
              <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">
                Start my secure NAD+ review ↗
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
          <span>One straightforward pathway</span>
          <h2>Personal clinician review. Clear next steps.</h2>
          <ul className="check-list">
            {included.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>
            Your total price is presented before payment. If treatment is not
            prescribed, the focused-care payment is refunded.
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
              John Bagby, MSN, FNP-C personally reviews your submission and
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
