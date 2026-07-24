import type { Metadata } from "next";
import { CareNotice, PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Women's Health & Healthy Aging | Apex Vitality",
  description: "Adult telehealth care for perimenopause, menopause, metabolic health, thyroid concerns, sleep, energy, and healthy aging.",
};

const concerns = [
  "Perimenopause and menopause symptoms",
  "Sleep, energy, mood, and recovery",
  "Weight and metabolic changes",
  "Thyroid and nutrient concerns",
  "Bone and cardiometabolic risk factors",
  "Healthy-aging and longevity planning",
];

export default function WomensHealthPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Women's health & healthy aging"
        title="Care that connects hormonal transitions with whole-person health."
        description="Adult telehealth support for women navigating changes in energy, sleep, mood, weight, metabolic health, recovery, and healthy aging."
      />
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">What we can evaluate</p>
          <h2>Start with symptoms, history, risks, and goals.</h2>
          <p>Care may include a medication and supplement review, relevant laboratory planning, lifestyle support, risk assessment, and an individualized discussion of appropriate treatment options.</p>
        </div>
        <div className="marker-grid wide-markers">
          {concerns.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
      <section className="content-split">
        <div>
          <p className="eyebrow">Telehealth with clear boundaries</p>
          <h2>Some concerns require in-person or specialty care.</h2>
          <p>Apex Vitality does not replace routine gynecologic care, cervical or breast screening, pelvic examination, imaging, pregnancy care, or urgent evaluation. When those services are needed, we will recommend appropriate in-person or specialist follow-up.</p>
        </div>
        <ul className="check-list">
          <li>No treatment based solely on a questionnaire</li>
          <li>No automatic hormone or supplement protocol</li>
          <li>Testing selected according to individual clinical need</li>
          <li>Referral for abnormal bleeding, breast concerns, pelvic symptoms, pregnancy, or urgent conditions</li>
        </ul>
      </section>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
