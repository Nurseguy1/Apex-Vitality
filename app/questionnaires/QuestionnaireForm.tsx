"use client";

import { FormEvent, useState } from "react";
import type { Questionnaire, Question } from "./data";
import { healthieLinks } from "../lib/healthie";

function QuestionField({ question, answers }: { question: Question; answers: Record<string, string[]> }) {
  const common = { name: question.id, required: question.required };
  const saved = answers[question.id] ?? [];

  return (
    <fieldset className="quiz-field">
      <legend>{question.label}{question.required && <span aria-hidden="true"> *</span>}</legend>
      {question.help && <p className="field-help urgent-help">{question.help}</p>}
      {question.type === "text" && <textarea {...common} defaultValue={saved[0] ?? ""} rows={4} />}
      {question.type === "number" && <input {...common} defaultValue={saved[0] ?? ""} type="number" min="0" />}
      {question.type === "scale" && (
        <div className="scale-row" role="radiogroup" aria-label={question.label}>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => <label key={value}><input {...common} defaultChecked={saved.includes(String(value))} type="radio" value={value} /><span>{value}</span></label>)}
        </div>
      )}
      {(question.type === "yesno" || question.type === "choice") && (
        <div className="choice-list">
          {question.options?.map((option) => <label key={option}><input {...common} defaultChecked={saved.includes(option)} type="radio" value={option} /><span>{option}</span></label>)}
        </div>
      )}
      {question.type === "multi" && (
        <div className="choice-list">
          {question.options?.map((option) => <label key={option}><input name={question.id} defaultChecked={saved.includes(option)} type="checkbox" value={option} /><span>{option}</span></label>)}
        </div>
      )}
    </fieldset>
  );
}

export default function QuestionnaireForm({ questionnaire }: { questionnaire: Questionnaire }) {
  const [section, setSection] = useState(0);
  const [complete, setComplete] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const current = questionnaire.sections[section];

  function continueQuiz(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const sectionAnswers: Record<string, string[]> = {};
    for (const [key, value] of formData.entries()) {
      sectionAnswers[key] = [...(sectionAnswers[key] ?? []), String(value)];
    }
    setAnswers((currentAnswers) => ({ ...currentAnswers, ...sectionAnswers }));
    if (section < questionnaire.sections.length - 1) {
      setSection(section + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setComplete(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (complete) {
    return (
      <section className="quiz-complete" aria-live="polite">
        <span className="status-pill">Screening complete</span>
        <h2>Thank you for completing the questionnaire.</h2>
        <p>Your answers on this preview page have not been transmitted or saved. This screening does not diagnose a condition, establish treatment eligibility, or replace a medical evaluation.</p>
        <p>{healthieLinks.intake ? "Continue to Apex Vitality’s secure Healthie intake to submit information for clinical review." : "When Apex Vitality opens secure intake, you will complete or transfer this information within the protected Healthie patient system for review by a licensed clinician."}</p>
        {healthieLinks.intake && <a className="primary-button" href={healthieLinks.intake} rel="noreferrer" target="_blank">Continue to secure Healthie intake ↗</a>}
        <button className="secondary-dark-button" type="button" onClick={() => { setSection(0); setComplete(false); setAnswers({}); }}>Review the questionnaire again</button>
      </section>
    );
  }

  return (
    <form className={`quiz-form quiz-${questionnaire.accent}`} onSubmit={continueQuiz}>
      <div className="quiz-progress"><span>Section {section + 1} of {questionnaire.sections.length}</span><div><i style={{ width: `${((section + 1) / questionnaire.sections.length) * 100}%` }} /></div></div>
      <div className="quiz-section-heading"><p className="eyebrow">{questionnaire.tier}</p><h2>{current.title}</h2>{current.note && <p>{current.note}</p>}</div>
      <div className="quiz-fields">{current.questions.map((question) => <QuestionField question={question} answers={answers} key={question.id} />)}</div>
      <div className="quiz-navigation">
        {section > 0 && <button className="secondary-dark-button" type="button" onClick={() => setSection(section - 1)}>← Previous section</button>}
        <button className="primary-button" type="submit">{section === questionnaire.sections.length - 1 ? "Complete screening" : "Continue →"}</button>
      </div>
      <p className="quiz-privacy">Fields marked * are required. Do not use this questionnaire for emergencies. Your responses remain on this page and are not sent or stored.</p>
    </form>
  );
}
