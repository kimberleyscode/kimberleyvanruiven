import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacybeleid · Spill Your Tea",
  description: "Hoe Spill Your Tea omgaat met jouw persoonsgegevens, cookies en AI-transparantie.",
};

export default function Privacy() {
  return (
    <main className="privacy-page">

      <nav className="nav">
        <Link href="/" className="nav-logo">Spill Your Tea</Link>
        <div className="nav-links">
          <Link href="/#over" className="nav-link">Over</Link>
          <Link href="/#aanbod" className="nav-link">Aanbod</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      <div className="privacy-content">

        <header className="privacy-header">
          <span className="section-label">Juridisch</span>
          <h1 className="section-heading">Privacybeleid</h1>
          <p className="privacy-intro">
            Laatst bijgewerkt: juni 2026
          </p>
        </header>

        <section className="privacy-section">
          <h2>1. Wie is verantwoordelijk?</h2>
          <p>
            Kimberley van Ruiven, handelend onder de naam <strong>Spill Your Tea</strong>, is de verwerkingsverantwoordelijke in de zin van de Algemene Verordening Gegevensbescherming (AVG / GDPR).
          </p>
          <p>
            Contact: <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Welke gegevens worden verwerkt?</h2>
          <p>
            Deze website verzamelt zelf <strong>geen persoonsgegevens</strong> via formulieren of tracking. Er is geen eigen analytics of cookiebanner nodig.
          </p>
          <p>
            Wanneer je via deze website contact opneemt (per e-mail of via een afspraaklink) of gebruik maakt van externe diensten, gelden de privacyvoorwaarden van die diensten:
          </p>
          <ul>
            <li><strong>Google Calendar</strong> — voor het boeken van sessies. Google verwerkt gegevens conform hun eigen privacybeleid.</li>
            <li><strong>Instagram / Meta</strong> — bij het bezoeken van het profiel of het sturen van berichten.</li>
            <li><strong>LinkedIn</strong> — bij het bezoeken van het profiel of sturen van berichten.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Cookies</h2>
          <p>
            Deze website gebruikt <strong>geen tracking- of analytische cookies</strong> van eigen systemen. Externe partijen (zoals hierboven genoemd) kunnen wel cookies plaatsen wanneer je hun diensten bezoekt. Dit valt buiten de verantwoordelijkheid van Spill Your Tea.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Jouw rechten (AVG)</h2>
          <p>Op grond van de AVG heb je de volgende rechten:</p>
          <ul>
            <li><strong>Recht op inzage</strong> — je kunt opvragen welke gegevens van jou zijn opgeslagen.</li>
            <li><strong>Recht op rectificatie</strong> — onjuiste gegevens laten corrigeren.</li>
            <li><strong>Recht op verwijdering</strong> — gegevens laten wissen ("recht op vergetelheid").</li>
            <li><strong>Recht op beperking</strong> — de verwerking (tijdelijk) laten stopzetten.</li>
            <li><strong>Recht op bezwaar</strong> — bezwaar maken tegen verwerking op basis van gerechtvaardigd belang.</li>
            <li><strong>Recht op dataportabiliteit</strong> — gegevens in een machine-leesbaar formaat opvragen.</li>
          </ul>
          <p>
            Voor vragen of het uitoefenen van je rechten: <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>. Je hebt ook het recht een klacht in te dienen bij de <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">Autoriteit Persoonsgegevens</a>.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. AI-transparantie (EU AI Act)</h2>
          <p>
            In lijn met de EU AI Act en vanuit mijn eigen waarden rondom ethische technologie, ben ik transparant over het gebruik van AI-tools:
          </p>
          <ul>
            <li>Deze website is <strong>mede ontwikkeld met behulp van AI-tools</strong> (o.a. voor ontwerp, tekst en code).</li>
            <li>De inhoud is door mij, Kimberley van Ruiven, gecontroleerd, beoordeeld en goedgekeurd.</li>
            <li>Bij het verlenen van adviesdiensten maak ik gebruik van AI-tools als <strong>ondersteunend hulpmiddel</strong>. Conclusies en aanbevelingen zijn altijd mensenwerk en vallen onder mijn professionele verantwoordelijkheid.</li>
            <li>Er worden <strong>geen geautomatiseerde beslissingen</strong> genomen over jou als persoon via deze website.</li>
          </ul>
          <p>
            Heb je vragen over het gebruik van AI in mijn werk? Ik ga er graag over in gesprek — dat is precies waar Spill Your Tea voor is.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Wijzigingen</h2>
          <p>
            Dit privacybeleid kan worden aangepast bij wijzigingen in de dienstverlening of wetgeving. De meest actuele versie staat altijd op deze pagina.
          </p>
        </section>

        <div className="privacy-back">
          <Link href="/" className="btn-primary">← Terug naar de website</Link>
        </div>

      </div>

      <footer className="footer">
        <span>© 2026 Kimberley van Ruiven</span>
        <span className="footer-brand">Spill Your Tea</span>
        <span className="footer-ai">Deze website is ontwikkeld met AI-ondersteuning.</span>
      </footer>

    </main>
  );
}
