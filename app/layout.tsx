import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "./seo";

const siteUrl = "https://create-a-coral.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apex Vitality | California Telehealth, Longevity & Functional Health",
    template: "%s",
  },
  description:
    "Personalized, clinician-led California telehealth care for longevity, functional health, healthy aging, medical weight management, men's health, women's health, and digestive wellness.",
  applicationName: "Apex Vitality",
  category: "healthcare",
  keywords: [
    "California telehealth",
    "longevity care",
    "functional health",
    "healthy aging",
    "medical weight management",
    "men's health",
    "women's health",
    "gut health",
    "concierge telehealth",
  ],
  alternates: {
    types: {
      "text/plain": `${siteUrl}/llms.txt`,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Apex Vitality | California Telehealth, Longevity & Functional Health",
    description:
      "Proactive, clinician-led care for vitality, performance, and healthy aging.",
    type: "website",
    siteName: "Apex Vitality",
    locale: "en_US",
    url: siteUrl,
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Apex Vitality personalized telehealth care" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Vitality | Longevity & Functional Health",
    description: "Proactive, clinician-led California telehealth care.",
    images: ["/og.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "Organization"],
      "@id": `${siteUrl}/#organization`,
      name: "Apex Vitality",
      legalName: "Elite Functional Health, a Professional Nursing Corporation",
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      image: `${siteUrl}/og.png`,
      description:
        "A California telehealth practice providing clinician-led longevity, functional health, healthy-aging, metabolic, men's health, women's health, and digestive-wellness care for adults.",
      medicalSpecialty: [
        "PrimaryCare",
        "DietNutrition",
      ],
      areaServed: {
        "@type": "State",
        name: "California",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Apex Vitality",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
