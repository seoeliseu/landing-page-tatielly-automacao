export default function Logo({ compact = false }) {
  return (
    <a href="#topo" className="logo" aria-label="Tatielly Pereira — início">
      <svg
        className="logo-mark"
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="lg-gold"
            gradientUnits="userSpaceOnUse"
            x1="8"
            y1="10"
            x2="58"
            y2="58"
          >
            <stop offset="0" stopColor="#F3D08B" />
            <stop offset="0.55" stopColor="#D9A84E" />
            <stop offset="1" stopColor="#9A6B1F" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#lg-gold)" strokeWidth="4">
          {/* barra do T fluindo para o bojo do P, ponta desce em perna reta */}
          <path d="M12 12 H38 a16.2 16.2 0 1 1 -1 32 V58" />
          {/* haste do T — à esquerda do centro, do topo à base */}
          <path d="M29 12 V58" />
          {/* wifi dentro do bojo */}
          <path
            strokeWidth="2.6"
            strokeLinecap="round"
            d="M35.5 25 a9 9 0 0 1 13 0 M38.6 29.2 a4.6 4.6 0 0 1 6.8 0"
          />
        </g>
        <circle cx="42" cy="33" r="2" fill="url(#lg-gold)" />
      </svg>
      {!compact && (
        <>
          <span className="logo-sep" aria-hidden="true" />
          <span className="logo-text">
            <span className="logo-name">Tatielly</span>
            <span className="logo-script">Pereira</span>
          </span>
        </>
      )}
    </a>
  );
}
