"use client";

import { useState } from "react";
import Link from "next/link";

const goals = ["Fill likely nutrition gaps", "Support protein intake", "Support bowel regularity", "Improve digestive comfort", "Simplify supplements", "Find an acceptable supplement form"];
const considerations = ["Food allergies or sensitivities", "Prescription medications", "Current vitamins or supplements", "Previous supplement intolerance"];
const safety = ["Coughing, choking, or trouble swallowing during meals", "Recent weight loss or growth concern", "Persistent vomiting, blood in stool, or severe abdominal pain", "Tube feeding or medically managed nutrition", "Kidney, liver, metabolic, bleeding, or malabsorption condition"];
const forms = ["Powder mixed into food", "Liquid", "Chewable", "Gummy", "Capsule or tablet", "Not sure yet"];

function Options({ items, name, multiple, selected, onChange }: { items: string[]; name: string; multiple?: boolean; selected: string[]; onChange: (items: string[]) => void }) {
  function toggle(item: string) {
    onChange(multiple ? (selected.includes(item) ? selected.filter((value) => value !== item) : [...selected, item]) : [item]);
  }
  return <div className="nutrition-choice-grid">{items.map((item) => <label key={item}><input type={multiple ? "checkbox" : "radio"} name={name} checked={selected.includes(item)} onChange={() => toggle(item)} /><span>{item}</span></label>)}</div>;
}

export default function NutritionQuestionnaire() {
  const [step, setStep] = useState(1);
  const [person, setPerson] = useState<string[]>([]);
  const [foods, setFoods] = useState<string[]>([]);
  const [selectedGoals, setGoals] = useState<string[]>([]);
  const [selectedConsiderations, setConsiderations] = useState<string[]>([]);
  const [selectedSafety, setSafety] = useState<string[]>([]);
  const [preferredForms, setForms] = useState<string[]>([]);

  const comprehensive = selectedSafety.length > 0;
  const focused = !comprehensive && (foods.includes("Fewer than 10 foods") || selectedGoals.some((goal) => ["Support protein intake", "Support bowel regularity", "Improve digestive comfort"].includes(goal)) || selectedConsiderations.length >= 2);
  const result = comprehensive ? "Comprehensive Care" : focused ? "Focused Support" : "Daily Nutrition Foundation";

  if (step === 4) {
    return (
      <section className="nutrition-route-result" aria-live="polite">
        <p className="eyebrow">Your preview pathway</p>
        <span className={`nutrition-route-pill route-${comprehensive ? "comprehensive" : focused ? "focused" : "foundation"}`}>{result}</span>
        <h2>{comprehensive ? "Begin with a fuller clinical conversation." : focused ? "Add focused support to the foundation." : "Start with a simple daily foundation."}</h2>
        <p>{comprehensive ? "One or more answers deserve a more complete review before choosing supplements. A longer visit can connect feeding safety, growth, medical history, medications, and nutrition goals." : focused ? "Your answers point to a specific nutrition or digestive priority. A focused review can add the right questions while keeping the plan practical." : "Your answers fit the streamlined starting pathway: clinician review, a simple nutrition foundation, and optional follow-up as new goals develop."}</p>
        <div className="nutrition-result-actions"><button className="secondary-dark-button" type="button" onClick={() => setStep(1)}>Review again</button><Link className="primary-button" href="/nutrition-support/care-options">See this care option →</Link></div>
        <small>This preview does not provide a diagnosis, transmit answers, or replace the secure clinical intake.</small>
      </section>
    );
  }

  return (
    <form className="nutrition-questionnaire" onSubmit={(event) => { event.preventDefault(); setStep(step + 1); }}>
      <div className="nutrition-progress"><span>About 5 minutes</span><i><b style={{ width: `${step * 33.33}%` }} /></i><span>{step} of 3</span></div>
      {step === 1 && <>
        <fieldset><legend>Who are you completing this for?</legend><Options items={["A child age 4–12", "A teen age 13–17", "An adult age 18+", "Myself"]} name="person" selected={person} onChange={setPerson} /></fieldset>
        <fieldset><legend>About how many different foods are regularly accepted?</legend><Options items={["Fewer than 10 foods", "10–20 foods", "More than 20 foods", "It varies"]} name="foods" selected={foods} onChange={setFoods} /></fieldset>
        <fieldset><legend>What would you most like help with?</legend><p className="nutrition-field-help">Choose all that apply.</p><Options items={goals} name="goals" multiple selected={selectedGoals} onChange={setGoals} /></fieldset>
      </>}
      {step === 2 && <>
        <div className="nutrition-step-heading"><p className="eyebrow">A little more context</p><h2>Help us keep the starting plan simple and safe.</h2></div>
        <fieldset><legend>Which items should the clinician consider?</legend><p className="nutrition-field-help">Choose all that apply.</p><Options items={considerations} name="considerations" multiple selected={selectedConsiderations} onChange={setConsiderations} /></fieldset>
        <fieldset><legend>Does the person have any of these concerns?</legend><p className="nutrition-field-help">These answers may move the starting point to comprehensive care.</p><Options items={safety} name="safety" multiple selected={selectedSafety} onChange={setSafety} /></fieldset>
      </>}
      {step === 3 && <>
        <div className="nutrition-step-heading"><p className="eyebrow">Make the plan usable</p><h2>Build around the routine that already works.</h2></div>
        <fieldset><legend>Which supplement forms are most likely to be accepted?</legend><p className="nutrition-field-help">Choose any that could work.</p><Options items={forms} name="forms" multiple selected={preferredForms} onChange={setForms} /></fieldset>
        <fieldset><legend>What would feel like meaningful progress after four to six weeks?</legend><textarea rows={5} placeholder="For example: a simpler morning routine, more consistent protein intake, or better acceptance of one foundational supplement." /></fieldset>
      </>}
      <div className="nutrition-form-actions">{step > 1 ? <button className="secondary-dark-button" type="button" onClick={() => setStep(step - 1)}>← Previous</button> : <Link className="secondary-dark-button" href="/nutrition-support">← Back</Link>}<button className="primary-button" type="submit">{step === 3 ? "See my starting pathway →" : "Continue →"}</button></div>
    </form>
  );
}
