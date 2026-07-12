import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/articles/machine-learning-or-generative-ai',
    languages: { 'nl-NL': '/artikelen/machine-learning-of-generatieve-ai', 'en': '/en/articles/machine-learning-or-generative-ai' },
  },
  title: 'Machine learning or generative AI: the difference decides your risk · Kimberley van Ruiven',
  description: 'Machine learning predicts, generative AI creates. Knowing the difference tells you which questions to ask of an AI tool, and which risk you are running.',
};

export default function MLvsGenAIArticle() {
  return (
    <C2Tekstpagina
      label="Machine learning · July 2026"
      regels={['Two kinds of AI,', 'two risks']}
      locale="en"
      anderePad="/artikelen/machine-learning-of-generatieve-ai"
      scatter={[[13, 5, '74%', '10%'], [9, 3.2, '86%', '60%']]}
      intro={
        <p>
          Machine learning and generative AI often get lumped together in conversation under the single heading of AI. Understandably so, because the line between them is invisible from the outside. Yet they are fundamentally different techniques, and which of the two sits inside a tool decides the risk you run and the questions you should be asking.
        </p>
      }
    >
      <section>
        <h2>Machine learning predicts</h2>
        <p>
          Machine learning finds patterns in historical data and then makes statements about new cases. Your spam filter sorting mail, a system estimating which clients are about to leave, a scheduling tool forecasting a busy period: all machine learning. The output is narrow and predictable in shape. The model says yes or no, gives a score, or picks a category.
        </p>
        <p>
          The risk here sits in the data the model was trained on. If skewed patterns are present, the model will pick them up flawlessly. For my master’s thesis I studied algorithms that detect online hate speech, and that turned out to be exactly the problem: models reproducing the prejudices in their training data, with every consequence that carries for the people they pass judgement on.
        </p>
      </section>

      <section>
        <h2>Generative AI creates</h2>
        <p>
          Generative AI, such as ChatGPT and Claude, produces new text, images or audio of its own. The output is open: you do not know in advance exactly what will come out, and the model presents a guess with the same confidence as a fact. That makes it powerful for writing, summarising and thinking along, and at the same time unreliable as a source of truth.
        </p>
        <p>
          The risk here shifts from the training data to everyday use. Whatever staff paste into a prompt leaves your organisation, and whatever comes out can sound convincing and still be wrong. So the question becomes who checks before an answer reaches a client.
        </p>
      </section>

      <section>
        <h2>Why the difference matters</h2>
        <p>
          The law looks at AI this way too. The EU AI Act sorts applications by risk, and a machine learning model that passes judgement on people, in hiring or credit applications for instance, lands in the heavy category soon enough. A writing assistant helping you with a quote does not.
        </p>
        <p>
          In practice the difference means this: with machine learning you ask questions about the data and the decision. What was it trained on, how often does it get things wrong, and what happens to someone who is misjudged? With generative AI you ask questions about the use. Which data goes in, who checks the output, and do your people know what the tool can and cannot do? Anyone who knows which type sits inside a tool knows which of those two conversations is needed.
        </p>
      </section>

      <section>
        <h2>Start here</h2>
        <p>
          Walk through the AI tools in your organisation with one question per tool: does this predict something, or does this create something? That single distinction tells you what to watch for. Want to do it together, and get a picture of where you stand for the AI Act while you are at it? That is what the <Link href="/en/services/ai-act-quickscan">AI Act quickscan</Link> is for. Questions about your situation? Email <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
