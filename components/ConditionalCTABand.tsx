"use client";

import { usePathname } from "next/navigation";
import CTABand from "@/components/CTABand";

export default function ConditionalCTABand() {
  return usePathname() === "/contact" ? null : <CTABand />;
}
