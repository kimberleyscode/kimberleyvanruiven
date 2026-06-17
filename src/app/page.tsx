'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

type Tab = 'tools' | 'advies' | 'begeleiding';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('tools');
  const radarRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  const showTab = (id: Tab) => setActiveTab(id);

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
          const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.3;
          bg.style.transform = `translateY(${offset}px)`;
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

    return () => {
      revealObs.disconnect();
      lineObs.disconnect();
      cardObs.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!radarRef.current) return;
    if (chartRef.current) chartRef.current.destroy();
    chartRef.current = new Chart(radarRef.current, {
      type: 'radar',
      data: {
        labels: ['Transparantie', 'Eerlijkheid', 'Privacy', 'Verantwoording', 'Duurzaamheid'],
        datasets: [{
          label: 'Typisch MKB',
          data: [42, 33, 52, 38, 27],
          backgroundColor: 'rgba(200,169,110,0.12)',
          borderColor: '#C8A96E',
          borderWidth: 2,
          pointBackgroundColor: '#C8A96E',
          pointBorderColor: '#000',
          pointBorderWidth: 1.5,
          pointRadius: 5,
          pointHoverRadius: 7,
        }],
      },
      options: {
        responsive: true,
        animation: { duration: 1400, easing: 'easeInOutQuart' },
        scales: {
          r: {
            min: 0, max: 100,
            ticks: { stepSize: 25, display: false },
            grid: { color: 'rgba(255,255,255,0.07)' },
            angleLines: { color: 'rgba(255,255,255,0.07)' },
            pointLabels: { font: { family: 'var(--font-dm-sans), sans-serif', size: 11 }, color: 'rgba(255,255,255,0.38)' },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#111',
            borderColor: 'rgba(200,169,110,0.4)',
            borderWidth: 1,
            callbacks: { label: (c) => ' Score: ' + c.raw + '/100' },
            bodyColor: '#C8A96E',
          },
        },
      },
    });
    return () => { chartRef.current?.destroy(); };
  }, []);

  return (
    <>
      <div id="progress-bar" />

      <nav>
        <a href="#" className="nav-logo">Spill Your Tea</a>
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
        <div className="hero-tag">Ethische AI Advisory · Soul Tech Architect · Kimberley van Ruiven</div>
        <h1 className="hero-title">
          AI met <em>karakter.</em><br />Technologie met geweten.
        </h1>
        <div className="hero-meta">
          <p className="hero-desc">
            Ik help ondernemers AI verantwoord, bewust en efficiënt inzetten:
            voor een mens-gerichte toekomst met technologie.
          </p>
          <a href="https://calendar.app.google/douZqiDQ7p39Xf6u7" target="_blank" rel="noopener noreferrer" className="hero-cta">
            Plan een gesprek
          </a>
        </div>
      </section>

      {/* Quote */}
      <section className="quote-section reveal">
        <div className="quote-label">Filosofie</div>
        <div>
          <p className="quote-text">
            &ldquo;Technologie en menselijkheid gaan samen,
            als je bereid bent de juiste vragen te stellen.&rdquo;
          </p>
          <p className="quote-attr">Kimberley van Ruiven</p>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="diensten">
        <div className="section-header">
          <h2 className="section-title">Wat ik aanbied</h2>
          <span className="section-count">03 diensten</span>
        </div>
        <div className="tab-nav">
          {(['tools', 'advies', 'begeleiding'] as Tab[]).map((tab) => (
            <button
              key={tab}
              className={`tab-btn${activeTab === tab ? ' active' : ''}`}
              onClick={() => showTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className={`tab-panel${activeTab === 'tools' ? ' active' : ''}`}>
          <div className="service-card">
            <div className="service-num">01</div>
            <h3 className="service-name">AI CO₂ Calculator</h3>
            <p className="service-desc">Bereken hoeveel CO₂ jouw AI-gebruik uitstoot en ontdek groenere alternatieven voor jouw workflow.</p>
            <a href="/co2" className="service-link">Open calculator →</a>
          </div>
          <div className="service-card">
            <div className="service-num">02</div>
            <h3 className="service-name">Ethical AI Checklist</h3>
            <p className="service-desc">Ontdek hoe bewust jij omgaat met AI. De checklist helpt je inzicht te krijgen in je huidige gebruik en blinde vlekken.</p>
            <a href="#" className="service-link">Binnenkort beschikbaar →</a>
          </div>
        </div>

        <div className={`tab-panel${activeTab === 'advies' ? ' active' : ''}`}>
          <div className="service-card">
            <div className="service-num">03</div>
            <h3 className="service-name">Ethical AI Audit</h3>
            <p className="service-desc">Een grondige doorlichting van hoe jouw organisatie AI inzet. Van bias-risico&apos;s tot transparantie: ik breng in kaart wat er speelt en wat er beter kan.</p>
            <a href="#contact" className="service-link">Meer informatie →</a>
          </div>
          <div className="service-card">
            <div className="service-num">04</div>
            <h3 className="service-name">AVG &amp; AI Act Compliance</h3>
            <p className="service-desc">Praktisch advies over hoe jouw AI-gebruik voldoet aan de Europese regelgeving. Geen juridisch jargon, wél concrete stappen.</p>
            <a href="#contact" className="service-link">Meer informatie →</a>
          </div>
        </div>

        <div className={`tab-panel${activeTab === 'begeleiding' ? ' active' : ''}`}>
          <div className="service-card">
            <div className="service-num">05</div>
            <h3 className="service-name">Strippenkaart Bewuste AI</h3>
            <p className="service-desc">Tien uur hulp per kwartaal. Een vast aanspreekpunt voor al je vragen over verantwoord AI-gebruik, wanneer jij het nodig hebt.</p>
            <a href="#contact" className="service-link">Meer informatie →</a>
          </div>
          <div className="service-card">
            <div className="service-num">06</div>
            <h3 className="service-name">Losse sessie</h3>
            <p className="service-desc">Één uur gerichte hulp, precies waar jij behoefte aan hebt. Vastzitten met een vraagstuk? Je boekt wanneer het jou uitkomt.</p>
            <a href="#contact" className="service-link">Meer informatie →</a>
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
            <div className="featured-foil"><span>S</span></div>
            <p className="featured-visual-title">Voor een mens-gerichte toekomst met technologie</p>
            <p className="featured-visual-sub">Spill Your Tea · 2026</p>
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

      {/* Parallax divider */}
      <div className="parallax-divider">
        <div className="parallax-bg parallax-bg--divider" aria-hidden="true" />
      </div>

      {/* Dashboard */}
      <section className="dashboard" id="data">
        <div className="section-header">
          <h2 className="section-title">AI in Nederland</h2>
          <span className="section-count">03 inzichten</span>
        </div>
        <p className="dashboard-lead reveal">Feiten die tonen waar het MKB staat met AI, en waarom bewuste keuzes zo urgent zijn.</p>
        <div className="dashboard-grid">
          <div className="dashboard-radar reveal">
            <div className="dashboard-radar-header">
              <p>Ethische AI audit</p>
              <h3>Typische score MKB</h3>
            </div>
            <div className="radar-canvas-wrap">
              <canvas ref={radarRef} id="radarChart" />
            </div>
            <p className="chart-note">
              Indicatieve scores gebaseerd op{' '}
              <a href="https://www.cbs.nl/en-gb/news/2025/09/increasing-use-of-ai-by-business" target="_blank" rel="noopener noreferrer">CBS 2025</a>
              {' '}en{' '}
              <a href="https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2" target="_blank" rel="noopener noreferrer">Eurostat 2025</a>.
              {' '}Schaal 0–100.
            </p>
          </div>
          <div className="stat-cards">
            <div className="stat-card reveal" data-animate-bars="">
              <p className="stat-eyebrow">AI-adoptie NL</p>
              <div className="stat-big">18%</div>
              <p className="stat-desc">van het Nederlandse MKB gebruikt AI in 2026, tegenover 41% bij grote bedrijven.</p>
              <div className="mini-bars">
                <div className="mini-bar-row"><span className="mini-bar-label">MKB</span><div className="mini-bar-track"><div className="mini-bar-fill" data-w="18" /></div><span className="mini-bar-pct">18%</span></div>
                <div className="mini-bar-row"><span className="mini-bar-label">Groot</span><div className="mini-bar-track"><div className="mini-bar-fill mini-bar-fill--light" data-w="41" /></div><span className="mini-bar-pct">41%</span></div>
              </div>
              <p className="stat-source">Bron: <a href="https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2" target="_blank" rel="noopener noreferrer">Eurostat 2024</a></p>
            </div>
            <div className="stat-card reveal" data-animate-bars="" style={{ '--delay': '0.1s' } as React.CSSProperties}>
              <p className="stat-eyebrow">Grootste barrière</p>
              <div className="stat-big">63%</div>
              <p className="stat-desc">van de Nederlandse bedrijven noemt gebrek aan AI-expertise als voornaamste rem op verdere adoptie.</p>
              <div className="mini-bars">
                <div className="mini-bar-row"><span className="mini-bar-label">Expertise</span><div className="mini-bar-track"><div className="mini-bar-fill" data-w="63" /></div><span className="mini-bar-pct">63%</span></div>
                <div className="mini-bar-row"><span className="mini-bar-label">Kosten</span><div className="mini-bar-track"><div className="mini-bar-fill mini-bar-fill--light" data-w="41" /></div><span className="mini-bar-pct">41%</span></div>
              </div>
              <p className="stat-source">Bron: <a href="https://www.cbs.nl/en-gb/news/2025/09/increasing-use-of-ai-by-business" target="_blank" rel="noopener noreferrer">CBS, september 2025</a></p>
            </div>
            <div className="stat-card reveal" data-animate-bars="" style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <p className="stat-eyebrow">Klimaatimpact</p>
              <div className="stat-big">10×</div>
              <p className="stat-desc">meer energie per AI-query dan een Google-zoekopdracht: 2,9 Wh versus 0,3 Wh per vraag.</p>
              <div className="mini-bars">
                <div className="mini-bar-row"><span className="mini-bar-label">ChatGPT</span><div className="mini-bar-track"><div className="mini-bar-fill mini-bar-fill--danger" data-w="91" /></div><span className="mini-bar-pct">2,9 Wh</span></div>
                <div className="mini-bar-row"><span className="mini-bar-label">Google</span><div className="mini-bar-track"><div className="mini-bar-fill mini-bar-fill--green" data-w="9" /></div><span className="mini-bar-pct">0,3 Wh</span></div>
              </div>
              <p className="stat-source">Bron: <a href="https://www.aitooldiscovery.com/ai-infra/is-ai-bad-for-the-environment" target="_blank" rel="noopener noreferrer">AI Tool Discovery 2026</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="aanpak">
        <div className="section-header">
          <h2 className="section-title">Mijn aanpak</h2>
          <span className="section-count">04 stappen</span>
        </div>
        <div className="process-list">
          <div className="process-item reveal">
            <div className="process-step">01</div>
            <div className="process-name">Luisteren &amp; begrijpen</div>
            <div className="process-desc">Ik begin met jouw situatie, niet met een standaardoplossing. Een goed gesprek over wat je doet, wat je gebruikt en waar je tegenaan loopt.</div>
          </div>
          <div className="process-item reveal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <div className="process-step">02</div>
            <div className="process-name">Doorlichten &amp; analyseren</div>
            <div className="process-desc">Ik breng in kaart welke AI-tools je gebruikt, welke risico&apos;s er zijn op het gebied van bias, privacy en transparantie.</div>
          </div>
          <div className="process-item reveal" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <div className="process-step">03</div>
            <div className="process-name">Advies zonder jargon</div>
            <div className="process-desc">Concrete aanbevelingen die je begrijpt en kunt uitvoeren, geen abstracte rapporten maar praktische stappen.</div>
          </div>
          <div className="process-item reveal" style={{ '--delay': '0.3s' } as React.CSSProperties}>
            <div className="process-step">04</div>
            <div className="process-name">Blijven sparren</div>
            <div className="process-desc">AI verandert snel. Via de strippenkaart of losse sessies blijf je up-to-date en heb je altijd iemand om mee te denken.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="parallax-bg parallax-bg--cta" aria-hidden="true" />
        <p className="cta-eyebrow reveal">Klaar om te spillen?</p>
        <h2 className="cta-title reveal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
          Laten we een eerlijk<br />gesprek hebben.
        </h2>
        <p className="cta-body reveal" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          Geen pitch of jargon. Wel een open gesprek over AI,
          jouw business en hoe je het integer kunt inzetten.
        </p>
        <a href="https://calendar.app.google/douZqiDQ7p39Xf6u7" target="_blank" rel="noopener noreferrer" className="cta-btn reveal" style={{ '--delay': '0.3s' } as React.CSSProperties}>
          Spill Your Tea →
        </a>
      </section>

      <footer>
        <div className="footer-top">
          <span className="footer-copy">© 2026 Kimberley van Ruiven</span>
          <span className="footer-logo">Spill Your Tea</span>
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
