import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Men's Hormone Health | Apex Vitality",
  description: "California medical evaluation for men concerned about symptoms or laboratory findings that could reflect a hormone deficiency.",
};

export default function MensHealthPage() {
  return (
    <main className="mens-health-page">
      <SiteHeader />
      <section className="page-intro">
        <p className="eyebrow">California medical care</p>
        <h1>Men&apos;s Hormone Health</h1>
        <p>A clinical evaluation for men concerned about symptoms or laboratory findings that could reflect a hormone deficiency, including changes in energy, strength, sexual health, recovery, mood, sleep, or body composition.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/start?treatment=Men%27s%20Health&plan=initial">Book a $69 consultation</Link>
          <Link className="secondary-button" href="#hormone-balance">See what’s included</Link>
        </div>
        <p className="hero-cta-note">Start with a $69 consultation only, with no membership required. Continue with $149/month for care, scheduled labs, prescribed testosterone, supplies, and delivery.</p>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Your goals are the starting point</p>
          <h2>Create momentum toward renewed vitality.</h2>
          <p>
            We connect the full picture—energy, sleep, strength, sexual health,
            metabolism, lifestyle, and lab results—to build a clear path toward
            feeling and performing your best.
          </p>
        </div>
        <div className="marker-grid wide-markers">
          {['Energy and focus', 'Libido and sexual health', 'Strength and recovery', 'Sleep and mood', 'Body composition', 'Cardiometabolic health'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
      <section className="content-split dark-panel">
        <div>
          <p className="eyebrow">Hormonal health care</p>
          <h2>Personalized hormonal care, built with you.</h2>
          <p>
            Gain a clear understanding of your health, explore your care options,
            and move forward with a treatment plan designed around your goals.
            Your clinician stays connected with guidance and monitoring to help
            you build lasting progress.
          </p>
        </div>
        <ul className="check-list">
          <li>A complete picture of your health and goals</li>
          <li>Lab insights focused on your progress</li>
          <li>A care plan created with your clinician</li>
          <li>Ongoing guidance and personalized monitoring</li>
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
        <div className="sermorelin-plan-grid" aria-label="Men's health membership pricing">
          <article className="featured">
            <span>Ongoing care membership</span>
            <strong>$149</strong>
            <b>per month</b>
            <p>One monthly appointment, prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed.</p>
            <Link className="plan-select-button" href="/start?treatment=Focused%20Care%20Membership&plan=ongoing">Join · $149/month</Link>
          </article>
          <article>
            <span>Baseline &amp; follow-up labs</span>
            <strong>Included</strong>
            <b>testing and results review</b>
            <p>Baseline TRT testing, a check at 8 weeks, another 3 months later, then every 6 months. Your clinician adjusts monitoring to your needs.</p>
            <Link className="plan-select-button" href="/start?treatment=Men%27s%20Health&plan=initial">Book a $69 consultation</Link>
          </article>
        </div>
        <p className="sermorelin-pricing-note">The $69 initial visit is a consultation only; no membership is required for that visit. Before any lab orders, you must enroll separately in the $149/month Focused Care membership. Your membership includes monthly care, baseline and scheduled follow-up TRT labs, prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed.</p>
        <div className="focused-process-grid">
          <article><span>01</span><h3>Tell us where you want to go</h3><p>Share how you feel today, what you want to improve, and the health details that help us understand you.</p></article>
          <article><span>02</span><h3>Collaborate with your clinician</h3><p>Talk through your goals, symptoms, and the testing that will help shape your care.</p></article>
          <article><span>03</span><h3>Understand your results</h3><p>Review your hormone levels and health markers together, with clear answers and a plan built around you.</p></article>
          <article><span>04</span><h3>Put your plan into action</h3><p>Move forward with coordinated treatment, follow-up, and monitoring designed to support your progress.</p></article>
        </div>
        <div className="hormone-balance-cta">
          <div>
            <p className="eyebrow">Ready to move forward?</p>
            <h3>Take the first step toward renewed vitality.</h3>
          </div>
          <Link className="primary-button" href="/start?treatment=Men%27s%20Health&plan=initial">Book a $69 consultation</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
