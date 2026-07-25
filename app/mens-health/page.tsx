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
        eyebrow="Vitality, performance & hormonal health"
        title="Men's Health"
        description="Understand the symptoms, review the data, and build the right plan. Focused telehealth care for changes in energy, sexual health, strength, recovery, mood, sleep, or body composition."
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
          <h2>Thoughtful hormonal care, built with you.</h2>
          <p>
            Your clinician explains what your symptoms and laboratory findings mean,
            reviews the benefits and risks of your options, and helps you implement
            a treatment plan with the baseline testing and ongoing monitoring it needs.
            The focus is health, function, vitality, and long-term well-being.
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
