"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleAlert, FileText, Phone, Printer, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

type Answers = { postcode: string; property: string; goal: string; material: string; condition: string };
const INITIAL: Answers = { postcode: "", property: "", goal: "", material: "", condition: "" };

const properties = ["Glasgow tenement or flat", "House or bungalow", "Garage or outbuilding", "Commercial premises", "Industrial site", "Communal area"];
const goals = ["Planning renovation or demolition", "Buying or selling", "Managing a property", "Material has been damaged", "Removal or disposal", "Not sure — I need guidance"];
const materials = ["Textured coating / Artex", "Cement roof, panel or gutter", "Floor tile or bitumen adhesive", "Insulation board or fire panel", "Pipe or boiler insulation", "Sprayed or loose insulation", "Unknown material"];
const conditions = ["Intact and undisturbed", "Weathered or slightly damaged", "Broken, crumbling or producing dust", "I cannot safely tell"];

function outcome(a: Answers) {
  const urgent = a.condition.startsWith("Broken") || a.goal.startsWith("Material");
  const potentiallyLicensed = a.material.includes("Pipe") || a.material.includes("Sprayed") || a.material.includes("Insulation board");
  if (urgent) return { tone: "danger", title: "Stop work and isolate the area", body: "Do not touch, sweep or vacuum the material. Keep people away and call for case-specific guidance. If dust or debris is present, do not attempt to clean it yourself." };
  if (potentiallyLicensed) return { tone: "warn", title: "A survey and scope decision should come first", body: "The material described can involve higher-risk work. Its type, condition and the proposed task must be assessed. If licensed work is required, we will say so and help you identify the correct next step." };
  if (a.goal.includes("renovation") || a.goal.includes("Buying")) return { tone: "info", title: "Start with the right survey", body: "Before work or a property decision proceeds, appropriate inspection and, where required, sampling can establish what is present and what must happen next." };
  return { tone: "success", title: "We can help clarify the next step", body: "Your answers suggest an initial conversation is appropriate. We will confirm whether you need sampling, a survey, management advice, removal or a different contractor." };
}

