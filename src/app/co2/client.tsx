'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import '../concept2.css';
import { Glyph, Scatter, useKinetiek, useLichteAchtergrond, fontVars, HoekThuis, HOME, MailLink } from '../gedeeld';

/* Forn-stijl versie van de AI CO₂-calculator; rekenlogica identiek aan /co2 */
export default function CO2Concept2Client() {
  useLichteAchtergrond();
  useKinetiek();

  useEffect(() => {
    let period = 'day';
    const CIRCUMFERENCE = 2 * Math.PI * 48;
    const DAYS = 30;

    const COLORS: Record<string, string> = {
      claude: '#00218F', chatgpt: '#5A6FD1', gemini: '#9AA8E8',
      sonnet: '#1B8A5A', lechat: '#0FA3B1', greenpt: '#6DA34D', local: '#747474',
    };

    const FACTORS: Record<string, { whPer1kTokens: number; gCO2PerKwh: number }> = {
      claude:  { whPer1kTokens: 0.010, gCO2PerKwh: 200 },
      chatgpt: { whPer1kTokens: 0.020, gCO2PerKwh: 200 },
      gemini:  { whPer1kTokens: 0.010, gCO2PerKwh: 100 },
      sonnet:  { whPer1kTokens: 0.007, gCO2PerKwh: 200 },
      lechat:  { whPer1kTokens: 0.008, gCO2PerKwh: 50  },
      greenpt: { whPer1kTokens: 0.010, gCO2PerKwh: 10  },
    };

    function step(id: string, delta: number) {
      const el = document.getElementById(id) as HTMLInputElement;
      if (!el) return;
      el.value = String(Math.max(0, (parseFloat(el.value) || 0) + delta));
      calculate();
    }

    function setTokens(id: string, value: number, btn: HTMLElement) {
      const hidden = document.getElementById(id + '-tokens') as HTMLInputElement;
      if (hidden) hidden.value = String(value);
      btn.closest('.token-select')?.querySelectorAll('.token-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calculate();
    }

    function setPeriod(p: string, btn: HTMLElement) {
      period = p;
      document.querySelectorAll('.period-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const label = document.getElementById('result-label');
      if (label) label.textContent = p === 'day' ? 'Geschatte uitstoot per dag' : 'Geschatte uitstoot per maand';
      calculate();
    }

    function fmt(g: number): string {
      if (g < 0.001) return '0 mg';
      if (g < 1) return (g * 1000).toFixed(1) + ' mg';
      if (g < 1000) return g.toFixed(1) + ' g';
      return (g / 1000).toFixed(2) + ' kg';
    }

    function gCO2ForService(id: string): number {
      const msgs = parseFloat((document.getElementById(id + '-msgs') as HTMLInputElement)?.value) || 0;
      const tokens = parseFloat((document.getElementById(id + '-tokens') as HTMLInputElement)?.value) || 0;
      const f = FACTORS[id];
      const multiplier = period === 'month' ? DAYS : 1;
      return ((msgs * tokens * multiplier / 1000) * f.whPer1kTokens / 1000) * f.gCO2PerKwh;
    }

    function gCO2ForLocal(): number {
      const hours = parseFloat((document.getElementById('local-hours') as HTMLInputElement)?.value) || 0;
      const watt  = parseFloat((document.getElementById('local-watt') as HTMLInputElement)?.value) || 0;
      const multiplier = period === 'month' ? DAYS : 1;
      return (watt * hours * multiplier / 1000) * 290;
    }

    /* Wat-als: dezelfde cloudgesprekken, maar allemaal via Claude Sonnet */
    function gCO2AlsSonnet(): number {
      const ids = ['claude', 'chatgpt', 'gemini', 'sonnet', 'lechat', 'greenpt'];
      const f = FACTORS.sonnet;
      const multiplier = period === 'month' ? DAYS : 1;
      let total = 0;
      ids.forEach(id => {
        const msgs = parseFloat((document.getElementById(id + '-msgs') as HTMLInputElement)?.value) || 0;
        const tokens = parseFloat((document.getElementById(id + '-tokens') as HTMLInputElement)?.value) || 0;
        total += ((msgs * tokens * multiplier / 1000) * f.whPer1kTokens / 1000) * f.gCO2PerKwh;
      });
      return total + gCO2ForLocal();
    }

    function updateDonut(values: { id: string; g: number }[], total: number) {
      const circ = CIRCUMFERENCE;
      let offset = 0;
      const ids = ['claude', 'chatgpt', 'gemini', 'sonnet', 'lechat', 'greenpt', 'local'];
      ids.forEach(id => {
        const arc = document.getElementById('arc-' + id);
        if (!arc) return;
        const v = values.find(v => v.id === id);
        const pct = total > 0 ? (v ? v.g / total : 0) : 0;
        const dash = pct * circ;
        arc.style.strokeDasharray = dash + ' ' + (circ - dash);
        arc.style.strokeDashoffset = String(-offset);
        offset += dash;
      });
    }

    function updateLegend(values: { id: string; g: number; label: string }[]) {
      const legend = document.getElementById('legend');
      if (!legend) return;
      legend.innerHTML = values.filter(v => v.g > 0).map(v => `
        <div class="legend-item">
          <span class="legend-dot" style="background:${COLORS[v.id]}"></span>
          <span class="legend-label">${v.label}</span>
          <span class="legend-val">${fmt(v.g)}</span>
        </div>`).join('') || '<div style="font-size:0.82rem;color:var(--c2co2-muted)">Vul je gebruik in om de verdeling te zien.</div>';
    }

    function calculate() {
      const services = [
        { id: 'claude',  label: 'Claude Opus' },
        { id: 'chatgpt', label: 'ChatGPT' },
        { id: 'gemini',  label: 'Gemini' },
        { id: 'sonnet',  label: 'Claude Sonnet' },
        { id: 'lechat',  label: 'Le Chat' },
        { id: 'greenpt', label: 'GreenPT' },
      ];
      const values = services.map(s => ({ id: s.id, label: s.label, g: gCO2ForService(s.id) }));
      values.push({ id: 'local', label: 'Lokaal', g: gCO2ForLocal() });
      const total = values.reduce((s, v) => s + v.g, 0);

      values.forEach(v => {
        const badge = document.getElementById(v.id + '-badge');
        if (badge) badge.textContent = fmt(v.g);
      });

      const el = document.getElementById('total-co2');
      const unitEl = document.getElementById('co2-unit');
      const ctx = document.getElementById('co2-context');
      if (!el || !unitEl || !ctx) return;

      let displayVal: number, unitStr: string;
      if (total < 1) { displayVal = total * 1000; unitStr = 'mg CO₂'; }
      else if (total < 1000) { displayVal = total; unitStr = 'g CO₂'; }
      else { displayVal = total / 1000; unitStr = 'kg CO₂'; }

      el.textContent = displayVal.toFixed(displayVal < 1 ? 2 : 1);
      unitEl.textContent = unitStr;

      const period_label = period === 'day' ? 'dag' : 'maand';
      if (total < 1) ctx.textContent = 'Heel weinig. Zo kan het dus ook.';
      else if (total < 50) ctx.textContent = `Vergelijkbaar met een paar minuten autorijden per ${period_label}.`;
      else if (total < 500) ctx.textContent = `Vergelijkbaar met een korte autorit per ${period_label}.`;
      else ctx.textContent = 'Niet niks. Overweeg minder zware modellen te gebruiken.';

      // Wat-als-regel: alleen tonen als Sonnet merkbaar zou schelen
      const whatif = document.getElementById('co2-whatif');
      if (whatif) {
        const scenario = gCO2AlsSonnet();
        if (total > 0 && scenario < total * 0.9) {
          whatif.textContent = `Liepen dezelfde gesprekken via Claude Sonnet, dan was dit ongeveer ${fmt(scenario)}.`;
          whatif.style.display = 'block';
        } else {
          whatif.style.display = 'none';
        }
      }

      const carEl = document.getElementById('car-km');
      const lampEl = document.getElementById('lamp-hours');
      const phoneEl = document.getElementById('phone-charges');
      if (carEl) carEl.textContent = (total / 120).toFixed(2);
      if (lampEl) lampEl.textContent = String(Math.round(total / 2.9));
      if (phoneEl) phoneEl.textContent = (total / 8.8).toFixed(1);

      updateDonut(values, total);
      updateLegend(values);
    }

    // Expose to DOM event handlers
    window.step = step;
    window.setTokens = setTokens;
    window.setPeriod = setPeriod;
    window.calculate = calculate;

    calculate();
  }, []);

  return (
    <div className={`c2-root c2co2 ${fontVars}`}>
      <style>{`
        .c2co2 {
          --c2co2-muted: #747474;
          --c2co2-input: #F0F1F5;
          --c2co2-rand: rgba(0, 0, 0, 0.07);
        }
        .c2co2 .co2-main { max-width: 46rem; width: 100%; margin: 0 auto; padding: 1rem 2rem 6rem; position: relative; }
        .c2co2 .card {
          background: #fff; border: 1px solid var(--c2co2-rand); border-radius: 40px;
          padding: 2.2rem 2.2rem 2rem; margin-bottom: 1.6rem;
        }
        .c2co2 .card-title {
          font-family: var(--font-c2-display), sans-serif; font-weight: 400;
          color: var(--c2-blue); font-size: 1.35rem; margin-bottom: 1.4rem;
        }
        .c2co2 .result-hero { text-align: center; }
        .c2co2 .result-label { font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--c2co2-muted); margin-bottom: 0.9rem; }
        .c2co2 .co2-display { display: flex; align-items: baseline; justify-content: center; gap: 0.4rem; margin-bottom: 0.3rem; }
        .c2co2 .co2-number { font-family: var(--font-c2-display), sans-serif; font-size: clamp(3rem, 10vw, 4.5rem); color: var(--c2-blue); line-height: 1; }
        .c2co2 .co2-unit { font-size: 1.1rem; color: var(--c2co2-muted); }
        .c2co2 .co2-context { font-size: 0.9rem; color: var(--c2co2-muted); margin-bottom: 1.6rem; }
        .c2co2 .co2-whatif { font-size: 0.88rem; color: var(--c2-blue); margin: -1.1rem 0 1.6rem; }
        .c2co2 .cta-tekst { font-size: 0.95rem; color: var(--c2co2-muted); line-height: 1.75; }
        .c2co2 .cta-tekst a { color: var(--c2-blue); text-decoration: none; }
        .c2co2 .cta-tekst a:hover { opacity: 0.75; }
        .c2co2 .comparisons { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.9rem; }
        .c2co2 .comparison { border: 1px solid var(--c2co2-rand); border-radius: 22px; padding: 1rem 0.5rem; text-align: center; }
        .c2co2 .comparison .val { font-size: 1.15rem; display: block; color: var(--c2-ink); }
        .c2co2 .comparison .lbl { font-size: 0.75rem; color: var(--c2co2-muted); }
        .c2co2 .period-toggle { display: flex; border: 1px solid var(--c2co2-rand); background: #fff; border-radius: 999px; padding: 0.4rem; gap: 0.4rem; margin-bottom: 1.6rem; }
        .c2co2 .period-toggle button { flex: 1; padding: 0.6rem; border: none; border-radius: 999px; background: transparent; color: var(--c2co2-muted); font-family: inherit; font-size: 0.92rem; cursor: pointer; transition: all 0.2s; }
        .c2co2 .period-toggle button.active { background: var(--c2-blue); color: #fff; }
        .c2co2 .service-row { padding: 1.1rem 0; border-bottom: 1px solid var(--c2co2-rand); }
        .c2co2 .service-row:last-child { border-bottom: none; padding-bottom: 0; }
        .c2co2 .service-row:first-of-type { padding-top: 0; }
        .c2co2 .service-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem; }
        .c2co2 .service-name { font-size: 1rem; color: var(--c2-ink); }
        .c2co2 .service-sub { font-size: 0.8rem; color: var(--c2co2-muted); margin-top: 0.15rem; }
        .c2co2 .service-co2 { font-size: 0.82rem; color: var(--c2-blue); background: rgba(0, 33, 143, 0.07); padding: 0.25rem 0.7rem; border-radius: 999px; white-space: nowrap; }
        .c2co2 .green-tag { display: inline-block; font-size: 0.62rem; background: rgba(27, 138, 90, 0.12); color: #1B8A5A; padding: 0.14rem 0.5rem; border-radius: 999px; margin-left: 0.45rem; vertical-align: middle; letter-spacing: 0.05em; }
        .c2co2 .inputs-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem; min-width: 0; }
        .c2co2 .input-block { min-width: 0; }
        .c2co2 .input-block label { display: block; font-size: 0.72rem; color: var(--c2co2-muted); margin-bottom: 0.35rem; letter-spacing: 0.06em; text-transform: uppercase; }
        .c2co2 .input-wrap { display: flex; align-items: center; background: var(--c2co2-input); border-radius: 12px; border: 1.5px solid transparent; transition: border-color 0.2s; overflow: hidden; width: 100%; min-width: 0; }
        .c2co2 .input-wrap:focus-within { border-color: var(--c2-blue); }
        .c2co2 .input-wrap button { width: 34px; height: 38px; border: none; background: transparent; color: var(--c2co2-muted); font-size: 1.1rem; cursor: pointer; flex-shrink: 0; transition: color 0.15s; }
        .c2co2 .input-wrap button:hover { color: var(--c2-blue); }
        .c2co2 .input-wrap input[type="number"] { flex: 1; border: none; background: transparent; font-family: inherit; font-size: 0.98rem; color: var(--c2-ink); text-align: center; outline: none; min-width: 0; padding: 0.45rem 0; -moz-appearance: textfield; }
        .c2co2 .input-wrap input[type="number"]::-webkit-outer-spin-button, .c2co2 .input-wrap input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; }
        .c2co2 .token-select { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px; background: var(--c2co2-input); border-radius: 12px; padding: 3px; }
        .c2co2 .token-btn { border: none; background: transparent; border-radius: 9px; padding: 0.42rem 0.1rem; font-size: 0.72rem; color: var(--c2co2-muted); cursor: pointer; transition: all 0.15s; font-family: inherit; text-align: center; line-height: 1.2; }
        .c2co2 .token-btn.active { background: var(--c2-blue); color: #fff; }
        .c2co2 .token-hint { font-size: 0.7rem; color: var(--c2co2-muted); margin-top: 0.35rem; font-style: italic; }
        .c2co2 .chart-wrap { display: flex; align-items: center; gap: 1.6rem; }
        .c2co2 .legend { flex: 1; display: flex; flex-direction: column; gap: 0.6rem; }
        .c2co2 .legend-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.88rem; }
        .c2co2 .legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .c2co2 .legend-label { flex: 1; color: var(--c2-ink); }
        .c2co2 .legend-val { color: var(--c2co2-muted); font-size: 0.82rem; }
        .c2co2 .tips-list { display: flex; flex-direction: column; gap: 0.9rem; }
        .c2co2 .tip-item { display: flex; gap: 1rem; align-items: flex-start; padding: 1.1rem 1.2rem; border: 1px solid var(--c2co2-rand); border-radius: 22px; }
        .c2co2 .tip-symbol { flex-shrink: 0; line-height: 1; }
        .c2co2 .tip-title { font-size: 0.95rem; color: var(--c2-ink); margin-bottom: 0.25rem; }
        .c2co2 .tip-desc { font-size: 0.84rem; color: var(--c2co2-muted); line-height: 1.6; }
        .c2co2 .disclaimer { font-size: 0.82rem; color: var(--c2co2-muted); line-height: 1.75; }
        @media (max-width: 500px) {
          .c2co2 .co2-main { padding: 0.5rem 1.4rem 4rem; }
          .c2co2 .comparisons { gap: 0.5rem; }
          .c2co2 .inputs-row { gap: 0.55rem; }
          .c2co2 .chart-wrap { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <nav className="c2-top">
        <HoekThuis />
        <MailLink tekst="Neem contact op" />
      </nav>

      <header className="c2-section c2-tekst-kop">
        <Scatter items={[[5, 5.4, '68%', '10%'], [12, 3.4, '84%', '60%'], [0, 2.6, '58%', '82%']]} />
        <p className="c2-eyebrow">Gratis tool</p>
        <h1 className="c2-kinetic c2-tekst-titel">
          <span className="c2-line" data-speed="-0.4">AI CO₂-</span>
          <span className="c2-line c2-line--indent1" data-speed="0.4">calculator</span>
        </h1>
        <div className="c2-tekst-intro">
          <p>Hoeveel CO₂ stoot jouw AI-gebruik eigenlijk uit? Reken het uit en zie meteen wat je eraan kunt doen.</p>
        </div>
      </header>

      <main className="co2-main">

        <div className="card result-hero">
          <div className="result-label" id="result-label">Geschatte uitstoot per dag</div>
          <div className="co2-display">
            <span className="co2-number" id="total-co2">0</span>
            <span className="co2-unit" id="co2-unit">g CO₂</span>
          </div>
          <div className="co2-context" id="co2-context">Vul je gebruik in om je uitstoot te berekenen</div>
          <div className="co2-whatif" id="co2-whatif" style={{ display: 'none' }}></div>
          <div className="comparisons">
            <div className="comparison"><span className="val" id="car-km">0</span><span className="lbl">km autorijden</span></div>
            <div className="comparison"><span className="val" id="lamp-hours">0</span><span className="lbl">uur LED-lamp</span></div>
            <div className="comparison"><span className="val" id="phone-charges">0</span><span className="lbl">× telefoon opladen</span></div>
          </div>
        </div>

        <div className="period-toggle">
          <button className="active" onClick={(e) => window.setPeriod('day', e.currentTarget)}>Per dag</button>
          <button onClick={(e) => window.setPeriod('month', e.currentTarget)}>Per maand</button>
        </div>

        <div className="card">
          <div className="card-title">Cloud AI</div>
          {[
            { id: 'chatgpt', name: 'ChatGPT', sub: 'OpenAI · GPT-5', defaultMsgs: 5 },
            { id: 'claude',  name: 'Claude (Opus)', sub: 'Anthropic · zwaarste model', defaultMsgs: 10 },
            { id: 'gemini',  name: 'Gemini', sub: 'Google · Gemini 3', defaultMsgs: 3 },
          ].map(s => <ServiceRow key={s.id} {...s} />)}
        </div>

        <div className="card">
          <div className="card-title">Groenere alternatieven</div>
          <ServiceRow id="sonnet" name="Claude Sonnet / Haiku" sub="Anthropic · Sonnet = balans kwaliteit & uitstoot · Haiku = lichtst & snelst" defaultMsgs={0} greenTag="Efficiënter" />
          <ServiceRow id="lechat" name="Le Chat" sub="Mistral AI · Frans elektriciteitsnet (kernenergie)" defaultMsgs={0} greenTag="Europese servers" />
          <ServiceRow id="greenpt" name="GreenPT" sub="Nederlands · Scaleway · GDPR-proof" defaultMsgs={0} greenTag="100% hernieuwbaar" />
        </div>

        <div className="card">
          <div className="card-title">Lokale modellen</div>
          <div className="service-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
            <div className="service-header">
              <div><div className="service-name">Eigen hardware</div><div className="service-sub">Ollama, LM Studio, etc.</div></div>
              <span className="service-co2" id="local-badge">0 mg</span>
            </div>
            <div className="inputs-row">
              <div className="input-block">
                <label>Uren per dag</label>
                <div className="input-wrap">
                  <button onClick={() => window.step('local-hours', -0.5)}>−</button>
                  <input type="number" id="local-hours" min="0" step={0.5} defaultValue={0} onInput={() => window.calculate()} />
                  <button onClick={() => window.step('local-hours', 0.5)}>+</button>
                </div>
              </div>
              <div className="input-block">
                <label>GPU watt</label>
                <div className="input-wrap">
                  <button onClick={() => window.step('local-watt', -10)}>−</button>
                  <input type="number" id="local-watt" min="0" defaultValue={200} onInput={() => window.calculate()} />
                  <button onClick={() => window.step('local-watt', 10)}>+</button>
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--c2co2-muted)', marginTop: '0.8rem' }}>RTX 3080 ≈ 320W · RTX 4060 ≈ 115W · M2 MacBook ≈ 20W</p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Verdeling per dienst</div>
          <div className="chart-wrap">
            <svg width="120" height="120" viewBox="0 0 120 120" style={{ flexShrink: 0 }}>
              <circle cx="60" cy="60" r="48" fill="none" stroke="#EDEEF3" strokeWidth="16"/>
              {['claude','chatgpt','gemini','sonnet','lechat','greenpt','local'].map((id, i) => (
                <circle key={id} id={`arc-${id}`} cx="60" cy="60" r="48" fill="none"
                  stroke={['#00218F','#5A6FD1','#9AA8E8','#1B8A5A','#0FA3B1','#6DA34D','#747474'][i]}
                  strokeWidth="16" strokeDasharray="0 302" strokeLinecap="round" transform="rotate(-90 60 60)" />
              ))}
            </svg>
            <div className="legend" id="legend" style={{ color: 'var(--c2co2-muted)', fontSize: '0.82rem' }}>Vul je gebruik in om de verdeling te zien.</div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Wat kun je nu al doen?</div>
          <div className="tips-list">
            {[
              { sym: 3, title: 'Vraag jezelf: heeft AI hier echt meerwaarde?', desc: 'Niet elke vraag heeft AI nodig. Een Google-zoekopdracht, een bestaand template of gewoon even nadenken is soms sneller én duurzamer. Bewust niet gebruiken telt ook mee.' },
              { sym: 7, title: 'Kies het juiste model voor de taak', desc: 'Gebruik Claude Sonnet of Haiku voor de meeste taken. Reserveer Opus of GPT-5 alleen voor complexe analyses. Dat scheelt al snel 3× in uitstoot, zonder in te leveren op kwaliteit.' },
              { sym: 11, title: 'Bundel je vragen', desc: 'Stuur één uitgebreid bericht in plaats van tien losse. Elk bericht kost energie voor context én verwerking. Neem even de tijd om je vraag compleet te formuleren.' },
              { sym: 15, title: 'Switch naar een groenere provider', desc: 'GreenPT draait volledig op hernieuwbare energie en is ook nog eens GDPR-proof. Le Chat (Mistral) gebruikt Europese servers met een van de laagste CO₂-intensieve elektriciteitsnetjes ter wereld.' },
              { sym: 19, title: 'Gebruik lokale modellen voor privégevoelige taken', desc: 'Tools zoals Ollama of LM Studio draaien op je eigen computer. Geen cloud, geen datalek, en bij groene stroom ook nog eens milieuvriendelijker.' },
            ].map(tip => (
              <div key={tip.title} className="tip-item">
                <span className="tip-symbol" style={{ color: 'var(--c2-blue)' }}><Glyph t={tip.sym} size={1.5} /></span>
                <div><div className="tip-title">{tip.title}</div><div className="tip-desc">{tip.desc}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-title">Hier beleid van maken?</div>
          <p className="cta-tekst">
            Benieuwd wat bewust AI-gebruik voor jouw organisatie betekent? Met de <Link href="/diensten/ai-act-quickscan">AI Act-quickscan</Link> breng ik in kaart welke AI er bij jou draait, wat daarvan al goed zit en wat nog aandacht vraagt. En wil je eerst weten waar je zelf staat als AI-gebruiker, doe dan de gratis quiz <Link href="/quiz">Gebruik jij AI, of gebruikt AI jou?</Link>
          </p>
        </div>

        <div className="card">
          <div className="card-title">Over de berekeningen</div>
          <p className="disclaimer">
            Schattingen op basis van gepubliceerd onderzoek (Luccioni et al., 2023) en Mistral Environmental Report (2025). Emissiefactoren: Claude Opus ~0,010 Wh/1k tokens · 200 gCO₂/kWh; Claude Sonnet ~0,007 · 200; ChatGPT ~0,020 · 200; Gemini ~0,010 · 100; Le Chat ~0,008 · 50; GreenPT ~0,010 · 10; lokaal = GPU-wattage × uren × NL-netintensiteit (≈ 290 gCO₂/kWh). Beschouw dit als een indicatie, niet als exacte meting. Laatst bijgewerkt: juli 2026.
          </p>
        </div>

      </main>

      <footer className="c2-footer">
        <span>© 2026 Kimberley van Ruiven</span>
        <Link href="/zo-werk-ik-met-ai">Zo werk ik met AI</Link>
        <Link href="/manifest">AI-manifest</Link>
        <Link href="/privacy">Privacybeleid</Link>
        <Link href={HOME}>Home</Link>
        <span>Gebouwd mét AI, met een mens aan het stuur.</span>
      </footer>
    </div>
  );
}

function ServiceRow({ id, name, sub, defaultMsgs, greenTag }: {
  id: string; name: string; sub: string; defaultMsgs: number; greenTag?: string;
}) {
  return (
    <div className="service-row">
      <div className="service-header">
        <div>
          <div className="service-name">
            {name}
            {greenTag && <span className="green-tag">{greenTag}</span>}
          </div>
          <div className="service-sub">{sub}</div>
        </div>
        <span className="service-co2" id={`${id}-badge`}>0 mg</span>
      </div>
      <div className="inputs-row">
        <div className="input-block">
          <label>Berichten</label>
          <div className="input-wrap">
            <button onClick={() => window.step(`${id}-msgs`, -1)}>−</button>
            <input type="number" id={`${id}-msgs`} min={0} defaultValue={defaultMsgs} onInput={() => window.calculate()} />
            <button onClick={() => window.step(`${id}-msgs`, 1)}>+</button>
          </div>
        </div>
        <div className="input-block">
          <label>Gesprekslengte (input + output)</label>
          <div className="token-select">
            {([['Kort',200],['Gemiddeld',800],['Lang',2000],['Uitgebreid',5000]] as [string, number][]).map(([label, val]) => (
              <button key={val} className={`token-btn${val === 800 ? ' active' : ''}`}
                onClick={(e) => window.setTokens(id, val, e.currentTarget)}>
                {label}
              </button>
            ))}
          </div>
          <input type="hidden" id={`${id}-tokens`} defaultValue={800} />
          <div className="token-hint">Kort ≈ 150 woorden · Gemiddeld ≈ 600 · Lang ≈ 1.500 · Uitgebreid ≈ 3.750</div>
        </div>
      </div>
    </div>
  );
}
