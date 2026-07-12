import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/articles/growing-up-in-ai-ethics',
    languages: { 'nl-NL': '/artikelen/volwassen-worden-in-ai-ethiek', 'en': '/en/articles/growing-up-in-ai-ethics' },
  },
  title: 'Growing up in AI ethics · Kimberley van Ruiven',
  description: 'Between AI principles and practice lies a gap. The AI ethics maturity model from Erasmus University makes visible where you stand, across six dimensions.',
};

export default function MaturityArticle() {
  return (
    <C2Tekstpagina
      label="AI ethics · July 2026"
      regels={['Growing up in', 'AI ethics']}
      locale="en"
      anderePad="/artikelen/volwassen-worden-in-ai-ethiek"
      scatter={[[15, 5, '74%', '10%'], [6, 3.2, '86%', '60%']]}
      intro={
        <p>
          More and more organisations have AI principles: we use AI responsibly, transparently and with an eye for people. Fine words, and usually sincerely meant. But between principles and practice lies a gap, and that gap is rarely measured. Researchers at Erasmus University developed a model for it: the AI ethics maturity model.
        </p>
      }
    >
      <section>
        <h2>From words to practice</h2>
        <p>
          The model comes from research by Joris Krijger and colleagues, published in the academic journal AI and Ethics and tested in practice at eleven educational institutions among others. The core idea: inside organisations, ethics is not a document but a skill, and skills can be developed. Maturity is measured across six dimensions.
        </p>
      </section>

      <section>
        <h2>The six dimensions</h2>
        <p>
          It begins with awareness and culture: does your team talk at all about what AI should and should not be doing? Then policy, agreements short enough to actually be read. Then governance: who is responsible when a system gets it wrong, and does that person know it themselves? The fourth dimension is communication and training, especially live in the Netherlands because the AI Act calls for demonstrable AI literacy. The fifth is your processes: are ethical questions asked while systems are being chosen and built, or only once something goes wrong? And finally tooling, the aids that make it easy for your people to do the right thing.
        </p>
      </section>

      <section>
        <h2>Maturity is knowing where you stand</h2>
        <p>
          The liberating thing about this model: you do not have to score top marks. An organisation of twelve people needs no ethics committee and no governance department. Maturity means knowing where you stand on each of the six dimensions, and choosing deliberately what the next step is. That also fits how the AI Act is put together: compliance is not a project with an end date but maintenance, and anyone who knows their own level knows what does and does not need doing this year.
        </p>
      </section>

      <section>
        <h2>Start here</h2>
        <p>
          Want to know where your organisation stands? This model is one of the instruments in my <Link href="/en/services/ai-act-quickscan">AI Act quickscan</Link>: besides the legal state of play you get a picture of your maturity across these six dimensions, with the logical next step alongside it. Questions? Email <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
        <p>
          Source: Krijger, Thuis, De Ruiter, Ligthart and Broekman, The AI ethics maturity model, AI and Ethics (2022).
        </p>
      </section>
    </C2Tekstpagina>
  );
}
