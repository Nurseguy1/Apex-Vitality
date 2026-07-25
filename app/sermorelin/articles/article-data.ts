export type SermorelinArticle = {
  slug: string;
  title: string;
  description: string;
  audience: string;
  readTime: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[]; points?: string[] }>;
};

export const sermorelinArticles: SermorelinArticle[] = [
  {
    slug: "sermorelin-sleep-recovery",
    title: "Build Better Sleep and Recovery with Sermorelin Care",
    description: "Connect sleep quality, overnight recovery, and daily performance through a clinician-guided sermorelin plan.",
    audience: "Adults ready for deeper recovery",
    readTime: "4 min read",
    intro: "Restorative sleep drives physical repair, cognitive performance, metabolic health, and the energy you bring into each day. Sermorelin supports the body’s own growth-hormone signaling, creating a focused pathway for adults who want to strengthen sleep and recovery.",
    sections: [
      {
        heading: "Recovery starts while you sleep",
        paragraphs: [
          "The body releases most growth hormone in pulses during deep sleep. That rhythm connects sleep with tissue repair, body composition, exercise recovery, and metabolic function.",
          "Sermorelin stimulates the pituitary pathway that produces growth hormone. Your clinician builds treatment around your sleep pattern, health history, medications, goals, and progress.",
        ],
      },
      {
        heading: "Build the plan around your real routine",
        paragraphs: ["Your review connects sermorelin with the factors that shape nightly recovery and daytime performance."],
        points: ["Sleep duration and quality", "Training and recovery demands", "Stress and evening routines", "Metabolic and hormonal health", "Follow-up markers and progress goals"],
      },
      {
        heading: "Start with focused care",
        paragraphs: ["Complete the secure intake, receive a personal clinician review, and begin a treatment plan with organized pharmacy coordination and follow-up."],
      },
    ],
  },
  {
    slug: "sermorelin-active-adults",
    title: "Sermorelin for Active Adults: Recovery, Strength, and Performance",
    description: "Build sermorelin into a broader strategy for training recovery, strength, sleep, and body composition.",
    audience: "Active adults & fitness-minded people",
    readTime: "4 min read",
    intro: "Training results depend on what happens between workouts. Sermorelin supports natural growth-hormone signaling and adds a clinician-guided tool to a performance plan built around recovery, strength, sleep, and body composition.",
    sections: [
      {
        heading: "Turn recovery into a performance advantage",
        paragraphs: [
          "Consistent progress requires training stimulus, adequate nutrition, restorative sleep, and enough recovery to adapt. Sermorelin belongs inside that complete system.",
          "Your clinician connects the treatment with your training schedule, current recovery, medical history, and the results you want to track.",
        ],
      },
      {
        heading: "What your performance review covers",
        paragraphs: ["Bring the details that show how your body responds to training."],
        points: ["Strength, endurance, and training frequency", "Recovery time and soreness", "Sleep quality and morning energy", "Nutrition and body-composition goals", "Medications, supplements, and relevant labs"],
      },
      {
        heading: "Choose focused or comprehensive care",
        paragraphs: ["Start directly with sermorelin care or choose the comprehensive consultation to connect performance with hormones, metabolism, nutrition, and longevity."],
      },
    ],
  },
  {
    slug: "sermorelin-healthy-aging",
    title: "Sermorelin and Healthy Aging: Support Strength and Resilience",
    description: "Understand how growth-hormone signaling connects with sleep, recovery, body composition, and healthy-aging goals.",
    audience: "Adults focused on longevity",
    readTime: "5 min read",
    intro: "Growth-hormone output changes with age, affecting a system connected with sleep, recovery, lean tissue, and metabolism. Sermorelin supports the body’s own signaling pathway and gives longevity-focused adults a personalized way to act on those goals.",
    sections: [
      {
        heading: "Healthy aging protects function",
        paragraphs: [
          "Longevity is not only about adding years. It is about maintaining strength, mobility, recovery, metabolic health, and the capacity to stay engaged in life.",
          "A sermorelin plan starts with those functional goals and connects them with your history, sleep, activity, body composition, and relevant clinical data.",
        ],
      },
      {
        heading: "Connect the systems that shape vitality",
        paragraphs: ["A whole-person review turns one treatment interest into a coordinated longevity strategy."],
        points: ["Strength, mobility, and lean body mass", "Sleep and physical recovery", "Metabolic and cardiovascular health", "Hormonal and nutritional factors", "Sustainable exercise and lifestyle strategy"],
      },
      {
        heading: "Move from information to action",
        paragraphs: ["Begin with a focused sermorelin review or choose comprehensive longevity care to build a broader plan for the way you want to feel, function, and age."],
      },
    ],
  },
  {
    slug: "sermorelin-midlife-wellness",
    title: "Sermorelin for Midlife Energy, Sleep, and Body Composition",
    description: "Connect changing sleep, recovery, strength, and body-composition goals through personalized sermorelin care.",
    audience: "Adults navigating midlife changes",
    readTime: "5 min read",
    intro: "Midlife often changes the way the body responds to sleep, stress, exercise, and nutrition. Sermorelin supports natural growth-hormone signaling and gives adults a focused option for building stronger recovery, performance, and healthy-aging habits.",
    sections: [
      {
        heading: "Address the changes you can feel",
        paragraphs: [
          "Slower recovery, lighter sleep, declining strength, and body-composition changes often overlap. Treating them as a connected picture creates a stronger plan than addressing each concern in isolation.",
          "Your clinician listens to the changes you have noticed and builds the sermorelin conversation around your health, routine, priorities, and goals.",
        ],
      },
      {
        heading: "Create a complete starting picture",
        paragraphs: ["Use your secure intake to describe what changed and what you want to regain or improve."],
        points: ["Sleep quality and morning energy", "Exercise recovery and strength", "Body composition and metabolic goals", "Hormonal health and life-stage changes", "Current medications and supplements"],
      },
      {
        heading: "Start in the lane that fits you",
        paragraphs: ["Choose focused sermorelin care for a streamlined start. Choose comprehensive care to connect sleep, hormones, metabolism, nutrition, strength, and longevity in one plan."],
      },
    ],
  },
];

export function getSermorelinArticle(slug: string) {
  return sermorelinArticles.find((article) => article.slug === slug);
}
