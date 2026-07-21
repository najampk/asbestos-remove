import { Phone, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import Button from "@/components/Button";
import {
  EMERGENCY_LICENSABLE_NOTE,
  EMERGENCY_RESPONSE_COMMITMENT,
  SAME_DAY_SURVEY_COMMITMENT,
} from "@/lib/claims";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Emergency Asbestos Removal Glasgow | 24/7",
  description:
    "Damaged or disturbed asbestos in Glasgow? Our line is answered 24/7. Free advice on making the area safe, same-day surveys and urgent controlled removal.",
  path: "/services/emergency-asbestos-removal",
});

const schema = serviceSchema({
  name: "Emergency Asbestos Removal",
  description:
    "24-hour response to damaged or disturbed asbestos across Glasgow and the west of Scotland — free telephone triage, same-day surveys and urgent controlled removal of non-licensed and NNLW materials.",
  path: "/services/emergency-asbestos-removal",
  serviceType: "Emergency asbestos removal",
});

// What actually gets called in, in roughly the order it happens to people.
const SITUATIONS: { title: string; body: string }[] = [
  {
    title: "A contractor cut into something",
    body: "A joiner drilling through a ceiling, a plumber cutting out an old flue, a kitchen fitter breaking into a wall panel. The tell is fine dust across a room that nobody expected. Stop the trade working, get everyone out and close the door.",
  },
  {
    title: "Storm or wind damage",
    body: "Cement sheets lifted off a garage or outbuilding and broken across a garden or a shared court. Common in the west of Scotland every winter, and the sharp edges and scattered fragments are what make it urgent rather than the roof itself.",
  },
  {
    title: "Fire, flood or escape of water",
    body: "Heat and water both wreck bonded material and can turn a stable sheet or ceiling into something friable. If an insurer is involved, the making-good often covers safe removal — keep everything documented from the start.",
  },
  {
    title: "Break-in or vandalism",
    body: "Forced entry through a cement roof, or sheets smashed on a vacant site. Property owners carry the duty here even when they didn't cause it, so securing the area comes before anything else.",
  },
  {
    title: "Fly-tipped asbestos on your land",
    body: "Bags or broken sheets dumped in a lane, a car park or a back court. Don't move it and don't bin it — it's special waste the moment it lands, and moving it yourself puts your name in the chain rather than the tipper's.",
  },
  {
    title: "Material already disturbed and left",
    body: "Work stopped days ago, the debris is still there and nobody is sure whether it matters. Later isn't the same as fine, but it isn't a crisis either — it usually just needs assessing properly rather than panicking about.",
  },
];

const FAQS: FAQ[] = [
  {
    question: "Is broken asbestos an emergency?",
    answer:
      "It depends on what broke and where. A single cracked cement sheet outdoors, left alone, is not an emergency — cement is bonded material and it releases relatively few fibres unless it's being worked on. Dust through an occupied room after someone cut into a ceiling is a different matter, and so is anything crumbly, fibrous or lagging-like at any time. The rule that covers both: stop, keep people out, don't clean up, and phone for advice before deciding which of the two you've got.",
  },
  {
    question: "It's the middle of the night — should I call now?",
    answer: `Yes, if material has been damaged and people are in the building. The line on ${BUSINESS.phoneDisplay} is answered around the clock and the advice costs nothing. Plenty of night calls end with us telling someone to shut a door, keep everybody out until morning and ring back at eight — which is a completely legitimate outcome and a lot better than lying awake or, worse, getting the hoover out.`,
  },
  {
    question: "Should I clean up the dust while I wait?",
    answer:
      "No. This is the single most common way a small problem becomes an expensive one. Don't sweep, don't dry-brush, and above all don't use a domestic vacuum — the filter passes asbestos fibres straight back into the room and turns your cleaner into a contaminated item that has to be disposed of as well. Leave it exactly as it is, close the room off, and let it be dealt with under controlled conditions.",
  },
  {
    question: "What does emergency asbestos removal cost?",
    answer:
      "It's quoted the same way planned work is: we tell you the figure before we travel and it's fixed, so an urgent job never becomes an open cheque. The variables are the same too — material, condition, quantity and access. Telephone advice and triage cost nothing at any hour, and if what you need is reassurance rather than a crew, we'll say so instead of selling you a visit.",
  },
  {
    question: "Someone has fly-tipped asbestos on my property — what do I do?",
    answer:
      "Leave it where it is, keep people and pets away, and photograph it from a distance. Then report it to your local council, which is what triggers any enforcement, and speak to us about collection. Don't move it into a skip or a bin: asbestos is special waste in Scotland and the duty of care under the Environmental Protection Act 1990 attaches to whoever handles it next. Collected properly, it leaves on a consignment note with a licensed facility at the other end.",
  },
  {
    question: "Can you make an area safe without removing the asbestos yet?",
    answer:
      "Often that's exactly the right first move. Sealing off a room, restricting access, covering or containing damaged material and getting the air-tight decision made calmly beats rushing a removal at 2am with the wrong kit. Making safe buys you time; it doesn't cost you the option of doing the full job properly a day or a week later, once everyone knows what the material actually is.",
  },
];

export default function EmergencyAsbestosRemovalPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Services"
        title="Emergency Asbestos Removal in Glasgow"
        intro="Asbestos damaged or disturbed? Stop work, keep people out of the area and don't clean up. Our Glasgow line is answered 24 hours a day — advice and triage are free, and we prioritise disturbed material over planned work."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          {
            label: "Emergency Asbestos Removal",
            href: "/services/emergency-asbestos-removal",
          },
        ]}
      >
        <Button href={BUSINESS.phoneHref} variant="white" external>
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {BUSINESS.phoneDisplay} now
        </Button>
      </PageHero>

      {/* Right now */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="First Five Minutes"
            title="What to do right now"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              <strong className="text-brand-950">Stop the work.</strong> If a
              trade is mid-job, they stop now — not at the end of the task, not
              once this bit is finished. Every further minute of cutting,
              drilling or scraping adds to what&rsquo;s in the air.
            </p>
            <p>
              <strong className="text-brand-950">Get people out and shut the door.</strong>{" "}
              Move everyone, including pets, out of the room or the immediate
              area, close it off and keep it closed. If dust has travelled,
              treat the whole route as part of the area rather than just the
              room it started in.
            </p>
            <p>
              <strong className="text-brand-950">Don&rsquo;t clean up.</strong>{" "}
              No sweeping, no dry-brushing, no domestic vacuum, no damp cloth
              across a dusty surface. Cleaning up is the instinct that turns
              one contaminated room into several, and it destroys the evidence
              of what happened along the way.
            </p>
            <p>
              <strong className="text-brand-950">
                Leave clothing and footwear where they are.
              </strong>{" "}
              Anyone who was in the room should avoid walking dust through the
              rest of the building. Bag nothing, brush nothing down — we&rsquo;ll
              tell you how to handle it when you call.
            </p>
            <p>
              <strong className="text-brand-950">
                Photograph it from a distance, then phone.
              </strong>{" "}
              A picture from the doorway helps us judge the material and the
              scale before anyone travels. Then ring{" "}
              <a
                href={BUSINESS.phoneHref}
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                {BUSINESS.phoneDisplay}
              </a>{" "}
              and tell us plainly what happened. There is no version of this
              where being straight about it makes things worse for you.
            </p>
          </div>
        </Container>
      </section>

      {/* What counts */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The Call-Outs"
            title="What people actually ring us about"
            intro="Not everything urgent-feeling is an emergency, and not everything that looks minor is safe. These are the situations we get called to most, and what matters in each."
          />
          <div className="mt-10 grid gap-x-10 gap-y-7 md:grid-cols-2">
            {SITUATIONS.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg font-bold text-brand-950">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Response */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="How We Respond"
            title="A 24-hour line answered by people who do the work"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>{EMERGENCY_RESPONSE_COMMITMENT}</p>
            <p>{SAME_DAY_SURVEY_COMMITMENT}</p>
            <p>
              From there it runs in the usual order, just compressed: identify
              the material, make the area safe, remove it under controlled
              conditions — protected work area, wet suppression, Class H
              vacuums, full decontamination — and consign the waste to a
              licensed facility with the paperwork in your name. An emergency
              changes the timescale, not the method. Anyone offering to skip
              steps because it&rsquo;s urgent is offering you a bigger problem
              later.
            </p>
          </div>
        </Container>
      </section>

      {/* Honest limits */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Straight Answer"
            title="When it's not our job — even at 3am"
          />
          <p className="mt-8 leading-relaxed text-slate-600">
            {EMERGENCY_LICENSABLE_NOTE}
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            If you want to know in advance which side of that line your
            building sits on, our guide to{" "}
            <a
              href="/guides/licensed-vs-non-licensed-asbestos-removal"
              className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
            >
              licensed versus non-licensed work
            </a>{" "}
            sets out the three categories in plain English — worth ten minutes
            on a calm day rather than a bad one.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Emergency asbestos FAQs"
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      {/* Call band */}
      <section className="bg-brand-950 py-14 text-white sm:py-16">
        <Container className="max-w-4xl text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Asbestos disturbed right now?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/75">
            Don&rsquo;t clean it up and don&rsquo;t guess. Tell us what
            happened and we&rsquo;ll talk you through the next ten minutes — at
            any hour, at no cost.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={BUSINESS.phoneHref} variant="white" external>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {BUSINESS.phoneDisplay}
            </Button>
            <Button href="/contact#quote-form" variant="outlineLight">
              Send details instead
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Cross-links */}
      <section className="py-16 sm:py-20">
        <Container>
          <RelatedLinks
            title="Once the immediate risk is handled"
            links={[
              {
                label: "Asbestos Surveys",
                href: "/services/asbestos-surveys",
                description:
                  "Same-day sampling and full surveys with UKAS-accredited analysis.",
              },
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description:
                  "Planned, controlled removal of non-licensed and NNLW materials.",
              },
              {
                label: "Asbestos Disposal",
                href: "/services/asbestos-disposal",
                description:
                  "Collection and certified disposal with the consignment note handled.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
