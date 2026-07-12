'use client';

import { useEffect, useState } from 'react';

const CAL_LINK = "https://calendar.app.google/douZqiDQ7p39Xf6u7";

const BEDRIJF_SERVICES = [
  {
    name: 'AI-chatbot op maat',
    tagline: 'Jouw klanten 24/7 geholpen, zonder extra personeel.',
    desc: 'Ik bouw een AI-chatbot die past bij jouw platform, GDPR-compliant is ingericht en direct waarde levert voor klanten of medewerkers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <circle cx="8.5" cy="11.5" r="0.5" fill="currentColor" />
        <circle cx="12.5" cy="11.5" r="0.5" fill="currentColor" />
        <circle cx="16.5" cy="11.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'AI-workflow automatisering',
    tagline: 'Repetitief werk uit handen, focus op wat telt.',
    desc: 'Ik breng je workflow in kaart en automatiseer de processen die tijd vreten, zodat jouw team zich kan richten op het werk dat er echt toe doet. Zoek je vooral overzicht? Dan bouw ik een werkomgeving in Notion, zoals een klantportaal of cursus-hub.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="6" r="2.2" />
        <circle cx="19" cy="6" r="2.2" />
        <circle cx="12" cy="18" r="2.2" />
        <path d="M7.2 6h9.6M6 8.1l4.8 8M18 8.1l-4.8 8" />
      </svg>
    ),
  },
  {
    name: 'Webapplicatie of tool bouwen',
    tagline: 'Van idee tot werkend product, op maat gebouwd.',
    desc: 'Een AI-tool die exact doet wat jij nodig hebt: op maat ontworpen en gebouwd, met de ethische keuzes al gemaakt.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="4" width="19" height="16" rx="1.5" />
        <path d="M2.5 8.5h19M9.5 12.5l-2.5 2.5 2.5 2.5M14.5 12.5l2.5 2.5-2.5 2.5" />
      </svg>
    ),
  },
  {
    name: 'EU AI Act implementatieondersteuning',
    tagline: 'Klaar voor de regelgeving, zonder juridisch jargon.',
    desc: 'Ik vertaal de EU AI Act naar concrete stappen voor jouw organisatie, zodat je klaar bent voordat je er last van krijgt.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7.5 3v5.5c0 4.5-3 8-7.5 9.5-4.5-1.5-7.5-5-7.5-9.5V6L12 3z" />
        <path d="M8.8 12.2l2.2 2.2 4.2-4.6" />
      </svg>
    ),
  },
  {
    name: 'Workshop AI-geletterdheid',
    tagline: 'Verplicht onder de AI Act, waardevol voor je hele team.',
    desc: 'Sinds februari 2025 verplicht de EU AI Act organisaties om medewerkers AI-geletterd te maken (artikel 4). In één dagdeel leert jouw team wat AI wel en niet kan, welke data je nooit deelt en hoe je AI verantwoord inzet in het dagelijkse werk. Praktisch, zonder jargon, toegespitst op jullie situatie.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4L2.5 8.5 12 13l9.5-4.5L12 4z" />
        <path d="M6 10.5V16c0 1.2 2.7 2.8 6 2.8s6-1.6 6-2.8v-5.5" />
        <path d="M21.5 8.5V14" />
      </svg>
    ),
  },
];

