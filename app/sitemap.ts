import type { MetadataRoute } from "next";

const siteUrl = "https://goapexvitality.com";

const routes = [
  "",
  "/gut-health",
  "/mens-health",
  "/faq",
  "/contact",
  "/providers",
  "/care-standards",
  "/service-areas",
  "/privacy",
  "/california-privacy",
  "/notice-of-privacy-practices",
  "/telehealth-consent",
  "/treatment-consents/hormone-therapy",
  "/agreements/self-pay",
  "/agreements/recurring-payments",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-07T00:00:00-07:00");

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" || route === "/terms" ? 0.2 : 0.7,
  }));
}
