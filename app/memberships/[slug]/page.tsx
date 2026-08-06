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
          <div className="membership-detail-price">
            <strong>{membership.price}</strong>
            {"annual" in membership && <span>{membership.annual}</span>}
          </div>
          <Link className="primary-button" href="/schedule">{membership.cta}</Link>
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
        <h2>Choose your plan. We handle the details.</h2>
        <Link className="primary-button" href="/schedule">{membership.cta}</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
