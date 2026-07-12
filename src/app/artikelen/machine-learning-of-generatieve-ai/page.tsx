import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/artikelen/machine-learning-of-generatieve-ai' },
  title: "Machine learning of generatieve AI: het verschil bepaalt je risico · Kimberley van Ruiven",
  description: "Machine learning voorspelt, generatieve AI maakt. Wie het verschil kent, weet welke vragen je aan een AI-tool moet stellen en welk risico je loopt.",
};

export default function MLvsGenAIArtikel() {
  return (
    <C2Tekstpagina
      label="Machine learning · juli 2026"
      regels={['Twee soorten AI,', 'twee risico’s']}
      scatter={[[13, 5, '74%', '10%'], [9, 3.2, '86%', '60%']]}
      intro={
        <p>
          Machine learning en generatieve AI worden in gesprekken vaak op één hoop gegooid onder de noemer AI. Begrijpelijk, want de grens is voor buitenstaanders onzichtbaar. Toch zijn het wezenlijk verschillende technieken, en welke van de twee er in een tool zit bepaalt welk risico je loopt en welke vragen je moet stellen.
        </p>
      }
    >
      <section>
        <h2>Machine learning voorspelt</h2>
        <p>
          Machine learning leert patronen uit historische data en doet daar vervolgens uitspraken over nieuwe gevallen. Je spamfilter dat mail sorteert, een systeem dat inschat welke klanten gaan opzeggen, een planningstool die drukte voorspelt: allemaal machine learning. De uitkomst is smal en voorspelbaar van vorm. Het model zegt ja of nee, geeft een score of kiest een categorie.
        </p>
        <p>
          Het risico zit hier in de data waarop het model is getraind. Zitten daar scheve patronen in, dan neemt het model die feilloos over. Voor mijn masterscriptie onderzocht ik algoritmes die online haatspraak herkennen, en precies dat bleek het probleem: modellen die de vooroordelen uit hun trainingsdata reproduceren, met alle gevolgen van dien voor de mensen over wie ze oordelen.
        </p>
      </section>

      <section>
        <h2>Generatieve AI maakt</h2>
        <p>
          Generatieve AI, zoals ChatGPT en Claude, produceert zelf nieuwe tekst, beeld of audio. De uitkomst is open: je weet vooraf niet precies wat eruit komt, en het model presenteert een gok met dezelfde stelligheid als een feit. Dat maakt het krachtig voor schrijfwerk, samenvatten en meedenken, en tegelijk onbetrouwbaar als bron van waarheid.
        </p>
        <p>
          Het risico verschuift hier van de trainingsdata naar het dagelijks gebruik. Wat medewerkers in een prompt plakken verlaat je organisatie, en wat eruit komt kan overtuigend klinken en toch niet kloppen. De vraag is dus wie er controleert voordat een antwoord naar een klant gaat.
        </p>
      </section>

      <section>
        <h2>Waarom het verschil ertoe doet</h2>
        <p>
          Ook de wet kijkt zo naar AI. De EU AI Act deelt toepassingen in naar risico, en een machine-learningmodel dat over mensen oordeelt, bijvoorbeeld bij sollicitaties of kredietaanvragen, valt al snel in de zware categorie. Een tekstassistent die je helpt met een offerte niet.
        </p>
        <p>
          Praktisch betekent het verschil dit: bij machine learning stel je vragen over de data en de beslissing. Waarop is het getraind, hoe vaak zit het ernaast, en wat gebeurt er met iemand die verkeerd wordt ingeschat? Bij generatieve AI stel je vragen over het gebruik. Welke gegevens gaan erin, wie kijkt de uitkomst na, en weten je mensen wat de tool wel en niet kan? Wie weet welk type er in een tool zit, weet welke van die twee gesprekken er nodig is.
        </p>
      </section>

      <section>
        <h2>Begin hier</h2>
        <p>
          Loop de AI-tools in je organisatie eens langs met één vraag per tool: voorspelt dit iets, of maakt dit iets? Dat ene onderscheid vertelt je waar je op moet letten. Wil je dat samen doen, met meteen een beeld van waar je staat voor de AI Act? Daarvoor is de <Link href="/diensten/ai-act-quickscan">AI Act-quickscan</Link>. Vragen over jouw situatie? Mail naar <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
