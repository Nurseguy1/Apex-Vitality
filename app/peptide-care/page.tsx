import type { Metadata } from "next";
import Link from "next/link";
import { CareNotice, SiteFooter, SiteHeader } from "../components";
import { charmLinks } from "../lib/charm";
import { JsonLd } from "../seo";

export const metadata: Metadata = {
  title: "BPC-157 & Peptide Monitoring | Judgment-Free Clinical Care | Apex Vitality",
  description: "Already using BPC-157 or another peptide without medical supervision? Move into judgment-free health monitoring, product review, baseline assessment, labs, and lawful clinician-guided care.",
  keywords: ["BPC-157 monitoring", "peptide monitoring", "peptide doctor California", "sermorelin care", "peptide safety review", "online peptide clinician"],
};

const reviewItems = [
  "Everything you are currently taking, including peptides, supplements, and medications",
  "Product label, concentration, source, storage, and injection practices",
  "Your recovery, performance, body-composition, pain, sleep, and longevity goals",
  "Symptoms, side effects, and changes you have noticed",
  "Baseline labs and follow-up monitoring selected around your situation",
  "A clinician-guided plan for safer, more effective next steps",
];

export default function PeptideCarePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "BPC-157 and Peptide Monitoring",
    description: "Judgment-free clinical monitoring for adults already using or considering BPC-157 and other peptides.",
    about: ["BPC-157", "peptide monitoring", "sermorelin", "recovery", "healthy aging"],
    audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <SiteHeader />
      <section className="focused-care-hero peptide-care-hero">
        <div>
          <p className="eyebrow">Already using peptides? Bring your health back into the picture.</p>
          <h1>Move from buying peptides on your own to monitored clinical care.</h1>
          <p className="focused-care-lede">No judgment. No lecture. Tell us what you are using, what you want to achieve, and how you feel. A licensed clinician will help you understand the product, monitor your health, transition away from unsupervised use, and build a lawful path toward your recovery, performance, and longevity goals.</p>
          <div className="hero-actions">
            {charmLinks.portal && <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">Start my confidential peptide review ↗</a>}
            <Link className="secondary-button" href="/schedule">Book comprehensive care</Link>
          </div>
          <p className="focused-care-note">Your information stays within the secure patient portal. Bring photos of labels, packaging, ingredient lists, dosing instructions, and recent laboratory results.</p>
        </div>
        <aside className="focused-offer-card">
          <span>Replace guesswork with real oversight</span>
          <h2>Keep your goals. Add monitoring, context, and a medical provider.</h2>
          <ul className="check-list"><li>Confidential product and protocol review</li><li>Baseline health and medication assessment</li><li>Goal-directed laboratory planning</li><li>Side-effect and progress monitoring</li><li>Clinician-guided treatment alternatives</li></ul>
        </aside>
      </section>

      <section className="peptide-conversion-section">
        <div>
          <p className="eyebrow">You do not have to figure this out alone</p>
          <h2>If BPC-157 brought you here, your goal deserves a complete plan.</h2>
          <p>People seek BPC-157 for injury recovery, joint or tendon concerns, digestive symptoms, training recovery, and performance. Monitored care starts with that goal—not with judgment about how you got here.</p>
          <p><strong>Apex Vitality does not prescribe or supply BPC-157.</strong> BPC-157 is not an FDA-approved drug, and FDA identifies significant safety concerns for compounded BPC-157. That does not end the conversation. It gives us a reason to examine what you are taking, protect your health, help you move away from unsupervised use, and build a monitored approach using lawful clinical options.</p>
        </div>
        <div className="peptide-goal-list">
          <span>Injury &amp; tissue-recovery goals</span><span>Joint, tendon &amp; mobility concerns</span><span>Training recovery &amp; performance</span><span>Digestive-health goals</span><span>Sleep, strength &amp; body composition</span><span>Longevity &amp; resilience</span>
        </div>
      </section>

      <section className="focused-process" aria-labelledby="peptide-process">
        <div className="section-heading"><p className="eyebrow">A judgment-free transition</p><h2 id="peptide-process">Three steps from self-directed use to monitored care.</h2></div>
        <div className="focused-process-grid">
          <article><span>01</span><h3>Tell us what you are using</h3><p>Share the product, source, label, dose, schedule, storage, injection practices, symptoms, and goals through the secure portal.</p></article>
          <article><span>02</span><h3>Get a complete clinical review</h3><p>Your clinician reviews your health history, medications, risk factors, relevant labs, and the goals behind your peptide use.</p></article>
          <article><span>03</span><h3>Move forward with lawful care</h3><p>Receive a clear health-monitoring plan, follow-up structure, and clinician-guided alternatives that support the goals behind your peptide use.</p></article>
        </div>
      </section>

      <section className="focused-choice peptide-review-list">
        <div><p className="eyebrow">Bring the whole picture</p><h2>Your peptide review connects the product with your health.</h2><p>Online peptide sellers focus on the vial. Monitored care focuses on you—your history, symptoms, goals, labs, response, and long-term health.</p></div>
        <ul className="check-list focused-comprehensive-list">{reviewItems.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="sermorelin-recovery-bridge">
        <div>
          <p className="eyebrow">A prescription-based recovery pathway</p>
          <h2>Keep the tissue-recovery goal. Move into monitored sermorelin peptide care.</h2>
          <p>Sermorelin is a prescription peptide that supports the body’s natural growth-hormone signaling, a pathway involved in tissue maintenance, sleep, and physical recovery. Work with a licensed clinician to build a patient-specific peptide plan with licensed pharmacy coordination and monitoring centered on your health and goals.</p>
          <Link className="primary-button" href="/sermorelin">Explore sermorelin peptide care</Link>
        </div>
        <ul className="check-list">
          <li>Patient-specific prescription and clinician oversight</li>
          <li>Recovery, sleep, strength, and body-composition goals</li>
          <li>Baseline health and medication review</li>
          <li>Laboratory planning and follow-up monitoring</li>
          <li>Licensed pharmacy coordination</li>
        </ul>
      </section>

      <section className="peptide-next-step">
        <p className="eyebrow">A stronger next step</p>
        <h2>Turn an online peptide purchase into a real health strategy.</h2>
        <p>Bring your questions, your treatment ideas, and the products you already use. We will work with you to protect your health, transition out of unsupervised use, and pursue your goals through lawful, clinician-led care.</p>
        <div className="hero-actions">
          {charmLinks.portal && <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">Start my peptide review ↗</a>}
          <Link className="secondary-dark-button" href="/sermorelin">Explore sermorelin peptide care</Link>
        </div>
      </section>

      <CareNotice />
      <SiteFooter />
    </main>
  );
}
