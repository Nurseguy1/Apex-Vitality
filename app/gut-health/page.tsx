import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Gut Health & Metabolic Balance Coaching | Apex Vitality",
  description: "Root-cause-oriented gut-health education and wellness coaching for adults who still do not feel well even when conventional lab results are described as normal.",
};

const coaching = [
  ["Understand your patterns", "Notice how food, hydration, sleep, stress, movement, and daily routines relate to how you feel."],
  ["Review labs educationally", "Explore wellness-related laboratory patterns and functional ranges to develop clearer, more practical wellness priorities."],
  ["Build realistic habits", "Turn general wellness information into practical routines that fit your life, preferences, and responsibilities."],
  ["Track what helps", "Use simple observations and reflection to recognize progress, obstacles, and patterns worth exploring further."],
  ["Stay supported", "Use education, accountability, and structured follow-through to make healthy routines easier to maintain."],
];

export default function GutHealthPage() {
  return (
    <main className="gut-health-page">
      <SiteHeader />
      <section className="page-intro">
        <p className="eyebrow">Educational wellness coaching</p>
        <h1>Gut Health &amp; Metabolic Balance</h1>
        <p>Have you been told your labs are normal, yet you still do not feel like yourself? This coaching path gives you time to be heard, explore the bigger wellness picture, and build practical gut-health and metabolic habits.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/contact">Ask about coaching</Link>
          <Link className="secondary-button" href="#coaching">See what coaching includes</Link>
        </div>
      </section>

      <section className="content-split">
        <div>
          <p className="eyebrow">When “normal” does not answer your questions</p>
          <h2>Your experience deserves more than a quick dismissal.</h2>
          <p>Many Gut Health clients arrive after being told that standard results are within range while fatigue, digestive discomfort, inconsistent energy, or difficulty maintaining healthy routines continues. Your experience deserves time, attention, and a thoughtful look at how nutrition, digestion, sleep, stress, movement, and everyday habits may fit together.</p>
        </div>
        <div>
          <p className="eyebrow">Root-cause-oriented education</p>
          <h2>Explore the patterns behind how you feel.</h2>
          <p>We use wellness education and educational lab review to explore possible contributing patterns across digestion, nutrition, sleep, stress, movement, and daily routines. Then we turn those insights into practical areas to support, track, and refine over time.</p>
        </div>
      </section>

      <section className="content-section" id="coaching">
        <div className="section-heading">
          <p className="eyebrow">Practical, whole-person support</p>
          <h2>Make everyday wellness easier to understand and sustain.</h2>
          <p>Coaching turns education and personal patterns into a focused wellness strategy. Clients organize their priorities, take practical action, track what changes, and refine their approach with ongoing support.</p>
        </div>
        <div className="service-grid light-grid">
          {coaching.map(([title, copy]) => <article className="service-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="content-split">
        <div>
          <p className="eyebrow">Educational functional lab review</p>
          <h2>See more meaning in the numbers.</h2>
          <p>Gut Health clients may receive a personalized educational review of wellness-related laboratory patterns and functional ranges. We explain what individual markers generally represent, discuss what results may indicate from a wellness perspective, and use those insights to support nutrition, lifestyle, sleep, stress, and habit goals.</p>
        </div>
        <div>
          <p>You leave with clearer wellness priorities, practical actions to try, patterns to track, and a stronger understanding of how your daily choices connect with the information in front of you.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Start with a conversation</p>
          <h2>Bring your questions. Leave with a clearer direction.</h2>
          <p>Tell us what still feels unresolved and what you want to understand. We will identify the coaching priorities that can help you move forward with greater clarity and consistency.</p>
          <Link className="primary-button" href="/contact">Contact Apex Vitality</Link>
          <p className="coaching-scope-note"><strong>Important information:</strong> Gut Health &amp; Metabolic Balance is an educational wellness-coaching service and does not diagnose or treat medical conditions, prescribe or change medication, order diagnostic testing as medical care, or provide clinical interpretation of laboratory results. If you are experiencing a medical emergency, call 911 or go to the nearest emergency department. For an urgent medical concern, seek prompt care from an appropriate urgent-care or medical provider.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
