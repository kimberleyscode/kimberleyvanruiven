import type { Metadata } from 'next';
import Link from 'next/link';
import { C2Tekstpagina } from '../../../gedeeld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/articles/google-bert-and-chatgpt',
    languages: { 'nl-NL': '/artikelen/google-bert-en-chatgpt', 'en': '/en/articles/google-bert-and-chatgpt' },
  },
  title: 'The language model you have been using for years without knowing it · Kimberley van Ruiven',
  description: 'Google BERT has understood language since 2019; ChatGPT and Claude write for themselves. What NLP models and generative models share, and when small is the better choice.',
};

export default function BertAndChatGPTArticle() {
  return (
    <C2Tekstpagina
      label="NLP · July 2026"
      regels={['The language model', 'you already use']}
      locale="en"
      anderePad="/artikelen/google-bert-en-chatgpt"
      scatter={[[8, 5, '74%', '10%'], [2, 3.2, '86%', '60%']]}
      intro={
        <p>
          For many people, AI and language began in November 2022, when ChatGPT appeared. But anyone who looked something up on Google before then was already using a language model. It is called BERT, it has been inside the search engine since 2019, and it is family to the models behind ChatGPT and Claude. Their differences say a great deal about which model you should be choosing for which task.
        </p>
      }
    >
      <section>
        <h2>The model that reads</h2>
        <p>
          BERT is a language model from Google that does one thing extremely well: understand what a text says. It reads a sentence in both directions at once, and so it grasps context. In the search &ldquo;travelling to the US without a visa&rdquo;, BERT understands that the word &ldquo;without&rdquo; changes the entire question; older search technology looked mainly at separate keywords. That is why Google built the model into search in 2019, and since then almost every query passes through it.
        </p>
        <p>
          What BERT does not do: write text of its own. The model reads, recognises and judges. You give it a piece of text and it tells you what that text is about, what sentiment sits in it, or which category it belongs to. For my master’s thesis I trained a BERT model myself to recognise hate speech in tweets. That could be done on an ordinary computer, because BERT is small enough to run yourself and to steer towards a specific task with a few thousand examples.
        </p>
      </section>

      <section>
        <h2>The models that write</h2>
        <p>
          ChatGPT and Claude come from the same family. They are built on the same underlying technique, the transformer, and they learned language the same way: by working through enormous quantities of human text. Only their task is reversed. Where BERT reads and assesses, these models predict the next word each time, and out of those predictions new text emerges.
        </p>
        <p>
          That makes them far more broadly usable: they write, summarise, translate and think along. It also makes them far larger, costlier and thirstier for energy, and their output is open. You do not know in advance exactly what will come out, and a convincing answer is not yet a correct one. In <Link href="/en/articles/machine-learning-or-generative-ai">machine learning or generative AI</Link> you can read what that difference means for the risks you run.
        </p>
      </section>

      <section>
        <h2>More in common than you would think</h2>
        <p>
          The family resemblance runs deeper than the marketing suggests. Both kinds of model learned from text written by people, and so both take on the patterns sitting in that text, the skewed ones included. My thesis research showed that concretely: a model meant to recognise hate speech can itself judge with prejudice against the very groups it ought to protect. That lesson holds undiminished for today’s large generative models.
        </p>
        <p>
          The real difference is in size and predictability. A model like BERT is specialised and compact: you can run it on your own servers, your data stays in-house, and the same message gets the same judgement today and tomorrow. The large generative models live with a provider in the cloud, cost money and energy per use, and phrase things slightly differently every time.
        </p>
      </section>

      <section>
        <h2>Small can be the better choice</h2>
        <p>
          Here it turns practical for your organisation. Many of the tasks companies now point a large generative model at are really reading tasks: routing incoming email to the right department, flagging complaints that are urgent, filtering responses on a forum. For work of that kind a small, specialised model is often faster, cheaper, more frugal and easier to check. How much that saves in climate impact you can see in my <Link href="/co2">AI CO₂ calculator</Link> (in Dutch).
        </p>
        <p>
          The question that really matters: what does your task need? Does something have to be read and assessed, or does something have to be made? Ask that first and you choose a tool that fits. Want help with it? Have a look at <Link href="/en/services/tailored-ai-solutions">tailored AI solutions</Link>, or email <a href="mailto:info@kimberleyvanruiven.nl">info@kimberleyvanruiven.nl</a>.
        </p>
      </section>
    </C2Tekstpagina>
  );
}
