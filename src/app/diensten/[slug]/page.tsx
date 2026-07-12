import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DIENSTEN } from '../diensten';
import { DienstPagina } from '../dienst-pagina';
import { DIENST_SLUGS } from '../../../content/paden';

export function generateStaticParams() {
  return DIENSTEN.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dienst = DIENSTEN.find((d) => d.slug === slug);
  if (!dienst) return {};
  const en = `/en/services/${DIENST_SLUGS[dienst.slug]}`;
  return {
    title: `${dienst.naam} · Kimberley van Ruiven`,
    description: dienst.desc,
    alternates: {
      canonical: `/diensten/${dienst.slug}`,
      languages: { 'nl-NL': `/diensten/${dienst.slug}`, 'en': en },
    },
  };
}

export default async function Dienst({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dienst = DIENSTEN.find((d) => d.slug === slug);
  if (!dienst) notFound();

  return <DienstPagina dienst={dienst} locale="nl" anderePad={`/en/services/${DIENST_SLUGS[dienst.slug]}`} />;
}
