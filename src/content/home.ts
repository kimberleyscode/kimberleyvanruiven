import type { HomeInhoud, Locale } from './types';

/* De teksten van de homepage, per taal.

   Het Nederlands is letterlijk overgenomen uit client.tsx: dit is de tekst die Kimberley
   heeft geredigeerd en goedgekeurd, er is geen woord aan veranderd.

   Het Engels is een CONCEPT ter redactie. Waar ik twijfelde staat een NB-opmerking.

   Let op de kinetische titels: de opdeling in regels is taalgebonden. Het forn-patroon
   knipt bewust midden in een woord ("Dien / sten"), dus dat mag in het Engels ook. */

const NL: HomeInhoud = {
  nav: { contact: 'Neem contact op' },

  hero: {
    eyebrow: 'Kimberley van Ruiven · Verantwoordelijke AI-adviseur voor het mkb · Rotterdam',
    titel: [
      { tekst: 'Een mensgerichte', speed: -0.5 },
      { tekst: 'toekomst met', speed: 0.5 },
      { tekst: 'technologie', speed: -0.45 },
    ],
  },

  statement: {
    eyebrow: 'Ik bouw',
    titel: [
      { tekst: 'AI', speed: -0.6 },
      { tekst: 'waar je achter', speed: 0.5 },
      { tekst: 'kunt staan', speed: -0.4 },
    ],
    kaart: 'De vorm die AI krijgt, is een keuze. Ook die van jou. Ik heb AI-bias wetenschappelijk onderzocht en bouw AI-systemen. Mijn focus is AI die bij jouw organisatie klopt: ik ben er voor kleine en middelgrote organisaties die kiezen voor een mensgerichte toekomst met technologie.',
    orbit: 'Mijn AI-manifest',
    orbitLabel: 'Lees mijn AI-manifest',
  },

  over: {
    titel: [{ tekst: 'Over', speed: -0.5 }],
    eyebrow: 'Een technische kijk door een menselijke bril',
    fotoAlt: 'Portret van Kimberley van Ruiven',
    alineas: [
      ['Ik ben Kimberley, voormalig IT-consultant, gespecialiseerd in ethische AI en AI-bias. Ik help kleine en middelgrote organisaties om AI verantwoord in te voeren: van beleid en training tot systemen die ik zelf bouw. Ik bouw systemen die mij niet nodig zouden moeten hebben, en ik denk vooraf na over de vragen die anderen pas stellen als het misgaat.'],
      ['AI staat niet stil, en de regels ook niet: de AI Act rolt tot in 2027 uit en elke nieuwe tool in je organisatie vraagt om een nieuwe afweging. Daarom blijf ik ook na een project beschikbaar als vast aanspreekpunt.'],
      [
        'Ik geloof dat technologie en menselijkheid samen kunnen gaan, en dat vrouwelijke perspectieven onmisbaar zijn in hoe we AI bouwen en gebruiken. Vandaar ook de Indonesische aksara en batikpatronen die door deze site bewegen: een eerbetoon aan de Javaanse roots die ik via mijn moeder heb meegekregen. Benieuwd hoe ik zelf met AI werk? Ik leg het volledig open in ',
        { href: '/zo-werk-ik-met-ai', tekst: 'zo werk ik met AI', uitgelicht: true },
        '.',
      ],
      /* Zodra de definitieve scriptie-PDF er is: link vervangen door /scriptie.pdf */
      [
        'Mijn afstudeeronderzoek ging over AI-bias in hate speech-detectie: hoe algoritmes die online haat moeten herkennen zelf bevooroordeeld kunnen zijn. Dat onderzoek bepaalt tot vandaag hoe ik naar elk AI-systeem kijk; ',
        { href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter', tekst: 'bekijk het onderzoek op GitHub', extern: true },
        '. Die wetenschappelijke basis is gebleven: voor AI-ethiek in organisaties werk ik met het volwassenheidsmodel van de Erasmus Universiteit, en mijn kijk op humane technologie is gevormd door het gedachtegoed van het Center for Humane Technology.',
      ],
    ],
    meta: [
      { dt: 'Achtergrond', dd: 'MSc Information Studies · bank, pensioenfonds, IT-startup' },
      { dt: 'Onderzoek', dd: 'AI-bias in hate speech-detectie' },
      { dt: 'Kompas', dd: 'Center for Humane Technology · AI ethics maturity model (Erasmus)' },
      { dt: 'Gereedschap', dd: 'Linux (Ubuntu) · TypeScript · React · Next.js · Tailwind · D3 · Jupyter Notebook · Vercel · Claude Code · Codex · Cursor · VS Code · Git' },
    ],
  },

  diensten: {
    titel: [
      { tekst: 'Dien', speed: 0.55 },
      { tekst: 'sten', speed: -0.5 },
    ],
    leesVerder: 'Lees verder →',
    leesMeerOver: 'Lees meer over {naam}',
  },

  werk: {
    titel: [{ tekst: 'Werk', speed: -0.55 }],
    sleepHint: 'drag',
    kaarten: [
      { sym: 6, meta: 'Interactieve tool · Next.js', titel: 'Quiz: gebruik jij AI, of gebruikt AI jou?', desc: 'Vijf minuten spelen, direct zicht op hoe bewust je met AI omgaat.', href: '/quiz', linktekst: 'Doe de quiz →', extern: false },
      { sym: 5, meta: 'Webtool · Next.js · Claude API', titel: 'AI CO₂-calculator', desc: 'In één minuut inzicht in de klimaatimpact van je AI-gebruik, met groenere alternatieven. Gebouwd op wetenschappelijke bronnen.', href: '/co2', linktekst: 'Bekijk de calculator →', extern: false },
      /* De demo is een losse statische app in public/nectar (geen Next-route), dus als <a> en niet als Link. */
      { sym: 0, meta: 'PWA · D3 · offline-first', titel: 'Nectar, privacyvriendelijke cyclustracker', desc: 'Alle data blijft op je eigen apparaat: geen account, geen server, wél inzicht.', href: '/nectar', linktekst: 'Bekijk de demo →', extern: true },
      { sym: 1, meta: 'LLM-integratie · GDPR · Claude', titel: 'GDPR-compliant AI-chatbot', desc: 'Leden krijgen dag en nacht antwoord zonder extra personeel, en de privacy is contractueel geregeld via een AI-addendum.', href: null, linktekst: null, extern: false },
      { sym: 3, meta: 'Promptontwerp · Whisper · Claude', titel: 'AI-persona voor content', desc: 'Een getrainde schrijfassistent op basis van merkdocumenten en voice notes: content die klinkt als de klant zelf.', href: null, linktekst: null, extern: false },
      { sym: 4, meta: 'WordPress · security · SEO', titel: 'Site gered na malware', desc: 'Ruim 100 verdachte bestanden opgeruimd, plugins gesaneerd, site beveiligd en SEO geoptimaliseerd.', href: null, linktekst: null, extern: false },
      { sym: 2, meta: 'Systeemontwerp · Notion', titel: 'Klantportaal-systeem', desc: 'Klanten kijken gestructureerd mee in lopende projecten; gegevens strikt gescheiden per portaal.', href: null, linktekst: null, extern: false },
      { sym: 7, meta: 'Systeemontwerp · Notion · rollups', titel: 'Cursusomgeving', desc: 'Lessen, cursisten en voortgang op één plek, zonder de kosten van een leerplatform.', href: null, linktekst: null, extern: false },
    ],
  },

  aanpak: {
    titel: [
      { tekst: 'Aan', speed: 0.5 },
      { tekst: 'pak', speed: -0.45 },
    ],
    alineas: [
      'We beginnen bij de vraag achter de vraag. Soms is het antwoord AI, soms een beter proces; je krijgt altijd een eerlijk antwoord.',
      'Daarna denk ik vooraf na over wat er mis kan gaan. Data, privacy, bias en verantwoordelijkheid staan bij mij aan het begin, niet als voetnoot achteraf.',
      'Dan bouw ik wat je nodig hebt: iets wat je organisatie direct kan gebruiken, met de ethische keuzes al verwerkt.',
      'En daarna sta je er niet alleen voor. Via de strippenkaart of een losse sessie houd je een aanspreekpunt dat je systemen kent en meteen weet waar je het over hebt.',
    ],
  },

  gedachten: {
    titel: [
      { tekst: 'Gedach', speed: -0.5 },
      { tekst: 'ten &', speed: 0.45 },
      { tekst: 'artikelen', speed: -0.4 },
    ],
    label: 'Gedachten en artikelen: naar het artikeloverzicht',
    kaarten: [
      { sym: 13, cat: 'Machine learning', titel: 'Machine learning of generatieve AI: het verschil bepaalt welk risico je loopt', status: null, href: '/artikelen/machine-learning-of-generatieve-ai', linktekst: 'Lees het artikel →' },
      { sym: 9, cat: 'Systems architecture', titel: 'Waarom de meeste AI-problemen eigenlijk architectuurproblemen zijn', status: null, href: '/artikelen/ai-problemen-zijn-architectuurproblemen', linktekst: 'Lees het artikel →' },
      { sym: 8, cat: 'NLP', titel: 'Het taalmodel dat je al jaren gebruikt zonder het te weten', status: null, href: '/artikelen/google-bert-en-chatgpt', linktekst: 'Lees het artikel →' },
      { sym: 15, cat: 'AI-ethiek', titel: 'Volwassen worden in AI-ethiek, en waarom je geen tien hoeft te scoren', status: null, href: '/artikelen/volwassen-worden-in-ai-ethiek', linktekst: 'Lees het artikel →' },
      { sym: 10, cat: 'Humane technologie', titel: 'Technologie die de mens ziet, en het manifest waar ik mijn werk langs leg', status: null, href: '/artikelen/technologie-die-de-mens-ziet', linktekst: 'Lees het artikel →' },
      { sym: 16, cat: 'EU AI Act', titel: 'Wat de AI Act echt van je vraagt als ondernemer (en wat niet)', status: null, href: '/artikelen/ai-act-voor-ondernemers', linktekst: 'Lees het artikel →' },
      { sym: 11, cat: 'Privacy', titel: 'De klantdata die je per ongeluk met ChatGPT deelt', status: null, href: '/artikelen/klantdata-en-chatgpt', linktekst: 'Lees het artikel →' },
      { sym: 4, cat: 'Onderzoek · NLP', titel: 'Algoritmes die online haat moeten herkennen, en zelf bevooroordeeld blijken', status: null, href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter', linktekst: 'Bekijk het onderzoek op GitHub →' },
      { sym: 7, cat: 'Machine learning · NLP', titel: 'Hoe ik 1300 tweets labelde en een BERT-model trainde dat haatspraak herkent', status: null, href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter/blob/master/BERT_sentence_classification.ipynb', linktekst: 'Bekijk het BERT-notebook →' },
      { sym: 5, cat: 'Leeslijst', titel: 'De boeken die mijn kijk op AI en menselijkheid vormden', status: null, href: '/manifest', linktekst: 'Bekijk de leeslijst →' },
    ],
  },

  citaten: {
    /* ECHT (Jasmijn de Jong, 10 juli 2026): ingekort uit haar bericht, woorden onaangepast op de ï na */
    na_diensten: {
      tekst: 'Wat geweldig dit! Ik krijg hier zoveel mooie en bruikbare informatie uit. Ik wist niet dat dit zo mooi zou kunnen werken.',
      naam: 'Jasmijn de Jong · Kindervoedingscoach',
    },
    /* ECHT (Luciënne Bregman, 12 juli 2026): letterlijk fragment uit haar review,
       alleen ingekort. Volledige tekst staat in de chat van 12 juli. */
    voor_contact: {
      tekst: 'Voordat ik met Kim begon, had ik eigenlijk geen idee hoe ik AI, en specifiek Claude, echt volgens mijn eigen woorden kon laten schrijven. Ik dacht dat dat gewoon niet mogelijk was. Kim liet me zien dat het wél kan.',
      naam: 'Luciënne Bregman · Somatisch coach',
    },
  },

  contact: {
    titel: [
      { tekst: 'Con', speed: 0.5 },
      { tekst: 'tact', speed: -0.5 },
    ],
    body: 'Benieuwd wat een mensgerichte toekomst met technologie voor jouw organisatie betekent? Ik denk graag mee.',
    cta: 'Plan een kennismaking',
  },

  footer: {
    zoWerkIk: 'Zo werk ik met AI',
    manifest: 'AI-manifest',
    privacy: 'Privacybeleid',
    home: 'Home',
    missie: 'Gebouwd mét AI, met een mens aan het stuur.',
  },
};

/* ------------------------------------------------------------------------------------
   ENGELS — CONCEPT ter redactie door Kimberley.

   Uitgangspunten die ik heb aangehouden:
   - Merkzinnen zijn vertaald, niet vervangen: "AI waar je achter kunt staan" blijft de
     kern ("AI you can stand behind"), "mensgerichte toekomst met technologie" wordt
     "human-centred future with technology".
   - Britse spelling (centred, organisation): de doelgroep is Europees, en het sluit aan
     op de EU AI Act-context.
   - Geen "niet X maar Y"-tegenstellingen, geen opsommingen met vet, geen nummeringen:
     dezelfde regels als in het Nederlands.

   LINKS: wijzen naar de Engelse pagina's. Uitzondering: de quiz, de CO₂-calculator en de
   Nectar-demo blijven Nederlands, dus die kaarten linken bewust naar de Nederlandse route.
   ------------------------------------------------------------------------------------ */

const EN: HomeInhoud = {
  nav: { contact: 'Get in touch' },

  hero: {
    /* Voluit, niet "SMEs": de CSS zet de eyebrow in kapitalen en dan wordt dat "SMES". */
    eyebrow: 'Kimberley van Ruiven · Responsible AI adviser for small and medium-sized businesses · Rotterdam',
    titel: [
      { tekst: 'A human-centred', speed: -0.5 },
      { tekst: 'future with', speed: 0.5 },
      { tekst: 'technology', speed: -0.45 },
    ],
  },

  statement: {
    eyebrow: 'I build',
    titel: [
      { tekst: 'AI', speed: -0.6 },
      { tekst: 'you can', speed: 0.5 },
      { tekst: 'stand behind', speed: -0.4 },
    ],
    kaart: 'The shape AI takes is a choice. Yours too. I researched AI bias at university, and I build AI systems. My focus is AI that makes sense for your organisation: I work with small and medium-sized businesses that want a human-centred future with technology.',
    orbit: 'My AI manifesto',
    orbitLabel: 'Read my AI manifesto',
  },

  over: {
    titel: [{ tekst: 'About', speed: -0.5 }],
    eyebrow: 'A technical mind, a human lens',
    fotoAlt: 'Portrait of Kimberley van Ruiven',
    alineas: [
      ['I’m Kimberley, a former IT consultant specialising in ethical AI and AI bias. I help small and medium-sized businesses adopt AI responsibly: from policy and training to systems I build myself. I build systems that shouldn’t need me, and I think through the questions others only ask once something has gone wrong.'],
      ['AI doesn’t stand still, and neither do the rules: the AI Act rolls out through 2027, and every new tool in your organisation means weighing things up again. That’s why I stay available as a point of contact once a project ends.'],
      [
        'I believe technology and humanity can go hand in hand, and that female perspectives are essential to how we build and use AI. Hence the Indonesian aksara and batik patterns moving through this site: a tribute to the Javanese roots my mother passed on to me. Curious how I work with AI myself? I set it out in full in ',
        { href: '/en/how-i-work-with-ai', tekst: 'how I work with AI', uitgelicht: true },
        '.',
      ],
      [
        'My master’s research was on AI bias in hate speech detection: how algorithms meant to recognise online hate can turn out to be biased themselves. That research still shapes how I look at every AI system; ',
        { href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter', tekst: 'see the research on GitHub', extern: true },
        '. That academic grounding has stayed with me: for AI ethics inside organisations I work with the maturity model from Erasmus University, and my view of humane technology is shaped by the thinking of the Center for Humane Technology.',
      ],
    ],
    meta: [
      { dt: 'Background', dd: 'MSc Information Studies · banking, pension fund, IT startup' },
      { dt: 'Research', dd: 'AI bias in hate speech detection' },
      { dt: 'Grounded in', dd: 'Center for Humane Technology · AI ethics maturity model (Erasmus)' },
      { dt: 'Tools', dd: 'Linux (Ubuntu) · TypeScript · React · Next.js · Tailwind · D3 · Jupyter Notebook · Vercel · Claude Code · Codex · Cursor · VS Code · Git' },
    ],
  },

  diensten: {
    /* Mid-woord afgebroken, net als "Dien / sten" in het Nederlands */
    titel: [
      { tekst: 'Ser', speed: 0.55 },
      { tekst: 'vices', speed: -0.5 },
    ],
    leesVerder: 'Read more →',
    leesMeerOver: 'Read more about {naam}',
  },

  werk: {
    titel: [{ tekst: 'Work', speed: -0.55 }],
    sleepHint: 'drag',
    kaarten: [
      { sym: 6, meta: 'Interactive tool · Next.js', titel: 'Quiz: are you using AI, or is AI using you?', desc: 'Five minutes of play, and a clear view of how much thought you actually give your AI use.', href: '/quiz', linktekst: 'Take the quiz →', extern: false },
      { sym: 5, meta: 'Web tool · Next.js · Claude API', titel: 'AI CO₂ calculator', desc: 'The climate impact of your AI use in one minute, with greener alternatives. Based on published research.', href: '/co2', linktekst: 'Open the calculator →', extern: false },
      { sym: 0, meta: 'PWA · D3 · offline-first', titel: 'Nectar, a privacy-friendly cycle tracker', desc: 'All your data stays on your own device: no account, no server, and still real insight.', href: '/nectar', linktekst: 'See the demo →', extern: true },
      { sym: 1, meta: 'LLM integration · GDPR · Claude', titel: 'GDPR-compliant AI chatbot', desc: 'Members get answers around the clock without extra staff, and privacy is covered in the contract through an AI addendum.', href: null, linktekst: null, extern: false },
      { sym: 3, meta: 'Prompt design · Whisper · Claude', titel: 'AI persona for content', desc: 'A writing assistant trained on brand documents and voice notes: content that sounds like the client’s own voice.', href: null, linktekst: null, extern: false },
      { sym: 4, meta: 'WordPress · security · SEO', titel: 'Site rescued after malware', desc: 'Over 100 suspicious files cleared out, plugins cleaned up, the site secured and its SEO improved.', href: null, linktekst: null, extern: false },
      { sym: 2, meta: 'Systems design · Notion', titel: 'Client portal system', desc: 'Clients can follow live projects at a glance, with data kept strictly separate per portal.', href: null, linktekst: null, extern: false },
      { sym: 7, meta: 'Systems design · Notion · rollups', titel: 'Course platform', desc: 'Lessons, students and progress in one place, without the cost of a learning platform.', href: null, linktekst: null, extern: false },
    ],
  },

  aanpak: {
    /* "App / roach": zelfde mid-woord-breuk als "Aan / pak" */
    titel: [
      { tekst: 'App', speed: 0.5 },
      { tekst: 'roach', speed: -0.45 },
    ],
    alineas: [
      'We start with the question behind the question. Sometimes the answer is AI, sometimes it’s a better process; either way you get an honest answer.',
      'Then I think ahead about what could go wrong. Data, privacy, bias and accountability come first with me, not as a footnote at the end.',
      'Then I build what you need: something your organisation can use straight away, with the ethical choices already worked in.',
      'And after that you’re not on your own. With a block of hours or a single session, you keep someone who knows your systems and doesn’t need the backstory every time.',
    ],
  },

  gedachten: {
    titel: [
      { tekst: 'Thoughts', speed: -0.5 },
      { tekst: '& arti', speed: 0.45 },
      { tekst: 'cles', speed: -0.4 },
    ],
    label: 'Thoughts and articles: to the article overview',
    kaarten: [
      { sym: 13, cat: 'Machine learning', titel: 'Machine learning or generative AI: the difference determines the risk you’re taking', status: null, href: '/en/articles/machine-learning-or-generative-ai', linktekst: 'Read the article →' },
      { sym: 9, cat: 'Systems architecture', titel: 'Why most AI problems are really architecture problems', status: null, href: '/en/articles/ai-problems-are-architecture-problems', linktekst: 'Read the article →' },
      { sym: 8, cat: 'NLP', titel: 'The language model you’ve been using for years without knowing it', status: null, href: '/en/articles/google-bert-and-chatgpt', linktekst: 'Read the article →' },
      { sym: 15, cat: 'AI ethics', titel: 'Growing up in AI ethics, and why you don’t need a perfect score', status: null, href: '/en/articles/growing-up-in-ai-ethics', linktekst: 'Read the article →' },
      { sym: 10, cat: 'Humane technology', titel: 'Technology that sees people, and the manifesto I hold my work to', status: null, href: '/en/articles/technology-that-sees-people', linktekst: 'Read the article →' },
      { sym: 16, cat: 'EU AI Act', titel: 'What the AI Act really asks of you as a business owner (and what it doesn’t)', status: null, href: '/en/articles/the-ai-act-for-smes', linktekst: 'Read the article →' },
      { sym: 11, cat: 'Privacy', titel: 'The client data you share with ChatGPT by accident', status: null, href: '/en/articles/client-data-and-chatgpt', linktekst: 'Read the article →' },
      { sym: 4, cat: 'Research · NLP', titel: 'Algorithms built to spot online hate, that turn out to be biased themselves', status: null, href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter', linktekst: 'See the research on GitHub →' },
      { sym: 7, cat: 'Machine learning · NLP', titel: 'How I labelled 1300 tweets and trained a BERT model that recognises hate speech', status: null, href: 'https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter/blob/master/BERT_sentence_classification.ipynb', linktekst: 'See the BERT notebook →' },
      { sym: 5, cat: 'Reading list', titel: 'The books that shaped how I see AI and humanity', status: null, href: '/en/manifesto', linktekst: 'See the reading list →' },
    ],
  },

  citaten: {
    /* De uitspraak van Jasmijn is in het Nederlands gedaan. Een echte klantuitspraak
       vertaal je niet stilzwijgend, dus staat erbij dat dit een vertaling is. */
    na_diensten: {
      tekst: 'This is wonderful! I’m getting so much genuinely useful information out of it. I had no idea it could work this beautifully.',
      naam: 'Jasmijn de Jong · Children’s nutrition coach',
      vertaald: 'Translated from Dutch',
    },
    /* Ook Luciënnes uitspraak is in het Nederlands gedaan, dus ook hier het vertaal-label. */
    voor_contact: {
      tekst: 'Before I started working with Kim, I had no idea how to get AI, and Claude in particular, to write in my own words. I thought it simply wasn’t possible. Kim showed me that it is.',
      naam: 'Luciënne Bregman · Somatic coach',
      vertaald: 'Translated from Dutch',
    },
  },

  contact: {
    titel: [
      { tekst: 'Con', speed: 0.5 },
      { tekst: 'tact', speed: -0.5 },
    ],
    body: 'Wondering what a human-centred future with technology would mean for your organisation? I’d be glad to think it through with you.',
    cta: 'Book an intro call',
  },

  footer: {
    zoWerkIk: 'How I work with AI',
    manifest: 'AI manifesto',
    privacy: 'Privacy policy',
    home: 'Home',
    missie: 'Built with AI, with a human at the wheel.',
  },
};

export const HOME_INHOUD: Record<Locale, HomeInhoud> = { nl: NL, en: EN };
