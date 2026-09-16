import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Service Areas | Apex Vitality",
  description: "See where Apex Vitality medical care and wellness coaching are currently available.",
};

export default function ServiceAreasPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Service areas</p>
        <h1>Medical care and coaching have different boundaries.</h1>
        <h2>Men&apos;s Health medical care</h2>
        <p>Eligible adults age 18 and older who are physically located in California at the time of care may use the Men&apos;s Health telehealth pathway. Availability depends on clinical appropriateness, pharmacy coverage, and applicable law. No treatment or prescription is guaranteed.</p>
        <h2>Gut Health &amp; Metabolic Balance coaching</h2>
        <p>This is educational wellness coaching, not medical care. It may be available more broadly, subject to local requirements and confirmation during enrollment. It may include educational review of wellness-related laboratory patterns, but it does not include diagnosis, treatment, prescribing, diagnostic testing as medical care, or clinical interpretation of laboratory results.</p>
        <h2>Confirm your pathway</h2>
        <p><Link className="primary-button" href="/#care">Choose your path</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
