import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components";
import { treatmentConsentBySlug, treatmentConsents } from "../data";

export function generateStaticParams() {
  return treatmentConsents.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = treatmentConsentBySlug[slug];
  return item ? { title: `${item.title} | Apex Vitality`, description: item.summary } : {};
}

export default async function TreatmentConsentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = treatmentConsentBySlug[slug];
  if (!item) notFound();

  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Treatment information and consent</p>
        <h1>{item.title}</h1>
        <p>{item.summary}</p>
        <aside className="screening-notice"><strong>Clinical consent is individualized.</strong> Reviewing this public page does not create a clinician-patient relationship or record consent. Your clinician will address the treatment actually proposed for you, and your consent must be documented in the secure clinical workflow before treatment begins.</aside>

        <h2>Purpose and clinical decision</h2>
        <p>{item.purpose}</p>
        <h2>Important limitations</h2>
        <ul>{item.limitations.map((text) => <li key={text}>{text}</li>)}</ul>
        <h2>Potential risks</h2>
        <ul>{item.risks.map((text) => <li key={text}>{text}</li>)}</ul>
        <h2>Your responsibilities and monitoring</h2>
        <ul>{item.monitoring.map((text) => <li key={text}>{text}</li>)}</ul>
        <h2>Alternatives to discuss</h2>
        <ul>{item.alternatives.map((text) => <li key={text}>{text}</li>)}</ul>
        <h2>No guarantee</h2>
        <p>Payment, membership, questionnaire completion, or treatment selection does not guarantee approval or a prescription. Treatment may be declined, changed, paused, or discontinued when the clinician determines that another course is safer or more appropriate.</p>
        <p><Link href="/treatment-consents">← Review all treatment information</Link></p>
        <p className="legal-updated">Last reviewed August 16, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
