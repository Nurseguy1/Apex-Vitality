import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { qualiphyCare } from "../lib/compliance";

export const metadata: Metadata = {
  title: "Service Areas | Apex Vitality",
  description: "See where Apex Vitality and its Qualiphy-supported telehealth pathway are currently available.",
};

export default function ServiceAreasPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Service areas</p>
        <h1>Care availability depends on where you are located.</h1>
        <h2>California</h2>
        <p>California adults may use Apex Vitality&apos;s direct California care pathway, including visits, laboratory planning, comprehensive consultations, and available membership services.</p>
        <h2>Qualiphy-supported states</h2>
        <p>{qualiphyCare.serviceAreaSummary}</p>
        <p>Service availability is determined by the patient&apos;s physical location at the time of the clinical encounter, clinician licensure, the selected treatment, pharmacy coverage, and applicable law. A product shown on the website may not be available in every supported state.</p>
        <h2>Not currently available</h2>
        <p>Qualiphy-supported prescription care is not currently available through Apex Vitality in <strong>Alabama or Mississippi</strong>. Patients in those states should not purchase a prescription-care program.</p>
        <h2>Confirm your pathway</h2>
        <p><Link className="primary-button" href="/start">Choose your location</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
