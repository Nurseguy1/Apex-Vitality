import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Vitality | Weight Loss and Men's Health",
  description:
    "Telehealth care for gut health, metabolic weight management, men's vitality, and longevity from a board-certified medical team.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Apex Vitality",
    description:
      "Gut health, metabolic care, men's vitality, and longevity programs from a board-certified medical team.",
    type: "website",
  },
};

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
