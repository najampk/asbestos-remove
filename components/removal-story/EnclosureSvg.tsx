"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

// Single inline SVG for the removal story (§10.3). Five layer groups
// (g#scene-1 … g#scene-5) share one illustration; each is driven by the section
// scroll progress. GPU-composited opacity/transform only — no layout thrash.
// Decorative: the accessible description lives on the stage wrapper (role="img").

const NAVY = "#071B47";

export default function EnclosureSvg({
  progress,
  animate,
  airflowActive = false,
  className,
}: {
  progress: MotionValue<number>;
  animate: boolean;
  /** Only run the looping airflow dash animation while scene 3 is on screen. */
  airflowActive?: boolean;
  className?: string;
}) {
  // Scene 1 — survey & plan
  const suspectOpacity = useTransform(progress, [0, 0.05, 0.62, 0.74], [0, 1, 1, 0]);
  const planOpacity = useTransform(progress, [0.02, 0.1, 0.18, 0.26], [0, 1, 1, 0.15]);
  const planY = useTransform(progress, [0.02, 0.1], [26, 0]);

  // Scene 2 — the work area seals
  const sheetOpacity = useTransform(progress, [0.18, 0.3, 0.82, 0.9], [0, 1, 1, 0]);
  const sheetY = useTransform(progress, [0.18, 0.32], [-46, 0]);
  const tapeOpacity = useTransform(progress, [0.22, 0.34, 0.84, 0.9], [0, 1, 1, 0]);

  // Scene 3 — dust never escapes
  const mistOpacity = useTransform(progress, [0.4, 0.5, 0.6, 0.68], [0, 1, 1, 0.25]);
  const vacOpacity = useTransform(progress, [0.4, 0.52, 0.85, 0.92], [0, 1, 1, 0]);
  const airOpacity = useTransform(progress, [0.4, 0.46, 0.6, 0.64], [0, 1, 1, 0]);
  const gaugeOpacity = useTransform(progress, [0.42, 0.54, 0.85, 0.92], [0, 1, 1, 0]);
  const needleRotate = useTransform(progress, [0.44, 0.58], [-42, 34]);

  // Scene 4 — controlled removal & decontamination
  const opOpacity = useTransform(progress, [0.62, 0.7, 0.8, 0.86], [0, 1, 1, 0]);
  const opX = useTransform(progress, [0.62, 0.7, 0.8, 0.86], [44, 0, 0, 64]);
  const sackOpacity = useTransform(progress, [0.66, 0.74], [0, 1]);

  // Scene 5 — inspected, documented, done
  const checkOpacity = useTransform(progress, [0.82, 0.9], [0, 1]);
  const docOpacity = useTransform(progress, [0.86, 0.94], [0, 1]);
  const docScale = useTransform(progress, [0.86, 0.94], [0.82, 1]);

  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="story-seal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
        <marker
          id="story-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#1D4ED8" />
        </marker>
      </defs>

      {/* Base room — always visible */}
      <g
        stroke={NAVY}
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      >
        <rect x={140} y={110} width={520} height={390} fill="#0B2A6B" fillOpacity={0.03} />
        <line x1={80} y1={500} x2={720} y2={500} />
        <line x1={140} y1={500} x2={100} y2={540} />
        <line x1={660} y1={500} x2={700} y2={540} />
      </g>

      {/* Scene 1 — suspect material + plan of work */}
      <motion.g id="scene-1-suspect" style={{ opacity: suspectOpacity }}>
        <rect x={228} y={188} width={150} height={110} fill="#DC2626" fillOpacity={0.12} stroke="#DC2626" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
        <line x1={228} y1={188} x2={378} y2={298} stroke="#DC2626" strokeWidth={1} strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        {animate ? (
          <motion.circle
            cx={303}
            cy={243}
            r={10}
            fill="#DC2626"
            animate={{ scale: [1, 1.7, 1], opacity: [0.9, 0.2, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: "303px 243px", transformBox: "view-box" }}
          />
        ) : (
          <circle cx={303} cy={243} r={7} fill="#DC2626" />
        )}
        <circle cx={303} cy={243} r={4} fill="#fff" />
      </motion.g>

      <motion.g id="scene-1-plan" style={{ opacity: planOpacity, y: planY }} stroke={NAVY} strokeWidth={1.5} fill="none" vectorEffect="non-scaling-stroke">
        <rect x={508} y={352} width={112} height={132} rx={6} fill="#F8FAFC" />
        <rect x={548} y={344} width={32} height={16} rx={4} fill="#0B2A6B" fillOpacity={0.15} />
        <line x1={528} y1={388} x2={600} y2={388} />
        <line x1={528} y1={412} x2={600} y2={412} />
        <line x1={528} y1={436} x2={584} y2={436} />
        <line x1={528} y1={460} x2={600} y2={460} />
      </motion.g>

      {/* Scene 2 — polythene sheeting, tape, signage, access point */}
      <motion.g id="scene-2-sheeting" style={{ opacity: sheetOpacity, y: sheetY }}>
        {[150, 252, 354, 456, 558].map((x) => (
          <rect key={x} x={x} y={110} width={98} height={390} fill="#1D4ED8" fillOpacity={0.1} stroke="#1D4ED8" strokeOpacity={0.4} strokeWidth={1} vectorEffect="non-scaling-stroke" />
        ))}
        {/* controlled access zip on the right panel */}
        <line x1={607} y1={120} x2={607} y2={490} stroke={NAVY} strokeWidth={1.5} strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
      </motion.g>

      <motion.g id="scene-2-tape" style={{ opacity: tapeOpacity }}>
        {/* barrier tape */}
        <rect x={150} y={452} width={460} height={16} fill="#d97706" fillOpacity={0.25} stroke="#d97706" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        <line x1={166} y1={452} x2={150} y2={468} stroke="#d97706" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        <line x1={206} y1={452} x2={190} y2={468} stroke="#d97706" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        <line x1={246} y1={452} x2={230} y2={468} stroke="#d97706" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        {/* warning sign */}
        <polygon points="392,60 420,108 364,108" fill="#d97706" fillOpacity={0.18} stroke="#d97706" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
        <line x1={392} y1={76} x2={392} y2={94} stroke="#d97706" strokeWidth={2} vectorEffect="non-scaling-stroke" />
        <circle cx={392} cy={101} r={1.6} fill="#d97706" />
      </motion.g>

      {/* Scene 3 — wet suppression + Class H vacuum + airflow + gauge */}
      <motion.g id="scene-3-mist" style={{ opacity: mistOpacity }} fill="#1D4ED8" fillOpacity={0.5}>
        {[[250, 176], [286, 168], [322, 178], [356, 170], [268, 200], [332, 204], [300, 188]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3} />
        ))}
      </motion.g>

      <motion.g id="scene-3-vacuum" style={{ opacity: vacOpacity }} stroke={NAVY} strokeWidth={1.5} fill="none" vectorEffect="non-scaling-stroke">
        <rect x={168} y={372} width={116} height={120} rx={8} fill="#0B2A6B" fillOpacity={0.06} />
        <rect x={186} y={392} width={80} height={30} rx={4} fill="#1D4ED8" fillOpacity={0.12} />
        {/* hose to the material */}
        <path d="M226 372 C 226 320, 300 320, 303 300" />
        {/* pressure gauge */}
        <motion.g id="scene-3-gauge" style={{ opacity: gaugeOpacity }}>
          <path d="M204 452 A 22 22 0 0 1 248 452" fill="none" stroke={NAVY} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
          <path d="M226 430 A 22 22 0 0 1 248 452" fill="none" stroke="#16A34A" strokeWidth={3} vectorEffect="non-scaling-stroke" />
          <motion.line
            x1={226}
            y1={452}
            x2={226}
            y2={434}
            stroke={NAVY}
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
            style={{ rotate: needleRotate, transformOrigin: "226px 452px", transformBox: "view-box" }}
          />
          <circle cx={226} cy={452} r={2.5} fill={NAVY} />
        </motion.g>
      </motion.g>

      <motion.g id="scene-3-airflow" style={{ opacity: airOpacity }} fill="none" stroke="#1D4ED8" strokeWidth={1.5} vectorEffect="non-scaling-stroke">
        {["M330 250 C 380 260, 300 360, 268 392", "M360 270 C 400 300, 320 380, 276 400"].map((d, i) =>
          animate && airflowActive ? (
            <motion.path
              key={i}
              d={d}
              markerEnd="url(#story-arrow)"
              strokeDasharray="10 8"
              animate={{ strokeDashoffset: [36, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            <path key={i} d={d} markerEnd="url(#story-arrow)" strokeDasharray="10 8" />
          ),
        )}
      </motion.g>

      {/* Scene 4 — operative + red-tagged waste sack */}
      <motion.g id="scene-4-operative" style={{ opacity: opOpacity, x: opX }} stroke={NAVY} strokeWidth={1.5} fill="#0B2A6B" fillOpacity={0.06} vectorEffect="non-scaling-stroke">
        <path d="M430 300 q 34 0 34 40 v 96 h -68 v -96 q 0 -40 34 -40 z" />
        <circle cx={430} cy={276} r={22} fill="#1D4ED8" fillOpacity={0.12} />
        <rect x={418} y={268} width={24} height={12} rx={3} fill="#fff" stroke={NAVY} strokeWidth={1} vectorEffect="non-scaling-stroke" />
      </motion.g>

      <motion.g id="scene-4-sack" style={{ opacity: sackOpacity }}>
        <path d="M356 440 q 40 0 40 0 l 8 56 h -56 l 8 -56 z" fill="#DC2626" fillOpacity={0.14} stroke="#DC2626" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
        <line x1={362} y1={442} x2={390} y2={442} stroke="#DC2626" strokeWidth={3} vectorEffect="non-scaling-stroke" />
        <rect x={366} y={462} width={20} height={12} rx={2} fill="#fff" stroke="#DC2626" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      </motion.g>

      {/* Scene 5 — inspection checklist + consignment note */}
      <motion.g id="scene-5-checklist" style={{ opacity: checkOpacity }} stroke={NAVY} strokeWidth={1.5} fill="none" vectorEffect="non-scaling-stroke">
        <rect x={190} y={196} width={130} height={150} rx={6} fill="#F8FAFC" />
        {[228, 260, 292].map((y) => (
          <g key={y}>
            <path d={`M206 ${y} l 6 6 l 12 -14`} stroke="#16A34A" strokeWidth={2.5} />
            <line x1={236} y1={y} x2={300} y2={y} />
          </g>
        ))}
      </motion.g>

      <motion.g id="scene-5-doc" style={{ opacity: docOpacity, scale: docScale, transformOrigin: "512px 420px", transformBox: "view-box" }} stroke={NAVY} strokeWidth={1.5} fill="none" vectorEffect="non-scaling-stroke">
        <rect x={452} y={344} width={120} height={152} rx={6} fill="#F8FAFC" />
        <line x1={470} y1={372} x2={554} y2={372} />
        <line x1={470} y1={392} x2={554} y2={392} />
        <line x1={470} y1={412} x2={536} y2={412} />
        <circle cx={532} cy={456} r={22} fill="url(#story-seal)" stroke="none" />
        <path d="M522 456 l 6 7 l 13 -15" stroke="#fff" strokeWidth={2.5} fill="none" />
      </motion.g>
    </svg>
  );
}
