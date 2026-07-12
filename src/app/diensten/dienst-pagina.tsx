import Link from 'next/link';
import { C2Tekstpagina } from '../gedeeld';
import type { Locale } from '../../content/types';
import type { Dienst } from './diensten';

const CAL_LINK = 'https://calendar.app.google/douZqiDQ7p39Xf6u7';

/* Eén dienstpagina voor beide talen: de Nederlandse route (/diensten/<slug>) en de
   Engelse (/en/services/<slug>) renderen allebei hiermee, zodat een wijziging in de
   opmaak maar op één plek hoeft. */

const TEKST = {
  nl: {
    label: 'Dienst',
    watJeKrijgt: 'Wat je krijgt',
    hoeHetWerkt: 'Hoe het werkt',
    ethisch: 'De ethische kant',
    ietsVoorJou: 'Iets voor jou?',
    manifestZin: (link: React.ReactNode) => <>Deze uitgangspunten staan ook in {link}.</>,
    manifestLink: 'mijn AI-manifest',
    manifestHref: '/manifest',
    afsluiter: (agenda: React.ReactNode, mail: React.ReactNode) => (
      <>Vertel me wat je voor ogen hebt, dan kijken we samen of dit past. {agenda} of mail naar {mail}.</>
    ),
    agenda: 'Plan een kennismaking',
    placeholders: {
      watJeKrijgt: '[Tekst volgt: wat deze dienst concreet oplevert, in twee of drie zinnen vanuit de klant gedacht.]',
      hoeHetWerkt: '[Tekst volgt: de stappen van kennismaking tot oplevering, als lopende tekst zonder opsomming.]',
      ethisch: '[Tekst volgt: welke keuzes rond privacy, transparantie en de EU AI Act hier standaard in zitten.]',
    },
  },
  en: {
    label: 'Service',
    watJeKrijgt: 'What you get',
    hoeHetWerkt: 'How it works',
    ethisch: 'The ethical side',
    ietsVoorJou: 'Something for you?',
    manifestZin: (link: React.ReactNode) => <>These principles are set out in {link} as well.</>,
    manifestLink: 'my AI manifesto',
    manifestHref: '/en/manifesto',
    afsluiter: (agenda: React.ReactNode, mail: React.ReactNode) => (
      <>Tell me what you have in mind and we will see together whether this fits. {agenda} or email {mail}.</>
    ),
    agenda: 'Book an intro call',
    placeholders: {
      watJeKrijgt: '[Text to follow.]',
      hoeHetWerkt: '[Text to follow.]',
      ethisch: '[Text to follow.]',
    },
  },
} as const;

export function DienstPagina({ dienst, locale, anderePad }: {
  dienst: Dienst;
  locale: Locale;
  anderePad: string;
}) {
  const t = TEKST[locale];
  const d = locale === 'en' ? dienst.en : dienst;

  return (
    <C2Tekstpagina
      label={t.label}
      regels={[...d.regels]}
      locale={locale}
      anderePad={anderePad}
      scatter={[[6, 5.2, '72%', '10%'], [13, 3.2, '84%', '62%'], [1, 2.6, '58%', '82%']]}
      intro={<p>{d.desc}</p>}
    >
      <section>
        <h2>{t.watJeKrijgt}</h2>
        <p>{d.watJeKrijgt ?? t.placeholders.watJeKrijgt}</p>
      </section>

      <section>
        <h2>{t.hoeHetWerkt}</h2>
        <p>{d.hoeHetWerkt ?? t.placeholders.hoeHetWerkt}</p>
      </section>

      <section>
        <h2>{t.ethisch}</h2>
        <p>{d.ethisch ?? t.placeholders.ethisch}</p>
        <p>{t.manifestZin(<Link href={t.manifestHref}>{t.manifestLink}</Link>)}</p>
      </section>

      <section>
        <h2>{t.ietsVoorJou}</h2>
        <p>
          {t.afsluiter(
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">{t.agenda}</a>,
            <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>,
          )}
        </p>
      </section>
    </C2Tekstpagina>
  );
}
