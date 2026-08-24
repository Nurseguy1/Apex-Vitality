const safeHttpsUrl = (value: string | undefined) => {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
};

const checkoutKeys: Record<string, string | undefined> = {
  "Establish Care|initial": process.env.NEXT_PUBLIC_STRIPE_INITIAL_VISIT_CHECKOUT_URL,
  "Sermorelin|initial": process.env.NEXT_PUBLIC_STRIPE_INITIAL_VISIT_CHECKOUT_URL,
  "NAD+|initial": process.env.NEXT_PUBLIC_STRIPE_INITIAL_VISIT_CHECKOUT_URL,
  "Glutathione|initial": process.env.NEXT_PUBLIC_STRIPE_INITIAL_VISIT_CHECKOUT_URL,
  "Medical Weight Loss|initial": process.env.NEXT_PUBLIC_STRIPE_INITIAL_VISIT_CHECKOUT_URL,
  "Men's Health|initial": process.env.NEXT_PUBLIC_STRIPE_INITIAL_VISIT_CHECKOUT_URL,
  "Metabolic & Gut Health|initial": process.env.NEXT_PUBLIC_STRIPE_INITIAL_VISIT_CHECKOUT_URL,
  "Special Needs Nutrition|initial": process.env.NEXT_PUBLIC_STRIPE_INITIAL_VISIT_CHECKOUT_URL,
  "3-Month Special Needs Nutrition Program|program": process.env.NEXT_PUBLIC_STRIPE_SPECIAL_NEEDS_PROGRAM_CHECKOUT_URL ?? "https://buy.stripe.com/cNi6oIdkr0TC84Tf48fnO0k",
  "Focused Care Membership|ongoing": process.env.NEXT_PUBLIC_STRIPE_FOCUSED_MEMBERSHIP_CHECKOUT_URL,
  "Apex Treatment Membership|ongoing": process.env.NEXT_PUBLIC_STRIPE_TREATMENT_MEMBERSHIP_CHECKOUT_URL,
  "Apex Performance Membership|ongoing": process.env.NEXT_PUBLIC_STRIPE_PERFORMANCE_MEMBERSHIP_CHECKOUT_URL,
  "Apex Private Client Care|ongoing": process.env.NEXT_PUBLIC_STRIPE_PRIVATE_CLIENT_CHECKOUT_URL,
};

export function getProductCheckout(treatment: string, plan: string) {
  return safeHttpsUrl(checkoutKeys[`${treatment}|${plan}`]);
}
