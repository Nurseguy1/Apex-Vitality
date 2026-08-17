import type { MetadataRoute } from "next";

const siteUrl = "https://goapexvitality.com";

const routes = [
  "",
  "/peptides",
  "/treatments",
  "/functional-health",
  "/longevity",
  "/gut-health",
  "/weight-loss",
  "/mens-health",
  "/womens-health",
  "/nad-plus",
  "/nad-plus/articles/nad-energy-focus-busy-adults",
  "/nad-plus/articles/nad-recovery-active-adults",
  "/nad-plus/articles/nad-healthy-aging",
  "/nad-plus/articles/nad-women-35-55",
  "/sermorelin",
  "/sermorelin/articles/sermorelin-sleep-recovery",
  "/sermorelin/articles/sermorelin-active-adults",
  "/sermorelin/articles/sermorelin-healthy-aging",
  "/sermorelin/articles/sermorelin-midlife-wellness",
  "/memberships",
  "/how-it-works",
  "/faq",
  "/contact",
  "/providers",
  "/care-standards",
  "/service-areas",
  "/schedule",
  "/privacy",
  "/california-privacy",
  "/notice-of-privacy-practices",
  "/telehealth-consent",
  "/treatment-consents",
  "/treatment-consents/peptide-therapy",
  "/treatment-consents/nad-plus",
  "/treatment-consents/medical-weight-management",
  "/treatment-consents/hormone-therapy",
  "/agreements/self-pay",
  "/agreements/recurring-payments",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-16T00:00:00-07:00");

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" || route === "/terms" ? 0.2 : 0.7,
  }));
}
