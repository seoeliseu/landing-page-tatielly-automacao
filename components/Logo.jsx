export default function Logo({ compact = false }) {
  return (
    <a href="#topo" className="logo" aria-label="Tatielly Pereira — início">
      <img
        className="logo-mark"
        src="/logo-simbolo.png"
        alt=""
        width="42"
        height="43"
      />
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
