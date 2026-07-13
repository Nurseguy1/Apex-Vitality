export type Question = {
  id: string;
  label: string;
  type: "yesno" | "scale" | "text" | "number" | "choice" | "multi";
  required?: boolean;
  options?: string[];
  help?: string;
};

export type Questionnaire = {
  slug: string;
  shortTitle: string;
  title: string;
  tier: string;
  description: string;
  accent: string;
  sections: { title: string; note?: string; questions: Question[] }[];
};

const yesNo = ["Yes", "No", "Not sure"];

export const questionnaires: Questionnaire[] = [
  {
    slug: "mens-vitality",
    shortTitle: "Men’s Vitality",
    title: "Men’s Vitality & Endocrine Screening",
    tier: "Tier 2 and Tier 3",
    description: "An ADAM-informed symptom and safety screening to help the clinical team understand vitality, hormonal-health concerns, fertility goals, and baseline risk factors.",
    accent: "teal",
    sections: [
      {
        title: "About you",
        questions: [
          { id: "mens_age", label: "What is your age?", type: "number", required: true },
          { id: "mens_goals", label: "What are your main concerns or goals for this visit?", type: "text", required: true },
          { id: "mens_conditions", label: "List current medical conditions, prior surgeries, and major hospitalizations.", type: "text" },
          { id: "mens_meds", label: "List all prescription medications, over-the-counter products, hormones, and supplements you currently use.", type: "text", required: true },
          { id: "mens_allergies", label: "List medication allergies or serious medication reactions.", type: "text", required: true },
        ],
      },
      {
        title: "Symptoms and performance",
        note: "These questions cover common symptom domains used in androgen-deficiency screening. Symptoms alone do not diagnose low testosterone.",
        questions: [
          { id: "mens_energy", label: "Rate your usual daytime energy, where 1 is extremely low and 10 is excellent.", type: "scale", required: true },
          { id: "mens_midday", label: "Have you noticed reduced energy or frequent midday crashes?", type: "yesno", options: yesNo, required: true },
          { id: "mens_libido", label: "Have you noticed a decrease in sexual desire?", type: "yesno", options: yesNo, required: true },
          { id: "mens_erections", label: "Have erections become less firm or more difficult to maintain?", type: "yesno", options: yesNo, required: true },
          { id: "mens_strength", label: "Have you noticed reduced strength, endurance, or muscle mass?", type: "yesno", options: yesNo, required: true },
          { id: "mens_height", label: "Have you noticed a loss of height or been diagnosed with low bone density?", type: "yesno", options: yesNo, required: true },
          { id: "mens_body", label: "Have you had an unexplained increase in abdominal fat or unwanted body-composition changes?", type: "yesno", options: yesNo, required: true },
          { id: "mens_enjoyment", label: "Have you noticed less enjoyment of life?", type: "yesno", options: yesNo, required: true },
          { id: "mens_mood", label: "Have you recently felt sad, irritable, or unusually grumpy?", type: "yesno", options: yesNo, required: true },
          { id: "mens_cognition", label: "Are brain fog, memory lapses, or reduced mental sharpness affecting you?", type: "yesno", options: yesNo, required: true },
          { id: "mens_sleepy", label: "Do you often fall asleep shortly after dinner or unintentionally doze during the day?", type: "yesno", options: yesNo, required: true },
          { id: "mens_work", label: "Has your work or daily performance recently declined?", type: "yesno", options: yesNo, required: true },
          { id: "mens_sleep", label: "Rate your sleep quality, where 1 is very poor and 10 is excellent.", type: "scale", required: true },
          { id: "mens_recovery", label: "Rate your recovery after exercise, where 1 is very poor and 10 is excellent.", type: "scale", required: true },
        ],
      },
      {
        title: "Required safety review",
        note: "A “Yes” or “Not sure” answer does not make a decision by itself. It tells the medical team what needs careful review.",
        questions: [
          { id: "mens_cancer", label: "Do you have a personal history of prostate cancer or breast cancer, or are you currently being evaluated or treated for either?", type: "yesno", options: yesNo, required: true },
          { id: "mens_prostate", label: "Have you had an abnormal PSA, prostate biopsy, prostate nodule, or severe urinary symptoms?", type: "yesno", options: yesNo, required: true },
          { id: "mens_clots", label: "Have you or an immediate family member had a blood clot, DVT, pulmonary embolism, stroke related to clotting, or diagnosed clotting disorder?", type: "yesno", options: yesNo, required: true },
          { id: "mens_blood", label: "Have you been told that your hematocrit or red blood cell count is high?", type: "yesno", options: yesNo, required: true },
          { id: "mens_apnea", label: "Do you have untreated or poorly controlled severe sleep apnea?", type: "yesno", options: yesNo, required: true },
          { id: "mens_heart", label: "Do you have uncontrolled heart failure, a recent heart attack or stroke, chest pain, or serious cardiovascular symptoms?", type: "yesno", options: yesNo, required: true },
          { id: "mens_fertility", label: "Are you trying to conceive now or planning biological children in the near future?", type: "yesno", options: yesNo, required: true },
          { id: "mens_labs", label: "Have you had testosterone, CBC/hematocrit, PSA, thyroid, metabolic, or fertility testing in the past 12 months? If yes, describe when and where.", type: "text" },
        ],
      },
    ],
  },
  {
    slug: "metabolic-weight",
    shortTitle: "Metabolic & Weight",
    title: "Metabolic & Weight Management Screening",
    tier: "Tier 1 and Tier 3",
    description: "A medical and weight-history screening that helps the clinical team identify goals, prior efforts, metabolic risk factors, and issues requiring additional review.",
    accent: "copper",
    sections: [
      {
        title: "Weight and health history",
        questions: [
          { id: "met_age", label: "What is your age?", type: "number", required: true },
          { id: "met_height", label: "What is your height? Include feet/inches or centimeters.", type: "text", required: true },
          { id: "met_weight", label: "What is your current weight? Include pounds or kilograms.", type: "text", required: true },
          { id: "met_goal", label: "What are your primary health and weight-management goals?", type: "text", required: true },
          { id: "met_attempts", label: "Which diets, programs, medications, or structured approaches have you tried in the past 24 months, and what happened?", type: "text", required: true },
          { id: "met_change", label: "Has your weight changed unexpectedly in the past 6 months? If yes, describe.", type: "text" },
          { id: "met_conditions", label: "Select every condition you have been diagnosed with.", type: "multi", options: ["High blood pressure", "High cholesterol or triglycerides", "Prediabetes", "Type 1 diabetes", "Type 2 diabetes", "Fatty liver disease", "Polycystic ovary syndrome", "Sleep apnea", "Kidney disease", "None of these", "Not sure"] },
          { id: "met_meds", label: "List all prescription medications, over-the-counter products, weight-loss treatments, and supplements you currently use.", type: "text", required: true },
          { id: "met_allergies", label: "List medication allergies or serious medication reactions.", type: "text", required: true },
          { id: "met_pregnancy", label: "Are you pregnant, breastfeeding, trying to become pregnant, or planning pregnancy soon?", type: "yesno", options: yesNo, required: true },
          { id: "met_eating", label: "Do you have a current or past eating disorder, or significant concerns about restrictive eating, bingeing, or purging?", type: "yesno", options: yesNo, required: true },
        ],
      },
      {
        title: "Required medication-safety review",
        note: "These questions do not establish eligibility. The prescribing clinician reviews the complete history, examination, labs, current labeling, and individual risks.",
        questions: [
          { id: "met_mtc", label: "Have you or an immediate family member had medullary thyroid carcinoma (MTC), or have you been diagnosed with MEN 2?", type: "yesno", options: yesNo, required: true },
          { id: "met_allergy", label: "Have you had a serious allergic reaction to a GLP-1 or related weight-management medication?", type: "yesno", options: yesNo, required: true },
          { id: "met_pancreatitis", label: "Have you ever been diagnosed with or hospitalized for pancreatitis?", type: "yesno", options: yesNo, required: true },
          { id: "met_gallbladder", label: "Do you have active gallbladder disease, gallstones, or a history of gallbladder complications?", type: "yesno", options: yesNo, required: true },
          { id: "met_gi", label: "Have you been diagnosed with gastroparesis, severe delayed stomach emptying, bowel obstruction, or another severe gastrointestinal disorder?", type: "yesno", options: yesNo, required: true },
          { id: "met_hypo", label: "Do you experience frequent or severe low blood sugar, especially while using insulin or a sulfonylurea?", type: "yesno", options: yesNo, required: true },
          { id: "met_kidney", label: "Do you have kidney disease, frequent dehydration, or recent severe vomiting or diarrhea?", type: "yesno", options: yesNo, required: true },
          { id: "met_eye", label: "If you have diabetes, have you been diagnosed with diabetic retinopathy or had recent vision changes?", type: "yesno", options: yesNo, required: true },
          { id: "met_mood", label: "Are you experiencing current suicidal thoughts, a recent suicide attempt, or severe uncontrolled depression?", type: "yesno", options: yesNo, required: true, help: "If you may act on thoughts of self-harm, call or text 988 in the U.S. now, or use local emergency services." },
          { id: "met_labs", label: "List any recent A1C, glucose, kidney, liver, thyroid, lipid, or other relevant lab results and dates.", type: "text" },
        ],
      },
    ],
  },
  {
    slug: "gut-cellular",
    shortTitle: "Gut & Cellular Health",
    title: "Functional Gut & Cellular Health Intake",
    tier: "Tier 1 and Tier 3",
    description: "A digestive, lifestyle, recovery, and health-history intake to help organize symptoms and priorities before a clinician determines appropriate evaluation or care.",
    accent: "blue",
    sections: [
      {
        title: "Digestive symptom review",
        questions: [
          { id: "gut_symptoms", label: "Select every symptom you experienced during the past 30 days.", type: "multi", required: true, options: ["Bloating immediately after meals", "Bloating 2–3 hours after meals", "Acid reflux or heartburn", "Fewer than one bowel movement per day", "Chronic diarrhea or loose stools", "Abdominal pain or cramping", "Nausea or vomiting", "Blood in stool or black/tarry stool", "Unexplained appetite loss", "None of these"] },
          { id: "gut_frequency", label: "On average, how many bowel movements do you have per day or week?", type: "text", required: true },
          { id: "gut_bristol", label: "Which Bristol stool type is most common for you?", type: "choice", required: true, options: ["Type 1 — separate hard lumps", "Type 2 — hard and lumpy, sausage-shaped", "Type 3 — sausage-shaped with surface cracks", "Type 4 — smooth, soft, and formed", "Type 5 — soft blobs with clear edges", "Type 6 — fluffy or mushy pieces", "Type 7 — watery with no solid pieces", "Varies too much to choose", "Not sure"] },
          { id: "gut_start", label: "When did these symptoms begin, how often do they occur, and what makes them better or worse?", type: "text", required: true },
          { id: "gut_redflags", label: "Have you had unexplained weight loss, persistent fever, repeated vomiting, trouble swallowing, black stools, visible blood in stool, anemia, or severe/worsening abdominal pain?", type: "yesno", options: yesNo, required: true },
          { id: "gut_diagnoses", label: "List diagnosed digestive conditions, food allergies, prior abdominal surgeries, endoscopy/colonoscopy findings, or relevant family history.", type: "text" },
          { id: "gut_antibiotics", label: "How many courses of oral antibiotics have you taken in the past 3 years?", type: "choice", required: true, options: ["None", "1", "2", "3–4", "5 or more", "Not sure"] },
          { id: "gut_diet", label: "Describe a typical day of eating, fluid intake, alcohol use, and known food triggers or restrictions.", type: "text", required: true },
          { id: "gut_meds", label: "List all prescription medications, over-the-counter products, digestive products, and supplements you currently use.", type: "text", required: true },
          { id: "gut_allergies", label: "List medication and food allergies or serious reactions.", type: "text", required: true },
        ],
      },
      {
        title: "Cellular health and recovery priorities",
        questions: [
          { id: "cell_pain", label: "Are you seeking care for chronic joint pain, soft-tissue injury, tendon or ligament concerns, or systemic inflammation? Describe the location, duration, severity, and prior evaluation.", type: "text", required: true },
          { id: "cell_recovery", label: "Rate your overall recovery after physical exertion, where 1 is very poor and 10 is excellent.", type: "scale", required: true },
          { id: "cell_sleep", label: "Rate your sleep quality, where 1 is very poor and 10 is excellent.", type: "scale", required: true },
          { id: "cell_goal", label: "Which outcome matters most to you?", type: "choice", required: true, options: ["Recovery and rehabilitation", "Healthy aging and longevity", "Metabolic health", "Immune-health discussion", "Cognitive performance", "Energy and resilience", "Other"] },
          { id: "cell_goal_detail", label: "Describe what meaningful progress would look like for you over the next 3–6 months.", type: "text", required: true },
          { id: "cell_conditions", label: "List chronic conditions, autoimmune disorders, cancer history, immune suppression, bleeding disorders, or significant heart, liver, or kidney disease.", type: "text", required: true },
          { id: "cell_pregnancy", label: "Are you pregnant, breastfeeding, trying to become pregnant, or planning pregnancy soon?", type: "yesno", options: yesNo, required: true },
          { id: "cell_therapy", label: "Have you previously used peptides, hormone therapy, injectable wellness products, or regenerative procedures? If yes, describe the product, source, dates, response, and adverse effects.", type: "text" },
          { id: "cell_labs", label: "List recent labs, imaging, diagnoses, or specialist evaluations relevant to your goals.", type: "text" },
        ],
      },
    ],
  },
];

export function getQuestionnaire(slug: string) {
  return questionnaires.find((questionnaire) => questionnaire.slug === slug);
}
