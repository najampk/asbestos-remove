import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import { BUSINESS, ADDRESS_ONE_LINE, OPENING_HOURS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Asbestos Remove Glasgow | Free Quotes 07960 881102",
  titleAbsolute: true,
  description:
    "Get a free asbestos survey or removal quote in Glasgow. Call 07960 881102, email info@asbestosremove.co.uk or use our quick quote form.",
  path: "/contact",
});

const FAQS: FAQ[] = [
  {
    question: "How fast will you respond?",
    answer:
      "We aim to respond to every enquiry within 24 hours, and usually much sooner. For urgent situations, call us directly and we'll advise straight away.",
  },
  {
    question: "Do you charge for quotes?",
    answer:
      "No — quotes are free, fixed and no-obligation. Tell us what you need or book a survey and we'll give you a clear written price.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We're Glasgow-based and cover the surrounding areas, with Scotland-wide coverage for commercial and industrial projects.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get Your Free Asbestos Quote"
        intro="Call, email or use the form below — our phone line is open 24 hours a day, 7 days a week. We'll assess your situation and come back with free, fixed-price advice."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div id="quote-form" className="scroll-mt-24 lg:col-span-3">
            <h2 className="font-display text-2xl font-bold tracking-tight text-brand-950">
              Request a quote
            </h2>
            <p className="mt-2 text-slate-600">
              Fields marked <span className="text-danger" aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required. Tell us what you can see, where it is and whether it has been damaged. Do not disturb it to take measurements or photographs.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>

          {/* Contact details + tip */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="font-display text-xl font-bold text-brand-950">
                Contact details
              </h2>
              <address className="mt-4 space-y-4 text-sm not-italic text-slate-600">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-brand-700"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <span>
                    <span className="block font-medium text-brand-950">Phone</span>
                    {BUSINESS.phoneDisplay}
                  </span>
                </a>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <span>
                    <span className="block font-medium text-brand-950">Email</span>
                    <a
                      href={`mailto:${BUSINESS.emailGeneral}`}
                      className="hover:text-brand-700"
                    >
                      {BUSINESS.emailGeneral}
                    </a>{" "}
                    (general)
                    <br />
                    <a
                      href={`mailto:${BUSINESS.emailDirect}`}
                      className="hover:text-brand-700"
                    >
                      {BUSINESS.emailDirect}
                    </a>{" "}
                    (direct)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <span>
                    <span className="block font-medium text-brand-950">Address</span>
                    {ADDRESS_ONE_LINE}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <span>
                    <span className="block font-medium text-brand-950">Hours</span>
                    {OPENING_HOURS.map((entry) => (
                      <span key={entry.days} className="block">
                        {entry.days}: {entry.hours}
                      </span>
                    ))}
                  </span>
                </div>
              </address>
            </div>

            {/* Location panel (map embed added later) */}
            <div className="containment-grid relative flex min-h-40 items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface p-6 text-center">
              <p className="flex items-center gap-2.5 rounded-full border border-line bg-white/90 px-4 py-2 font-mono text-xs uppercase tracking-wider text-brand-900 shadow-card backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-eco-700" aria-hidden="true" />
                SMK Business Centre · Glasgow G5 8BE
              </p>
            </div>

            {/* Reassurance strip */}
            <p className="text-center font-mono text-xs uppercase tracking-wider text-slate-600">
              Free, fixed quotes · No-obligation advice · Available 24/7
            </p>
          </div>
        </Container>
      </section>

      {/* Short FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Before you get in touch"
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>
    </>
  );
}
