import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components";
import { charmLinks } from "../lib/charm";
import CorporateBooking from "./CorporateBooking";
import "./corporate.css";

export const metadata: Metadata = {
  title: "Corporate Care Enrollment | Apex Vitality",
  description: "Enter your sponsoring company and register for corporate care with Apex Vitality.",
  robots: { index: false, follow: false },
};

export default function CorporateEnrollment() {
  return (
    <main>
      <SiteHeader />
      <section className="legal-page">
        <p className="eyebrow">Corporate Care Membership</p>
        <h1>A place to talk and be heard.</h1>
        <p>Your sponsoring company handles membership payment directly with Apex. You do not need to enter a personal payment card.</p>
        <p>Enter your company name, then complete registration and choose an appointment in our secure calendar. You can schedule immediately. Apex will confirm your company sponsorship before your visit.</p>
        {charmLinks.comprehensiveBooking ? <CorporateBooking calendar={charmLinks.comprehensiveBooking} /> : <p>Please contact <a href="mailto:apexvitality5@gmail.com">Apex for scheduling help</a>.</p>}
      </section>
      <SiteFooter />
    </main>
  );
}
