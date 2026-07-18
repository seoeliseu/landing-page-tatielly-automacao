"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "./contactInfo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#demo">Demonstração</a>
          <a href="#processo">Como funciona</a>
          <a href="#contato">Contato</a>
        </nav>
        <a
          className="btn btn-gold nav-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir orçamento
        </a>
      </div>
    </header>
  );
}
