import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bril-varianten · kies maar",
  robots: "noindex, nofollow",
};

function Montuur({ children }: { children?: React.ReactNode }) {
  return (
    <svg viewBox="0 0 360 150" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: 'auto' }}>
      <path d="M148 78 C148 106 122 122 94 120 C68 118 48 104 42 88 L28 48 C56 32 100 32 128 46 C142 54 148 64 148 78 Z" />
      <path d="M212 78 C212 106 238 122 266 120 C292 118 312 104 318 88 L332 48 C304 32 260 32 232 46 C218 54 212 64 212 78 Z" />
      <path d="M148 72 Q180 52 212 72" />
      <path d="M28 48 L4 36" />
      <path d="M332 48 L356 36" />
      <g strokeWidth="1.7">
        <path d="M172 32 A 8 8 0 0 1 188 32" />
        <path d="M166 32 A 14 14 0 0 1 194 32" />
        <path d="M160 32 A 20 20 0 0 1 200 32" />
      </g>
      <g strokeWidth="1.6">
        {[28, 332].map((cx) => [45, 135, 225, 315].map((a) => (
          <ellipse key={`${cx}-${a}`} cx={cx} cy={48 - 8} rx="3" ry="7.5" transform={`rotate(${a} ${cx} 48)`} />
        )))}
        <circle cx="28" cy="48" r="1.5" /><circle cx="332" cy="48" r="1.5" />
      </g>
      {children}
    </svg>
  );
}

const KAART: React.CSSProperties = {
  background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 32,
  padding: '2.5rem 2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center',
};
const LABEL: React.CSSProperties = { fontSize: '0.95rem', letterSpacing: '0.08em', color: '#131313' };

