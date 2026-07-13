import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://kimberleyvanruiven.nl"),
  title: "Kimberley van Ruiven · Ethische AI-adviseur voor het mkb",
  description:
    "Ik help kleine en middelgrote organisaties AI verantwoord invoeren: AI-beleid, AI Act-quickscan, workshops AI-geletterdheid en systemen op maat. AI waar je achter kunt staan.",
  keywords: ["ethische AI", "AI-adviseur mkb", "AI-beleid opstellen", "AI Act quickscan", "verantwoorde AI", "AI-geletterdheid workshop", "AI-systemen bouwen", "EU AI Act", "AI bias", "Kimberley van Ruiven"],
  authors: [{ name: "Kimberley van Ruiven" }],
  robots: "index, follow",
  openGraph: {
    title: "Kimberley van Ruiven · Ethische AI-adviseur voor het mkb",
    description: "Ik help kleine en middelgrote organisaties AI verantwoord invoeren. AI waar je achter kunt staan, voor een mensgerichte toekomst met technologie.",
    url: "https://kimberleyvanruiven.nl",
    // Geen images-veld: de deelafbeelding komt uit src/app/opengraph-image.jpg en geldt
    // daardoor voor elke route (ook /manifest, /privacy en de dienstenpagina's).
    siteName: "Kimberley van Ruiven",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimberley van Ruiven · Ethische AI-adviseur voor het mkb",
    description: "Ik help kleine en middelgrote organisaties AI verantwoord invoeren. AI waar je achter kunt staan, voor een mensgerichte toekomst met technologie.",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kimberley van Ruiven · Ethische AI-adviseur voor het mkb',
  description:
    'Ethische AI-advisering voor kleine en middelgrote organisaties: AI Act-quickscan, AI-beleid, workshops AI-geletterdheid, AI-chatbots, automatisering en tools op maat.',
  url: 'https://kimberleyvanruiven.nl',
  email: 'info@kimberleyvanruiven.nl',
  areaServed: 'NL',
  founder: {
    '@type': 'Person',
    name: 'Kimberley van Ruiven',
    jobTitle: 'AI-consultant',
    knowsAbout: ['Ethische AI', 'AI-bias', 'EU AI Act', 'AI-implementatie'],
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
