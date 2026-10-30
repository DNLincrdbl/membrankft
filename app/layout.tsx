import type { Metadata } from "next";
import { Geist, Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Membrán Mérnöki Kft. — Statikai és építészeti tervezés",
    template: "%s — Membrán Mérnöki Kft.",
  },
  description:
    "Tatabányai tervezőiroda 1990 óta. Statikai és építészeti tervezés, engedélyezési és kiviteli tervek, szakértés, műszaki ellenőrzés.",
  keywords: [
    "statika",
    "Tatabánya",
    "Membrán Kft",
    "építészeti tervezés",
    "statikai szakvélemény",
    "műszaki ellenőrzés",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${geist.variable} ${instrument.variable} ${outfit.variable} h-full antialiased`}>
      <body className={`${geist.className} min-h-full bg-[#f5f5f3] text-ink`}>{children}</body>
    </html>
  );
}
