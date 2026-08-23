export type ProductOffer = {
  treatment: string;
  plan: "initial" | "ongoing";
  planLabel: string;
  price: string;
  billingLabel: string;
  included: string[];
};

const sharedIncluded = [
  "Licensed-clinician review of your submitted health information and goals",
  "Secure follow-up questions or a conversation when more information is needed",
  "A personalized clinical plan when appropriate",
];

const offers: Record<string, ProductOffer> = {
  "Sermorelin|initial": {
    treatment: "Sermorelin",
    plan: "initial",
    planLabel: "Initial clinical visit",
    price: "$39",
    billingLabel: "$39 today, then $149/month after 30 days unless canceled",
    included: sharedIncluded,
  },
  "NAD+|initial": {
    treatment: "NAD+",
    plan: "initial",
    planLabel: "Questionnaire and clinician review",
    price: "$39",
    billingLabel: "$39 today, then $149/month after 30 days unless canceled",
    included: sharedIncluded,
  },
  "Glutathione|initial": {
    treatment: "Glutathione",
    plan: "initial",
    planLabel: "Questionnaire and clinician review",
    price: "$39",
    billingLabel: "$39 today, then $149/month after 30 days unless canceled",
    included: sharedIncluded,
  },
  "Medical Weight Loss|initial": {
    treatment: "Medical Weight Loss",
    plan: "initial",
    planLabel: "Initial clinical visit",
    price: "$39",
    billingLabel: "$39 today, then $149/month after 30 days unless canceled",
    included: sharedIncluded,
  },
  "Men's Health|initial": {
    treatment: "Men's Health",
    plan: "initial",
    planLabel: "Initial clinical visit",
    price: "$39",
    billingLabel: "$39 today, then $149/month after 30 days unless canceled",
    included: sharedIncluded,
  },
  "Metabolic & Gut Health|initial": {
    treatment: "Metabolic & Gut Health",
    plan: "initial",
    planLabel: "Initial clinical evaluation",
    price: "$39",
    billingLabel: "$39 today, then $149/month after 30 days unless canceled",
    included: [
      "Licensed-clinician review of your digestive, metabolic, nutrition, and weight-related goals",
      "Laboratory planning and review when clinically appropriate",
      "A personalized clinical, nutrition, lifestyle, and supplement plan when appropriate",
    ],
  },
  "Special Needs Nutrition|initial": {
    treatment: "Special Needs Nutrition",
    plan: "initial",
    planLabel: "Membership clinical review",
    price: "$39",
    billingLabel: "$39 today, then $149/month after 30 days unless canceled",
    included: [
      "Caregiver-guided clinician review of nutrition, digestive wellness, routines, and goals",
      "A practical personalized nutrition and supplement plan when appropriate",
      "Scheduled follow-up visits, ongoing plan adjustments, and secure non-urgent support",
    ],
  },
  "Focused Care Membership|ongoing": {
    treatment: "Focused Care Membership",
    plan: "ongoing",
    planLabel: "Focused ongoing care",
    price: "$149/month",
    billingLabel: "Monthly membership — renews until canceled",
    included: [
      "Scheduled clinician follow-up for one focused treatment pathway",
      "Prescription and refill management when clinically appropriate",
      "Focused progress monitoring and secure non-urgent support",
    ],
  },
};

export function getProductOffer(treatment: string, plan: string) {
  return offers[`${treatment}|${plan}`] ?? null;
}
