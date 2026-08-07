'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Righteous, Noto_Sans_Javanese } from 'next/font/google';
import './concept2.css';
import type { Locale } from '../content/types';

const display = Righteous({ weight: '400', subsets: ['latin'], variable: '--font-c2-display' });
const javanese = Noto_Sans_Javanese({ weight: '400', subsets: ['javanese'], variable: '--font-c2-jav' });

export const fontVars = `${display.variable} ${javanese.variable}`;

/* De twintig basisletters van de hanacaraka (aksara Jawa) */
export const AKSARA = ['ꦲ', 'ꦤ', 'ꦕ', 'ꦫ', 'ꦏ', 'ꦢ', 'ꦠ', 'ꦱ', 'ꦮ', 'ꦭ', 'ꦥ', 'ꦝ', 'ꦗ', 'ꦪ', 'ꦚ', 'ꦩ', 'ꦒ', 'ꦧ', 'ꦛ', 'ꦔ'];

/* De homepage per taal: Nederlands staat op de wortel, Engels onder /en. */
export const HOME = '/';
export const thuis = (locale: Locale) => (locale === 'en' ? '/en' : '/');

/* Teksten van de schil (topbalk, footer) en de paden van de footerlinks per taal. */
export const SCHIL = {
  nl: {
    contact: 'Neem contact op',
    bijgewerkt: 'Laatst bijgewerkt:',
    missie: 'Deze website is gebouwd met AI-ondersteuning, met een mens aan het stuur.',
    links: [
      { href: '/zo-werk-ik-met-ai', tekst: 'Zo werk ik met AI' },
      { href: '/manifest', tekst: 'AI-manifest' },
      { href: '/privacy', tekst: 'Privacybeleid' },
      { href: '/algemene-voorwaarden', tekst: 'Algemene voorwaarden' },
    ],
    home: 'Home',
    secties: [
      { tekst: 'Over', anker: '#over' },
      { tekst: 'Diensten', anker: '#diensten' },
      { tekst: 'Werk', anker: '#werk' },
      { tekst: 'Artikelen', anker: '#artikelen' },
    ],
  },
  en: {
    contact: 'Get in touch',
    bijgewerkt: 'Last updated:',
    missie: 'This website was built with AI support, with a human at the wheel.',
    links: [
      { href: '/en/how-i-work-with-ai', tekst: 'How I work with AI' },
      { href: '/en/manifesto', tekst: 'AI manifesto' },
      { href: '/en/privacy', tekst: 'Privacy policy' },
    ],
    home: 'Home',
    secties: [
      { tekst: 'About', anker: '#over' },
      { tekst: 'Services', anker: '#diensten' },
      { tekst: 'Work', anker: '#werk' },
      { tekst: 'Articles', anker: '#artikelen' },
    ],
  },
} as const;

/* <html lang> staat in de root-layout vast op 'nl' en kan daar niet per route wisselen
   zonder de hele app onder een [lang]-segment te hangen, wat alle Nederlandse URL's zou
   breken. Op Engelse pagina's zetten we het attribuut daarom hier. */
export function useHtmlTaal(locale: Locale) {
  useEffect(() => {
    const vorig = document.documentElement.lang;
    document.documentElement.lang = locale;
    return () => { document.documentElement.lang = vorig; };
  }, [locale]);
}

/* De taalwissel uit de topbalk. Toont niets als de pagina maar in één taal bestaat
   (quiz, CO₂-calculator, Nectar-demo blijven bewust Nederlands). */
export function TaalWissel({ locale, anderePad }: { locale: Locale; anderePad?: string | null }) {
  if (!anderePad) return null;
  return (
    <Link
      className="c2-lang"
      href={anderePad}
      hrefLang={locale === 'nl' ? 'en' : 'nl'}
      aria-label={locale === 'nl' ? 'Switch to English' : 'Bekijk deze pagina in het Nederlands'}
    >
      <span className={locale === 'nl' ? 'is-active' : 'is-idle'}>NL</span>
      <span className={`c2-lang-pill${locale === 'en' ? ' c2-lang-pill--en' : ''}`} aria-hidden="true" />
      <span className={locale === 'en' ? 'is-active' : 'is-idle'}>EN</span>
    </Link>
  );
}

/* Het sectiemenu (aangepast 1 augustus): het oog uit het bril-kunstwerk staat op elke
   pagina links in de balk. Alleen op de homepage staan de sectiewoorden er standaard
   zichtbaar naast, als ankers op de pagina zelf; er klapt niets meer open of dicht
   (Kimberleys keuze van 1 augustus, eerder klapte het menu zijwaarts uit achter een
   klik op het oog). Op de subpagina's staat er alleen het woord Home naast het oog,
   als weg terug naar huis.

   Het oog is daarmee puur decoratie geworden (aria-hidden, geen knop meer). Het houdt
   de vorm van het hoek-oog (amandeloog zonder onderlidje) met lijndikte 2.4: Kimberleys
   keuze van 19 juli. Knipperen komt van .c2-oog; de pupil kijkt op elke pagina met de
   muis mee via useOogVolgtMuis (sinds 1 augustus, eerst alleen op de homepage).

   Onder 700px passen de woorden op de homepage niet naast de taalwissel en de
   contactlink; daar staan ze op een eigen regel onder de balk (zie concept2.css). */
