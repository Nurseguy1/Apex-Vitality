import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Welcome to Apex Vitality",
  description: "A dedicated welcome page for partner-organization members beginning or continuing care with Apex Vitality.",
  robots: { index: false, follow: false },
};

export default function PartnerAccessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="membership-detail-hero standout-hero">
        <div>
          <p className="eyebrow">Welcome to Apex Vitality</p>
          <h1>Your care can keep moving forward.</h1>
          <p>Whether you are beginning something new or continuing care from a previous clinic, we will help make your next step simple.</p>
          <Link className="primary-button" href="/treatments">Get started</Link>
        </div>
      </section>

      <section className="membership-page-grid" aria-label="Choose your starting point">
        <article className="membership-card">
          <p className="eyebrow">New to care</p>
          <h2>Start with your goals.</h2>
          <p>Answer a few questions, connect with a qualified medical clinician, and build your plan.</p>
          <Link className="primary-button" href="/treatments">Begin my care</Link>
        </article>

        <article className="membership-card featured">
          <span className="membership-badge">Continuing care</span>
          <h2>Already receiving treatment?</h2>
          <p>Share your current medications, recent labs, and available records so your clinician can review the care you already have in place.</p>
          <Link className="primary-button" href="/memberships">Compare memberships</Link>
        </article>
      </section>

      <section className="membership-terms">
        <h2>A simple transition.</h2>
        <div>
          <p><strong>Bring what you have.</strong> Recent laboratory results, medication details, and available treatment records help keep your care connected.</p>
          <p><strong>Meet online.</strong> Connect with a qualified medical clinician and discuss the next step toward your goals.</p>
          <p><strong>Move forward.</strong> Your treatment, delivery, and ongoing support stay connected through Apex.</p>
        </div>
      </section>

      <section className="membership-cta">
        <div>
          <p className="eyebrow">We are ready when you are</p>
          <h2>Choose the path that fits where you are today.</h2>
        </div>
        <Link className="primary-button" href="/treatments">Get started</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
