import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components";
import { charmLinks } from "../lib/charm";
import { corporateBillingEnabled } from "../lib/corporate-billing";
import CorporateBooking from "./CorporateBooking";
import "./corporate.css";

export const metadata: Metadata = {
  title: "Corporate Care Enrollment | Apex Vitality",
  description: "Enter your sponsoring company and register for corporate care with Apex Vitality.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function CorporateEnrollment() {
  return (
    <main>
      <SiteHeader />
      <section className="legal-page">
        <p className="eyebrow">Corporate Care Membership</p>
        <h1>A place to talk and be heard.</h1>
        <p>Your sponsoring company handles membership payment directly with Apex. You do not need to enter a personal payment card.</p>
        <p>Enter your company name and complete corporate enrollment, then register and choose your appointment in our secure calendar. Monthly company billing begins when enrollment is completed. Apex will confirm your sponsorship before your visit.</p>
        {charmLinks.comprehensiveBooking ? <CorporateBooking calendar={charmLinks.comprehensiveBooking} enrollmentEnabled={corporateBillingEnabled()} /> : <p>Please contact <a href="mailto:apexvitality5@gmail.com">Apex for scheduling help</a>.</p>}
      </section>
      <SiteFooter />
    </main>
  );
}
