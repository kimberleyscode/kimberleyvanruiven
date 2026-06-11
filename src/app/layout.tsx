import type { Metadata } from "next";
import { Geist, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kimberley van Ruiven · Spill Your Tea",
  description: "Ethische AI zonder bullshit. Kimberley van Ruiven helpt ondernemers verantwoord en bewust omgaan met AI — vanuit integriteit en menselijkheid.",
  keywords: ["ethische AI", "AI consultant", "AI bias", "verantwoorde AI", "Kimberley van Ruiven", "Spill Your Tea"],
  authors: [{ name: "Kimberley van Ruiven" }],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geist.variable} ${spaceGrotesk.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
