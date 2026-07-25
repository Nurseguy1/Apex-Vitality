import type { Metadata } from "next";
import { CareNotice, PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Gut Health & Digestive Wellness | Apex Vitality",
  description: "Telehealth evaluation for digestive symptoms, nutrition, lifestyle, and clinically appropriate lab review.",
};

const evaluation = [
  ["History first", "Review digestive symptoms, nutrition, medications, supplements, stress, sleep, and prior diagnoses or testing."],
  ["Selective testing", "Conventional labs and selected specialty testing provide actionable information that guides care."],
  ["Personalized plan", "Your recommendations connect nutrition, hydration, fiber, movement, stress, sleep, and supplements."],
  ["Follow-up", "Track symptoms and response over time, adjust the plan, and refer for gastroenterology or in-person care when needed."],
];

export default function GutHealthPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Digestive wellness"
        title="Gut Health"
        description="Start with the digestive changes you notice and build a clear plan for bloating, irregularity, discomfort, food-related concerns, and the gut–metabolic connection."
      />
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Clarity before complexity</p>
          <h2>Use the right information to move your gut health forward.</h2>
          <p>Your clinician connects symptoms, nutrition, medications, prior testing, and goal-directed labs to build practical recommendations.</p>
        </div>
        <div className="service-grid light-grid">
          {evaluation.map(([title, copy]) => <article className="service-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
      <section className="content-split dark-panel">
        <div><p className="eyebrow">Testing that builds clarity</p><h2>Connect digestive symptoms with useful data.</h2><p>Your symptoms, prior workup, health history, and goals guide laboratory and specialty testing.</p></div>
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
