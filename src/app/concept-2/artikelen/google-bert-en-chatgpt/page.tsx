import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/concept-2/artikelen/google-bert-en-chatgpt' },
  title: "Het taalmodel dat je al jaren gebruikt zonder het te weten · Kimberley van Ruiven",
  description: "Google BERT begrijpt taal al sinds 2019, ChatGPT en Claude schrijven zelf. Wat NLP-modellen en generatieve taalmodellen delen, en wanneer klein de betere keuze is.",
  robots: "noindex, nofollow", // conceptversie; het oude /artikelen-pad blijft voorlopig het echte
};

export default function BertEnChatGPTArtikel() {
  return (
    <C2Tekstpagina
      label="NLP · juli 2026"
      regels={['Het taalmodel dat je', 'al jaren gebruikt']}
      scatter={[[8, 5, '74%', '10%'], [2, 3.2, '86%', '60%']]}
      intro={
        <p>
          Voor veel mensen begon AI met taal in november 2022, toen ChatGPT verscheen. Maar wie vóór die tijd iets opzocht via Google, gebruikte toen al een taalmodel. Het heet BERT, het zit sinds 2019 in de zoekmachine, en het is familie van de modellen achter ChatGPT en Claude. Hun verschillen zeggen veel over welk model je voor welke taak zou moeten kiezen.
        </p>
      }
    >
      <section>
        <h2>Het model dat leest</h2>
        <p>
          BERT is een taalmodel van Google dat één ding heel goed kan: begrijpen wat er in een tekst staat. Het leest een zin in beide richtingen tegelijk en snapt daardoor context. In de zoekopdracht &ldquo;reizen naar de VS zonder visum&rdquo; begrijpt BERT dat het woord &ldquo;zonder&rdquo; de hele vraag verandert; oudere zoektechnologie keek vooral naar losse trefwoorden. Daarom nam Google het model in 2019 op in de zoekmachine, en sindsdien loopt vrijwel elke zoekopdracht erdoorheen.
        </p>
        <p>
          Wat BERT niet doet: zelf tekst schrijven. Het model leest, herkent en oordeelt. Je geeft het een stuk tekst en het vertelt je waar die over gaat, welk sentiment erin zit of in welke categorie hij hoort. Voor mijn masterscriptie trainde ik zelf een BERT-model dat haatspraak herkent in tweets. Dat kon op een gewone computer, want BERT is klein genoeg om zelf te draaien en met een paar duizend voorbeelden bij te sturen voor een specifieke taak.
        </p>
      </section>

      <section>
        <h2>De modellen die schrijven</h2>
        <p>
          ChatGPT en Claude komen uit dezelfde familie. Ze zijn gebouwd op dezelfde onderliggende techniek, de transformer, en ze leerden taal op dezelfde manier: door enorme hoeveelheden menselijke tekst te verwerken. Alleen is hun taak omgedraaid. Waar BERT leest en beoordeelt, voorspellen deze modellen telkens het volgende woord, en uit die voorspellingen ontstaat nieuwe tekst.
        </p>
        <p>
          Dat maakt ze veel breder inzetbaar: ze schrijven, vatten samen, vertalen en denken mee. Het maakt ze ook veel groter, duurder en dorstiger in energie, en hun uitkomst is open. Je weet vooraf niet precies wat eruit komt, en een overtuigend antwoord is nog geen juist antwoord. In <Link href="/concept-2/artikelen/machine-learning-of-generatieve-ai">machine learning of generatieve AI</Link> lees je wat dat verschil betekent voor de risico&apos;s die je loopt.
        </p>
      </section>

      <section>
        <h2>Meer overeenkomst dan je denkt</h2>
        <p>
          De familieband is groter dan de marketing doet vermoeden. Beide soorten modellen leerden van door mensen geschreven tekst, en beide nemen dus over wat er in die tekst aan patronen zit, inclusief de scheve. Mijn scriptieonderzoek liet dat concreet zien: een model dat haatspraak moet herkennen, kan zelf bevooroordeeld oordelen over de groepen die het zou moeten beschermen. Die les geldt onverkort voor de grote generatieve modellen van nu.
        </p>
        <p>
          Het echte verschil zit in formaat en voorspelbaarheid. Een model als BERT is gespecialiseerd en compact: je kunt het op eigen servers draaien, je data blijft binnen, en hetzelfde bericht krijgt vandaag en morgen hetzelfde oordeel. De grote generatieve modellen wonen bij een aanbieder in de cloud, kosten per gebruik geld en energie, en formuleren elke keer nét anders.
        </p>
      </section>

      <section>
        <h2>Klein kan de betere keuze zijn</h2>
        <p>
          Hier wordt het praktisch voor je organisatie. Veel taken waar bedrijven nu een groot generatief model op zetten, zijn eigenlijk leestaken: binnenkomende mails naar de juiste afdeling sturen, klachten signaleren die urgent zijn, reacties filteren op een forum. Voor dat soort werk is een klein, gespecialiseerd model vaak sneller, goedkoper, zuiniger en beter controleerbaar. Hoeveel dat scheelt in klimaatimpact kun je zien in mijn <Link href="/concept-2/co2">AI CO₂-calculator</Link>.
        </p>
        <p>
          De vraag die er echt toe doet: wat heeft jouw taak nodig? Moet er iets gelezen en beoordeeld worden, of moet er iets gemaakt worden? Wie die vraag eerst stelt, kiest gereedschap dat past. Wil je daar hulp bij, kijk dan bij <Link href="/diensten/ai-oplossingen-op-maat">AI-oplossingen op maat</Link>, of mail naar <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
