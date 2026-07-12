import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/articles/client-data-and-chatgpt',
    languages: { 'nl-NL': '/artikelen/klantdata-en-chatgpt', 'en': '/en/articles/client-data-and-chatgpt' },
  },
  title: 'Which client data do you share with ChatGPT? · Kimberley van Ruiven',
  description: 'Three rules of thumb for using AI safely with client data: what can go into a prompt, what never can, and which settings to switch on today.',
};

export default function ClientDataArticle() {
  return (
    <C2Tekstpagina
      label="Privacy · July 2026"
      regels={['Client data', 'and ChatGPT']}
      locale="en"
      anderePad="/artikelen/klantdata-en-chatgpt"
      scatter={[[11, 5, '76%', '10%'], [2, 3.2, '88%', '58%']]}
      intro={
        <p>
          Most data leaks through AI come not from hackers but from well-meaning prompts: a client email you &ldquo;just have summarised&rdquo;, a quote with a name and a fee on it that you ask ChatGPT to rewrite. Three rules of thumb will keep you clear of the most common mistakes.
        </p>
      }
    >
      <section>
        <h2>Rule one: prompt as though it were public</h2>
        <p>
          Treat everything you type into a public AI tool as though it could end up outside your business. Names, addresses, financial details, health information and anything covered by your duty of confidentiality: leave it out. What does work is the same question with the details anonymised. &ldquo;Rewrite this email to [client] about [project]&rdquo; works just as well and leaks nothing.
        </p>
      </section>

      <section>
        <h2>Rule two: switch off training on your data</h2>
        <p>
          On the free tiers of many AI tools, your input is used by default to improve the models. You don’t want that for work material. Check your settings today: in ChatGPT it sits under Settings, Data Controls (switch off &ldquo;Improve the model for everyone&rdquo;); business plans such as Team and Enterprise don’t train on your data by default. With Claude the same principle applies: check your privacy settings and choose a business plan where you can.
        </p>
      </section>

      <section>
        <h2>Rule three: routine use calls for something on paper</h2>
        <p>
          If you use AI routinely in processes that client data passes through, a chatbot or a transcription tool for instance, then under the GDPR you’re responsible for what that tool does with the data. You cover that with a data processing agreement, ideally with an AI addendum setting out which tools may see which data. That’s how I built a fully GDPR-compliant <Link href="/en/services/tailored-ai-solutions">AI chatbot for a client</Link>: the same convenience, without the loose ends.
        </p>
      </section>

      <section>
        <h2>The quick checklist</h2>
        <ul>
          <li>No personal data or confidential information in public AI tools.</li>
          <li>Anonymise prompts: replace names and identifying details with placeholders.</li>
          <li>Switch off &ldquo;train on my data&rdquo;, or use a business plan.</li>
          <li>AI running routinely in your client processes? Put a data processing agreement in place, with an AI addendum.</li>
          <li>Teach your team these rules: that in itself is part of your <Link href="/en/articles/the-ai-act-for-smes">AI literacy duty under the AI Act</Link>.</li>
        </ul>
        <p>
          Unsure about your own setup? Email <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a> and we’ll walk through it together.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
