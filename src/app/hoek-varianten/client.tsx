'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../concept-2/concept2.css';
import { AKSARA, fontVars, useLichteAchtergrond, HOME } from '../concept-2/gedeeld';

/* Vijf speelse invullingen van de linkerbovenhoek op de toolpagina's (quiz, calculator).
   Elke variant is klikbaar en gaat naar de nieuwe homepage (HOME). */

function Oog({ klein = false }: { klein?: boolean }) {
  const b = klein ? 20 : 26;
  return (
    <svg className="hv-oog" width={b} height={b * 0.62} viewBox="0 0 56 34" fill="none" stroke="#00218F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 17 Q28 -1 54 17 Q28 35 2 17 Z" />
      <g clipPath="url(#hv-oogvorm)">
        <circle className="hv-pupil" cx="28" cy="17" r="8" fill="#131313" stroke="none" />
        <circle className="hv-pupil" cx="31" cy="14" r="2.2" fill="#FCFCFC" stroke="none" />
      </g>
      <defs><clipPath id="hv-oogvorm"><path d="M2 17 Q28 -1 54 17 Q28 35 2 17 Z" /></clipPath></defs>
    </svg>
  );
}

function OogSchijf() {
  return (
    <svg className="hv-schijf" width="24" height="24" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#00218F" />
      <path className="hv-schijf-oog" d="M8 32 Q32 13 56 32 Q32 51 8 32 Z" fill="#FCFCFC" />
      <circle cx="32" cy="32.3" r="9" fill="#131313" />
      <circle cx="35.2" cy="29" r="2.5" fill="#FCFCFC" />
    </svg>
  );
}

function WisselAksara() {
  const [i, setI] = useState(7); // start bij ꦱ, zodat E in rust van A verschilt
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % AKSARA.length), 2500);
    return () => window.clearInterval(t);
  }, []);
  return <span className="hv-glyph hv-glyph--wissel" aria-hidden="true">{AKSARA[i]}</span>;
}

