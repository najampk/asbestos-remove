import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "How to Identify Asbestos in Your Home",
  description:
    "How do you know if your house has asbestos? Narrow it down by property age and material, read the Glasgow housing types, and why a £30 lab test beats guessing.",
  path: "/guides/how-to-identify-asbestos",
});

const schema = articleSchema({
  headline: "How to Tell If You Have Asbestos",
  description:
    "A practical identification guide: reading property age, recognising the common asbestos-containing materials in UK homes and Glasgow housing types, and when to stop looking and get a sample tested.",
  path: "/guides/how-to-identify-asbestos",
  datePublished: "2026-07-18",
  dateModified: "2026-07-21",
});

// The everyday materials, in roughly the order we get asked about them.
const SUSPECTS: { name: string; looks: string }[] = [
  {
    name: "Corrugated cement roofs",
    looks:
      "Grey, wavy sheets on garages, sheds and outbuildings — often moss-covered, often brittle at the fixings. The single most common asbestos material in Scotland.",
  },
  {
    name: "Textured coatings (Artex)",
    looks:
      "Swirled, stippled or combed ceiling finishes, mostly applied from the 1960s to the mid-80s. Asbestos and asbestos-free versions look identical — that's the whole problem.",
  },
  {
    name: "Vinyl floor tiles",
    looks:
      "Thermoplastic tiles, classically 9-inch squares in kitchens, halls and porches, often under later flooring. The black bitumen adhesive beneath can contain asbestos too.",
  },
  {
    name: "Insulating board (AIB)",
    looks:
      "Flat board around fireplaces, in ceilings, partitions, soffits and airing cupboards. Easily mistaken for plasterboard or cement sheet — and usually licensable, which is why guessing here is dangerous.",
  },
  {
    name: "Cement water tanks & flues",
    looks:
      "Grey cold-water tanks in lofts, plus cement flue pipes from boilers and old warm-air systems. Hard, heavy material in the same family as the corrugated roofs.",
  },
  {
    name: "Pipe & boiler lagging",
    looks:
      "Flaky, fibrous, often whitewashed wrap on old heating pipework — common around back boilers and in cellars. High-risk, strictly licensable: don't touch it, don't sample it, just close the door.",
  },
  {
    name: "Rope seals & gaskets",
    looks:
      "White or grey rope around flue joints, boiler doors and fire surrounds. Small quantities, easily crumbled, routinely missed in DIY refits.",
  },
  {
    name: "Soffits, fascias & cladding",
    looks:
      "Flat cement or AIB boards under the eaves and on gable ends — weathered grey, sometimes painted many times over. Very common on 1960s–70s housing.",
  },
];

const FAQS: FAQ[] = [
  {
    question: "How do I know if my house in Glasgow has asbestos?",
    answer:
      "Two dates tell you most of it: when the building went up, and when it was last properly refitted. Anything built or refurbished before 2000 may contain asbestos; after that, you're clear. In Glasgow the usual finds are Artex ceilings and vinyl floor tiles from 1960s–80s tenement refits, asbestos cement roofs on outhouses, bin stores and garage courts across the post-war schemes, and insulating board around risers and airing cupboards in the 60s and 70s high flats. If you're in a factored block or a housing association property, ask for the asbestos register before anything else — the survey may already exist. Beyond that, nothing settles it but a lab test, at around £30 a sample.",
  },
  {
    question: "Is asbestos dangerous if I just leave it alone?",
    answer:
      "Usually not. Asbestos releases fibres when it's cut, broken, drilled or badly weathered — an intact cement roof or a sound, painted Artex ceiling poses very little day-to-day risk. The sensible response to asbestos in good condition is often to manage it and plan removal around your next renovation, not to panic. The one thing never worth doing is disturbing it to 'check'.",
  },
  {
    question: "My house was built in the 1980s — do I definitely have asbestos?",
    answer:
      "Not definitely, but it's a live possibility anywhere pre-2000. Blue and brown asbestos were banned in 1985, white asbestos not until November 1999, and builders used up existing stock. An 80s house is less likely to have lagging or insulating board than a 60s one, but cement products, floor tiles and textured coatings all remained in circulation.",
  },
  {
    question: "Can I use a home asbestos testing kit?",
    answer:
      "The kits themselves are just a sample bag and a paid-for lab analysis, and the labs are usually legitimate. The weak point is you taking the sample: doing it dry, without wetting the material, PPE or sealing the break afterwards, creates exactly the fibre release you're trying to avoid. For hard cement a careful homeowner can manage it; for anything soft, crumbly or board-like, let a professional take the sample.",
  },
  {
    question: "What does asbestos in Artex look like?",
    answer:
      "Exactly like Artex without asbestos in it — same swirls, same stipple, same colour. No one can tell by looking, including surveyors. The age of the coating is a clue (pre-1985 is higher probability) but the only answer that means anything is a lab result, which costs around £30 and takes a few days.",
  },
  {
    question: "Why does Glasgow have so much asbestos?",
    answer:
      "Timing. The city's biggest building booms — the post-war peripheral schemes, the 60s and 70s high flats, decades of tenement refurbishment — landed exactly in the years asbestos was cheapest and most popular. Add shipbuilding, which used it by the tonne, and Glasgow's building stock carries more than its share. It's also why the west of Scotland has well-developed testing and disposal routes.",
  },
];

export default function HowToIdentifyAsbestosPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Guides & Advice"
        title="How to Tell If You Have Asbestos"
        intro="You can't confirm asbestos by eye — nobody can, including us. But property age and material type narrow it down fast, and a £30 lab test settles it for certain. Here's how to read the clues without disturbing anything."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          {
            label: "How to Identify Asbestos",
            href: "/guides/how-to-identify-asbestos",
          },
        ]}
      >
        <p className="font-mono text-xs uppercase tracking-wider text-white/60">
          Last updated July 2026 · If in doubt, don&rsquo;t touch it
        </p>
      </PageHero>

      {/* Property age */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="First Question"
            title="Start with the year, not the material"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              The UK banned blue and brown asbestos in 1985 and white asbestos
              in November 1999. So the first useful fact about any suspect
              material isn&rsquo;t its colour or texture — it&rsquo;s the age
              of the building around it. A property built after 2000 is, for
              practical purposes, clear. Anything earlier deserves a closer
              look, and the sweet spot for asbestos use runs from the 1950s to
              the early 1980s, when it went into roofs, floors, ceilings,
              boards and boilers as a matter of routine.
            </p>
            <p>
              Two wrinkles keep the date test honest. Builders used up old
              stock after each ban, so a 1987 extension can still hide
              pre-ban materials. And renovation cuts the other way — a 1930s
              flat refitted in 2010 may have had every scrap professionally
              removed. The year tells you where to look, not what you&rsquo;ll
              find.
            </p>
          </div>
        </Container>
      </section>

      {/* Glasgow housing stock */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Glasgow"
            title="How do I know if my house in Glasgow has asbestos?"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Glasgow housing sorts into a handful of recognisable types, and
              each carries its own signature. Pre-1919 sandstone tenements were
              built long before asbestos went anywhere near a building site, so
              nothing in the original fabric is a worry — it arrives with the
              later work instead. Almost every close in the city has been
              rewired, replumbed, refloored or re-ceilinged somewhere between
              1960 and 1990, and that&rsquo;s where the Artex ceilings, the
              cement flue from a back boiler, the 9-inch floor tiles in the
              kitchen and the cement soffits at the top landing come from.
            </p>
            <p>
              The inter-war and post-war stock is more predictable. Four-in-a-block
              and cottage flats from the 1930s to the 50s, and the peripheral
              schemes built through the 50s and 60s — Drumchapel, Easterhouse,
              Castlemilk, Pollok — used asbestos cement outdoors as a matter of
              routine: outhouse and bin store roofs, coal sheds, garage courts,
              soffits under the eaves and cladding on gable ends. Most of it is
              still there, weathered grey and mossy, and most of it is
              lower-risk bonded material in reasonable condition.
            </p>
            <p>
              The 60s and 70s high flats and deck-access blocks are where we ask
              people to be most careful. Insulating board turns up around
              service risers, ducts, airing cupboards and behind panel heaters,
              and it reads as ordinary grey board from a stepladder — which is
              exactly how it ends up cut through during a DIY kitchen refit.
              That material is licensable, high-risk work. If you find flat grey
              board in a flat of that era, stop and get it identified before
              anything else happens.
            </p>
            <p>
              One local shortcut worth knowing: in a factored block, a housing
              association property or any building with common parts, the
              dutyholder must already hold an asbestos register under Regulation
              4 of the Control of Asbestos Regulations 2012. Phone the factor or
              landlord and ask for it before you drill the close wall or lift a
              hall floor — the survey may have been done years ago and the
              answer may already be sitting in a filing cabinet with your
              building&rsquo;s name on it.
            </p>
          </div>
        </Container>
      </section>

      {/* Usual suspects */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Know the Line-Up"
            title="The usual suspects, and what they look like"
            intro="Eight materials account for nearly every asbestos enquiry we take. Read this list against your own property and you'll usually know whether you have a question worth testing."
          />
          <div className="mt-10 grid gap-x-10 gap-y-7 md:grid-cols-2">
            {SUSPECTS.map((item) => (
              <div key={item.name}>
                <h3 className="font-display text-lg font-bold text-brand-950">
                  {item.name}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.looks}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl leading-relaxed text-slate-600">
            Want this as a walkthrough instead of a list? Our{" "}
            <a
              href="/clarity-check"
              className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
            >
              Clarity Check explorer
            </a>{" "}
            maps the same materials onto a typical property, room by room.
          </p>
        </Container>
      </section>

      {/* Why eyes aren't enough */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Hard Limit"
            title="Why looking will only ever get you to 'maybe'"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Asbestos fibres are invisible at any scale your eyes work at,
              and the materials they hide in were made to look like their
              harmless equivalents. The confusion that matters most is
              insulating board versus plasterboard versus cement sheet: three
              materials that read as &ldquo;grey board&rdquo; from a
              stepladder, one of which is licensable, high-risk work. Decades
              of paint finish the disguise.
            </p>
            <p>
              Certainty comes from polarised light microscopy in a UKAS
              accredited lab — around £30 a sample, results in days. That
              number is worth holding on to whenever a decision feels
              expensive: nobody should be pricing removal, and nobody should
              be relaxing either, on the strength of a squint at a ceiling.
              We take samples under controlled conditions as part of our{" "}
              <a
                href="/services/asbestos-surveys"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                survey service
              </a>
              , sealing the sample point behind us.
            </p>
          </div>
        </Container>
      </section>

      {/* If you've found it */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Right Now"
            title="If you think you've just found some"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Stop the work. Don&rsquo;t drill it, sand it, scrape it,
              pressure-wash it or sweep up around it — and don&rsquo;t run a
              domestic vacuum over the dust, which turns the cleaner into a
              fibre distributor. Close the room off if you can, leave the
              material exactly as it sits and take a photo from a distance
              for whoever you call next.
            </p>
            <p>
              Then get it identified before anyone makes decisions. If the
              material is intact, you have time — asbestos in good condition
              isn&rsquo;t an emergency, it&rsquo;s a fact-finding exercise.
              If it&rsquo;s broken or crumbling, keep people out of the room
              and phone us the same day; advice costs nothing and we&rsquo;ll
              tell you honestly whether it&rsquo;s a job for us, a job for
              nobody yet, or a referral to the right specialist.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Identification FAQs"
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      {/* Cross-links */}
      <section className="py-16 sm:py-20">
        <Container>
          <RelatedLinks
            title="Next steps"
            links={[
              {
                label: "Asbestos Surveys",
                href: "/services/asbestos-surveys",
                description:
                  "Professional sampling and surveys with UKAS accredited lab analysis.",
              },
              {
                label: "Clarity Check",
                href: "/clarity-check",
                description:
                  "Explore a typical property and see where asbestos usually hides.",
              },
              {
                label: "Asbestos Removal Costs",
                href: "/guides/asbestos-removal-cost",
                description:
                  "If the test comes back positive — what dealing with it costs.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
