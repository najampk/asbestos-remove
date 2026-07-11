// components/explorer/PropertySvg.tsx
// Hand-authored flat cross-section of a two-storey semi with a detached garage,
// in the "Containment Grid" line style (§9.5). Decorative only — the interactive
// hotspots are real <button>s overlaid by PropertyExplorer. aria-hidden.

const STROKE = "#071B47";

export default function PropertySvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      className={className}
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        stroke={STROKE}
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      >
        {/* Ground line */}
        <line x1={40} y1={720} x2={1180} y2={720} />

        {/* ── HOUSE ─────────────────────────────────────────────── */}
        {/* Body */}
        <rect x={140} y={250} width={660} height={470} fill="#0B2A6B" fillOpacity={0.04} />
        {/* Roof */}
        <polygon points="120,250 470,88 820,250" fill="#0B2A6B" fillOpacity={0.06} />
        {/* Gutter / eaves (soffits & fascias) */}
        <rect x={132} y={244} width={676} height={10} fill="#1D4ED8" fillOpacity={0.1} />

        {/* Floors + interior wall */}
        <line x1={140} y1={460} x2={800} y2={460} />
        <line x1={470} y1={250} x2={470} y2={720} />

        {/* Loft: cold water tank on a platform */}
        <line x1={140} y1={250} x2={800} y2={250} />
        <rect x={250} y={200} width={90} height={50} fill="#1D4ED8" fillOpacity={0.1} />
        <line x1={250} y1={214} x2={340} y2={214} />

        {/* Ground-floor living room: textured (Artex) ceiling band */}
        <rect x={150} y={462} width={310} height={16} fill="#1D4ED8" fillOpacity={0.12} />
        <line x1={168} y1={470} x2={188} y2={470} />
        <line x1={210} y1={470} x2={230} y2={470} />
        <line x1={252} y1={470} x2={272} y2={470} />
        <line x1={294} y1={470} x2={314} y2={470} />
        <line x1={336} y1={470} x2={356} y2={470} />
        <line x1={378} y1={470} x2={398} y2={470} />

        {/* Ground-floor floor band: vinyl tiles */}
        <rect x={150} y={694} width={310} height={24} fill="#1D4ED8" fillOpacity={0.1} />
        <line x1={192} y1={694} x2={192} y2={718} />
        <line x1={234} y1={694} x2={234} y2={718} />
        <line x1={276} y1={694} x2={276} y2={718} />
        <line x1={318} y1={694} x2={318} y2={718} />
        <line x1={360} y1={694} x2={360} y2={718} />
        <line x1={402} y1={694} x2={402} y2={718} />

        {/* First-floor airing cupboard with AIB panels */}
        <rect x={512} y={296} width={96} height={164} fill="#1D4ED8" fillOpacity={0.1} />
        <line x1={512} y1={350} x2={608} y2={350} />
        <line x1={512} y1={404} x2={608} y2={404} />
        <line x1={560} y1={296} x2={560} y2={460} />

        {/* Boiler + flue + lagged pipes (kitchen / utility) */}
        <rect x={630} y={560} width={90} height={110} fill="#1D4ED8" fillOpacity={0.12} />
        <line x1={630} y1={640} x2={720} y2={640} />
        {/* rope-seal door */}
        <rect x={648} y={576} width={54} height={48} fill="none" />
        {/* flue up through the roof */}
        <line x1={675} y1={560} x2={675} y2={250} />
        <line x1={666} y1={560} x2={666} y2={250} />
        {/* lagged pipes running from the boiler */}
        <path d="M630 545 H560 V500" />
        <path d="M600 545 V520 H720" />

        {/* Door + windows for legibility */}
        <rect x={300} y={606} width={70} height={112} fill="none" />
        <rect x={190} y={520} width={70} height={60} fill="none" />
        <rect x={540} y={520} width={70} height={60} fill="none" />
        <rect x={190} y={310} width={70} height={60} fill="none" />

        {/* ── DETACHED GARAGE ───────────────────────────────────── */}
        <rect x={880} y={430} width={260} height={290} fill="#0B2A6B" fillOpacity={0.04} />
        <polygon points="864,430 1010,318 1156,430" fill="#0B2A6B" fillOpacity={0.06} />
        {/* corrugated roof lines */}
        <line x1={900} y1={404} x2={1120} y2={404} />
        <line x1={912} y1={390} x2={1108} y2={390} />
        <line x1={924} y1={376} x2={1096} y2={376} />
        <line x1={936} y1={362} x2={1084} y2={362} />
        {/* garage door */}
        <rect x={922} y={500} width={176} height={220} fill="none" />
        <line x1={922} y1={556} x2={1098} y2={556} />
        <line x1={922} y1={612} x2={1098} y2={612} />
        <line x1={922} y1={668} x2={1098} y2={668} />
      </g>
    </svg>
  );
}