export default function ClarityCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(INITIAL);
  const result = useMemo(() => outcome(answers), [answers]);
  const reference = useMemo(() => {
    const seed = [answers.postcode, answers.property, answers.goal, answers.material].join("|");
    let hash = 0;
    for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
    return `ARC-${hash.toString(36).toUpperCase().padStart(6, "0").slice(0, 6)}`;
  }, [answers]);
  const canContinue = step === 0 ? answers.postcode.trim().length >= 3 && answers.property : step === 1 ? answers.goal : step === 2 ? answers.material && answers.condition : true;
  const enquiry = encodeURIComponent(`Clarity Check ${reference}\nPostcode: ${answers.postcode}\nProperty: ${answers.property}\nReason: ${answers.goal}\nSuspected material: ${answers.material}\nCondition: ${answers.condition}`);

  function choice(key: keyof Answers, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  if (step === 3) {
    const colour = result.tone === "danger" ? "border-danger/30 bg-danger/5" : result.tone === "warn" ? "border-amber-300 bg-amber-50" : "border-eco-500/30 bg-eco-500/5";
    return (
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card-hover" aria-live="polite">
        <div className="gradient-hero p-6 text-white sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-eco-400">Your clarity summary · {reference}</p>
          <h2 className="mt-3 font-display text-3xl font-bold">A clearer, safer next step</h2>
          <p className="mt-3 max-w-2xl text-white/80">This is guidance, not an asbestos identification, survey or risk assessment.</p>
        </div>
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className={`rounded-2xl border p-5 ${colour}`}>
              <CircleAlert className="h-6 w-6 text-brand-700" aria-hidden="true" />
              <h3 className="mt-3 font-display text-xl font-bold text-brand-950">{result.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{result.body}</p>
            </div>
            <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {Object.entries({ Postcode: answers.postcode.toUpperCase(), Property: answers.property, Reason: answers.goal, Material: answers.material, Condition: answers.condition }).map(([term, value]) => <div key={term} className="rounded-xl bg-surface p-4"><dt className="font-mono text-xs uppercase tracking-wider text-slate-600">{term}</dt><dd className="mt-1 font-medium text-brand-950">{value}</dd></div>)}
            </dl>
          </div>
          <aside className="rounded-2xl bg-brand-950 p-5 text-white">
            <ShieldCheck className="h-7 w-7 text-eco-400" aria-hidden="true" />
            <h3 className="mt-3 font-display text-xl font-bold">Send this to our Glasgow team</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">We’ll review your answers and explain what information or visit is needed before pricing work.</p>
            <div className="mt-5 grid gap-3">
              <Link href={`/contact?clarity=${enquiry}#quote-form`} className="gradient-cta flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"><FileText className="mr-2 h-4 w-4" aria-hidden="true" /> Request guidance</Link>
              <a href={BUSINESS.phoneHref} className="flex min-h-12 items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold"><Phone className="mr-2 h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phoneDisplay}</a>
              <button type="button" onClick={() => window.print()} className="flex min-h-12 items-center justify-center rounded-full text-sm font-semibold text-white/80 hover:bg-white/10"><Printer className="mr-2 h-4 w-4" aria-hidden="true" /> Print summary</button>
            </div>
          </aside>
        </div>
        <div className="border-t border-line px-6 py-4 sm:px-8"><button type="button" onClick={() => setStep(0)} className="text-sm font-semibold text-brand-700 hover:text-brand-950">Start again</button></div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card-hover">
      <div className="border-b border-line bg-surface px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between gap-4"><p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-700">Step {step + 1} of 3</p><p className="text-sm text-slate-600">About 2 minutes</p></div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-gradient-to-r from-brand-700 to-eco-500 transition-[width]" style={{ width: `${((step + 1) / 3) * 100}%` }} /></div>
      </div>
      <div className="p-6 sm:p-8">
        {step === 0 && <fieldset><legend className="font-display text-2xl font-bold text-brand-950">Where is the property?</legend><p className="mt-2 text-slate-600">We use the postcode only to understand coverage; this check is not submitted until you choose to contact us.</p><label htmlFor="clarity-postcode" className="mt-6 block text-sm font-semibold text-brand-950">Property postcode</label><input id="clarity-postcode" autoComplete="postal-code" value={answers.postcode} onChange={(e) => choice("postcode", e.target.value)} className="mt-2 min-h-12 w-full max-w-sm rounded-xl border border-line px-4 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="e.g. G12 8QQ" /><ChoiceGrid label="Property type" options={properties} value={answers.property} onChange={(v) => choice("property", v)} /></fieldset>}
        {step === 1 && <fieldset><legend className="font-display text-2xl font-bold text-brand-950">What are you trying to do?</legend><p className="mt-2 text-slate-600">Choose the closest match. You can add detail when you contact the team.</p><ChoiceGrid label="Reason for enquiry" options={goals} value={answers.goal} onChange={(v) => choice("goal", v)} /></fieldset>}
        {step === 2 && <div className="grid gap-8 lg:grid-cols-2"><fieldset><legend className="font-display text-2xl font-bold text-brand-950">What material do you suspect?</legend><ChoiceGrid label="Suspected material" options={materials} value={answers.material} onChange={(v) => choice("material", v)} compact /></fieldset><fieldset><legend className="font-display text-2xl font-bold text-brand-950">What condition is it in?</legend><ChoiceGrid label="Material condition" options={conditions} value={answers.condition} onChange={(v) => choice("condition", v)} compact /></fieldset></div>}
        <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
          <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="inline-flex min-h-12 items-center px-3 text-sm font-semibold text-slate-600 disabled:invisible"><ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> Back</button>
          <button type="button" disabled={!canContinue} onClick={() => setStep((s) => s + 1)} className="gradient-cta inline-flex min-h-12 items-center rounded-full px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">{step === 2 ? "Show my guidance" : "Continue"}<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}

function ChoiceGrid({ label, options, value, onChange, compact = false }: { label: string; options: string[]; value: string; onChange: (value: string) => void; compact?: boolean }) {
  return <div className="mt-6"><p className="text-sm font-semibold text-brand-950">{label}</p><div className={`mt-3 grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>{options.map((option) => <label key={option} className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${value === option ? "border-brand-500 bg-brand-700/5 text-brand-950 ring-2 ring-brand-500/15" : "border-line text-slate-600 hover:border-brand-500/40"}`}><input type="radio" className="sr-only" name={label} checked={value === option} onChange={() => onChange(option)} /><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${value === option ? "border-brand-700 bg-brand-700 text-white" : "border-slate-600/40"}`}>{value === option && <Check className="h-3 w-3" aria-hidden="true" />}</span><span className="font-medium">{option}</span></label>)}</div></div>;
}
