'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import './concept2.css';
import { Glyph, Scatter, useKinetiek, useLichteAchtergrond, useHtmlTaal, SCHIL, fontVars } from './gedeeld';
import { DIENSTEN } from './diensten/diensten';
import { HOME_INHOUD } from '../content/home';
import { DIENST_SLUGS } from '../content/paden';
import type { Alinea, KinRegel, Locale } from '../content/types';

const CAL_LINK = "https://calendar.app.google/douZqiDQ7p39Xf6u7";

/* Het sectiemenu in de topbalk (gekozen 18 juli): het oog uit het bril-kunstwerk staat
   rechts in de balk, vlak vóór de contactlink, en klapt zijwaarts uit naar de vier
   secties van deze pagina.

   Op smalle schermen past dat niet: taalwissel, oog, woorden en contactlink vragen samen
   ongeveer 565px en een telefoon is er 390. Daarom maken de taalwissel en de contactlink
   daar plaats zolang het menu open staat (.c2-top--wijkt). Dat is Kimberleys keuze; het
   alternatief (woorden onder de balk) staat in de aantekeningen.

   Het oog is 36px breed en daarmee 24px hoog, vrijwel gelijk aan de 22px van de
   taalwissel, zodat de balk niet merkbaar hoger wordt. Knipperen doet .c2-oog vanzelf,
   en de pupil wordt door hetzelfde effect aangestuurd als de bril onderaan de pagina. */
function SectieMenu({
  t,
  open,
  zetOpen,
}: {
  t: (typeof HOME_INHOUD)[Locale]['nav'];
  open: boolean;
  zetOpen: (v: boolean) => void;
}) {
  return (
    <span className="c2-sectiemenu">
      {open && (
        <span className="c2-sectiemenu-woorden">
          {t.secties.map((s) => (
            <a key={s.anker} href={s.anker} onClick={() => zetOpen(false)}>{s.tekst}</a>
          ))}
        </span>
      )}
      <button
        type="button"
        className="c2-sectiemenu-knop"
        onClick={() => zetOpen(!open)}
        aria-expanded={open}
        aria-label={open ? t.menuSluiten : t.menuLabel}
      >
        <svg width="36" height="23.8" viewBox="0 0 56 37" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <g className="c2-oog">
            <path d="M0 18 Q28 0 56 18 Q28 34 0 18 Z" />
            <g clipPath="url(#c2-menuoog)">
              <g className="c2-pupil">
                <circle cx="28" cy="17" r="8" fill="#131313" stroke="none" />
                <circle cx="31" cy="14" r="2.2" fill="#FCFCFC" stroke="none" />
              </g>
            </g>
            <path d="M6 28 Q28 36 50 28" strokeWidth="1.7" opacity="0.6" />
          </g>
          <defs><clipPath id="c2-menuoog"><path d="M0 18 Q28 0 56 18 Q28 34 0 18 Z" /></clipPath></defs>
        </svg>
      </button>
    </span>
  );
}

/* Kinetische titel: elke regel schuift met de scroll zijn eigen kant op. De regelopdeling
   komt uit het woordenboek, want die is taalgebonden. Inspringing volgt uit de index. */
function Kinetisch({ regels }: { regels: KinRegel[] }) {
  return (
    <>
      {regels.map((r, i) => (
        <span
          key={i}
          className={`c2-line${i === 1 ? ' c2-line--indent1' : i >= 2 ? ' c2-line--indent2' : ''}`}
          data-speed={r.speed}
        >
          {r.tekst}
        </span>
      ))}
    </>
  );
}

/* Lopende tekst met links erin: het woordenboek levert stukjes tekst en linkobjecten. */
function Rijk({ alinea }: { alinea: Alinea }) {
  return (
    <p>
      {alinea.map((deel, i) => {
        if (typeof deel === 'string') return <span key={i}>{deel}</span>;
        const klasse = `c2-a${deel.uitgelicht ? ' c2-a--uitgelicht' : ''}`;
        return deel.extern ? (
          <a key={i} className={klasse} href={deel.href} target="_blank" rel="noopener noreferrer">{deel.tekst}</a>
        ) : (
          <Link key={i} className={klasse} href={deel.href}>{deel.tekst}</Link>
        );
      })}
    </p>
  );
}

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

