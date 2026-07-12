import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/artikelen/klantdata-en-chatgpt' },
  title: "Welke klantdata deel je wel en niet met ChatGPT? · Kimberley van Ruiven",
  description: "Drie vuistregels voor veilig AI-gebruik met klantgegevens: wat kan er in een prompt, wat nooit, en welke instellingen je vandaag moet aanzetten.",
};

export default function KlantdataArtikel() {
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
          <span className="section-label">Privacy · juli 2026</span>
          <h1 className="section-heading">Welke klantdata deel je wel en niet met ChatGPT?</h1>
          <p className="privacy-intro">
            De meeste datalekken via AI ontstaan niet door hackers, maar door goedbedoelde prompts: een klantmail die je &quot;even laat samenvatten&quot;, een offerte met naam en tarief die je laat herschrijven. Met drie vuistregels voorkom je de meest gemaakte fouten.
          </p>
        </header>

        <section className="privacy-section">
          <h2>Vuistregel 1: prompt alsof het openbaar is</h2>
          <p>
            Behandel alles wat je in een publieke AI-tool typt alsof het buiten je bedrijf terecht kan komen. Namen, adressen, financiële gegevens, gezondheidsinformatie en alles wat onder je geheimhoudingsplicht valt: niet doen. Wat wél kan: dezelfde vraag met geanonimiseerde gegevens. &quot;Herschrijf deze mail aan [klant] over [project]&quot; werkt net zo goed en lekt niets.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Vuistregel 2: zet trainen op jouw data uit</h2>
          <p>
            Bij de gratis versies van veel AI-tools wordt jouw invoer standaard gebruikt om modellen te verbeteren. Dat wil je niet met werkgerelateerde inhoud. Check vandaag nog je instellingen: bij ChatGPT staat het onder Settings, Data Controls (&quot;Improve the model for everyone&quot; uit); zakelijke abonnementen zoals Teams en Enterprise trainen standaard niet op jouw data. Bij Claude geldt hetzelfde principe: controleer je privacy-instellingen en kies waar mogelijk een zakelijke variant.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Vuistregel 3: structureel gebruik vraagt om afspraken op papier</h2>
          <p>
            Gebruik je AI structureel in processen waar klantgegevens doorheen gaan, bijvoorbeeld een chatbot of een transcriptietool, dan ben je onder de AVG verantwoordelijk voor wat die tool met de gegevens doet. Dat regel je met een verwerkersovereenkomst, het liefst met een AI-addendum waarin staat welke tools welke data mogen zien. Zo bouwde ik voor een klant een <Link href="/#portfolio">AI-chatbot die volledig GDPR-compliant is ingericht</Link>: hetzelfde gemak, zonder losse eindjes.
          </p>
        </section>

        <section className="privacy-section">
          <h2>De snelle checklist</h2>
          <ul>
            <li>Geen persoonsgegevens of vertrouwelijke informatie in publieke AI-tools.</li>
            <li>Anonimiseer prompts: vervang namen en herkenbare details door placeholders.</li>
            <li>Zet &quot;trainen op mijn data&quot; uit, of gebruik een zakelijk abonnement.</li>
            <li>Structureel AI in je klantprocessen? Regel een verwerkersovereenkomst met AI-addendum.</li>
            <li>Leer je team deze regels: dat is meteen een deel van je <Link href="/artikelen/ai-act-voor-ondernemers">AI-geletterdheidsplicht onder de AI Act</Link>.</li>
          </ul>
          <p>
            Twijfel je over jouw setup? In een <Link href="/#diensten">losse sessie</Link> lopen we er samen doorheen.
          </p>
        </section>

      </div>
    </main>
  );
}
