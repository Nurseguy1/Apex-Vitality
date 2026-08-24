import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Partner Member Access | Apex Vitality",
  description: "Exclusive Apex Vitality care access and preferred pricing for partner-organization members.",
  robots: { index: false, follow: false },
};

const benefits = [
  ["Preferred member pricing", "Exclusive program pricing created for members of your organization."],
  ["Simple online start", "Choose your care, answer a few questions, and connect with a qualified medical clinician."],
  ["One membership", "Clinician visits, medications, labs, delivery, and ongoing support in one plan."],
];

export default function PartnerAccessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="membership-hero">
        <p className="eyebrow">Exclusive partner access</p>
        <h1>A healthier future starts with one simple step.</h1>
        <p>Members of your organization receive preferred access to Apex Vitality programs and exclusive member pricing.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/contact">Request member access</Link>
          <Link className="secondary-dark-button" href="/how-it-works">See how it works</Link>
        </div>
      </section>

      <section className="membership-page-grid" aria-label="Partner member benefits">
        {benefits.map(([title, copy]) => (
          <article className="membership-card" key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="membership-terms">
        <h2>Care designed to fit your life.</h2>
        <div>
          <p><strong>Choose your goal.</strong> Start with the care experience that matches what you want to achieve.</p>
          <p><strong>Connect online.</strong> Meet with a qualified medical clinician and build your plan.</p>
          <p><strong>Move forward.</strong> Your treatment, delivery, and ongoing support stay connected in one membership.</p>
        </div>
      </section>

      <section className="membership-cta">
        <div>
          <p className="eyebrow">Member pricing</p>
          <h2>Your exclusive offer is coming next.</h2>
          <p>Partner-specific membership options and savings will appear here once finalized.</p>
        </div>
        <Link className="primary-button" href="/contact">Request member access</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
