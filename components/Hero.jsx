"use client";

import { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "./contactInfo";

const ZONES = ["sala", "porta", "quarto", "garagem"];

const ZONE_LABEL = {
  sala: "Luz da sala",
  porta: "Luz da entrada",
  quarto: "Luz do quarto",
  garagem: "Luz da garagem",
};

export default function Hero() {
  const [pinned, setPinned] = useState(() => new Set());
  const [hovered, setHovered] = useState(null);
  const [allOn, setAllOn] = useState(false);
  const [waking, setWaking] = useState(null);
  const timeouts = useRef([]);

  /* Sequência de "boas-vindas": as luzes acendem uma a uma ao carregar */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPinned(new Set(["porta"]));
      return;
    }
    ZONES.forEach((z, i) => {
      timeouts.current.push(
        setTimeout(() => setWaking(z), 700 + i * 480),
        setTimeout(() => setWaking((w) => (w === z ? null : w)), 700 + i * 480 + 420)
      );
    });
    timeouts.current.push(
      setTimeout(() => setPinned(new Set(["porta"])), 700 + ZONES.length * 480)
    );
    return () => timeouts.current.forEach(clearTimeout);
  }, []);

  const isOn = (z) => allOn || pinned.has(z) || hovered === z || waking === z;

  const togglePin = (z) =>
    setPinned((prev) => {
      const next = new Set(prev);
      next.has(z) ? next.delete(z) : next.add(z);
      return next;
    });

  const zoneProps = (z) => ({
    className: "zone-hit",
    tabIndex: 0,
    role: "switch",
    "aria-checked": isOn(z),
    "aria-label": ZONE_LABEL[z],
    onMouseEnter: () => setHovered(z),
    onMouseLeave: () => setHovered((h) => (h === z ? null : h)),
    onFocus: () => setHovered(z),
    onBlur: () => setHovered((h) => (h === z ? null : h)),
    onClick: () => togglePin(z),
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePin(z);
      }
    },
  });

  const litCount = ZONES.filter(isOn).length;

  return (
    <section className="hero" id="topo">
      <div className="hero-inner">
        <div className="hero-copy" data-lit>
          <p className="eyebrow">
            <span className="lamp" aria-hidden="true" />
            Automação comercial e residencial
          </p>
          <h1 className="hero-title">
            Mais tecnologia,
            <br />
            <em>mais conforto,</em>
            <br />
            mais segurança,
            <br />
            mais para <em>você.</em>
          </h1>
          <p className="hero-sub">
            Soluções inteligentes que transformam ambientes e facilitam o seu
            dia a dia. <strong>Do seu jeito, no seu tempo.</strong>
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-gold"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsIcon /> Pedir orçamento
            </a>
            <a className="btn btn-ghost" href="#demo">
              Testar a automação
            </a>
          </div>
          <p className="hero-hint">
            <SensorIcon /> Passe o mouse ou toque na casa — os sensores acendem
            as luzes na hora.
          </p>
        </div>

        <div className={`hero-visual ${allOn ? "all-on" : ""}`}>
          <div className="house-card">
            <HouseSvg isOn={isOn} zoneProps={zoneProps} />
            <div className="house-bar">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={allOn}
                  onChange={(e) => setAllOn(e.target.checked)}
                />
                <span className="switch-track" aria-hidden="true" />
                <span className="switch-label">Modo chegada — acender tudo</span>
              </label>
              <span className="house-count" aria-live="polite">
                {litCount === 0
                  ? "Casa em repouso"
                  : `${litCount} ${litCount === 1 ? "luz acesa" : "luzes acesas"}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HouseSvg({ isOn, zoneProps }) {
  const cls = (z) => `zone ${isOn(z) ? "z-on" : ""}`;
  return (
    <svg
      className="house"
      viewBox="0 0 660 520"
      role="img"
      aria-label="Ilustração interativa de uma casa inteligente: as janelas acendem conforme o mouse passa"
    >
      <defs>
        <linearGradient
          id="h-gold"
          gradientUnits="userSpaceOnUse"
          x1="60"
          y1="120"
          x2="640"
          y2="500"
        >
          <stop offset="0" stopColor="#F3D08B" />
          <stop offset="0.6" stopColor="#D9A84E" />
          <stop offset="1" stopColor="#9A6B1F" />
        </linearGradient>
        <linearGradient id="h-warm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFD9A0" />
          <stop offset="1" stopColor="#E8A94E" />
        </linearGradient>
        <filter id="h-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="h-soft-sm" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* arco decorativo */}
      <path
        className="house-arc"
        d="M 58 470 A 306 306 0 0 1 654 438"
        fill="none"
        stroke="url(#h-gold)"
        strokeWidth="1.4"
        opacity="0.55"
      />
      <circle className="arc-comet" cx="590" cy="268" r="3.4" fill="#F3D08B" />
      <circle
        cx="590"
        cy="268"
        r="10"
        fill="#F3D08B"
        opacity="0.25"
        filter="url(#h-soft-sm)"
      />

      {/* chão */}
      <line
        x1="36"
        y1="470"
        x2="648"
        y2="470"
        stroke="url(#h-gold)"
        strokeWidth="1.6"
        opacity="0.8"
      />

      {/* planta */}
      <g stroke="url(#h-gold)" strokeWidth="1.5" fill="none" opacity="0.85">
        <path d="M104 470 C 100 440 84 428 66 424 C 82 442 88 452 92 470" />
        <path d="M108 470 C 110 434 100 414 112 392 C 118 416 120 444 114 470" />
        <path d="M116 470 C 124 444 140 434 156 432 C 142 448 132 456 124 470" />
        <path d="M60 470 C 76 462 96 462 110 466" />
      </g>

      {/* bloco direito (teto plano) */}
      <path
        d="M448 252 H628"
        stroke="url(#h-gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M616 252 V470 M462 252 V300"
        stroke="url(#h-gold)"
        strokeWidth="2"
        fill="none"
      />

      {/* telhado gable */}
      <path
        d="M128 318 L310 165 L492 318"
        stroke="url(#h-gold)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M160 292 V470 M458 292 V470" stroke="url(#h-gold)" strokeWidth="2" fill="none" />

      {/* ZONA: sala — janela ampla */}
      <g className={cls("sala")}>
        <rect
          className="z-glow"
          x="180"
          y="320"
          width="166"
          height="162"
          fill="#FFC97A"
          filter="url(#h-soft)"
        />
        <rect
          className="z-glass"
          x="196"
          y="336"
          width="134"
          height="134"
          rx="2"
        />
        <rect
          x="196"
          y="336"
          width="134"
          height="134"
          rx="2"
          fill="none"
          stroke="url(#h-gold)"
          strokeWidth="2"
        />
        <line className="z-mullion" x1="263" y1="336" x2="263" y2="470" />
        <line className="z-mullion" x1="196" y1="404" x2="330" y2="404" />
        {/* abajur na janela */}
        <g className="z-detail">
          <path d="M236 404 v-14 m-9 0 h18 l-4 -10 h-10 z" />
        </g>
        <rect {...zoneProps("sala")} x="188" y="328" width="150" height="150" />
      </g>

      {/* ZONA: porta + arandela */}
      <g className={cls("porta")}>
        <ellipse
          className="z-glow"
          cx="392"
          cy="392"
          rx="52"
          ry="66"
          fill="#FFC97A"
          filter="url(#h-soft)"
        />
        <rect
          x="362"
          y="356"
          width="60"
          height="114"
          rx="3"
          fill="none"
          stroke="url(#h-gold)"
          strokeWidth="2"
        />
        <circle cx="412" cy="416" r="2.6" fill="url(#h-gold)" />
        {/* arandela */}
        <g className="z-sconce">
          <path
            d="M436 344 h14 v10 a7 7 0 0 1 -14 0 z"
            stroke="url(#h-gold)"
            strokeWidth="1.8"
          />
          <path className="z-cone" d="M429 358 L457 358 L472 470 L414 470 Z" />
        </g>
        <rect {...zoneProps("porta")} x="356" y="336" width="104" height="140" />
      </g>

      {/* ZONA: quarto — janela superior */}
      <g className={cls("quarto")}>
        <rect
          className="z-glow"
          x="482"
          y="262"
          width="122"
          height="88"
          fill="#FFC97A"
          filter="url(#h-soft)"
        />
        <rect className="z-glass" x="494" y="274" width="98" height="62" rx="2" />
        <rect
          x="494"
          y="274"
          width="98"
          height="62"
          rx="2"
          fill="none"
          stroke="url(#h-gold)"
          strokeWidth="2"
        />
        <line className="z-mullion" x1="543" y1="274" x2="543" y2="336" />
        <g className="z-detail">
          <path d="M513 336 v-10 m-6 0 h12" />
        </g>
        <rect {...zoneProps("quarto")} x="486" y="266" width="114" height="80" />
      </g>

      {/* ZONA: garagem */}
      <g className={cls("garagem")}>
        <rect
          className="z-glow"
          x="470"
          y="440"
          width="150"
          height="40"
          fill="#FFC97A"
          filter="url(#h-soft)"
        />
        <rect
          x="482"
          y="376"
          width="122"
          height="94"
          rx="2"
          fill="none"
          stroke="url(#h-gold)"
          strokeWidth="2"
        />
        <line className="z-slat" x1="482" y1="398" x2="604" y2="398" />
        <line className="z-slat" x1="482" y1="420" x2="604" y2="420" />
        <line className="z-slat" x1="482" y1="442" x2="604" y2="442" />
        <rect className="z-under" x="484" y="462" width="118" height="6" rx="3" />
        <rect {...zoneProps("garagem")} x="476" y="370" width="134" height="104" />
      </g>
    </svg>
  );
}

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.1 4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5v-.5L9.7 8.2c-.2-.4-.4-.4-.6-.4h-.2Z" />
    </svg>
  );
}

function SensorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M8.5 8.5a5 5 0 0 1 7 0M6 6a8.5 8.5 0 0 1 12 0M8.5 15.5a5 5 0 0 0 7 0" />
    </svg>
  );
}
