import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import LocationRouter from "./LocationRouter";

export const metadata: Metadata = {
  title: "Start Your Care | Apex Vitality",
  description: "Choose the Apex Vitality care pathway available for your location.",
  robots: { index: false, follow: false },
};

export default function StartPage() {
  return (
    <main className="start-location-page">
      <SiteHeader />
      <LocationRouter />
      <SiteFooter />
    </main>
  );
}
