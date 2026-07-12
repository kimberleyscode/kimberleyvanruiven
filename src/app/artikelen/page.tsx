import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/artikelen', languages: { 'nl-NL': '/artikelen', 'en': '/en/articles' } },
  title: "Artikelen over ethische AI · Kimberley van Ruiven",
  description: "Praktische artikelen over verantwoord AI-gebruik voor ondernemers: de EU AI Act, klantdata en AI-geletterdheid, zonder jargon.",
};

type Kaart = {
  slug?: string;
  href?: string;
  linktekst?: string;
  label: string;
  titel: string;
  intro: string;
  datum?: string;
};

const ARTIKELEN: Kaart[] = [
  {
    slug: 'google-bert-en-chatgpt',
    label: 'NLP',
    titel: 'Het taalmodel dat je al jaren gebruikt zonder het te weten',
    intro: 'Google BERT begrijpt taal al sinds 2019, ChatGPT en Claude schrijven zelf. Over wat ze delen, en wanneer een klein model de betere keuze is.',
    datum: 'juli 2026',
  },
  {
    slug: 'machine-learning-of-generatieve-ai',
    label: 'Machine learning',
    titel: 'Twee soorten AI, twee risico’s: machine learning of generatieve AI',
    intro: 'Machine learning voorspelt, generatieve AI maakt. Wie het verschil kent, weet welke vragen je aan een AI-tool moet stellen.',
    datum: 'juli 2026',
  },
  {
    slug: 'ai-problemen-zijn-architectuurproblemen',
    label: 'Architectuur',
    titel: 'Waarom de meeste AI-problemen eigenlijk architectuurproblemen zijn',
    intro: 'Als een AI-project teleurstelt, krijgt het model de schuld. Meestal zit het probleem eromheen: in de data, de aansluiting en wie er meekijkt.',
    datum: 'juli 2026',
  },
  {
    slug: 'volwassen-worden-in-ai-ethiek',
    label: 'AI-ethiek',
    titel: 'Volwassen worden in AI-ethiek, en waarom je geen tien hoeft te scoren',
    intro: 'Tussen AI-principes en praktijk zit een gat. Het volwassenheidsmodel van de Erasmus Universiteit maakt langs zes dimensies zichtbaar waar je staat.',
    datum: 'juli 2026',
  },
  {
    slug: 'technologie-die-de-mens-ziet',
    label: 'Humane technologie',
    titel: 'Technologie die de mens ziet',
    intro: 'Elke technologie draagt de prikkels van zijn makers in zich. Over humane technologie, mensachtige AI, en het manifest waar ik mijn werk langs leg.',
    datum: 'juli 2026',
  },
  {
    slug: 'ai-act-voor-ondernemers',
    label: 'EU AI Act',
    titel: 'Wat de EU AI Act van jou als ondernemer vraagt (en wat niet)',
    intro: 'De AI Act klinkt als iets voor juristen van grote bedrijven. Toch raakt hij ook jou, al valt de praktijk mee als je weet waar je op moet letten.',
    datum: 'juli 2026',
  },
  {
    slug: 'klantdata-en-chatgpt',
    label: 'Privacy',
    titel: 'Welke klantdata deel je wel en niet met ChatGPT?',
    intro: 'De meeste datalekken via AI ontstaan niet door hackers, maar door goedbedoelde prompts. Drie vuistregels die je vandaag kunt toepassen.',
    datum: 'juli 2026',
  },
  {
    href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter',
    linktekst: 'Bekijk het onderzoek op GitHub →',
    label: 'Onderzoek · NLP',
    titel: 'Algoritmes die online haat moeten herkennen, en zelf bevooroordeeld blijken',
    intro: 'Mijn masterscriptie aan de UvA: onderzoek naar bias in algoritmes die haatspraak herkennen op Twitter.',
  },
  {
    href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter/blob/master/BERT_sentence_classification.ipynb',
    linktekst: 'Bekijk het BERT-notebook →',
    label: 'Machine learning · NLP',
    titel: 'Hoe ik 1300 tweets labelde en een BERT-model trainde dat haatspraak herkent',
    intro: 'Het technische hart van mijn scriptie, van handmatig labelen tot een getraind classificatiemodel, stap voor stap te volgen in het notebook.',
  },
  {
    href: '/manifest',
    linktekst: 'Bekijk de leeslijst →',
    label: 'Leeslijst',
    titel: 'De boeken die mijn kijk op AI en menselijkheid vormden',
    intro: 'De leeslijst bij mijn AI-manifest: boeken over technologie, ethiek en de mens die ik iedereen aanraad.',
  },
];

export default function Artikelen() {
  return (
    <C2Tekstpagina
      label="Kennis"
      regels={['Arti', 'kelen']}
      anderePad="/en/articles"
      scatter={[[4, 5.4, '70%', '8%'], [18, 3.2, '86%', '56%'], [9, 2.6, '60%', '80%']]}
      intro={
        <p>
          Praktische stukken over verantwoord AI-gebruik, geschreven voor ondernemers en organisaties zonder technische achtergrond. Onderaan vind je ook mijn onderzoek en de leeslijst bij mijn manifest.
        </p>
      }
    >
      {ARTIKELEN.map((a) => {
        const inhoud = (
          <>
            <p className="c2-artikel-meta">{a.datum ? `${a.label} · ${a.datum}` : a.label}</p>
            <h2>{a.titel}</h2>
            <p>{a.intro}</p>
            <span className="c2-case-hover" aria-hidden="true">{a.linktekst ?? 'Lees verder →'}</span>
          </>
        );
        if (a.href?.startsWith('http')) {
          return <a className="c2-artikel-kaart" href={a.href} target="_blank" rel="noopener noreferrer" key={a.titel}>{inhoud}</a>;
        }
        return <Link className="c2-artikel-kaart" href={a.href ?? `/artikelen/${a.slug}`} key={a.titel}>{inhoud}</Link>;
      })}
    </C2Tekstpagina>
  );
}
