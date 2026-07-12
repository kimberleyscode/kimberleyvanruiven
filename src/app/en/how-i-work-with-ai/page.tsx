import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/how-i-work-with-ai',
    languages: { 'nl-NL': '/zo-werk-ik-met-ai', 'en': '/en/how-i-work-with-ai' },
  },
  title: 'How I work with AI · Kimberley van Ruiven',
  description: 'Full transparency about how I use AI: which tools, what happens to your data, and when I deliberately leave AI alone.',
  openGraph: {
    title: 'How I work with AI · Kimberley van Ruiven',
    description: 'Full transparency about how I use AI: which tools, what happens to your data, and when I deliberately leave AI alone.',
    locale: 'en_GB',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'For organisations that choose a human-centred future with technology · Kimberley van Ruiven' }],
  },
};

export default function HowIWorkWithAI() {
  return (
    <C2Tekstpagina
      label="Transparency"
      regels={['How I work', 'with AI']}
      bijgewerkt="July 2026"
      locale="en"
      anderePad="/zo-werk-ik-met-ai"
      scatter={[[8, 5.4, '70%', '8%'], [14, 3.4, '84%', '58%'], [3, 2.6, '58%', '78%']]}
      intro={
        <p>
          I advise on responsible AI. You may then expect me to set the example myself. On this page you can read exactly how I use AI in my work, what happens to your data, and when I deliberately leave AI alone.
        </p>
      }
    >
      <section>
        <h2>Which AI tools I use, and what for</h2>
        <p>
          Claude, by Anthropic, is my main AI assistant: for research, writing, code and building client solutions such as chatbots. I use ChatGPT, by OpenAI, alongside it, mostly to compare and check results. Perplexity I use for research with current sources, and Le Chat, by Mistral, as a European alternative; the same provider I recommend as a greener option in my CO₂ calculator. Conversations and voice notes I transcribe with tools such as Whisper and tl;dv, only with the knowledge of everyone taking part. Automation tools such as Zapier link workflows together; AI is one link in that chain, never the goal in itself.
        </p>
        <p>
          For every client project I state which AI tools are part of the solution. So you never find out afterwards.
        </p>
      </section>

      <section>
        <h2>What happens to your data</h2>
        <p>
          Confidential client data does not go into public AI models: no client names, no financial details, no personal data belonging to your customers in a prompt. I use AI services on settings or subscription plans where input is not used to train models.
        </p>
        <p>
          If we work together on a lasting basis, we set the use of AI down in a data processing agreement with an AI addendum: which tools, which data, which limits. And everything I make for you, with AI or without, is yours, including the prompts and instructions written specifically for your business.
        </p>
      </section>

      <section>
        <h2>People stay at the wheel</h2>
        <p>
          With me, AI does the preparatory work; I make the decisions. Everything that reaches you or your clients has been checked and reviewed by me, and AI output containing factual claims I verify at the source before I use it. The advice is mine: AI helps me think, but my judgement, my experience and my responsibility sit in every recommendation.
        </p>
      </section>

      <section>
        <h2>When I do not use AI</h2>
        <p>
          In sensitive conversations and personal situations: those deserve a person, not a model. When a simpler solution is better, because not every problem needs AI; sometimes a well-built spreadsheet or a clear process is the honest answer. And when the privacy trade-off cannot be made to work. Then I say so, and we look for an alternative together.
        </p>
      </section>

      <section>
        <h2>Sustainability</h2>
        <p>
          Using AI costs energy and water. I keep my own use deliberate: I pick the lightest model that can handle the task, and I do not reach for AI on work that goes perfectly well without it. Curious about the climate impact of your own AI use? That is what I built a free <Link href="/co2">AI CO₂ calculator</Link> for (in Dutch).
        </p>
      </section>

      <section>
        <h2>Questions about any of this?</h2>
        <p>
          Transparency works both ways: ask me anything. Email <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>, or see the <Link href="/en/privacy">privacy policy</Link> for how this website itself handles data.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
