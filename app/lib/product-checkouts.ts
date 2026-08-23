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
};

export function getProductCheckout(treatment: string, plan: string) {
  return safeHttpsUrl(checkoutKeys[`${treatment}|${plan}`]);
}
