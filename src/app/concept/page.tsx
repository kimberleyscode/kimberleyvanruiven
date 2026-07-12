import type { Metadata } from 'next';
import Link from 'next/link';
import './concept.css';

export const metadata: Metadata = {
  title: "Conceptpagina · Kimberley van Ruiven",
  description: "Ontwerpconcept: lichte, redactionele opzet voor kimberleyvanruiven.nl.",
  robots: "noindex, nofollow",
};

const CAL_LINK = "https://calendar.app.google/douZqiDQ7p39Xf6u7";

const DIENSTEN = [
  { nr: '01', naam: 'AI-chatbot op maat', desc: 'Een chatbot die past bij jouw platform, GDPR-compliant ingericht en direct waardevol voor klanten of medewerkers.' },
  { nr: '02', naam: 'AI-workflow automatisering', desc: 'Ik breng je workflow in kaart en automatiseer wat tijd vreet, of bouw een werkomgeving in Notion die overzicht geeft.' },
  { nr: '03', naam: 'Webapplicatie of tool bouwen', desc: 'Van idee tot werkend product, met de ethische keuzes al gemaakt.' },
  { nr: '04', naam: 'EU AI Act implementatieondersteuning', desc: 'De regelgeving vertaald naar concrete stappen, zodat je klaar bent voordat je er last van krijgt.' },
  { nr: '05', naam: 'Workshop AI-geletterdheid', desc: 'Verplicht onder de AI Act, waardevol voor je hele team: in één dagdeel verantwoord leren werken met AI.' },
];

const AANPAK = [
  { nr: '01', naam: 'We beginnen bij de vraag achter de vraag', desc: 'Wat wil je écht oplossen? Soms is dat AI, soms een beter proces. Je krijgt een eerlijk antwoord.' },
  { nr: '02', naam: 'Ik denk vooraf na over wat er mis kan gaan', desc: 'Data, privacy, bias, verantwoordelijkheid: de vragen die anderen pas stellen als het misgaat, staan bij mij aan het begin.' },
  { nr: '03', naam: 'Ik bouw wat je nodig hebt', desc: 'Een chatbot, een tool, een workflow. Iets wat je organisatie direct kan gebruiken, met de ethische keuzes al verwerkt.' },
  { nr: '04', naam: 'Je staat er niet alleen voor', desc: 'AI verandert snel. Via de strippenkaart of een losse sessie houd je een aanspreekpunt dat je systemen kent.' },
];

const CASES = [
  {
    img: '/portfolio-co2.jpg',
    alt: 'Screenshot van de AI CO₂-calculator: geschatte uitstoot per dag met vergelijkingen',
    titel: 'AI CO₂-calculator',
    meta: '2026 · Webtool · Next.js, Claude API',
    probleem: 'Ondernemers hadden geen idee hoeveel CO₂ hun AI-gebruik veroorzaakte.',
    aanpak: 'Een interactieve calculator die uitstoot berekent per tool en groenere alternatieven voorstelt, op basis van wetenschappelijke bronnen.',
    resultaat: 'Voor iedereen gratis te gebruiken: in één minuut inzicht in de klimaatimpact van je AI-gebruik.',
    href: '/co2', linktekst: 'Bekijk de calculator →',
  },
  {
    img: '/portfolio-quiz.jpg',
    alt: 'Startscherm van de quiz Gebruik jij AI, of gebruikt AI jou?',
    titel: 'Quiz: gebruik jij AI, of gebruikt AI jou?',
    meta: '2026 · Eigen project · PWA',
    probleem: 'De meeste ondernemers gebruiken AI onbewust, zonder te weten wat er met hun data gebeurt.',
    aanpak: 'Een gratis quiz van vijf minuten die laat zien waar je staat als bewuste AI-gebruiker.',
    resultaat: 'Mijn merkverhaal in spelvorm: bezoekers zien direct waar ze kunnen bijsturen.',
    href: 'https://kimberleyscode.github.io/ai-quiz/', linktekst: 'Doe de quiz →', extern: true,
  },
  {
    img: null,
    alt: '',
    titel: 'GDPR-compliant AI-chatbot',
    meta: '2026 · Klantproject · Claude API, Huddle',
    probleem: 'Een klant wilde leden 24/7 kunnen helpen zonder extra personeel.',
    aanpak: 'Een AI-chatbot op het ledenplatform, GDPR-compliant ingericht, inclusief verwerkersovereenkomst met AI-addendum.',
    resultaat: 'Leden krijgen dag en nacht direct antwoord, en de privacy is contractueel geregeld.',
    href: null, linktekst: null,
  },
];

