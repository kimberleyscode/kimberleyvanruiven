import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/algemene-voorwaarden' },
  title: 'Algemene voorwaarden · Kimberley van Ruiven',
  description: 'De voorwaarden waaronder ik werk: offertes, betaling, eigendom, aansprakelijkheid en de aard van mijn advies.',
};

/* Nog geen Engelse tegenhanger, dus geen taalwissel op deze pagina (anderePad blijft leeg).
   Algemene voorwaarden zijn een juridisch document; een vertaling zou een tweede
   rechtsgeldige tekst worden en dat wil je pas doen als je Engelstalige klanten hebt. */
export default function AlgemeneVoorwaarden() {
  return (
    <C2Tekstpagina
      label="Juridisch"
      regels={['Algemene', 'voorwaarden']}
      bijgewerkt="juli 2026"
      scatter={[[7, 4.8, '78%', '12%'], [14, 3.0, '58%', '62%'], [3, 2.4, '84%', '86%']]}
    >
      <section>
        <p>
          Deze voorwaarden gelden voor iedere offerte en iedere opdracht van Kimberley van Ruiven, ingeschreven bij de Kamer van Koophandel onder nummer 98007033, btw-identificatienummer NL005302885B48, gevestigd te Rotterdam. Hieronder heet zij &ldquo;opdrachtnemer&rdquo;. De partij die haar een opdracht geeft heet &ldquo;opdrachtgever&rdquo;. Deze voorwaarden zijn geschreven voor opdrachtgevers die handelen vanuit een beroep of bedrijf.
        </p>
      </section>

      <section>
        <h2>1. Toepasselijkheid</h2>
        <p>
          Deze voorwaarden gelden voor alles wat uit een offerte of opdracht voortvloeit. Algemene voorwaarden van opdrachtgever wijst opdrachtnemer van de hand, tenzij zij die vooraf schriftelijk heeft aanvaard. Staat er in een offerte of opdrachtbevestiging iets anders dan hier, dan gaat die afspraak voor. Is een bepaling ongeldig, dan blijven de overige gelden en vervangen partijen die bepaling door een geldige die de bedoeling zo dicht mogelijk benadert.
        </p>
      </section>

      <section>
        <h2>2. Offertes en totstandkoming</h2>
        <p>
          Offertes zijn vrijblijvend en dertig dagen geldig, tenzij er iets anders in staat, en gelden niet automatisch voor een volgende opdracht. De opdracht komt tot stand zodra opdrachtgever de offerte schriftelijk of per e-mail aanvaardt, of zodra opdrachtnemer met instemming van opdrachtgever met de uitvoering begint.
        </p>
      </section>

      <section>
        <h2>3. Uitvoering</h2>
        <p>
          Opdrachtnemer voert de opdracht uit naar beste inzicht en vermogen. Het gaat om een inspanningsverbintenis en niet om een resultaatsverbintenis: zij belooft een goede uitvoering, geen bepaalde uitkomst. Genoemde termijnen zijn richttermijnen, tenzij partijen uitdrukkelijk schriftelijk iets anders afspreken. Opdrachtnemer mag derden inschakelen; voor hun werk is zij aansprakelijk als voor haar eigen werk.
        </p>
        <p>
          Opdrachtnemer zet AI-hulpmiddelen in bij haar werk en is daar transparant over. Zij controleert en beoordeelt de uitkomsten zelf. Conclusies, adviezen en opgeleverd werk zijn en blijven mensenwerk en vallen onder haar professionele verantwoordelijkheid. Hoe zij dat precies doet, staat op <Link href="/zo-werk-ik-met-ai">zo werk ik met AI</Link>.
        </p>
      </section>

      <section>
        <h2>4. Wat opdrachtgever aanlevert</h2>
        <p>
          Opdrachtgever levert tijdig de gegevens, de toegang en de medewerking die nodig zijn, en staat in voor de juistheid en volledigheid daarvan. Gebeurt dat niet of te laat, dan mag opdrachtnemer de uitvoering opschorten en de extra kosten in rekening brengen tegen het geldende uurtarief. Schade die ontstaat door onjuiste of onvolledige informatie van opdrachtgever komt voor rekening van opdrachtgever.
        </p>
      </section>

      <section>
        <h2>5. Wijzigingen en meerwerk</h2>
        <p>
          Blijkt tijdens de uitvoering dat de opdracht moet worden aangepast of uitgebreid, dan stemmen partijen dat vooraf af. Werk buiten de afgesproken opdracht is meerwerk: opdrachtnemer voert dat alleen uit na akkoord en brengt het in rekening tegen het geldende uurtarief. Extra feedbackrondes of revisies bovenop wat in de offerte staat, gelden als meerwerk.
        </p>
      </section>

      <section>
        <h2>6. Tarieven, facturering en betaling</h2>
        <p>
          Alle bedragen zijn in euro&rsquo;s en exclusief btw, tenzij anders vermeld. Het uurtarief bedraagt 65 euro exclusief btw, tenzij de offerte iets anders vermeldt. Bij een vaste prijs factureert opdrachtnemer in termijnen volgens de verdeling in de offerte; bij nacalculatie maandelijks achteraf. Reiskosten, licenties en kosten van externe diensten zijn niet inbegrepen tenzij de offerte dat vermeldt, en worden vooraf afgestemd.
        </p>
        <p>
          Betaling gebeurt binnen veertien dagen na factuurdatum. Betaalt opdrachtgever niet op tijd, dan is hij van rechtswege in verzuim en is hij de wettelijke handelsrente en de buitengerechtelijke incassokosten verschuldigd. Bij verzuim mag opdrachtnemer haar werk opschorten totdat er betaald is; zij meldt dat vooraf. Tarieven kunnen jaarlijks per 1 januari worden geïndexeerd, niet tijdens een lopende opdracht met een vaste prijs.
        </p>
      </section>

      <section>
        <h2>7. Annuleren en verzetten van trainingen</h2>
        <p>
          Voor trainingen, workshops en andere op datum geplande sessies reserveert opdrachtnemer tijd die zij niet meer aan iemand anders kan besteden. Annuleert opdrachtgever tot veertien dagen voor de afgesproken datum, dan is dat kosteloos. Tussen veertien en zeven dagen ervoor is vijftig procent van het overeengekomen bedrag verschuldigd. Binnen zeven dagen ervoor, of bij niet verschijnen, is dat honderd procent. Een sessie eenmaal verzetten kan kosteloos tot veertien dagen van tevoren, in overleg en afhankelijk van beschikbaarheid. Moet opdrachtnemer zelf annuleren, dan biedt zij een nieuwe datum aan of betaalt zij het voor die sessie betaalde bedrag terug.
        </p>
      </section>

      <section>
        <h2>8. Duur en beëindiging</h2>
        <p>
          Een opdracht voor onbepaalde tijd, zoals een doorlopende adviesrol, kunnen beide partijen schriftelijk opzeggen met een opzegtermijn van één maand. Zegt opdrachtgever een opdracht tussentijds op, dan betaalt hij het tot dan toe verrichte werk plus de kosten die al gemaakt zijn en redelijkerwijs niet meer te vermijden waren. Opdrachtnemer mag de opdracht met onmiddellijke ingang beëindigen bij faillissement, surseance of staking van de onderneming van opdrachtgever.
        </p>
        <p>
          Blijkt tijdens de opdracht dat opdrachtgever AI wil inzetten op een manier die opdrachtnemer in strijd acht met de wet of met de beroepsethiek waarnaar zij werkt, dan bespreekt zij dat eerst. Komen partijen er niet uit, dan mag zij de opdracht beëindigen. Opdrachtgever betaalt in dat geval het tot dan toe verrichte werk.
        </p>
      </section>

      <section>
        <h2>9. Intellectueel eigendom</h2>
        <p>
          De intellectuele eigendomsrechten op het opgeleverde werk gaan over op opdrachtgever zodra hij alles heeft betaald wat hij voor de opdracht verschuldigd is. Tot dat moment blijven de rechten bij opdrachtnemer en heeft opdrachtgever een gebruiksrecht dat zij bij verzuim kan opschorten.
        </p>
        <p>
          Die overdracht geldt niet voor de kennis, ervaring, werkwijzen en modellen die opdrachtnemer al had of die niet specifiek voor opdrachtgever zijn gemaakt, en evenmin voor herbruikbare bouwstenen en codebibliotheken die zij bij meerdere opdrachten gebruikt. Daarop krijgt opdrachtgever een eeuwigdurend, niet-opzegbaar gebruiksrecht voor het opgeleverde werk. Voor software van derden en opensourcecomponenten gelden de licenties van die derden; opdrachtnemer meldt vooraf welke dat zijn.
        </p>
        <p>
          Opdrachtnemer blijft vrij om haar kennis en ervaring in te zetten voor andere opdrachtgevers, zonder daarbij vertrouwelijke informatie prijs te geven. Zij mag het werk in haar portfolio tonen en de naam van opdrachtgever als referentie noemen, tenzij opdrachtgever daar bezwaar tegen maakt. Vertrouwelijke inhoud toont zij niet.
        </p>
      </section>

      <section>
        <h2>10. Geheimhouding en persoonsgegevens</h2>
        <p>
          Partijen houden alle vertrouwelijke informatie die zij van elkaar krijgen geheim, ook na afloop van de opdracht, tenzij de wet of een rechter tot openbaarmaking verplicht. Informatie is vertrouwelijk als de andere partij dat aangeeft of als dat uit de aard ervan volgt.
        </p>
        <p>
          Verwerkt opdrachtnemer namens opdrachtgever persoonsgegevens, dan sluiten partijen daarvoor een verwerkersovereenkomst voordat de verwerking begint. Opdrachtgever staat ervoor in dat hij de gegevens die hij deelt rechtmatig heeft verkregen. Hoe opdrachtnemer met gegevens omgaat, staat in het <Link href="/privacy">privacybeleid</Link>.
        </p>
      </section>

      <section>
        <h2>11. De aard van het advies</h2>
        <p>
          De adviezen, scans, beleidsstukken en trainingen van opdrachtnemer zijn een deskundig oordeel. Het is geen juridisch advies en geen accountantsverklaring. Wil opdrachtgever juridische zekerheid, dan raadpleegt hij een advocaat of jurist. Een AI Act-scan of vergelijkbaar onderzoek is geen certificering, keurmerk of conformiteitsbeoordeling in de zin van de wet, en levert geen wettelijk erkende verklaring van naleving op.
        </p>
        <p>
          Opdrachtgever blijft zelf verantwoordelijk voor het naleven van de wet en voor de beslissingen die hij op basis van het advies neemt. Opdrachtnemer adviseert, opdrachtgever besluit. Levert opdrachtnemer een AI-systeem op, dan is opdrachtgever na oplevering verantwoordelijk voor het gebruik, het toezicht en het onderhoud daarvan, tenzij schriftelijk anders afgesproken. Opdrachtnemer is niet aansprakelijk voor de uitkomsten van AI-modellen van derden waarop zo&rsquo;n systeem steunt, en evenmin voor gebruik van het systeem buiten het afgesproken doel.
        </p>
      </section>

      <section>
        <h2>12. Aansprakelijkheid</h2>
        <p>
          Opdrachtnemer is alleen aansprakelijk voor schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming van haar kant. Haar aansprakelijkheid is per opdracht beperkt tot het bedrag dat voor die opdracht is gefactureerd en betaald, exclusief btw. Loopt een opdracht langer dan zes maanden, dan geldt het bedrag dat is gefactureerd en betaald in de zes maanden voorafgaand aan de gebeurtenis die de schade veroorzaakte.
        </p>
        <p>
          Zij is niet aansprakelijk voor indirecte schade, waaronder in ieder geval gederfde winst, gemiste besparingen, bedrijfsstagnatie, verlies van gegevens, reputatieschade en bestuurlijke boetes die aan opdrachtgever worden opgelegd. Evenmin voor schade door onjuiste of onvolledige informatie van opdrachtgever, door beslissingen die opdrachtgever zelf neemt, of door gebruik van het werk op een andere manier dan afgesproken. Deze beperkingen gelden niet bij opzet of bewuste roekeloosheid.
        </p>
        <p>
          Elke aanspraak vervalt twaalf maanden nadat opdrachtgever de schade heeft ontdekt of redelijkerwijs had kunnen ontdekken, en in elk geval vierentwintig maanden na afloop van de opdracht.
        </p>
      </section>

      <section>
        <h2>13. Overmacht</h2>
        <p>
          Kan opdrachtnemer haar verplichtingen niet nakomen door overmacht, dan worden die opgeschort zolang de overmacht duurt. Daaronder valt in ieder geval langdurige ziekte, uitval van essentiële externe diensten, storingen bij hostingpartijen of internetproviders, en overheidsmaatregelen. Duurt de overmacht langer dan zestig dagen, dan mogen beide partijen de opdracht schriftelijk beëindigen; opdrachtgever betaalt dan het tot dat moment verrichte werk.
        </p>
      </section>

      <section>
        <h2>14. Klachten</h2>
        <p>
          Klachten over het werk of over een factuur meldt opdrachtgever binnen veertien dagen na ontdekking, schriftelijk en met een duidelijke omschrijving, zodat opdrachtnemer kan reageren. Een klacht schort de betalingsverplichting niet op. Is een klacht terecht, dan herstelt opdrachtnemer het werk binnen een redelijke termijn, of crediteert zij het betreffende deel van de factuur als herstel niet meer zinvol is.
        </p>
      </section>

      <section>
        <h2>15. Toepasselijk recht en geschillen</h2>
        <p>
          Op alle opdrachten en op deze voorwaarden is Nederlands recht van toepassing. Partijen leggen een geschil pas aan de rechter voor nadat zij hebben geprobeerd het samen op te lossen. Geschillen worden voorgelegd aan de bevoegde rechter van de rechtbank Rotterdam.
        </p>
      </section>

      <section>
        <h2>Vragen hierover?</h2>
        <p>
          Staat er iets in waar je over wilt praten voordat je tekent, dan is dat precies de bedoeling. Mail me op <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
