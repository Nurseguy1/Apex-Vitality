import type { Metadata } from "next";
import { CareNotice, PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Medical Weight Management | Apex Vitality",
  description: "Clinician-guided telehealth weight-management assessment, planning, and ongoing care for adults.",
};

const features = [
  ["Clinical evaluation", "A licensed clinician reviews your health history, goals, medications, and potential risk factors."],
  ["Individual care plan", "Your recommendations connect nutrition, activity, behavior change, relevant testing, and clinically appropriate treatment options."],
  ["Ongoing follow-up", "Progress, tolerability, and next steps are reviewed over time so the plan can be adjusted responsibly."],
];

export default function WeightLossPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Clinician-guided telehealth care"
        title="Medical Weight Management"
        description="A clearer path toward sustainable weight loss. Apex Vitality combines telehealth access, clinician guidance, and practical follow-up for adults seeking a medically informed approach."
      />
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">What your care includes</p>
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
          <h2>A complete medical strategy, personalized to you.</h2>
          <p>
            Your clinician reviews your history, current treatments, goals, relevant
            data, benefits, and risks; explains what those findings mean;
            and helps you put the right nutrition, lifestyle, medical, and follow-up
            plan into action.
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
