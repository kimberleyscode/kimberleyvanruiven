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
  title: "Kimberley van Ruiven · Spill Your Tea",
  description:
    "Ethische AI zonder bullshit. Kimberley van Ruiven helpt ondernemers verantwoord en bewust omgaan met AI — vanuit integriteit en menselijkheid.",
  keywords: ["ethische AI", "AI consultant", "AI bias", "verantwoorde AI", "Kimberley van Ruiven", "Spill Your Tea"],
  authors: [{ name: "Kimberley van Ruiven" }],
  robots: "index, follow",
  openGraph: {
    title: "Kimberley van Ruiven · Spill Your Tea",
    description: "Ethische AI zonder bullshit. Voor een mens-gerichte toekomst met technologie.",
    url: "https://spillyourtea.nl",
    siteName: "Spill Your Tea",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimberley van Ruiven · Spill Your Tea",
    description: "Ethische AI zonder bullshit. Voor een mens-gerichte toekomst met technologie.",
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
