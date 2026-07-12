import Link from 'next/link';
import { C2Tekstpagina } from './gedeeld';

export default function NotFound() {
  return (
    <C2Tekstpagina
      label="Foutmelding 404"
      regels={['Hier is', 'niets']}
      scatter={[[5, 5.4, '68%', '12%'], [16, 3.4, '82%', '60%'], [11, 2.8, '56%', '80%']]}
    >
      <section>
        <p>
          Deze pagina bestaat niet, of niet meer. Misschien is de link verhuisd, misschien is er een tikfout in het adres geslopen. Geen zorgen: alles wat wél bestaat vind je via de <Link href="/">homepagina</Link>.
        </p>
        <p>
          Blijf je hier steeds terechtkomen via een link op deze site? Dan hoor ik het graag via <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>, dan repareer ik het.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
