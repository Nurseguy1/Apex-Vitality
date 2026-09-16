export type TreatmentConsent = {
  slug: string;
  title: string;
  summary: string;
  purpose: string;
  limitations: string[];
  risks: string[];
  monitoring: string[];
  alternatives: string[];
};

export const treatmentConsents: TreatmentConsent[] = [
  {
    slug: "peptide-therapy",
    title: "Peptide Therapy Information and Consent",
    summary: "Information patients review before beginning a clinician-authorized compounded peptide plan.",
    purpose: "A clinician may consider peptide therapy after reviewing your goals, history, current medications, examination needs, and available clinical information. Selecting or purchasing a peptide program does not mean that treatment is appropriate or will be prescribed.",
    limitations: [
      "Many compounded peptide products are not FDA-approved for the promoted wellness use, and FDA has not reviewed the compounded product for safety, effectiveness, or quality before marketing.",
      "Evidence, availability, formulation, concentration, beyond-use date, and clinical appropriateness vary by product and patient.",
      "Treatment is not a substitute for nutrition, exercise, sleep, indicated diagnostic evaluation, or urgent and in-person care.",
    ],
    risks: [
      "Injection-site pain, redness, swelling, bruising, infection, dosing error, or allergic reaction when an injectable product is used.",
      "Headache, dizziness, nausea, fatigue, flushing, fluid retention, changes in appetite, sleep, blood sugar, blood pressure, or other product-specific effects.",
      "Unknown or incompletely characterized short- and long-term risks, drug interactions, and risks associated with compounded products.",
    ],
    monitoring: [
      "Use only the prescribed product, dose, route, and schedule; do not share medication or combine it with outside peptide products without disclosure.",
      "Complete laboratory testing, follow-up, and other monitoring requested by the clinician.",
      "Report pregnancy, plans for pregnancy, new diagnoses, medication changes, adverse effects, or emergency symptoms promptly.",
    ],
    alternatives: ["No treatment or watchful waiting", "Lifestyle and nutrition interventions", "FDA-approved medication when indicated", "Referral or in-person evaluation"],
  },
  {
    slug: "nad-plus",
    title: "NAD+ Therapy Information and Consent",
    summary: "Information patients review before beginning a clinician-authorized compounded NAD+ plan.",
    purpose: "NAD+ may be discussed as one component of a broader plan addressing energy, recovery, or healthy-aging goals. A clinician must determine whether the requested route and formulation are appropriate.",
    limitations: [
      "Evidence for many claimed wellness, performance, cognitive, and longevity outcomes is limited and evolving.",
      "Compounded NAD+ products are not FDA-approved and are not reviewed by FDA for safety, effectiveness, or quality before marketing.",
      "Results are not guaranteed and treatment does not replace evaluation of fatigue, cognitive symptoms, sleep problems, nutritional deficiency, or other medical causes.",
    ],
    risks: [
      "Nausea, abdominal discomfort, headache, flushing, dizziness, fatigue, chest discomfort, or other route-specific reactions.",
      "Injection or infusion risks when applicable, including pain, bruising, infection, dosing error, or allergic reaction.",
      "Unknown or incompletely characterized long-term risks and interactions.",
    ],
    monitoring: ["Follow the prescribed route and dose", "Complete requested follow-up or laboratory review", "Stop and seek appropriate care for severe or rapidly worsening symptoms"],
    alternatives: ["No treatment", "Evaluation and treatment of an identified underlying condition", "Sleep, nutrition, exercise, and recovery interventions", "Other clinician-recommended therapies"],
  },
  {
    slug: "medical-weight-management",
    title: "Medical Weight-Management Information and Consent",
    summary: "Information patients review before beginning prescription weight-management treatment.",
    purpose: "Prescription weight-management therapy may be considered as part of an individualized program that includes medical evaluation, nutrition, activity, behavior, and monitoring. Medication is prescribed only when clinically appropriate and legally available.",
    limitations: [
      "Weight response varies, continued treatment may be needed to maintain results, and weight regain may occur after discontinuation.",
      "The prescribed product may be FDA-approved or compounded. If compounded, it is not FDA-approved and FDA does not review it for safety, effectiveness, or quality before marketing.",
      "Treatment is not appropriate during pregnancy and may be unsuitable with certain endocrine, gastrointestinal, pancreatic, gallbladder, kidney, eating-disorder, or medication histories.",
    ],
    risks: [
      "Nausea, vomiting, diarrhea, constipation, abdominal pain, reflux, reduced appetite, dehydration, headache, dizziness, or fatigue.",
      "Potentially serious risks can include pancreatitis, gallbladder disease, kidney injury, severe gastrointestinal symptoms, allergic reaction, hypoglycemia with certain medications, or product-specific warnings.",
      "Loss of lean mass, nutritional inadequacy, medication interactions, or worsening of an underlying condition without appropriate monitoring.",
    ],
    monitoring: ["Use reliable contraception and notify the clinician immediately of pregnancy or plans for pregnancy", "Follow dose-escalation and nutrition guidance", "Complete follow-up, weight and symptom review, and laboratory testing when requested"],
    alternatives: ["Lifestyle intervention without medication", "Registered dietitian or behavioral support", "Other FDA-approved medication", "Bariatric-medicine or surgical referral when appropriate"],
  },
  {
    slug: "hormone-therapy",
    title: "Hormone Therapy Information and Consent",
    summary: "Information patients review before beginning clinician-authorized testosterone, estrogen, progesterone, or related hormone treatment.",
    purpose: "Hormone therapy is considered only after an appropriate clinical evaluation, symptom review, medication and fertility review, and laboratory assessment when indicated. The clinician will discuss the specific hormone, route, expected benefit, material risks, and alternatives before prescribing.",
    limitations: [
      "Hormone treatment is not guaranteed to improve energy, mood, sexual function, body composition, sleep, cognition, or performance.",
      "Some uses, doses, combinations, or compounded formulations may not be FDA-approved for the proposed indication.",
      "Hormone therapy may suppress natural hormone production and may affect fertility; it is not a substitute for evaluation of other causes of symptoms.",
    ],
    risks: [
      "Product-specific risks may include acne, hair changes, breast or uterine effects, fluid retention, mood or sleep changes, blood-pressure changes, or sexual and fertility effects.",
      "Testosterone may increase red blood cell concentration and can affect fertility, prostate-related monitoring, lipids, or sleep apnea. Estrogen- and progestogen-related risks vary by formulation, route, dose, and individual history.",
      "Blood clot, cardiovascular, liver, gallbladder, cancer-related, allergic, or other serious risks may apply depending on the prescribed hormone and patient history.",
    ],
    monitoring: ["Complete baseline and follow-up testing requested by the clinician", "Do not change dose, route, or source without clinical review", "Report fertility goals, pregnancy, bleeding, chest pain, shortness of breath, neurologic symptoms, or other urgent concerns immediately"],
    alternatives: ["No hormone treatment", "Evaluation and treatment of another identified cause", "Lifestyle, sleep, mental-health, sexual-health, or fertility-focused care", "Nonhormonal or FDA-approved alternatives when appropriate"],
  },
];

export const treatmentConsentBySlug = Object.fromEntries(treatmentConsents.map((item) => [item.slug, item]));
