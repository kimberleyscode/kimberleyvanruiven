'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../concept2.css';
import { Glyph, Scatter, fontVars, useLichteAchtergrond, HoekThuis, HOME } from '../gedeeld';

const CAL_LINK = 'https://calendar.app.google/douZqiDQ7p39Xf6u7';

type Antwoord = { text: string; score: number };
type Vraag = { text: string; answers: Antwoord[] };

const QUESTIONS: Vraag[] = [
  {
    text: 'Hoe vaak gebruiken jij of je team AI-tools in jouw organisatie?',
    answers: [
      { text: 'Dagelijks, het is een vast onderdeel van hoe we werken', score: 4 },
      { text: 'Regelmatig, maar niet altijd bewust', score: 3 },
      { text: 'Af en toe, we experimenteren nog', score: 2 },
      { text: 'Nauwelijks, ik weet niet goed hoe we het kunnen inzetten', score: 1 },
    ],
  },
  {
    text: 'Hoe heb je de AI-tools gekozen die je nu gebruikt?',
    answers: [
      { text: 'Ik heb bewust vergeleken op basis van privacy, ethiek en functionaliteit', score: 4 },
      { text: 'Ik gebruik wat anderen in mijn branche ook gebruiken', score: 3 },
      { text: 'Ik gebruik wat gratis of makkelijk beschikbaar is', score: 2 },
      { text: 'Ik heb er eigenlijk nooit echt over nagedacht', score: 1 },
    ],
  },
  {
    text: 'Wat weet je over wat er gebeurt met de data die je in AI-tools stopt?',
    answers: [
      { text: 'Ik weet precies wat er met mijn data gebeurt en heb daar bewuste keuzes in gemaakt', score: 4 },
      { text: 'Ik heb er wel iets over gelezen maar doe er weinig mee', score: 3 },
      { text: 'Ik vermoed dat er iets mee gebeurt maar weet niet precies wat', score: 2 },
      { text: 'Ik heb daar nog nooit bij stilgestaan', score: 1 },
    ],
  },
  {
    text: 'Heb jij, of iemand in je team, wel eens klantinformatie, persoonsgegevens of vertrouwelijke data in een AI-tool ingevoerd?',
    answers: [
      { text: 'Nee, daar hebben we bewust een grens getrokken', score: 4 },
      { text: 'Soms, maar ik probeer het te vermijden', score: 3 },
      { text: 'Regelmatig, ik wist niet dat dat een probleem kon zijn', score: 2 },
      { text: 'Ja, ik zie het verschil niet zo', score: 1 },
    ],
  },
  {
    text: 'Weet je welke verplichtingen jouw organisatie heeft onder de EU AI Act?',
    answers: [
      { text: 'Ja, ik ben er goed van op de hoogte en heb al stappen gezet', score: 4 },
      { text: 'Ik heb erover gehoord maar weet de details niet', score: 3 },
      { text: 'Ik wist niet dat die wet ook voor kleinere organisaties geldt', score: 2 },
      { text: 'Dit is de eerste keer dat ik erover hoor', score: 1 },
    ],
  },
  {
    text: 'Hoe ga je om met de ecologische impact van je AI-gebruik?',
    answers: [
      { text: 'Ik maak bewuste keuzes over welke modellen ik gebruik en hoe vaak', score: 4 },
      { text: 'Ik wist niet dat AI een ecologische voetafdruk heeft', score: 3 },
      { text: 'Ik heb er wel eens iets over gelezen maar doe er niets mee', score: 2 },
      { text: 'Dit speelt geen rol in hoe ik AI inzet', score: 1 },
    ],
  },
  {
    text: 'Heb je het gevoel dat je AI-gebruik aansluit bij de waarden van jouw organisatie?',
    answers: [
      { text: 'Ja, ik heb daar bewust over nagedacht en het klopt', score: 4 },
      { text: 'Grotendeels wel, maar er zijn dingen die ik liever anders zou doen', score: 3 },
      { text: 'Ik merk soms een spanning maar weet niet hoe ik dat moet oplossen', score: 2 },
      { text: 'Ik heb mijn AI-gebruik nog nooit aan mijn waarden gekoppeld', score: 1 },
    ],
  },
  {
    text: 'Heb je een AI-beleid of afspraken over hoe jij en je collega’s AI inzetten in jouw organisatie?',
    answers: [
      { text: 'Ja, dat staat helder op papier', score: 4 },
      { text: 'Ik heb er informeel over nagedacht maar niets vastgelegd', score: 3 },
      { text: 'Nee, maar ik zie wel in dat dat handig zou zijn', score: 2 },
      { text: 'Nee, en ik weet niet waar ik zou beginnen', score: 1 },
    ],
  },
];

