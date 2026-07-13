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
  portal: safeHealthieUrl(process.env.NEXT_PUBLIC_HEALTHIE_PORTAL_URL),
  booking: safeHealthieUrl(process.env.NEXT_PUBLIC_HEALTHIE_BOOKING_URL),
  intake: safeHealthieUrl(process.env.NEXT_PUBLIC_HEALTHIE_INTAKE_URL),
};

export const healthieReady = Boolean(
  healthieLinks.portal && healthieLinks.booking && healthieLinks.intake,
);
