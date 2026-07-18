/* Woordenboek-typen voor de tweetalige site.

   Nederlands is de hoofdtaal en blijft op de bestaande URL's staan (/, /artikelen/...).
   Engels leeft onder /en. Zie src/content/paden.ts voor de koppeling tussen beide. */

export type Locale = 'nl' | 'en';

export const LOCALES: Locale[] = ['nl', 'en'];

/* Een alinea is een rij stukjes: platte tekst, of een link. Zo blijft lopende tekst
   met een link erin per taal te bewerken zonder JSX in het woordenboek te zetten. */
export type Deel = string | { href: string; tekst: string; uitgelicht?: boolean; extern?: boolean };
export type Alinea = Deel[];

/* Kinetische titel: per regel de tekst én de schuifsnelheid. De opdeling in regels is
   taalgebonden ("Gedach / ten & / artikelen" werkt niet in het Engels), daarom staat
   die hier en niet in de component. Inspringing volgt uit de regelindex. */
export type KinRegel = { tekst: string; speed: number };

export type Kaart = {
  sym: number;
  meta: string;
  titel: string;
  desc: string;
  href: string | null;
  linktekst: string | null;
  extern: boolean;
};

export type Gedachte = {
  sym: number;
  cat: string;
  titel: string;
  status: string | null;
  href: string | null;
  linktekst: string | null;
};

export type MetaRegel = { dt: string; dd: string };

export type Citaat = { tekst: string; naam: string; vertaald?: string };

/* Eén ingang van het sectiemenu in de topbalk: de zichtbare tekst en het anker
   op de homepage. De ankers (#over, #diensten, ...) zijn taalonafhankelijk. */
export type MenuIngang = { tekst: string; anker: string };

export type HomeInhoud = {
  nav: { contact: string; menuLabel: string; menuSluiten: string; secties: MenuIngang[] };
  hero: { eyebrow: string; titel: KinRegel[] };
  statement: { eyebrow: string; titel: KinRegel[]; kaart: string; orbit: string; orbitLabel: string };
  over: { titel: KinRegel[]; eyebrow: string; fotoAlt: string; alineas: Alinea[]; meta: MetaRegel[] };
  diensten: { titel: KinRegel[]; leesVerder: string; leesMeerOver: string };
  werk: { titel: KinRegel[]; sleepHint: string; kaarten: Kaart[] };
  aanpak: { titel: KinRegel[]; alineas: string[] };
  gedachten: { titel: KinRegel[]; label: string; kaarten: Gedachte[] };
  citaten: { na_diensten: Citaat; voor_contact: Citaat };
  contact: { titel: KinRegel[]; body: string; cta: string };
  footer: { zoWerkIk: string; manifest: string; privacy: string; home: string; missie: string };
};
