"use client";

import { useEffect, useRef, useState } from "react";

const DEVICES = [
  {
    key: "luzes",
    label: "Iluminação do jardim",
    on: "Ligada",
    off: "Desligada",
    cmd: (v) => (v ? "ligar a luz do jardim" : "desligar a luz do jardim"),
    icon: (
      <path d="M12 3a6 6 0 0 1 6 6c0 2.5-1.5 3.7-2.2 5H8.2C7.5 12.7 6 11.5 6 9a6 6 0 0 1 6-6ZM10 17h4M10.8 20h2.4" />
    ),
  },
  {
    key: "cascata",
    label: "Cascata da piscina",
    on: "Ligada",
    off: "Desligada",
    cmd: (v) => (v ? "ligar a cascata da piscina" : "desligar a cascata"),
    icon: (
      <path d="M5 4h14M8 4v6M12 4v9M16 4v6M4 17c2 -1.6 4 -1.6 6 0s4 1.6 6 0 3 -1.2 4 -.6M4 21c2 -1.6 4 -1.6 6 0s4 1.6 6 0 3 -1.2 4 -.6" />
    ),
  },
  {
    key: "portao",
    label: "Portão de garagem",
    on: "Aberto",
    off: "Fechado",
    cmd: (v) => (v ? "abrir o portão da garagem" : "fechar o portão da garagem"),
    icon: (
      <path d="M3 20V8l9-5 9 5v12M6 20v-9h12v9M6 14h12M6 17h12" />
    ),
  },
  {
    key: "camera",
    label: "Câmera de segurança",
    on: "Gravando",
    off: "Em espera",
    cmd: (v) => (v ? "ativar a câmera de segurança" : "desativar a câmera"),
    icon: (
      <path d="M3 8l13-3 1.2 4.6L4.6 13 3 8ZM16.5 7.5l4.5 -1v6l-4 .9M7 13v5h4M5 21h8" />
    ),
  },
];

export default function SmartPanel() {
  const [state, setState] = useState({
    luzes: true,
    cascata: true,
    portao: false,
    camera: false,
  });
  const [voice, setVoice] = useState(null);
  const voiceTimer = useRef(null);

  useEffect(() => () => clearTimeout(voiceTimer.current), []);

  /* cada botão simula o comando de voz que a Alexa executaria */
  const say = (text) => {
    setVoice(text);
    clearTimeout(voiceTimer.current);
    voiceTimer.current = setTimeout(() => setVoice(null), 3400);
  };

  const toggle = (key) => {
    const device = DEVICES.find((d) => d.key === key);
    const next = !state[key];
    say(`Alexa, ${device.cmd(next)}`);
    setState((s) => ({ ...s, [key]: next }));
  };

  const allOn = DEVICES.every((d) => state[d.key]);
  const setAll = (v) => {
    say(v ? "Alexa, ativar o modo festa" : "Alexa, desativar o modo festa");
    setState({ luzes: v, cascata: v, portao: v, camera: v });
  };

  return (
    <section className="demo section" id="demo" data-lit>
      <div className="section-head">
        <p className="eyebrow">
          <span className="lamp" aria-hidden="true" />
          Demonstração
        </p>
        <h2>
          Sinta a automação <em>antes de instalar.</em>
        </h2>
        <p className="section-sub">
          Este quintal é de verdade? Ainda não — mas o seu pode ser. Toque nos
          controles e veja tudo responder na hora.
        </p>
      </div>

      <div className="demo-grid">
        <div className="panel">
          <div className="panel-head">
            <span className="panel-title">Painel da casa</span>
            <button
              type="button"
              className={`scene-btn ${allOn ? "scene-on" : ""}`}
              onClick={() => setAll(!allOn)}
            >
              ✦ Modo festa
            </button>
          </div>
          <div
            className={`alexa ${voice ? "alexa-speaking" : ""}`}
            aria-live="polite"
          >
            <span className="alexa-dot" aria-hidden="true">
              <span className="alexa-ring" />
            </span>
            <span className="alexa-bubble">
              {voice
                ? `“${voice}”`
                : "Toque num controle e veja o comando de voz equivalente"}
            </span>
          </div>
          <ul className="panel-list">
            {DEVICES.map((d) => (
              <li key={d.key} className="panel-row">
                <svg viewBox="0 0 24 24" className="panel-icon" aria-hidden="true">
                  {d.icon}
                </svg>
                <div className="panel-info">
                  <span className="panel-label">{d.label}</span>
                  <span
                    className={`panel-status ${state[d.key] ? "st-on" : ""}`}
                  >
                    {state[d.key] ? d.on : d.off}
                  </span>
                </div>
                <label className="switch switch-sm">
                  <input
                    type="checkbox"
                    checked={state[d.key]}
                    onChange={() => toggle(d.key)}
                    aria-label={d.label}
                  />
                  <span className="switch-track" aria-hidden="true" />
                </label>
              </li>
            ))}
          </ul>
          <p className="panel-note">
            Aqui os botões fazem o trabalho — no projeto real, é só pedir à
            Alexa ou ao Google, ou tocar no app do celular.
          </p>
        </div>

        <div className="scene-card">
          <BackyardSvg s={state} />
        </div>
      </div>
    </section>
  );
}

