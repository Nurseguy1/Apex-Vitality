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
        eyebrow="Healthspan & cellular wellness"
        title="Longevity Care"
        description="Build healthspan with measurable fundamentals. A premium care path for adults who want a coordinated view of metabolic health, recovery, body composition, sleep, performance, and long-term risk factors."
      />
      <section className="content-section">
        <div className="section-heading"><p className="eyebrow">What the program emphasizes</p><h2>Start with evidence, then individualize.</h2><p>Longevity is not a promise to reverse aging. It is a structured effort to identify modifiable risks, strengthen daily foundations, and consider additional medical options only when appropriate.</p></div>
        <div className="marker-grid wide-markers">
          {['Cardiometabolic markers', 'Sleep and recovery', 'Strength and body composition', 'Nutrition and micronutrients', 'Inflammation in context', 'Hormonal health when indicated'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
      <section className="content-split">
        <div><p className="eyebrow">Individualized care conversations</p><h2>Build a plan around your priorities.</h2><p>Your assessment, clinical guidance, and care plan begin at the first visit. Additional testing or medical options can be incorporated when they are useful, evidence-informed, and appropriate for your goals.</p></div>
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
