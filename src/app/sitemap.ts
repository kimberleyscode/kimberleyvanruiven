import type { MetadataRoute } from 'next';
import { DIENSTEN } from './diensten/diensten';
import { ARTIKEL_SLUGS, DIENST_SLUGS } from '../content/paden';

// Zie robots.ts: ook de sitemap is een route die bij een statische export als bestand
// gebakken moet worden.
export const dynamic = 'force-static';

const SITE = 'https://kimberleyvanruiven.nl';

/* De artikelen staan hier met de hand: een sitemap hoort een bewuste keuze te zijn,
   geen automatisch bijproduct van de bestandsboom. Nieuw artikel? Hier toevoegen. */
const ARTIKELEN = [
  'ai-act-voor-ondernemers',
  'klantdata-en-chatgpt',
  'machine-learning-of-generatieve-ai',
  'ai-problemen-zijn-architectuurproblemen',
  'technologie-die-de-mens-ziet',
  'volwassen-worden-in-ai-ethiek',
  'google-bert-en-chatgpt',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  return [
    { url: SITE, lastModified: nu, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/manifest`, lastModified: nu, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE}/zo-werk-ik-met-ai`, lastModified: nu, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/artikelen`, lastModified: nu, changeFrequency: 'weekly', priority: 0.8 },
    ...DIENSTEN.map((d) => ({
      url: `${SITE}/diensten/${d.slug}`,
      lastModified: nu,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...ARTIKELEN.map((slug) => ({
      url: `${SITE}/artikelen/${slug}`,
      lastModified: nu,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${SITE}/quiz`, lastModified: nu, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/co2`, lastModified: nu, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/privacy`, lastModified: nu, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE}/algemene-voorwaarden`, lastModified: nu, changeFrequency: 'yearly', priority: 0.2 },

    /* Engels. Alleen pagina's die echt in het Engels bestaan komen hierin; de quiz, de
       CO₂-calculator en de Nectar-demo blijven Nederlands en horen hier dus niet. */
    { url: `${SITE}/en`, lastModified: nu, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/en/manifesto`, lastModified: nu, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE}/en/how-i-work-with-ai`, lastModified: nu, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/en/articles`, lastModified: nu, changeFrequency: 'weekly', priority: 0.7 },
    ...DIENSTEN.map((d) => ({
      url: `${SITE}/en/services/${DIENST_SLUGS[d.slug]}`,
      lastModified: nu,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...ARTIKELEN.map((slug) => ({
      url: `${SITE}/en/articles/${ARTIKEL_SLUGS[slug]}`,
      lastModified: nu,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    { url: `${SITE}/en/privacy`, lastModified: nu, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
