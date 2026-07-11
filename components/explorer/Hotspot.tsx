"use client";

import { motion } from "motion/react";
import { clsx } from "@/lib/clsx";
import { RISK_LABEL, type AsbestosHotspot } from "./explorer-data";

const DOT: Record<AsbestosHotspot["risk"], string> = {
  lower: "bg-eco-500",
  moderate: "bg-[#d97706]",
  higher: "bg-danger",
};

const RING: Record<AsbestosHotspot["risk"], string> = {
  lower: "bg-eco-500/40",
  moderate: "bg-[#d97706]/40",
  higher: "bg-danger/40",
};

export default function Hotspot({
  hotspot,
  active,
  reducedMotion,
  onSelect,
  panelId,
}: {
  hotspot: AsbestosHotspot;
  active: boolean;
  reducedMotion: boolean;
  onSelect: (id: string) => void;
  panelId: string;
}) {
  const left = `${(hotspot.x / 1200) * 100}%`;
  const top = `${(hotspot.y / 800) * 100}%`;

  return (
    <button
      type="button"
      onClick={() => onSelect(hotspot.id)}
      aria-expanded={active}
      aria-controls={panelId}
      aria-label={`${hotspot.label} — ${RISK_LABEL[hotspot.risk]}`}
      style={{ left, top }}
      className={clsx(
        "group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-2",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
      )}
    >
      {/* Pulsing ring (idle) */}
      {!reducedMotion && (
        <motion.span
          aria-hidden="true"
          className={clsx(
            "absolute inset-1 rounded-full",
            RING[hotspot.risk],
          )}
          animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      {/* Marker dot */}
      <span
        className={clsx(
          "relative block h-4 w-4 rounded-full border-2 border-white shadow-md transition-transform",
          DOT[hotspot.risk],
          active ? "scale-125 ring-2 ring-white" : "group-hover:scale-110",
        )}
      />
    </button>
  );
}
