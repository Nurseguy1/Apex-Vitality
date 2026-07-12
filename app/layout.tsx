import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Vitality | Weight Loss and Men's Health",
  description:
    "Telehealth weight-management and men's health care from board-certified nurse practitioners with physician Medical Director oversight.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Apex Vitality",
    description:
      "Care from board-certified nurse practitioners with physician Medical Director oversight.",
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
