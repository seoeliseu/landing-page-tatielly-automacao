"use client";

import { useEffect } from "react";

/*
 * Acende as seções conforme a página se move: cada [data-lit]
 * ganha a classe "in" ao entrar na viewport (lâmpada do eyebrow
 * acende e o conteúdo revela).
 */
export default function LightsController() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-lit]");
    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return null;
}
