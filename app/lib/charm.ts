function safeHttpsUrl(value: string | undefined) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export const charmLinks = {
  portal: safeHttpsUrl(
    process.env.NEXT_PUBLIC_CHARM_PORTAL_URL ??
      "https://phr2.charmtracker.com/login.sas",
  ),
  booking: safeHttpsUrl(
    process.env.NEXT_PUBLIC_CHARM_BOOKING_URL ??
      "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=35c9756a5b86dc9f47cce5b694b4ef0616de10b798c099526e562f0cc7c6c38e2fc9c2738e1cf54df296ce50cba21ed4a0ae868b6eb0918a",
  ),
  newPatientCheckout: safeHttpsUrl(
    process.env.NEXT_PUBLIC_STRIPE_NEW_PATIENT_CHECKOUT_URL ??
      "https://buy.stripe.com/eVq9AU1BJ7i00Cr9JOfnO00",
  ),
};
