import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components";
import QuestionnaireForm from "../QuestionnaireForm";
import { getQuestionnaire, questionnaires } from "../data";

export function generateStaticParams() {
  return questionnaires.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const questionnaire = getQuestionnaire(slug);
  return { title: questionnaire ? `${questionnaire.title} | Apex Vitality` : "Questionnaire | Apex Vitality" };
}

export default async function QuestionnairePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const questionnaire = getQuestionnaire(slug);
  if (!questionnaire) notFound();

  return (
    <main>
      <SiteHeader />
      <section className={`quiz-page-intro quiz-${questionnaire.accent}`}>
        <p className="eyebrow">{questionnaire.tier} screening</p>
        <h1>{questionnaire.title}</h1>
        <p>{questionnaire.description}</p>
      </section>
      <QuestionnaireForm questionnaire={questionnaire} />
      <SiteFooter />
    </main>
  );
}
