import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import LocationRouter from "./LocationRouter";
import { getProductCheckout } from "../lib/product-checkouts";
import { getProductOffer } from "../lib/product-offers";

export const metadata: Metadata = {
  title: "Start Your Care | Apex Vitality",
  description: "Start Apex Vitality clinical care while physically located in California.",
  robots: { index: false, follow: false },
};

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ treatment?: string; plan?: string; nextMembership?: string }>;
}) {
  const { treatment = "", plan = "", nextMembership = "" } = await searchParams;
  const checkoutUrl = getProductCheckout(treatment, plan);
  const offer = getProductOffer(treatment, plan);

  return (
    <main className="start-location-page">
      <SiteHeader />
      <LocationRouter
        selectedTreatment={treatment}
        checkoutUrl={checkoutUrl}
        offer={offer}
        intendedMembership={nextMembership}
      />
      <SiteFooter />
    </main>
  );
}
