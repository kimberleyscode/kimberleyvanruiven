'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import './concept2.css';
import { Glyph, Scatter, useKinetiek, useLichteAchtergrond, fontVars } from './gedeeld';
import { DIENSTEN } from '../diensten/diensten';

const CAL_LINK = "https://calendar.app.google/douZqiDQ7p39Xf6u7";

/* Batik-geïnspireerde lijnmotieven voor de kunstkaartjes (moderne knipoog naar Indonesië).
   Elk motief beweegt doorlopend (forn-stijl); reduced-motion zet alles stil via concept2.css. */
function Kawung({ stroke }: { stroke: string }) {
  const rozetten: React.ReactNode[] = [];
  for (let x = 0; x < 3; x++) for (let y = 0; y < 2; y++) {
    const cx = 40 + x * 60, cy = 45 + y * 62;
    rozetten.push(
      <g
        key={`${x}-${y}`}
        className={`c2-kunst-rozet${(x + y) % 2 ? ' c2-kunst-rozet--terug' : ''}`}
        style={{ transformOrigin: `${cx}px ${cy}px`, animationDelay: `${(x * 2 + y) * -4.5}s` }}
      >
        {[45, 135, 225, 315].map((a) => (
          <ellipse key={a} cx={cx} cy={cy - 21} rx="8.5" ry="19" transform={`rotate(${a} ${cx} ${cy})`} />
        ))}
        <circle cx={cx} cy={cy} r="2.5" />
      </g>
    );
  }
  return <svg viewBox="0 0 200 155" fill="none" stroke={stroke} strokeWidth="1.3" style={{ width: '100%', height: 'auto' }}>{rozetten}</svg>;
}

function Parang({ stroke }: { stroke: string }) {
  const golven: React.ReactNode[] = [];
  for (let i = 0; i < 7; i++) {
    golven.push(<path key={i} className="c2-kunst-golf" style={{ animationDelay: `${i * 0.4}s` }} d={`M ${-30 + i * 36} 170 q 26 -28 16 -56 t 16 -56 t 16 -56`} />);
  }
  return <svg viewBox="0 0 200 155" fill="none" stroke={stroke} strokeWidth="1.3" style={{ width: '100%', height: 'auto' }}>{golven}</svg>;
}

function Truntum({ stroke }: { stroke: string }) {
  const sterren: React.ReactNode[] = [];
  for (let x = 0; x < 4; x++) for (let y = 0; y < 3; y++) {
    const cx = 28 + x * 48 + (y % 2) * 24, cy = 28 + y * 50;
    sterren.push(<g key={`${x}-${y}`} className="c2-kunst-ster" style={{ animationDelay: `${((x * 3 + y * 5) % 7) * 0.45}s` }}>
      <path d={`M ${cx} ${cy - 11} L ${cx} ${cy + 11} M ${cx - 11} ${cy} L ${cx + 11} ${cy} M ${cx - 7.5} ${cy - 7.5} L ${cx + 7.5} ${cy + 7.5} M ${cx - 7.5} ${cy + 7.5} L ${cx + 7.5} ${cy - 7.5}`} />
      <circle cx={cx} cy={cy} r="3.5" />
    </g>);
  }
  return <svg viewBox="0 0 200 155" fill="none" stroke={stroke} strokeWidth="1.2" style={{ width: '100%', height: 'auto' }}>{sterren}</svg>;
}

function Megamendung({ stroke }: { stroke: string }) {
  const wolken: React.ReactNode[] = [];
  [[52, 62], [136, 44], [92, 112], [168, 122], [24, 128]].forEach(([cx, cy], i) => {
    wolken.push(
      <g key={i} className="c2-kunst-wolk" style={{ animationDelay: `${i * -1.4}s`, animationDuration: `${4.5 + i * 0.7}s` }}>
        {[9, 16, 23].map((r) => (
          <path key={r} d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} />
        ))}
      </g>
    );
  });
  return <svg viewBox="0 0 200 155" fill="none" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" style={{ width: '100%', height: 'auto' }}>{wolken}</svg>;
}

function KunstKaart({ vorm, blauw = false }: { vorm: 'kawung' | 'parang' | 'truntum' | 'megamendung'; blauw?: boolean }) {
  const stroke = blauw ? 'rgba(252, 252, 252, 0.92)' : '#00218F';
  return (
    <div className={`c2-case c2-case--kunst${blauw ? ' c2-case--kunst-blauw' : ''}`} aria-hidden="true">
      {vorm === 'kawung' ? <Kawung stroke={stroke} /> : vorm === 'parang' ? <Parang stroke={stroke} /> : vorm === 'megamendung' ? <Megamendung stroke={stroke} /> : <Truntum stroke={stroke} />}
      <span className="c2-kunst-label">{vorm}</span>
    </div>
  );
}

