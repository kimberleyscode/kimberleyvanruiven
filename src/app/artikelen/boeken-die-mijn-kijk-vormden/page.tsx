import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/artikelen/boeken-die-mijn-kijk-vormden' },
  title: 'De boeken die mijn kijk op AI en menselijkheid vormden · Kimberley van Ruiven',
  description:
    'Drie boeken over AI en verantwoordelijkheid, besproken en op een rij: Ik, AI van Lotte van Elteren, Onze kunstmatige toekomst van Joris Krijger en AI Ethics van Mark Coeckelbergh.',
};

export default function BoekenArtikel() {
  return (
    <C2Tekstpagina
      label="Leeslijst · augustus 2026"
      regels={['De boeken die', 'mijn kijk vormden']}
      anderePad={null}
      scatter={[[5, 5, '72%', '12%'], [12, 3.2, '86%', '62%']]}
      intro={
        <p>
          De techniek achter AI verandert elk half jaar, de vragen eronder al twintig jaar niet. Wie is verantwoordelijk als een systeem iets aanricht, wat doet het met de mensen die ermee moeten werken, en wat willen we er eigenlijk mee. Deze drie boeken hebben mijn antwoord op die vragen gevormd, en ze liggen onder alles wat ik nu bouw en adviseer.
        </p>
      }
    >
      <section>
        <h2>Waarom ik hierover blijf lezen</h2>
        <p>
          Ik kom uit de techniek. Voor mijn masterscriptie trainde ik zelf modellen die haatspraak moeten herkennen, en juist daar liep ik tegen de grens van de techniek aan: een model dat groepen moet beschermen, kan die groepen zelf ongelijk behandelen. Dat is geen bug die je wegprogrammeert. Het is een vraag over wat je wilt dat een systeem doet, en die vraag beantwoordt geen enkel model voor je.
        </p>
        <p>
          Boeken hielpen me om daar taal voor te vinden. Niet de boeken die AI als wonder of als ramp neerzetten, maar de boeken die de vraag klein en concreet maken. Dit zijn de drie die ik iedereen aanraad die verder wil denken dan de nieuwste tool.
        </p>
      </section>

      <section>
        <h2>Ik, AI: over machtige algoritmen en verantwoordelijkheid</h2>
        <p>
          <em>Ik, AI</em> (redactie Lotte van Elteren, ISVW Uitgevers, 2025) is een bundel waarin Nederlandse onderzoekers vanuit filosofie en cognitiewetenschap kijken naar wat AI met ons zelfbeeld doet. Naast Van Elteren schrijven onder anderen Pim Haselager, Adrienne de Ruiter, Giulio Mecacci en Anco Peeters mee. Het boek loopt langs de plekken waar AI al beslist over mensen: medische diagnoses, politieke voorkeuren, en de vraag wie er aansprakelijk is als het misgaat.
        </p>
        <p>
          Wat ik eruit meenam is de manier waarop het boek verantwoordelijkheid behandelt. Als een systeem een black box is en zelfs de bouwers niet precies kunnen uitleggen waarom er iets uitkomt, dan verdwijnt verantwoordelijkheid niet. Hij verschuift alleen, meestal naar de persoon die de uitkomst als laatste doorgeeft. Dat is precies wat ik in organisaties terugzie: de medewerker aan het loket moet uitleggen wat een model heeft besloten, zonder dat iemand die persoon ooit heeft verteld hoe dat model tot stand kwam. Dit boek geeft daar woorden aan.
        </p>
      </section>

      <section>
        <h2>Onze kunstmatige toekomst</h2>
        <p>
          <em>Onze kunstmatige toekomst: wat wij willen met AI (en AI met ons)</em> (Joris Krijger, Spectrum, 2025) is het boek dat het verst kijkt. Krijger was een van de eerste officiële AI-ethici van Nederland, werkte bij een bank en promoveerde aan de Erasmus Universiteit. Hij zoekt in ruim driehonderd pagina’s naar het grotere verhaal achter de ontwikkelingen, en zijn stelling is dat de belangrijkste vragen niet gaan over het programmeren van slimme machines maar over het herprogrammeren van onze samenleving.
        </p>
        <p>
          Het scherpst vind ik zijn omkering. Waar de meeste stukken over AI opsommen welke problemen de techniek gaat oplossen, vraagt Krijger wat AI juist niet oplost en welke problemen het erbij maakt: ongelijkheid die groter wordt, afhankelijkheid die groeit, verantwoordelijkheid die wordt afgeschoven. Krijger is ook de onderzoeker achter het volwassenheidsmodel voor AI-ethiek waar ik in mijn <Link href="/diensten/ai-act-quickscan">AI Act-quickscan</Link> mee werk. Hoe dat model werkt schreef ik uit in <Link href="/artikelen/volwassen-worden-in-ai-ethiek">volwassen worden in AI-ethiek</Link>.
        </p>
      </section>

      <section>
        <h2>AI Ethics</h2>
        <p>
          <em>AI Ethics</em> (Mark Coeckelbergh, MIT Press, 2020) is de compacte Engelstalige introductie waar ik nog steeds naar teruggrijp. Coeckelbergh begint bij de verhalen die we onszelf over AI vertellen, van Frankenstein tot de technologische singulariteit, en zet die opzij om bij de concrete vragen te komen. Hij legt onderweg uit hoe de techniek werkt, want zonder dat begrip blijft elk ethisch gesprek zweven.
        </p>
        <p>
          Daarna komen de onderwerpen die er in de praktijk toe doen: privacy, transparantie, het uitbesteden van beslissingen aan een systeem, en bias die in elke fase van een datatraject kan ontstaan. Dat laatste is precies wat mijn eigen onderzoek liet zien, en Coeckelbergh laat zien dat het geen incident is maar een structureel kenmerk van hoe deze systemen gemaakt worden. Hij eindigt bij beleid, met een pleidooi dat mij is bijgebleven: waarden horen in het ontwerp te zitten, niet in een document dat er achteraf naast wordt gelegd.
        </p>
      </section>

      <section>
        <h2>Wat de drie samen zeggen</h2>
        <p>
          Er loopt één lijn door deze boeken. Alle drie weigeren ze de vraag te versmallen tot techniek. Van Elteren en haar mede-auteurs laten zien dat verantwoordelijkheid verschuift zodra niemand meer kan uitleggen hoe een uitkomst tot stand kwam. Krijger laat zien dat een technologie een richting op duwt, en dat je die richting kunt kiezen. Coeckelbergh laat zien dat je waarden alleen serieus neemt als je ze in het ontwerp legt.
        </p>
        <p>
          Bij elkaar zijn ze de reden dat ik werk zoals ik werk: eerst de vraag wat een organisatie eigenlijk wil, dan pas het systeem. Waar dat toe leidt staat in mijn <Link href="/manifest">AI-manifest</Link>, en hoe dat er bij mij zelf uitziet in <Link href="/zo-werk-ik-met-ai">zo werk ik met AI</Link>.
        </p>
      </section>

      <section>
        <h2>Wat ik daarnaast las</h2>
        <p>
          Deze drie las ik ernaast, en ze hebben mijn denken net zo goed gestuurd. <em>Your Face Belongs to Us</em> (Kashmir Hill, 2023) volgt de opkomst van Clearview AI, het bedrijf dat gezichtsherkenning bouwde op foto&apos;s die het overal van internet plukte, en laat zien hoe weinig er tussen zo&apos;n idee en de uitvoering ervan in stond. <em>Algorithms of Oppression</em> (Safiya Umoja Noble, NYU Press, 2018) toont aan dat een zoekmachine geen neutrale spiegel is, en dat wat je terugkrijgt vooral zegt wie er heeft betaald en wiens beeld het vaakst is bevestigd. <em>Data Feminism</em>{' '}(Catherine D&apos;Ignazio en Lauren Klein, MIT Press, 2020) is het praktischst van de drie: het stelt bij elke dataset de vraag wie er is geteld, wie er ontbreekt en wie de indeling heeft bedacht.
        </p>
      </section>

      <section>
        <h2>Ook op mijn lijst</h2>
        <p>
          Bovenaan staat <em>Atlas of AI</em> (Kate Crawford, Yale University Press, 2021). Crawford behandelt AI niet als software maar als winningsindustrie: de mineralen die uit de grond komen, het werk van slecht betaalde datawerkers, de data die bij ons allemaal wordt weggehaald. Dat is de laag die in vrijwel elk gesprek over AI ontbreekt, en daarom staat dit boek als eerste op mijn lijst.
        </p>
        <p>
          Verder staan deze erop. Ze gaan over dezelfde vraag als de boeken hierboven, maar dan telkens vanuit een ander vak.
        </p>
        <ul>
          <li>
            <em>Unmasking AI</em> (Joy Buolamwini, 2023). Zij deed het onderzoek dat aantoonde dat gezichtsherkenning donkere vrouwen het slechtst herkent, en beschrijft wat er gebeurde toen ze dat publiceerde.
          </li>
          <li>
            <em>More than a Glitch</em> (Meredith Broussard, MIT Press, 2023). De titel is het argument: bias is geen storing die je eruit haalt, maar een gevolg van keuzes bij het bouwen.
          </li>
          <li>
            <em>Race After Technology</em> (Ruha Benjamin, Polity, 2019). Over hoe uitsluiting in een systeem terechtkomt door wat het geacht wordt te doen, en door wie het gebouwd is.
          </li>
          <li>
            <em>Automating Inequality</em> (Virginia Eubanks, 2018). Wat geautomatiseerde beslissingen in de sociale zekerheid doen met mensen die weinig te verliezen hebben.
          </li>
          <li>
            <em>Weapons of Math Destruction</em>{' '}(Cathy O&apos;Neil, 2016). De klassieker, en nog steeds de helderste uitleg voor iemand zonder technische achtergrond.
          </li>
          <li>
            <em>Empire of AI</em> (Karen Hao, Penguin Press, 2025). Zeven jaar onderzoek naar OpenAI, de datawerkers die de modellen schoonhouden en wat dit alles aan energie en water kost.
          </li>
          <li>
            <em>The AI Con</em> (Emily M. Bender en Alex Hanna, 2025). Een taalkundige en een socioloog pellen de marketing van de techniek af.
          </li>
          <li>
            <em>Zo hadden we het niet bedoeld</em> (Jesse Frederik, 2021). De toeslagenaffaire van dichtbij, en daarmee het Nederlandse voorbeeld van wat er misgaat als niemand meer controleert waar een systeem op afgaat.
          </li>
          <li>
            <em>Het internet is stuk</em> (Marleen Stikker, De Geus, 2019). Over publieke waarden in technologie, geschreven vanuit de praktijk van Waag.
          </li>
        </ul>
      </section>

      <section>
        <h2>Liever kijken dan lezen</h2>
        <p>
          Twee films die dezelfde vragen stellen als de boeken hierboven, maar dan in beeld. Klik op een beeld voor de trailer.
        </p>
        <div className="c2-trailers">
          <a className="c2-trailer" href="https://youtu.be/xkPbV3IRe4Y" target="_blank" rel="noopener noreferrer">
            <img src="/trailer-ai-doc.jpg" alt="Beeld uit de trailer van The AI Doc: rijen humanoïde robots in een fabriekshal" />
            <span className="c2-trailer-titel">The AI Doc: Or How I Became an Apocaloptimist</span>
            <span className="c2-trailer-meta">Charlie Tyrell en Daniel Roher, 2026 · trailer</span>
          </a>
          <a className="c2-trailer" href="https://youtu.be/uaaC57tcci0" target="_blank" rel="noopener noreferrer">
            <img src="/trailer-social-dilemma.jpg" alt="Beeld uit de trailer van The Social Dilemma: een hoofd in lijnen met een haperend hart-icoon" />
            <span className="c2-trailer-titel">The Social Dilemma</span>
            <span className="c2-trailer-meta">Netflix, 2020 · trailer</span>
          </a>
        </div>
        <p>
          <em>The AI Doc</em> volgt een regisseur die vader wordt en wil weten in welke wereld zijn kind terechtkomt. Hij spreekt zowel de mensen die deze systemen bouwen als de mensen die ze scherp bekritiseren, waardoor de film zich moeilijk in één kamp laat plaatsen. <em>The Social Dilemma</em> is de bekendere van de twee en wordt nog altijd veel gebruikt als eerste ingang: oud-medewerkers van de grote platformen leggen uit wat een aanbevelingsalgoritme met mensen doet. Tristan Harris, medeoprichter van het <a href="https://www.humanetech.com" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a>, is een van hen. Over dat gedachtegoed schreef ik eerder <Link href="/artikelen/technologie-die-de-mens-ziet">technologie die de mens ziet</Link>.
        </p>
      </section>

      <section>
        <h2>Zelf verder denken</h2>
        <p>
          Wil je hierover doorpraten, of speelt de vraag bij jou concreet: wat wil onze organisatie eigenlijk met AI? Mail me op <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>. Dat gesprek begint wat mij betreft niet bij een tool, maar bij wat jullie belangrijk vinden.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
