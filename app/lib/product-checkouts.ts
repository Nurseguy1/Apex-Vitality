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
  "Sermorelin|1-month": process.env.NEXT_PUBLIC_STRIPE_SERMORELIN_1_MONTH_URL,
  "Sermorelin|3-month": process.env.NEXT_PUBLIC_STRIPE_SERMORELIN_3_MONTH_URL,
  "NAD+|1-month": process.env.NEXT_PUBLIC_STRIPE_NAD_1_MONTH_URL,
  "NAD+|3-month": process.env.NEXT_PUBLIC_STRIPE_NAD_3_MONTH_URL,
  "CJC-1295 / Ipamorelin|1-month": process.env.NEXT_PUBLIC_STRIPE_CJC_IPAMORELIN_1_MONTH_URL,
  "CJC-1295 / Ipamorelin|3-month": process.env.NEXT_PUBLIC_STRIPE_CJC_IPAMORELIN_3_MONTH_URL,
  "Glutathione|1-month": process.env.NEXT_PUBLIC_STRIPE_GLUTATHIONE_1_MONTH_URL,
  "Glutathione|3-month": process.env.NEXT_PUBLIC_STRIPE_GLUTATHIONE_3_MONTH_URL,
};

export function getProductCheckout(treatment: string, plan: string) {
  return safeHttpsUrl(checkoutKeys[`${treatment}|${plan}`]);
}
