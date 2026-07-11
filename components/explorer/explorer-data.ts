// components/explorer/explorer-data.ts
// Single source of truth for the "Where Asbestos Hides" Property Explorer (§9.2).
// `id` doubles as the quote-form prefill key (?material=<id>). Coordinates are in
// the SVG viewBox space (0 0 1200 800) and position the hotspot over its feature.

export type RiskLevel = "lower" | "moderate" | "higher";

export interface AsbestosHotspot {
  id: string;
  label: string;
  location: string;
  era: string;
  risk: RiskLevel;
  summary: string;
  disturbedBy: string[];
  advice: string;
  serviceLink: "/services/asbestos-surveys" | "/services/asbestos-removal";
  x: number;
  y: number;
}

export const RISK_LABEL: Record<RiskLevel, string> = {
  lower: "Lower risk",
  moderate: "Moderate risk",
  higher: "Higher risk",
};

export const HOTSPOTS: AsbestosHotspot[] = [
  {
    id: "artex-ceiling",
    label: "Textured (Artex) Ceiling",
    location: "Living room & hallway ceilings",
    era: "Common in homes decorated 1960s–1990s",
    risk: "moderate",
    summary:
      "Textured coatings applied before the mid-1980s often contain white asbestos. Safe if undisturbed and in good condition — the risk comes from sanding, drilling or scraping.",
    disturbedBy: ["Sanding", "Drilling", "Removing coving", "Fitting downlights"],
    advice: "Never sand or scrape a textured ceiling before it has been tested.",
    serviceLink: "/services/asbestos-surveys",
    x: 275,
    y: 471,
  },
  {
    id: "garage-roof",
    label: "Garage & Shed Roof",
    location: "Detached garage / outbuilding",
    era: "Built 1950s–1980s",
    risk: "moderate",
    summary:
      "Corrugated asbestos cement was the standard garage roofing material for decades. Weathering and moss growth degrade the surface over time; broken or drilled sheets release fibres.",
    disturbedBy: ["Breakage", "Drilling", "Pressure-washing", "Demolition"],
    advice: "Never pressure-wash or break up a cement roof — quote removal instead.",
    serviceLink: "/services/asbestos-removal",
    x: 1010,
    y: 372,
  },
  {
    id: "vinyl-floor-tiles",
    label: "Vinyl Floor Tiles & Adhesive",
    location: "Kitchen, hallway, under carpets",
    era: "Laid 1950s–1980s",
    risk: "lower",
    summary:
      "Older thermoplastic tiles and the black bitumen adhesive beneath them frequently contain asbestos. Low risk while intact and covered.",
    disturbedBy: ["Lifting", "Grinding", "Floor levelling"],
    advice:
      "If tiles crack or lift during renovation, stop and test before continuing.",
    serviceLink: "/services/asbestos-surveys",
    x: 275,
    y: 701,
  },
  {
    id: "pipe-lagging",
    label: "Pipe & Boiler Lagging",
    location: "Airing cupboard, cellar, behind boiler",
    era: "Installed pre-1980s",
    risk: "higher",
    summary:
      "Thermal lagging is among the most hazardous asbestos materials and is licensable — removal legally requires an HSE licensed contractor. Often hidden under later insulation.",
    disturbedBy: ["Plumbing work", "Boiler replacement", "Any contact"],
    advice:
      "Do not touch suspect lagging under any circumstances — we'll test it and help you arrange licensed removal.",
    serviceLink: "/services/asbestos-surveys",
    x: 600,
    y: 535,
  },
  {
    id: "aib-panels",
    label: "Airing Cupboard / Ceiling Panels (AIB)",
    location: "Airing cupboards, ceiling hatches, partition walls",
    era: "Built 1945–1985",
    risk: "higher",
    summary:
      "Asbestos insulating board looks like ordinary board but releases fibres readily when cut or broken. Most AIB work is licensable and requires an HSE licensed contractor.",
    disturbedBy: ["Drilling", "Screwing", "Removing panels", "Loft hatch use"],
    advice:
      "Treat any unidentified board in a pre-1985 home as suspect until tested — we'll identify it and advise on the compliant route.",
    serviceLink: "/services/asbestos-surveys",
    x: 560,
    y: 355,
  },
  {
    id: "soffits-fascias",
    label: "Soffits, Fascias & Guttering",
    location: "Roofline exterior",
    era: "Fitted 1950s–1980s",
    risk: "lower",
    summary:
      "Asbestos cement roofline products are common and low risk while weather-sealed and intact. Usually addressed during window or roofline replacement.",
    disturbedBy: ["Roofline replacement", "Drilling for fixtures"],
    advice:
      "Tell your roofline installer the age of the property — test before replacement.",
    serviceLink: "/services/asbestos-surveys",
    x: 735,
    y: 250,
  },
  {
    id: "cold-water-tank",
    label: "Cold Water Tank",
    location: "Loft",
    era: "Installed pre-1980s",
    risk: "lower",
    summary:
      "Older loft water tanks were commonly made from asbestos cement. Stable, but must be disposed of correctly when plumbing is upgraded.",
    disturbedBy: ["Tank replacement", "Loft conversion"],
    advice:
      "Never cut up an old tank to get it through the hatch — we remove and consign it whole.",
    serviceLink: "/services/asbestos-removal",
    x: 295,
    y: 224,
  },
  {
    id: "boiler-flue",
    label: "Boiler Flue & Rope Seals",
    location: "Kitchen / utility, behind appliances",
    era: "Installed pre-1990s",
    risk: "moderate",
    summary:
      "Asbestos cement flue pipes and rope door seals appear in older heating systems. Usually encountered during boiler replacement.",
    disturbedBy: ["Heating engineers", "Appliance removal"],
    advice:
      "Ask your gas engineer to stop work if a suspect flue is found — testing is fast.",
    serviceLink: "/services/asbestos-surveys",
    x: 672,
    y: 615,
  },
];
