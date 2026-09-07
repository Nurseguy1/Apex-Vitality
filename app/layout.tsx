import type { Metadata } from "next";
import "./globals.css";
import "./bright-theme.css";
import { JsonLd } from "./seo";
import { practiceContact } from "./lib/compliance";

const siteUrl = "https://goapexvitality.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apex Vitality | Men’s Health & Gut Health Coaching",
    template: "%s",
  },
  description:
    "Focused California men's medical care and inclusive gut-health and metabolic-balance wellness coaching.",
  applicationName: "Apex Vitality",
  category: "healthcare",
  keywords: [
    "California telehealth",
    "men's health",
    "gut health",
    "metabolic wellness coaching",
    "California telehealth men's health",
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
    title: "Apex Vitality | Men’s Health & Gut Health Coaching",
    description:
      "Two focused paths: California men's medical care and gut-health and metabolic-balance wellness coaching.",
    type: "website",
    siteName: "Apex Vitality",
    locale: "en_US",
    url: siteUrl,
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Apex Vitality personalized telehealth care" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Vitality | Men’s Health & Gut Health Coaching",
    description: "California men's medical care and inclusive wellness coaching.",
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
        "Apex Vitality provides focused men's medical care for eligible adults located in California and a distinct educational gut-health and metabolic-balance wellness-coaching pathway.",
      address: {
        "@type": "PostalAddress",
        streetAddress: practiceContact.addressLine1,
        addressLocality: "Santa Clarita",
        addressRegion: "CA",
        postalCode: "91350",
        addressCountry: "US",
      },
      employee: {
        "@type": "Person",
        name: practiceContact.clinician,
        jobTitle: "Family Nurse Practitioner",
        identifier: practiceContact.npi,
      },
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
      <head>
        <link rel="stylesheet" href="/bright-theme-v2.css" />
      </head>
      <body>
        <JsonLd data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
