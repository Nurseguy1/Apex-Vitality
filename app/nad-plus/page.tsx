import type { Metadata } from "next";
import Link from "next/link";
import { CareNotice, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "NAD+ Focused Evaluation | Apex Vitality",
  description:
    "A clinician-led telehealth evaluation for adults interested in NAD+-related treatment, with comprehensive functional health care also available.",
};

const focusedReview = [
  "Focused review of symptoms, goals, medications, supplements, and relevant history",
  "Screening for contraindications and whether telehealth is appropriate",
  "Limited baseline testing when clinically indicated",
  "Discussion of evidence, limitations, alternatives, risks, and expected costs",
  "An early follow-up plan when treatment is prescribed",
];

const comprehensiveCare = [
  "45-minute comprehensive new-patient consultation",
  "Detailed metabolic, hormonal, nutritional, sleep, stress, and digestive-health review",
  "Quest laboratory testing selected according to clinical need",
  "Individualized treatment, nutrition, lifestyle, and Fullscript options",
  "Planned monitoring and ongoing care when appropriate",
];

export default function NadPlusPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-intro">
        <p className="eyebrow">Two levels of clinician-led care</p>
        <h1>NAD+ Evaluation &amp; Comprehensive Care</h1>
        <p>
          Start with an NAD+ question or take a more comprehensive look at your
          health. Choose a focused evaluation when NAD+ is your primary interest,
          or begin with Longevity &amp; Functional Health care for a broader
          assessment and treatment plan.
        </p>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Level 1</p>
          <h2>NAD+ Focused Evaluation</h2>
          <p>
            A streamlined telehealth pathway for adults interested in discussing
            NAD+-related treatment with a licensed clinician.
          </p>
        </div>
        <div className="content-split">
          <div>
            <h3>What the evaluation includes</h3>
            <ul className="check-list">
              {focusedReview.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Important payment information</p>
            <h3>Your focused evaluation is clinical care.</h3>
            <p>
              Your visit includes assessment, education, clinical guidance, and a
              treatment plan. After the visit, we help coordinate the prescriptions,
              pharmacy services, laboratory work, supplies, and follow-up included
              in that plan. Separate charges are explained clearly before fulfillment.
            </p>
            <p>
              Focused-evaluation pricing and secure checkout will be available
              when the clinical protocol and pharmacy pathway are finalized.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Level 2</p>
          <h2>Comprehensive Longevity &amp; Functional Health Care</h2>
          <p>
            Choose this pathway when fatigue, recovery, metabolic health,
            hormones, nutrition, sleep, digestive health, or healthy-aging goals
            need to be considered together.
          </p>
        </div>
        <div className="content-split">
          <ul className="check-list">
            {comprehensiveCare.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div>
            <p className="eyebrow">$325 one-time consultation</p>
            <h3>Begin with a thorough clinical assessment.</h3>
            <p>
              Your clinician will explain where NAD+-related treatment fits within
              your goals and incorporate it into a broader plan for energy,
              recovery, metabolic health, and healthy aging.
            </p>
            <Link className="primary-button" href="/schedule">
              Schedule comprehensive care
            </Link>
          </div>
        </div>
      </section>

      <aside className="screening-notice">
        <strong>About NAD+ products:</strong> Evidence for meaningful wellness
        and longevity outcomes remains limited and evolving. Compounded
        medications are not FDA-approved and are not reviewed by FDA for safety,
        effectiveness, or quality before marketing. Recommendations depend on
        individual clinical circumstances and product availability.
      </aside>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
