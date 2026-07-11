import Link from "next/link";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "outline" | "outlineLight" | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "gradient-cta text-white shadow-sm hover:shadow-cta",
  outline:
    "border border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white hover:shadow-cta",
  outlineLight:
    "border border-white/70 text-white hover:border-white hover:bg-white/10",
  white:
    "bg-white text-brand-950 shadow-sm hover:bg-white/95 hover:shadow-card-hover",
};

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** Render a plain <a> (e.g. tel: links) instead of next/link. */
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  const classes = clsx(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
