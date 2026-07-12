import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../concept-2/gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: "Privacybeleid · Kimberley van Ruiven",
  description: "Hoe kimberleyvanruiven.nl omgaat met jouw persoonsgegevens, cookies en AI-transparantie.",
};

export default function Privacy() {
  return (
    <C2Tekstpagina
      label="Juridisch"
      regels={['Privacy', 'beleid']}
      bijgewerkt="juli 2026"
      scatter={[[2, 5.2, '74%', '10%'], [19, 3.2, '60%', '64%'], [10, 2.6, '86%', '84%']]}
    >
      <section>
        <h2>Wie is verantwoordelijk?</h2>
        <p>
          Kimberley van Ruiven is de verwerkingsverantwoordelijke in de zin van de Algemene Verordening Gegevensbescherming (AVG / GDPR). Contact: <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>

      <section>
        <h2>Welke gegevens worden verwerkt?</h2>
        <p>
          Deze website verzamelt geen persoonsgegevens via formulieren of tracking. Voor bezoekersstatistieken gebruikt de site Vercel Web Analytics: een privacyvriendelijke meting zonder cookies, waarbij geen persoonsgegevens worden opgeslagen en bezoekers niet individueel herkenbaar zijn. Een cookiebanner is daarom niet nodig.
        </p>
        <p>
          Wanneer je via deze website contact opneemt (per e-mail of via een afspraaklink) of gebruik maakt van externe diensten, gelden de privacyvoorwaarden van die diensten:
        </p>
        <ul>
          <li>Google Calendar: voor het boeken van een kennismaking. Google verwerkt gegevens conform het eigen privacybeleid.</li>
          <li>LinkedIn: bij het bezoeken van het profiel of het sturen van berichten.</li>
          <li>GitHub: bij het bekijken van code en projecten via de links op deze site.</li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Deze website plaatst zelf geen tracking- of analytische cookies; ook de bezoekersstatistieken werken volledig zonder cookies. Externe partijen (zoals hierboven genoemd) kunnen wel cookies plaatsen wanneer je hun diensten bezoekt. Dat valt buiten de verantwoordelijkheid van Kimberley van Ruiven.
        </p>
      </section>

      <section>
        <h2>Jouw rechten onder de AVG</h2>
        <p>Op grond van de AVG heb je de volgende rechten:</p>
        <ul>
          <li>Recht op inzage: je kunt opvragen welke gegevens van jou zijn opgeslagen.</li>
          <li>Recht op rectificatie: onjuiste gegevens laten corrigeren.</li>
          <li>Recht op verwijdering: gegevens laten wissen (&ldquo;recht op vergetelheid&rdquo;).</li>
          <li>Recht op beperking: de verwerking (tijdelijk) laten stopzetten.</li>
          <li>Recht op bezwaar: bezwaar maken tegen verwerking op basis van gerechtvaardigd belang.</li>
          <li>Recht op dataportabiliteit: gegevens in een machine-leesbaar formaat opvragen.</li>
        </ul>
        <p>
          Voor vragen of het uitoefenen van je rechten: <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>. Je hebt ook het recht een klacht in te dienen bij de <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">Autoriteit Persoonsgegevens</a>.
        </p>
      </section>

      <section>
        <h2>AI-transparantie en de EU AI Act</h2>
        <p>
          In lijn met de EU AI Act en vanuit mijn eigen waarden rondom ethische technologie ben ik transparant over het gebruik van AI-tools. Deze website is mede ontwikkeld met behulp van AI (onder andere voor ontwerp, tekst en code); de inhoud is door mij, Kimberley van Ruiven, gecontroleerd, beoordeeld en goedgekeurd. Bij het verlenen van adviesdiensten gebruik ik AI als ondersteunend hulpmiddel: conclusies en aanbevelingen zijn altijd mensenwerk en vallen onder mijn professionele verantwoordelijkheid. Er worden geen geautomatiseerde beslissingen genomen over jou als persoon via deze website.
        </p>
        <p>
          Hoe ik precies met AI werk, welke tools ik gebruik en wanneer ik AI bewust laat liggen, lees je op <Link href="/zo-werk-ik-met-ai">zo werk ik met AI</Link>.
        </p>
      </section>

      <section>
        <h2>Wijzigingen</h2>
        <p>
          Dit privacybeleid kan worden aangepast bij wijzigingen in de dienstverlening of wetgeving. De meest actuele versie staat altijd op deze pagina.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
