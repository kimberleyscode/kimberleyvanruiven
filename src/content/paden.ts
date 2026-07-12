import type { Locale } from './types';

/* Koppeling tussen de Nederlandse en de Engelse route.

   Nederlands staat op de wortel: dat waren de bestaande URL's en daar hangen de
   canonicals en de sitemap aan, dus die veranderen niet. Engels krijgt een eigen tak
   onder /en, met Engelse padnamen (een Engelse pagina op een Nederlandse slug leest
   slecht en zoekmachines vinden hem minder goed).

   Quiz, CO2-calculator en de Nectar-demo blijven bewust Nederlands: zij zijn op de
   Nederlandse markt gericht. Ze staan daarom NIET in deze tabel en tonen geen taalwissel. */

export const ARTIKEL_SLUGS: Record<string, string> = {
  'ai-act-voor-ondernemers': 'the-ai-act-for-smes',
  'ai-problemen-zijn-architectuurproblemen': 'ai-problems-are-architecture-problems',
  'google-bert-en-chatgpt': 'google-bert-and-chatgpt',
  'klantdata-en-chatgpt': 'client-data-and-chatgpt',
  'machine-learning-of-generatieve-ai': 'machine-learning-or-generative-ai',
  'technologie-die-de-mens-ziet': 'technology-that-sees-people',
  'volwassen-worden-in-ai-ethiek': 'growing-up-in-ai-ethics',
};

/* De Engelse slugs wijken bewust af van de Nederlandse namen: "quickscan" is Nederlands
   bedrijfsjargon en leest voor een Engelstalige als een typefout, en "outsourced" heeft
   een goedkope bijklank. Nederlandse namen en URL's blijven ongewijzigd. */
export const DIENST_SLUGS: Record<string, string> = {
  'ai-act-quickscan': 'ai-act-readiness-scan',
  'ai-beleid-en-training': 'ai-policy-and-training',
  'ai-oplossingen-op-maat': 'tailored-ai-solutions',
  'extern-ai-aanspreekpunt': 'ai-point-of-contact',
};

/* Vaste pagina's, Nederlands pad -> Engels pad */
export const PAGINA_PADEN: Record<string, string> = {
  '/': '/en',
  '/manifest': '/en/manifesto',
  '/zo-werk-ik-met-ai': '/en/how-i-work-with-ai',
  '/privacy': '/en/privacy',
  '/artikelen': '/en/articles',
};

/* Het Engelse pad dat bij een Nederlands pad hoort, of null als de pagina alleen in
   het Nederlands bestaat (quiz, co2, nectar). */
export function engelsPad(nlPad: string): string | null {
  if (PAGINA_PADEN[nlPad]) return PAGINA_PADEN[nlPad];

  const artikel = nlPad.match(/^\/artikelen\/(.+)$/);
  if (artikel && ARTIKEL_SLUGS[artikel[1]]) return `/en/articles/${ARTIKEL_SLUGS[artikel[1]]}`;

  const dienst = nlPad.match(/^\/diensten\/(.+)$/);
  if (dienst && DIENST_SLUGS[dienst[1]]) return `/en/services/${DIENST_SLUGS[dienst[1]]}`;

  return null;
}

/* Andersom: het Nederlandse pad bij een Engels pad. */
export function nederlandsPad(enPad: string): string | null {
  const vast = Object.entries(PAGINA_PADEN).find(([, en]) => en === enPad);
  if (vast) return vast[0];

  const artikel = enPad.match(/^\/en\/articles\/(.+)$/);
  if (artikel) {
    const nl = Object.entries(ARTIKEL_SLUGS).find(([, en]) => en === artikel[1]);
    if (nl) return `/artikelen/${nl[0]}`;
  }

  const dienst = enPad.match(/^\/en\/services\/(.+)$/);
  if (dienst) {
    const nl = Object.entries(DIENST_SLUGS).find(([, en]) => en === dienst[1]);
    if (nl) return `/diensten/${nl[0]}`;
  }

  return null;
}

/* Voor hreflang en de canonical in de metadata van een pagina. */
export function taalVarianten(nlPad: string): Record<string, string> | undefined {
  const en = engelsPad(nlPad);
  if (!en) return undefined;
  return { 'nl-NL': nlPad, 'en': en };
}

export function padVoor(locale: Locale, nlPad: string): string {
  return locale === 'nl' ? nlPad : (engelsPad(nlPad) ?? nlPad);
}
