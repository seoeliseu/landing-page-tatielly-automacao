const STEPS = [
  {
    n: "01",
    title: "Visita e diagnóstico",
    text: "Conhecemos o seu espaço e entendemos a sua rotina — sem compromisso.",
  },
  {
    n: "02",
    title: "Projeto sob medida",
    text: "Orçamento claro, item a item, com produtos de marcas confiáveis.",
  },
  {
    n: "03",
    title: "Instalação limpa",
    text: "Aproveitamos a fiação existente sempre que possível. Sem quebra-quebra.",
  },
  {
    n: "04",
    title: "Configuração e treinamento",
    text: "Tudo funcionando no seu celular e na sua voz. Você aprende a usar com a gente.",
  },
];

export default function Process() {
  return (
    <section className="process section" id="processo" data-lit>
      <div className="section-head">
        <p className="eyebrow">
          <span className="lamp" aria-hidden="true" />
          Como funciona
        </p>
        <h2>
          Do primeiro contato ao primeiro <em>“acender as luzes”.</em>
        </h2>
      </div>
      <ol className="steps">
        {STEPS.map((s) => (
          <li className="step" key={s.n}>
            <span className="step-n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
