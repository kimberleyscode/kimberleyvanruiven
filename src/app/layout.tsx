import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Kimberley van Ruiven · Soul Tech Architect",
  description:
    "Ik bouw AI-systemen die werken én kloppen. Voor bedrijven die het serieus nemen — met de ethische laag ingebakken.",
  keywords: ["AI consultant", "ethische AI", "AI-systemen bouwen", "EU AI Act", "AI bias", "Kimberley van Ruiven", "Soul Tech Architect"],
  authors: [{ name: "Kimberley van Ruiven" }],
  robots: "index, follow",
  openGraph: {
    title: "Kimberley van Ruiven · Soul Tech Architect",
    description: "Ik bouw AI-systemen die werken én kloppen. Voor bedrijven die het serieus nemen.",
    url: "https://kimberleyvanruiven.nl",
    siteName: "Kimberley van Ruiven",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimberley van Ruiven · Soul Tech Architect",
    description: "Ik bouw AI-systemen die werken én kloppen. Voor bedrijven die het serieus nemen.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${playfair.variable} ${sourceSerif.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
