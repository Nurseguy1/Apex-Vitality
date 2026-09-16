import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { treatmentConsents } from "./data";

export const metadata: Metadata = {
  title: "Treatment Information and Consents | Apex Vitality",
  description: "Review important treatment-specific information used in the Apex Vitality California clinical workflow.",
};

export default function TreatmentConsentsPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Treatment information</p>
        <h1>Understand your treatment before you begin.</h1>
        <p>These pages summarize important information that may apply to a requested treatment. They do not replace your clinician&apos;s individualized discussion or the electronic consent documented in your secure clinical record.</p>
        <div className="legal-link-list">
          {treatmentConsents.map((item) => (
            <section key={item.slug}>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <Link className="text-link" href={`/treatment-consents/${item.slug}`}>Review this treatment information →</Link>
            </section>
          ))}
        </div>
        <p className="legal-updated">Last reviewed August 16, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
