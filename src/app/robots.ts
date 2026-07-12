import type { MetadataRoute } from 'next';

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
