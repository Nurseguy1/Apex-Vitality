import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CareNotice, SiteFooter, SiteHeader } from "../../../components";
import { charmLinks } from "../../../lib/charm";
import { JsonLd } from "../../../seo";
import { getNadArticle, nadArticles } from "../article-data";

const siteUrl = "https://create-a-coral.vercel.app";

export function generateStaticParams() {
  return nadArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNadArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Apex Vitality`,
    description: article.description,
    alternates: { canonical: `/nad-plus/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `${siteUrl}/nad-plus/articles/${article.slug}`,
    },
  };
}

export default async function NadArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNadArticle(slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.description,
    audience: article.audience,
    author: {
      "@type": "Organization",
      name: "Apex Vitality Clinical Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Apex Vitality",
    },
    mainEntityOfPage: `${siteUrl}/nad-plus/articles/${article.slug}`,
    about: {
      "@type": "MedicalTherapy",
      name: "NAD+ care",
    },
  };

  return (
    <main>
      <JsonLd data={articleSchema} />
      <SiteHeader />
      <article className="nad-article">
        <header className="nad-article-header">
          <Link href="/nad-plus#nad-learning-center">← NAD+ Learning Center</Link>
          <p className="eyebrow">{article.audience} · {article.readTime}</p>
          <h1>{article.title}</h1>
          <p>{article.intro}</p>
        </header>

        <div className="nad-article-body">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && (
                <ul>
                  {section.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="nad-article-cta">
          <p className="eyebrow">Do something for your future self</p>
          <h2>Your energy and longevity goals are within reach. Start today.</h2>
          <p>
            Start with a secure focused NAD+ review or choose a comprehensive
            visit to connect your energy, recovery, metabolism, hormones,
            nutrition, and longevity goals.
          </p>
          <div className="hero-actions">
            {charmLinks.portal && (
              <a className="primary-button" href={charmLinks.portal} rel="noreferrer" target="_blank">
                Start my NAD+ plan ↗
              </a>
            )}
            <Link className="secondary-button" href="/schedule">
              Choose comprehensive care
            </Link>
          </div>
        </section>
      </article>
      <CareNotice />
      <SiteFooter />
    </main>
  );
}
