'use client';

import { DM_Sans } from 'next/font/google';
import { AKSARA, fontVars, useLichteAchtergrond } from '../concept-2/gedeeld';

const dmSans = DM_Sans({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-dm-sans' });

const BLAUW = '#00218F';
const INKT = '#131313';
const PAPIER = '#FCFCFC';

/* ────────────────────────── Favicon: het oog uit de bril ────────────────────────── */

function FavOog({ variant, px }: { variant: 1 | 2 | 3 | 4; px: number }) {
  return (
    <svg width={px} height={px} viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }} aria-hidden="true">
      {variant === 1 && (
        <g stroke={BLAUW}>
          <path d="M6 32 Q32 12 58 32 Q32 52 6 32 Z" strokeWidth="3.4" />
          <circle cx="32" cy="32.5" r="9.5" fill={INKT} stroke="none" />
          <circle cx="35.5" cy="29" r="2.6" fill={PAPIER} stroke="none" />
          <path d="M14 45.5 Q32 52.5 50 45.5" strokeWidth="2.2" opacity="0.55" />
        </g>
      )}
      {variant === 2 && (
        <g stroke={BLAUW}>
          <circle cx="32" cy="32" r="29.5" strokeWidth="3.2" />
          <path d="M13 32 Q32 18 51 32 Q32 46 13 32 Z" strokeWidth="2.8" />
          <circle cx="32" cy="32.3" r="7" fill={INKT} stroke="none" />
          <circle cx="34.7" cy="29.7" r="2" fill={PAPIER} stroke="none" />
          <path d="M18 41.5 Q32 46.5 46 41.5" strokeWidth="1.8" opacity="0.55" />
        </g>
      )}
      {variant === 3 && (
        <g>
          <circle cx="32" cy="32" r="32" fill={BLAUW} />
          <path d="M8 32 Q32 13 56 32 Q32 51 8 32 Z" fill={PAPIER} />
          <circle cx="32" cy="32.3" r="9" fill={INKT} />
          <circle cx="35.2" cy="29" r="2.5" fill={PAPIER} />
        </g>
      )}
      {variant === 4 && (
        <g stroke={BLAUW}>
          <circle cx="32" cy="32" r="30.4" fill={PAPIER} strokeWidth="3" />
          <path d="M11 32 Q32 16 53 32 Q32 48 11 32 Z" strokeWidth="3" />
          <circle cx="32" cy="32.3" r="8" fill={INKT} stroke="none" />
          <circle cx="35" cy="29.3" r="2.2" fill={PAPIER} stroke="none" />
          <path d="M17 43 Q32 49 47 43" strokeWidth="2" opacity="0.55" />
        </g>
      )}
    </svg>
  );
}

/* Nagemaakt browsertabblad, licht en donker, met het icoon op ware grootte (16px) */
function Tab({ donker, icoon }: { donker?: boolean; icoon: React.ReactNode }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: '10px 10px 0 0', background: donker ? '#292a2d' : '#fff', minWidth: 178, boxSizing: 'border-box' }}>
      {icoon}
      <span style={{ fontSize: 12, color: donker ? '#e8eaed' : '#3c4043', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 118 }}>Kimberley van Ruiven</span>
      <span style={{ marginLeft: 'auto', color: donker ? '#9aa0a6' : '#80868b', fontSize: 11 }}>✕</span>
    </span>
  );
}

/* ────────────────────────── Thumbnail (OG): 1200×630, geschaald ────────────────────────── */

/* Het ontwerp is 1200×630; via svg+foreignObject schaalt het exact mee met de
   kaderbreedte, zonder JavaScript (een ResizeObserver bleek in de praktijk te
   vroeg of niet te vuren, waardoor de inhoud buiten het kader viel) */
function OGFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', aspectRatio: '1200 / 630', overflow: 'hidden', borderRadius: 16, border: '1px solid rgba(0,0,0,0.12)' }}>
      <svg viewBox="0 0 1200 630" width="100%" height="100%" style={{ display: 'block' }}>
        <foreignObject x="0" y="0" width="1200" height="630">
          <div className="og-binnen" style={{ width: 1200, height: 630, position: 'relative', overflow: 'hidden', background: PAPIER, color: INKT }}>
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}

