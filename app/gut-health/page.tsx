import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Gut Health & Metabolic Balance Coaching | Apex Vitality",
  description: "Educational nutrition, digestive-wellness, lifestyle, and habit coaching for sustainable energy, routines, and everyday well-being.",
};

const coaching = [
  ["Understand your patterns", "Notice how food, hydration, sleep, stress, movement, and daily routines relate to how you feel."],
  ["Review labs educationally", "Explore wellness-related laboratory patterns, functional ranges, and questions to discuss with your licensed healthcare provider."],
  ["Build realistic habits", "Turn general wellness information into practical routines that fit your life, preferences, and responsibilities."],
  ["Track what helps", "Use simple observations and reflection to recognize progress, obstacles, and questions for your healthcare professionals."],
  ["Stay supported", "Use education, accountability, and structured follow-through to make healthy routines easier to maintain."],
];

export default function GutHealthPage() {
  return (
    <main className="gut-health-page">
      <SiteHeader />
      <section className="page-intro">
        <p className="eyebrow">Educational wellness coaching</p>
        <h1>Gut Health &amp; Metabolic Balance</h1>
        <p>Coaching clients build sustainable nutrition, digestive-wellness, energy, and daily-living habits through structured education, practical guidance, tracking, and accountability.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/contact">Ask about coaching</Link>
          <Link className="secondary-button" href="#coaching">See what coaching includes</Link>
        </div>
        <p className="hero-cta-note">Open to adults who identify with the goals described; marketing may speak especially to women ages 35–50 and people supporting neurodivergent family members.</p>
      </section>

      <section className="content-section" id="coaching">
        <div className="section-heading">
          <p className="eyebrow">Practical, whole-person support</p>
          <h2>Make everyday wellness easier to understand and sustain.</h2>
          <p>Coaching focuses on education and behavior—not diagnosing conditions or providing medical treatment. Clients organize the habits and questions that help them participate more confidently in their own wellness journey.</p>
        </div>
        <div className="service-grid light-grid">
          {coaching.map(([title, copy]) => <article className="service-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="content-split">
        <div>
          <p className="eyebrow">Educational functional lab review</p>
          <h2>Understand wellness patterns without turning coaching into medical care.</h2>
          <p>Coaching clients may receive a personalized educational review of wellness-related laboratory patterns and functional ranges. We explain what individual markers generally represent, discuss what results may indicate from a wellness perspective, and use those insights to support nutrition, lifestyle, sleep, stress, and habit goals.</p>
        </div>
        <div>
          <p>This review does not diagnose disease, provide medical treatment, replace clinical interpretation by a licensed healthcare provider, or direct medication changes. Abnormal, concerning, or medically significant findings are referred to an appropriate licensed provider.</p>
        </div>
      </section>

      <section className="content-split dark-panel">
        <div>
          <p className="eyebrow">Clear boundaries</p>
          <h2>Coaching supports wellness. It does not replace healthcare.</h2>
          <p>This pathway does not diagnose or treat medical conditions, prescribe or change medication, order diagnostic testing as medical care, or provide clinical interpretation of laboratory results.</p>
        </div>
        <ul className="check-list">
          <li>General nutrition and digestive-wellness education</li>
          <li>Educational review of wellness-related lab patterns</li>
          <li>Lifestyle, sleep, stress, movement, and routine support</li>
          <li>Goal setting, tracking, and accountability</li>
          <li>Help preparing questions for your licensed healthcare professionals</li>
        </ul>
      </section>

      <aside className="care-notice">
        <strong>Know when medical care is needed.</strong>
        <p>Severe or persistent abdominal pain, gastrointestinal bleeding, black stools, unexplained weight loss, persistent vomiting, fever, dehydration, anemia, difficulty swallowing, or other urgent concerns require evaluation by an appropriately licensed medical professional and are outside this coaching pathway.</p>
      </aside>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Start with a conversation</p>
          <h2>See whether this coaching route fits your goals.</h2>
          <p>If you are seeking diagnosis, treatment, prescriptions, or individualized medical interpretation, contact your licensed healthcare professional instead.</p>
          <Link className="primary-button" href="/contact">Contact Apex Vitality</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
