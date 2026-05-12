export function LoaderArc() {
  return (
    <div className="flex items-center gap-3">
      <svg className="h-10 w-10" viewBox="0 0 40 40" aria-hidden>
        <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(208,25,25,0.15)" strokeWidth="1" />
        <circle
          cx="20"
          cy="20"
          r="17"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset="30"
        >
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>
      <span className="text-[0.6rem] uppercase tracking-[0.16em] text-muted">Rendering</span>
    </div>
  );
}
