import type { Metadata } from 'next';
import Concept2Client from './client';
import { taalVarianten } from '../content/paden';

export const metadata: Metadata = {
  alternates: { canonical: '/', languages: taalVarianten('/') },
  title: "Kimberley van Ruiven · Ethische AI-adviseur voor het mkb",
  description: "Benieuwd wat een mensgerichte toekomst met technologie voor jouw organisatie betekent? Ik denk graag mee.",
  openGraph: {
    title: "Kimberley van Ruiven · Ethische AI-adviseur voor het mkb",
    description: "Benieuwd wat een mensgerichte toekomst met technologie voor jouw organisatie betekent? Ik denk graag mee.",
    locale: 'nl_NL',
    // Een eigen openGraph-blok vervangt dat van de root-layout, dus zonder deze regel
    // zou juist deze pagina géén deelafbeelding hebben.
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'Voor organisaties die kiezen voor een mensgerichte toekomst met technologie · Kimberley van Ruiven' }],
  },
};

export default function Concept2() {
  return <Concept2Client locale="nl" />;
}
