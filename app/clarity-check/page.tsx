import { Banknote, Building2, FileSearch, Home, KeyRound, Wrench } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ClarityCheck from "@/components/clarity/ClarityCheck";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Glasgow Asbestos Clarity Check", description: "Free 2-minute self-assessment for suspected asbestos in a Glasgow property. Get a clear, safety-first next step — no visual diagnosis and no obligation.", path: "/clarity-check" });

const journeys = [
  { icon: Building2, title: "Renovating a tenement", text: "Understand why the planned work and affected area determine the right survey." },
  { icon: Home, title: "Garage roof or outbuilding", text: "Describe the product, condition and access before arranging removal or disposal." },
  { icon: Wrench, title: "Accidental damage", text: "Get immediate safety guidance before anyone cleans, repairs or re-enters the area." },
  { icon: KeyRound, title: "Buying or selling", text: "Clarify what evidence may support a property decision without overclaiming certainty." },
  { icon: FileSearch, title: "Managing shared premises", text: "Identify the information a landlord, factor or dutyholder may need to maintain." },
  { icon: Banknote, title: "Planning a budget", text: "See the access, condition, quantity and documentation factors that shape a written quote." },
];

const costs = [
  ["Material and condition", "Friability, damage and how the material must be handled."],
  ["Quantity and access", "Area, height, confined spaces, parking, scaffold or specialist access."],
  ["Property use", "Whether the premises remain occupied and how work can be isolated."],
  ["Evidence required", "Surveying, sampling, laboratory analysis and project documentation."],
  ["Removal and disposal", "Containment, labour, packaging, transport and authorised disposal."],
  ["Reinstatement", "Whether making good or replacement materials are included or separately arranged."],
];

export default function ClarityCheckPage() {
  return <><PageHero eyebrow="Free safety-first guidance" title="Glasgow Asbestos Clarity Check" intro="Answer a few questions to understand the safest likely next step. The check never identifies asbestos from appearance and never replaces a suitable survey or risk assessment." crumbs={[{ label: "Home", href: "/" }, { label: "Clarity Check", href: "/clarity-check" }]} /><section className="py-16 sm:py-20"><Container className="max-w-5xl"><ClarityCheck /></Container></section><section className="bg-white py-16 sm:py-20"><Container><SectionHeading eyebrow="Built around real decisions" title="Start with what you need to achieve" intro="Customers should not need to understand industry terminology before asking for help." align="center" /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{journeys.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-line bg-surface p-6"><Icon className="h-6 w-6 text-eco-700" aria-hidden="true" /><h3 className="mt-4 font-display text-lg font-bold text-brand-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div></Container></section><section className="py-16 sm:py-20"><Container><SectionHeading eyebrow="Transparent pricing" title="What shapes an asbestos quote" intro="We do not give a misleading instant price. A clear written quote should reflect the actual material, task, access and documentation required." /><dl className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{costs.map(([term, detail]) => <div key={term} className="rounded-2xl border border-line bg-white p-5 shadow-card"><dt className="font-display font-bold text-brand-950">{term}</dt><dd className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</dd></div>)}</dl></Container></section></>;
}
