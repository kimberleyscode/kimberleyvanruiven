import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/manifest' },
  title: "Mijn AI-manifest · Kimberley van Ruiven",
  description: "De uitgangspunten achter al mijn werk: AI die laat zien wat het is, met de mens aan het stuur, gekozen op de juiste prikkels.",
};

export default function Manifest() {
  return (
    <C2Tekstpagina
      label="Manifest"
      regels={['Waar ik', 'voor sta']}
      scatter={[[8, 5.4, '72%', '8%'], [14, 3.2, '86%', '56%'], [3, 2.6, '60%', '80%']]}
      intro={
        <p>
          De vorm die AI krijgt, is een keuze. Ook die van jou. Geen enkel systeem is neutraal: elk systeem draagt de keuzes van zijn makers in zich. Dit manifest is de lat waar ik mijn eigen werk langs leg, bij elk advies en elk systeem dat ik bouw.
        </p>
      }
    >
      <section>
        <h2>AI laat zien wat het is</h2>
        <p>
          Systemen die ik bouw doen zich nooit voor als mens. Geen verzonnen collega met een gezichtje, geen &quot;ik begrijp hoe je je voelt&quot;. Mensen verdienen te weten waar ze mee praten, en vertrouwen dat op een illusie rust is geen vertrouwen.
        </p>
      </section>

      <section>
        <h2>De mens houdt het stuur</h2>
        <p>
          AI mag voorbereiden, sorteren, voorstellen en versnellen. Beslissingen die mensen raken, over een sollicitatie, een klacht of een klant, neemt een mens. Ik ontwerp systemen zo dat die menselijke stap niet weggeautomatiseerd kán worden.
        </p>
      </section>

      <section>
        <h2>Prikkels bepalen de uitkomst</h2>
        <p>
          Wie technologie kiest, kiest ook de prikkels erachter. Verdient een tool aan je aandacht, aan je data, of aan het werk dat hij voor je doet? Ik kies en adviseer tools waarvan de prikkels kloppen: privacyvriendelijk, uitlegbaar, en waar het kan Europees en zuinig met energie.
        </p>
      </section>

      <section>
        <h2>Helderheid geeft regie</h2>
        <p>
          Je kunt alleen sturen wat je begrijpt. Daarom werk ik zonder jargon, leg ik uit wat een systeem doet en wat niet, en krijg je van mij ook te horen wanneer AI níet het antwoord is.
        </p>
      </section>

      <section>
        <h2>Klein en kloppend</h2>
        <p>
          Ik geloof niet in groot en indrukwekkend beginnen. Ik geloof in een klein systeem dat klopt: één proces, duidelijke afspraken, en dan pas verder. Technologie hoort zich naar de organisatie te vormen, niet andersom.
        </p>
      </section>

      <section>
        <h2>Verantwoording</h2>
        <p>
          Dit manifest is geschreven in mijn eigen woorden, geïnspireerd door het gedachtegoed van het <a href="https://www.humanetech.com" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a> en door mijn eigen onderzoek naar bias in AI. Hoe dit er in de praktijk uitziet lees je op <Link href="/zo-werk-ik-met-ai">zo werk ik met AI</Link>.
        </p>
      </section>

      <section>
        <h2>Boeken die mijn kijk vormden</h2>
        <p>
          Veel van wat hierboven staat is gevormd door wat ik las. Deze boeken raad ik iedereen aan die verder wil denken over AI en menselijkheid.
        </p>
        <ul>
          <li>
            <em>Ik, AI: over machtige algoritmen en verantwoordelijkheid</em> (redactie Lotte van Elteren, 2025). Nederlandse AI-onderzoekers over verantwoordelijkheid, discriminatie, privacy en de milieu-impact van AI: precies de vragen waar dit manifest uit voortkomt.
          </li>
          <li>
            <em>Onze kunstmatige toekomst</em> (Joris Krijger, 2025). Over wat wij willen met AI, en AI met ons. Krijger is ook de onderzoeker achter het volwassenheidsmodel voor AI-ethiek waar ik in mijn quickscan mee werk.
          </li>
          <li>
            <em>AI Ethics</em> (Mark Coeckelbergh, 2020). Compact Engelstalig overzicht van de grote ethische vragen rond AI, van privacy en bias tot de rol van beleid.
          </li>
        </ul>
      </section>
    </C2Tekstpagina>
  );
}
