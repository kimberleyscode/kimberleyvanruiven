import type { Metadata } from 'next';
import Concept2Client from '../client';

/* De Engelse homepage. Nederlands blijft op '/', Engels leeft onder '/en'; zie
   src/content/paden.ts voor de koppeling tussen beide talen.

   LET OP: <html lang> staat in de root-layout op 'nl' en kan daar niet per route
   veranderen zonder de hele app onder een [lang]-segment te hangen (dat zou alle
   Nederlandse URL's breken). Daarom draagt de wortel-div van deze pagina lang="en",
   wat geldig HTML is en waar schermlezers naar luisteren, en vertellen de hreflang-
   regels hieronder aan zoekmachines welke taal dit is. */

export const metadata: Metadata = {
  alternates: {
    canonical: '/en',
    languages: { 'nl-NL': '/', 'en': '/en' },
  },
  title: 'Kimberley van Ruiven · Ethical AI advisor for SMEs',
  description: 'Wondering what a human-centred future with technology would mean for your organisation? I would be glad to think it through with you.',
  openGraph: {
    title: 'Kimberley van Ruiven · Ethical AI advisor for SMEs',
    description: 'Wondering what a human-centred future with technology would mean for your organisation? I would be glad to think it through with you.',
    locale: 'en_GB',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'For organisations that choose a human-centred future with technology · Kimberley van Ruiven' }],
  },
};

export default function EngelseHome() {
  return <Concept2Client locale="en" />;
}
