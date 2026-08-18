import type { Metadata } from "next";
import Link from "next/link";
import { CareNotice, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Men's Vitality & Hormonal Health | Apex Vitality",
  description: "Telehealth evaluation for men's vitality, performance, and hormonal health concerns.",
};

export default function MensHealthPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-intro">
        <p className="eyebrow">Vitality, performance &amp; hormonal health</p>
        <h1>Men&apos;s Health</h1>
        <p>Understand the symptoms, review the data, and build the right plan. Focused telehealth care for changes in energy, sexual health, strength, recovery, mood, sleep, or body composition.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/questionnaires/mens-vitality">Start my men&apos;s health intake</Link>
          <Link className="secondary-button" href="/schedule">Schedule an initial visit</Link>
        </div>
        <p className="hero-cta-note">Evaluation comes first. Hormonal care is guided by your history, symptoms, laboratory findings, and individual goals.</p>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Your symptoms are the starting point</p>
          <h2>Turn the changes you notice into a plan for renewed vitality.</h2>
          <p>
            Men&apos;s health concerns have many contributing factors. Clinical review includes
            symptoms, medical history, medications, sleep, stress, metabolic health,
            and goal-directed lab testing.
          </p>
        </div>
        <div className="marker-grid wide-markers">
          {['Energy and focus', 'Libido and sexual health', 'Strength and recovery', 'Sleep and mood', 'Body composition', 'Cardiometabolic health'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
      <section className="content-split dark-panel">
        <div>
          <p className="eyebrow">Hormonal health care</p>
          <h2>Thoughtful hormonal care, built with you.</h2>
          <p>
            Your clinician explains what your symptoms and laboratory findings mean,
            reviews the benefits and risks of your options, and helps you implement
            a treatment plan with the baseline testing and ongoing monitoring it needs.
            The focus is health, function, vitality, and long-term well-being.
          </p>
        </div>
        <ul className="check-list">
          <li>Symptom and medical-history review</li>
          <li>Goal-directed laboratory review</li>
          <li>Shared decision-making with a clinician</li>
          <li>Monitoring based on the care plan</li>
        </ul>
      </section>
      <section className="content-section" id="hormone-balance">
        <div className="section-heading">
          <p className="eyebrow">Men&apos;s hormone balance</p>
          <h2>Build a plan around how you want to feel, perform, and live.</h2>
          <p>
            Start with a focused conversation about your goals, symptoms, and lab
            results. Together, you and your clinician will create a personalized
            care plan with clear guidance, coordinated treatment, and ongoing
            support designed to help you make meaningful progress.
          </p>
        </div>
        <div className="focused-process-grid">
          <article><span>01</span><h3>Complete your intake</h3><p>Share symptoms, medical history, medications, fertility goals, and relevant safety information.</p></article>
          <article><span>02</span><h3>Collaborate with your clinician</h3><p>Talk through your goals, symptoms, and the testing that will help shape your care.</p></article>
          <article><span>03</span><h3>Understand your results</h3><p>Review your hormone levels and health markers together, with clear answers and a plan built around you.</p></article>
          <article><span>04</span><h3>Put your plan into action</h3><p>Move forward with coordinated treatment, follow-up, and monitoring designed to support your progress.</p></article>
        </div>
        <div className="hero-actions">
          <Link className="primary-button" href="/questionnaires/mens-vitality">Begin the clinical intake</Link>
        </div>
      </section>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
