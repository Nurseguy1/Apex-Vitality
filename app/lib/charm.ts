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
    "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=35c9756a5b86dc9f47cce5b694b4ef065c5d870db24188dc9cc35e4fb8368a0566e98fcf386c0141f296ce50cba21ed4a0ae868b6eb0918a",
  ),
  focusedBooking: safeHttpsUrl(
    "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=35c9756a5b86dc9f47cce5b694b4ef065c5d870db24188dc9cc35e4fb8368a0566e98fcf386c0141f296ce50cba21ed4a0ae868b6eb0918a",
  ),
  comprehensiveBooking: safeHttpsUrl(
    "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=35c9756a5b86dc9f47cce5b694b4ef065c5d870db24188dc9cc35e4fb8368a0566e98fcf386c0141f296ce50cba21ed4a0ae868b6eb0918a",
  ),
  newPatientCheckout: safeHttpsUrl(
    process.env.NEXT_PUBLIC_STRIPE_NEW_PATIENT_CHECKOUT_URL ??
      "https://buy.stripe.com/eVq9AU1BJ7i00Cr9JOfnO00",
  ),
  labPlanningCheckout: safeHttpsUrl(
    process.env.NEXT_PUBLIC_STRIPE_LAB_PLANNING_CHECKOUT_URL ??
      "https://buy.stripe.com/3cI8wQa8fdGo84TaNSfnO03",
  ),
  nationalCareCheckout: safeHttpsUrl(
    process.env.NEXT_PUBLIC_NATIONAL_CARE_CHECKOUT_URL,
  ),
};
