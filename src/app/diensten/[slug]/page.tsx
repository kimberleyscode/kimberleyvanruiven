import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { C2Tekstpagina } from '../../concept-2/gedeeld';
import { DIENSTEN } from '../diensten';

const CAL_LINK = 'https://calendar.app.google/douZqiDQ7p39Xf6u7';

export function generateStaticParams() {
  return DIENSTEN.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dienst = DIENSTEN.find((d) => d.slug === slug);
  if (!dienst) return {};
  return {
    title: `${dienst.naam} · Kimberley van Ruiven`,
    description: dienst.desc,
    alternates: { canonical: `/diensten/${dienst.slug}` },
    robots: 'noindex, nofollow', // opzet: indexeren pas zodra de teksten definitief zijn
  };
}

export default async function DienstPagina({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dienst = DIENSTEN.find((d) => d.slug === slug);
  if (!dienst) notFound();

  return (
    <C2Tekstpagina
      label="Dienst"
      regels={dienst.regels}
      scatter={[[6, 5.2, '72%', '10%'], [13, 3.2, '84%', '62%'], [1, 2.6, '58%', '82%']]}
      intro={<p>{dienst.desc}</p>}
    >
      <section>
        <h2>Wat je krijgt</h2>
        <p>{dienst.watJeKrijgt ?? '[Tekst volgt: wat deze dienst concreet oplevert, in twee of drie zinnen vanuit de klant gedacht.]'}</p>
      </section>

      <section>
        <h2>Hoe het werkt</h2>
        <p>{dienst.hoeHetWerkt ?? '[Tekst volgt: de stappen van kennismaking tot oplevering, als lopende tekst zonder opsomming.]'}</p>
      </section>

      <section>
        <h2>De ethische kant</h2>
        <p>{dienst.ethisch ?? '[Tekst volgt: welke keuzes rond privacy, transparantie en de EU AI Act hier standaard in zitten.]'}</p>
        <p>
          Deze uitgangspunten staan ook in <Link href="/manifest">mijn AI-manifest</Link>.
        </p>
      </section>

      <section>
        <h2>Iets voor jou?</h2>
        <p>
          Vertel me wat je voor ogen hebt, dan kijken we samen of dit past. <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Plan een kennismaking</a> of mail naar <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
