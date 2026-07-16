import type { MetadataRoute } from 'next';

// Next behandelt robots.txt als een route; bij een statische export moet die expliciet
// als bestand gebakken worden.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // De Nectar-demo is een losse statische app en hoort niet in de zoekresultaten.
      disallow: ['/nectar'],
    },
    sitemap: 'https://kimberleyvanruiven.nl/sitemap.xml',
  };
}
