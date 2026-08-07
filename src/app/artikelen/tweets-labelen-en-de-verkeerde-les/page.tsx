import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

const REPO = 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter';

export const metadata: Metadata = {
  alternates: { canonical: '/artikelen/tweets-labelen-en-de-verkeerde-les' },
  title: 'Ik labelde tweets op haatspraak, en het model leerde de verkeerde les · Kimberley van Ruiven',
  description:
    'Voor mijn scriptie liet ik tweets labelen op haatspraak en trainde ik er modellen op. Die modellen leerden niet herkennen wat haat is, maar over welke groep een bericht ging.',
};

export default function TweetsLabelenArtikel() {
  return (
    <C2Tekstpagina
      label="Machine learning · NLP · augustus 2026"
      regels={['Ik labelde tweets,', 'het model leerde', 'de verkeerde les']}
      anderePad={null}
      scatter={[[7, 5, '74%', '10%'], [15, 3.2, '90%', '74%']]}
      intro={
        <p>
          Voor mijn masterscriptie aan de UvA wilde ik weten of je haatspraak automatisch kunt herkennen in tweets. Ik filterde vijf jaar aan berichten, liet ze door mensen labelen en trainde er modellen op. Wat eruit kwam was niet het model dat ik wilde, maar wel het inzicht waar ik nu mijn werk op bouw: een systeem leert niet wat jij bedoelt, het leert wat er in je data zit.
        </p>
      }
    >
      <section>
        <h2>Waarom een woordenlijst niet werkt</h2>
        <p>
          De makkelijkste manier om haatspraak te zoeken is een lijst met scheldwoorden. Er bestaat een database die daarvoor gemaakt is, Hatebase, en die wordt in veel onderzoek gebruikt. Davidson en collega&apos;s haalden er in 2017 vijfentwintigduizend tweets mee op die zulke woorden bevatten, en lieten die door mensen beoordelen. Vijf procent bleek daadwerkelijk haatspraak. De andere vijfennegentig procent was iets anders: ruzie, humor, citaten, mensen die het woord juist bespraken.
        </p>
        <p>
          Dat cijfer is de kern van het probleem. Haat zit niet in woorden, hij zit in wat iemand met die woorden doet. Ik gebruikte daarom geen bestaande scheldwoordenlijst, maar filterde de tweets van het account @realDonaldTrump tussen juni 2015 en mei 2020 op onderwerpen waar haat tegen groepen zich vaak omheen organiseert: migratie, nationaliteiten, religie. Wat overbleef waren ongeveer dertienhonderd tweets die stuk voor stuk door mensen beoordeeld moesten worden.
        </p>
      </section>

      <section>
        <h2>Labelen is oordelen, geen invulwerk</h2>
        <p>
          Ik vroeg drie mensen om die tweets te labelen, met achtergronden in literatuurwetenschap, communicatie- en mediawetenschap en culturele studies. Niet omdat zij toevallig tijd hadden, maar omdat het lezen van een tekst op wat er ónder staat precies hun vak is. Ze werkten in de labeltool Swivl en kregen drie mogelijke labels: hate speech, offensive language of neutral. Elke tweet moest er precies één krijgen.
        </p>
        <p>
          Daar schreef ik richtlijnen voor. Een tweet telde alleen als haatspraak als een groep het hoofddoelwit was, en als het bericht haat of geweld tegen die groep verspreidde, rechtvaardigde of de groep ontmenselijkte. Offensive was het als de uitwerking kwetsend was zonder dat het zo ver ging: de groep afserveren, hun status in twijfel trekken, spot. Neutral als geen van beide gold. Ik onderscheidde vier soorten doelwitten: immigranten en vluchtelingen, nationaliteiten en landen, religie, en politieke individuen.
        </p>
        <p>
          De belangrijkste zin uit die richtlijnen schreef ik pas op nadat ik zelf was vastgelopen: haat en beledigingen zijn vaak impliciet. Een zin kan uit positieve woorden bestaan en toch bedoeld zijn om een groep te raken. Ik vroeg de annotatoren daarom telkens naar de intentie. Dat is geen invuloefening maar een oordeel, en waar mensen oordelen, verschillen ze. Precies die menselijke onenigheid wordt daarna de waarheid waarop een model wordt afgerekend.
        </p>
      </section>

      <section>
        <h2>Wat de modellen deden</h2>
        <p>
          Op de gelabelde tweets trainde ik eerst een reeks klassieke modellen: naive bayes, een lineaire support vector machine, logistische regressie en een random forest. Met tienvoudige gestratificeerde kruisvalidatie kwam naive bayes het hoogst uit op eenenzestig procent, de support vector machine op zestig, logistische regressie op net geen zestig en het random forest op zesenvijftig.
        </p>
        <p>
          Bij die cijfers hoort een kanttekening, en ik zet hem er liever zelf bij dan dat een ander hem later vindt. Ik heb dat notebook destijds meerdere keren opnieuw gedraaid, op verschillende delen van de gelabelde set. De opgeslagen uitvoer komt daardoor niet uit één run: de kruisvalidatie hierboven liep op ongeveer tweehonderddertig tweets, de foutenanalyse hieronder op een set van vierhonderdachtenvijftig, en het klassenrapport op een kleinere greep daaruit. Elk getal klopt op zichzelf, maar ze horen niet in één tabel naast elkaar. Dat is precies het soort slordigheid dat ik nu bij anderen opspoor, en ik ben er zelf ingelopen.
        </p>
        <p>
          Waar het model de mist in ging zegt meer dan het gemiddelde. In de foutenanalyse op de grootste set noemde het negenenveertig offensieve tweets neutraal, veruit de grootste fout in de tabel. Het klassenrapport, op een testset van vijfendertig tweets, laat hetzelfde patroon zien: van de berichten die het model haatspraak noemde klopte drieëntachtig procent, maar het vond er maar vijfenveertig procent van, en van de offensieve tweets herkende het nog geen derde. Het model was voorzichtig op precies de plek waar voorzichtigheid het meeste kost.
        </p>
        <p>
          Daarnaast probeerde ik BERT, een taalmodel dat context meeweegt. Die proef draaide op de testset van tweeënzeventig tweets uit 2020 en kwam niet verder dan negenentwintig procent. Te weinig voorbeelden, te veel nuance. Wat BERT is en waarom het van dezelfde familie is als ChatGPT schreef ik uit in <Link href="/artikelen/google-bert-en-chatgpt">het taalmodel dat je al jaren gebruikt</Link>.
        </p>
      </section>

      <section>
        <h2>De verkeerde les</h2>
        <p>
          Het interessantste zat niet in de scores maar in waar de modellen op letten. Dat vroeg ik op twee manieren uit. Een chi-kwadraattoets, die meet welke woorden statistisch het sterkst met een klasse samenhangen, gaf voor haatspraak &ldquo;illegal migrants&rdquo;, &ldquo;Human Traffickers&rdquo;, &ldquo;strong immigration laws&rdquo; en &ldquo;Our Country FULL&rdquo;. De woorden waar het getrainde model zelf het zwaarst aan tilde waren &ldquo;country&rdquo;, &ldquo;ISIS&rdquo;, &ldquo;THE WALL&rdquo; en &ldquo;MS 13&rdquo;.
        </p>
        <p>
          Lees die rijtjes nog eens. In geen van beide staat een kenmerk van haat. Er staan onderwerpen in. Het model had niet geleerd wat haat is. Het had geleerd over wie het ging. Als het over migratie ging was de kans op het label haatspraak groter, ongeacht wat er stond. Een systeem dat zo werkt, deelt in de praktijk niet berichten in maar groepen mensen. Zet zo&apos;n model op een platform en het gaat berichten óver een groep zwaarder wegen dan berichten die die groep aanvallen, waarmee juist de mensen die je wilde beschermen het vaakst worden weggemodereerd.
        </p>
        <p>
          Dat is geen fout in de code. De data zei precies dit, want de tweets die door het trefwoordfilter kwamen gingen allemaal over dezelfde onderwerpen. Het model deed wat het moest doen: het vond het sterkste patroon dat er lag. Dat het verkeerde patroon het sterkste was, is een ontwerpvraag, en die had ik eerder moeten stellen dan bij de evaluatie.
        </p>
      </section>

      <section>
        <h2>Wat ik ervan meenam</h2>
        <p>
          Deze scriptie is de reden dat ik nu werk zoals ik werk. Bias is in mijn ervaring zelden een kwaadaardig model. Het is meestal een dataset die een deel van de werkelijkheid laat zien, een label dat een menselijk oordeel bevat, en niemand die achteraf controleert waar het systeem eigenlijk op afgaat. Dat laatste is te doen, en het kost minder tijd dan het bouwen zelf.
        </p>
        <p>
          Daarom vraag ik bij elk AI-project eerst waar de data vandaan komt en wie de labels heeft gezet, en kijk ik daarna of het systeem doet wat het zegt te doen. Hoe ik dat aanpak staat in mijn <Link href="/manifest">AI-manifest</Link> en in de <Link href="/diensten/ai-act-quickscan">AI Act-quickscan</Link>. Wie liever eerst leest waarom dit vaker een architectuurvraag is dan een modelvraag, kan terecht bij <Link href="/artikelen/ai-problemen-zijn-architectuurproblemen">AI-problemen zijn architectuurproblemen</Link>.
        </p>
      </section>

      <section>
        <h2>Alles staat open</h2>
        <p>
          Ik heb dit onderzoek nooit weggestopt, ook de tegenvallende cijfers niet. Het volledige project staat op <a href={REPO} target="_blank" rel="noopener noreferrer">GitHub</a>. Daar vind je de <a href={`${REPO}/blob/master/Multi_Class_Text_Classification_with_baseline_models.ipynb`} target="_blank" rel="noopener noreferrer">notebook met de klassieke modellen</a> waar de cijfers hierboven uit komen, de <a href={`${REPO}/blob/master/BERT_sentence_classification.ipynb`} target="_blank" rel="noopener noreferrer">BERT-notebook</a>, de <a href={`${REPO}/blob/master/Annotation_guidelines.pdf`} target="_blank" rel="noopener noreferrer">annotatierichtlijnen</a> die de labelaars kregen, en de <a href={`${REPO}/tree/master/Annotated%20tweets`} target="_blank" rel="noopener noreferrer">gelabelde tweets</a> uit de testset.
        </p>
        <p>
          Vragen hierover, of loop je bij je eigen systeem tegen iets vergelijkbaars aan? Mail me op <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
