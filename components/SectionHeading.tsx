import { clsx } from "@/lib/clsx";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
}) {
  const Heading = as;
  return (
    <div
      className={clsx(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-wider",
            align === "center" && "justify-center",
          )}
        >
          {align === "center" && (
            <span
              className="gradient-cta h-px w-8 opacity-60"
              aria-hidden="true"
            />
          )}
          <span className="gradient-text">{eyebrow}</span>
          <span
            className="gradient-cta h-px w-8 opacity-60"
            aria-hidden="true"
          />
        </p>
      )}
      <Heading
        className={clsx(
          "font-display font-bold tracking-tight text-brand-950",
          as === "h2" ? "text-3xl sm:text-4xl" : "text-2xl",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed text-slate-600",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
