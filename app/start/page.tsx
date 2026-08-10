import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";
import LocationRouter from "./LocationRouter";

export const metadata: Metadata = {
  title: "Start Your Care | Apex Vitality",
  description: "Choose the Apex Vitality care pathway available for your location.",
  robots: { index: false, follow: false },
};

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ treatment?: string; plan?: string }>;
}) {
  const { treatment = "", plan = "" } = await searchParams;

  return (
    <main className="start-location-page">
      <SiteHeader />
      <LocationRouter
        nationalCareCheckout={charmLinks.nationalCareCheckout}
        selectedPlan={plan}
        selectedTreatment={treatment}
      />
      <SiteFooter />
    </main>
  );
}
