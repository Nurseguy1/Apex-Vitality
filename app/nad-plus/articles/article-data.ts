export type NadArticle = {
  slug: string;
  title: string;
  description: string;
  audience: string;
  readTime: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    points?: string[];
  }>;
};

export const nadArticles: NadArticle[] = [
  {
    slug: "nad-energy-focus-busy-adults",
    title: "NAD+ for Energy and Focus in a Demanding Life",
    description:
      "How busy professionals, parents, and frequent travelers can build NAD+ into a broader energy and focus plan.",
    audience: "Busy professionals, parents & travelers",
    readTime: "4 min read",
    intro:
      "A demanding schedule can make low energy and scattered focus feel normal. NAD+ is involved in the cellular reactions that turn nutrients into usable energy, which is why it has become a frequent topic in modern wellness care.",
    sections: [
      {
        heading: "Why NAD+ comes up in conversations about energy",
        paragraphs: [
          "NAD+ is a coenzyme found throughout the body. Cells use it in energy metabolism, cellular signaling, and repair processes. NAD+ care connects that cellular foundation with a simple goal: feeling more capable and consistent through a full day.",
          "That does not mean every energy problem has the same source. Sleep quality, stress, nutrition, hormones, medications, and metabolic health can all shape how you feel. A focused review helps connect the treatment conversation to your real life.",
        ],
      },
      {
        heading: "A useful whole-person conversation",
        paragraphs: [
          "Your clinician can consider NAD+ alongside the foundations that support steady energy and clearer thinking.",
        ],
        points: [
          "When your energy tends to fall during the day",
          "Sleep schedule, recovery, stress, and travel",
          "Nutrition, hydration, caffeine, and supplements",
          "Medications and health conditions that affect energy",
          "The format and follow-up plan that fit your routine",
        ],
      },
      {
        heading: "Where focused care fits",
        paragraphs: [
          "If NAD+ is your main goal, the secure focused-care pathway keeps the process simple. When fatigue or focus connects with hormonal, metabolic, nutritional, or sleep concerns, the comprehensive consultation brings those pieces into one plan.",
        ],
      },
    ],
  },
  {
    slug: "nad-recovery-active-adults",
    title: "NAD+ and Recovery for Active Adults",
    description:
      "What fitness-minded adults should know when exploring NAD+ for training, recovery, and sustained performance.",
    audience: "Active adults & fitness-minded people",
    readTime: "4 min read",
    intro:
      "Training creates an energy and recovery demand that extends beyond the workout itself. NAD+ supports the cellular energy processes behind performance and recovery, while the strongest plan starts with the person, the training load, and the goal.",
    sections: [
      {
        heading: "Performance is more than a single product",
        paragraphs: [
          "Recovery reflects the interaction of training volume, sleep, nutrition, hydration, stress, hormones, and time between sessions. Build NAD+ into that larger performance picture alongside the foundations that drive progress.",
          "The goal is not simply to add another item to a routine. Identify where your current plan works, where it falls short, and how clinician-guided NAD+ care strengthens it.",
        ],
      },
      {
        heading: "Build your clinician conversation around performance",
        paragraphs: [
          "A focused review works best when it reflects the demands you actually place on your body.",
        ],
        points: [
          "Training frequency, intensity, and type",
          "Changes in endurance, strength, or recovery",
          "Sleep quality and soreness between sessions",
          "Nutrition, protein intake, hydration, and supplements",
          "Performance goals and a practical way to monitor progress",
        ],
      },
      {
        heading: "Choose the depth that matches your goal",
        paragraphs: [
          "The focused NAD+ pathway serves adults ready to add NAD+ to their performance strategy. Comprehensive care connects performance, hormones, metabolism, body composition, sleep, and nutrition in one coordinated plan.",
        ],
      },
    ],
  },
  {
    slug: "nad-healthy-aging",
    title: "NAD+ and Healthy Aging: What to Know",
    description:
      "A clear introduction to NAD+, cellular energy, healthy aging, and the questions adults can bring to a clinician.",
    audience: "Adults focused on longevity",
    readTime: "5 min read",
    intro:
      "NAD+ is essential to cellular energy and many repair and signaling processes. NAD+ levels decline with age, placing this coenzyme at the center of longevity science and healthy-aging care.",
    sections: [
      {
        heading: "Why NAD+ matters in the body",
        paragraphs: [
          "Every cell needs energy to do its work. NAD+ helps transfer energy during metabolism and participates in pathways connected with cellular maintenance. Researchers are studying how changes in NAD+ biology relate to aging, metabolism, and resilience.",
          "The biology is compelling, while research on specific NAD+ treatments and long-term outcomes in people is still developing. That makes a personalized conversation more useful than a one-size-fits-all promise.",
        ],
      },
      {
        heading: "Healthy aging is a connected system",
        paragraphs: [
          "Longevity care works best when the full picture is visible. Your history, goals, and lifestyle are considered holistically.",
        ],
        points: [
          "Energy, strength, mobility, and recovery",
          "Metabolic and cardiovascular health",
          "Sleep, stress, mood, and cognitive goals",
          "Hormonal and nutritional factors",
          "Treatments, supplements, and sustainable daily habits",
        ],
      },
      {
        heading: "Start focused or go comprehensive",
        paragraphs: [
          "You can begin with a streamlined NAD+ review or choose a comprehensive longevity consultation to build a broader plan around the way you want to feel, function, and age.",
        ],
      },
    ],
  },
  {
    slug: "nad-women-35-55",
    title: "NAD+ for Women Ages 35–55",
    description:
      "How NAD+ fits into a whole-person plan for energy, metabolism, recovery, and changing needs in midlife.",
    audience: "Women navigating midlife changes",
    readTime: "5 min read",
    intro:
      "Between the mid-30s and mid-50s, changes in sleep, stress, hormones, body composition, and daily demands affect energy and recovery. NAD+ supports cellular energy and adds another tool to a broader midlife wellness plan.",
    sections: [
      {
        heading: "Why this life stage deserves a wider lens",
        paragraphs: [
          "Low energy, slower recovery, sleep disruption, and metabolic changes rarely exist in isolation. A useful conversation recognizes the overlap between lifestyle demands, hormonal transitions, nutrition, and cellular energy.",
          "NAD+ drives essential energy-metabolism and cellular processes. Your clinician connects NAD+ care with the rest of your health picture and the changes you want to make.",
        ],
      },
      {
        heading: "Build the conversation around your goals",
        paragraphs: [
          "You know your body and the changes you have noticed. Bring those observations into the review.",
        ],
        points: [
          "Energy patterns and mental clarity",
          "Sleep quality, stress, and recovery",
          "Menstrual or menopausal changes",
          "Metabolic health and body-composition goals",
          "Current medications, supplements, and wellness routines",
        ],
      },
      {
        heading: "Two ways to begin",
        paragraphs: [
          "Choose the focused pathway to begin NAD+ care directly. Choose comprehensive care to connect energy, hormones, metabolism, nutrition, sleep, and healthy aging in one plan.",
        ],
      },
    ],
  },
];

export function getNadArticle(slug: string) {
  return nadArticles.find((article) => article.slug === slug);
}
