const PILLARS = [
  {
    key: "tecnologia",
    title: "Tecnologia",
    text: "Soluções modernas que facilitam a sua rotina.",
    icon: (
      <path d="M20 6a12 12 0 0 1 12 12c0 5-3 7.5-4.5 10H24.5C23 25.5 20 23 20 18M20 6a12 12 0 0 0-12 12c0 5 3 7.5 4.5 10h3M16 34h8M17.5 39h5" />
    ),
  },
  {
    key: "conforto",
    title: "Conforto",
    text: "Mais comodidade para você e sua família.",
    icon: (
      <path d="M8 22v-8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v8M6 34v-8a3 3 0 0 1 6 0v2h16v-2a3 3 0 0 1 6 0v8M9 34v3M31 34v3M12 28h16" />
    ),
  },
  {
    key: "seguranca",
    title: "Segurança",
    text: "Mais proteção e controle para o seu ambiente.",
    icon: (
      <path d="M20 5l13 5v9c0 8-5.5 13.5-13 16C12.5 32.5 7 27 7 19v-9l13-5ZM14.5 19.5l4 4 7.5-7.5" />
    ),
  },
  {
    key: "eficiencia",
    title: "Eficiência",
    text: "Automação inteligente que gera economia e praticidade.",
    icon: (
      <path d="M8 16a17 17 0 0 1 24 0M12.5 21.5a10.5 10.5 0 0 1 15 0M17 27a5 5 0 0 1 6 0M20 32.5v.1" />
    ),
  },
  {
    key: "economia",
    title: "Economia",
    text: "Reduza custos com automação e uso consciente.",
    icon: (
      <path d="M15 6v8M25 6v8M13 14h14v6a7 7 0 0 1-14 0v-6ZM20 27v4M20 31a4 4 0 0 1-4 4" />
    ),
  },
];

export default function Pillars() {
  return (
    <section className="pillars" aria-label="Nossos pilares" data-lit>
      <div className="pillars-inner">
        {PILLARS.map((p) => (
          <div className="pillar" key={p.key}>
            <svg viewBox="0 0 40 40" className="pillar-icon" aria-hidden="true">
              {p.icon}
            </svg>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
