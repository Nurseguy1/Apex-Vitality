import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Consultation & Focused Care Membership | Apex Vitality",
  description: "Start with a $39 consultation for California Men's Hormone Health. A $149/month membership is required before lab orders and includes monthly appointments and four follow-up lab checks per year.",
};
const consultation = "/start?treatment=Men%27s%20Health&plan=initial";
const membership = "/start?treatment=Focused%20Care%20Membership&plan=ongoing";
export default function MembershipsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="membership-availability" aria-label="Consultation and Focused Care membership">
        <p className="eyebrow">Men&apos;s Hormone Health · California medical care</p>
        <h1>Start with a conversation.</h1>
        <p><strong>$39 New Patient Consultation. No membership required.</strong> Speak with your clinician about your symptoms, goals, and what you want to pursue—or whether you need care at all.</p>
        <p>The initial visit is <strong>consultation only</strong>. It does not include laboratory orders or testing. If you want to proceed with lab orders, you must enroll separately in the <strong>$149/month Focused Care membership</strong> first.</p>
        <Link className="primary-button" href={consultation}>Book a consultation · $39</Link>
        <div className="membership-flow" aria-label="How to begin">
          <span><b>1</b><strong>Book a $39 consultation</strong><small>Pay once. No membership or recurring charge is required.</small></span>
          <span><b>2</b><strong>Discuss your goals</strong><small>Talk with your clinician about your concerns and whether further care makes sense.</small></span>
          <span><b>3</b><strong>Join before lab orders</strong><small>If you proceed with laboratory orders, separately authorize the $149/month membership.</small></span>
        </div>
      </section>
      <section className="membership-terms">
        <h2>Focused Care · $149/month</h2>
        <div>
          <p><strong>Required before lab orders:</strong> The consultation alone does not include lab orders. An active Focused Care membership is required before any laboratory orders are placed.</p>
          <p><strong>Monthly appointments:</strong> One scheduled clinician appointment each month for your focused care pathway, with progress monitoring and prescription or refill management when clinically appropriate.</p>
          <p><strong>Follow-up labs included:</strong> Four follow-up laboratory checks per year, including testing costs and clinician interpretation.</p>
          <p><strong>Separate costs:</strong> The $39 New Patient Consultation, medication, pharmacy charges, supplies, shipping, and services outside the included appointments and follow-up labs are paid separately.</p>
          <p><strong>Scheduled support:</strong> Clinical questions are handled during scheduled visits. Clinical messaging is not included; administrative help is available for appointments, forms, billing, and account support.</p>
          <p><strong>Monthly renewal:</strong> $149 is charged when you enroll in membership, then monthly until canceled. The $39 consultation does not automatically enroll you. Purchasing both the consultation and first membership month totals $188. Canceling stops future renewals; it does not prorate a month already purchased.</p>
          <p><strong>Clinical eligibility:</strong> Care is for eligible adults physically located in California. Your clinician determines whether testing or treatment is appropriate. Payment does not guarantee a prescription or outcome.</p>
          <Link className="primary-button" href={membership}>Join Focused Care · $149/month</Link>
        </div>
      </section>
      <section className="membership-cta">
        <div><p className="eyebrow">Begin with clarity</p><h2>A consultation before you commit.</h2><p>Start with a $39 conversation. Review the <Link href="/agreements/self-pay?purchase=initial&selection=Men%27s%20Health">consultation terms</Link> and, if you choose membership, the <Link href="/agreements/recurring-payments">renewal terms</Link>.</p></div>
        <Link className="primary-button" href={consultation}>Book your $39 consultation</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
