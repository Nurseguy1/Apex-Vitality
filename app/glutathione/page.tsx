import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CareNotice, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Glutathione Care | Antioxidant Support & Resilience | Apex Vitality",
  description: "Begin clinician-guided glutathione care with personal medical review, licensed-pharmacy coordination, and convenient home delivery when prescribed.",
};

export default function GlutathionePage() {
  return (
    <main>
      <SiteHeader />
      <section className="focused-care-hero glutathione-hero">
        <div className="sermorelin-hero-copy">
          <p className="eyebrow">Clinician-guided antioxidant support</p>
          <h1>Support resilience from the inside out with glutathione care.</h1>
          <p className="focused-care-lede">Build glutathione into a personalized plan centered on antioxidant support, recovery, wellness, and healthy-aging goals.</p>
          <p className="focused-care-simple-path">Start with a quick questionnaire. A clinician reviews your history and goals. When prescribed, your medication is delivered directly to your door.</p>
          <div className="hero-actions"><Link className="primary-button" href="#glutathione-offer">Explore my options</Link><Link className="secondary-button" href="/schedule/comprehensive">Choose comprehensive care</Link></div>
          <div className="sermorelin-price-line"><strong>$149</strong><span>for one month</span><b>or $119/month with a three-month plan</b></div>
        </div>
      </section>

      <section className="sermorelin-offer" id="glutathione-offer" aria-labelledby="glutathione-offer-title">
        <div className="sermorelin-kit-image"><Image src="/treatment-glutathione-v1.png" alt="Illustrative Glutathione care packaging" width={1536} height={1024} priority /></div>
        <div>
          <p className="eyebrow">One clear program price</p>
          <h2 id="glutathione-offer-title">Glutathione care, medication, and delivery in one plan.</h2>
          <p className="sermorelin-offer-lede">Choose a flexible month or build consistency and save with a three-month plan.</p>
          <div className="sermorelin-plan-grid">
            <article><span>Flexible</span><strong>$149</strong><b>one month</b><p>Start with a focused month of clinician-guided antioxidant support.</p><Link className="plan-select-button" href="/start?treatment=Glutathione&plan=1-month">Choose one month</Link></article>
            <article className="featured"><span>Best value</span><strong>$357</strong><b>three months · $119/month</b><p>Save $90 and give your wellness routine time to build momentum.</p><Link className="plan-select-button" href="/start?treatment=Glutathione&plan=3-month">Choose three months</Link></article>
          </div>
          <ul className="check-list"><li>Personal clinician review</li><li>Prescription and pharmacy coordination</li><li>Medication paid separately through the pharmacy</li><li>Secure follow-up support</li></ul>
        </div>
      </section>

      <section className="focused-process" aria-labelledby="glutathione-process">
        <div className="section-heading"><p className="eyebrow">Simple by design</p><h2 id="glutathione-process">Move from your goals to a personalized plan in three steps.</h2></div>
        <div className="focused-process-grid">
          <article><span>01</span><h3>Share your goals</h3><p>Complete a secure intake covering your health history, medications, supplements, and wellness priorities.</p></article>
          <article><span>02</span><h3>Collaborate with your clinician</h3><p>Your clinician reviews your information and determines whether glutathione fits your personalized care plan.</p></article>
          <article><span>03</span><h3>Begin your plan</h3><p>When prescribed, your medication is coordinated with a licensed pharmacy for convenient home delivery.</p></article>
        </div>
      </section>

      <section className="sermorelin-experience">
        <div className="section-heading"><p className="eyebrow">Built around your goals</p><h2>Make antioxidant support part of a complete wellness strategy.</h2><p>Connect glutathione with sleep, nutrition, movement, recovery, and healthy-aging habits organized around the way you want to feel and function.</p></div>
        <Link className="primary-button" href="/start?treatment=Glutathione&plan=1-month">Begin with one month</Link>
      </section>

      <aside className="screening-notice"><strong>About glutathione products:</strong> Compounded prescription products are not FDA-approved and are not reviewed by FDA for safety, effectiveness, or quality before marketing. Your clinician determines whether treatment is appropriate and reviews the product, risks, and follow-up plan with you.</aside>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
