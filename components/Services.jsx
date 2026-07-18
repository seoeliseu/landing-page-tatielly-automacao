import { WHATSAPP_URL } from "./contactInfo";

export default function Services() {
  return (
    <section className="services section" id="solucoes" data-lit>
      <div className="section-head">
        <p className="eyebrow">
          <span className="lamp" aria-hidden="true" />
          Soluções
        </p>
        <h2>
          Da sala de estar à sala de reunião,
          <br />
          <em>tudo responde a você.</em>
        </h2>
        <p className="section-sub">
          Projetos sob medida, com instalação limpa e controle pelo celular ou
          por voz — Alexa e Google Assistente.
        </p>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <div className="service-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 24 24 10l16 14M12 21v17h24V21" />
              <path d="M21 38v-9h6v9" />
              <path d="M24 4v3" />
            </svg>
          </div>
          <h3>Automação residencial</h3>
          <p className="service-lead">
            Sua casa recebe você com a luz certa, a temperatura certa e a
            segurança ativada.
          </p>
          <ul>
            <li>Iluminação inteligente e cenas personalizadas</li>
            <li>Interruptores e tomadas smart — marcas como Nova Digital</li>
            <li>Cortinas, climatização e TV integradas</li>
            <li>Fechaduras digitais, câmeras e alarmes</li>
          </ul>
        </article>

        <article className="service-card">
          <div className="service-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 42V12h20v30M28 42V22h12v20M4 42h40" />
              <path d="M13 18h4M13 25h4M13 32h4M21 18h2M21 25h2M21 32h2M33 27h3M33 34h3" />
            </svg>
          </div>
          <h3>Automação comercial</h3>
          <p className="service-lead">
            Escritórios, lojas e clínicas com mais controle, menos desperdício e
            uma recepção que impressiona.
          </p>
          <ul>
            <li>Iluminação programada por horário e presença</li>
            <li>Controle de acesso e monitoramento por câmeras</li>
            <li>Climatização automatizada e economia de energia</li>
            <li>Painéis e cenas para ambientes de atendimento</li>
          </ul>
        </article>
      </div>

      <div className="services-cta">
        <a
          className="btn btn-gold"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero um projeto para o meu espaço
        </a>
      </div>
    </section>
  );
}
