import Link from "next/link";

export default function MembershipNextStep({ california, purchasedItems }: { california: boolean; purchasedItems: string[] }) {
  if (!california) return null;
  const membershipIncluded = purchasedItems.some((item) => /Focused Care Membership/i.test(item));
  return (
    <section className="post-purchase-membership" aria-labelledby="choose-membership-title">
      <p className="eyebrow">Your next step</p>
      <h2 id="choose-membership-title">{membershipIncluded ? "Your Focused Care membership is enrolled." : "Start with your consultation."}</h2>
      {!membershipIncluded && <p>Your $39 consultation lets you discuss your goals and whether further care is appropriate. No membership is needed for this visit. Continue to patient access to arrange your consultation.</p>}
      <Link className="primary-button" href="/patient-access">Continue to patient access</Link>
      <div className="membership-default-callout">
        <strong>Lab orders require Focused Care · $149/month</strong>
        <p>If you proceed with lab orders, you must enroll in membership first. Membership includes one appointment each month and four follow-up lab checks per year, covering testing costs and clinician interpretation. It renews monthly until canceled.</p>
        <Link href={membershipIncluded ? "/memberships" : "/start?treatment=Focused%20Care%20Membership&plan=ongoing"}>{membershipIncluded ? "Review membership details" : "Enroll in Focused Care when ready"}</Link>
      </div>
    </section>
  );
}
