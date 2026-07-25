import type { Metadata } from "next";
import Link from "next/link";
import { CareNotice, PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Functional Health & Longevity | Apex Vitality",
  description: "Clinician-led functional health and longevity care connecting symptoms, nutrition, metabolic health, recovery, and focused testing.",
};

const focusAreas = [
  "Metabolic and cardiometabolic health",
  "Digestive and gut health",
  "Fatigue, sleep, stress, and recovery",
  "Nutrition and micronutrient concerns",
  "Men's and women's healthy aging",
  "Evidence-informed supplement planning",
];

export default function FunctionalHealthPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Whole-person, clinician-led care"
        title="Functional Health & Longevity"
        description="Look beyond isolated symptoms without losing clinical discipline. This whole-person telehealth pathway considers your symptoms, daily habits, metabolic health, recovery, and long-term goals together."
      />
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">A focused, stepwise approach</p>
          <h2>Begin with the questions most likely to change care.</h2>
          <p>Functional care should not mean ordering every available test. Apex Vitality starts with history, symptoms, medications, nutrition, sleep, movement, and conventional clinical data, then considers additional testing only when the result may affect the plan.</p>
        </div>
        <div className="marker-grid wide-markers">
          {focusAreas.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
      <section className="content-split">
        <div>
          <p className="eyebrow">Optional tools, not automatic packages</p>
          <h2>Use supplements and specialty testing purposefully.</h2>
          <p>When appropriate, Fullscript may support supplement fulfillment and selected functional or longevity testing. Products and specialty panels are separate from professional fees and are never required simply to participate in care.</p>
        </div>
        <ul className="check-list">
          <li>Focused testing based on symptoms and clinical goals</li>
          <li>Transparent discussion of cost and evidence limitations</li>
          <li>No guaranteed cure, performance, or anti-aging outcome</li>
          <li>Referral when in-person examination or specialty care is needed</li>
        </ul>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Choose a related pathway</p>
          <h2>Functional care for different stages and priorities.</h2>
        </div>
        <div className="service-grid">
          <article className="service-card"><h3>NAD+ Evaluation &amp; Comprehensive Care</h3><p>A streamlined clinician-led pathway for adults specifically interested in discussing NAD+-related treatment.</p><Link className="text-link" href="/nad-plus">Compare the two care levels →</Link></article>
          <article className="service-card"><h3>Women&apos;s Health &amp; Healthy Aging</h3><p>Perimenopause, menopause, metabolic health, thyroid concerns, sleep, energy, and healthy aging.</p><Link className="text-link" href="/womens-health">Explore women&apos;s health →</Link></article>
          <article className="service-card"><h3>Men&apos;s Health</h3><p>Energy, sexual health, strength, recovery, body composition, and individualized hormonal evaluation.</p><Link className="text-link" href="/mens-health">Explore men&apos;s health →</Link></article>
          <article className="service-card"><h3>Gut Health</h3><p>Structured evaluation of digestive symptoms, nutrition, medications, and testing when clinically useful.</p><Link className="text-link" href="/gut-health">Explore gut health →</Link></article>
        </div>
      </section>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