const RESULTS = {
  ontdekker: {
    title: 'De Ontdekker',
    glyph: 0,
    sub: 'Je gebruikt AI. Maar AI gebruikt ook jou.',
    preview:
      'Eerlijk gezegd? De meeste organisaties staan precies waar jullie nu staan. Dat maakt het niet minder urgent. Je gebruikt tools waarvan je niet weet wat ze met je data doen, welke risico’s je loopt of wat de wet van je vraagt. Niet omdat je het niet wilt weten, maar omdat niemand het je heeft verteld.',
    rapport: (
      <>Het goede nieuws: je hoeft het niet alleen uit te zoeken. Met de <strong><Link href="/diensten/ai-act-quickscan">AI Act-quickscan</Link></strong> breng ik in kaart welke AI er in jouw organisatie draait, wat daarvan al goed zit en wat v&oacute;&oacute;r 2 augustus 2026 nog aandacht vraagt. Zo weet je precies waar je staat en wat een logische eerste stap is.</>
    ),
    ctaSub: 'Een gratis en open gesprek over waar je staat en wat jij nodig hebt.',
  },
  bewuste: {
    title: 'De Bewuste Gebruiker',
    glyph: 7,
    sub: 'Je ziet het. Maar zien is niet hetzelfde als handelen.',
    preview:
      'Je bent verder dan de meeste organisaties. Je stelt vragen, je voelt de spanning, je weet dat er iets moet veranderen. Maar ergens zit er nog een blinde vlek. Een plek waar je het laat liggen, niet omdat je niet wilt, maar omdat je niet precies weet hoe.',
    rapport: (
      <>De <strong><Link href="/diensten/ai-act-quickscan">AI Act-quickscan</Link></strong> maakt jouw blinde vlek zichtbaar: welke AI er draait, wat al goed geregeld is en wat nog aandacht vraagt. Je loopt waarschijnlijk al voor op veel andere organisaties. Dit helpt je dat voordeel te benutten.</>
    ),
    ctaSub: 'De AI Act-quickscan is voor jou de logische volgende stap.',
  },
  voorloper: {
    title: 'De Ethische Voorloper',
    glyph: 15,
    sub: 'Jij bent de uitzondering. Niet de regel.',
    preview:
      'Je hebt nagedacht over data, privacy, ethiek en de waarden van je organisatie. Dat is zeldzamer dan je denkt. En het maakt jou geloofwaardig, consistent en onderscheidend. Anderen praten over bewust ondernemen. Jij doet het al.',
    rapport: (
      <>Maar bewust blijven kost aandacht, want AI en wetgeving veranderen snel. Als <strong><Link href="/diensten/extern-ai-aanspreekpunt">extern AI-aanspreekpunt</Link></strong> ben ik er voor elke AI-vraag die opduikt: nieuwe tools, nieuwe regels, nieuwe kansen. Op strippenkaart of abonnement, zodat je je voorsprong houdt zonder er zelf constant in te hoeven duiken.</>
    ),
    ctaSub: 'Voor organisaties die al weten waar ze staan en dat zo willen houden.',
  },
} as const;

type ResultKey = keyof typeof RESULTS;

