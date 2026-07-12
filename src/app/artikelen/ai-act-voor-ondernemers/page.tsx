import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/artikelen/ai-act-voor-ondernemers' },
  title: "Wat de EU AI Act van jou als ondernemer vraagt · Kimberley van Ruiven",
  description: "De EU AI Act in gewone taal: wat je als mkb'er of zzp'er wel en niet hoeft te regelen, inclusief de AI-geletterdheidsplicht van artikel 4.",
};

export default function AIActArtikel() {
  return (
    <main className="privacy-page">

      <nav className="nav">
        <Link href="/" className="nav-logo">Kimberley van Ruiven</Link>
        <div className="nav-links">
          <Link href="/artikelen" className="nav-link">Artikelen</Link>
          <Link href="/#diensten" className="nav-link">Diensten</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      <div className="privacy-content">

        <header className="privacy-header">
          <span className="section-label">EU AI Act · juli 2026</span>
          <h1 className="section-heading">Wat de EU AI Act van jou als ondernemer vraagt (en wat niet)</h1>
          <p className="privacy-intro">
            De AI Act klinkt als iets voor juristen van grote techbedrijven. Toch raakt hij ook jou zodra je ChatGPT, een AI-chatbot of een slimme planningstool gebruikt. Het goede nieuws: voor de meeste ondernemers valt de praktijk erg mee, als je weet waar je op moet letten.
          </p>
        </header>

        <section className="privacy-section">
          <h2>De kern: regels naar risico</h2>
          <p>
            De AI Act deelt AI-toepassingen in naar risico. Een handjevol toepassingen is verboden (denk aan social scoring). Hoog-risicosystemen, zoals AI die sollicitanten beoordeelt of kredietwaardigheid inschat, krijgen strenge eisen. Maar het overgrote deel van wat jij als ondernemer gebruikt, zoals tekstassistenten, chatbots en transcriptietools, valt in de lichte categorie. Daarvoor gelden vooral transparantieregels.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Wat je wél moet regelen</h2>
          <ul>
            <li><strong>AI-geletterdheid (artikel 4).</strong> Sinds 2 februari 2025 moet iedere organisatie die AI gebruikt ervoor zorgen dat medewerkers er voldoende van begrijpen om er verantwoord mee te werken. Ook als je maar twee mensen in dienst hebt. Een gerichte training of workshop volstaat vaak al; het gaat om aantoonbare, passende kennis.</li>
            <li><strong>Transparantie.</strong> Praat een klant met jouw chatbot? Dan moet duidelijk zijn dat het AI is. Publiceer je AI-gegenereerde beelden of audio die echt lijken? Dan hoort daar een vermelding bij.</li>
            <li><strong>Weten wat je gebruikt.</strong> Je hoeft geen register bij te houden zoals de overheid, maar je moet wel kunnen vertellen welke AI-tools in je bedrijf draaien en wat ze doen. Een simpel lijstje is een prima begin.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Wat je níet hoeft</h2>
          <ul>
            <li>Geen dure certificering of audit voor gewone kantoortoepassingen.</li>
            <li>Geen jurist op afroep: de verplichtingen voor lichte toepassingen zijn met gezond verstand in te richten.</li>
            <li>Geen paniek bij elke nieuwe tool. De vraag is steeds dezelfde: wat doet het, met welke data, en wie kan erdoor geraakt worden?</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Begin hier</h2>
          <p>
            Drie stappen die je deze maand kunt zetten: maak een lijstje van alle AI-tools die jij en je team gebruiken, check per tool of klant- of persoonsgegevens erin verdwijnen, en plan een moment om je team AI-geletterd te maken.
          </p>
          <p>
            Dat laatste hoef je niet zelf uit te vinden: ik geef een <Link href="/#diensten">workshop AI-geletterdheid</Link> die precies dit afdekt, praktisch en op jouw organisatie toegespitst. Vragen over jouw situatie? <Link href="/#contact">Neem contact op</Link>.
          </p>
        </section>

      </div>
    </main>
  );
}
