/* Eén bron voor de diensten: de kaarten op de homepage en de detailpagina's lezen allebei hieruit.
   Volgorde = klantreis: eerst weten waar je staat, dan regelen, dan bouwen, dan bijblijven.
   watJeKrijgt/hoeHetWerkt/ethisch zijn CONCEPTTEKSTEN (grove uitlijning aanbod-analyse 9 juli);
   ontbreken ze, dan toont de detailpagina de [Tekst volgt]-placeholder.

   `en` bevat voorlopig alleen wat op de KAART staat (naam, regels, desc). De Engelse
   detailteksten volgen zodra Kimberley de Engelse toon heeft goedgekeurd. */
type Dienst = {
  slug: string;
  naam: string;
  regels: string[];
  desc: string;
  watJeKrijgt?: string;
  hoeHetWerkt?: string;
  ethisch?: string;
  en: {
    naam: string;
    regels: string[];
    desc: string;
    watJeKrijgt?: string;
    hoeHetWerkt?: string;
    ethisch?: string;
  };
};

export const DIENSTEN: Dienst[] = [
  {
    slug: 'ai-act-quickscan',
    naam: 'AI Act-quickscan',
    regels: ['AI Act-', 'quickscan'],
    desc: 'In kaart welke AI er in jouw organisatie draait, wat er al goed zit en wat je vóór 2 augustus nog regelt. Zodat je precies weet waar je staat.',
    watJeKrijgt:
      'Een helder overzicht van alle AI die in jouw organisatie draait, wat daarvan al goed geregeld is en wat aandacht vraagt vóór 2 augustus 2026, de volgende stap van de AI Act. Ik kijk daarbij verder dan de wettelijke checklist: met het AI-ethiek volwassenheidsmodel van de Erasmus Universiteit breng ik ook in beeld hoe volwassen jullie omgang met AI is, van cultuur en beleid tot training en tooling. Zo weet je waar je staat én wat de logische volgende stap is.',
    hoeHetWerkt:
      'We starten met een intakegesprek en een rondgang langs je team, want er draait vaak meer AI dan je denkt. Daarna toets ik alles aan de AI Act en aan de zes dimensies van het volwassenheidsmodel. De uitkomsten krijg je in gewone taal en licht ik toe in één gesprek, met per punt wat je zelf kunt oppakken en waar je eventueel hulp bij wilt. Wil je die vervolgstappen niet alleen zetten, dan begeleid ik ook de implementatie: de regelgeving vertaald naar concrete stappen, op het tempo van jouw organisatie.',
    ethisch:
      'De scan rapporteert wat ik aantref, ook als de uitkomst is dat je weinig hoeft te regelen. Gegevens over jouw organisatie blijven bij jou en verdwijnen niet in externe tools. De methode is wetenschappelijk onderbouwd, met bronvermelding, zodat je weet waarop het oordeel rust.',
    en: {
      naam: 'AI Act quickscan',
      regels: ['AI Act', 'quickscan'],
      desc: 'A clear picture of the AI running in your organisation, what is already in good shape, and what to settle before 2 August. So you know exactly where you stand.',
    },
  },
  {
    slug: 'ai-beleid-en-training',
    naam: 'AI-beleid en training',
    regels: ['AI-beleid', 'en training'],
    desc: 'In twee weken een werkend AI-beleid én een team dat ermee kan werken: duidelijke afspraken, goedgekeurde tools en de AI-geletterdheid die de AI Act vraagt.',
    watJeKrijgt:
      'Een AI-beleid dat op jullie waarden rust in plaats van op angst voor boetes: duidelijke afspraken over welke tools je team gebruikt, waarvoor, en met welke gegevens. Compact genoeg om echt gelezen te worden, concreet genoeg om er morgen mee te werken. Daarbij hoort een workshop AI-geletterdheid voor je team: verplicht onder de AI Act, en de snelste manier om het beleid te laten leven.',
    hoeHetWerkt:
      'We beginnen met een waardensessie: waar staat jouw organisatie voor, en wat betekent dat voor hoe jullie met AI willen werken? Pas daarna kijken we naar tools en regels, zodat het beleid ergens op rust. In twee weken vertalen we dat naar werkbare afspraken en een goedgekeurde toollijst. We sluiten af met de workshop, zodat het beleid niet in een la belandt maar iedereen weet hoe het werkt.',
    ethisch:
      'Het beleid regelt behalve wat mag ook hoe helder je erover bent, naar medewerkers én naar klanten. De plichten uit de AI Act, zoals AI-geletterdheid en transparantie, zitten er standaard in verwerkt.',
    en: {
      naam: 'AI policy and training',
      regels: ['AI policy', 'and training'],
      desc: 'In two weeks, a working AI policy and a team that can use it: clear agreements, approved tools, and the AI literacy the AI Act asks of you.',
    },
  },
  {
    slug: 'ai-oplossingen-op-maat',
    naam: 'AI-oplossingen op maat',
    regels: ['AI-oplossingen', 'op maat'],
    desc: 'Van chatbot tot werkstroom of webapplicatie: wat tijd vreet wordt geautomatiseerd, met de ethische keuzes al gemaakt.',
    watJeKrijgt:
      'Een oplossing die werk uit handen neemt: een chatbot die klanten of medewerkers dag en nacht antwoord geeft op basis van jouw eigen kennis, een werkstroom die zichzelf draait of een webapplicatie op maat. Direct waardevol, zonder dat er extra mensen voor nodig zijn.',
    hoeHetWerkt:
      'We bepalen samen wat de oplossing wel en niet mag doen en op welke bronnen en systemen die steunt. Ik bouw en test op jouw materiaal, we scherpen aan op basis van echt gebruik, en na livegang blijf ik beschikbaar om bij te sturen.',
    ethisch:
      'Wat ik bouw doet zich nooit voor als mens: gebruikers zien altijd dat ze met AI werken en kunnen altijd bij een mens terecht. Dat vraagt de AI Act, en het wekt bovendien precies het vertrouwen dat een nagemaakte mens ondermijnt. De privacy is contractueel geregeld, met duidelijke afspraken over wat er met de data gebeurt.',
    en: {
      naam: 'Tailored AI solutions',
      regels: ['Tailored AI', 'solutions'],
      desc: 'From chatbot to workflow or web application: whatever eats your time gets automated, with the ethical choices already made.',
    },
  },
  {
    slug: 'extern-ai-aanspreekpunt',
    naam: 'Extern AI-aanspreekpunt',
    regels: ['Extern AI-', 'aanspreekpunt'],
    desc: 'Voor elke AI-vraag die opduikt: nieuwe tools, nieuwe regels, nieuwe kansen. Op strippenkaart of abonnement.',
    watJeKrijgt:
      'Een vast aanspreekpunt voor alles waar AI in jouw organisatie aan raakt. Duikt er een nieuwe tool op, verandert de regelgeving of vraagt een klant hoe jullie met AI werken, dan leg je het gewoon aan mij voor. Ik volg de ontwikkelingen op de voet en vertaal wat relevant is naar jouw situatie, in gewone taal. Zo blijft jouw organisatie bij zonder dat je er iemand voor hoeft aan te nemen.',
    hoeHetWerkt:
      'Je kiest wat bij je past: een strippenkaart voor losse vragen of een abonnement met een vast aantal uren per maand. Kleine vragen handelen we af per mail, voor grotere plannen we kort overleg. Komt er iets voorbij dat meer vraagt, zoals een tool invoeren of je beleid bijwerken, dan pakken we dat op wanneer het jou uitkomt. Je zit nergens aan vast en kunt op elk moment stoppen of opschalen.',
    ethisch:
      'Mijn advies is onafhankelijk: ik verkoop geen tools en ontvang niets van aanbieders die ik aanraad. Is het eerlijke antwoord dat je iets niet nodig hebt, dan hoor je dat ook. Zo weet je zeker dat een aanbeveling er alleen is omdat die bij jouw organisatie past.',
    en: {
      naam: 'Outsourced AI lead',
      regels: ['Outsourced', 'AI lead'],
      desc: 'For every AI question that comes up: new tools, new rules, new opportunities. On a bundle of hours or a monthly retainer.',
    },
  },
];
