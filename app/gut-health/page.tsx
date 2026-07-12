import type { Metadata } from "next";
import { CareNotice, PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Gut Health & Digestive Wellness | Apex Vitality",
  description: "Telehealth evaluation for digestive symptoms, nutrition, lifestyle, and clinically appropriate lab review.",
};

const evaluation = [
  ["History first", "Review digestive symptoms, nutrition, medications, supplements, stress, sleep, and prior diagnoses or testing."],
  ["Selective testing", "Conventional labs and selected specialty testing may be considered when results are likely to guide care."],
  ["Personalized plan", "Recommendations may address nutrition, hydration, fiber, movement, stress, sleep, and supplements when appropriate."],
  ["Follow-up", "Track symptoms and response over time, adjust the plan, and refer for gastroenterology or in-person care when needed."],
];

export default function GutHealthPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Gut health & digestive wellness"
        title="Look beyond the symptom list without losing sight of medical fundamentals."
        description="Apex Vitality offers a structured telehealth evaluation for adults navigating bloating, irregularity, digestive discomfort, food-related concerns, or questions about the gut–metabolic connection."
      />
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">A measured approach</p>
          <h2>Every test should answer a useful clinical question.</h2>
          <p>Not every patient needs specialty testing. The medical team considers whether a result is likely to change recommendations before ordering a panel.</p>
        </div>
        <div className="service-grid light-grid">
          {evaluation.map(([title, copy]) => <article className="service-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
      <section className="content-split dark-panel">
        <div><p className="eyebrow">Testing when indicated</p><h2>Possible areas of review.</h2><p>Testing decisions depend on symptoms, prior workup, red flags, and the medical provider&apos;s judgment.</p></div>
        <ul className="check-list">
          <li>General metabolic and nutritional markers</li>
          <li>Inflammation or malabsorption concerns</li>
          <li>Selected stool or breath testing when clinically justified</li>
          <li>Coordination with primary care or gastroenterology</li>
        </ul>
      </section>
      <aside className="care-notice"><strong>Know the red flags.</strong><p>Severe or persistent abdominal pain, gastrointestinal bleeding, black stools, unexplained weight loss, persistent vomiting, fever, dehydration, anemia, or difficulty swallowing require prompt medical evaluation and may not be appropriate for a wellness telehealth program.</p></aside>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
