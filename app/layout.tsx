import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "apex-vitality.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Apex Vitality | Concierge Wellness & Longevity Care",
    description:
      "Personalized, clinician-led telehealth care for medical weight management, men's health optimization, longevity, performance, and digestive wellness.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Apex Vitality",
      description: "Personalized care. Measurable progress.",
      type: "website",
      images: [{ url: "/og.png", width: 1731, height: 909, alt: "Apex Vitality — Personalized care. Measurable progress." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Apex Vitality",
      description: "Personalized care. Measurable progress.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
