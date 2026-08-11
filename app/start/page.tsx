import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import LocationRouter from "./LocationRouter";
import { getProductCheckout } from "../lib/product-checkouts";

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
  const checkoutUrl = getProductCheckout(treatment, plan);

  return (
    <main className="start-location-page">
      <SiteHeader />
      <LocationRouter
        selectedPlan={plan}
        selectedTreatment={treatment}
        checkoutUrl={checkoutUrl}
      />
      <SiteFooter />
    </main>
  );
}
