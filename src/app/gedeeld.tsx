'use client';

import { useEffect, useState } from 'react';
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
    missie: 'Gebouwd mét AI, met een mens aan het stuur.',
    links: [
      { href: '/zo-werk-ik-met-ai', tekst: 'Zo werk ik met AI' },
      { href: '/manifest', tekst: 'AI-manifest' },
      { href: '/privacy', tekst: 'Privacybeleid' },
      { href: '/algemene-voorwaarden', tekst: 'Algemene voorwaarden' },
    ],
    home: 'Home',
    menuLabel: 'Menu openen',
    menuSluiten: 'Menu sluiten',
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
    missie: 'Built with AI, with a human at the wheel.',
    links: [
      { href: '/en/how-i-work-with-ai', tekst: 'How I work with AI' },
      { href: '/en/manifesto', tekst: 'AI manifesto' },
      { href: '/en/privacy', tekst: 'Privacy policy' },
    ],
    home: 'Home',
    menuLabel: 'Open menu',
    menuSluiten: 'Close menu',
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

/* Het sectiemenu (gekozen 19 juli): het oog uit het bril-kunstwerk staat op elke
   pagina links in de balk en klapt zijwaarts naar rechts uit. Op de homepage zijn de
   woorden ankers op de pagina zelf; op de subpagina's wijzen ze naar de homepage en
   staat Home voorop, zodat de weg naar huis er ook op een telefoon is (de naam naast
   het oog verdwijnt daar).

   Het oog heeft de vorm van het vroegere hoek-oog (amandeloog zonder onderlidje) met
   de lijndikte van het vroegere menu-oog (2.4): Kimberleys keuze van 19 juli.
   Knipperen komt van .c2-oog; op de homepage stuurt het pupil-effect van de bril de
   pupil ook hier aan, op de subpagina's staat de pupil stil. */
export function useMenu() {
  const [open, setOpen] = useState(false);
  /* Escape sluit het: op smalle schermen verdwijnen de taalwissel en de contactlink
     zolang het open staat, dus er moet een uitweg zijn zonder precies het oog te
     hoeven raken. Klikken op een woord sluit het ook. */
  useEffect(() => {
    if (!open) return;
    const opToets = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', opToets);
    return () => window.removeEventListener('keydown', opToets);
  }, [open]);
  return { open, setOpen };
}

export function OogMenu({ locale = 'nl', opHome = false, open, zetOpen }: {
  locale?: Locale;
  opHome?: boolean;
  open: boolean;
  zetOpen: (v: boolean) => void;
}) {
  const s = SCHIL[locale];
  const items: Array<{ tekst: string; href: string }> = opHome
    ? s.secties.map((x) => ({ tekst: x.tekst, href: x.anker }))
    : [{ tekst: s.home, href: thuis(locale) }, ...s.secties.map((x) => ({ tekst: x.tekst, href: `${thuis(locale)}${x.anker}` }))];
  return (
    <span className="c2-sectiemenu">
      <button
        type="button"
        className="c2-sectiemenu-knop"
        onClick={() => zetOpen(!open)}
        aria-expanded={open}
        aria-label={open ? s.menuSluiten : s.menuLabel}
      >
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
      </button>
      {open && (
        <span className="c2-sectiemenu-woorden">
          {items.map((x) => x.href.startsWith('#')
            ? <a key={x.href} href={x.href} onClick={() => zetOpen(false)}>{x.tekst}</a>
            : <Link key={x.href} href={x.href} onClick={() => zetOpen(false)}>{x.tekst}</Link>
          )}
        </span>
      )}
    </span>
  );
}

/* De naam als thuis-link naast het oog, alleen op de subpagina's. Maakt plaats
   zolang het menu open staat en verdwijnt onder 700px (daar brak de balk anders
   naar twee regels); de weg naar huis zit dan in het menu zelf. */
export function NaamThuis({ locale = 'nl' }: { locale?: Locale }) {
  return <Link className="c2-reach c2-top-naam" href={thuis(locale)}>Kimberley van Ruiven</Link>;
}

/* De contactlink uit de topbalk van alle subpagina's (tekstpagina's, CO₂-calculator,
   quiz): op mobiel een envelopje in plaats van woorden. Op de homepage blijft
   "Neem contact op" bewust wél voluit staan; daar past het en daar is het de enige
   tekst-CTA bovenaan. */
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
  const s = SCHIL[locale];
  const { open: menuOpen, setOpen: zetMenuOpen } = useMenu();
  return (
    <div className={`c2-root ${fontVars}`} lang={locale}>
      <nav className={`c2-top${menuOpen ? ' c2-top--wijkt' : ''}`}>
        <span className="c2-top-links">
          <OogMenu locale={locale} open={menuOpen} zetOpen={zetMenuOpen} />
          {!menuOpen && <NaamThuis locale={locale} />}
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