export default function Concept2Client({ locale = 'nl' }: { locale?: Locale }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const t = HOME_INHOUD[locale];
  const CASES = t.werk.kaarten;
  const GEDACHTEN = t.gedachten.kaarten;

  /* Interne paden verschillen per taal (zie content/paden.ts). Quiz, CO₂-calculator en de
     Nectar-demo blijven Nederlands en staan daarom in het woordenboek zelf. */
  const paden = locale === 'en'
    ? { manifest: '/en/manifesto', artikelen: '/en/articles', dienst: (s: string) => `/en/services/${DIENST_SLUGS[s]}` }
    : { manifest: '/manifest', artikelen: '/artikelen', dienst: (s: string) => `/diensten/${s}` };

  useLichteAchtergrond();
  useKinetiek();
  useHtmlTaal(locale);

  /* Sectiemenu in de topbalk. Escape sluit het: op smalle schermen verdwijnen de
     taalwissel en de contactlink zolang het open staat, dus er moet een uitweg zijn
     zonder precies het oog te hoeven raken. Klikken op een sectie sluit het ook. */
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const opToets = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', opToets);
    return () => window.removeEventListener('keydown', opToets);
  }, [menuOpen]);

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
    <div className={`c2-root ${fontVars}`} ref={rootRef} lang={locale}>

      <nav className={`c2-top${menuOpen ? ' c2-top--wijkt' : ''}`}>
        {/* Echte taalwissel: de hele pil is klikbaar naar de andere taal. */}
        <Link
          className="c2-lang"
          href={locale === 'nl' ? '/en' : '/'}
          hrefLang={locale === 'nl' ? 'en' : 'nl'}
          aria-label={locale === 'nl' ? 'Switch to English' : 'Bekijk deze pagina in het Nederlands'}
        >
          <span className={locale === 'nl' ? 'is-active' : 'is-idle'}>NL</span>
          <span className={`c2-lang-pill${locale === 'en' ? ' c2-lang-pill--en' : ''}`} aria-hidden="true" />
          <span className={locale === 'en' ? 'is-active' : 'is-idle'}>EN</span>
        </Link>
        <span className="c2-top-rechts">
          <SectieMenu t={t.nav} open={menuOpen} zetOpen={setMenuOpen} />
          <a className="c2-reach" href="mailto:info@kimberleyvanruiven.nl">{t.nav.contact}</a>
        </span>
      </nav>

      {/* Hero */}
      <header className="c2-hero">
        <Scatter items={[[8, 6.5, '56%', '6%'], [14, 3.6, '74%', '72%'], [3, 2.6, '38%', '82%']]} />
        <div>
          <p className="c2-eyebrow">{t.hero.eyebrow}</p>
          <h1 className="c2-kinetic c2-hero-title">
            <Kinetisch regels={t.hero.titel} />
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
        <p className="c2-eyebrow">{t.statement.eyebrow}</p>
        <div className="c2-kinetic" aria-label={t.statement.titel.map((r) => r.tekst).join(' ')}>
          <Kinetisch regels={t.statement.titel} />
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
            <p>{t.statement.kaart}</p>
          </div>
          {/* Mijn AI-manifest (gekozen variant H): stipje cirkelt om de woorden in het titel-font,
              rechts van het aksara-teken naast de kaart; klikbaar naar /manifest */}
          <Link href={paden.manifest} className="c2-manifest-orbit" aria-label={t.statement.orbitLabel}>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(0, 33, 143, 0.22)" strokeWidth="1" />
              <g className="c2-mo-stip"><circle cx="60" cy="15" r="3.4" fill="var(--c2-blue)" /></g>
            </svg>
            <span className="c2-mo-tekst">{t.statement.orbit}</span>
          </Link>
        </div>
      </section>

      {/* Over */}
      <section className="c2-section" id="over">
        <Scatter items={[[6, 4.4, '88%', '22%'], [10, 2.8, '88%', '92%']]} />
        <div className="c2-kinetic" aria-label={t.over.titel.map((r) => r.tekst).join(' ')}>
          <Kinetisch regels={t.over.titel} />
        </div>
        <div className="c2-over">
          <figure className="c2-photo">
            <img src="/kimberley.jpg" alt={t.over.fotoAlt} />
          </figure>
          <div>
            <p className="c2-eyebrow">{t.over.eyebrow}</p>
            <div className="c2-body">
              {t.over.alineas.map((a, i) => <Rijk key={i} alinea={a} />)}
            </div>
            <dl className="c2-meta">
              {t.over.meta.map((m) => (
                <div className="c2-meta-row" key={m.dt}><dt>{m.dt}</dt><dd>{m.dd}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="c2-glyphstrook" aria-hidden="true">
        <span className="c2-glyphstrook-item"><Glyph t={4} size={2.4} /></span>
        <span className="c2-glyphstrook-item c2-glyphstrook-item--r"><Glyph t={17} size={2.4} /></span>
      </div>

      {/* Diensten */}
      <section className="c2-section" id="diensten">
        <Scatter items={[[10, 5.6, '80%', '3%'], [15, 3, '68%', '72%']]} />
        <div className="c2-kinetic" aria-label={t.diensten.titel.map((r) => r.tekst).join('')}>
          <Kinetisch regels={t.diensten.titel} />
        </div>
        <div className="c2-kaartgrid">
          {DIENSTEN.flatMap((dienst, i) => {
            const d = locale === 'en' ? dienst.en : dienst;
            const kaart = (
              <Link className="c2-case c2-case--klik" key={dienst.slug} href={paden.dienst(dienst.slug)} title={t.diensten.leesMeerOver.replace('{naam}', d.naam)}>
                <span className="c2-case-symbol"><Glyph t={[1, 4, 7, 13, 16, 9, 2][i % 7]} size={2.9} /></span>
                <h3 className="c2-case-title">{d.naam}</h3>
                <p className="c2-case-desc">{d.desc}</p>
                <span className="c2-case-hover" aria-hidden="true">{t.diensten.leesVerder}</span>
              </Link>
            );
            if (i === 2) return [kaart, <KunstKaart vorm="megamendung" blauw key="kunst-megamendung" />];
            return [kaart];
          })}
        </div>
      </section>

      {/* Klantcitaat 1 — ECHT (Jasmijn de Jong, 10 juli 2026): ingekort uit haar bericht,
          woorden onaangepast op de ï na. In het Engels staat erbij dat het een vertaling is:
          een echte uitspraak van een klant geef je niet stilzwijgend in een andere taal weer. */}
      <figure className="c2-citaat">
        <span className="c2-citaat-teken" aria-hidden="true"><Glyph t={7} size={2.7} /></span>
        <blockquote>{t.citaten.na_diensten.tekst}</blockquote>
        <figcaption>
          {t.citaten.na_diensten.naam}
          {t.citaten.na_diensten.vertaald && <span className="c2-citaat-vertaald">{t.citaten.na_diensten.vertaald}</span>}
        </figcaption>
      </figure>

      {/* Speelse aksara-strook midden op de pagina */}
      <div className="c2-symbol-strip" aria-hidden="true">
        {[3, 11, 6, 0, 14, 8, 17, 5, 12].map((t, i) => <Glyph key={i} t={t} size={i % 3 === 1 ? 3.1 : 2.2} />)}
      </div>

      {/* Werk */}
      <section className="c2-section" id="werk">
        <Scatter items={[[1, 4.6, '84%', '4%']]} />
        <div className="c2-kinetic" aria-label={t.werk.titel.map((r) => r.tekst).join(' ')}>
          {/* Werk-titel springt bewust in, ook als er maar één regel is */}
          {t.werk.titel.map((r, i) => (
            <span key={i} className="c2-line c2-line--indent1" data-speed={r.speed}>{r.tekst}</span>
          ))}
        </div>
        <p className="c2-drag-hint" aria-hidden="true"><span>←</span> {t.werk.sleepHint} <span>→</span></p>
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
        <div className="c2-kinetic" aria-label={t.aanpak.titel.map((r) => r.tekst).join('')}>
          {/* Tweede regel springt hier extra ver in (indent2), afwijkend van het standaardpatroon */}
          {t.aanpak.titel.map((r, i) => (
            <span key={i} className={`c2-line${i === 1 ? ' c2-line--indent2' : ''}`} data-speed={r.speed}>{r.tekst}</span>
          ))}
        </div>
        <div className="c2-body c2-aanpak">
          {t.aanpak.alineas.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* Gedachten & artikelen (verhalend, forn-stories-stijl) */}
      <section className="c2-section" id="artikelen">
        <Scatter items={[[18, 4.5, '82%', '8%']]} />
        <Link className="c2-kinetic c2-kinetic--link" href={paden.artikelen} aria-label={t.gedachten.label}>
          <Kinetisch regels={t.gedachten.titel} />
        </Link>
        <p className="c2-drag-hint" aria-hidden="true"><span>←</span> {t.werk.sleepHint} <span>→</span></p>
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

      {/* Klantcitaat 2 — ECHT (Luciënne Bregman, 12 juli 2026), ingekort uit haar review */}
      <figure className="c2-citaat c2-citaat--r">
        <span className="c2-citaat-teken" aria-hidden="true"><Glyph t={12} size={2.7} /></span>
        <blockquote>{t.citaten.voor_contact.tekst}</blockquote>
        <figcaption>
          {t.citaten.voor_contact.naam}
          {t.citaten.voor_contact.vertaald && <span className="c2-citaat-vertaald">{t.citaten.voor_contact.vertaald}</span>}
        </figcaption>
      </figure>

      {/* Contact */}
      <section className="c2-section">
        <Scatter items={[[0, 5.4, '68%', '24%'], [9, 3.6, '84%', '62%']]} />
        <div className="c2-kinetic" aria-label={t.contact.titel.map((r) => r.tekst).join('')}>
          {t.contact.titel.map((r, i) => (
            <span key={i} className={`c2-line${i === 1 ? ' c2-line--indent2' : ''}`} data-speed={r.speed}>{r.tekst}</span>
          ))}
        </div>
        <div className="c2-body">
          <p className="c2-grey">{t.contact.body}</p>
        </div>
        <div className="c2-contact-links">
          <a className="c2-cta" href={CAL_LINK} target="_blank" rel="noopener noreferrer">{t.contact.cta}</a>
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
        {SCHIL[locale].links.map((l) => <Link key={l.href} href={l.href}>{l.tekst}</Link>)}
        <span>{t.footer.missie}</span>
      </footer>
    </div>
  );
}
