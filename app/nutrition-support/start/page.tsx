import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components";
import NutritionQuestionnaire from "./NutritionQuestionnaire";

export const metadata: Metadata = {
  title: "Special Needs Nutrition Support Questionnaire | Apex Vitality",
  robots: { index: false, follow: false },
};

export default function NutritionSupportStartPage() {
  return (
    <main className="nutrition-preview">
      <SiteHeader />
      <section className="nutrition-form-shell">
        <div className="nutrition-form-intro">
          <p className="eyebrow">Apex Daily Nutrition Support for Special Needs · Step 1</p>
          <h1>A simple place to start.</h1>
          <p>This preview shows the short questionnaire a caregiver would complete. It gathers the essentials first; answers that need more attention can open a focused follow-up instead of making every family complete a long intake.</p>
          <div className="preview-note"><strong>Preview only</strong><span>These answers are not saved or transmitted.</span></div>
        </div>
        <NutritionQuestionnaire />
      </section>
      <SiteFooter />
    </main>
  );
}
