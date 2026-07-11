// Shared placeholder shell for M1 route stubs. Real page content lands in M2+.
export default function PageStub({
  eyebrow,
  title,
  note = "Full page content lands in Milestone M2.",
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <section className="containment-grid">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-brand-700">
          <span
            className="gradient-cta h-px w-8 opacity-60"
            aria-hidden="true"
          />
          {eyebrow}
        </p>
        <h1 className="h1-fluid mt-3 max-w-4xl font-display font-bold text-brand-950">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">{note}</p>
      </div>
    </section>
  );
}