/* Thema per vraag (zelfde volgorde als QUESTIONS); gebruikt voor de aandachtspunten */
const THEMES: Array<{ label: string; tip: React.ReactNode }> = [
  { label: 'Bewust gebruik', tip: <>Sta af en toe stil bij wanneer en waarom je AI inzet. Bewust gebruiken begint bij merken d&aacute;t je het gebruikt.</> },
  { label: 'Toolkeuze', tip: <>Vergelijk je tools eens op privacy en transparantie in plaats van alleen op gemak.</> },
  { label: 'Datakennis', tip: <>Zoek van je belangrijkste tool op wat er met je invoer gebeurt. Dat staat in de privacyvoorwaarden, en het antwoord bepaalt wat je er wel en niet in kwijt kunt.</> },
  { label: 'Vertrouwelijke gegevens', tip: <>Spreek met je team af welke gegevens nooit een AI-tool in gaan, zoals klantdata en persoonsgegevens.</> },
  { label: 'EU AI Act', tip: <>De wet geldt ook voor kleine organisaties, en op 2 augustus 2026 gaat de volgende fase in. Weten wat er voor jullie in staat is de eerste stap.</> },
  { label: 'Ecologische impact', tip: <>Modelkeuze is klimaatkeuze. Reken je uitstoot uit met de <Link href="/concept-2/co2">CO&#8322;-calculator</Link>.</> },
  { label: 'Waarden', tip: <>Leg vast waar jouw organisatie met AI w&eacute;l en niet aan wil meewerken. Dat maakt elke volgende keuze makkelijker.</> },
  { label: 'AI-beleid', tip: <>Een half A4 met afspraken is al een AI-beleid. Dat het er is, is belangrijker dan dat het compleet is.</> },
];

const FEEDBACK = ['Duidelijk.', 'Interessant.', 'Goed om te weten.', 'Noteer ik.', 'Eerlijk.', 'Aha.', 'Dat herken ik.'];

/* Buiten de component: een willekeurige keuze hoort niet tijdens het renderen te gebeuren,
   anders kan React bij een hernieuwde render een andere uitkomst krijgen. */
const willekeurigeFeedback = () => FEEDBACK[Math.floor(Math.random() * FEEDBACK.length)];
const LETTERS = ['A', 'B', 'C', 'D'];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Bril() {
  const trace = (
    <>
      <path d="M0 26 H180 l24 18 H336" />
      <path d="M0 56 H400" />
      <path d="M0 86 H150 l20 -16 H320" />
      <circle cx="336" cy="44" r="4" /><circle cx="120" cy="56" r="4" /><circle cx="320" cy="70" r="4" />
    </>
  );
  return (
    <div className="qzs-kunst" aria-hidden="true">
      <svg className="qzs-trace" viewBox="0 0 400 150" preserveAspectRatio="none" fill="none" stroke="#00218F" strokeWidth="1.6">{trace}</svg>
      <svg className="qzs-bril" viewBox="0 0 360 150" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <clipPath id="qzs-oog-l"><path d="M66 80 Q94 62 122 80 Q94 96 66 80 Z" /></clipPath>
          <clipPath id="qzs-oog-r"><path d="M238 80 Q266 62 294 80 Q266 96 238 80 Z" /></clipPath>
        </defs>
        <circle cx="94" cy="78" r="45" />
        <circle cx="266" cy="78" r="45" />
        <path d="M139 72 Q180 58 221 72" />
        <path d="M49 68 L18 56 H0" />
        <path d="M311 68 L342 56 H360" />
        <g className="qzs-oog" strokeWidth="1.8">
          <path d="M66 80 Q94 62 122 80 Q94 96 66 80 Z" />
          <g clipPath="url(#qzs-oog-l)">
            <g className="qzs-pupil">
              <circle cx="94" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="97" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
            </g>
          </g>
          <path d="M72 90 Q94 98 116 90" strokeWidth="1.3" opacity="0.6" />
        </g>
        <g className="qzs-oog" strokeWidth="1.8">
          <path d="M238 80 Q266 62 294 80 Q266 96 238 80 Z" />
          <g clipPath="url(#qzs-oog-r)">
            <g className="qzs-pupil">
              <circle cx="266" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="269" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
            </g>
          </g>
          <path d="M244 90 Q266 98 288 90" strokeWidth="1.3" opacity="0.6" />
        </g>
      </svg>
      <svg className="qzs-trace qzs-trace--spiegel" viewBox="0 0 400 150" preserveAspectRatio="none" fill="none" stroke="#00218F" strokeWidth="1.6">{trace}</svg>
    </div>
  );
}

export default function QuizClient() {
  useLichteAchtergrond();

  const [fase, setFase] = useState<'intro' | 'vraag' | 'resultaat'>('intro');
  const [qIndex, setQIndex] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [antwoorden, setAntwoorden] = useState<Antwoord[]>([]);
  const [gekozen, setGekozen] = useState<number | null>(null);
  const [toast, setToast] = useState('');
  const [kopieLabel, setKopieLabel] = useState('Kopieer link');
  const [deelUrl, setDeelUrl] = useState('');

  /* De deelknoppen tonen de URL van deze pagina, maar window bestaat niet tijdens het
     server-renderen. Daarom pas na de eerste render ophalen; de lintregel waarschuwt
     voor cascaderende renders, wat hier niet speelt: dit gebeurt één keer. */
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setDeelUrl(window.location.href); }, []);

  /* Pupillen volgen de muis, net als op de homepage */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      document.querySelectorAll<SVGGElement>('.qzs-oog').forEach((oog) => {
        const pupil = oog.querySelector<SVGGElement>('.qzs-pupil');
        if (!pupil) return;
        const r = oog.getBoundingClientRect();
        const dx = Math.max(-7, Math.min(7, (e.clientX - (r.left + r.width / 2)) / 40));
        const dy = Math.max(-4, Math.min(4, (e.clientY - (r.top + r.height / 2)) / 60));
        pupil.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  const startVraag = (index: number, basisScores: number[]) => {
    setQIndex(index);
    setScores(basisScores);
    setAntwoorden(shuffle(QUESTIONS[index].answers));
    setGekozen(null);
    setFase('vraag');
    window.scrollTo(0, 0);
  };

  const kies = (score: number, idx: number) => {
    if (gekozen !== null) return;
    setGekozen(idx);
    setToast(willekeurigeFeedback());
    window.setTimeout(() => setToast(''), 600);
    const nieuweScores = [...scores.slice(0, qIndex), score];
    window.setTimeout(() => {
      if (qIndex + 1 < QUESTIONS.length) startVraag(qIndex + 1, nieuweScores);
      else { setScores(nieuweScores); setFase('resultaat'); window.scrollTo(0, 0); }
    }, 500);
  };

  const terug = () => {
    if (qIndex === 0) { setFase('intro'); window.scrollTo(0, 0); return; }
    startVraag(qIndex - 1, scores.slice(0, qIndex - 1));
  };

  const resultKey: ResultKey = (() => {
    const a = scores.filter((s) => s === 4).length;
    const d = scores.filter((s) => s === 1).length;
    if (a >= 4) return 'voorloper';
    if (d >= 4) return 'ontdekker';
    return 'bewuste';
  })();
  const r = RESULTS[resultKey];

  const laagste = scores
    .map((s, i) => ({ s, i }))
    .sort((a, b) => a.s - b.s)
    .slice(0, 2);
  const allesMax = scores.length > 0 && scores.every((s) => s === 4);

  const deelTekst = `Ik ben "${r.title}" als AI-gebruiker. Wat ben jij? Doe de quiz: ${deelUrl}`;

  const kopieer = () => {
    navigator.clipboard.writeText(deelUrl).then(() => {
      setKopieLabel('Gekopieerd!');
      window.setTimeout(() => setKopieLabel('Kopieer link'), 2000);
    });
  };

  const pct = Math.round((qIndex / QUESTIONS.length) * 100);

  return (
    <div className={`c2-root qzs ${fontVars}`}>
      <style>{`
        .qzs .qzs-hero { position: relative; padding: 4.5rem 1.5rem 2.5rem; text-align: center; overflow: hidden; }
        .qzs .qzs-eyebrow { color: var(--c2-blue); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .qzs h1.qzs-titel { font-family: var(--font-c2-display), sans-serif; font-weight: 400; font-size: clamp(2rem, 6.4vw, 4rem); line-height: 1.02; text-transform: uppercase; color: var(--c2-blue); margin: 0 0 1.4rem; }
        .qzs h1.qzs-titel .r2 { display: block; padding-left: clamp(1.2rem, 6vw, 4.5rem); }
        .qzs .qzs-sub { font-size: 1.08rem; max-width: 480px; margin: 0 auto 2.2rem; line-height: 1.65; }
        .qzs .qzs-knop { display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; font-family: inherit; font-size: 0.9rem; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; border: 1.5px solid var(--c2-ink); border-radius: 999px; background: transparent; color: var(--c2-ink); padding: 0.85rem 2rem; cursor: pointer; transition: background 0.25s, color 0.25s, border-color 0.25s; text-decoration: none; }
        .qzs .qzs-knop:hover { background: var(--c2-blue); border-color: var(--c2-blue); color: #fff; }
        .qzs .qzs-knop--klein { font-size: 0.78rem; padding: 0.5rem 1.2rem; border-width: 1px; border-color: var(--c2-hairline); color: var(--c2-grey); }
        .qzs .qzs-knop--klein:hover { background: none; border-color: var(--c2-blue); color: var(--c2-blue); }
        .qzs .qzs-kunst { display: flex; align-items: stretch; justify-content: center; margin: 3.2rem auto 0; max-width: 1100px; }
        .qzs .qzs-bril { width: clamp(230px, 38vw, 340px); flex-shrink: 0; height: auto; }
        .qzs .qzs-trace { flex: 1; height: auto; min-width: 0; }
        .qzs .qzs-trace--spiegel { transform: scaleX(-1); }
        .qzs .qzs-oog { transform-box: fill-box; transform-origin: center; animation: qzs-knipper 7s ease-in-out infinite; }
        @keyframes qzs-knipper { 0%, 95.5%, 100% { transform: scaleY(1); } 97.5% { transform: scaleY(0.08); } }
        .qzs .qzs-pupil { transition: transform 0.15s ease-out; }
        .qzs .qzs-main { max-width: 620px; width: 100%; margin: 0 auto; padding: 2rem 1rem 3.5rem; position: relative; }
        .qzs .qzs-kaart { background: #fff; border: 1px solid var(--c2-hairline); border-radius: 26px; padding: 1.9rem; margin-bottom: 1.25rem; }
        .qzs .qzs-kaart h2 { font-family: var(--font-c2-display), sans-serif; font-weight: 400; font-size: 1.25rem; text-transform: uppercase; color: var(--c2-blue); margin: 0 0 0.9rem; }
        .qzs .qzs-kaart p { font-size: 0.95rem; color: var(--c2-grey); line-height: 1.75; }
        .qzs .qzs-kaart p + p { margin-top: 0.75rem; }
        .qzs .qzs-kaart strong { color: var(--c2-ink); font-weight: 600; }
        .qzs .qzs-kaart a { color: var(--c2-blue); text-decoration: none; }
        .qzs .qzs-kaart a:hover { opacity: 0.75; }
        .qzs .qzs-profielen h3 { font-size: 0.75rem; font-weight: 600; color: var(--c2-grey); letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 1.1rem; }
        .qzs .qzs-profielgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem; }
        @media (max-width: 500px) { .qzs .qzs-profielgrid { grid-template-columns: 1fr; } }
        .qzs .qzs-profiel { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.6rem; padding: 1.4rem 0.85rem; border-radius: 18px; border: 1px solid var(--c2-hairline); }
        .qzs .qzs-profiel-icoon { color: var(--c2-blue); }
        .qzs .qzs-profiel-naam { font-weight: 600; font-size: 0.92rem; margin-bottom: 0.2rem; }
        .qzs .qzs-profiel-desc { font-size: 0.8rem; color: var(--c2-grey); line-height: 1.55; }
        .qzs .qzs-start { text-align: center; margin-top: 2rem; }
        .qzs .qzs-start p { font-size: 0.8rem; color: var(--c2-grey); margin-top: 0.7rem; }
        .qzs .qzs-topbalk { border-bottom: 1px solid var(--c2-hairline); padding: 0.9rem 1.5rem; }
        .qzs .qzs-progress { max-width: 600px; margin: 0 auto; }
        .qzs .qzs-progress-info { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .qzs .qzs-progress-lbl { font-size: 0.78rem; color: var(--c2-grey); }
        .qzs .qzs-progress-pct { font-size: 0.78rem; font-weight: 600; color: var(--c2-blue); }
        .qzs .qzs-balk { height: 3px; background: var(--c2-hairline); overflow: hidden; }
        .qzs .qzs-balk-vul { height: 100%; background: var(--c2-blue); transition: width 0.4s ease; }
        .qzs .qzs-vraag { font-family: var(--font-c2-display), sans-serif; font-weight: 400; font-size: clamp(1.2rem, 3.4vw, 1.55rem); line-height: 1.3; color: var(--c2-blue); text-transform: uppercase; margin: 0 0 1.6rem; }
        .qzs .qzs-antwoorden { display: flex; flex-direction: column; gap: 0.65rem; }
        .qzs .qzs-antwoord { display: flex; align-items: flex-start; gap: 0.85rem; padding: 1rem 1.15rem; background: #fff; border: 1px solid var(--c2-hairline); border-radius: 18px; cursor: pointer; text-align: left; font-family: inherit; font-size: 0.93rem; color: var(--c2-ink); line-height: 1.5; transition: border-color 0.15s; width: 100%; opacity: 0; animation: qzs-op 0.3s ease-out forwards; }
        .qzs .qzs-antwoord:nth-child(1) { animation-delay: 0.05s; } .qzs .qzs-antwoord:nth-child(2) { animation-delay: 0.12s; }
        .qzs .qzs-antwoord:nth-child(3) { animation-delay: 0.19s; } .qzs .qzs-antwoord:nth-child(4) { animation-delay: 0.26s; }
        @keyframes qzs-op { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .qzs .qzs-antwoord:hover { border-color: var(--c2-ink); }
        .qzs .qzs-antwoord.is-gekozen { border-color: var(--c2-blue); }
        .qzs .qzs-letter { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; min-width: 26px; border-radius: 50%; border: 1px solid var(--c2-hairline); font-size: 0.75rem; font-weight: 600; color: var(--c2-grey); transition: all 0.15s; margin-top: 1px; flex-shrink: 0; }
        .qzs .qzs-antwoord:hover .qzs-letter { border-color: var(--c2-ink); color: var(--c2-ink); }
        .qzs .qzs-antwoord.is-gekozen .qzs-letter { background: var(--c2-blue); border-color: var(--c2-blue); color: #fff; }
        .qzs .qzs-nav { margin-top: 1.4rem; }
        .qzs .qzs-toast { position: fixed; top: 48%; left: 50%; transform: translate(-50%, -50%); background: var(--c2-blue); color: #fff; font-size: 1rem; font-weight: 500; letter-spacing: 0.04em; padding: 0.7rem 1.7rem; border-radius: 999px; opacity: 0; transition: opacity 0.18s; pointer-events: none; z-index: 100; }
        .qzs .qzs-toast.is-zichtbaar { opacity: 1; }
        .qzs .qzs-resultaatkop { position: relative; padding: 4rem 1.5rem 1.5rem; text-align: center; overflow: hidden; }
        .qzs .qzs-resultaat-glyph { display: flex; justify-content: center; color: var(--c2-blue); margin-bottom: 1rem; }
        .qzs h2.qzs-resultaat-titel { font-family: var(--font-c2-display), sans-serif; font-weight: 400; font-size: clamp(1.8rem, 5vw, 2.8rem); text-transform: uppercase; color: var(--c2-blue); margin: 0 0 0.7rem; }
        .qzs .qzs-resultaat-sub { font-size: 1.02rem; max-width: 440px; margin: 0 auto; line-height: 1.6; }
        .qzs .qzs-focus { margin-top: 1.4rem; padding-top: 1.2rem; border-top: 1px solid var(--c2-hairline); }
        .qzs .qzs-focus h4 { font-size: 0.75rem; font-weight: 600; color: var(--c2-grey); letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 0.7rem; }
        .qzs .qzs-focus p { font-size: 0.92rem; }
        .qzs .qzs-focus p + p { margin-top: 0.55rem; }
        .qzs .qzs-focus .qzs-thema { color: var(--c2-blue); }
        .qzs .qzs-kaart--rand { border-color: var(--c2-blue); }
        .qzs .qzs-cta { text-align: center; }
        .qzs .qzs-cta-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--c2-blue); margin-bottom: 0.6rem; }
        .qzs .qzs-cta h3 { font-family: var(--font-c2-display), sans-serif; font-weight: 400; font-size: 1.3rem; text-transform: uppercase; color: var(--c2-blue); margin: 0 0 0.6rem; line-height: 1.25; }
        .qzs .qzs-cta > p { font-size: 0.92rem; color: var(--c2-grey); margin: 0 auto 1.5rem; line-height: 1.65; max-width: 420px; }
        .qzs .qzs-cta .qzs-meer { font-size: 0.8rem; margin: 1rem 0 0; }
        .qzs .qzs-deel { text-align: center; padding: 1.5rem 0 0.5rem; }
        .qzs .qzs-deel p { font-size: 0.75rem; color: var(--c2-grey); margin-bottom: 0.85rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
        .qzs .qzs-deelknoppen { display: flex; gap: 0.65rem; justify-content: center; flex-wrap: wrap; }
        .qzs .qzs-deelknop { display: inline-flex; align-items: center; gap: 0.45rem; font-family: inherit; font-size: 0.83rem; font-weight: 500; padding: 0.55rem 1.15rem; border-radius: 999px; border: 1px solid var(--c2-hairline); background: #fff; color: var(--c2-ink); cursor: pointer; transition: border-color 0.18s, color 0.18s; text-decoration: none; }
        .qzs .qzs-deelknop:hover { border-color: var(--c2-blue); color: var(--c2-blue); }
        .qzs .qzs-deelknop svg { width: 16px; height: 16px; }
        @media (prefers-reduced-motion: reduce) {
          .qzs .qzs-oog, .qzs .qzs-antwoord { animation: none; }
          .qzs .qzs-antwoord { opacity: 1; }
          .qzs .qzs-pupil { transition: none; }
        }
      `}</style>

      <div className={`qzs-toast${toast ? ' is-zichtbaar' : ''}`} aria-live="polite">{toast}</div>

      <nav className="c2-top">
        <HoekThuis />
        <a className="c2-reach" href="mailto:info@kimberleyvanruiven.nl">Neem contact op</a>
      </nav>

      {fase === 'intro' && (
        <>
          <header className="qzs-hero">
            <Scatter items={[[0, 3.6, '7%', '12%'], [2, 2.6, '15%', '58%'], [12, 2.2, '4%', '38%'], [7, 2.8, '84%', '18%'], [15, 3.2, '80%', '60%'], [10, 2.4, '92%', '42%']]} />
            <p className="qzs-eyebrow">Gratis quiz &middot; vijf minuten</p>
            <h1 className="qzs-titel">Gebruik jij AI,<span className="r2">of gebruikt AI jou?</span></h1>
            <p className="qzs-sub">Ontdek in vijf minuten waar jij en je organisatie staan in bewust AI-gebruik.</p>
            <button className="qzs-knop" onClick={() => startVraag(0, [])}>Start de quiz &rarr;</button>
            <Bril />
          </header>

          <main className="qzs-main">
            <div className="qzs-kaart">
              <h2>Waarom dit ertoe doet</h2>
              <p>Niet alle AI is hetzelfde. Net zoals je leveranciers kiest die bij je organisatie passen, kun je ook AI-tools kiezen die passen bij jullie waarden. Er is een groot verschil tussen tools die transparant zijn over hoe ze met jouw data omgaan, en tools die dat niet zijn. Wie zijn leveranciers zorgvuldig uitzoekt, maar klakkeloos klantgegevens invoert in een AI-tool zonder te weten waar die naartoe gaan, mist een stap. Door te onderscheiden welke AI ethisch is en welke niet, kun je tools kiezen, inzetten en toepassen op een manier die consistent is met waar jouw organisatie voor staat.</p>
              <p>AI is niet meer weg te denken van de werkvloer. Maar in de meeste organisaties gebeurt dat gebruik <strong>onbewust</strong>: medewerkers plakken klantdata in publieke tools zonder dat daar afspraken over zijn. Zonder zicht op wat er met die data gebeurt, wat de wet vraagt of hoe het past bij de waarden van de organisatie.</p>
              <p>De <a href="https://artificialintelligenceact.eu/" target="_blank" rel="noopener noreferrer">EU AI Act</a> is inmiddels van kracht en de gevolgen zijn concreet; op 2 augustus 2026 gaat de volgende fase in. Gebruik je AI zonder te weten hoe je data wordt verwerkt, dan loop je risico op boetes, reputatieschade of het verlies van klantvertrouwen. Ethisch omgaan met AI betekent niet dat je het niet meer mag gebruiken. Het betekent dat je weet w&aacute;t je gebruikt, waarom, en wat de impact daarvan is op je klanten, je bedrijf en de samenleving.</p>
              <p>Weten waar je staat is de eerste stap. Deze quiz laat je in vijf minuten zien wat jouw vertrekpunt is. Met concrete tips over wat je nu al kunt doen om ethischer met AI om te gaan.</p>
            </div>

            <div className="qzs-kaart qzs-profielen">
              <h3>Wat ontdek je?</h3>
              <div className="qzs-profielgrid">
                {(Object.keys(RESULTS) as ResultKey[]).map((k) => (
                  <div className="qzs-profiel" key={k}>
                    <span className="qzs-profiel-icoon"><Glyph t={RESULTS[k].glyph} size={2} /></span>
                    <div>
                      <div className="qzs-profiel-naam">{RESULTS[k].title}</div>
                      <div className="qzs-profiel-desc">
                        {k === 'ontdekker' && 'Je gebruikt AI maar hebt er nog nooit bewust over nagedacht. Je hebt een solide basis nodig.'}
                        {k === 'bewuste' && 'Je denkt na over je AI-gebruik maar er zijn nog blinde vlekken. Een quickscan maakt ze zichtbaar.'}
                        {k === 'voorloper' && 'Je gebruikt AI bewust en verantwoord. Je bent klaar voor de volgende stap.'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="qzs-start">
              <button className="qzs-knop" onClick={() => startVraag(0, [])}>Start de quiz &rarr;</button>
              <p>8 vragen &middot; geen registratie nodig om te beginnen</p>
            </div>
          </main>
        </>
      )}

      {fase === 'vraag' && (
        <>
          <div className="qzs-topbalk">
            <div className="qzs-progress">
              <div className="qzs-progress-info">
                <span className="qzs-progress-lbl">Vraag {qIndex + 1} van {QUESTIONS.length}</span>
                <span className="qzs-progress-pct">{pct}%</span>
              </div>
              <div className="qzs-balk"><div className="qzs-balk-vul" style={{ width: `${pct}%` }} /></div>
            </div>
          </div>
          <main className="qzs-main">
            <h2 className="qzs-vraag">{QUESTIONS[qIndex].text}</h2>
            <div className="qzs-antwoorden" key={qIndex}>
              {antwoorden.map((a, i) => (
                <button key={a.text} className={`qzs-antwoord${gekozen === i ? ' is-gekozen' : ''}`} onClick={() => kies(a.score, i)}>
                  <span className="qzs-letter">{LETTERS[i]}</span>
                  <span>{a.text}</span>
                </button>
              ))}
            </div>
            <div className="qzs-nav">
              <button className="qzs-knop qzs-knop--klein" onClick={terug}>&larr; Terug</button>
            </div>
          </main>
        </>
      )}

      {fase === 'resultaat' && (
        <>
          <header className="qzs-resultaatkop">
            <Scatter items={[[3, 3.2, '9%', '18%'], [17, 2.4, '17%', '64%'], [9, 2.6, '86%', '56%'], [13, 2.8, '90%', '16%']]} />
            <p className="qzs-eyebrow">Jouw resultaat</p>
            <span className="qzs-resultaat-glyph"><Glyph t={r.glyph} size={3.4} /></span>
            <h2 className="qzs-resultaat-titel">{r.title}</h2>
            <p className="qzs-resultaat-sub">{r.sub}</p>
          </header>

          <main className="qzs-main">
            <div className="qzs-kaart">
              <h2>Wat dit betekent</h2>
              <p>{r.preview}</p>
              <div className="qzs-focus">
                {allesMax ? (
                  <>
                    <h4>Jouw aandachtspunten</h4>
                    <p>Op alle acht thema&rsquo;s scoorde je maximaal. Voor jou draait het niet om bijsturen maar om bijblijven.</p>
                  </>
                ) : (
                  <>
                    <h4>Waar voor jou het meest te winnen valt</h4>
                    {laagste.map(({ i }) => (
                      <p key={i}><span className="qzs-thema">{THEMES[i].label}.</span> {THEMES[i].tip}</p>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="qzs-kaart qzs-kaart--rand">
              <h2>Wat je nu kunt doen</h2>
              <p>{r.rapport}</p>
            </div>

            <div className="qzs-kaart qzs-cta">
              <p className="qzs-cta-label">Klaar voor de volgende stap?</p>
              <h3>{r.title}: de volgende stap</h3>
              <p>{r.ctaSub}</p>
              <a className="qzs-knop" href={CAL_LINK} target="_blank" rel="noopener noreferrer">Plan een kennismaking &rarr;</a>
              <p className="qzs-meer">Of <Link href={HOME}>lees meer over hoe ik werk</Link></p>
            </div>

            <div className="qzs-deel">
              <p>Deel je resultaat</p>
              <div className="qzs-deelknoppen">
                <a className="qzs-deelknop" href={`https://wa.me/?text=${encodeURIComponent(deelTekst)}`} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" /><path d="M8.8 9.3c.3 2.7 3.2 5.6 5.9 5.9l1.2-1.2-2-1.3-1 .7c-.9-.4-1.9-1.4-2.3-2.3l.7-1-1.3-2-1.2 1.2Z" /></svg>
                  WhatsApp
                </a>
                <a className="qzs-deelknop" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(deelUrl)}`} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4.5" /><circle cx="8.2" cy="8.4" r="0.9" fill="currentColor" stroke="none" /><path d="M8.2 11.2V17M12.2 17v-4c0-1.3 1-2.2 2.2-2.2s2.2.9 2.2 2.2v4" /></svg>
                  LinkedIn
                </a>
                <button className="qzs-deelknop" onClick={kopieer}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13.5a4 4 0 0 0 6 .5l2.5-2.5a4 4 0 1 0-5.7-5.7L11.5 7" /><path d="M14 10.5a4 4 0 0 0-6-.5L5.5 12.5a4 4 0 1 0 5.7 5.7L12.5 17" /></svg>
                  {kopieLabel}
                </button>
              </div>
            </div>
          </main>
        </>
      )}

      <footer className="c2-footer">
        <span>&copy; 2026 Kimberley van Ruiven</span>
        <Link href="/zo-werk-ik-met-ai">Zo werk ik met AI</Link>
        <Link href="/manifest">AI-manifest</Link>
        <Link href="/privacy">Privacybeleid</Link>
        <Link href={HOME}>Home</Link>
        <span>Gebouwd m&eacute;t AI, met een mens aan het stuur.</span>
      </footer>
    </div>
  );
}