const CASES = [
  { sym: 6, meta: 'Interactieve tool · Next.js', titel: 'Quiz: gebruik jij AI, of gebruikt AI jou?', desc: 'Vijf minuten spelen, direct zicht op hoe bewust je met AI omgaat.', href: '/concept-2/quiz', linktekst: 'Doe de quiz →', extern: false },
  { sym: 5, meta: 'Webtool · Next.js · Claude API', titel: 'AI CO₂-calculator', desc: 'In één minuut inzicht in de klimaatimpact van je AI-gebruik, met groenere alternatieven. Gebouwd op wetenschappelijke bronnen.', href: '/concept-2/co2', linktekst: 'Bekijk de calculator →', extern: false },
  // De demo is een losse statische app in public/nectar (geen Next-route), dus als <a> en niet als Link.
  { sym: 0, meta: 'PWA · D3 · offline-first', titel: 'Nectar, privacyvriendelijke cyclustracker', desc: 'Alle data blijft op je eigen apparaat: geen account, geen server, wél inzicht.', href: '/nectar', linktekst: 'Bekijk de demo →', extern: true },
  { sym: 1, meta: 'LLM-integratie · GDPR · Claude', titel: 'GDPR-compliant AI-chatbot', desc: 'Leden krijgen dag en nacht antwoord zonder extra personeel, en de privacy is contractueel geregeld via een AI-addendum.', href: null, linktekst: null, extern: false },
  { sym: 3, meta: 'Promptontwerp · Whisper · Claude', titel: 'AI-persona voor content', desc: 'Een getrainde schrijfassistent op basis van merkdocumenten en voice notes: content die klinkt als de klant zelf.', href: null, linktekst: null, extern: false },
  { sym: 4, meta: 'WordPress · security · SEO', titel: 'Site gered na malware', desc: 'Ruim 100 verdachte bestanden opgeruimd, plugins gesaneerd, site beveiligd en SEO geoptimaliseerd.', href: null, linktekst: null, extern: false },
  { sym: 2, meta: 'Systeemontwerp · Notion', titel: 'Klantportaal-systeem', desc: 'Klanten kijken gestructureerd mee in lopende projecten; gegevens strikt gescheiden per portaal.', href: null, linktekst: null, extern: false },
  { sym: 7, meta: 'Systeemontwerp · Notion · rollups', titel: 'Cursusomgeving', desc: 'Lessen, cursisten en voortgang op één plek, zonder de kosten van een leerplatform.', href: null, linktekst: null, extern: false },
];

