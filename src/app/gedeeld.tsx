'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Righteous, Noto_Sans_Javanese } from 'next/font/google';
import './concept2.css';

const display = Righteous({ weight: '400', subsets: ['latin'], variable: '--font-c2-display' });
const javanese = Noto_Sans_Javanese({ weight: '400', subsets: ['javanese'], variable: '--font-c2-jav' });

export const fontVars = `${display.variable} ${javanese.variable}`;

/* De twintig basisletters van de hanacaraka (aksara Jawa) */
export const AKSARA = ['ꦲ', 'ꦤ', 'ꦕ', 'ꦫ', 'ꦏ', 'ꦢ', 'ꦠ', 'ꦱ', 'ꦮ', 'ꦭ', 'ꦥ', 'ꦝ', 'ꦗ', 'ꦪ', 'ꦚ', 'ꦩ', 'ꦒ', 'ꦧ', 'ꦛ', 'ꦔ'];

/* Dé homepage van de nieuwe site. Nu nog /concept-2; bij livegang deze ene regel
   op '/' zetten en alle interne links binnen het concept-2-universum wijzen meteen goed. */
export const HOME = '/';

/* Hoekvariant B (gekozen 11 juli): het knipperoog uit het bril-kunstwerk als
   thuis-link linksboven, op alle pagina's behalve de homepage zelf.
   Bij hover kijkt de pupil naar links, richting huis. */
export function HoekThuis() {
  return (
    <Link className="c2-reach c2-hoek" href={HOME}>
      <svg className="c2-hoek-oog" width="26" height="16.12" viewBox="0 0 56 34" fill="none" stroke="#00218F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 17 Q28 -1 54 17 Q28 35 2 17 Z" />
        <g clipPath="url(#c2-hoek-oogvorm)">
          <circle className="c2-hoek-pupil" cx="28" cy="17" r="8" fill="#131313" stroke="none" />
          <circle className="c2-hoek-pupil" cx="31" cy="14" r="2.2" fill="#FCFCFC" stroke="none" />
        </g>
        <defs><clipPath id="c2-hoek-oogvorm"><path d="M2 17 Q28 -1 54 17 Q28 35 2 17 Z" /></clipPath></defs>
      </svg>
      <span>Kimberley van Ruiven</span>
    </Link>
  );
}

export function Glyph({ t, size = 1.7, snel = false }: { t: number; size?: number; snel?: boolean }) {
  const draai = t % 3 === 0;
  const rotf = (((t % 5) - 2) || 1) * 0.055;
  const duur = (draai ? 5 + (t % 4) : 2.4 + (t % 4) * 0.7) * (snel ? 0.45 : 1);
  return (
    <span className="c2-glyph-rot" data-rotf={rotf} aria-hidden="true">
      <span
        className={`c2-glyph${draai ? ' c2-glyph--spin' : ''}`}
        style={{ fontSize: `${size}rem`, animationDuration: `${duur}s`, animationDelay: `${(t % 7) * 0.3}s` }}
      >
        {AKSARA[t % AKSARA.length]}
      </span>
    </span>
  );
}

/* Losse aksara verspreid door een sectie: [teken, grootte(rem), left, top] */
export function Scatter({ items }: { items: Array<[number, number, string, string]> }) {
  return (
    <>
      {items.map(([t, size, left, top], i) => (
        /* Tekens onder de 40%-lijn krijgen --laag: op mobiel gaan die naar de
           onderrand van de sectie, anders vallen ze daar midden in de tekst */
        <span className={`c2-scatter${parseFloat(top) > 40 ? ' c2-scatter--laag' : ''}`} key={i} style={{ left, top }}>
          <Glyph t={t} size={size} />
        </span>
      ))}
    </>
  );
}

/* De body van de huidige site is zwart; op deze lichte pagina's zou dat als donkere
   rand doorschijnen bij overscroll. Licht maken zolang de pagina open staat. */
export function useLichteAchtergrond() {
  useEffect(() => {
    const vorig = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#FCFCFC';
    return () => { document.body.style.backgroundColor = vorig; };
  }, []);
}

/* Kinetische typografie: regels schuiven met scroll, elk hun eigen kant op */
export function useKinetiek() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lines = Array.from(document.querySelectorAll<HTMLElement>('.c2-line[data-speed]'));
    const glyphs = Array.from(document.querySelectorAll<HTMLElement>('.c2-glyph-rot[data-rotf]'));
    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      lines.forEach((el) => {
        const r = el.getBoundingClientRect();
        const rel = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `translateX(${rel * parseFloat(el.dataset.speed!) * 100}px)`;
      });
      const sy = window.scrollY;
      glyphs.forEach((el) => {
        el.style.transform = `rotate(${sy * parseFloat(el.dataset.rotf!)}deg)`;
      });
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
}

/* Schil voor tekstpagina's (privacy, zo-werk-ik-met-ai, 404) in dezelfde stijl als concept-2 */
export function C2Tekstpagina({ label, regels, bijgewerkt, intro, scatter, children }: {
  label: string;
  regels: string[];
  bijgewerkt?: string;
  intro?: React.ReactNode;
  scatter?: Array<[number, number, string, string]>;
  children: React.ReactNode;
}) {
  useLichteAchtergrond();
  useKinetiek();
  return (
    <div className={`c2-root ${fontVars}`}>
      <nav className="c2-top">
        <HoekThuis />
        <a className="c2-reach" href="mailto:info@kimberleyvanruiven.nl">Neem contact op</a>
      </nav>

      <header className="c2-section c2-tekst-kop">
        {scatter && <Scatter items={scatter} />}
        <p className="c2-eyebrow">{label}</p>
        <h1 className="c2-kinetic c2-tekst-titel">
          {regels.map((regel, i) => (
            <span
              key={i}
              className={`c2-line${i === 1 ? ' c2-line--indent1' : i >= 2 ? ' c2-line--indent2' : ''}`}
              data-speed={(i % 2 === 0 ? -0.4 : 0.4)}
            >
              {regel}
            </span>
          ))}
        </h1>
        {bijgewerkt && <p className="c2-grey c2-tekst-datum">Laatst bijgewerkt: {bijgewerkt}</p>}
        {intro && <div className="c2-tekst-intro">{intro}</div>}
      </header>

      <div className="c2-tekst-content">{children}</div>

      <footer className="c2-footer">
        <span>© 2026 Kimberley van Ruiven</span>
        <Link href="/zo-werk-ik-met-ai">Zo werk ik met AI</Link>
        <Link href="/manifest">AI-manifest</Link>
        <Link href="/privacy">Privacybeleid</Link>
        <Link href={HOME}>Home</Link>
        <span>Gebouwd mét AI, met een mens aan het stuur.</span>
      </footer>
    </div>
  );
}
