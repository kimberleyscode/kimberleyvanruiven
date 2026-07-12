import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/zo-werk-ik-met-ai' },
  title: "Zo werk ik met AI · Kimberley van Ruiven",
  description: "Volledige transparantie over hoe ik AI inzet: welke tools, wat er met jouw gegevens gebeurt, en wanneer ik AI juist niet gebruik.",
};

export default function ZoWerkIkMetAI() {
  return (
    <C2Tekstpagina
      label="Transparantie"
      regels={['Zo werk ik', 'met AI']}
      bijgewerkt="juli 2026"
      scatter={[[8, 5.4, '70%', '8%'], [14, 3.4, '84%', '58%'], [3, 2.6, '58%', '78%']]}
      intro={
        <p>
          Ik adviseer over verantwoorde AI. Dan mag je van mij verwachten dat ik zelf het goede voorbeeld geef. Op deze pagina lees je precies hoe ik AI inzet in mijn werk, wat er met jouw gegevens gebeurt en wanneer ik AI bewust laat liggen.
        </p>
      }
    >
      <section>
        <h2>Welke AI-tools ik gebruik, en waarvoor</h2>
        <p>
          Claude van Anthropic is mijn primaire AI-assistent: voor onderzoek, tekstwerk, code en het bouwen van klantoplossingen zoals chatbots. ChatGPT van OpenAI gebruik ik aanvullend, vooral om uitkomsten te vergelijken en te controleren. Perplexity zet ik in voor onderzoek met actuele bronnen, en Le Chat van Mistral gebruik ik als Europees alternatief; dezelfde aanbieder die ik in mijn CO₂-calculator als groenere optie aanraad. Gesprekken en voice notes werk ik uit met transcriptietools zoals Whisper en tl;dv, alleen met medeweten van de deelnemers. Automatiseringstools zoals Zapier koppelen werkstromen aan elkaar; AI is daar een schakel in, geen doel op zich.
        </p>
        <p>
          Voor elk klantproject vermeld ik welke AI-tools onderdeel zijn van de oplossing. Je komt er dus nooit achteraf achter.
        </p>
      </section>

      <section>
        <h2>Wat er met jouw gegevens gebeurt</h2>
        <p>
          Vertrouwelijke klantgegevens gaan niet in publieke AI-modellen: geen klantnamen, geen financiële gegevens, geen persoonsgegevens van jouw klanten in een prompt. Ik gebruik AI-diensten in instellingen of abonnementsvormen waarbij invoer niet wordt gebruikt om modellen te trainen.
        </p>
        <p>
          Werken we structureel samen, dan leggen we de AI-inzet vast in een verwerkersovereenkomst met een AI-addendum: welke tools, welke data, welke grenzen. En alles wat ik met of zonder AI voor jou maak, is van jou, inclusief de prompts en instructies die specifiek voor jouw bedrijf zijn geschreven.
        </p>
      </section>

      <section>
        <h2>De mens blijft aan het stuur</h2>
        <p>
          AI doet bij mij het voorbereidende werk; ik neem de beslissingen. Alles wat naar jou of jouw klanten gaat, is door mij gecontroleerd en beoordeeld, en AI-uitkomsten met feitelijke claims controleer ik aan de bron voordat ik ze gebruik. Adviezen zijn van mij: AI helpt me denken, maar mijn afwegingen, mijn ervaring en mijn verantwoordelijkheid zitten in elk advies.
        </p>
      </section>

      <section>
        <h2>Wanneer ik AI niet gebruik</h2>
        <p>
          Bij gevoelige gesprekken en persoonlijke situaties: die verdienen een mens, geen model. Wanneer een simpelere oplossing beter is, want niet elk probleem heeft AI nodig; soms is een goed ingericht spreadsheet of een helder proces het eerlijke antwoord. En wanneer de privacy-afweging niet rond te krijgen is. Dan zeg ik dat, en zoeken we samen een alternatief.
        </p>
      </section>

      <section>
        <h2>Duurzaamheid</h2>
        <p>
          AI-gebruik kost energie en water. Ik houd mijn eigen gebruik bewust: ik kies het lichtste model dat de taak aankan en zet AI niet in voor taken die zonder ook prima gaan. Benieuwd naar de klimaatimpact van jouw AI-gebruik? Daarvoor bouwde ik een gratis <Link href="/co2">AI CO₂-calculator</Link>.
        </p>
      </section>

      <section>
        <h2>Vragen hierover?</h2>
        <p>
          Transparantie werkt twee kanten op: vraag me gerust het hemd van het lijf. Mail naar <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a> of kijk bij het <Link href="/privacy">privacybeleid</Link> voor hoe deze website zelf met gegevens omgaat.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
