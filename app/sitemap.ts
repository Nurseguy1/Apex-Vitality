import type { MetadataRoute } from "next";

const siteUrl = "https://create-a-coral.vercel.app";

const routes = [
  "",
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
  "/peptide-care",
  "/memberships",
  "/how-it-works",
  "/faq",
  "/contact",
  "/schedule",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-24T00:00:00-07:00");

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" || route === "/terms" ? 0.2 : 0.7,
  }));
}
