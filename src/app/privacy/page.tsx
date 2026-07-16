import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/privacy', languages: { 'nl-NL': '/privacy', 'en': '/en/privacy' } },
  title: "Privacybeleid · Kimberley van Ruiven",
  description: "Hoe kimberleyvanruiven.nl omgaat met jouw persoonsgegevens, cookies en AI-transparantie.",
};

export default function Privacy() {
  return (
    <C2Tekstpagina
      label="Juridisch"
      regels={['Privacy', 'beleid']}
      bijgewerkt="juli 2026"
      anderePad="/en/privacy"
      scatter={[[2, 5.2, '74%', '10%'], [19, 3.2, '60%', '64%'], [10, 2.6, '86%', '84%']]}
    >
      {/* Bedrijfsgegevens: verplicht op een zakelijke site (art. 3:15d BW), los van de AVG.
          Het btw-IDENTIFICATIENUMMER staat hier (openbaar); niet het omzetbelastingnummer,
          want dat bevat een BSN. Een geografisch adres ontbreekt nog: zodra Kimberley een
          zakelijk vestigingsadres heeft, hoort dat hieronder. */}
      <section>
        <h2>Wie is verantwoordelijk?</h2>
        <p>
          Kimberley van Ruiven is de verwerkingsverantwoordelijke in de zin van de Algemene Verordening Gegevensbescherming (AVG / GDPR).
        </p>
        <dl className="c2-meta">
          <div className="c2-meta-row"><dt>Onderneming</dt><dd>Kimberley van Ruiven</dd></div>
          <div className="c2-meta-row"><dt>KvK-nummer</dt><dd>98007033</dd></div>
          <div className="c2-meta-row"><dt>Btw-identificatienummer</dt><dd>NL005302885B48</dd></div>
          <div className="c2-meta-row"><dt>E-mail</dt><dd><a className="c2-a" href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a></dd></div>
        </dl>
      </section>

      <section>
        <h2>Welke gegevens worden verwerkt?</h2>
        <p>
          Deze website verzamelt geen persoonsgegevens via formulieren of tracking. Voor bezoekersstatistieken gebruikt de site Cloudflare Web Analytics: een privacyvriendelijke meting zonder cookies, waarbij geen persoonsgegevens worden opgeslagen en bezoekers niet individueel herkenbaar zijn. Een cookiebanner is daarom niet nodig.
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

      {/* AVG art. 13 vraagt hier expliciet om: op welke grondslag verwerk je, en hoe lang bewaar je. */}
      <section>
        <h2>Grondslag en bewaartermijnen</h2>
        <p>
          Neem je per e-mail contact op, dan verwerk ik je naam, e-mailadres en wat je me schrijft. De grondslag daarvoor is de uitvoering van een overeenkomst, of mijn gerechtvaardigd belang om op een vraag te kunnen antwoorden. Die berichten bewaar ik zolang het gesprek loopt en daarna maximaal twee jaar, zodat ik een eerder contact kan terugvinden. Word je klant, dan geldt voor de administratie de wettelijke bewaarplicht van zeven jaar.
        </p>
        <p>
          De bezoekersstatistieken bevatten geen persoonsgegevens en worden geaggregeerd bewaard, zodat er niets naar jou als persoon te herleiden valt.
        </p>
      </section>

      <section>
        <h2>Hosting en verwerkers</h2>
        <p>
          Deze website draait bij Cloudflare. Zoals elke webserver legt Cloudflare technische gegevens vast om de site te kunnen leveren en te beveiligen, waaronder tijdelijk je IP-adres. Op dat gebruik is de standaard verwerkersovereenkomst van Cloudflare van toepassing, die onderdeel is van de gebruikersovereenkomst, en de doorgifte buiten de EU is gedekt door de standaardcontractbepalingen van de Europese Commissie.
        </p>
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
          {/* Beperking (art. 18 AVG) = de verwerking BEGRENZEN, niet stopzetten. Stopzetten
              valt onder het recht op bezwaar en het recht op verwijdering. */}
          <li>Recht op beperking: de verwerking van je gegevens laten begrenzen.</li>
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
