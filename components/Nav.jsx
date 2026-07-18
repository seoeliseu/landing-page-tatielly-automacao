"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "./contactInfo";

const LINKS = [
  ["#solucoes", "Soluções"],
  ["#demo", "Demonstração"],
  ["#processo", "Como funciona"],
  ["#contato", "Contato"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Navegação principal">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn-gold nav-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir orçamento
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        id="menu-mobile"
        className={`nav-mobile ${open ? "open" : ""}`}
        aria-label="Menu"
      >
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-mobile-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Pedir orçamento no WhatsApp
        </a>
      </nav>
    </header>
  );
}
