import type { Metadata } from "next";
import { CareNotice, PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Longevity & Cellular Wellness | Apex Vitality",
  description: "Clinically guided telehealth care focused on metabolic resilience, recovery, biomarkers, and healthy aging.",
};

export default function LongevityPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Longevity & cellular wellness"
        title="Build healthspan with measurable fundamentals."
        description="A premium care path for adults who want a coordinated view of metabolic health, recovery, body composition, sleep, performance, and long-term risk factors."
      />
      <section className="content-section">
        <div className="section-heading"><p className="eyebrow">What the program emphasizes</p><h2>Start with evidence, then individualize.</h2><p>Longevity is not a promise to reverse aging. It is a structured effort to identify modifiable risks, strengthen daily foundations, and consider additional medical options only when appropriate.</p></div>
        <div className="marker-grid wide-markers">
          {['Cardiometabolic markers', 'Sleep and recovery', 'Strength and body composition', 'Nutrition and micronutrients', 'Inflammation in context', 'Hormonal health when indicated'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
      <section className="content-split">
        <div><p className="eyebrow">Individualized care conversations</p><h2>Eligibility, legality, and evidence come first.</h2><p>Additional medical options are never automatic and may be unavailable. Any treatment discussion requires an established clinical relationship, individualized evaluation, informed consent, appropriate monitoring, and compliance with applicable law.</p></div>
        <ul className="check-list">
          <li>No guaranteed performance or anti-aging outcomes</li>
          <li>No treatment based solely on an online questionnaire</li>
          <li>No treatment without appropriate follow-up</li>
        </ul>
      </section>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
