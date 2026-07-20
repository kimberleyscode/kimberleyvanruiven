'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import '../concept2.css';
import './in-aanbouw.css';
import { Glyph, Scatter, useKinetiek, useLichteAchtergrond, fontVars } from '../gedeeld';

const CAL_LINK = 'https://calendar.app.google/douZqiDQ7p39Xf6u7';
const LINKEDIN = 'https://www.linkedin.com/in/kimberleyvanruiven';
const INSTAGRAM = 'https://www.instagram.com/kimberleyvanruiven';

/* Het oog uit het bril-kunstwerk, hier als merkteken zonder link: op deze pagina
   valt er niets te navigeren, want alle adressen komen hier uit. */
function Oog() {
  return (
    <svg width="36" height="21.86" viewBox="0 0 56 34" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <g className="c2-oog">
        <path d="M2 17 Q28 -1 54 17 Q28 35 2 17 Z" />
        <g clipPath="url(#ia-oogvorm)">
          <g className="c2-pupil">
            <circle cx="28" cy="17" r="8" fill="#131313" stroke="none" />
            <circle cx="31" cy="14" r="2.2" fill="#FCFCFC" stroke="none" />
          </g>
        </g>
      </g>
      <defs><clipPath id="ia-oogvorm"><path d="M2 17 Q28 -1 54 17 Q28 35 2 17 Z" /></clipPath></defs>
    </svg>
  );
}

export default function InAanbouwClient() {
  useLichteAchtergrond();
  useKinetiek();

  /* De pupil volgt de muis, met dezelfde uitslag als op de homepage. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const oog = document.querySelector<SVGGElement>('.c2-oog');
    const vorm = oog?.querySelector<SVGPathElement>('path');
    const pupil = oog?.querySelector<SVGGElement>('.c2-pupil');
    if (!vorm || !pupil) return;
    let raf = 0, mx = -1, my = -1;
    const update = () => {
      const r = vorm.getBoundingClientRect();
      const dx = mx - (r.left + r.width / 2), dy = my - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1;
      const f = Math.min(1, d / 320);
      pupil.style.transform = `translate(${(dx / d) * f * 10}px, ${(dy / d) * f * 4}px)`;
      raf = 0;
    };
    const onMove = (e: PointerEvent) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className={`c2-root ${fontVars}`} lang="nl">
      <nav className="c2-top">
        <span className="c2-top-links">
          <span className="ia-merk"><Oog /></span>
          <span className="c2-reach c2-top-naam">Kimberley van Ruiven</span>
        </span>
        <span className="c2-top-rechts">
          <a className="c2-reach" href="mailto:info@kimberleyvanruiven.nl">Neem contact op</a>
        </span>
      </nav>

      <main className="ia-blad">
        <Scatter items={[[7, 6.5, '62%', '10%'], [13, 3.6, '78%', '66%'], [3, 2.6, '44%', '84%'], [19, 3.1, '52%', '62%']]} />

        <div className="ia-symbool-kolom" aria-hidden="true">
          {[0, 1, 4, 2, 5].map((t, i) => (
            <Glyph key={i} t={t} size={i % 2 === 0 ? 3.2 : 2.3} snel />
          ))}
        </div>

        <p className="c2-eyebrow">In aanbouw</p>

        <h1 className="c2-kinetic ia-titel">
          <span className="c2-line" data-speed="-0.4">Deze site</span>
          <span className="c2-line c2-line--indent1" data-speed="0.4">wordt nog</span>
          <span className="c2-line c2-line--indent2" data-speed="-0.25">gebouwd</span>
        </h1>

        <p className="ia-tekst">
          Hier komt binnenkort meer te staan. Ik ben er nog aan het werk, en zodra het klaar is
          lees je het hier.
        </p>
        <p className="ia-tekst">
          Wil je in de tussentijd kennismaken? Dat kan gewoon: plan een gesprek dat jou uitkomt,
          dan hoor ik waar je mee bezig bent.
        </p>

        <div className="ia-acties">
          <a className="c2-cta ia-cta" href={CAL_LINK} target="_blank" rel="noopener noreferrer">Plan een kennismaking</a>
          <span className="c2-icon-rij ia-icon-rij">
            <a className="c2-icon-btn ia-icon-btn" href="mailto:info@kimberleyvanruiven.nl" aria-label="E-mail" title="E-mail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="M3.5 7l8.5 6 8.5-6" /></svg>
            </a>
            <a className="c2-icon-btn ia-icon-btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4.5" /><circle cx="8.2" cy="8.4" r="0.9" fill="currentColor" stroke="none" /><path d="M8.2 11.2V17M12.2 17v-4c0-1.3 1-2.2 2.2-2.2s2.2.9 2.2 2.2v4" /></svg>
            </a>
            <a className="c2-icon-btn ia-icon-btn" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" /></svg>
            </a>
          </span>
        </div>
      </main>

      <footer className="c2-footer">
        <span>© 2026 Kimberley van Ruiven</span>
        <Link href="/privacy">Privacybeleid</Link>
        <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
        <span>Gebouwd mét AI, met een mens aan het stuur.</span>
      </footer>
    </div>
  );
}
