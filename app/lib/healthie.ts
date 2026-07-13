function safeHealthieUrl(value: string | undefined) {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export const healthieLinks = {
  portal: safeHealthieUrl(
    process.env.NEXT_PUBLIC_HEALTHIE_PORTAL_URL ??
      "https://secure.gethealthie.com/go/apexvitality",
  ),
  booking: safeHealthieUrl(
    process.env.NEXT_PUBLIC_HEALTHIE_BOOKING_URL ??
      "https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=16449943&provider_ids=%5B16449943%5D&appt_type_ids=%5B535505,535506,535507%5D&primary_color=4A9625",
  ),
  intake: safeHealthieUrl(process.env.NEXT_PUBLIC_HEALTHIE_INTAKE_URL),
};

export const healthieReady = Boolean(
  healthieLinks.portal && healthieLinks.booking && healthieLinks.intake,
);
