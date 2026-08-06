import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components";

const programs = {
  "metabolic-gut": {
    name: "Metabolic & Gut Optimization",
    eyebrow: "Program pathway 01",
    headline: "Feel lighter, stronger, and more in control.",
    intro: "A connected program for digestive wellness, metabolic health, nutrition, and sustainable weight-management goals.",
    image: "/program-metabolic-couple-v1.png",
    features: ["Initial medical evaluation", "Relevant laboratory review", "Personalized nutrition and lifestyle plan", "Digestive and metabolic goal setting", "Structured clinical follow-up", "Clear next steps that fit your life"],
  },
  "mens-vitality": {
    name: "Men's Vitality & Hormonal Optimization",
    eyebrow: "Program pathway 02",
    headline: "Build the energy, strength, and confidence to do more.",
    intro: "A focused program for energy, sexual health, strength, recovery, body composition, and hormonal evaluation when indicated.",
    image: "/membership-performance-v1.png",
    features: ["Comprehensive men's health review", "Baseline and follow-up labs when needed", "Energy, strength, and recovery goals", "Individualized clinical plan", "Secure follow-up and monitoring", "Treatment adjustments as your plan develops"],
  },
  "longevity-functional": {
    name: "Longevity & Functional Health",
    eyebrow: "Program pathway 03",
    headline: "Build health that keeps up with your ambitions.",
    intro: "A comprehensive program connecting metabolic health, digestive wellness, recovery, healthy aging, and the way you want to live.",
    image: "/program-longevity-couple-v1.png",
    features: ["Goal-directed biomarker review", "Personalized nutrition and supplement review", "Men's or women's healthy-aging support", "Recovery and performance planning", "Focused testing that informs care", "Ongoing guidance for long-term progress"],
  },
} as const;

type ProgramSlug = keyof typeof programs;

export function generateStaticParams() {
  return Object.keys(programs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs[slug as ProgramSlug];
  if (!program) return {};
  return { title: `${program.name} | Apex Vitality`, description: program.intro };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs[slug as ProgramSlug];
  if (!program) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="program-detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(7,34,42,.84) 0%, rgba(18,67,72,.58) 42%, rgba(12,52,58,.08) 73%), url('${program.image}')` }}>
        <div>
          <p className="eyebrow">{program.eyebrow}</p>
          <h1>{program.headline}</h1>
          <p>{program.intro}</p>
          <Link className="primary-button" href="/schedule">Start with a $259 visit</Link>
        </div>
      </section>
      <section className="program-detail-includes">
        <div><p className="eyebrow">Designed around your goals</p><h2>A clearer path from where you are to where you want to be.</h2></div>
        <ul>{program.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      </section>
      <section className="program-detail-cta">
        <p className="eyebrow">Your next step</p>
        <h2>Choose your goal. Begin your program.</h2>
        <p>Start online, connect with a qualified medical clinician, and put your personalized plan into motion.</p>
        <Link className="primary-button" href="/schedule">Start online today</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