export default function HoekVariantenClient() {
  useLichteAchtergrond();

  const varianten: Array<{ id: string; naam: string; uitleg: string; inhoud: React.ReactNode }> = [
    {
      id: 'A',
      naam: 'Draai-aksara',
      uitleg: 'Een kobalt aksara naast je naam; bij hover draait het teken één keer rond.',
      inhoud: (
        <Link className="hv-hoek hv-hoek--a" href={HOME}>
          <span className="hv-glyph" aria-hidden="true">ꦏ</span>
          <span>Kimberley van Ruiven</span>
        </Link>
      ),
    },
    {
      id: 'B',
      naam: 'Knipperoog',
      uitleg: 'Het oog uit je bril-kunstwerk: het knippert af en toe, en bij hover kijkt de pupil naar links, richting huis.',
      inhoud: (
        <Link className="hv-hoek hv-hoek--b" href={HOME}>
          <Oog />
          <span>Kimberley van Ruiven</span>
        </Link>
      ),
    },
    {
      id: 'C',
      naam: 'Circuitspoor',
      uitleg: 'Een kort circuitspoor met contactpuntje; bij hover schuift het puntje naar links over het spoor.',
      inhoud: (
        <Link className="hv-hoek hv-hoek--c" href={HOME}>
          <svg width="46" height="14" viewBox="0 0 46 14" fill="none" stroke="#00218F" strokeWidth="1.6" aria-hidden="true">
            <path d="M46 7 H30 l-8 -5 H6" />
            <circle className="hv-spoor-dot" cx="34" cy="7" r="3.2" fill="#FCFCFC" />
          </svg>
          <span>Kimberley van Ruiven</span>
        </Link>
      ),
    },
    {
      id: 'D',
      naam: 'Favicon-schijf',
      uitleg: 'Het oog op de kobaltschijf, precies je browsertabblad-icoon; bij hover knippert het oog even.',
      inhoud: (
        <Link className="hv-hoek hv-hoek--d" href={HOME}>
          <OogSchijf />
          <span>Kimberley van Ruiven</span>
        </Link>
      ),
    },
    {
      id: 'E',
      naam: 'Wissel-aksara',
      uitleg: 'Het teken loopt rustig door de hele hanacaraka heen, elke paar seconden een volgende letter.',
      inhoud: (
        <Link className="hv-hoek hv-hoek--e" href={HOME}>
          <WisselAksara />
          <span>Kimberley van Ruiven</span>
        </Link>
      ),
    },
  ];

  return (
    <div className={`c2-root hv ${fontVars}`}>
      <style>{`
        .hv { min-height: 100vh; padding-bottom: 5rem; }
        .hv .hv-kop { padding: 4rem 2rem 2.5rem; max-width: 60rem; margin: 0 auto; }
        .hv h1 { font-family: var(--font-c2-display), sans-serif; font-weight: 400; text-transform: uppercase; color: var(--c2-blue); font-size: clamp(2rem, 5vw, 3.4rem); line-height: 1.02; margin: 0 0 1rem; }
        .hv .hv-intro { max-width: 34rem; color: var(--c2-grey); line-height: 1.7; }
        .hv .hv-lijst { max-width: 60rem; margin: 0 auto; padding: 0 2rem; display: flex; flex-direction: column; gap: 2.6rem; }
        .hv .hv-label { font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--c2-blue); font-weight: 600; margin-bottom: 0.35rem; }
        .hv .hv-uitleg { font-size: 0.9rem; color: var(--c2-grey); margin-bottom: 0.8rem; max-width: 34rem; line-height: 1.6; }
        .hv .hv-balk { background: #fff; border: 1px solid var(--c2-hairline); border-radius: 14px; padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center; }
        .hv .hv-balk .hv-contact { font-size: 0.9rem; color: var(--c2-grey); }
        .hv .hv-hoek { display: inline-flex; align-items: center; gap: 0.65rem; font-size: 0.95rem; font-weight: 500; color: var(--c2-ink); text-decoration: none; }
        .hv .hv-hoek:hover span:last-child { color: var(--c2-blue); }
        .hv .hv-glyph { font-family: var(--font-c2-jav), serif; font-size: 1.45rem; line-height: 1; color: var(--c2-blue); display: inline-block; }
        .hv .hv-hoek--a .hv-glyph { transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
        .hv .hv-hoek--a:hover .hv-glyph { transform: rotate(360deg); }
        .hv .hv-oog { display: block; }
        .hv .hv-oog { animation: hv-knipper 7s ease-in-out infinite; transform-origin: center; }
        @keyframes hv-knipper { 0%, 95%, 100% { transform: scaleY(1); } 97.5% { transform: scaleY(0.1); } }
        .hv .hv-pupil { transition: transform 0.25s ease-out; }
        .hv .hv-hoek--b:hover .hv-pupil { transform: translateX(-7px); }
        .hv .hv-spoor-dot { stroke: #00218F; transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
        .hv .hv-hoek--c:hover .hv-spoor-dot { transform: translateX(-24px); }
        .hv .hv-schijf { display: block; }
        .hv .hv-schijf-oog { transform-origin: 32px 32px; }
        .hv .hv-hoek--d:hover .hv-schijf-oog { animation: hv-schijf-knip 0.5s ease-in-out; }
        @keyframes hv-schijf-knip { 50% { transform: scaleY(0.12); } }
        .hv .hv-glyph--wissel { min-width: 1.35em; text-align: center; }
        .hv .hv-voet { max-width: 60rem; margin: 3.5rem auto 0; padding: 0 2rem; font-size: 0.9rem; color: var(--c2-grey); line-height: 1.7; }
        @media (prefers-reduced-motion: reduce) {
          .hv .hv-oog, .hv .hv-hoek--d:hover .hv-schijf-oog { animation: none; }
          .hv .hv-hoek--a .hv-glyph, .hv .hv-pupil, .hv .hv-spoor-dot { transition: none; }
        }
      `}</style>

      <div className="hv-kop">
        <h1>Hoek-<br />varianten</h1>
        <p className="hv-intro">Vijf invullingen voor de linkerbovenhoek van de quiz en de calculator. Elke variant is klikbaar en brengt je naar de nieuwe homepage. Beweeg eroverheen om het gedrag te zien.</p>
      </div>

      <div className="hv-lijst">
        {varianten.map((v) => (
          <div key={v.id}>
            <div className="hv-label">{v.id} · {v.naam}</div>
            <p className="hv-uitleg">{v.uitleg}</p>
            <div className="hv-balk">
              {v.inhoud}
              <span className="hv-contact">Neem contact op</span>
            </div>
          </div>
        ))}
      </div>

      <p className="hv-voet">Mijn advies: D (favicon-schijf) voor herkenbaarheid, want die matcht het tabblad-icoon van de site, met B (knipperoog) als speelsere tweede. Zodra je kiest, zet ik hem op de quiz en de calculator en mag deze pagina weg.</p>
    </div>
  );
}
