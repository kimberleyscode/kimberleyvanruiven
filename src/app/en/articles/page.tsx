import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/articles',
    languages: { 'nl-NL': '/artikelen', 'en': '/en/articles' },
  },
  title: 'Articles on ethical AI · Kimberley van Ruiven',
  description: 'Practical articles on responsible AI use for business owners: the EU AI Act, client data and AI literacy, without the jargon.',
  openGraph: {
    title: 'Articles on ethical AI · Kimberley van Ruiven',
    description: 'Practical articles on responsible AI use for business owners: the EU AI Act, client data and AI literacy, without the jargon.',
    locale: 'en_GB',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'For organisations that choose a human-centred future with technology · Kimberley van Ruiven' }],
  },
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

const ARTICLES: Kaart[] = [
  {
    slug: 'google-bert-and-chatgpt',
    label: 'NLP',
    titel: 'The language model you’ve been using for years without knowing it',
    intro: 'Google BERT has understood language since 2019; ChatGPT and Claude write text of their own. On what they share, and when a small model is the better choice.',
    datum: 'July 2026',
  },
  {
    slug: 'machine-learning-or-generative-ai',
    label: 'Machine learning',
    titel: 'Two kinds of AI, two risks: machine learning or generative AI',
    intro: 'Machine learning predicts, generative AI creates. Knowing the difference tells you which questions to ask of an AI tool.',
    datum: 'July 2026',
  },
  {
    slug: 'ai-problems-are-architecture-problems',
    label: 'Architecture',
    titel: 'Why most AI problems are really architecture problems',
    intro: 'When an AI project disappoints, the model gets the blame. Usually the problem is everything around it: the data, the fit with your systems, and who’s watching.',
    datum: 'July 2026',
  },
  {
    slug: 'growing-up-in-ai-ethics',
    label: 'AI ethics',
    titel: 'Growing up in AI ethics, and why you don’t need a perfect score',
    intro: 'Between AI principles and practice lies a gap. The maturity model from Erasmus University shows you where you stand, across six dimensions.',
    datum: 'July 2026',
  },
  {
    slug: 'technology-that-sees-people',
    label: 'Humane technology',
    titel: 'Technology that sees people',
    intro: 'Every technology carries its makers’ intentions in it. On humane technology, human-seeming AI, and the manifesto I hold my work to.',
    datum: 'July 2026',
  },
  {
    slug: 'the-ai-act-for-smes',
    label: 'EU AI Act',
    titel: 'What the EU AI Act asks of you as a business owner (and what it doesn’t)',
    intro: 'The AI Act sounds like something for the lawyers at big tech companies. It touches you too, though in practice it turns out to be manageable once you know what to look for.',
    datum: 'July 2026',
  },
  {
    slug: 'client-data-and-chatgpt',
    label: 'Privacy',
    titel: 'Which client data do you share with ChatGPT, and which do you not?',
    intro: 'Most data leaks through AI come not from hackers but from well-meaning prompts. Three rules of thumb you can apply today.',
    datum: 'July 2026',
  },
  {
    href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter',
    linktekst: 'See the research on GitHub →',
    label: 'Research · NLP',
    titel: 'Algorithms built to spot online hate, that turn out to be biased themselves',
    intro: 'My master’s thesis at the University of Amsterdam: research into bias in algorithms that detect hate speech on Twitter.',
  },
  {
    href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter/blob/master/BERT_sentence_classification.ipynb',
    linktekst: 'See the BERT notebook →',
    label: 'Machine learning · NLP',
    titel: 'How I labelled 1300 tweets and trained a BERT model that recognises hate speech',
    intro: 'The technical heart of my thesis, from labelling by hand to a trained classification model, step by step in the notebook.',
  },
  {
    href: '/en/manifesto',
    linktekst: 'See the reading list →',
    label: 'Reading list',
    titel: 'The books that shaped how I see AI and humanity',
    intro: 'The reading list that goes with my AI manifesto: books on technology, ethics and people that I recommend to anyone.',
  },
];

export default function Articles() {
  return (
    <C2Tekstpagina
      label="Knowledge"
      regels={['Arti', 'cles']}
      locale="en"
      anderePad="/artikelen"
      scatter={[[4, 5.4, '70%', '8%'], [18, 3.2, '86%', '56%'], [9, 2.6, '60%', '80%']]}
      intro={
        <p>
          Practical pieces on responsible AI use, written for business owners and organisations without a technical background. Further down you will also find my research and the reading list that goes with my manifesto.
        </p>
      }
    >
      {ARTICLES.map((a) => {
        const inhoud = (
          <>
            <p className="c2-artikel-meta">{a.datum ? `${a.label} · ${a.datum}` : a.label}</p>
            <h2>{a.titel}</h2>
            <p>{a.intro}</p>
            <span className="c2-case-hover" aria-hidden="true">{a.linktekst ?? 'Read more →'}</span>
          </>
        );
        if (a.href?.startsWith('http')) {
          return <a className="c2-artikel-kaart" href={a.href} target="_blank" rel="noopener noreferrer" key={a.titel}>{inhoud}</a>;
        }
        return <Link className="c2-artikel-kaart" href={a.href ?? `/en/articles/${a.slug}`} key={a.titel}>{inhoud}</Link>;
      })}
    </C2Tekstpagina>
  );
}
