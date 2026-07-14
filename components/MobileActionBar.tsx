import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function MobileActionBar() {
  return <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 p-2 shadow-[0_-8px_30px_rgb(7_27_71/0.12)] backdrop-blur-md lg:hidden"><div className="mx-auto grid max-w-md grid-cols-2 gap-2"><a href={BUSINESS.phoneHref} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-950 px-3 py-2 text-sm font-semibold text-white"><Phone className="h-4 w-4" aria-hidden="true" /> Call now</a><Link href="/contact#quote-form" className="gradient-cta flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white"><FileText className="h-4 w-4" aria-hidden="true" /> Free quote</Link></div></nav>;
}
