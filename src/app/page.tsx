'use client';

import { useEffect } from 'react';

const CAL_LINK = "https://calendar.app.google/douZqiDQ7p39Xf6u7";

export default function Home() {
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
          <a href="#aanpak">Aanpak</a>
          <a href="#over">Over</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="parallax-bg parallax-bg--hero" aria-hidden="true" />
        <span className="hero-soul" aria-hidden="true">Ethische AI Advisory</span>
        <div className="hero-identity">
          <p className="hero-name">Kimberley van Ruiven</p>
          <p className="hero-tagline">Soul Tech Architect</p>
        </div>
        <h1 className="hero-title">
          Ik bouw AI-systemen die werken <em>én kloppen.</em> Voor bedrijven die het serieus nemen.
        </h1>
        <div className="hero-meta">
          <p className="hero-desc">
            Of je nu een middelgroot bedrijf bent dat AI verantwoord wil implementeren, of een ondernemer die een slimme tool nodig heeft: ik bouw wat jij nodig hebt, met de ethische laag ingebakken. Voor een mens-gerichte toekomst met technologie.
          </p>
          <div className="hero-cta-group">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="hero-cta">
              Bespreek je project
            </a>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta--outline">
              Boek een kennismaking
            </a>
          </div>
        </div>
      </section>

      {/* Werkervaring */}
      <section className="werkervaring reveal">
        <h2 className="werk-title">Gebouwd op echte sector-ervaring</h2>
        <p className="werk-body">
          Ik heb als IT-consultant en functioneel ontwerper gewerkt bij een bank, een pensioenfonds en een IT-startup. Ik weet hoe grote organisaties van binnenuit werken, waar AI-projecten stranden, en wat er nodig is om ze wél te laten landen. Mijn MSc-thesis ging over AI-bias en hate speech detectie. Die combinatie van bouwen en begrijpen is wat ik meeneem naar elk project.
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
            <div className="service-card">
              <span className="service-badge">op aanvraag</span>
              <h4 className="service-name">AI-chatbot op maat</h4>
              <p className="service-desc">Jouw klanten of medewerkers geholpen, 24/7, zonder extra personeel. Ik bouw een AI-chatbot die past bij jouw platform, GDPR-compliant is ingericht en direct waarde levert.</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="service-link">Bespreek je project →</a>
            </div>
            <div className="service-card">
              <span className="service-badge">op aanvraag</span>
              <h4 className="service-name">AI-workflow automatisering</h4>
              <p className="service-desc">Repetitieve processen geautomatiseerd, zodat jouw team zich focust op wat echt telt. Ik breng je workflow in kaart en bouw wat er nodig is.</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="service-link">Bespreek je project →</a>
            </div>
            <div className="service-card">
              <span className="service-badge">op aanvraag</span>
              <h4 className="service-name">Webapplicatie of tool bouwen</h4>
              <p className="service-desc">Een AI-tool die exact doet wat jij nodig hebt, gebouwd op maat: van idee tot werkend product, met de ethische laag ingebakken van dag één.</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="service-link">Bespreek je project →</a>
            </div>
            <div className="service-card">
              <span className="service-badge">op aanvraag</span>
              <h4 className="service-name">EU AI Act implementatieondersteuning</h4>
              <p className="service-desc">Klaar voor de nieuwe regelgeving voordat je er last van krijgt. Ik vertaal de EU AI Act naar concrete stappen voor jouw organisatie, zonder juridisch jargon.</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="service-link">Bespreek je project →</a>
            </div>
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
          <h2 className="section-title">Wat ik heb gebouwd</h2>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-card">
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
            <a href="/co2" className="service-link">Bekijk de calculator →</a>
          </div>
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
          </div>
        </div>
      </section>

      {/* Foto-stripe */}
      <div className="photo-stripe reveal">
        <div className="parallax-bg parallax-bg--photo" aria-hidden="true" />
        <div className="photo-stripe-inner">
          <p className="photo-stripe-label">Soul Tech Architect</p>
          <p className="photo-stripe-text">&ldquo;Ik geloof dat je AI kunt begrijpen<br />zonder dat je technicus hoeft te zijn.&rdquo;</p>
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
          <h2 className="featured-title">Online ondernemer. <em>Altijd mens.</em></h2>
          <div className="featured-body">
            <p>Ik ben Kimberley, voormalig IT consultant en gespecialiseerd in ethische AI en AI-bias vanuit mijn academische achtergrond MSc Information Studies. Ik werk met AI vanuit een zo ethisch, bewuste en verantwoordelijke manier en ik help je om je bedrijf aan de achterkant op orde te krijgen, zodat je productiever en met meer structuur kunt werken.</p>
            <p>Ik geloof dat technologie en menselijkheid samen kunnen gaan, en dat vrouwelijke perspectieven onmisbaar zijn in hoe we AI bouwen en gebruiken. Vanuit een achtergrond in informatiekunde, AI-bias en ethiek help ik ondernemers en kleine bedrijven begrijpen wat ze gebruiken, wat dat betekent, en hoe ze het verantwoord kunnen inrichten.</p>
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
            <p className="stat-eyebrow">Klimaatimpact</p>
            <div className="stat-big">10×</div>
            <p className="stat-desc">meer energie per AI-query dan een Google-zoekopdracht: 2,9 Wh versus 0,3 Wh per vraag.</p>
            <div className="mini-bars">
              <div className="mini-bar-row"><span className="mini-bar-label">ChatGPT</span><div className="mini-bar-track"><div className="mini-bar-fill mini-bar-fill--danger" data-w="91" /></div><span className="mini-bar-pct">2,9 Wh</span></div>
              <div className="mini-bar-row"><span className="mini-bar-label">Google</span><div className="mini-bar-track"><div className="mini-bar-fill mini-bar-fill--green" data-w="9" /></div><span className="mini-bar-pct">0,3 Wh</span></div>
            </div>
            <p className="stat-source">Bron: Luccioni et al. (2023) en Mistral Environmental Report (2025)</p>
          </div>
        </div>
        <p className="personal-statement-text">
          &ldquo;Tijdens mijn werk bij een pensioenfonds zag ik hoe AI-projecten strandden. Niet omdat de technologie niet werkte, maar omdat niemand had nagedacht over wat er in de data zat, wie er verantwoordelijk was, en wat je aan een medewerker uitlegt als een algoritme een beslissing neemt. Dat is het probleem dat ik op los.&rdquo;
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
            <div className="process-desc">We beginnen met een eerlijk gesprek over welke AI-tools je gebruikt, waarvoor, en waar je tegenaan loopt. Geen aannames, geen standaardoplossing. Ik wil begrijpen hoe jouw organisatie werkt voordat ik ook maar iets voorstel.</div>
          </div>
          <div className="process-item reveal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <div className="process-step">02</div>
            <div className="process-name">Ik kijk waar het wringt</div>
            <div className="process-desc">Ik breng in kaart welke risico&apos;s er zitten in hoe je AI nu inzet: bias in je data, privacyvraagstukken, onduidelijkheid over wie er verantwoordelijk is als het misgaat. Dat doe ik op basis van mijn achtergrond in de financiële sector en mijn onderzoek naar AI-bias.</div>
          </div>
          <div className="process-item reveal" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <div className="process-step">03</div>
            <div className="process-name">Ik bouw wat je nodig hebt</div>
            <div className="process-desc">Geen rapport dat in een la verdwijnt. Ik maak het concreet: een chatbot, een tool, een workflow, een systeem. Iets wat je organisatie direct kunt gebruiken en waar de ethische keuzes al in zitten verwerkt.</div>
          </div>
          <div className="process-item reveal" style={{ '--delay': '0.3s' } as React.CSSProperties}>
            <div className="process-step">04</div>
            <div className="process-name">Je staat er niet alleen voor</div>
            <div className="process-desc">AI verandert snel. Via de strippenkaart of een losse sessie houd je altijd een aanspreekpunt. Iemand die je systemen kent en meteen weet waar je het over hebt.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="parallax-bg parallax-bg--cta" aria-hidden="true" />
        <p className="cta-eyebrow reveal">Klaar om te beginnen?</p>
        <h2 className="cta-title reveal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
          Laten we een eerlijk<br />gesprek hebben.
        </h2>
        <p className="cta-body reveal" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          Geen pitch of jargon. Wel een open gesprek over AI,
          jouw business en hoe je het integer kunt inzetten.
        </p>
        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn reveal" style={{ '--delay': '0.3s' } as React.CSSProperties}>
          Spill Your Tea →
        </a>
      </section>

      <footer>
        <div className="footer-top">
          <span className="footer-mission">Voor een mens-gerichte toekomst met technologie</span>
          <span className="footer-copy">© 2026 Kimberley van Ruiven</span>
        </div>
        <div className="footer-bottom">
          <span className="footer-ai">Deze website is ontwikkeld met AI-ondersteuning.</span>
          <span className="footer-sep">·</span>
          <a href="/privacy">Privacybeleid</a>
          <span className="footer-sep">·</span>
          <span>KvK: 98007033</span>
        </div>
      </footer>
    </>
  );
}
