import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/concept-2/artikelen/ai-problemen-zijn-architectuurproblemen' },
  title: "Waarom de meeste AI-problemen architectuurproblemen zijn · Kimberley van Ruiven",
  description: "Als een AI-project teleurstelt, krijgt het model de schuld. Meestal zit het probleem eromheen: in de data, de aansluiting op je systemen en wie er meekijkt.",
  robots: "noindex, nofollow", // conceptversie; het oude /artikelen-pad blijft voorlopig het echte
};

export default function ArchitectuurArtikel() {
  return (
    <C2Tekstpagina
      label="Systems architecture · juli 2026"
      regels={['Architectuur', 'eerst']}
      scatter={[[9, 5, '74%', '10%'], [2, 3.2, '86%', '60%']]}
      intro={
        <p>
          Als een AI-project teleurstelt, krijgt het model meestal de schuld. Te dom, te algemeen, nog niet klaar voor ons werk. Maar wie inzoomt op mislukte projecten ziet iets anders: het model deed wat het moest doen, alleen was er nooit goed nagedacht over alles eromheen. De meeste AI-problemen zijn architectuurproblemen.
        </p>
      }
    >
      <section>
        <h2>Het model is het makkelijke deel</h2>
        <p>
          Onderzoeksinstituut RAND becijferde dat zo&apos;n tachtig procent van de AI-projecten mislukt, twee keer zo vaak als andere IT-projecten. Zelden omdat het model tekortschiet: de taalmodellen van vandaag zijn voor iedereen dezelfde bouwstenen, en ze zijn indrukwekkend goed. Wat misgaat zit ervoor en erna. Data die niet op orde is. Een tool die los naast het echte werk staat, zodat niemand hem opent. Output waar niemand naar omkijkt totdat er een fout bij een klant belandt. En vooraf: een doel dat nooit scherper is geformuleerd dan &quot;iets met AI&quot;.
        </p>
      </section>

      <section>
        <h2>Wat architectuur hier betekent</h2>
        <p>
          Architectuur klinkt als iets voor grote IT-afdelingen, maar het draait om een paar gewone vragen. Waar komt de informatie vandaan die het systeem gebruikt, en klopt die? Waar landt het antwoord, en wie kijkt ernaar voordat het gevolgen heeft? Wat gebeurt er op het moment dat het model ernaast zit, want dat moment komt. En hoe sluit het aan op de software waar je team al in werkt?
        </p>
        <p>
          Dat laatste wordt vaak onderschat. AI werkt het best als een laag in je bestaande processen, via koppelingen met de systemen die je al hebt, en niet als een losse app die naast alles staat. Een assistent die in je mailbox of planning leeft wordt gebruikt; een apart scherm met een chatvenster wordt vergeten.
        </p>
      </section>

      <section>
        <h2>Klein beginnen is een ontwerpkeuze</h2>
        <p>
          De projecten die wél slagen beginnen bijna altijd klein: één proces, één duidelijke maat voor succes, en een mens die het laatste woord houdt. Dat is niet voorzichtigheid, het is ontwerp. Een klein systeem dat klopt kun je uitbreiden; een groot systeem dat wankelt kun je alleen repareren. En omdat je bij een klein systeem precies weet wat erin gaat en eruit komt, heb je de ethische kant er meteen bij: je kunt uitleggen wat het doet en voor wie.
        </p>
      </section>

      <section>
        <h2>Begin hier</h2>
        <p>
          Heb je een AI-idee, of juist een tool die niet bracht wat ervan verwacht werd? Kijk dan eerst naar de vier vragen hierboven voordat je een ander model probeert. Dit is precies het werk dat ik doe bij <Link href="/diensten/ai-oplossingen-op-maat">AI-oplossingen op maat</Link>: eerst het systeem kloppend maken, dan pas opschalen. Vertel me wat je voor ogen hebt via <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
