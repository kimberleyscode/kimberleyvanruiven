import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/manifesto',
    languages: { 'nl-NL': '/manifest', 'en': '/en/manifesto' },
  },
  title: 'My AI manifesto · Kimberley van Ruiven',
  description: 'The principles behind everything I build: AI that shows what it is, with people at the wheel, chosen on the right incentives.',
  openGraph: {
    title: 'My AI manifesto · Kimberley van Ruiven',
    description: 'The principles behind everything I build: AI that shows what it is, with people at the wheel, chosen on the right incentives.',
    locale: 'en_GB',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'For organisations that choose a human-centred future with technology · Kimberley van Ruiven' }],
  },
};

export default function Manifesto() {
  return (
    <C2Tekstpagina
      label="Manifesto"
      regels={['What I', 'stand for']}
      locale="en"
      anderePad="/manifest"
      scatter={[[8, 5.4, '72%', '8%'], [14, 3.2, '86%', '56%'], [3, 2.6, '60%', '80%']]}
      intro={
        <p>
          The shape AI takes is a choice. Yours too. No system is neutral: every system carries the choices of its makers within it. This manifesto is the bar I hold my own work to, with every piece of advice and every system I build.
        </p>
      }
    >
      <section>
        <h2>AI shows what it is</h2>
        <p>
          The systems I build never pass themselves off as human. No invented colleague with a little face, no &quot;I understand how you feel&quot;. People deserve to know what they are talking to, and trust that rests on an illusion is not trust.
        </p>
      </section>

      <section>
        <h2>People keep the wheel</h2>
        <p>
          AI may prepare, sort, suggest and speed things up. Decisions that affect people, about a job application, a complaint or a client, are made by a person. I design systems so that this human step cannot be automated away.
        </p>
      </section>

      <section>
        <h2>Incentives decide the outcome</h2>
        <p>
          Choosing technology means choosing the incentives behind it. Does a tool earn from your attention, from your data, or from the work it does for you? I choose and recommend tools whose incentives hold up: privacy-friendly, explainable, and where possible European and careful with energy.
        </p>
      </section>

      <section>
        <h2>Clarity gives control</h2>
        <p>
          You can only steer what you understand. So I work without jargon, I explain what a system does and what it does not, and you will also hear from me when AI is not the answer.
        </p>
      </section>

      <section>
        <h2>Small and sound</h2>
        <p>
          I do not believe in starting big and impressive. I believe in a small system that holds up: one process, clear agreements, and only then further. Technology should shape itself to the organisation, rather than the other way round.
        </p>
      </section>

      <section>
        <h2>Attribution</h2>
        <p>
          This manifesto is written in my own words, inspired by the thinking of the <a href="https://www.humanetech.com" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a> and by my own research into bias in AI. What this looks like in practice is set out in <Link href="/en/how-i-work-with-ai">how I work with AI</Link>.
        </p>
      </section>

      <section>
        <h2>Books that shaped how I see this</h2>
        <p>
          Much of what stands above was shaped by what I read. I recommend these books to anyone who wants to think further about AI and humanity.
        </p>
        <ul>
          <li>
            <em>Ik, AI: over machtige algoritmen en verantwoordelijkheid</em> (edited by Lotte van Elteren, 2025; in Dutch). Dutch AI researchers on responsibility, discrimination, privacy and the environmental impact of AI: exactly the questions this manifesto grew out of.
          </li>
          <li>
            <em>Onze kunstmatige toekomst</em> (Joris Krijger, 2025; in Dutch). On what we want from AI, and AI from us. Krijger is also the researcher behind the AI ethics maturity model I work with in my quickscan.
          </li>
          <li>
            <em>AI Ethics</em> (Mark Coeckelbergh, 2020). A compact overview of the big ethical questions around AI, from privacy and bias to the role of policy.
          </li>
        </ul>
      </section>
    </C2Tekstpagina>
  );
}
