import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/articles/ai-problems-are-architecture-problems',
    languages: { 'nl-NL': '/artikelen/ai-problemen-zijn-architectuurproblemen', 'en': '/en/articles/ai-problems-are-architecture-problems' },
  },
  title: 'Why most AI problems are architecture problems · Kimberley van Ruiven',
  description: 'When an AI project disappoints, the model gets the blame. Usually the problem sits around it: in the data, the fit with your systems, and who is watching.',
};

export default function ArchitectureArticle() {
  return (
    <C2Tekstpagina
      label="Systems architecture · July 2026"
      regels={['Architecture', 'first']}
      locale="en"
      anderePad="/artikelen/ai-problemen-zijn-architectuurproblemen"
      scatter={[[9, 5, '74%', '10%'], [2, 3.2, '86%', '60%']]}
      intro={
        <p>
          When an AI project disappoints, the model usually gets the blame. Too dim, too general, not ready for our work yet. But zoom in on failed projects and you see something else: the model did what it was meant to do, and nobody had properly thought through everything around it. Most AI problems are architecture problems.
        </p>
      }
    >
      <section>
        <h2>The model is the easy part</h2>
        <p>
          The research institute RAND put the figure at around eighty per cent of AI projects failing, twice as often as other IT projects. Rarely because the model falls short: today’s language models are the same building blocks for everyone, and they are impressively good. What goes wrong sits before and after. Data that is not in order. A tool standing apart from the real work, so that nobody opens it. Output nobody looks at until a mistake lands with a client. And, before any of that, a goal never stated more sharply than &quot;something with AI&quot;.
        </p>
      </section>

      <section>
        <h2>What architecture means here</h2>
        <p>
          Architecture sounds like something for large IT departments, but it comes down to a few ordinary questions. Where does the information the system uses come from, and is it right? Where does the answer land, and who looks at it before it has consequences? What happens the moment the model gets it wrong, because that moment will come. And how does it fit the software your team already works in?
        </p>
        <p>
          That last one gets underestimated. AI works best as a layer inside your existing processes, connected to the systems you already have, rather than as a separate app standing beside everything else. An assistant that lives in your inbox or your schedule gets used; a separate screen with a chat window gets forgotten.
        </p>
      </section>

      <section>
        <h2>Starting small is a design choice</h2>
        <p>
          The projects that do succeed almost always start small: one process, one clear measure of success, and a person who keeps the last word. That is not caution, it is design. A small system that holds up can be extended; a large system that wobbles can only be repaired. And because with a small system you know exactly what goes in and what comes out, the ethical side comes along for free: you can explain what it does, and for whom.
        </p>
      </section>

      <section>
        <h2>Start here</h2>
        <p>
          Do you have an AI idea, or a tool that did not deliver what was expected of it? Then look at the four questions above before you try a different model. This is exactly the work I do in <Link href="/en/services/tailored-ai-solutions">tailored AI solutions</Link>: get the system right first, scale up afterwards. Tell me what you have in mind at <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
