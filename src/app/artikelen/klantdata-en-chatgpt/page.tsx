import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/artikelen/klantdata-en-chatgpt',
    languages: { 'nl-NL': '/artikelen/klantdata-en-chatgpt', 'en': '/en/articles/client-data-and-chatgpt' },
  },
  title: "Welke klantdata deel je wel en niet met ChatGPT? · Kimberley van Ruiven",
  description: "Drie vuistregels voor veilig AI-gebruik met klantgegevens: wat kan er in een prompt, wat nooit, en welke instellingen je vandaag moet aanzetten.",
};

export default function KlantdataArtikel() {
  return (
    <C2Tekstpagina
      label="Privacy · juli 2026"
      regels={['Klantdata', 'en ChatGPT']}
      anderePad="/en/articles/client-data-and-chatgpt"
      scatter={[[11, 5, '76%', '10%'], [2, 3.2, '88%', '58%']]}
      intro={
        <p>
          De meeste datalekken via AI ontstaan niet door hackers, maar door goedbedoelde prompts: een klantmail die je &ldquo;even laat samenvatten&rdquo;, een offerte met naam en tarief die je laat herschrijven. Met drie vuistregels voorkom je de meest gemaakte fouten.
        </p>
      }
    >
      <section>
        <h2>Vuistregel 1: prompt alsof het openbaar is</h2>
        <p>
          Behandel alles wat je in een publieke AI-tool typt alsof het buiten je bedrijf terecht kan komen. Namen, adressen, financiële gegevens, gezondheidsinformatie en alles wat onder je geheimhoudingsplicht valt: niet doen. Wat wél kan: dezelfde vraag met geanonimiseerde gegevens. &ldquo;Herschrijf deze mail aan [klant] over [project]&rdquo; werkt net zo goed en lekt niets.
        </p>
      </section>

      <section>
        <h2>Vuistregel 2: zet trainen op jouw data uit</h2>
        <p>
          Bij de gratis versies van veel AI-tools wordt jouw invoer standaard gebruikt om modellen te verbeteren. Dat wil je niet met werkgerelateerde inhoud. Check vandaag nog je instellingen: bij ChatGPT staat het onder Settings, Data Controls (&ldquo;Improve the model for everyone&rdquo; uit); zakelijke abonnementen zoals Teams en Enterprise trainen standaard niet op jouw data. Bij Claude geldt hetzelfde principe: controleer je privacy-instellingen en kies waar mogelijk een zakelijke variant.
        </p>
      </section>

      <section>
        <h2>Vuistregel 3: structureel gebruik vraagt om afspraken op papier</h2>
        <p>
          Gebruik je AI structureel in processen waar klantgegevens doorheen gaan, bijvoorbeeld een chatbot of een transcriptietool, dan ben je onder de AVG verantwoordelijk voor wat die tool met de gegevens doet. Dat regel je met een verwerkersovereenkomst, het liefst met een AI-addendum waarin staat welke tools welke data mogen zien. Zo bouwde ik voor een klant een <Link href="/diensten/ai-oplossingen-op-maat">AI-chatbot die volledig GDPR-compliant is ingericht</Link>: hetzelfde gemak, zonder losse eindjes.
        </p>
      </section>

      <section>
        <h2>De snelle checklist</h2>
        <ul>
          <li>Geen persoonsgegevens of vertrouwelijke informatie in publieke AI-tools.</li>
          <li>Anonimiseer prompts: vervang namen en herkenbare details door placeholders.</li>
          <li>Zet &ldquo;trainen op mijn data&rdquo; uit, of gebruik een zakelijk abonnement.</li>
          <li>Structureel AI in je klantprocessen? Regel een verwerkersovereenkomst met AI-addendum.</li>
          <li>Leer je team deze regels: dat is meteen een deel van je <Link href="/artikelen/ai-act-voor-ondernemers">AI-geletterdheidsplicht onder de AI Act</Link>.</li>
        </ul>
        <p>
          Twijfel je over jouw setup? Mail naar <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>, dan lopen we er samen doorheen.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
