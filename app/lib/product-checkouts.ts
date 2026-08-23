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
  "Sermorelin|initial": process.env.NEXT_PUBLIC_STRIPE_PEPTIDE_INITIAL_CHECKOUT_URL,
  "NAD+|initial": process.env.NEXT_PUBLIC_STRIPE_PEPTIDE_INITIAL_CHECKOUT_URL,
  "Glutathione|initial": process.env.NEXT_PUBLIC_STRIPE_PEPTIDE_INITIAL_CHECKOUT_URL,
  "Medical Weight Loss|initial": process.env.NEXT_PUBLIC_STRIPE_PEPTIDE_INITIAL_CHECKOUT_URL,
  "Men's Health|initial": process.env.NEXT_PUBLIC_STRIPE_PEPTIDE_INITIAL_CHECKOUT_URL,
  "Focused Care Membership|ongoing": process.env.NEXT_PUBLIC_STRIPE_FOCUSED_CARE_CHECKOUT_URL,
};

export function getProductCheckout(treatment: string, plan: string) {
  return safeHttpsUrl(checkoutKeys[`${treatment}|${plan}`]);
}
