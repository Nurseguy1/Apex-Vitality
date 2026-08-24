import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components";
import { memberships, type MembershipSlug } from "../data";

export function generateStaticParams() {
  return Object.keys(memberships).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const membership = memberships[slug as MembershipSlug];
  if (!membership) return {};
  return {
    title: `${membership.name} | Apex Vitality`,
    description: membership.intro,
  };
}

export default async function MembershipDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const membership = memberships[slug as MembershipSlug];
  if (!membership) notFound();
  const enrollmentHref = `/start?treatment=${encodeURIComponent(membership.name)}&plan=ongoing`;
  const newPatientHref = `/start?treatment=Establish%20Care&plan=initial&nextMembership=${encodeURIComponent(membership.name)}`;

  return (
    <main>
      <SiteHeader />
      <section
        className="membership-detail-hero"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(5,28,34,.84) 0%, rgba(12,55,61,.58) 42%, rgba(5,35,41,.1) 72%), url('${membership.image}')` }}
      >
        <div>
          <p className="eyebrow">{membership.eyebrow}</p>
          <h1>{membership.headline}</h1>
          <p>{membership.intro}</p>
          <p><strong>Available to California residents.</strong></p>
          <p><strong>{membership.includesComprehensiveVisit ? "Includes a 45-minute comprehensive initial appointment after enrollment." : "Includes a 15-minute initial appointment for one focused treatment pathway."}</strong></p>
          <div className="membership-detail-price">
            <strong>{membership.price}</strong>
            {"annual" in membership && <span>{membership.annual}</span>}
          </div>
          <div className="membership-enrollment-actions">
            <Link className="primary-button" href={newPatientHref}>New patient · start with $39</Link>
            <Link className="membership-existing-link" href={enrollmentHref}>Already completed the $39 visit? {membership.cta} →</Link>
          </div>
        </div>
      </section>

      <section className="membership-detail-includes membership-detail-includes-modern">
        <div>
          <p className="eyebrow">What is included</p>
          <h2>Everything you need to keep moving forward.</h2>
        </div>
        <ul>{membership.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      </section>

      <section className="membership-detail-simple">
        <p className="eyebrow">Simple by design</p>
        <h2>{membership.includesComprehensiveVisit ? "Enroll, then schedule your included 45-minute initial appointment." : "Enroll, then schedule your included 15-minute Focused Care initial appointment."}</h2>
        <p>New patients make the one-time $39 initial-care payment first. Membership is selected and paid separately afterward, then the initial appointment is scheduled for the length included with this tier.</p>
        <div className="membership-enrollment-actions">
          <Link className="primary-button" href={newPatientHref}>Start my $39 establish-care visit</Link>
          <Link className="membership-existing-link" href={enrollmentHref}>Existing patient membership checkout →</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