/* Losse aksara, vaste posities/rotaties (geen animatie: een thumbnail is een stilstaand beeld) */
function Strooi({ items }: { items: Array<[number, number, number, number, number, string?]> }) {
  return (
    <>
      {items.map(([t, px, left, top, rot, kleur], i) => (
        <span key={i} style={{ position: 'absolute', left, top, fontSize: px, lineHeight: 1, fontFamily: 'var(--font-c2-jav)', color: kleur ?? INKT, transform: `rotate(${rot}deg)` }} aria-hidden="true">
          {AKSARA[t % AKSARA.length]}
        </span>
      ))}
    </>
  );
}

/* De bril van de site, stilstaand; kijk = [dx, dy] van de pupillen.
   Met uitloop lopen de pootjes als circuitsporen door: links tot onder de tekst
   (met contactpuntje), rechts het beeld uit */
function Bril({ width, kijk = [0, 0], uitloop = false }: { width: number; kijk?: [number, number]; uitloop?: boolean }) {
  const [dx, dy] = kijk;
  const vb = uitloop ? { x: -600, w: 1180 } : { x: 0, w: 360 };
  return (
    <svg viewBox={`${vb.x} 0 ${vb.w} 150`} width={width} height={(width * 150) / vb.w} fill="none" stroke={BLAUW} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', overflow: 'visible' }} aria-hidden="true">
      {uitloop && (
        <g strokeWidth="1.8">
          <path d="M0 56 H-240 l-20 16 H-540" />
          <circle cx="-540" cy="72" r="4" />
          <path d="M360 56 H420 l20 -16 H580" />
          <circle cx="470" cy="40" r="4" />
        </g>
      )}
      <circle cx="94" cy="78" r="45" />
      <circle cx="266" cy="78" r="45" />
      <path d="M139 72 Q180 58 221 72" />
      <path d="M49 68 L18 56 H0" />
      <path d="M311 68 L342 56 H360" />
      {[94, 266].map((cx) => (
        <g key={cx} strokeWidth="1.8">
          <path d={`M${cx - 28} 80 Q${cx} 62 ${cx + 28} 80 Q${cx} 96 ${cx - 28} 80 Z`} />
          <circle cx={cx + dx} cy={79 + dy} r="8" fill={INKT} stroke="none" />
          <circle cx={cx + dx + 3} cy={76 + dy} r="2.2" fill={PAPIER} stroke="none" />
          <path d={`M${cx - 22} 90 Q${cx} 98 ${cx + 22} 90`} strokeWidth="1.3" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}

/* Circuitsporen naast de bril (zelfde paden als op de site) */
function Sporen({ spiegel, width, height }: { spiegel?: boolean; width: number; height: number }) {
  return (
    <svg viewBox="0 0 400 150" preserveAspectRatio="none" width={width} height={height} fill="none" stroke={BLAUW} strokeWidth="1.6" style={{ display: 'block', flex: 'none', transform: spiegel ? 'scaleX(-1)' : undefined }} aria-hidden="true">
      <path d="M0 26 H180 l24 18 H336" />
      <path d="M0 56 H400" />
      <path d="M0 86 H150 l20 -16 H320" />
      <circle cx="336" cy="44" r="4" /><circle cx="120" cy="56" r="4" /><circle cx="320" cy="70" r="4" />
    </svg>
  );
}

const OG_EYEBROW: React.CSSProperties = { fontSize: 25, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: INKT };
const OG_TITEL: React.CSSProperties = { fontFamily: 'var(--font-c2-display)', textTransform: 'uppercase', color: BLAUW, lineHeight: 1.04, letterSpacing: 1 };
const OG_URL: React.CSSProperties = { position: 'absolute', left: 70, bottom: 48, fontSize: 26, letterSpacing: '0.04em', color: BLAUW };

/* A · de hero zoals op de site: titel + aksara-kolom */
function ThumbHeader() {
  return (
    <OGFrame>
      <div style={{ position: 'absolute', inset: 0, padding: '70px 70px 0' }}>
        <p style={{ ...OG_EYEBROW, margin: '0 0 34px' }}>Kimberley van Ruiven · Ethische AI-adviseur voor het mkb</p>
        <div style={{ ...OG_TITEL, fontSize: 88 }}>
          <div>Een mens-gerichte</div>
          <div style={{ marginLeft: 90 }}>toekomst met</div>
          <div style={{ marginLeft: 180 }}>technologie</div>
        </div>
        <span style={OG_URL}>kimberleyvanruiven.nl</span>
        <Strooi items={[
          [1, 92, 1022, 58, -10],
          [5, 62, 1094, 178, 14],
          [0, 92, 1010, 262, 7],
          [2, 62, 1098, 392, -12],
          [6, 92, 1024, 462, 11],
          [3, 58, 950, 520, -8, BLAUW],
        ]} />
      </div>
    </OGFrame>
  );
}

/* B · de bril met circuitsporen en spelende aksara, tekst minimaal */
function ThumbBril() {
  return (
    <OGFrame>
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', top: 175, left: 0, right: 0, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Sporen width={310} height={230} />
          <Bril width={552} kijk={[2.5, -1]} />
          <Sporen width={310} height={230} spiegel />
        </div>
        <Strooi items={[
          [5, 96, 150, 90, -11, BLAUW],
          [16, 96, 950, 92, 9, BLAUW],
          [8, 60, 380, 60, 8],
          [14, 52, 720, 78, -14],
          [10, 58, 250, 470, 12],
          [3, 64, 900, 458, -9],
          [12, 46, 585, 500, 6],
        ]} />
        <p style={{ ...OG_EYEBROW, position: 'absolute', left: 0, right: 0, bottom: 52, textAlign: 'center', margin: 0 }}>
          Kimberley van Ruiven · <span style={{ color: BLAUW }}>kimberleyvanruiven.nl</span>
        </p>
      </div>
    </OGFrame>
  );
}

/* C · kernzin + bril: boodschap en mascotte in één beeld */
function ThumbCombi() {
  return (
    <OGFrame>
      <div style={{ position: 'absolute', inset: 0, padding: '70px 70px 0' }}>
        <p style={{ ...OG_EYEBROW, margin: '0 0 38px' }}>Ethische AI-adviseur voor het mkb</p>
        <div style={{ ...OG_TITEL, fontSize: 82 }}>
          <div>Ik bouw AI</div>
          <div style={{ marginLeft: 60 }}>waar je achter</div>
          <div style={{ marginLeft: 120 }}>kunt staan</div>
        </div>
        <div style={{ position: 'absolute', right: -55, top: 354 }}>
          <Bril width={1082} kijk={[-3, 1]} uitloop />
        </div>
        <Strooi items={[
          [1, 70, 1010, 96, -10, BLAUW],
          [6, 52, 880, 160, 12],
          [2, 56, 1090, 250, 9],
          [15, 48, 796, 452, -12, BLAUW],
        ]} />
        <span style={{ ...OG_EYEBROW, position: 'absolute', left: 70, bottom: 48 }}>Kimberley van Ruiven</span>
      </div>
    </OGFrame>
  );
}

/* D · missiezin + bril: voor wie ze er is, in plaats van wat ze bouwt */
function ThumbMissie() {
  return (
    <OGFrame>
      <div style={{ position: 'absolute', inset: 0, padding: '92px 70px 0' }}>
        <div style={{ ...OG_TITEL, fontSize: 58 }}>
          <div>Voor organisaties die kiezen</div>
          <div style={{ marginLeft: 60 }}>voor een mens-gerichte</div>
          <div style={{ marginLeft: 120 }}>toekomst met technologie</div>
        </div>
        <div style={{ position: 'absolute', right: -55, top: 390 }}>
          <Bril width={1082} kijk={[-3, 1]} uitloop />
        </div>
        <Strooi items={[
          [1, 64, 1066, 66, -10, BLAUW],
          [6, 50, 1112, 186, 12],
          [2, 54, 1086, 292, 9],
          [15, 46, 770, 486, -12, BLAUW],
        ]} />
        <span style={{ ...OG_EYEBROW, position: 'absolute', left: 70, bottom: 44 }}>Kimberley van Ruiven</span>
      </div>
    </OGFrame>
  );
}

/* ────────────────────────── De keuzepagina zelf ────────────────────────── */

const KAART: React.CSSProperties = {
  background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 32,
  padding: '2.2rem 2rem 1.6rem', display: 'flex', flexDirection: 'column', gap: '1.3rem', alignItems: 'center',
};
const LABEL: React.CSSProperties = { fontSize: '0.95rem', letterSpacing: '0.08em', color: INKT, textAlign: 'center' };
const UITLEG: React.CSSProperties = { fontSize: '0.85rem', color: '#5C6165', textAlign: 'center', margin: 0, maxWidth: '20rem' };
const H2: React.CSSProperties = { color: BLAUW, fontSize: '1.25rem', margin: '3.2rem 0 1.2rem' };

function FaviconKaart({ nr, naam, uitleg, variant }: { nr: string; naam: string; uitleg: string; variant: 1 | 2 | 3 | 4 }) {
  return (
    <div style={KAART}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.6rem' }}>
        {[64, 32, 16].map((px) => (
          <div key={px} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <FavOog variant={variant} px={px} />
            <span style={{ fontSize: 11, color: '#9aa0a6' }}>{px}px</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', maxWidth: 220 }}>
        <div style={{ background: '#dee1e6', padding: '6px 8px 0', borderRadius: 8 }}><Tab icoon={<FavOog variant={variant} px={16} />} /></div>
        <div style={{ background: '#202124', padding: '6px 8px 0', borderRadius: 8 }}><Tab donker icoon={<FavOog variant={variant} px={16} />} /></div>
      </div>
      <span style={LABEL}>{nr} · {naam}</span>
      <p style={UITLEG}>{uitleg}</p>
    </div>
  );
}

export default function Varianten() {
  useLichteAchtergrond();
  return (
    <main className={`${fontVars} ${dmSans.variable}`} style={{ minHeight: '100vh', background: PAPIER, padding: '4rem clamp(1.2rem, 4vw, 3rem)', fontFamily: 'var(--font-dm-sans), Helvetica, sans-serif', color: INKT }}>
      <h1 style={{ color: BLAUW, marginBottom: '0.5rem', fontSize: '1.6rem' }}>Favicon & thumbnail</h1>
      <p style={{ color: '#5C6165', marginBottom: '0.4rem', maxWidth: '44rem' }}>
        Boven: vier favicon-varianten met het oog uit de bril, steeds op 64, 32 en 16 pixels en in een licht en donker browsertabblad.
        Onder: drie thumbnails (1200×630) zoals ze eruitzien als iemand de site deelt via WhatsApp of LinkedIn.
      </p>
      <p style={{ color: '#5C6165', marginBottom: '2.4rem' }}>Zeg tegen Claude welk cijfer en welke letter het worden (of wat anders moet).</p>

      <h2 style={H2}>Favicon</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 1400 }}>
        <FaviconKaart nr="1" naam="los oog" variant={1} uitleg="Puur het oog, kobaltlijnen zonder achtergrond. Het meest ingetogen, maar dunne lijnen vallen op 16px bijna weg." />
        <FaviconKaart nr="2" naam="oog in het montuur" variant={2} uitleg="Het oog in één rond brillenglas: het meest letterlijk 'de bril'. Op 16px wordt het oog zelf erg klein." />
        <FaviconKaart nr="3" naam="kobaltschijf" variant={3} uitleg="Omgekeerde kleuren: gevulde kobaltcirkel met licht oog. Blijft op 16px het duidelijkst leesbaar, in lichte én donkere tabbladen." />
        <FaviconKaart nr="4" naam="lichte schijf" variant={4} uitleg="Licht schijfje met kobaltrand en het oog erin. Zachter dan 3 en werkt ook op donkere tabbladen." />
      </div>

      <h2 style={H2}>Thumbnail</h2>
      <div style={{ display: 'grid', gap: '2.2rem', maxWidth: 940 }}>
        <div style={{ display: 'grid', gap: '0.7rem' }}>
          <ThumbHeader />
          <span style={LABEL}>A · de header van de site: titel + aksara-kolom</span>
        </div>
        <div style={{ display: 'grid', gap: '0.7rem' }}>
          <ThumbBril />
          <span style={LABEL}>B · de bril met circuitsporen en spelende aksara</span>
        </div>
        <div style={{ display: 'grid', gap: '0.7rem' }}>
          <ThumbCombi />
          <span style={LABEL}>C · kernzin + bril: boodschap en beeldmerk samen (huidige)</span>
        </div>
        <div style={{ display: 'grid', gap: '0.7rem' }}>
          <ThumbMissie />
          <span style={LABEL}>D · missiezin + bril: voor wie je er bent</span>
        </div>
      </div>
    </main>
  );
}
