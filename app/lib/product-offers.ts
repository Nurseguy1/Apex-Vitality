export type ProductOffer = {
  treatment: string;
  plan: "initial" | "ongoing" | "program";
  planLabel: string;
  price: string;
  billingLabel: string;
  included: string[];
  requiresRenewalConsent?: boolean;
};

const sharedIncluded = [
  "Licensed-clinician review of your submitted health information and goals",
  "A scheduled clinical conversation when more information is needed",
  "A personalized clinical plan when appropriate",
];

const offers: Record<string, ProductOffer> = {
  "Establish Care|initial": {
    treatment: "Establish Care",
    plan: "initial",
    planLabel: "Initial establish-care payment",
    price: "$39",
    billingLabel: "One-time initial-care payment · choose membership afterward",
    included: [
      "Initial review of your health history, goals, and priorities",
      "Guidance on the care pathway and membership level that may fit",
      "A 15-minute Focused Care appointment or 45-minute higher-tier appointment after enrollment",
    ],
  },
  "Sermorelin|initial": {
    treatment: "Sermorelin",
    plan: "initial",
    planLabel: "Initial clinical-care payment",
    price: "$39",
    billingLabel: "One-time initial-care payment · Focused Care is the recommended next step",
    included: sharedIncluded,
  },
  "NAD+|initial": {
    treatment: "NAD+",
    plan: "initial",
    planLabel: "Initial clinical-care payment",
    price: "$39",
    billingLabel: "One-time initial-care payment · Focused Care is the recommended next step",
    included: sharedIncluded,
  },
  "Glutathione|initial": {
    treatment: "Glutathione",
    plan: "initial",
    planLabel: "Initial clinical-care payment",
    price: "$39",
    billingLabel: "One-time initial-care payment · membership selected afterward",
    included: sharedIncluded,
  },
  "Medical Weight Loss|initial": {
    treatment: "Medical Weight Loss",
    plan: "initial",
    planLabel: "Initial clinical-care payment",
    price: "$39",
    billingLabel: "One-time initial-care payment · membership selected afterward",
    included: sharedIncluded,
  },
  "Men's Health|initial": {
    treatment: "Men's Health",
    plan: "initial",
    planLabel: "Initial clinical-care payment",
    price: "$39",
    billingLabel: "One-time initial-care payment · membership selected afterward",
    included: sharedIncluded,
  },
  "Metabolic & Gut Health|initial": {
    treatment: "Metabolic & Gut Health",
    plan: "initial",
    planLabel: "Initial clinical-care payment",
    price: "$39",
    billingLabel: "One-time initial-care payment · membership selected afterward",
    included: [
      "Licensed-clinician review of your digestive, metabolic, nutrition, and weight-related goals",
      "Laboratory planning and review when clinically appropriate",
      "A personalized clinical, nutrition, lifestyle, and supplement plan when appropriate",
    ],
  },
  "Special Needs Nutrition|initial": {
    treatment: "Special Needs Nutrition",
    plan: "initial",
    planLabel: "Initial clinical-care payment",
    price: "$39",
    billingLabel: "One-time initial-care payment · fixed three-month program selected afterward",
    included: [
      "Caregiver-guided clinician review of nutrition, digestive wellness, routines, and goals",
      "A practical personalized nutrition and supplement plan when appropriate",
      "A clear recommendation about whether the three-month program is an appropriate next step",
    ],
  },
  "3-Month Special Needs Nutrition Program|program": {
    treatment: "3-Month Special Needs Nutrition Program",
    plan: "program",
    planLabel: "Fixed three-month nutrition program",
    price: "$597",
    billingLabel: "One-time program payment · $199/month equivalent · no automatic renewal",
    included: [
      "Month 1: one 45-minute initial visit and a personalized written nutrition and supplement plan",
      "Month 2: one 30-minute follow-up visit with plan adjustments",
      "Month 3: one 30-minute follow-up visit with a final plan update",
    ],
  },
  "Focused Care Membership|ongoing": {
    treatment: "Focused Care Membership",
    plan: "ongoing",
    planLabel: "Focused ongoing care",
    price: "$149/month",
    billingLabel: "Monthly membership — renews until canceled",
    included: [
      "An included 15-minute initial appointment",
      "Scheduled clinician follow-up for one focused treatment pathway",
      "Prescription and refill management when clinically appropriate",
      "Focused progress monitoring during scheduled visits",
    ],
    requiresRenewalConsent: true,
  },
  "Apex Treatment Membership|ongoing": {
    treatment: "Apex Treatment Membership",
    plan: "ongoing",
    planLabel: "Connected treatment care",
    price: "$499/month",
    billingLabel: "Monthly membership — renews until canceled",
    included: [
      "An included 45-minute comprehensive initial appointment after enrollment",
      "Longer reviews and coordination across multiple treatment goals",
      "More frequent treatment-response review during scheduled visits",
    ],
    requiresRenewalConsent: true,
  },
  "Apex Performance Membership|ongoing": {
    treatment: "Apex Performance Membership",
    plan: "ongoing",
    planLabel: "Performance and prevention care",
    price: "$749/month",
    billingLabel: "Monthly membership — renews until canceled",
    included: [
      "An included 45-minute comprehensive initial appointment after enrollment",
      "Monthly progress reviews, priority scheduling, and extended appointments",
      "Lifestyle, nutrition, prevention, and performance planning",
    ],
    requiresRenewalConsent: true,
  },
  "Apex Private Client Care|ongoing": {
    treatment: "Apex Private Client Care",
    plan: "ongoing",
    planLabel: "Concierge-level care",
    price: "$1,250/month",
    billingLabel: "Monthly membership — renews until canceled",
    included: [
      "An included 45-minute comprehensive initial appointment after enrollment",
      "Frequent scheduled strategy visits and proactive care coordination",
      "Proactive laboratory, pharmacy, and care coordination",
    ],
    requiresRenewalConsent: true,
  },
};

export function getProductOffer(treatment: string, plan: string) {
  return offers[`${treatment}|${plan}`] ?? null;
}
