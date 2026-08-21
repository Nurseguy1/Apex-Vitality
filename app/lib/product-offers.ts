export type ProductOffer = {
  treatment: string;
  plan: "1-month" | "3-month";
  planLabel: string;
  price: string;
  billingLabel: string;
  included: string[];
};

const sharedIncluded = [
  "Licensed-clinician review of your submitted health information",
  "Prescription and pharmacy coordination when treatment is authorized",
  "The selected medication supply when prescribed",
  "Standard supplies and direct shipping when listed for the prescribed formulation",
  "Secure follow-up instructions and access to clinical support",
];

const offers: Record<string, ProductOffer> = {
  "Sermorelin|1-month": {
    treatment: "Sermorelin",
    plan: "1-month",
    planLabel: "One-month care package",
    price: "$179",
    billingLabel: "One-time payment — no automatic renewal",
    included: sharedIncluded,
  },
  "Sermorelin|3-month": {
    treatment: "Sermorelin",
    plan: "3-month",
    planLabel: "Three-month care package",
    price: "$447",
    billingLabel: "One-time payment — no automatic renewal",
    included: sharedIncluded,
  },
  "NAD+|1-month": {
    treatment: "NAD+",
    plan: "1-month",
    planLabel: "One-month care package",
    price: "$149",
    billingLabel: "One-time payment — no automatic renewal",
    included: sharedIncluded,
  },
  "NAD+|3-month": {
    treatment: "NAD+",
    plan: "3-month",
    planLabel: "Three-month care package",
    price: "$357",
    billingLabel: "One-time payment — no automatic renewal",
    included: sharedIncluded,
  },
  "Glutathione|1-month": {
    treatment: "Glutathione",
    plan: "1-month",
    planLabel: "One-month care package",
    price: "$149",
    billingLabel: "One-time payment — no automatic renewal",
    included: sharedIncluded,
  },
  "Glutathione|3-month": {
    treatment: "Glutathione",
    plan: "3-month",
    planLabel: "Three-month care package",
    price: "$357",
    billingLabel: "One-time payment — no automatic renewal",
    included: sharedIncluded,
  },
};

export function getProductOffer(treatment: string, plan: string) {
  return offers[`${treatment}|${plan}`] ?? null;
}
