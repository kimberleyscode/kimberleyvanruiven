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
          I advise on responsible AI. So you can expect me to set an example myself. On this page you can read exactly how I use AI in my work, what happens to your data, and when I deliberately leave AI alone.
        </p>
      }
    >
      <section>
        <h2>Which AI tools I use, and what for</h2>
        <p>
          Anthropic’s Claude is my main AI assistant: for research, writing, code and for building client solutions such as chatbots. I use OpenAI’s ChatGPT alongside it, mostly to compare and check results. I use Perplexity for research that needs current sources, and Mistral’s Le Chat as a European alternative, the same provider I recommend as a greener option in my CO₂ calculator. I transcribe conversations and voice notes with tools such as Whisper and tl;dv, and only when everyone involved knows about it. Automation tools such as Zapier link workflows together, with AI as one link in the chain, never an end in itself.
        </p>
        <p>
          For every client project I say which AI tools are part of the solution, so nothing about it comes as a surprise later.
        </p>
      </section>

      <section>
        <h2>What happens to your data</h2>
        <p>
          Confidential client data doesn’t go into public AI models: no client names, no financial details, no personal data belonging to your clients in a prompt. I use AI services on settings or subscription plans where input isn’t used to train models.
        </p>
        <p>
          If we work together over a longer period, we put the use of AI in writing: a data processing agreement with an AI addendum setting out which tools, which data and which limits. And everything I make for you, with or without AI, is yours, including the prompts and instructions written specifically for your business.
        </p>
      </section>

      <section>
        <h2>People stay at the wheel</h2>
        <p>
          With me, AI does the preparatory work and I make the decisions. Everything that reaches you or your clients has been checked and reviewed by me, and I verify any factual claim from AI against the original source before I use it. The advice is mine: AI helps me think, but my judgement, my experience and my responsibility stand behind every recommendation.
        </p>
      </section>

      <section>
        <h2>When I don’t use AI</h2>
        <p>
          I leave AI out of sensitive conversations and personal situations: those deserve a person, not a model. I leave it out when a simpler solution is better, because not every problem needs AI, and sometimes a well-built spreadsheet or a clear process is the honest answer. And I leave it out when the privacy cost is too high to justify. In that case I’ll say so, and we’ll look for another way together.
        </p>
      </section>

      <section>
        <h2>Sustainability</h2>
        <p>
          Using AI costs energy and water. I keep my own use deliberate: I pick the lightest model that can handle the task, and I don’t reach for AI on work that goes perfectly well without it. Curious about the climate impact of your own AI use? That’s what I built a free <Link href="/co2">AI CO₂ calculator</Link> for (in Dutch).
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
