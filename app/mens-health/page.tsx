import type { Metadata } from "next";
import { CareNotice, PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Men's Health & Testosterone Care | Apex Vitality",
  description: "Telehealth evaluation for men's health concerns and clinically appropriate testosterone care.",
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
          <p className="eyebrow">Testosterone care</p>
          <h2>Treatment only when clinically appropriate.</h2>
          <p>
            Testosterone therapy requires a licensed medical provider&apos;s diagnosis, discussion of
            benefits and risks, baseline testing, and ongoing monitoring. Apex
            Vitality does not position testosterone as a shortcut for bodybuilding
            or purely aesthetic goals.
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
