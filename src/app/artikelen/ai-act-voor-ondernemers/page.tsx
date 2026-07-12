import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/artikelen/ai-act-voor-ondernemers',
    languages: { 'nl-NL': '/artikelen/ai-act-voor-ondernemers', 'en': '/en/articles/the-ai-act-for-smes' },
  },
  title: "Wat de EU AI Act van jou als ondernemer vraagt · Kimberley van Ruiven",
  description: "De EU AI Act in gewone taal: wat je als mkb'er of zzp'er wel en niet hoeft te regelen, inclusief de AI-geletterdheidsplicht van artikel 4.",
};

export default function AIActArtikel() {
  return (
    <C2Tekstpagina
      label="EU AI Act · juli 2026"
      regels={['Wat de AI Act', 'van je vraagt']}
      anderePad="/en/articles/the-ai-act-for-smes"
      scatter={[[16, 5, '74%', '10%'], [7, 3.2, '86%', '60%']]}
      intro={
        <p>
          De AI Act klinkt als iets voor juristen van grote techbedrijven. Toch raakt hij ook jou zodra je ChatGPT, een AI-chatbot of een slimme planningstool gebruikt. Het goede nieuws: voor de meeste ondernemers valt de praktijk erg mee, als je weet waar je op moet letten.
        </p>
      }
    >
      <section>
        <h2>De kern: regels naar risico</h2>
        <p>
          De AI Act deelt AI-toepassingen in naar risico. Een handjevol toepassingen is verboden (denk aan social scoring). Hoog-risicosystemen, zoals AI die sollicitanten beoordeelt of kredietwaardigheid inschat, krijgen strenge eisen. Maar het overgrote deel van wat jij als ondernemer gebruikt, zoals tekstassistenten, chatbots en transcriptietools, valt in de lichte categorie. Daarvoor gelden vooral transparantieregels.
        </p>
      </section>

      <section>
        <h2>Wat je wél moet regelen</h2>
        <p>
          Allereerst AI-geletterdheid, de plicht uit artikel 4. Sinds 2 februari 2025 moet iedere organisatie die AI gebruikt ervoor zorgen dat medewerkers er voldoende van begrijpen om er verantwoord mee te werken. Ook als je maar twee mensen in dienst hebt. Een gerichte training of workshop volstaat vaak al; het gaat om aantoonbare, passende kennis.
        </p>
        <p>
          Daarnaast transparantie. Praat een klant met jouw chatbot? Dan moet duidelijk zijn dat het AI is. Publiceer je AI-gegenereerde beelden of audio die echt lijken? Dan hoort daar een vermelding bij.
        </p>
        <p>
          En tot slot: weten wat je gebruikt. Je hoeft geen register bij te houden zoals de overheid, maar je moet wel kunnen vertellen welke AI-tools in je bedrijf draaien en wat ze doen. Een simpel lijstje is een prima begin.
        </p>
      </section>

      <section>
        <h2>Wat je níet hoeft</h2>
        <p>
          Geen dure certificering of audit voor gewone kantoortoepassingen, en geen jurist op afroep: de verplichtingen voor lichte toepassingen zijn met gezond verstand in te richten. Ook geen paniek bij elke nieuwe tool. De vraag is steeds dezelfde: wat doet het, met welke data, en wie kan erdoor geraakt worden?
        </p>
      </section>

      <section>
        <h2>Begin hier</h2>
        <p>
          Drie stappen die je deze maand kunt zetten: maak een lijstje van alle AI-tools die jij en je team gebruiken, check per tool of klant- of persoonsgegevens erin verdwijnen, en plan een moment om je team AI-geletterd te maken.
        </p>
        <p>
          Dat laatste hoef je niet zelf uit te vinden: ik geef een <Link href="/diensten/ai-beleid-en-training">workshop AI-geletterdheid</Link> die precies dit afdekt, praktisch en op jouw organisatie toegespitst. Vragen over jouw situatie? Mail naar <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