export default function Home() {
  const [openService, setOpenService] = useState<number | null>(null);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); revealObs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    const lineObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('line-drawn'); lineObs.unobserve(e.target); } }),
      { threshold: 0.5 }
    );
    document.querySelectorAll('.section-header').forEach((el) => lineObs.observe(el));

    const progressBar = document.getElementById('progress-bar');
    const parallaxBgs = document.querySelectorAll<HTMLElement>('.parallax-bg');
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBar) progressBar.style.width = (window.scrollY / total * 100).toFixed(1) + '%';
      if (window.innerWidth <= 768) {
        parallaxBgs.forEach((bg) => {
          const parent = bg.parentElement!;
          const rect = parent.getBoundingClientRect();
          bg.style.transform = `translateY(${(rect.top + rect.height / 2 - window.innerHeight / 2) * 0.3}px)`;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    function animateCounter(el: Element) {
      const original = el.textContent?.trim() ?? '';
      const m = original.match(/^([\d]+(?:[,.]\d+)?)(.*)$/);
      if (!m) return;
      const raw = parseFloat(m[1].replace(',', '.'));
      const suffix = m[2];
      const hasDecimal = m[1].includes(',');
      const t0 = performance.now(), dur = 1400;
      function step(now: number) {
        const p = Math.min((now - t0) / dur, 1);
        const val = raw * (1 - Math.pow(1 - p, 3));
        el.textContent = (hasDecimal ? val.toFixed(1).replace('.', ',') : Math.round(val)) + suffix;
        if (p < 1) requestAnimationFrame(step); else el.textContent = original;
      }
      requestAnimationFrame(step);
    }

    const cardObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const big = e.target.querySelector('.stat-big');
          if (big) animateCounter(big);
          e.target.querySelectorAll<HTMLElement>('.mini-bar-fill[data-w]').forEach((bar) => {
            bar.style.width = bar.getAttribute('data-w') + '%';
          });
          cardObs.unobserve(e.target);
        }
      }),
      { threshold: 0.3 }
    );
    document.querySelectorAll('[data-animate-bars]').forEach((el) => cardObs.observe(el));

    document.querySelectorAll<HTMLElement>('.stat-card').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.querySelectorAll<HTMLElement>('.mini-bar-fill[data-w]').forEach((bar) => {
          bar.style.transition = 'none'; bar.style.width = '0%';
          requestAnimationFrame(() => requestAnimationFrame(() => {
            bar.style.transition = 'width 0.8s cubic-bezier(0.25,1,0.5,1)';
            bar.style.width = bar.getAttribute('data-w') + '%';
          }));
        });
      });
    });

    return () => { revealObs.disconnect(); lineObs.disconnect(); cardObs.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <>
      <div id="progress-bar" />

      <nav>
        <a href="#" className="nav-logo">Kimberley van Ruiven</a>
        <div className="nav-links">
          <a href="#diensten">Diensten</a>
          <a href="#portfolio">Werk</a>
          <a href="#aanpak">Aanpak</a>
          <a href="#over">Over</a>
          <a href="/artikelen">Artikelen</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="parallax-bg parallax-bg--hero" aria-hidden="true" />
        <span className="hero-soul" aria-hidden="true">Ethische AI Advisory</span>
        <div className="hero-identity">
          <p className="hero-name">Kimberley van Ruiven</p>
          <p className="hero-tagline">Ethische AI-consultant · Soul Tech Architect</p>
        </div>
        <h1 className="hero-title">
          Ik bouw AI waar je <em>achter kunt staan.</em> Voor bedrijven die kiezen voor een mens-gerichte toekomst met technologie.
        </h1>
        <div className="hero-meta">
          <p className="hero-desc">
            Of je nu een middelgroot bedrijf bent dat AI verantwoord wil implementeren, of een ondernemer die een slimme tool nodig heeft: ik bouw wat jij nodig hebt. En ik denk vooraf na over de vragen die anderen pas stellen als het misgaat.
          </p>
          <div className="hero-cta-group">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="hero-cta">
              Bespreek je project
            </a>
            <a href="#portfolio" className="hero-cta hero-cta--outline">
              Bekijk mijn werk
            </a>
          </div>
        </div>
      </section>

      {/* Werkervaring */}
      <section className="werkervaring reveal">
        <h2 className="werk-title">Gebouwd op echte sector-ervaring</h2>
        <p className="werk-body">
          Ik heb als IT-consultant en software tester gewerkt bij een bank, een pensioenfonds en een IT-startup. Ik weet hoe grote organisaties van binnenuit werken, waar AI-projecten stranden, en wat er nodig is om ze wél te laten landen. Mijn MSc-thesis ging over AI-bias en hate speech detectie. Die combinatie van bouwen en begrijpen is wat ik meeneem naar elk project.
        </p>
        <div className="werk-labels">
          <span className="werk-label">Bank &amp; financiële sector</span>
          <span className="werk-label">Pensioenfonds</span>
          <span className="werk-label">IT-startup</span>
          <span className="werk-label">MSc AI-bias &amp; ethiek</span>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="diensten">
        <div className="section-header">
          <h2 className="section-title">Wat ik aanbied</h2>
        </div>

        <div className="service-group reveal">
          <h3 className="service-group-title">Voor bedrijven</h3>
          <div className="service-group-grid">
            {BEDRIJF_SERVICES.map((service, i) => (
              <div key={service.name} className={`service-tile${openService === i ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="service-tile-head"
                  aria-expanded={openService === i}
                  onClick={() => setOpenService(openService === i ? null : i)}
                >
                  <span className="service-tile-icon" aria-hidden="true">{service.icon}</span>
                  <span className="service-tile-text">
                    <span className="service-tile-name">{service.name}</span>
                    <span className="service-tile-tagline">{service.tagline}</span>
                  </span>
                  <span className="service-tile-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div className="service-tile-body">
                  <div className="service-tile-body-inner">
                    <div className="service-tile-body-pad">
                      <p className="service-desc">{service.desc}</p>
                      <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="service-link">Bespreek je project →</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="service-group reveal">
          <h3 className="service-group-title">Voor ondernemers</h3>
          <div className="service-group-grid service-group-grid--three">
            <div className="service-card">
              <span className="service-badge service-badge--book">boek direct</span>
              <h4 className="service-name">Losse sessie</h4>
              <p className="service-desc">Vastgelopen met een AI-vraagstuk? In één uur kom je verder. Je boekt wanneer het jou uitkomt en gaat weg met een concrete volgende stap.</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="service-link">Boek een sessie →</a>
            </div>
            <div className="service-card">
              <span className="service-badge">op aanvraag</span>
              <h4 className="service-name">Strippenkaart Bewuste AI</h4>
              <p className="service-desc">10 uur verspreid over 6 maanden. Jij hebt altijd iemand om mee te sparren over AI en je weet zeker dat je het verantwoord doet, ook als de technologie alweer veranderd is.</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="service-link">Boek een sessie →</a>
            </div>
            <div className="service-card">
              <span className="service-badge">op aanvraag</span>
              <h4 className="service-name">AI-implementatie op maat</h4>
              <p className="service-desc">Van vraag tot werkende AI-oplossing: bewust, efficiënt en met de ethische afwegingen al gemaakt, zodat jij er gewoon gebruik van kunt maken.</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="service-link">Boek een sessie →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio reveal" id="portfolio">
        <div className="section-header">
          <h2 className="section-title">Een greep uit wat ik heb gebouwd</h2>
        </div>
        <div className="portfolio-featured">
          <a href="/co2" className="portfolio-featured-shot" aria-label="Bekijk de AI CO₂-calculator">
            <img src="/portfolio-co2.jpg" alt="Screenshot van de AI CO₂-calculator: geschatte uitstoot per dag met vergelijkingen" loading="lazy" />
          </a>
          <div className="portfolio-card portfolio-card--featured">
            <div className="portfolio-card-section">
              <span className="portfolio-label">Probleem</span>
              <p>Ondernemers hadden geen idee hoeveel CO₂ hun AI-gebruik veroorzaakte.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Oplossing</span>
              <p>Een interactieve calculator die uitstoot berekent per tool en groenere alternatieven voorstelt.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Gebouwd met</span>
              <p>Next.js, Claude API, onderzoeksdata op basis van Luccioni et al. (2023) en Mistral Environmental Report (2025).</p>
            </div>
            <div className="portfolio-card-section portfolio-result">
              <span className="portfolio-label portfolio-label--result">Resultaat</span>
              <p>Voor iedereen gratis te gebruiken: in één minuut inzicht in de klimaatimpact van je AI-gebruik, inclusief groener alternatief.</p>
            </div>
            <a href="/co2" className="service-link">Bekijk de calculator →</a>
          </div>
        </div>
        <div className="portfolio-grid portfolio-grid--two">
          <div className="portfolio-card">
            <div className="portfolio-card-section">
              <span className="portfolio-label">Probleem</span>
              <p>Klant wilde leden 24/7 kunnen helpen zonder extra personeel.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Oplossing</span>
              <p>Een AI-chatbot op het Huddle-platform, gebouwd met Claude Sonnet, embedded via iframe, GDPR-compliant ingericht.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Gebouwd met</span>
              <p>Claude API, Huddle, verwerkersovereenkomst met AI-addendum.</p>
            </div>
            <div className="portfolio-card-section portfolio-result">
              <span className="portfolio-label portfolio-label--result">Resultaat</span>
              <p>Leden krijgen dag en nacht direct antwoord, zonder dat er iemand extra is aangenomen. En de privacy is contractueel geregeld.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-card-section">
              <span className="portfolio-label">Probleem</span>
              <p>Klant wilde haar eigen stem en expertise terugzien in AI-gegenereerde content.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Oplossing</span>
              <p>Een volledig getrainde Claude-persona op basis van merkdocumenten, voice notes en bestaande content, inclusief systeem-prompts en projectmaps.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Gebouwd met</span>
              <p>Claude Projects, Whisper, Fillout.</p>
            </div>
            <div className="portfolio-card-section portfolio-result">
              <span className="portfolio-label portfolio-label--result">Resultaat</span>
              <p>Content die klinkt als zijzelf, in een fractie van de tijd, zonder dat ze haar expertise hoeft in te leveren aan een generiek model.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <a href="https://kimberleyscode.github.io/ai-quiz/" target="_blank" rel="noopener noreferrer" className="portfolio-card-shot" aria-label="Doe de quiz: Gebruik jij AI, of gebruikt AI jou?">
              <img src="/portfolio-quiz.jpg" alt="Startscherm van de quiz Gebruik jij AI, of gebruikt AI jou?" loading="lazy" />
            </a>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Probleem</span>
              <p>De meeste ondernemers gebruiken AI onbewust: zonder te weten wat er met hun data gebeurt.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Oplossing</span>
              <p>&ldquo;Gebruik jij AI, of gebruikt AI jou?&rdquo;: een gratis quiz van vijf minuten die laat zien waar je staat als bewuste AI-gebruiker.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Gebouwd met</span>
              <p>Statische web-app (PWA), quiz-logica volledig in de browser, nieuwsbrief-koppeling via MailerLite.</p>
            </div>
            <div className="portfolio-card-section portfolio-result">
              <span className="portfolio-label portfolio-label--result">Resultaat</span>
              <p>Mijn merkverhaal in spelvorm: bezoekers zien in vijf minuten waar ze staan en waar ze kunnen bijsturen.</p>
            </div>
            <a href="https://kimberleyscode.github.io/ai-quiz/" target="_blank" rel="noopener noreferrer" className="service-link">Doe de quiz →</a>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-card-shot">
              <img src="/portfolio-nectar.jpg" alt="Dashboard van Nectar, een privacyvriendelijke menstruatie-tracker" loading="lazy" />
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Probleem</span>
              <p>Populaire cyclus-apps delen intieme gezondheidsdata met derden.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Oplossing</span>
              <p>Nectar: een menstruatie-tracker waarbij alle data op je eigen apparaat blijft. Geen account, geen server.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Gebouwd met</span>
              <p>Progressive Web App met D3, werkt volledig offline dankzij een service worker.</p>
            </div>
            <div className="portfolio-card-section portfolio-result">
              <span className="portfolio-label portfolio-label--result">Resultaat</span>
              <p>Inzicht, voorspellingen en analyse van je cyclus, zonder dat er één datapunt je apparaat verlaat.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-card-section">
              <span className="portfolio-label">Probleem</span>
              <p>Een dienstverlener had geen centrale plek waar klanten de voortgang van hun project konden volgen; alles ging via losse mails en documenten.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Oplossing</span>
              <p>Een klantportaal-systeem in Notion met taken, projecten en tijdlijn, opgezet als template die voor elke nieuwe klant in enkele minuten wordt gedupliceerd.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Gebouwd met</span>
              <p>Notion: gekoppelde databases, gefilterde weergaven per klant, template-pagina&rsquo;s.</p>
            </div>
            <div className="portfolio-card-section portfolio-result">
              <span className="portfolio-label portfolio-label--result">Resultaat</span>
              <p>Elke klant een eigen portaal met altijd actuele projectstatus: minder mailverkeer, meer overzicht en een professionelere klantervaring. Gegevens blijven per klantportaal strikt gescheiden.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-card-section">
              <span className="portfolio-label">Probleem</span>
              <p>Een cursusaanbieder wilde lessen, cursisten en voortgang op één plek beheren, zonder de maandelijkse kosten van een compleet leerplatform.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Oplossing</span>
              <p>Een cursus-hub in Notion met gekoppelde databases voor lessen, cursisten en voortgang, inclusief automatisch voortgangsoverzicht per cursist en verschillende toegangsniveaus.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Gebouwd met</span>
              <p>Notion: relaties, rollups, gedeelde pagina&rsquo;s per toegangsniveau.</p>
            </div>
            <div className="portfolio-card-section portfolio-result">
              <span className="portfolio-label portfolio-label--result">Resultaat</span>
              <p>Een complete cursusomgeving zonder LMS-abonnement: de aanbieder ziet per cursist in één oogopslag hoe ver die is, terwijl cursistgegevens binnen de eigen omgeving blijven.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-card-section">
              <span className="portfolio-label">Probleem</span>
              <p>De WordPress-site van een klant was besmet geraakt met malware: verdachte bestanden, verouderde plugins en een site die niet meer te vertrouwen was.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Oplossing</span>
              <p>Volledige opschoning en beveiliging: malware-scan, ruim 100 achtergebleven core-bestanden verwijderd, alle 18 plugins nagelopen en bijgewerkt, ongebruikte plugins gedeactiveerd, plus SEO-optimalisatie.</p>
            </div>
            <div className="portfolio-card-section">
              <span className="portfolio-label">Gebouwd met</span>
              <p>WordPress, Divi, Wordfence, SEO-tooling.</p>
            </div>
            <div className="portfolio-card-section portfolio-result">
              <span className="portfolio-label portfolio-label--result">Resultaat</span>
              <p>Een schone, veilige en up-to-date site, met een gezond fundament voor betere vindbaarheid in Google.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials: PLACEHOLDERS: vervang [ ... ] door echte reviews vóór livegang */}
      <section className="testimonials reveal" id="testimonials">
        <div className="section-header">
          <h2 className="section-title">Wat klanten zeggen</h2>
        </div>
        <div className="testimonial-grid">
          <figure className="testimonial-card">
            <blockquote className="testimonial-quote">
              &ldquo;[Placeholder: review 1. Hier komt de eerste echte klantreview te staan, in de woorden van de klant zelf.]&rdquo;
            </blockquote>
            <figcaption className="testimonial-who">
              <span className="testimonial-name">[Naam]</span>
              <span className="testimonial-role">[Rol · bedrijf]</span>
            </figcaption>
          </figure>
          <figure className="testimonial-card">
            <blockquote className="testimonial-quote">
              &ldquo;[Placeholder: review 2. Hier komt de tweede echte klantreview te staan.]&rdquo;
            </blockquote>
            <figcaption className="testimonial-who">
              <span className="testimonial-name">[Naam]</span>
              <span className="testimonial-role">[Rol · bedrijf]</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Foto-stripe */}
      <div className="photo-stripe reveal">
        <div className="parallax-bg parallax-bg--photo" aria-hidden="true" />
        <div className="photo-stripe-inner">
          <p className="photo-stripe-label">Soul Tech Architect</p>
        </div>
      </div>

      {/* Featured / Over */}
      <section className="featured reveal" id="over">
        <div className="featured-visual">
          <div className="featured-visual-inner">
            <div className="featured-foil"><span>K</span></div>
            <p className="featured-visual-title">Voor een mens-gerichte toekomst met technologie</p>
            <p className="featured-visual-sub">Kimberley van Ruiven · 2026</p>
          </div>
        </div>
        <p className="featured-caption-mobile">Voor een mens-gerichte toekomst met technologie</p>
        <div className="featured-content">
          <p className="featured-label">Over Kimberley</p>
          <h2 className="featured-title">Een technische kijk <em>door een menselijke bril.</em></h2>
          <div className="featured-body">
            <p>Ik ben Kimberley, voormalig IT consultant en gespecialiseerd in ethische AI en AI-bias vanuit mijn academische achtergrond MSc Information Studies. Ik werk met AI vanuit een zo ethisch, bewuste en verantwoordelijke manier en ik help je om je bedrijf aan de achterkant op orde te krijgen, zodat je productiever en met meer structuur kunt werken.</p>
            <p>Ik geloof dat technologie en menselijkheid samen kunnen gaan, en dat vrouwelijke perspectieven onmisbaar zijn in hoe we AI bouwen en gebruiken. Vanuit een achtergrond in informatiekunde, AI-bias en ethiek help ik ondernemers en kleine bedrijven begrijpen wat ze gebruiken, wat dat betekent, en hoe ze het verantwoord kunnen inrichten.</p>
          </div>
          <div className="thesis-block">
            <p className="thesis-label">Afstudeeronderzoek · MSc Information Studies</p>
            <h3 className="thesis-title">AI-bias in hate speech-detectie</h3>
            <p className="thesis-body">Hoe algoritmes die online haat moeten herkennen zelf bevooroordeeld kunnen zijn, en wat daaraan te doen is. Dat onderzoek bepaalt tot vandaag hoe ik naar elk AI-systeem kijk. Niet alleen &ldquo;werkt het?&rdquo;, maar &ldquo;voor wie werkt het, en voor wie niet?&rdquo;</p>
            {/* Zodra de definitieve scriptie-PDF er is: eerste link vervangen door /scriptie.pdf */}
            <p className="thesis-links"><a href="https://github.com/kimberleyscode/Master-Thesis-HateSpeech-Twitter" target="_blank" rel="noopener noreferrer">Bekijk het onderzoek op GitHub →</a><a href="/zo-werk-ik-met-ai">Zo breng ik dit in de praktijk →</a></p>
          </div>
          <div className="featured-stats">
            <div className="stat"><div className="stat-num">MSc</div><div className="stat-label">Information Studies</div></div>
            <div className="stat"><div className="stat-num">AI</div><div className="stat-label">Bias &amp; Ethiek</div></div>
            <div className="stat"><div className="stat-num">IT</div><div className="stat-label">Consultant achtergrond</div></div>
            <div className="stat"><div className="stat-num">∞</div><div className="stat-label">Eerlijke gesprekken</div></div>
          </div>
          <a href="#contact" className="hero-cta" style={{ display: 'inline-block' }}>Leer me kennen →</a>
        </div>
      </section>

      {/* Statistieken */}
      <section className="dashboard" id="data">
        <div className="section-header">
          <h2 className="section-title">Waarom AI in de praktijk misgaat</h2>
        </div>
        <div className="stat-cards stat-cards--row">
          <div className="stat-card reveal" data-animate-bars="">
            <p className="stat-eyebrow">Grootste barrière</p>
            <div className="stat-big">63%</div>
            <p className="stat-desc">van de Nederlandse bedrijven noemt gebrek aan AI-expertise als voornaamste rem op verdere adoptie.</p>
            <div className="mini-bars">
              <div className="mini-bar-row"><span className="mini-bar-label">Expertise</span><div className="mini-bar-track"><div className="mini-bar-fill" data-w="63" /></div><span className="mini-bar-pct">63%</span></div>
              <div className="mini-bar-row"><span className="mini-bar-label">Kosten</span><div className="mini-bar-track"><div className="mini-bar-fill mini-bar-fill--light" data-w="41" /></div><span className="mini-bar-pct">41%</span></div>
            </div>
            <p className="stat-source">Bron: <a href="https://www.cbs.nl/en-gb/news/2025/09/increasing-use-of-ai-by-business" target="_blank" rel="noopener noreferrer">CBS, september 2025</a></p>
          </div>
          <div className="stat-card reveal" data-animate-bars="" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <p className="stat-eyebrow">Mislukkingsgraad</p>
            <div className="stat-big">80%</div>
            <p className="stat-desc">van de AI-projecten strandt voordat ze blijvende waarde leveren: twee keer zo vaak als IT-projecten zonder AI.</p>
            <div className="mini-bars">
              <div className="mini-bar-row"><span className="mini-bar-label">AI-projecten</span><div className="mini-bar-track"><div className="mini-bar-fill mini-bar-fill--danger" data-w="80" /></div><span className="mini-bar-pct">80%</span></div>
              <div className="mini-bar-row"><span className="mini-bar-label">Overige IT</span><div className="mini-bar-track"><div className="mini-bar-fill mini-bar-fill--light" data-w="40" /></div><span className="mini-bar-pct">40%</span></div>
            </div>
            <p className="stat-source">Bron: <a href="https://www.rand.org/pubs/research_reports/RRA2680-1.html" target="_blank" rel="noopener noreferrer">RAND, augustus 2024</a></p>
          </div>
        </div>
        <p className="personal-statement-text">
          &ldquo;Tijdens mijn werk bij een pensioenfonds zag ik AI-projecten stranden terwijl de technologie gewoon werkte. Niemand had nagedacht over wat er in de data zat, wie er verantwoordelijk was, en wat je aan een medewerker uitlegt als een algoritme een beslissing neemt. Dat is het probleem dat ik oplos.&rdquo;
        </p>
      </section>

      {/* Parallax divider */}
      <div className="parallax-divider">
        <div className="parallax-bg parallax-bg--divider" aria-hidden="true" />
      </div>

      {/* Process */}
      <section className="process" id="aanpak">
        <div className="section-header">
          <h2 className="section-title">Mijn aanpak</h2>
          <span className="section-count">04 stappen</span>
        </div>
        <div className="process-list">
          <div className="process-item reveal">
            <div className="process-step">01</div>
            <div className="process-name">Wat gebruik je en wat gaat er mis?</div>
            <div className="process-desc">We beginnen met een eerlijk gesprek over welke AI-tools je gebruikt, waarvoor, en waar je tegenaan loopt. Ik wil begrijpen hoe jouw organisatie werkt voordat ik ook maar iets voorstel.</div>
          </div>
          <div className="process-item reveal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <div className="process-step">02</div>
            <div className="process-name">Ik kijk waar het wringt</div>
            <div className="process-desc">Ik breng in kaart welke risico&apos;s er zitten in hoe je AI nu inzet: bias in je data, privacyvraagstukken, onduidelijkheid over wie er verantwoordelijk is als het misgaat. Dat doe ik op basis van mijn achtergrond in de financiële sector en mijn onderzoek naar AI-bias.</div>
          </div>
          <div className="process-item reveal" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <div className="process-step">03</div>
            <div className="process-name">Ik bouw wat je nodig hebt</div>
            <div className="process-desc">Ik maak het concreet: een chatbot, een tool, een workflow. Iets wat je organisatie direct kan gebruiken en waar de ethische keuzes al in zitten verwerkt.</div>
          </div>
          <div className="process-item reveal" style={{ '--delay': '0.3s' } as React.CSSProperties}>
            <div className="process-step">04</div>
            <div className="process-name">Je staat er niet alleen voor</div>
            <div className="process-desc">AI verandert snel. Via de strippenkaart of een losse sessie houd je altijd een aanspreekpunt. Iemand die je systemen kent en meteen weet waar je het over hebt.</div>
          </div>
        </div>
      </section>

      {/* Artikelen */}
      <section className="services reveal" id="artikelen">
        <div className="section-header">
          <h2 className="section-title">Artikelen over ethische AI</h2>
        </div>
        <div className="service-group-grid service-group-grid--three">
          <div className="service-card">
            <span className="service-badge">EU AI Act · juli 2026</span>
            <h4 className="service-name">Wat de EU AI Act van jou als ondernemer vraagt (en wat niet)</h4>
            <p className="service-desc">De AI Act klinkt als iets voor juristen van grote bedrijven. Toch raakt hij ook jou, al valt de praktijk mee als je weet waar je op moet letten.</p>
            <a href="/artikelen/ai-act-voor-ondernemers" className="service-link">Lees het artikel →</a>
          </div>
          <div className="service-card">
            <span className="service-badge">Privacy · juli 2026</span>
            <h4 className="service-name">Welke klantdata deel je wel en niet met ChatGPT?</h4>
            <p className="service-desc">De meeste datalekken via AI ontstaan niet door hackers, maar door goedbedoelde prompts. Drie vuistregels die je vandaag kunt toepassen.</p>
            <a href="/artikelen/klantdata-en-chatgpt" className="service-link">Lees het artikel →</a>
          </div>
          <div className="service-card">
            <span className="service-badge">Transparantie</span>
            <h4 className="service-name">Zo werk ik zelf met AI</h4>
            <p className="service-desc">Ik adviseer over verantwoorde AI, dus geef ik zelf het goede voorbeeld: welke tools ik gebruik, wat er met jouw gegevens gebeurt en wanneer ik AI bewust laat liggen.</p>
            <a href="/zo-werk-ik-met-ai" className="service-link">Bekijk mijn werkwijze →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="parallax-bg parallax-bg--cta" aria-hidden="true" />
        <p className="cta-eyebrow reveal">Klaar om te beginnen?</p>
        <h2 className="cta-title reveal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
          Vertel me waar<br />je vastloopt.
        </h2>
        <p className="cta-body reveal" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          Een open gesprek over AI, jouw business
          en hoe je het integer kunt inzetten.
        </p>
        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn reveal" style={{ '--delay': '0.3s' } as React.CSSProperties}>
          Laten we kletsen →
        </a>
        <p className="cta-alt reveal" style={{ '--delay': '0.4s' } as React.CSSProperties}>
          Nog niet klaar voor een gesprek? Mail me gerust op{' '}
          <a href="mailto:info@kimberleyvanruiven.nl?subject=Vraag%20via%20de%20website">info@kimberleyvanruiven.nl</a>.
          Je krijgt altijd persoonlijk antwoord.
        </p>
      </section>

      <footer>
        <div className="footer-top">
          <span className="footer-mission">Voor een mens-gerichte toekomst met technologie</span>
          <span className="footer-copy">© 2026 Kimberley van Ruiven</span>
        </div>
        <div className="footer-bottom">
          <span className="footer-ai">Deze site is gebouwd mét AI, precies zoals ik het klanten adviseer: bewust, en met de mens aan het stuur.</span>
          <span className="footer-sep">·</span>
          <a href="/zo-werk-ik-met-ai">Zo werk ik met AI</a>
          <span className="footer-sep">·</span>
          <a href="/artikelen">Artikelen</a>
          <span className="footer-sep">·</span>
          <a href="/privacy">Privacybeleid</a>
          <span className="footer-sep">·</span>
          <span>KvK: 98007033</span>
        </div>
      </footer>
    </>
  );
}
