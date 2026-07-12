'use client';

import { AKSARA, Glyph, fontVars, useLichteAchtergrond } from '../concept-2/gedeeld';

const BLAUW = '#00218F';

const WRAP: React.CSSProperties = { position: 'relative', width: '9.5rem', height: '9.5rem', display: 'inline-block', flex: 'none' };
const SVG_VOL: React.CSSProperties = { position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' };
const MIDDEN: React.CSSProperties = {
  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
  textAlign: 'center', color: BLAUW, fontSize: '1.1rem', lineHeight: 1.25, letterSpacing: '0.03em',
  fontFamily: 'var(--font-c2-display)', textTransform: 'uppercase',
};

/* E · draaiende kring van aksara-tekens, de woorden leesbaar stil in het midden */
function KringAksara() {
  const N = 12;
  return (
    <span className="mv-wrap" style={WRAP}>
      <svg className="mv-ring" viewBox="0 0 120 120" style={SVG_VOL} aria-hidden="true">
        {Array.from({ length: N }, (_, i) => {
          const a = (i / N) * 2 * Math.PI - Math.PI / 2;
          /* afgerond: voorkomt hydration-mismatch door float-verschillen server/client */
          const x = +(60 + Math.cos(a) * 50).toFixed(2);
          const y = +(60 + Math.sin(a) * 50).toFixed(2);
          const rot = +(((a * 180) / Math.PI + 90)).toFixed(1);
          return (
            <text
              key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central"
              transform={`rotate(${rot} ${x} ${y})`}
              style={{ fontSize: 12, fill: BLAUW, fontFamily: 'var(--font-c2-jav)' }}
            >
              {AKSARA[(i * 3 + 1) % AKSARA.length]}
            </text>
          );
        })}
      </svg>
      <span style={MIDDEN}><span style={{ width: '5.6rem' }}>mijn AI-manifest</span></span>
    </span>
  );
}

/* F · draaiende stippellijn-cirkel, de woorden leesbaar stil in het midden */
function StippelCirkel() {
  return (
    <span className="mv-wrap" style={WRAP}>
      <svg className="mv-ring" viewBox="0 0 120 120" style={SVG_VOL} aria-hidden="true">
        <circle cx="60" cy="60" r="46" fill="none" stroke={BLAUW} strokeWidth="1.3" strokeDasharray="7 8" strokeLinecap="round" />
      </svg>
      <span style={MIDDEN}><span style={{ width: '5.6rem' }}>mijn AI-manifest</span></span>
    </span>
  );
}

/* G · één traag draaiend aksara-teken, de woorden leesbaar ernaast */
function DraaiTeken() {
  return (
    <span className="mv-wrap" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.1rem', flex: 'none' }}>
      <svg className="mv-ring mv-traag" viewBox="0 0 60 60" style={{ width: '4.4rem', height: '4.4rem', overflow: 'visible' }} aria-hidden="true">
        <text x="30" y="30" textAnchor="middle" dominantBaseline="central" style={{ fontSize: 34, fill: BLAUW, fontFamily: 'var(--font-c2-jav)' }}>{AKSARA[7]}</text>
      </svg>
      <span style={{ color: BLAUW, fontSize: '0.95rem', letterSpacing: '0.04em' }}>mijn AI-manifest →</span>
    </span>
  );
}

/* H · een stipje cirkelt om de leesbare woorden heen */
function OrbitStip() {
  return (
    <span className="mv-wrap" style={WRAP}>
      <svg viewBox="0 0 120 120" style={SVG_VOL} aria-hidden="true">
        <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(0, 33, 143, 0.22)" strokeWidth="1" />
        <g className="mv-ring"><circle cx="60" cy="15" r="4" fill={BLAUW} /></g>
      </svg>
      <span style={MIDDEN}><span style={{ width: '5.6rem' }}>mijn AI-manifest</span></span>
    </span>
  );
}

/* Eerdere richting: draaiende tekstkring (r=45; tekst één keer rond, gemeten spatiëring) */
function Ring({ id, kind }: { id: string; kind?: 'glyph' | 'lijn' | 'tegen' }) {
  return (
    <span className="mv-wrap" style={WRAP}>
      <svg className="mv-ring" viewBox="0 0 120 120" style={SVG_VOL} aria-hidden="true">
        <defs>
          <path id={id} d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1 -90 0" />
        </defs>
        {kind === 'lijn' && <circle cx="60" cy="60" r="34" fill="none" stroke={BLAUW} strokeWidth="0.8" />}
        <text style={{ fill: BLAUW, fontSize: 11, letterSpacing: 11.5 }}>
          <textPath href={`#${id}`}>MIJN AI-MANIFEST</textPath>
        </text>
      </svg>
      {kind && kind !== 'lijn' && (
        <span className={kind === 'tegen' ? 'mv-mid mv-tegen' : 'mv-mid'} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLAUW }}>
          <Glyph t={7} size={2.1} />
        </span>
      )}
    </span>
  );
}

