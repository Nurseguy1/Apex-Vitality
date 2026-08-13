import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Service Areas | Apex Vitality",
  description: "See where Apex Vitality telehealth care is currently available.",
};

export default function ServiceAreasPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Service areas</p>
        <h1>Apex Vitality currently provides clinical care in California.</h1>
        <h2>California service area</h2>
        <p>Adults physically located in California at the time of care may use Apex Vitality&apos;s telehealth pathway, including visits, laboratory planning, comprehensive consultations, eligible treatment programs, and available membership services.</p>
        <p>Availability also depends on clinical appropriateness, the selected service, pharmacy coverage, and applicable law. Displaying a treatment on this website does not guarantee that it will be prescribed.</p>
        <h2>Outside California</h2>
        <p>Apex Vitality is not currently accepting purchases for clinical care delivered outside California. Additional service areas may be introduced after the appropriate licensed clinical infrastructure is active and disclosed.</p>
        <h2>Confirm your pathway</h2>
        <p><Link className="primary-button" href="/start">Choose your location</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
