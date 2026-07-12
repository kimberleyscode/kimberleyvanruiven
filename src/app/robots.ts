import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Werkpagina's en de losse demo-app: die staan al op noindex, maar horen ook geen
      // crawlbudget te kosten. De varianten-pagina's verdwijnen bij livegang.
      disallow: ['/bril-varianten', '/manifest-varianten', '/favicon-varianten', '/hoek-varianten', '/concept', '/nectar'],
    },
    sitemap: 'https://kimberleyvanruiven.nl/sitemap.xml',
  };
}
