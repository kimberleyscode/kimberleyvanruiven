import type { Metadata } from 'next';
import HoekVariantenClient from './client';

export const metadata: Metadata = {
  title: 'Hoek-varianten · kies maar',
  robots: 'noindex, nofollow', // keuzepagina, mag weg zodra er gekozen is
};

export default function HoekVarianten() {
  return <HoekVariantenClient />;
}
