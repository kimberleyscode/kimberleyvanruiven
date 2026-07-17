import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/articles/technology-that-sees-people',
    languages: { 'nl-NL': '/artikelen/technologie-die-de-mens-ziet', 'en': '/en/articles/technology-that-sees-people' },
  },
  title: 'Technology that sees people · Kimberley van Ruiven',
  description: 'Every technology carries its makers’ intentions in it. On humane technology, deceptively human-seeming AI, and the manifesto I hold my work to.',
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
          Every technology carries its makers’ intentions in it. Social media taught us that lesson the hard way: platforms that make their money from attention end up pulling at your attention. Now that AI is finding its way into everything, the same question is more urgent than ever: which incentives sit behind the systems you’re bringing into your organisation?
        </p>
      }
    >
      <section>
        <h2>Incentives shape the outcome</h2>
        <p>
          This is the core idea of the Center for Humane Technology, the think tank co-founded by Tristan Harris: anyone who wants different outcomes has to choose different incentives. For you as an organisation that turns out to be surprisingly practical. Does a tool make its money from the work it does for you, or from your data and your attention? A supplier who earns from your subscription has every reason to make sure the system simply works. With a free tool, you’re rarely the customer.
        </p>
      </section>

      <section>
        <h2>Clarity gives control</h2>
        <p>
          The second idea: you can only steer what you understand. As long as AI is a black box that answers &quot;just magically&quot;, you can’t make sensible arrangements about it. The moment someone explains in plain language what a system does, where its knowledge comes from and where it goes wrong, your position changes: from spectator to driver. Clarity isn’t a luxury. It’s the condition for using AI responsibly.
        </p>
      </section>

      <section>
        <h2>When AI passes itself off as human</h2>
        <p>
          The sharpest question is about appearance. More and more AI is given a name, a smiling avatar, and sentences like &quot;I understand how you feel&quot;. That feels friendly, and it works: people trust something that looks human more readily. Which is exactly why it misleads. Trust that rests on an illusion isn’t trust, and the AI Act now simply requires that people know when they’re talking to AI. Systems may be helpful, warm even, as long as they show what they are.
        </p>
      </section>

      <section>
        <h2>My manifesto</h2>
        <p>
          I’ve translated this way of thinking into the bar I hold my own work to: five principles about AI that shows what it is, people who stay at the wheel, and starting small with a system that holds up. You can read them in <Link href="/en/manifesto">my manifesto</Link>, and what that looks like day to day is set out in <Link href="/en/how-i-work-with-ai">how I work with AI</Link>. Inspired by the thinking of the <a href="https://www.humanetech.com" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
