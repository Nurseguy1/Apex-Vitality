import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { questionnaires } from "./data";

export const metadata = {
  title: "Patient Screening Questionnaires | Apex Vitality",
  description: "Explore Apex Vitality screening questionnaires for metabolic health, men’s vitality, and functional gut and cellular health.",
};

export default function QuestionnairesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="questionnaire-hero">
        <p className="eyebrow">Patient screening questionnaires</p>
        <h1>Start with the right questions.</h1>
        <p>Choose the short questionnaire that matches your goal. We collect the essentials first so you can get started quickly; your clinician can gather additional details during care when they are relevant.</p>
      </section>
      <section className="questionnaire-grid">
        {questionnaires.map((quiz, index) => (
          <article className={`questionnaire-card quiz-${quiz.accent}`} key={quiz.slug}>
            <span>{index < 3 ? `Questionnaire ${index + 1}` : "Universal medication review"} · {quiz.tier}</span>
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
            <Link className="quiz-button" href={`/questionnaires/${quiz.slug}`}>Take this quiz →</Link>
          </article>
        ))}
      </section>
      <aside className="screening-notice"><strong>Important:</strong> If you have severe symptoms, a medical emergency, or thoughts of harming yourself, call emergency services. In the U.S., call or text 988 for the Suicide &amp; Crisis Lifeline.</aside>
      <SiteFooter />
    </main>
  );
}
