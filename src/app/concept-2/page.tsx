import type { Metadata } from 'next';
import Concept2Client from './client';

export const metadata: Metadata = {
  alternates: { canonical: '/concept-2' },
  title: "Kimberley van Ruiven · Ethische AI-adviseur voor het mkb",
  description: "Benieuwd wat een mens-gerichte toekomst met technologie voor jouw organisatie betekent? Ik denk graag mee.",
  openGraph: {
    title: "Kimberley van Ruiven · Ethische AI-adviseur voor het mkb",
    description: "Benieuwd wat een mens-gerichte toekomst met technologie voor jouw organisatie betekent? Ik denk graag mee.",
    // Een eigen openGraph-blok vervangt dat van de root-layout, dus zonder deze regel
    // zou juist deze pagina géén deelafbeelding hebben.
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'Voor organisaties die kiezen voor een mens-gerichte toekomst met technologie · Kimberley van Ruiven' }],
  },
  robots: "noindex, nofollow",
};

export default function Concept2() {
  return <Concept2Client />;
}
