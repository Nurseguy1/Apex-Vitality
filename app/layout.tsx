import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Vitality | Weight Loss and Men's Health",
  description:
    "Telehealth weight-management and men's health care from a board-certified medical team.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Apex Vitality",
    description:
      "Focused telehealth care from a board-certified medical team.",
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
