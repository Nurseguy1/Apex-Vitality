export const annualMemberships = {
  treatment: { name: "Apex Treatment Membership", product: "prod_V82I9iePGlOCrp", amount: 499000, display: "$4,990", monthly: "$499", includes: "A 45-minute comprehensive initial appointment, ongoing reviews, and individualized planning." },
  performance: { name: "Apex Performance Membership", product: "prod_V82J8avjzYvfh0", amount: 749000, display: "$7,490", monthly: "$749", includes: "Everything in Apex Treatment, monthly progress reviews, extended appointments, lifestyle guidance, and priority scheduling subject to availability." },
  private: { name: "Apex Private Client Care", product: "prod_V82K5vaftZjeXn", amount: 1250000, display: "$12,500", monthly: "$1,250", includes: "Everything in Apex Performance, frequent scheduled planning visits, personal coordination, and an individualized care cadence." },
} as const;
export type AnnualTier = keyof typeof annualMemberships;
export function annualTier(value: unknown): AnnualTier | null {
  return typeof value === "string" && Object.hasOwn(annualMemberships, value) ? value as AnnualTier : null;
}
