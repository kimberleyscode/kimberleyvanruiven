import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/articles/technology-that-sees-people',
    languages: { 'nl-NL': '/artikelen/technologie-die-de-mens-ziet', 'en': '/en/articles/technology-that-sees-people' },
  },
  title: 'Technology that sees people · Kimberley van Ruiven',
  description: 'Every technology carries the incentives of its makers within it. On humane technology, deceptively human-seeming AI, and the manifesto I hold my work to.',
};

export default function HumaneTechArticle() {
  return (
    <C2Tekstpagina
      label="Humane technology · July 2026"
      regels={['Technology that', 'sees people']}
      locale="en"
      anderePad="/artikelen/technologie-die-de-mens-ziet"
      scatter={[[10, 5, '74%', '10%'], [3, 3.2, '86%', '60%']]}
      intro={
        <p>
          Every technology carries the intentions of its makers within it. Social media taught us that lesson the hard way: platforms that earn from attention end up pulling at your attention. Now that AI is sliding into everything, the same question is more urgent than ever: which incentives sit behind the systems you are bringing into your organisation?
        </p>
      }
    >
      <section>
        <h2>Incentives decide the outcome</h2>
        <p>
          This is the core idea of the Center for Humane Technology, the think tank founded by Tristan Harris among others: anyone who wants different outcomes has to choose different incentives. For you as an organisation that turns out to be surprisingly practical. Does a tool earn from the work it does for you, or from your data and your attention? A supplier who makes their money from your subscription has every reason for the system to simply work well. With a free tool, you are rarely the customer.
        </p>
      </section>

      <section>
        <h2>Clarity gives control</h2>
        <p>
          The second idea: you can only steer what you understand. As long as AI is a black box that answers &quot;just magically&quot;, you cannot make sensible agreements about it. The moment someone explains in plain language what a system does, where its knowledge comes from and where it goes wrong, your position changes: from spectator to driver. Clarity, then, is no luxury but the condition for any responsible use of AI.
        </p>
      </section>

      <section>
        <h2>When AI passes itself off as human</h2>
        <p>
          The sharpest point is about form. More and more AI is given a name, a little face, and sentences like &quot;I understand how you feel&quot;. That feels friendly, and it works: people trust something that looks human more readily. Which is exactly why it misleads. Trust that rests on an illusion is not trust, and the AI Act now simply requires that people know when they are talking to AI. Systems may be helpful, warm even, as long as they show what they are.
        </p>
      </section>

      <section>
        <h2>My manifesto</h2>
        <p>
          I have translated this way of thinking into the bar I hold my own work to: five principles about AI that shows what it is, people who keep the wheel, and starting small with a system that holds up. You can read them in <Link href="/en/manifesto">my manifesto</Link>, and what that looks like day to day is set out in <Link href="/en/how-i-work-with-ai">how I work with AI</Link>. Written in my own words, inspired by the thinking of the <a href="https://www.humanetech.com" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