const OVERIG_WERK = [
  { meta: '2026 · Klantproject', titel: 'AI-persona voor contentcreatie', desc: 'Een getrainde schrijfassistent op basis van merkdocumenten en voice notes, zodat de klant haar eigen stem behoudt.' },
  { meta: '2026 · Klantproject', titel: 'Klantportaal-systeem in Notion', desc: 'Dienstverleners laten klanten gestructureerd meekijken in lopende projecten; gegevens strikt gescheiden per portaal.' },
  { meta: '2026 · Klantproject', titel: 'Online cursusomgeving in Notion', desc: 'Lessen, cursisten en voortgang op één plek, zonder de kosten van een leerplatform.' },
  { meta: '2026 · Klantproject', titel: 'WordPress-site gered na malware', desc: 'Ruim 100 verdachte bestanden opgeruimd, plugins gesaneerd en de site beveiligd, met SEO-optimalisatie.' },
  { meta: '2026 · Eigen project', titel: 'Nectar, privacyvriendelijke cyclustracker', desc: 'Alle data blijft op je eigen apparaat: geen account, geen server, wél inzicht.' },
];

const ARTIKELEN = [
  { meta: 'EU AI Act', titel: 'Wat de EU AI Act van jou als ondernemer vraagt (en wat niet)', href: '/artikelen/ai-act-voor-ondernemers' },
  { meta: 'Privacy', titel: 'Welke klantdata deel je wel en niet met ChatGPT?', href: '/artikelen/klantdata-en-chatgpt' },
];

