import type { MetadataRoute } from "next";

const siteUrl = "https://goapexvitality.com";

const routes = [
  "",
  "/gut-health",
  "/functional-medicine",
  "/functional-medicine/about",
  "/functional-medicine/services",
  "/functional-medicine/contact",
  "/functional-medicine/book-a-call",
  "/mens-health",
  "/memberships",
  "/faq",
  "/contact",
  "/providers",
  "/care-standards",
  "/service-areas",
  "/privacy",
  "/california-privacy",
  "/notice-of-privacy-practices",
  "/telehealth-consent",
  "/agreements/self-pay",
  "/agreements/recurring-payments",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-09T00:00:00-07:00");

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" || route === "/terms" ? 0.2 : 0.7,
  }));
}