const GEDACHTEN = [
  { sym: 13, cat: 'Machine learning', titel: 'Machine learning of generatieve AI: het verschil bepaalt welk risico je loopt', status: null, href: '/concept-2/artikelen/machine-learning-of-generatieve-ai', linktekst: 'Lees het artikel →' },
  { sym: 9, cat: 'Systems architecture', titel: 'Waarom de meeste AI-problemen eigenlijk architectuurproblemen zijn', status: null, href: '/concept-2/artikelen/ai-problemen-zijn-architectuurproblemen', linktekst: 'Lees het artikel →' },
  { sym: 8, cat: 'NLP', titel: 'Het taalmodel dat je al jaren gebruikt zonder het te weten', status: null, href: '/concept-2/artikelen/google-bert-en-chatgpt', linktekst: 'Lees het artikel →' },
  { sym: 15, cat: 'AI-ethiek', titel: 'Volwassen worden in AI-ethiek, en waarom je geen tien hoeft te scoren', status: null, href: '/concept-2/artikelen/volwassen-worden-in-ai-ethiek', linktekst: 'Lees het artikel →' },
  { sym: 10, cat: 'Humane technologie', titel: 'Technologie die de mens ziet, en het manifest waar ik mijn werk langs leg', status: null, href: '/concept-2/artikelen/technologie-die-de-mens-ziet', linktekst: 'Lees het artikel →' },
  { sym: 16, cat: 'EU AI Act', titel: 'Wat de AI Act echt van je vraagt als ondernemer (en wat niet)', status: null, href: '/concept-2/artikelen/ai-act-voor-ondernemers', linktekst: 'Lees het artikel →' },
  { sym: 11, cat: 'Privacy', titel: 'De klantdata die je per ongeluk met ChatGPT deelt', status: null, href: '/concept-2/artikelen/klantdata-en-chatgpt', linktekst: 'Lees het artikel →' },
  { sym: 4, cat: 'Onderzoek · NLP', titel: 'Algoritmes die online haat moeten herkennen, en zelf bevooroordeeld blijken', status: null, href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter', linktekst: 'Bekijk het onderzoek op GitHub →' },
  { sym: 7, cat: 'Machine learning · NLP', titel: 'Hoe ik 1300 tweets labelde en een BERT-model trainde dat haatspraak herkent', status: null, href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter/blob/master/BERT_sentence_classification.ipynb', linktekst: 'Bekijk het BERT-notebook →' },
  { sym: 5, cat: 'Leeslijst', titel: 'De boeken die mijn kijk op AI en menselijkheid vormden', status: null, href: '/manifest', linktekst: 'Bekijk de leeslijst →' },
];


export default function Concept2Client() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLichteAchtergrond();
  useKinetiek();

  /* Drag-carousels */
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>('.c2-carousel').forEach((el) => {
      let down = false, startX = 0, startScroll = 0, gesleept = false;
      const onDown = (e: PointerEvent) => { down = true; gesleept = false; startX = e.clientX; startScroll = el.scrollLeft; el.classList.add('is-dragging'); };
      const onMove = (e: PointerEvent) => {
        if (!down) return;
        if (Math.abs(e.clientX - startX) > 8) gesleept = true;
        el.scrollLeft = startScroll - (e.clientX - startX);
      };
      const onUp = () => { down = false; el.classList.remove('is-dragging'); };
      const onClick = (e: MouseEvent) => { if (gesleept) { e.preventDefault(); e.stopPropagation(); } };
      el.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      el.addEventListener('click', onClick, true);
      cleanups.push(() => { el.removeEventListener('pointerdown', onDown); window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); el.removeEventListener('click', onClick, true); });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* Pupillen van de bril kijken naar de muis */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ogen = Array.from(document.querySelectorAll<SVGGElement>('.c2-oog')).map((oog) => ({
      vorm: oog.querySelector<SVGPathElement>('path'),
      pupil: oog.querySelector<SVGGElement>('.c2-pupil'),
    })).filter((p) => p.vorm && p.pupil);
    if (!ogen.length) return;
    let raf = 0, mx = -1, my = -1;
    const update = () => {
      ogen.forEach(({ vorm, pupil }) => {
        const r = vorm!.getBoundingClientRect();
        const dx = mx - (r.left + r.width / 2), dy = my - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy) || 1;
        const f = Math.min(1, d / 320);
        pupil!.style.transform = `translate(${(dx / d) * f * 10}px, ${(dy / d) * f * 4}px)`;
      });
      raf = 0;
    };
    const onMove = (e: PointerEvent) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className={`c2-root ${fontVars}`} ref={rootRef}>

      <nav className="c2-top">
        <span className="c2-lang" title="Conceptweergave: taalwissel zoals op forn.dk">
          <span className="is-active">NL</span>
          <span className="c2-lang-pill" aria-hidden="true" />
          <span className="is-idle">EN</span>
        </span>
        <a className="c2-reach" href="mailto:info@kimberleyvanruiven.nl">Neem contact op</a>
      </nav>

      {/* Hero */}
      <header className="c2-hero">
        <Scatter items={[[8, 6.5, '56%', '6%'], [14, 3.6, '74%', '72%'], [3, 2.6, '38%', '82%']]} />
        <div>
          <p className="c2-eyebrow">Kimberley van Ruiven · Ethische AI-adviseur voor het mkb · Rotterdam</p>
          <h1 className="c2-kinetic c2-hero-title">
            <span className="c2-line" data-speed="-0.5">Een mens-gerichte</span>
            <span className="c2-line c2-line--indent1" data-speed="0.5">toekomst met</span>
            <span className="c2-line c2-line--indent2" data-speed="-0.45">technologie</span>
          </h1>
        </div>
        <div className="c2-symbol-col" aria-hidden="true">
          {[1, 5, 0, 2, 6, 3, 4, 9, 12, 15, 18, 7].map((t, i) => (
            <Glyph key={i} t={t} size={i % 3 === 0 ? 3.2 : 2.3} snel />
          ))}
        </div>
      </header>

      {/* Statement */}
      <section className="c2-section">
        <Scatter items={[[2, 5.2, '80%', '8%'], [19, 3.1, '64%', '60%']]} />
        <p className="c2-eyebrow">Ik bouw</p>
        <div className="c2-kinetic" aria-label="AI waar je achter kunt staan">
          <span className="c2-line" data-speed="-0.6">AI</span>
          <span className="c2-line c2-line--indent1" data-speed="0.5">waar je achter</span>
          <span className="c2-line c2-line--indent2" data-speed="-0.4">kunt staan</span>
        </div>
        <div className="c2-statement-rij">
          {/* Gevulde halve cirkel van aksara (ringen + middelpunt): rechte kant tegen de
              schermrand, bolle kant naar de tekst */}
          <div className="c2-halvecirkel" aria-hidden="true">
            {/* Ringen van binnen naar buiten; alle tekens even groot voor een strak beeld */}
            {([[1, 14], [0.75, 10], [0.5, 7], [0.25, 4]] as Array<[number, number]>).flatMap(([f, aantal], ring) =>
              Array.from({ length: aantal }, (_, i) => {
                const hoek = ((-90 + (180 / (aantal - 1)) * i) * Math.PI) / 180;
                const t = (ring * 13 + i * 3 + 1) % 20;
                return (
                  <span
                    key={`${ring}-${i}`}
                    className="c2-hc-item"
                    style={{ left: `${Math.cos(hoek) * f * 100}%`, top: `${50 + Math.sin(hoek) * f * 50}%` }}
                  >
                    <Glyph t={t} size={1.9} />
                  </span>
                );
              })
            )}
            <span className="c2-hc-item" style={{ left: '0%', top: '50%' }}><Glyph t={16} size={1.9} /></span>
          </div>
          <div className="c2-card">
            <p>De vorm die AI krijgt, is een keuze. Ook die van jou. Ik heb AI-bias wetenschappelijk onderzocht en bouw AI-systemen. Mijn focus is AI die bij jouw organisatie klopt: ik ben er voor kleine en middelgrote organisaties die kiezen voor een mens-gerichte toekomst met technologie.</p>
          </div>
          {/* Mijn AI-manifest (gekozen variant H): stipje cirkelt om de woorden in het titel-font,
              rechts van het aksara-teken naast de kaart; klikbaar naar /manifest */}
          <Link href="/manifest" className="c2-manifest-orbit" aria-label="Lees mijn AI-manifest">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(0, 33, 143, 0.22)" strokeWidth="1" />
              <g className="c2-mo-stip"><circle cx="60" cy="15" r="3.4" fill="var(--c2-blue)" /></g>
            </svg>
            <span className="c2-mo-tekst">Mijn AI-manifest</span>
          </Link>
        </div>
      </section>

      {/* Over */}
      <section className="c2-section">
        <Scatter items={[[6, 4.4, '88%', '22%'], [10, 2.8, '88%', '92%']]} />
        <div className="c2-kinetic" aria-label="Over">
          <span className="c2-line" data-speed="-0.5">Over</span>
        </div>
        <div className="c2-over">
          <figure className="c2-photo">
            <img src="/kimberley.jpg" alt="Portret van Kimberley van Ruiven" />
          </figure>
          <div>
            <p className="c2-eyebrow">Een technische kijk door een menselijke bril</p>
            <div className="c2-body">
              <p>Ik ben Kimberley, voormalig IT-consultant, gespecialiseerd in ethische AI en AI-bias. Ik help kleine en middelgrote organisaties om AI verantwoord in te voeren: van beleid en training tot systemen die ik zelf bouw. Ik bouw systemen die mij niet nodig zouden moeten hebben, en ik denk vooraf na over de vragen die anderen pas stellen als het misgaat.</p>
              <p>AI staat niet stil, en de regels ook niet: de AI Act rolt tot in 2027 uit en elke nieuwe tool in je organisatie vraagt om een nieuwe afweging. Daarom blijf ik ook na een project beschikbaar als vast aanspreekpunt.</p>
              <p>Ik geloof dat technologie en menselijkheid samen kunnen gaan, en dat vrouwelijke perspectieven onmisbaar zijn in hoe we AI bouwen en gebruiken. Vandaar ook de Indonesische aksara en batikpatronen die door deze site bewegen: een eerbetoon aan de Javaanse roots die ik via mijn moeder heb meegekregen. Benieuwd hoe ik zelf met AI werk? Ik leg het volledig open in <Link className="c2-a c2-a--uitgelicht" href="/zo-werk-ik-met-ai">zo werk ik met AI</Link>.</p>
              {/* Zodra de definitieve scriptie-PDF er is: link vervangen door /scriptie.pdf */}
              <p>Mijn afstudeeronderzoek ging over AI-bias in hate speech-detectie: hoe algoritmes die online haat moeten herkennen zelf bevooroordeeld kunnen zijn. Dat onderzoek bepaalt tot vandaag hoe ik naar elk AI-systeem kijk; <a className="c2-a" href="https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter" target="_blank" rel="noopener noreferrer">bekijk het onderzoek op GitHub</a>. Die wetenschappelijke basis is gebleven: voor AI-ethiek in organisaties werk ik met het volwassenheidsmodel van de Erasmus Universiteit, en mijn kijk op humane technologie is gevormd door het gedachtegoed van het Center for Humane Technology.</p>
            </div>
            <dl className="c2-meta">
              <div className="c2-meta-row"><dt>Achtergrond</dt><dd>MSc Information Studies · bank, pensioenfonds, IT-startup</dd></div>
              <div className="c2-meta-row"><dt>Onderzoek</dt><dd>AI-bias in hate speech-detectie</dd></div>
              <div className="c2-meta-row"><dt>Kompas</dt><dd>Center for Humane Technology · AI ethics maturity model (Erasmus)</dd></div>
              <div className="c2-meta-row"><dt>Gereedschap</dt><dd>Linux (Ubuntu) · TypeScript · React · Next.js · Tailwind · D3 · Jupyter Notebook · Vercel · Claude Code · Codex · Cursor · VS Code · Git</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <div className="c2-glyphstrook" aria-hidden="true">
        <span className="c2-glyphstrook-item"><Glyph t={4} size={2.4} /></span>
        <span className="c2-glyphstrook-item c2-glyphstrook-item--r"><Glyph t={17} size={2.4} /></span>
      </div>

      {/* Diensten */}
      <section className="c2-section">
        <Scatter items={[[10, 5.6, '80%', '3%'], [15, 3, '68%', '72%']]} />
        <div className="c2-kinetic" aria-label="Diensten">
          <span className="c2-line" data-speed="0.55">Dien</span>
          <span className="c2-line c2-line--indent1" data-speed="-0.5">sten</span>
        </div>
        <div className="c2-kaartgrid">
          {DIENSTEN.flatMap((d, i) => {
            const kaart = (
              <Link className="c2-case c2-case--klik" key={d.naam} href={`/diensten/${d.slug}`} title={`Lees meer over ${d.naam}`}>
                <span className="c2-case-symbol"><Glyph t={[1, 4, 7, 13, 16, 9, 2][i % 7]} size={2.9} /></span>
                <h3 className="c2-case-title">{d.naam}</h3>
                <p className="c2-case-desc">{d.desc}</p>
                <span className="c2-case-hover" aria-hidden="true">Lees verder →</span>
              </Link>
            );
            if (i === 2) return [kaart, <KunstKaart vorm="megamendung" blauw key="kunst-megamendung" />];
            return [kaart];
          })}
        </div>
      </section>

      {/* Klantcitaat 1 — ECHT (Jasmijn de Jong, 10 juli 2026): ingekort uit haar bericht,
          woorden onaangepast op de ï na */}
      <figure className="c2-citaat">
        <span className="c2-citaat-teken" aria-hidden="true"><Glyph t={7} size={2.7} /></span>
        <blockquote>Wat geweldig dit! Ik krijg hier zoveel mooie en bruikbare informatie uit. Ik wist niet dat dit zo mooi zou kunnen werken.</blockquote>
        <figcaption>Jasmijn de Jong · Kindervoedingscoach</figcaption>
      </figure>

      {/* Speelse aksara-strook midden op de pagina */}
      <div className="c2-symbol-strip" aria-hidden="true">
        {[3, 11, 6, 0, 14, 8, 17, 5, 12].map((t, i) => <Glyph key={i} t={t} size={i % 3 === 1 ? 3.1 : 2.2} />)}
      </div>

      {/* Werk */}
      <section className="c2-section">
        <Scatter items={[[1, 4.6, '84%', '4%']]} />
        <div className="c2-kinetic" aria-label="Werk">
          <span className="c2-line c2-line--indent1" data-speed="-0.55">Werk</span>
        </div>
        <p className="c2-drag-hint" aria-hidden="true"><span>←</span> drag <span>→</span></p>
        <div className="c2-carousel c2-carousel--groot">
          {CASES.map((c) => {
            const inhoud = (
              <>
                <span className="c2-case-symbol"><Glyph t={c.sym} size={2.3} /></span>
                <span className="c2-case-meta">{c.meta}</span>
                <h3 className="c2-case-title">{c.titel}</h3>
                <p className="c2-case-desc">{c.desc}</p>
                {c.href && <span className="c2-case-hover" aria-hidden="true">{c.linktekst}</span>}
              </>
            );
            return c.href ? (
              c.extern
                ? <a className="c2-case c2-case--klik" key={c.titel} href={c.href} target="_blank" rel="noopener noreferrer">{inhoud}</a>
                : <Link className="c2-case c2-case--klik" key={c.titel} href={c.href}>{inhoud}</Link>
            ) : <article className="c2-case" key={c.titel}>{inhoud}</article>;
          })}
        </div>
      </section>

      {/* Aanpak */}
      <section className="c2-section">
        <Scatter items={[[12, 6, '78%', '8%'], [5, 3.3, '66%', '76%']]} />
        <div className="c2-kinetic" aria-label="Aanpak">
          <span className="c2-line" data-speed="0.5">Aan</span>
          <span className="c2-line c2-line--indent2" data-speed="-0.45">pak</span>
        </div>
        <div className="c2-body c2-aanpak">
          <p>We beginnen bij de vraag achter de vraag. Soms is het antwoord AI, soms een beter proces; je krijgt altijd een eerlijk antwoord.</p>
          <p>Daarna denk ik vooraf na over wat er mis kan gaan. Data, privacy, bias en verantwoordelijkheid staan bij mij aan het begin, niet als voetnoot achteraf.</p>
          <p>Dan bouw ik wat je nodig hebt: iets wat je organisatie direct kan gebruiken, met de ethische keuzes al verwerkt.</p>
          <p>En daarna sta je er niet alleen voor. Via de strippenkaart of een losse sessie houd je een aanspreekpunt dat je systemen kent en meteen weet waar je het over hebt.</p>
        </div>
      </section>

      {/* Gedachten & artikelen (verhalend, forn-stories-stijl) */}
      <section className="c2-section">
        <Scatter items={[[18, 4.5, '82%', '8%']]} />
        <Link className="c2-kinetic c2-kinetic--link" href="/concept-2/artikelen" aria-label="Gedachten en artikelen: naar het artikeloverzicht">
          <span className="c2-line" data-speed="-0.5">Gedach</span>
          <span className="c2-line c2-line--indent1" data-speed="0.45">ten &amp;</span>
          <span className="c2-line c2-line--indent2" data-speed="-0.4">artikelen</span>
        </Link>
        <p className="c2-drag-hint" aria-hidden="true"><span>←</span> drag <span>→</span></p>
        <div className="c2-carousel c2-carousel--groot">
          {GEDACHTEN.flatMap((g, i) => {
            const inhoud = (
              <>
                <span className="c2-case-symbol"><Glyph t={g.sym} size={2.3} /></span>
                <span className="c2-case-meta">{g.cat}</span>
                <h3 className="c2-case-title c2-case-title--verhaal">{g.titel}</h3>
                {!g.href && <span className="c2-case-meta" style={{ fontStyle: 'italic' }}>{g.status}</span>}
                {g.href && <span className="c2-case-hover" aria-hidden="true">{g.linktekst}</span>}
              </>
            );
            const kaart = g.href ? (
              g.href.startsWith('http')
                ? <a className="c2-case c2-case--klik" key={g.titel} href={g.href} target="_blank" rel="noopener noreferrer">{inhoud}</a>
                : <Link className="c2-case c2-case--klik" key={g.titel} href={g.href}>{inhoud}</Link>
            ) : <article className="c2-case" key={g.titel}>{inhoud}</article>;
            if (i === 1) return [kaart, <KunstKaart vorm="kawung" key="kunst-kawung" />];
            if (i === 3) return [kaart, <KunstKaart vorm="parang" blauw key="kunst-parang" />];
            if (i === 5) return [kaart, <KunstKaart vorm="truntum" key="kunst-truntum" />];
            return [kaart];
          })}
        </div>
      </section>

      {/* Gunungan: de wayang-levensboom die de overgang naar contact markeert */}
      <div className="c2-kunst-boven" aria-hidden="true">
        <svg viewBox="0 0 260 400" fill="none" stroke="#00218F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="c2-gunungan">
          <path className="gun-vorm" pathLength={1} d="M130 12 C168 70 196 140 198 210 C200 270 188 330 130 380 C72 330 60 270 62 210 C64 140 92 70 130 12 Z" />
          <g className="gun-vleugel">
            <path pathLength={1} d="M62 300 Q34 316 26 344 Q56 340 74 322" />
            <path pathLength={1} d="M198 300 Q226 316 234 344 Q204 340 186 322" />
          </g>
          <g className="gun-lijn">
            <path pathLength={1} d="M130 60 V352" />
            <path pathLength={1} d="M130 110 Q104 102 92 82" /><path pathLength={1} d="M130 110 Q156 102 168 82" />
            <path pathLength={1} d="M130 160 Q98 152 84 128" /><path pathLength={1} d="M130 160 Q162 152 176 128" />
            <path pathLength={1} d="M130 214 Q94 206 78 178" /><path pathLength={1} d="M130 214 Q166 206 182 178" />
            <path pathLength={1} d="M130 268 Q98 262 86 236" /><path pathLength={1} d="M130 268 Q162 262 174 236" />
            <circle pathLength={1} cx="92" cy="80" r="5" /><circle pathLength={1} cx="168" cy="80" r="5" />
            <circle pathLength={1} cx="84" cy="126" r="5" /><circle pathLength={1} cx="176" cy="126" r="5" />
            <circle pathLength={1} cx="78" cy="176" r="5" /><circle pathLength={1} cx="182" cy="176" r="5" />
            <circle pathLength={1} cx="86" cy="234" r="5" /><circle pathLength={1} cx="174" cy="234" r="5" />
            <circle pathLength={1} cx="130" cy="40" r="6" />
            {[45, 135, 225, 315].map((a) => (
              <ellipse key={a} pathLength={1} cx="130" cy="320" rx="4" ry="10" transform={`rotate(${a} 130 330)`} />
            ))}
          </g>
        </svg>
      </div>

      {/* Kunststrook: de menselijke bril, pootjes lopen door in de circuitsporen */}
      <div className="c2-kunststrook" aria-hidden="true">
        <svg className="c2-trace" viewBox="0 0 400 150" preserveAspectRatio="none" fill="none" stroke="#00218F" strokeWidth="1.6">
          <path d="M0 26 H180 l24 18 H336" />
          <path d="M0 56 H400" />
          <path d="M0 86 H150 l20 -16 H320" />
          <circle cx="336" cy="44" r="4" /><circle cx="120" cy="56" r="4" /><circle cx="320" cy="70" r="4" />
        </svg>
        <span className="c2-zweef c2-zweef--zij c2-zweef--zij-l" style={{ color: '#00218F' }}><Glyph t={5} size={3.1} /></span>
        <span className="c2-zweef c2-zweef--b">
          <svg viewBox="0 0 360 150" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="c2-bril">
            <defs>
              <clipPath id="c2-oogvorm-l"><path d="M66 80 Q94 62 122 80 Q94 96 66 80 Z" /></clipPath>
              <clipPath id="c2-oogvorm-r"><path d="M238 80 Q266 62 294 80 Q266 96 238 80 Z" /></clipPath>
            </defs>
            {/* Ronde monturen (variant F2); pootjes lopen door tot de rand, tegen de circuitsporen aan */}
            <circle cx="94" cy="78" r="45" />
            <circle cx="266" cy="78" r="45" />
            <path d="M139 72 Q180 58 221 72" />
            <path d="M49 68 L18 56 H0" />
            <path d="M311 68 L342 56 H360" />
            {/* Amandelogen met onderlidje; knipperen af en toe (.c2-oog), pupillen volgen de muis (.c2-pupil) */}
            <g className="c2-oog" strokeWidth="1.8">
              <path d="M66 80 Q94 62 122 80 Q94 96 66 80 Z" />
              <g clipPath="url(#c2-oogvorm-l)">
                <g className="c2-pupil">
                  <circle cx="94" cy="79" r="8" fill="#131313" stroke="none" />
                  <circle cx="97" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
                </g>
              </g>
              <path d="M72 90 Q94 98 116 90" strokeWidth="1.3" opacity="0.6" />
            </g>
            <g className="c2-oog" strokeWidth="1.8">
              <path d="M238 80 Q266 62 294 80 Q266 96 238 80 Z" />
              <g clipPath="url(#c2-oogvorm-r)">
                <g className="c2-pupil">
                  <circle cx="266" cy="79" r="8" fill="#131313" stroke="none" />
                  <circle cx="269" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
                </g>
              </g>
              <path d="M244 90 Q266 98 288 90" strokeWidth="1.3" opacity="0.6" />
            </g>
          </svg>
        </span>
        <span className="c2-zweef c2-zweef--zij c2-zweef--zij-r" style={{ color: '#00218F' }}><Glyph t={16} size={3.1} /></span>
        <svg className="c2-trace c2-trace--spiegel" viewBox="0 0 400 150" preserveAspectRatio="none" fill="none" stroke="#00218F" strokeWidth="1.6">
          <path d="M0 26 H180 l24 18 H336" />
          <path d="M0 56 H400" />
          <path d="M0 86 H150 l20 -16 H320" />
          <circle cx="336" cy="44" r="4" /><circle cx="120" cy="56" r="4" /><circle cx="320" cy="70" r="4" />
        </svg>
      </div>

      {/* Klantcitaat 2 — DUMMY: tekst en naam vervangen door echte review zodra Kimberley die aanlevert */}
      <figure className="c2-citaat c2-citaat--r">
        <span className="c2-citaat-teken" aria-hidden="true"><Glyph t={12} size={2.7} /></span>
        <blockquote>Ze bouwde precies wat we nodig hadden en legde bij elke stap uit wat er gebeurde. Zo voelt AI eindelijk als iets van onszelf.</blockquote>
        <figcaption>[Naam] · [Rol, bedrijf]</figcaption>
      </figure>

      {/* Contact */}
      <section className="c2-section">
        <Scatter items={[[0, 5.4, '68%', '24%'], [9, 3.6, '84%', '62%']]} />
        <div className="c2-kinetic" aria-label="Contact">
          <span className="c2-line" data-speed="0.5">Con</span>
          <span className="c2-line c2-line--indent2" data-speed="-0.5">tact</span>
        </div>
        <div className="c2-body">
          <p className="c2-grey">Benieuwd wat een mens-gerichte toekomst met technologie voor jouw organisatie betekent? Ik denk graag mee.</p>
        </div>
        <div className="c2-contact-links">
          <a className="c2-cta" href={CAL_LINK} target="_blank" rel="noopener noreferrer">Plan een kennismaking</a>
          <a className="c2-icon-btn" href="mailto:info@kimberleyvanruiven.nl" aria-label="E-mail" title="E-mail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="M3.5 7l8.5 6 8.5-6" /></svg>
          </a>
          <a className="c2-icon-btn" href="https://www.linkedin.com/in/kimberleyvanruiven" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4.5" /><circle cx="8.2" cy="8.4" r="0.9" fill="currentColor" stroke="none" /><path d="M8.2 11.2V17M12.2 17v-4c0-1.3 1-2.2 2.2-2.2s2.2.9 2.2 2.2v4" /></svg>
          </a>
          <a className="c2-icon-btn" href="https://github.com/kimberleyscode" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6.5" cy="5.5" r="2.2" /><circle cx="6.5" cy="18.5" r="2.2" /><circle cx="17.5" cy="7.5" r="2.2" /><path d="M6.5 7.7v8.6M17.5 9.7c0 3.6-5.5 2.6-9 5.4" /></svg>
          </a>
        </div>
      </section>

      {/* Aksara-veld (forn heeft runen; dit is het Javaanse hanacaraka-alfabet) */}
      <div className="c2-symbol-field" aria-hidden="true">
        {[6, 4, 8, 3, 7, 5, 9, 4, 6, 3, 8, 5, 7, 4, 6, 3, 7, 5].map((n, col) => (
          <div className="c2-symbol-stack" key={col}>
            {Array.from({ length: n }).map((_, i) => <Glyph key={i} t={col * 3 + i * 5 + 2} size={2.8} snel />)}
          </div>
        ))}
      </div>

      <footer className="c2-footer">
        <span>© 2026 Kimberley van Ruiven</span>
        <Link href="/zo-werk-ik-met-ai">Zo werk ik met AI</Link>
        <Link href="/manifest">AI-manifest</Link>
        <Link href="/privacy">Privacybeleid</Link>
        <span>Gebouwd mét AI, met een mens aan het stuur.</span>
      </footer>
    </div>
  );
}
