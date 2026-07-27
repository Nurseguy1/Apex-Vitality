import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components";

export const metadata: Metadata = {
  title: "Special Needs Nutrition Support Questionnaire | Apex Vitality",
  robots: { index: false, follow: false },
};

const foods = ["Fewer than 10 foods", "10–20 foods", "More than 20 foods", "It varies"];
const goals = ["Fill likely nutrition gaps", "Support a regular digestive routine", "Simplify supplements", "Support protein intake", "Build a steadier daily routine"];

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
        <form className="nutrition-questionnaire">
          <div className="nutrition-progress"><span>About 5 minutes</span><i><b /></i><span>1 of 3</span></div>
          <fieldset>
            <legend>Who are you completing this for?</legend>
            <div className="nutrition-choice-grid">
              {["A child age 4–12", "A teen age 13–17", "An adult age 18+", "Myself"].map((item) => <label key={item}><input type="radio" name="person" /><span>{item}</span></label>)}
            </div>
          </fieldset>
          <fieldset>
            <legend>About how many different foods are regularly accepted?</legend>
            <div className="nutrition-choice-grid">
              {foods.map((item) => <label key={item}><input type="radio" name="foods" /><span>{item}</span></label>)}
            </div>
          </fieldset>
          <fieldset>
            <legend>What would you most like help with?</legend>
            <p className="nutrition-field-help">Choose all that apply.</p>
            <div className="nutrition-choice-grid">
              {goals.map((item) => <label key={item}><input type="checkbox" /><span>{item}</span></label>)}
            </div>
          </fieldset>
          <fieldset>
            <legend>Anything we should consider from the start?</legend>
            <div className="nutrition-choice-grid">
              {["Food allergies or sensitivities", "Prescription medications", "Trouble swallowing or choking", "Recent weight or growth concern", "None of these"].map((item) => <label key={item}><input type="checkbox" /><span>{item}</span></label>)}
            </div>
          </fieldset>
          <div className="nutrition-form-actions">
            <Link className="secondary-dark-button" href="/nutrition-support">← Back</Link>
            <Link className="primary-button" href="/nutrition-support/care-options">Preview my next step →</Link>
          </div>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
