import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: { canonical: '/concept-2/artikelen/volwassen-worden-in-ai-ethiek' },
  title: "Volwassen worden in AI-ethiek · Kimberley van Ruiven",
  description: "Tussen AI-principes en praktijk zit een gat. Het AI-ethiek volwassenheidsmodel van de Erasmus Universiteit maakt zichtbaar waar je staat, langs zes dimensies.",
  robots: "noindex, nofollow", // conceptversie; het oude /artikelen-pad blijft voorlopig het echte
};

export default function VolwassenheidArtikel() {
  return (
    <C2Tekstpagina
      label="AI-ethiek · juli 2026"
      regels={['Volwassen in', 'AI-ethiek']}
      scatter={[[15, 5, '74%', '10%'], [6, 3.2, '86%', '60%']]}
      intro={
        <p>
          Steeds meer organisaties hebben AI-principes: wij gebruiken AI verantwoord, transparant en met oog voor de mens. Mooie woorden, en meestal oprecht gemeend. Maar tussen principes en praktijk zit een gat, en dat gat wordt zelden gemeten. Onderzoekers van de Erasmus Universiteit ontwikkelden er een model voor: het AI-ethiek volwassenheidsmodel.
        </p>
      }
    >
      <section>
        <h2>Van woorden naar praktijk</h2>
        <p>
          Het model komt uit het onderzoek van Joris Krijger en collega&apos;s, gepubliceerd in het wetenschappelijke tijdschrift AI and Ethics en in de praktijk getest bij onder meer elf onderwijsinstellingen. De kerngedachte: ethiek is in organisaties geen document maar een vaardigheid, en vaardigheden kun je ontwikkelen. Volwassenheid meet je langs zes dimensies.
        </p>
      </section>

      <section>
        <h2>De zes dimensies</h2>
        <p>
          Het begint bij bewustzijn en cultuur: wordt er in je team überhaupt gesproken over wat AI wel en niet hoort te doen? Daarna beleid, afspraken die kort genoeg zijn om echt gelezen te worden. Dan governance: wie is er verantwoordelijk als een systeem ernaast zit, en weet diegene dat zelf ook? De vierde dimensie is communicatie en training, in Nederland extra actueel omdat de AI Act aantoonbare AI-geletterdheid vraagt. De vijfde zijn je processen: worden ethische vragen gesteld tijdens het kiezen en bouwen van systemen, of pas als er iets misgaat? En tot slot tooling, de hulpmiddelen die het je mensen makkelijk maken om het goede te doen.
        </p>
      </section>

      <section>
        <h2>Volwassenheid is weten waar je staat</h2>
        <p>
          Het bevrijdende aan dit model: je hoeft geen tien te scoren. Een organisatie van twaalf mensen heeft geen ethische commissie en geen governance-afdeling nodig. Volwassenheid betekent dat je weet waar je staat op elk van de zes dimensies, en dat je bewust kiest wat de volgende stap is. Dat past ook bij hoe de AI Act in elkaar zit: compliance is geen project met een einddatum maar onderhoud, en wie zijn eigen niveau kent, weet wat er dit jaar wél en níet hoeft.
        </p>
      </section>

      <section>
        <h2>Begin hier</h2>
        <p>
          Wil je weten waar jouw organisatie staat? Dit model is een van de instrumenten in mijn <Link href="/diensten/ai-act-quickscan">AI Act-quickscan</Link>: je krijgt behalve de wettelijke stand van zaken ook een beeld van je volwassenheid op deze zes dimensies, met de logische volgende stap erbij. Vragen? Mail naar <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
        <p>
          Bron: Krijger, Thuis, De Ruiter, Ligthart en Broekman, The AI ethics maturity model, AI and Ethics (2022).
        </p>
      </section>
    </C2Tekstpagina>
  );
}
