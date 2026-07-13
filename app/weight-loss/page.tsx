import type { Metadata } from "next";
import { CareNotice, PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Medical Weight Loss | Apex Vitality",
  description: "Clinician-guided telehealth weight-management care for eligible adults.",
};

const features = [
  ["Clinical evaluation", "John Bagby, MSN, FNP-C reviews your health history, goals, medications, and potential risk factors."],
  ["Individual care plan", "Recommendations may include nutrition, activity, behavior change, lab work, and medication when appropriate."],
  ["Ongoing follow-up", "Progress, tolerability, and next steps are reviewed over time so the plan can be adjusted responsibly."],
];

export default function WeightLossPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Medical weight management"
        title="A clearer path toward sustainable weight loss."
        description="Apex Vitality combines telehealth access, clinician guidance, and practical follow-up for adults seeking a medically informed approach to weight management."
      />
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">What care may include</p>
          <h2>Built around your health—not a one-size-fits-all protocol.</h2>
        </div>
        <div className="service-grid light-grid">
          {features.map(([title, copy]) => (
            <article className="service-card" key={title}><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <section className="content-split">
        <div>
          <p className="eyebrow">Medical treatment conversations</p>
          <h2>Advanced weight-management options require individualized review.</h2>
          <p>
            Medical treatment options may be discussed for eligible patients, but
            they are not right for everyone. Your medical provider considers medical
            history, current medications, contraindications, potential benefits, and risks.
          </p>
        </div>
        <ul className="check-list">
          <li>Health-history and medication review</li>
          <li>Baseline measurements and labs when indicated</li>
          <li>Nutrition, movement, sleep, and behavior strategy</li>
          <li>Follow-up for progress and side-effect monitoring</li>
        </ul>
      </section>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