export default function Concept() {
  return (
    <div className="cpt-root">

      <aside className="cpt-side">
        <a href="#top" className="cpt-wordmark">Kimberley van Ruiven</a>
        <nav className="cpt-side-nav">
          <a href="#over">Over</a>
          <a href="#diensten">Diensten</a>
          <a href="#aanpak">Aanpak</a>
          <a href="#werk">Werk</a>
          <a href="#artikelen">Artikelen</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="cpt-side-foot">
          Ontwerpconcept · <Link href="/">terug naar de huidige site</Link>
        </p>
      </aside>

      <main className="cpt-main" id="top">
        <div className="cpt-inner">

          {/* Hero */}
          <header>
            <p className="cpt-eyebrow">Ethische AI-consultant · Rotterdam</p>
            <h1 className="cpt-display">Ik bouw AI waar je achter kunt staan.</h1>
            <dl className="cpt-meta">
              <div className="cpt-meta-row"><dt>Focus</dt><dd>Ethische AI, AI-geletterdheid en automatisering</dd></div>
              <div className="cpt-meta-row"><dt>Voor</dt><dd>Bedrijven en ondernemers die kiezen voor een mens-gerichte toekomst met technologie</dd></div>
              <div className="cpt-meta-row"><dt>Achtergrond</dt><dd>MSc Information Studies · IT-consultancy bij bank, pensioenfonds en IT-startup</dd></div>
              <div className="cpt-meta-row"><dt>Contact</dt><dd><a className="cpt-a" href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a></dd></div>
            </dl>
            <figure className="cpt-photo">
              <img src="/kimberley.jpg" alt="Portret van Kimberley van Ruiven" />
            </figure>
          </header>

          {/* Over */}
          <section className="cpt-section" id="over">
            <h2 className="cpt-h2">Een technische kijk door een menselijke bril.</h2>
            <div className="cpt-body">
              <p>Ik ben Kimberley, voormalig IT-consultant, gespecialiseerd in ethische AI en AI-bias. Ik help je om je bedrijf aan de achterkant op orde te krijgen, zodat je productiever en met meer structuur kunt werken. En ik denk vooraf na over de vragen die anderen pas stellen als het misgaat.</p>
              <p>Ik geloof dat technologie en menselijkheid samen kunnen gaan, en dat vrouwelijke perspectieven onmisbaar zijn in hoe we AI bouwen en gebruiken. Benieuwd hoe ik zelf met AI werk? Ik leg het volledig open in <Link className="cpt-a" href="/zo-werk-ik-met-ai">zo werk ik met AI</Link>.</p>
            </div>

            <blockquote className="cpt-quote">
              &ldquo;Niet alleen: werkt het? Maar: voor wie werkt het, en voor wie niet?&rdquo;
            </blockquote>

            <div className="cpt-thesis">
              <p className="cpt-thesis-label">Afstudeeronderzoek · MSc Information Studies</p>
              <p className="cpt-thesis-title">AI-bias in hate speech-detectie</p>
              <p className="cpt-muted">Hoe algoritmes die online haat moeten herkennen zelf bevooroordeeld kunnen zijn, en wat daaraan te doen is. Scriptie binnenkort hier te lezen.</p>
            </div>
          </section>

          {/* Waarom */}
          <section className="cpt-section" id="waarom">
            <h2 className="cpt-h2">Waarom AI in de praktijk misgaat</h2>
            <div className="cpt-stats">
              <div className="cpt-stat">
                <p className="cpt-stat-num">63%</p>
                <p className="cpt-stat-desc">van de Nederlandse bedrijven noemt gebrek aan AI-expertise als voornaamste rem op verdere adoptie.</p>
                <p className="cpt-stat-src">Bron: <a href="https://www.cbs.nl/en-gb/news/2025/09/increasing-use-of-ai-by-business" target="_blank" rel="noopener noreferrer">CBS, 2025</a></p>
              </div>
              <div className="cpt-stat">
                <p className="cpt-stat-num">80%</p>
                <p className="cpt-stat-desc">van de AI-projecten strandt voordat ze blijvende waarde leveren: twee keer zo vaak als IT-projecten zonder AI.</p>
                <p className="cpt-stat-src">Bron: <a href="https://www.rand.org/pubs/research_reports/RRA2680-1.html" target="_blank" rel="noopener noreferrer">RAND, 2024</a></p>
              </div>
            </div>
            <blockquote className="cpt-quote">
              &ldquo;Bij een pensioenfonds zag ik AI-projecten stranden terwijl de technologie gewoon werkte. Niemand had nagedacht over wat er in de data zat, wie er verantwoordelijk was, en wat je uitlegt als een algoritme beslist. Dat is het probleem dat ik oplos.&rdquo;
            </blockquote>
          </section>

          {/* Diensten */}
          <section className="cpt-section" id="diensten">
            <h2 className="cpt-h2">Diensten</h2>
            <div className="cpt-list">
              {DIENSTEN.map((d) => (
                <div className="cpt-row" key={d.nr}>
                  <span className="cpt-row-meta">{d.nr}</span>
                  <div>
                    <p className="cpt-row-title">{d.naam}</p>
                    <p className="cpt-row-desc">{d.desc}</p>
                  </div>
                  <a className="cpt-row-link" href={CAL_LINK} target="_blank" rel="noopener noreferrer">Bespreek je project →</a>
                </div>
              ))}
            </div>
          </section>

          {/* Aanpak */}
          <section className="cpt-section" id="aanpak">
            <h2 className="cpt-h2">Aanpak</h2>
            <div className="cpt-list">
              {AANPAK.map((s) => (
                <div className="cpt-row" key={s.nr}>
                  <span className="cpt-row-meta">{s.nr}</span>
                  <div>
                    <p className="cpt-row-title">{s.naam}</p>
                    <p className="cpt-row-desc">{s.desc}</p>
                  </div>
                  <span />
                </div>
              ))}
            </div>
          </section>

          {/* Werk */}
          <section className="cpt-section" id="werk">
            <h2 className="cpt-h2">Uitgelicht werk</h2>

            {CASES.map((c) => (
              <article className="cpt-case" key={c.titel}>
                {c.img && <img className="cpt-case-img" src={c.img} alt={c.alt} loading="lazy" />}
                <div className="cpt-case-head">
                  <h3 className="cpt-case-title">{c.titel}</h3>
                  <span className="cpt-case-meta">{c.meta}</span>
                </div>
                <div className="cpt-case-grid">
                  <div>
                    <p className="cpt-case-label">Probleem</p>
                    <p>{c.probleem}</p>
                  </div>
                  <div>
                    <p className="cpt-case-label">Aanpak</p>
                    <p>{c.aanpak}</p>
                  </div>
                  <div>
                    <p className="cpt-case-label">Resultaat</p>
                    <p>{c.resultaat}</p>
                  </div>
                </div>
                {c.href && (
                  c.extern
                    ? <a className="cpt-case-link" href={c.href} target="_blank" rel="noopener noreferrer">{c.linktekst}</a>
                    : <Link className="cpt-case-link" href={c.href}>{c.linktekst}</Link>
                )}
              </article>
            ))}

            <h2 className="cpt-h2" style={{ fontSize: '1.5rem', marginTop: '3.5rem' }}>Meer werk</h2>
            <div className="cpt-list">
              {OVERIG_WERK.map((w) => (
                <div className="cpt-row" key={w.titel}>
                  <span className="cpt-row-meta">{w.meta}</span>
                  <div>
                    <p className="cpt-row-title">{w.titel}</p>
                    <p className="cpt-row-desc">{w.desc}</p>
                  </div>
                  <span />
                </div>
              ))}
            </div>
          </section>

          {/* Artikelen */}
          <section className="cpt-section" id="artikelen">
            <h2 className="cpt-h2">Artikelen</h2>
            <div className="cpt-list">
              {ARTIKELEN.map((a) => (
                <div className="cpt-row" key={a.href}>
                  <span className="cpt-row-meta">{a.meta}</span>
                  <div>
                    <p className="cpt-row-title">{a.titel}</p>
                  </div>
                  <Link className="cpt-row-link" href={a.href}>Lees →</Link>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="cpt-section" id="contact">
            <h2 className="cpt-h2">Vertel me waar je vastloopt.</h2>
            <div className="cpt-body">
              <p className="cpt-muted">Eén gesprek is genoeg om te weten of we bij elkaar passen. Je krijgt altijd een eerlijk antwoord, ook als dat &ldquo;dit heeft geen AI nodig&rdquo; is.</p>
            </div>
            <a className="cpt-cta" href={CAL_LINK} target="_blank" rel="noopener noreferrer">Plan een kennismaking</a>
          </section>

          <footer className="cpt-footer">
            <span>© 2026 Kimberley van Ruiven</span>
            <Link href="/zo-werk-ik-met-ai">Zo werk ik met AI</Link>
            <Link href="/privacy">Privacybeleid</Link>
            <span>Gebouwd mét AI, met de mens aan het stuur.</span>
          </footer>

        </div>
      </main>
    </div>
  );
}