export function Oog() {
  return (
    <span className="c2-sectiemenu-oog" aria-hidden="true">
      <svg width="36" height="21.86" viewBox="0 0 56 34" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <g className="c2-oog">
          <path d="M2 17 Q28 -1 54 17 Q28 35 2 17 Z" />
          <g clipPath="url(#c2-menuoog)">
            <g className="c2-pupil">
              <circle cx="28" cy="17" r="8" fill="#131313" stroke="none" />
              <circle cx="31" cy="14" r="2.2" fill="#FCFCFC" stroke="none" />
            </g>
          </g>
        </g>
        <defs><clipPath id="c2-menuoog"><path d="M2 17 Q28 -1 54 17 Q28 35 2 17 Z" /></clipPath></defs>
      </svg>
    </span>
  );
}

export function MenuWoorden({ locale = 'nl' }: { locale?: Locale }) {
  return (
    <span className="c2-sectiemenu-woorden">
      {SCHIL[locale].secties.map((x) => <a key={x.anker} href={x.anker}>{x.tekst}</a>)}
    </span>
  );
}

/* De thuis-link naast het oog, alleen op de subpagina's (Kimberleys keuze van
   1 augustus): op desktop haar naam voluit (werkt als logo linksboven), op mobiel
   het korte woord Home in de grijze stijl van de menuwoorden. Beide spans staan in
   de HTML; concept2.css wisselt ze op 700px. */
export function ThuisWoord({ locale = 'nl' }: { locale?: Locale }) {
  return (
    <Link className="c2-reach c2-top-thuis" href={thuis(locale)} aria-label={SCHIL[locale].home}>
      <span className="c2-thuis-naam">Kimberley van Ruiven</span>
      <span className="c2-thuis-home">{SCHIL[locale].home}</span>
    </Link>
  );
}

/* De contactlink uit de topbalk van alle pagina's: op mobiel een envelopje in plaats
   van woorden. Sinds 1 augustus ook op de homepage (eerder stond hij daar bewust
   voluit, maar met de vaste menuwoorden erbij is die balk daarvoor te vol). */
export function MailLink({ tekst }: { tekst: string }) {
  return (
    <a className="c2-reach c2-reach--mail" href="mailto:info@kimberleyvanruiven.nl" aria-label={tekst}>
      <span className="c2-reach-woord">{tekst}</span>
      <svg className="c2-reach-icoon" width="22" height="16" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="1" width="22" height="16" rx="1.5" />
        <path d="M1.6 2 L12 10 L22.4 2" />
      </svg>
    </a>
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

/* Alle ogen op de pagina kijken naar de muis (de bril op de homepage én het oog in de
   topbalk). Verhuisd uit de homepage-client op 1 augustus, zodat het oog dit op elke
   pagina doet; daarvoor stond de pupil op de subpagina's stil. */
export function useOogVolgtMuis() {
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
}

/* Schil voor tekstpagina's (privacy, zo-werk-ik-met-ai, artikelen, diensten, 404).
   `anderePad` = dezelfde pagina in de andere taal; laat je die weg, dan verschijnt er
   geen taalwissel (bewust zo voor de 404 en voor pagina's die maar één taal hebben). */
export function C2Tekstpagina({ label, regels, bijgewerkt, intro, scatter, children, locale = 'nl', anderePad }: {
  label: string;
  regels: string[];
  bijgewerkt?: string;
  intro?: React.ReactNode;
  scatter?: Array<[number, number, string, string]>;
  children: React.ReactNode;
  locale?: Locale;
  anderePad?: string | null;
}) {
  useLichteAchtergrond();
  useKinetiek();
  useHtmlTaal(locale);
  useOogVolgtMuis();
  const s = SCHIL[locale];
  return (
    <div className={`c2-root ${fontVars}`} lang={locale}>
      <nav className="c2-top">
        <span className="c2-top-links">
          <Oog />
          <ThuisWoord locale={locale} />
        </span>
        <span className="c2-top-rechts">
          <TaalWissel locale={locale} anderePad={anderePad} />
          <MailLink tekst={s.contact} />
        </span>
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
        {bijgewerkt && <p className="c2-grey c2-tekst-datum">{s.bijgewerkt} {bijgewerkt}</p>}
        {intro && <div className="c2-tekst-intro">{intro}</div>}
      </header>

      <div className="c2-tekst-content">{children}</div>

      <footer className="c2-footer">
        <span>© 2026 Kimberley van Ruiven</span>
        {s.links.map((l) => <Link key={l.href} href={l.href}>{l.tekst}</Link>)}
        <Link href={thuis(locale)}>{s.home}</Link>
        <span>{s.missie}</span>
      </footer>
    </div>
  );
}
