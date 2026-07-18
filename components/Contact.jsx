import Logo from "./Logo";
import {
  PHONE_DISPLAY,
  WHATSAPP_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  EMAIL,
} from "./contactInfo";

export default function Contact() {
  return (
    <section className="contact section" id="contato" data-lit>
      <div className="contact-card">
        <div className="contact-main">
          <p className="eyebrow">
            <span className="lamp" aria-hidden="true" />
            Contato
          </p>
          <h2>
            Seu ambiente, <em>mais inteligente</em> a partir de hoje.
          </h2>
          <p className="section-sub">
            Chame no WhatsApp e receba um orçamento sob medida — sem
            compromisso. Pagamento facilitado: PIX, cartão ou dinheiro.
          </p>
          <a
            className="btn btn-gold btn-lg"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.1 4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5v-.5L9.7 8.2c-.2-.4-.4-.4-.6-.4h-.2Z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
          <ul className="contact-links">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-aside" aria-hidden="true">
          <svg viewBox="0 0 220 220" className="contact-house">
            <defs>
              <linearGradient
                id="c-gold"
                gradientUnits="userSpaceOnUse"
                x1="20"
                y1="60"
                x2="210"
                y2="200"
              >
                <stop offset="0" stopColor="#F3D08B" />
                <stop offset="1" stopColor="#9A6B1F" />
              </linearGradient>
            </defs>
            <path d="M30 190 A 96 96 0 0 1 206 178" fill="none" stroke="url(#c-gold)" strokeWidth="1" opacity="0.5" />
            <path d="M40 120 90 78l50 42M52 112v78M128 112v78M40 190h160M150 92h40v98" fill="none" stroke="url(#c-gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="66" y="130" width="34" height="34" fill="rgba(255,201,122,.75)" stroke="url(#c-gold)" strokeWidth="1.4" />
            <rect x="158" y="118" width="24" height="20" fill="rgba(255,201,122,.55)" stroke="url(#c-gold)" strokeWidth="1.4" />
          </svg>
        </div>
      </div>

      <footer className="footer">
        <Logo />
        <p className="footer-tag">Automação comercial e residencial</p>
        <p className="footer-note">
          Orçamento sem compromisso · Garantia dos produtos conforme fabricante
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Tatielly Pereira. Todos os direitos
          reservados.
        </p>
      </footer>
    </section>
  );
}
