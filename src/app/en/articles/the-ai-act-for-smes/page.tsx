import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/articles/the-ai-act-for-smes',
    languages: { 'nl-NL': '/artikelen/ai-act-voor-ondernemers', 'en': '/en/articles/the-ai-act-for-smes' },
  },
  title: 'What the EU AI Act asks of you as a business owner · Kimberley van Ruiven',
  description: 'The EU AI Act in plain language: what you do and do not have to arrange as a small business, including the AI literacy duty from article 4.',
};

export default function AIActArticle() {
  return (
    <C2Tekstpagina
      label="EU AI Act · July 2026"
      regels={['What the AI Act', 'asks of you']}
      locale="en"
      anderePad="/artikelen/ai-act-voor-ondernemers"
      scatter={[[16, 5, '74%', '10%'], [7, 3.2, '86%', '60%']]}
      intro={
        <p>
          The AI Act sounds like something for the lawyers at big tech companies. It touches you too, though, the moment you use ChatGPT, an AI chatbot or a smart scheduling tool. The good news: for most business owners it turns out in practice to be very manageable, once you know what to look for.
        </p>
      }
    >
      <section>
        <h2>The core: rules by risk</h2>
        <p>
          The AI Act sorts AI applications by risk. A handful of uses are banned outright (social scoring, for instance). High-risk systems, such as AI that assesses job applicants or estimates creditworthiness, face strict requirements. But the great majority of what you use as a business owner, such as writing assistants, chatbots and transcription tools, falls into the low-risk category, where it’s mainly the transparency rules that apply.
        </p>
      </section>

      <section>
        <h2>What you do have to arrange</h2>
        <p>
          First, AI literacy, the duty from article 4. Since 2 February 2025, every organisation using AI has had to make sure its people understand enough about it to work with it responsibly. That holds even if you employ only two people. A focused training or workshop is often enough; what counts is demonstrable, appropriate knowledge.
        </p>
        <p>
          Then transparency. If a client is talking to your chatbot, it has to be clear they’re talking to AI. If you publish AI-generated images or audio that look real, you have to say so.
        </p>
        <p>
          And finally: knowing what you use. You don’t have to keep a register the way a government body does, but you should be able to say which AI tools are running in your business and what they do. A simple list is a perfectly good start.
        </p>
      </section>

      <section>
        <h2>What you don’t have to do</h2>
        <p>
          No expensive certification or audit for ordinary office applications, and no lawyer on call: the obligations for low-risk applications can be met with common sense. And no need to panic about every new tool. The question is always the same: what does it do, with which data, and who could be affected by it?
        </p>
      </section>

      <section>
        <h2>Start here</h2>
        <p>
          Three steps you can take this month: make a list of every AI tool you and your team use, check for each one whether client or personal data ends up inside it, and set aside time to make your team AI-literate.
        </p>
        <p>
          You don’t have to work that last one out alone: I run an <Link href="/en/services/ai-policy-and-training">AI literacy workshop</Link> that covers exactly this, practical and tailored to your organisation. Questions about your own situation? Email <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