function BackyardSvg({ s }) {
  return (
    <svg
      className="yard"
      viewBox="0 0 760 460"
      role="img"
      aria-label="Cena interativa de um quintal automatizado com portão, câmera, luzes de jardim e cascata na piscina"
    >
      <defs>
        <linearGradient
          id="y-gold"
          gradientUnits="userSpaceOnUse"
          x1="40"
          y1="140"
          x2="730"
          y2="420"
        >
          <stop offset="0" stopColor="#F3D08B" />
          <stop offset="0.6" stopColor="#D9A84E" />
          <stop offset="1" stopColor="#9A6B1F" />
        </linearGradient>
        <linearGradient id="y-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9FD8FF" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#7FC4F5" stopOpacity="0.45" />
          <stop offset="1" stopColor="#BFE6FF" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="y-pool" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5FB1E8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#1B4E75" stopOpacity="0.65" />
        </linearGradient>
        <filter id="y-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <clipPath id="gate-clip">
          <rect x="66" y="220" width="176" height="180" />
        </clipPath>
      </defs>

      {/* chão */}
      <line x1="30" y1="400" x2="730" y2="400" stroke="url(#y-gold)" strokeWidth="1.6" opacity="0.8" />

      {/* ===== portão deslizante ===== */}
      <g className={s.portao ? "gate gate-open" : "gate"}>
        <rect x="52" y="208" width="14" height="192" fill="none" stroke="url(#y-gold)" strokeWidth="2" />
        <rect x="242" y="208" width="14" height="192" fill="none" stroke="url(#y-gold)" strokeWidth="2" />
        <g clipPath="url(#gate-clip)">
          <g className="gate-panel">
            <rect x="70" y="232" width="168" height="158" fill="rgba(13,21,36,.85)" stroke="url(#y-gold)" strokeWidth="2" />
            <line x1="98" y1="232" x2="98" y2="390" stroke="url(#y-gold)" strokeWidth="1.2" opacity="0.7" />
            <line x1="126" y1="232" x2="126" y2="390" stroke="url(#y-gold)" strokeWidth="1.2" opacity="0.7" />
            <line x1="154" y1="232" x2="154" y2="390" stroke="url(#y-gold)" strokeWidth="1.2" opacity="0.7" />
            <line x1="182" y1="232" x2="182" y2="390" stroke="url(#y-gold)" strokeWidth="1.2" opacity="0.7" />
            <line x1="210" y1="232" x2="210" y2="390" stroke="url(#y-gold)" strokeWidth="1.2" opacity="0.7" />
            <circle cx="96" cy="394" r="5" fill="none" stroke="url(#y-gold)" strokeWidth="1.6" />
            <circle cx="212" cy="394" r="5" fill="none" stroke="url(#y-gold)" strokeWidth="1.6" />
          </g>
        </g>
        {/* sinalizador do motor */}
        <circle className="gate-led" cx="249" cy="200" r="3.4" />
      </g>

      {/* ===== câmera ===== */}
      <g className={s.camera ? "cam cam-on" : "cam"}>
        <line x1="59" y1="208" x2="59" y2="184" stroke="url(#y-gold)" strokeWidth="2.4" />
        <g className="cam-head">
          <rect
            x="46"
            y="168"
            width="46"
            height="17"
            rx="4"
            fill="rgba(13,21,36,.9)"
            stroke="url(#y-gold)"
            strokeWidth="2"
          />
          <circle cx="86" cy="176.5" r="3.2" fill="none" stroke="url(#y-gold)" strokeWidth="1.6" />
          <circle className="cam-led" cx="53" cy="173" r="2.4" />
        </g>
        <path className="cam-cone" d="M92 176 L216 246 L172 312 Z" />
        <text className="cam-rec" x="102" y="162">
          ● REC
        </text>
      </g>

      {/* ===== luzes de jardim ===== */}
      <g className={s.luzes ? "spots spots-on" : "spots"}>
        {[310, 366, 422].map((x) => (
          <g key={x}>
            <path className="spot-cone" d={`M${x - 3} 368 L${x - 26} 300 L${x + 20} 300 L${x + 3} 368 Z`} />
            <line x1={x} y1="400" x2={x} y2="368" stroke="url(#y-gold)" strokeWidth="2" />
            <circle className="spot-bulb" cx={x} cy="364" r="4.4" />
          </g>
        ))}
        {/* arbustos */}
        <path
          d="M282 400 q6 -18 20 -20 q-4 12 -8 20 M448 400 q-2 -22 12 -30 q2 16 -4 30"
          stroke="url(#y-gold)"
          strokeWidth="1.4"
          fill="none"
          opacity="0.8"
        />
      </g>

      {/* ===== cascata + piscina ===== */}
      <g className={s.cascata ? "falls falls-on" : "falls"}>
        {/* muro de pedra */}
        <rect x="500" y="188" width="200" height="150" rx="4" fill="rgba(13,21,36,.7)" stroke="url(#y-gold)" strokeWidth="2" />
        <path
          d="M500 226 h200 M500 264 h200 M500 302 h200 M550 188 v38 M620 226 v38 M560 264 v38 M650 302 v36 M660 188 v38"
          stroke="url(#y-gold)"
          strokeWidth="1"
          opacity="0.45"
        />
        {/* bica */}
        <rect x="556" y="196" width="88" height="8" rx="3" fill="none" stroke="url(#y-gold)" strokeWidth="1.8" />

        {/* água caindo */}
        <g className="water">
          <rect className="water-sheet" x="560" y="206" width="80" height="150" fill="url(#y-water)" />
          <g className="water-lines" stroke="#BFE6FF" strokeWidth="2" strokeLinecap="round">
            <line x1="566" y1="206" x2="566" y2="356" />
            <line x1="580" y1="206" x2="580" y2="356" />
            <line x1="594" y1="206" x2="594" y2="356" />
            <line x1="608" y1="206" x2="608" y2="356" />
            <line x1="622" y1="206" x2="622" y2="356" />
            <line x1="634" y1="206" x2="634" y2="356" />
          </g>
          <ellipse className="splash splash-1" cx="576" cy="358" rx="14" ry="4" />
          <ellipse className="splash splash-2" cx="602" cy="360" rx="18" ry="5" />
          <ellipse className="splash splash-3" cx="626" cy="358" rx="13" ry="4" />
          <circle className="drop drop-1" cx="552" cy="330" r="2" />
          <circle className="drop drop-2" cx="648" cy="318" r="2" />
        </g>

        {/* piscina */}
        <path
          d="M478 356 h244 a10 10 0 0 1 10 10 v26 a8 8 0 0 1 -8 8 h-248 a8 8 0 0 1 -8 -8 v-26 a10 10 0 0 1 10 -10 Z"
          fill="url(#y-pool)"
          stroke="url(#y-gold)"
          strokeWidth="2"
        />
        <g className="pool-waves" stroke="#9FD8FF" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <path d="M492 372 q10 -6 20 0 t20 0 t20 0" />
          <path d="M600 384 q10 -6 20 0 t20 0 t20 0" />
          <path d="M520 390 q10 -6 20 0 t20 0" />
        </g>
        {/* glow refletido quando ligada */}
        <ellipse className="falls-glow" cx="600" cy="370" rx="90" ry="22" fill="#7FC4F5" filter="url(#y-soft)" />
      </g>
    </svg>
  );
}
