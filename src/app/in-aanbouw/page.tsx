import type { Metadata } from 'next';
import InAanbouwClient from './client';

/* Tijdelijke holdingpagina (20 juli 2026). Zolang de vangregel in public/_redirects
   aanstaat, komt élk adres hier terecht behalve /privacy en /algemene-voorwaarden.
   Terugdraaien: haal de regels uit public/_redirects en push. Deze route mag daarna
   blijven staan, hij is dan alleen niet meer bereikbaar via een gewone link. */
export const metadata: Metadata = {
  title: 'In aanbouw · Kimberley van Ruiven',
  description: 'Deze site is tijdelijk in aanbouw. Plan intussen een kennismaking, of vind me op LinkedIn, Instagram of via de mail.',
  robots: 'noindex, nofollow',
  alternates: { canonical: 'https://kimberleyvanruiven.nl/in-aanbouw' },
};

export default function InAanbouw() {
  return <InAanbouwClient />;
}
