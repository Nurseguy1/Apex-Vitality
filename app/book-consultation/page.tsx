import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import CaliforniaBooking from "../components/CaliforniaBooking";
export const metadata: Metadata = { title: "Free First Consultation | Apex Vitality", robots: { index: false, follow: false } };
const calendar = "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=35c9756a5b86dc9f47cce5b694b4ef065c5d870db24188dc9cc35e4fb8368a0566e98fcf386c0141f296ce50cba21ed4a0ae868b6eb0918a";
export default function BookConsultation() {
  return <main><SiteHeader /><section className="consultation-booking-intro"><p className="eyebrow">Your first consultation is free</p><h1>Your health. Time to talk.</h1><p>Meet with John Bagby, FNP-C, to discuss lifestyle and health concerns. Bring your questions. We’ll make time to listen.</p><p><strong>For your free first consultation, select New Patient Consultation (30 mins).</strong></p><p>No payment or membership purchase is required for your first consultation. The 45-minute New Patient Visit is for enrolled members.</p><p>You must be physically located in California for the visit. Check the time zone shown in the calendar before booking.</p></section><CaliforniaBooking calendar={calendar} /><aside className="consultation-booking-help"><strong>Need help booking?</strong><p>Email <a href="mailto:apexvitality5@gmail.com">apexvitality5@gmail.com</a> for scheduling help. Keep health information in the secure patient portal.</p></aside><SiteFooter /></main>;
}
