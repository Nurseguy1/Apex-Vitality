import type { Metadata } from "next";
import { CareNotice, PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Men's Vitality & Hormonal Health | Apex Vitality",
  description: "Telehealth evaluation for men's vitality, performance, and hormonal health concerns.",
};

export default function MensHealthPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Men's health"
        title="Understand the symptoms. Review the data. Build the right plan."
        description="Focused telehealth care for men experiencing changes in energy, sexual health, strength, recovery, mood, sleep, or body composition."
      />
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">A responsible evaluation</p>
          <h2>Symptoms alone do not determine treatment.</h2>
          <p>
            Men&apos;s health concerns can have many causes. Clinical review may include
            symptoms, medical history, medications, sleep, stress, metabolic health,
            and appropriately timed lab testing.
          </p>
        </div>
        <div className="marker-grid wide-markers">
          {['Energy and focus', 'Libido and sexual health', 'Strength and recovery', 'Sleep and mood', 'Body composition', 'Cardiometabolic health'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
      <section className="content-split dark-panel">
        <div>
          <p className="eyebrow">Hormonal health care</p>
          <h2>Medical treatment only when clinically appropriate.</h2>
          <p>
            Hormonal treatment requires a licensed medical provider&apos;s diagnosis,
            discussion of benefits and risks, baseline testing, and ongoing
            monitoring. Apex Vitality does not position medical therapy as a
            shortcut for bodybuilding or purely aesthetic goals.
          </p>
        </div>
        <ul className="check-list">
          <li>Symptom and medical-history review</li>
          <li>Appropriate laboratory evaluation</li>
          <li>Shared decision-making with a clinician</li>
          <li>Monitoring based on the care plan</li>
        </ul>
      </section>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
