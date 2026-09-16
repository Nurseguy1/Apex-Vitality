import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Consultation & Focused Care Membership | Apex Vitality",
  description: "Men's Hormone Health: $149/month for care, labs, and prescribed medication. A $149/month membership is required before lab orders and includes monthly appointments, scheduled TRT labs, prescribed testosterone, supplies, and delivery.",
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
        <p><strong>$69 New Patient Consultation. No membership required.</strong> Speak with your clinician about your symptoms, goals, and what you want to pursue—or whether you need care at all.</p>
        <p><strong>Your $69 consultation fee is credited toward your first membership month when you join. Pay $80 for the first month, then $149/month.</strong></p>
        <p>The initial visit is <strong>consultation only</strong>. It does not include laboratory orders or testing. If you want to proceed with lab orders, you must enroll separately in the <strong>$149/month Focused Care membership</strong> first.</p>
        <Link className="primary-button" href={consultation}>Book a consultation · $69</Link>
        <div className="membership-flow" aria-label="How to begin">
          <span><b>1</b><strong>Book a $69 consultation</strong><small>Pay once. No membership or recurring charge is required.</small></span>
          <span><b>2</b><strong>Discuss your goals</strong><small>Talk with your clinician about your concerns and whether further care makes sense.</small></span>
          <span><b>3</b><strong>Continue with membership</strong><small>Apply your $69 consultation credit. Pay $80 for the first month, then $149/month for care, labs, medication, supplies, and delivery.</small></span>
        </div>
      </section>
      <section className="membership-terms">
        <h2>Focused Care · $149/month</h2>
        <div>
          <p><strong>Required before lab orders:</strong> The consultation alone does not include lab orders. An active Focused Care membership is required before any laboratory orders are placed.</p>
          <p><strong>Monthly appointments:</strong> One scheduled clinician appointment each month for your focused care pathway, with progress monitoring and prescription or refill management when clinically appropriate.</p>
          <p><strong>TRT labs included:</strong> Baseline testing, a check at 8 weeks, another 3 months later, then every 6 months, with clinician interpretation. Monitoring is personalized to your needs.</p>
          <p><strong>Medication and delivery included:</strong> Prescribed testosterone, injection supplies, delivery, and anastrozole when prescribed.</p>
          <p><strong>Getting started:</strong> Your $69 consultation fee is credited toward your first membership month when you join. Pay $80 for the first month, then $149/month.</p>
          <p><strong>Scheduled support:</strong> Clinical questions are handled during scheduled visits. Clinical messaging is not included; administrative help is available for appointments, forms, billing, and account support.</p>
          <p><strong>Monthly renewal:</strong> After your paid $69 consultation, the first membership payment is $80 with the consultation credit. Membership then renews at $149/month until canceled. The consultation does not automatically enroll you. Your consultation and first membership month together total $149. Canceling stops future renewals; it does not prorate a month already purchased.</p>
          <p><strong>Clinical eligibility:</strong> Care is for eligible adults physically located in California. Your clinician determines whether testing or treatment is appropriate. Payment does not guarantee a prescription or outcome.</p>
          <Link className="primary-button" href={membership}>Join · $80 first month with consultation credit</Link>
        </div>
      </section>
      <section className="membership-cta">
        <div><p className="eyebrow">Begin with clarity</p><h2>A consultation before you commit.</h2><p>Start with a $69 conversation. Review the <Link href="/agreements/self-pay?purchase=initial&selection=Men%27s%20Health">consultation terms</Link> and, if you choose membership, the <Link href="/agreements/recurring-payments">renewal terms</Link>.</p></div>
        <Link className="primary-button" href={consultation}>Book your $69 consultation</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