export default function BrilVarianten() {
  return (
    <main style={{ minHeight: '100vh', background: '#FCFCFC', padding: '4rem 3rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#00218F', marginBottom: '0.5rem', fontSize: '1.6rem' }}>Kies je bril</h1>
      <p style={{ color: '#5C6165', marginBottom: '2.5rem' }}>Vijf varianten, zelfde montuur. Zeg tegen Claude welke letter het wordt (of wat anders moet).</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', maxWidth: 1400 }}>

        <div style={KAART}>
          <Montuur />
          <span style={LABEL}>A · puur het montuur, geen ogen</span>
        </div>

        <div style={KAART}>
          <Montuur>
            <g strokeWidth="1.8">
              <path d="M62 80 Q94 60 126 80 Q94 98 62 80 Z" />
              <circle cx="94" cy="79" r="8.5" fill="#131313" stroke="none" />
              <circle cx="97" cy="76" r="2.4" fill="#FCFCFC" stroke="none" />
              <path d="M234 80 Q266 60 298 80 Q266 98 234 80 Z" />
              <circle cx="266" cy="79" r="8.5" fill="#131313" stroke="none" />
              <circle cx="269" cy="76" r="2.4" fill="#FCFCFC" stroke="none" />
            </g>
          </Montuur>
          <span style={LABEL}>B · amandelogen met ronde pupil</span>
        </div>

        <div style={KAART}>
          <Montuur>
            <g>
              <circle cx="94" cy="76" r="11" fill="#131313" stroke="none" />
              <circle cx="98" cy="72" r="3" fill="#FCFCFC" stroke="none" />
              <circle cx="266" cy="76" r="11" fill="#131313" stroke="none" />
              <circle cx="270" cy="72" r="3" fill="#FCFCFC" stroke="none" />
            </g>
          </Montuur>
          <span style={LABEL}>C · alleen ronde pupillen</span>
        </div>

        <div style={KAART}>
          <Montuur>
            <g>
              <path d="M94 58 C101 66 102 86 94 96 C86 86 87 66 94 58 Z" fill="#131313" stroke="none" />
              <circle cx="97" cy="68" r="2.7" fill="#FCFCFC" stroke="none" />
              <path d="M266 58 C273 66 274 86 266 96 C258 86 259 66 266 58 Z" fill="#131313" stroke="none" />
              <circle cx="269" cy="68" r="2.7" fill="#FCFCFC" stroke="none" />
            </g>
          </Montuur>
          <span style={LABEL}>D · cat-eye spleetpupillen (huidig)</span>
        </div>

        <div style={KAART}>
          <Montuur>
            <g>
              <circle cx="94" cy="76" r="11" fill="#131313" stroke="none" />
              <circle cx="98" cy="72" r="3" fill="#FCFCFC" stroke="none" />
              <path d="M240 78 Q266 92 292 78" strokeWidth="3" />
            </g>
          </Montuur>
          <span style={LABEL}>E · knipoog</span>
        </div>

      </div>

      <h2 style={{ color: '#00218F', margin: '3rem 0 1.5rem', fontSize: '1.3rem' }}>Varianten van B (amandelogen)</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', maxWidth: 1400 }}>

        <div style={KAART}>
          <Montuur>
            <g strokeWidth="1.8">
              <path d="M62 80 Q94 60 126 80 Q94 98 62 80 Z" />
              <circle cx="94" cy="79" r="8.5" fill="#131313" stroke="none" />
              <circle cx="97" cy="76" r="2.4" fill="#FCFCFC" stroke="none" />
              <path d="M234 80 Q266 60 298 80 Q266 98 234 80 Z" />
              <circle cx="266" cy="79" r="8.5" fill="#131313" stroke="none" />
              <circle cx="269" cy="76" r="2.4" fill="#FCFCFC" stroke="none" />
            </g>
          </Montuur>
          <span style={LABEL}>B1 · origineel</span>
        </div>

        <div style={KAART}>
          <Montuur>
            <g strokeWidth="1.8">
              <path d="M54 80 Q94 54 134 80 Q94 104 54 80 Z" />
              <circle cx="94" cy="79" r="11" fill="#131313" stroke="none" />
              <circle cx="98" cy="75" r="3" fill="#FCFCFC" stroke="none" />
              <path d="M226 80 Q266 54 306 80 Q266 104 226 80 Z" />
              <circle cx="266" cy="79" r="11" fill="#131313" stroke="none" />
              <circle cx="270" cy="75" r="3" fill="#FCFCFC" stroke="none" />
            </g>
          </Montuur>
          <span style={LABEL}>B2 · groter en voller</span>
        </div>

        <div style={KAART}>
          <Montuur>
            <g strokeWidth="1.8">
              <path d="M64 82 Q92 62 120 76 Q128 70 132 62 Q124 84 94 94 Q74 92 64 82 Z" />
              <circle cx="96" cy="80" r="8.5" fill="#131313" stroke="none" />
              <circle cx="99" cy="77" r="2.4" fill="#FCFCFC" stroke="none" />
              <path d="M240 76 Q268 62 296 82 Q286 92 266 94 Q236 84 228 62 Q232 70 240 76 Z" />
              <circle cx="264" cy="80" r="8.5" fill="#131313" stroke="none" />
              <circle cx="267" cy="77" r="2.4" fill="#FCFCFC" stroke="none" />
            </g>
          </Montuur>
          <span style={LABEL}>B3 · opgewipte buitenhoeken (cat-eye amandel)</span>
        </div>

        <div style={KAART}>
          <Montuur>
            <g strokeWidth="1.8">
              <path d="M62 80 Q94 60 126 80 Q94 98 62 80 Z" />
              <circle cx="94" cy="79" r="8.5" fill="#131313" stroke="none" />
              <circle cx="97" cy="76" r="2.4" fill="#FCFCFC" stroke="none" />
              <path d="M70 92 Q94 100 118 92" strokeWidth="1.3" opacity="0.6" />
              <path d="M234 80 Q266 60 298 80 Q266 98 234 80 Z" />
              <circle cx="266" cy="79" r="8.5" fill="#131313" stroke="none" />
              <circle cx="269" cy="76" r="2.4" fill="#FCFCFC" stroke="none" />
              <path d="M242 92 Q266 100 290 92" strokeWidth="1.3" opacity="0.6" />
            </g>
          </Montuur>
          <span style={LABEL}>B4 · met zacht onderlidje</span>
        </div>

        <div style={KAART}>
          <Montuur>
            <g strokeWidth="1.8">
              <path d="M62 80 Q94 60 126 80 Q94 98 62 80 Z" />
              <circle cx="94" cy="79" r="8.5" fill="#131313" stroke="none" />
              <circle cx="97" cy="76" r="2.4" fill="#FCFCFC" stroke="none" />
              <path d="M124 74 l9 -8" strokeWidth="2" />
              <path d="M234 80 Q266 60 298 80 Q266 98 234 80 Z" />
              <circle cx="266" cy="79" r="8.5" fill="#131313" stroke="none" />
              <circle cx="269" cy="76" r="2.4" fill="#FCFCFC" stroke="none" />
              <path d="M296 74 l9 -8" strokeWidth="2" />
            </g>
          </Montuur>
          <span style={LABEL}>B5 · met wimperflick</span>
        </div>

        <div style={KAART}>
          <Montuur>
            <g strokeWidth="1.8">
              <path d="M62 82 Q94 68 126 82 Q94 98 62 82 Z" />
              <path d="M85 80 A 9 9 0 0 1 103 80 L 101 86 Q94 90 87 86 Z" fill="#131313" stroke="none" />
              <circle cx="97" cy="77" r="2.2" fill="#FCFCFC" stroke="none" />
              <path d="M234 82 Q266 68 298 82 Q266 98 234 82 Z" />
              <path d="M257 80 A 9 9 0 0 1 275 80 L 273 86 Q266 90 259 86 Z" fill="#131313" stroke="none" />
              <circle cx="269" cy="77" r="2.2" fill="#FCFCFC" stroke="none" />
            </g>
          </Montuur>
          <span style={LABEL}>B6 · loom en sereen (halfgesloten)</span>
        </div>

      </div>

      <h2 style={{ color: '#00218F', margin: '3rem 0 1.5rem', fontSize: '1.3rem' }}>Strakke monturen (geometrisch precies, met B-ogen)</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', maxWidth: 1400 }}>

        <div style={KAART}>
          <svg viewBox="0 0 360 150" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" style={{ width: '100%', height: 'auto' }}>
            <ellipse cx="94" cy="78" rx="54" ry="38" transform="rotate(-7 94 78)" />
            <ellipse cx="266" cy="78" rx="54" ry="38" transform="rotate(7 266 78)" />
            <path d="M146 70 Q180 56 214 70" />
            <path d="M44 62 L14 50" />
            <path d="M316 62 L346 50" />
            <g strokeWidth="1.8">
              <path d="M66 80 Q94 62 122 80 Q94 96 66 80 Z" />
              <circle cx="94" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="97" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
              <path d="M238 80 Q266 62 294 80 Q266 96 238 80 Z" />
              <circle cx="266" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="269" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
            </g>
          </svg>
          <span style={LABEL}>F1 · strakke cat-eye (gekantelde ellipsen)</span>
        </div>

        <div style={KAART}>
          <svg viewBox="0 0 360 150" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" style={{ width: '100%', height: 'auto' }}>
            <circle cx="94" cy="78" r="45" />
            <circle cx="266" cy="78" r="45" />
            <path d="M139 72 Q180 58 221 72" />
            <path d="M49 68 L18 56" />
            <path d="M311 68 L342 56" />
            <g strokeWidth="1.8">
              <path d="M66 80 Q94 62 122 80 Q94 96 66 80 Z" />
              <circle cx="94" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="97" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
              <path d="M238 80 Q266 62 294 80 Q266 96 238 80 Z" />
              <circle cx="266" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="269" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
            </g>
          </svg>
          <span style={LABEL}>F2 · perfect rond (zoals je eigen bril)</span>
        </div>

        <div style={KAART}>
          <svg viewBox="0 0 360 150" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" style={{ width: '100%', height: 'auto' }}>
            <rect x="40" y="42" width="108" height="72" rx="26" />
            <rect x="212" y="42" width="108" height="72" rx="26" />
            <path d="M148 68 Q180 56 212 68" />
            <path d="M40 60 L12 50" />
            <path d="M320 60 L348 50" />
            <g strokeWidth="1.8">
              <path d="M66 80 Q94 62 122 80 Q94 96 66 80 Z" />
              <circle cx="94" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="97" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
              <path d="M238 80 Q266 62 294 80 Q266 96 238 80 Z" />
              <circle cx="266" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="269" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
            </g>
          </svg>
          <span style={LABEL}>F3 · afgeronde rechthoek (modern)</span>
        </div>

        <div style={KAART}>
          <svg viewBox="0 0 360 150" fill="none" stroke="#00218F" strokeWidth="2.4" strokeLinecap="round" style={{ width: '100%', height: 'auto' }}>
            <ellipse cx="94" cy="78" rx="56" ry="34" />
            <ellipse cx="266" cy="78" rx="56" ry="34" />
            <path d="M150 70 Q180 58 210 70" />
            <path d="M38 70 L10 58" />
            <path d="M322 70 L350 58" />
            <g strokeWidth="1.8">
              <path d="M66 80 Q94 62 122 80 Q94 96 66 80 Z" />
              <circle cx="94" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="97" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
              <path d="M238 80 Q266 62 294 80 Q266 96 238 80 Z" />
              <circle cx="266" cy="79" r="8" fill="#131313" stroke="none" />
              <circle cx="269" cy="76" r="2.2" fill="#FCFCFC" stroke="none" />
            </g>
          </svg>
          <span style={LABEL}>F4 · brede ovalen</span>
        </div>

      </div>
    </main>
  );
}
