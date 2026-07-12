import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/artikelen/technologie-die-de-mens-ziet' },
  title: "Technologie die de mens ziet · Kimberley van Ruiven",
  description: "Elke technologie draagt de prikkels van zijn makers in zich. Over humane technologie, misleidend mensachtige AI, en het manifest waar ik mijn werk langs leg.",
};

export default function HumaneTechArtikel() {
  return (
    <C2Tekstpagina
      label="Humane technologie · juli 2026"
      regels={['Technologie die', 'de mens ziet']}
      scatter={[[10, 5, '74%', '10%'], [3, 3.2, '86%', '60%']]}
      intro={
        <p>
          Elke technologie draagt de bedoelingen van zijn makers in zich. Sociale media leerden ons die les hard: platforms die verdienen aan aandacht, gaan vanzelf trekken aan je aandacht. Nu AI overal in schuift is dezelfde vraag urgenter dan ooit: welke prikkels zitten er achter de systemen die jij je organisatie binnenhaalt?
        </p>
      }
    >
      <section>
        <h2>Prikkels bepalen de uitkomst</h2>
        <p>
          Dit is de kerngedachte van het Center for Humane Technology, de denktank van onder anderen Tristan Harris: wie andere uitkomsten wil, moet andere prikkels kiezen. Voor jou als organisatie is dat verrassend praktisch. Verdient een tool aan het werk dat hij voor je doet, of aan je data en je aandacht? Een leverancier die zijn geld verdient met jouw abonnement heeft er baat bij dat het systeem gewoon goed werkt. Bij een gratis tool ben je zelden de klant.
        </p>
      </section>

      <section>
        <h2>Helderheid geeft regie</h2>
        <p>
          De tweede gedachte: je kunt alleen sturen wat je begrijpt. Zolang AI een zwarte doos is die &quot;gewoon magisch&quot; antwoordt, kun je er geen zinnige afspraken over maken. Zodra iemand je in gewone taal uitlegt wat een systeem doet, waar zijn kennis vandaan komt en waar hij de mist in gaat, verandert je positie: van toeschouwer naar bestuurder. Helderheid is daarmee geen luxe maar de voorwaarde voor elk verantwoord AI-gebruik.
        </p>
      </section>

      <section>
        <h2>Wanneer AI zich voordoet als mens</h2>
        <p>
          Het scherpste punt gaat over vorm. Steeds meer AI krijgt een naam, een gezichtje en zinnen als &quot;ik begrijp hoe je je voelt&quot;. Dat voelt vriendelijk, en het werkt: mensen vertrouwen iets dat menselijk oogt sneller. Precies daarom is het misleidend. Vertrouwen dat op een illusie rust is geen vertrouwen, en de AI Act eist inmiddels ook gewoon dat mensen weten wanneer ze met AI praten. Systemen mogen behulpzaam zijn, warm zelfs, zolang ze laten zien wat ze zijn.
        </p>
      </section>

      <section>
        <h2>Mijn manifest</h2>
        <p>
          Deze denkwijze heb ik vertaald naar de lat waar ik mijn eigen werk langs leg: vijf uitgangspunten over AI die laat zien wat het is, de mens die het stuur houdt, en klein beginnen met een systeem dat klopt. Je leest ze in <Link href="/manifest">mijn manifest</Link>, en hoe dat er dagelijks uitziet staat op <Link href="/zo-werk-ik-met-ai">zo werk ik met AI</Link>. Geschreven in eigen woorden, geïnspireerd door het gedachtegoed van het <a href="https://www.humanetech.com" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
