export type ProductOffer = {
  treatment: string;
  plan: "initial";
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
    billingLabel: "One-time payment — no automatic renewal",
    included: sharedIncluded,
  },
  "NAD+|initial": {
    treatment: "NAD+",
    plan: "initial",
    planLabel: "Questionnaire and clinician review",
    price: "$39",
    billingLabel: "One-time payment — no automatic renewal",
    included: sharedIncluded,
  },
  "Glutathione|initial": {
    treatment: "Glutathione",
    plan: "initial",
    planLabel: "Questionnaire and clinician review",
    price: "$39",
    billingLabel: "One-time payment — no automatic renewal",
    included: sharedIncluded,
  },
};

export function getProductOffer(treatment: string, plan: string) {
  return offers[`${treatment}|${plan}`] ?? null;
}
