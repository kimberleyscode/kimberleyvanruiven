import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DIENSTEN } from '../../../diensten/diensten';
import { DienstPagina } from '../../../diensten/dienst-pagina';
import { DIENST_SLUGS } from '../../../../content/paden';

/* De Engelse dienstpagina's. De slugs zijn Engels (zie content/paden.ts): een Engelse
   pagina op een Nederlandse slug leest slecht en wordt slechter gevonden. */

const bijEngelseSlug = (enSlug: string) =>
  DIENSTEN.find((d) => DIENST_SLUGS[d.slug] === enSlug);

export function generateStaticParams() {
  return DIENSTEN.map((d) => ({ slug: DIENST_SLUGS[d.slug] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dienst = bijEngelseSlug(slug);
  if (!dienst) return {};
  return {
    title: `${dienst.en.naam} · Kimberley van Ruiven`,
    description: dienst.en.desc,
    alternates: {
      canonical: `/en/services/${slug}`,
      languages: { 'nl-NL': `/diensten/${dienst.slug}`, 'en': `/en/services/${slug}` },
    },
    openGraph: {
      title: `${dienst.en.naam} · Kimberley van Ruiven`,
      description: dienst.en.desc,
      locale: 'en_GB',
      images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'For organisations that choose a human-centred future with technology · Kimberley van Ruiven' }],
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dienst = bijEngelseSlug(slug);
  if (!dienst) notFound();

  return <DienstPagina dienst={dienst} locale="en" anderePad={`/diensten/${dienst.slug}`} />;
}
