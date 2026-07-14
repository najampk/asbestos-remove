import { Camera, Phone, ShieldAlert } from "lucide-react";
import Container from "@/components/Container";
import { BUSINESS } from "@/lib/constants";

const steps = [
  { icon: ShieldAlert, title: "Stop and leave it alone", body: "Do not drill, sand, scrape, sweep or break suspected material." },
  { icon: Camera, title: "Photograph it safely", body: "Only take a photo from a safe distance. A photo cannot confirm asbestos, but it helps us guide you." },
  { icon: Phone, title: "Speak to our Glasgow team", body: "Tell us what has happened and we’ll explain the safest next step." },
];

export default function SafetyTriage() {
  return <section aria-labelledby="safety-triage-title" className="bg-brand-950 py-8 text-white sm:py-10"><Container><div className="grid gap-7 lg:grid-cols-[0.8fr_2.2fr] lg:items-center"><div><p className="font-mono text-xs font-semibold uppercase tracking-wider text-eco-400">Need help now?</p><h2 id="safety-triage-title" className="mt-2 font-display text-2xl font-bold">Think you’ve found asbestos?</h2><a href={BUSINESS.phoneHref} className="mt-4 inline-flex min-h-12 items-center rounded-full bg-white px-5 py-3 font-semibold text-brand-950 shadow-sm hover:bg-surface"><Phone className="mr-2 h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phoneDisplay}</a></div><ol className="grid gap-3 sm:grid-cols-3">{steps.map(({ icon: Icon, title, body }, index) => <li key={title} className="rounded-2xl border border-white/15 bg-white/8 p-4"><div className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-eco-400/15 text-eco-400"><Icon className="h-5 w-5" aria-hidden="true" /></span><span className="font-mono text-xs text-white/60">0{index + 1}</span></div><h3 className="mt-3 font-display font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-white/75">{body}</p></li>)}</ol></div></Container></section>;
}
