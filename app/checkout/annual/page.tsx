import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { randomUUID } from "node:crypto";
import { SiteHeader, SiteFooter } from "../../components";
import { annualMemberships, annualTier } from "../../lib/membership-catalog";
import { beginAnnualCheckout } from "./actions";

export const metadata: Metadata = { title: "Annual Membership | Apex Vitality", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";
export default async function AnnualCheckout({ searchParams }: { searchParams: Promise<{ tier?: string; error?: string }> }) {
  const query = await searchParams;
  const tier = annualTier(query.tier);
  if (!tier) redirect("/#memberships");
  const offer = annualMemberships[tier];
  return <main><SiteHeader /><article className="legal-page"><p className="eyebrow">Annual membership</p><h1>{offer.name}</h1><p><strong>{offer.display} per year, paid in full</strong>, plus applicable tax. Renews annually at {offer.display} until canceled.</p><p>{offer.includes}</p><p>Your first consultation is free. Membership is optional. Annual payment covers one year; it is not a monthly installment plan.</p><p>You may cancel future renewals using the cancellation method in your confirmation or by contacting <a href="mailto:apexvitality5@gmail.com">apexvitality5@gmail.com</a>. Cancellation stops the next renewal; refunds for the current period follow the <Link href="/terms">Terms</Link> and applicable law.</p><p>Review the <Link href="/agreements/self-pay">care and self-pay terms</Link>, <Link href="/telehealth-consent">Telehealth Consent</Link>, <Link href="/agreements/recurring-payments">automatic-renewal terms</Link>, and <Link href="/privacy">Privacy Policy</Link> before continuing.</p>{query.error && <p role="alert">{query.error === "acknowledgments" ? "Please review and check every acknowledgment before continuing." : "Secure checkout is temporarily unavailable. No payment has been taken. Please try again or contact Apex for help."}</p>}<form action={beginAnnualCheckout}><input type="hidden" name="tier" value={tier} /><input type="hidden" name="requestId" value={randomUUID()} /><section className="agreement-acceptance" aria-label="Annual membership acknowledgments"><label><input type="checkbox" name="california" value="yes" required /><span>I will be physically located in California during care.</span></label><label><input type="checkbox" name="care" value="yes" required /><span>I agree to the linked care and self-pay terms, Terms, and Telehealth Consent.</span></label><label><input type="checkbox" name="coverage" value="yes" required /><span>I am not enrolled in Medicare, Medicare Advantage, Medi-Cal/Medicaid, QMB, or dual-eligible coverage.</span></label><label><input type="checkbox" name="renewal" value="yes" required /><span>I expressly authorize {offer.display} now, plus applicable tax, and automatic annual renewal at {offer.display} until I cancel.</span></label></section><button className="primary-button" type="submit">Continue to secure checkout · {offer.display}/year</button></form><p><Link href={`/start?treatment=${encodeURIComponent(offer.name)}&plan=ongoing`}>Prefer monthly? {offer.monthly}/month →</Link></p></article><SiteFooter /></main>;
}
