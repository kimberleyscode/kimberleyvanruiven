import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/artikelen' },
  title: "Artikelen over ethische AI · Kimberley van Ruiven",
  description: "Praktische artikelen over verantwoord AI-gebruik voor ondernemers: de EU AI Act, klantdata en AI-geletterdheid, zonder jargon.",
};

const ARTIKELEN = [
  {
    slug: 'ai-act-voor-ondernemers',
    label: 'EU AI Act',
    titel: 'Wat de EU AI Act van jou als ondernemer vraagt (en wat niet)',
    intro: 'De AI Act klinkt als iets voor juristen van grote bedrijven. Toch raakt hij ook jou, al valt de praktijk mee als je weet waar je op moet letten.',
    datum: 'juli 2026',
  },
  {
    slug: 'klantdata-en-chatgpt',
    label: 'Privacy',
    titel: 'Welke klantdata deel je wel en niet met ChatGPT?',
    intro: 'De meeste datalekken via AI ontstaan niet door hackers, maar door goedbedoelde prompts. Drie vuistregels die je vandaag kunt toepassen.',
    datum: 'juli 2026',
  },
];

export default function Artikelen() {
  return (
    <main className="privacy-page">

      <nav className="nav">
        <Link href="/" className="nav-logo">Kimberley van Ruiven</Link>
        <div className="nav-links">
          <Link href="/#over" className="nav-link">Over</Link>
          <Link href="/#diensten" className="nav-link">Diensten</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      <div className="privacy-content">

        <header className="privacy-header">
          <span className="section-label">Kennis</span>
          <h1 className="section-heading">Artikelen</h1>
          <p className="privacy-intro">
            Praktische stukken over verantwoord AI-gebruik, geschreven voor ondernemers en organisaties zonder technische achtergrond.
          </p>
        </header>

        {ARTIKELEN.map((a) => (
          <section className="privacy-section" key={a.slug}>
            <p style={{ marginBottom: '0.35rem' }}><strong>{a.label}</strong> · {a.datum}</p>
            <h2 style={{ marginTop: 0 }}>
              <Link href={`/artikelen/${a.slug}`}>{a.titel}</Link>
            </h2>
            <p>{a.intro}</p>
            <p><Link href={`/artikelen/${a.slug}`}>Lees het artikel →</Link></p>
          </section>
        ))}

      </div>
    </main>
  );
}