const KAART: React.CSSProperties = {
  background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 40,
  padding: '2rem 2.2rem', maxWidth: '24rem', fontSize: '0.98rem', lineHeight: 1.7, color: '#131313',
};
const RIJ: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap' };
const BLOK: React.CSSProperties = {
  background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 32,
  padding: '2.2rem 2.4rem', display: 'flex', flexDirection: 'column', gap: '1.4rem',
};
const LABEL: React.CSSProperties = { fontSize: '0.95rem', letterSpacing: '0.08em', color: '#131313' };

function Mock({ label, ring }: { label: string; ring: React.ReactNode }) {
  return (
    <div style={BLOK}>
      <div style={RIJ}>
        <div style={KAART}>
          <p style={{ margin: 0 }}>Ik heb AI-bias wetenschappelijk onderzocht en bouw AI-systemen. Mijn focus is AI die bij jouw organisatie klopt.</p>
        </div>
        <span style={{ color: '#131313' }}><Glyph t={19} size={3} /></span>
        {ring}
      </div>
      <span style={LABEL}>{label}</span>
    </div>
  );
}

export default function Varianten() {
  useLichteAchtergrond();
  return (
    <main className={fontVars} style={{ minHeight: '100vh', background: '#FCFCFC', padding: '4rem 3rem', fontFamily: 'sans-serif' }}>
      <style>{`
        @keyframes mv-draai { to { transform: rotate(360deg); } }
        .mv-ring { animation: mv-draai 26s linear infinite; transform-origin: 50% 50%; }
        .mv-traag { animation-duration: 14s; }
        @keyframes mv-terug { to { transform: rotate(-360deg); } }
        .mv-tegen { animation: mv-terug 40s linear infinite; transform-origin: 50% 50%; }
        .mv-wrap:hover .mv-ring, .mv-wrap:hover .mv-tegen { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .mv-ring, .mv-tegen { animation: none; } }
      `}</style>
      <h1 style={{ color: BLAUW, marginBottom: '0.5rem', fontSize: '1.6rem' }}>Kies je manifest-draaier</h1>
      <p style={{ color: '#5C6165', marginBottom: '2.5rem', maxWidth: '46rem' }}>
        Nieuwe richting bovenaan: de woorden staan leesbaar stil en iets anders draait. Elke variant staat rechts van het aksara-teken naast de statement-kaart, zoals hij straks op de pagina komt. Beweeg eroverheen om het draaien te pauzeren. Zeg tegen Claude welke letter het wordt (of wat anders moet).
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: 950 }}>
        <Mock label="E · draaiende kring van aksara-tekens, woorden leesbaar in het midden" ring={<KringAksara />} />
        <Mock label="F · draaiende stippellijn-cirkel, woorden leesbaar in het midden" ring={<StippelCirkel />} />
        <Mock label="G · één traag draaiend aksara-teken, woorden leesbaar ernaast" ring={<DraaiTeken />} />
        <Mock label="H · een stipje cirkelt om de leesbare woorden heen" ring={<OrbitStip />} />
      </div>
      <h2 style={{ color: '#5C6165', margin: '3rem 0 1.2rem', fontSize: '1.1rem', fontWeight: 400 }}>Eerdere richting: de tekst zelf draait (minder leesbaar)</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: 950 }}>
        <Mock label="A · alleen de draaiende tekst, open midden" ring={<Ring id="mv-a" />} />
        <Mock label="B · draaiende tekst met een aksara-teken in het midden" ring={<Ring id="mv-b" kind="glyph" />} />
        <Mock label="C · draaiende tekst met een dun cirkellijntje erbinnen" ring={<Ring id="mv-c" kind="lijn" />} />
        <Mock label="D · draaiende tekst, aksara in het midden draait traag tegen de richting in" ring={<Ring id="mv-d" kind="tegen" />} />
      </div>
    </main>
  );
}
