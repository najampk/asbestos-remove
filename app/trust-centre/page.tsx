import Link from "next/link";
import { BadgeCheck, Building2, ClipboardCheck, FileCheck2, Scale, ShieldCheck } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Trust Centre | Asbestos Remove Glasgow", description: "Verify the company, understand our asbestos work scope and see the documentation customers should expect.", path: "/trust-centre" });

const proofs = [
  { icon: Building2, title: "Legal identity", text: `${BUSINESS.legalName}, registered in Scotland under company number ${BUSINESS.companyNumber}.` },
  { icon: BadgeCheck, title: "Training", text: "Operatives assigned to asbestos work hold training appropriate to their role. Job-specific competence and supervision remain essential." },
  { icon: Scale, title: "Honest work scope", text: "We perform non-licensed and notifiable non-licensed work. We do not present the company as an HSE-licensed asbestos contractor." },
  { icon: ClipboardCheck, title: "Scope decision first", text: "Material type alone does not decide the work category. Condition, task, duration and likely exposure must be assessed." },
  { icon: FileCheck2, title: "Project records", text: "The applicable quotation, scope, work information and waste records are supplied according to the job." },
  { icon: ShieldCheck, title: "Claims policy", text: "Registration numbers, insurance values, reviews and certification marks are published only after they are verified." },
];

export default function TrustCentrePage() {
  return <><PageHero eyebrow="Evidence before badges" title="Trust Centre" intro="A plain-English view of who we are, what work we do and what customers should expect—without implying licences or certifications we do not hold." crumbs={[{ label: "Home", href: "/" }, { label: "Trust Centre", href: "/trust-centre" }]} /><section className="py-16 sm:py-20"><Container><SectionHeading eyebrow="Our public commitments" title="Clear claims you can understand" /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{proofs.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><Icon className="h-7 w-7 text-eco-700" aria-hidden="true" /><h2 className="mt-4 font-display text-xl font-bold text-brand-950">{title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div></Container></section><section className="bg-white py-16 sm:py-20"><Container className="max-w-4xl"><SectionHeading eyebrow="Documentation" title="What your project pack may contain" intro="The exact documents depend on the survey findings, work category and agreed scope." /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{["Written quotation and defined scope", "Survey or laboratory information where applicable", "Risk assessment and work plan where applicable", "Site and completion records", "Applicable waste documentation", "Recommendations for management or follow-up"].map((item) => <li key={item} className="flex gap-3 rounded-xl border border-line bg-surface p-4 text-sm font-medium text-brand-950"><FileCheck2 className="h-5 w-5 shrink-0 text-eco-700" aria-hidden="true" />{item}</li>)}</ul><p className="mt-8 text-sm leading-relaxed text-slate-600">Need to verify a document or ask about work scope? <Link href="/contact" className="font-semibold text-brand-700 underline underline-offset-2">Contact the Glasgow team</Link>.</p></Container></section></>;
}
