import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { getVerifiedCheckout } from "../lib/stripe-checkout";

export const metadata: Metadata = { title: "Book Your New Patient Consultation | Apex Vitality", robots: { index: false, follow: false } };
const calendar = "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=35c9756a5b86dc9f47cce5b694b4ef065c5d870db24188dc9cc35e4fb8368a0566e98fcf386c0141f296ce50cba21ed4a0ae868b6eb0918a";
export default async function BookConsultation({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id = "" } = await searchParams;
  const checkout = session_id ? await getVerifiedCheckout(session_id) : null;
  const consultationPaid = checkout?.items.some(item => /Initial Clinical Visit|New Patient Consultation/i.test(item));
  return (
    <main>
      <SiteHeader />
      <section className="consultation-booking-intro">
        <p className="eyebrow">{consultationPaid ? "Consultation payment received · book your visit" : "New Patient Consultation · $69"}</p>
        <h1>Choose an appointment time.</h1>
        <p>In the secure calendar below, select <strong>New Patient Consultation (15 mins)</strong>, choose a time, and complete the appointment request.</p>
        <p>This is a video consultation to discuss your goals and whether further care is appropriate. <strong>No membership is required.</strong> Lab orders and testing are not included; lab orders require a separate $149/month membership.</p>
        <p><strong>Your $69 consultation fee is credited toward your first membership month when you join. Pay $80 for the first month, then $149/month.</strong></p>
        <p>You must be physically located in California for the visit. Calendar times are shown in Pacific Time.</p>
        {consultationPaid ? <p><strong>Your consultation payment is complete. You do not need to purchase a membership or pay again to book this consultation.</strong></p> : <p>If you already paid for your consultation, <strong>do not pay again</strong>—continue with the calendar below. If you have not paid yet, <Link href="/start?treatment=Men%27s%20Health&plan=initial">complete your $69 consultation payment</Link>. The practice will match your receipt to your appointment.</p>}
      </section>
      <section className="consultation-calendar" aria-label="Book a New Patient Consultation">
        <iframe src={calendar} title="Apex Vitality New Patient Consultation booking calendar" loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
      </section>
      <aside className="consultation-booking-help"><strong>Need help booking?</strong><p>Email <a href="mailto:apexvitality5@gmail.com?subject=New%20Patient%20Consultation%20booking%20help">apexvitality5@gmail.com</a> for scheduling help. If you paid already, say that you need help booking your consultation; do not make a second payment. Keep medical details in the secure patient portal.</p></aside>
      <SiteFooter />
    </main>
  );
}
