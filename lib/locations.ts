// lib/locations.ts
// ─────────────────────────────────────────────────────────────────────────────
// Location pages (SPEC.md §7.1). One entry per town we cover from the Glasgow
// base, rendered through components/LocationPage.tsx.
//
// THE RULE THAT MATTERS (SPEC.md §7.1): no thin/doorway duplication — each town
// needs ≥40% unique copy. That is why the local detail below is written town by
// town from its actual building history rather than templated with the name
// swapped out. If you add a town, write it the same way: what was built there,
// when, and what that means for what we find. A page that could have any other
// town's name dropped into it is a page that should not exist.
//
// LEGAL COPY RULE (CLAUDE.md): no page here may claim or imply HSE licensed
// status. Licensing-status sentences come from lib/claims.ts.
// ─────────────────────────────────────────────────────────────────────────────

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface Location {
  /** Route segment — SPEC.md §7.1 pattern `/asbestos-removal-{town}`. */
  slug: string;
  town: string;
  /** Council area, for the coverage line and JSON-LD areaServed. */
  council: string;
  /** ≤60 chars — the layout template appends the brand. */
  metaTitle: string;
  /** 140–160 chars. */
  metaDescription: string;
  /** ≤50-word direct-answer GEO block for the hero. */
  heroIntro: string;
  /** Section heading for the local building-stock prose. */
  stockHeading: string;
  /** The unique local copy. Three to four paragraphs, town-specific. */
  stock: string[];
  /** Getting there / how coverage works for this town. */
  coverage: string;
  faqs: LocationFaq[];
}

export const LOCATIONS: Location[] = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "asbestos-removal-paisley",
    town: "Paisley",
    council: "Renfrewshire",
    metaTitle: "Asbestos Removal Paisley | Free Fixed Quotes",
    metaDescription:
      "Asbestos removal in Paisley and Renfrewshire — garage roofs, Artex, floor tiles and cement sheeting removed under controlled conditions. Free fixed quotes.",
    heroIntro:
      "We cover Paisley and the wider Renfrewshire area from our Glasgow base: garage and outhouse roofs, Artex ceilings, floor tiles and cement sheeting, removed under controlled conditions and consigned to a licensed facility. Non-licensed and NNLW work, quoted free and fixed.",
    stockHeading: "What we find in Paisley properties",
    stock: [
      "Paisley's housing splits sharply, and so does what turns up in it. The Victorian and Edwardian sandstone around the town centre, Castlehead and the Charleston end went up long before asbestos reached a building site, so in those properties the material always arrives with later work — the 1960s to 1980s refits that put Artex on ceilings, thermoplastic tiles down in kitchens and halls, and cement flue pipes out of the back of a boiler.",
      "The post-war schemes are a different and far more predictable story. Ferguslie Park, Foxbar, Gallowhill, Shortroods and the estates around them were built through the 50s and 60s, when asbestos cement was simply what you used for anything that lived outdoors. That means outhouse and drying-area roofs, coal sheds, bin stores, whole garage courts, soffits under the eaves and flat cladding panels on gable ends. Most of it is bonded material in reasonable condition, which is the straightforward end of our work.",
      "Then there's the industrial inheritance. Paisley was a mill town — the Anchor and Ferguslie thread works ran at a scale that's hard to picture now — and the engineering sheds, the Hillington estate and what followed Linwood all used cement sheet roofing by the acre. Older commercial and industrial buildings in the town carry heavier material too: in plant rooms and boiler houses you find pipe lagging and insulating board, which is licensable work and not ours to remove.",
      "One thing that's particular to Paisley is how much of it is flatted and factored. A high proportion of the town's housing sits in closes and blocks with shared roofs, back courts, bin stores and drying areas, which means the material people worry about is often in common parts rather than inside their own four walls. That changes who's responsible and who pays: under Regulation 4 of the Control of Asbestos Regulations 2012 the dutyholder for those areas should already hold an asbestos register, so the first call is usually to your factor rather than to us. It also shapes the job itself — a dense town centre with conservation-area streets, narrow lanes and limited parking is one where access planning genuinely earns its place in the quote.",
    ],
    coverage:
      "Paisley is a short run west from our Tradeston base, so quotes and surveys are usually easy to fit around your day rather than the other way round. We work across Renfrewshire — Johnstone, Linwood, Renfrew, Erskine and Bridge of Weir included — and the rates are the same as they are in Glasgow. Nobody pays a travel premium for living the far side of the M8.",
    faqs: [
      {
        question: "How much does it cost to remove an asbestos garage roof in Paisley?",
        answer:
          "A single garage roof typically runs £400–£800 including disposal and paperwork, with a double or larger roof £700–£1,200 and a full garage demolition £800–£1,500. Condition moves that more than size does: sheets that lift whole are quick, sheets already cracked or patched need slower handling and more wrapping. We quote free and fixed after seeing it, and the figure we agree is the figure on the invoice.",
      },
      {
        question: "Do you charge extra to travel to Paisley?",
        answer:
          "No. Paisley and the rest of Renfrewshire are inside our normal working area and priced exactly as Glasgow jobs are. Where distance genuinely changes a price is the disposal leg on remote rural work — that isn't a factor here, because the licensed facilities we use are all on this side of the country.",
      },
      {
        question: "Can I take asbestos to a recycling centre in Renfrewshire?",
        answer:
          "Check with the council before you load anything, and never turn up on spec. Most household waste recycling centres in the west of Scotland won't take asbestos at all, and the ones that do want it from their own residents only, double-wrapped, in small amounts and booked ahead. Asbestos is special waste in Scotland — it can't go in a skip or a general bin, and the duty of care follows it back to whoever produced it.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "asbestos-removal-hamilton",
    town: "Hamilton",
    council: "South Lanarkshire",
    metaTitle: "Asbestos Removal Hamilton | Free Fixed Quotes",
    metaDescription:
      "Asbestos removal in Hamilton and South Lanarkshire — garage roofs, cement sheeting, Artex and floor tiles removed safely, with certified disposal. Free quotes.",
    heroIntro:
      "We cover Hamilton and South Lanarkshire from our Glasgow base: cement garage roofs, outbuilding sheeting, Artex ceilings and floor tiles, removed under controlled conditions with the disposal paperwork handled. Non-licensed and NNLW work, quoted free and fixed.",
    stockHeading: "What we find in Hamilton properties",
    stock: [
      "Hamilton grew on coal, and the housing that replaced the miners' rows is what we mostly work in now. The interwar and post-war municipal estates — Fairhill, Whitehill, Low Waters, Udston, Eddlewood — were built between the 1930s and the 1960s, and asbestos cement was the standard material for everything that sat outside the front door: outhouse and shed roofs, coal bunkers, communal garage blocks, soffits, and flat panels on gable ends and porches.",
      "Inside, the picture follows the refit rather than the build. Ceilings across the town were skimmed in textured coating from the mid-60s onward, thermoplastic tiles went down in kitchens, halls and bathrooms, and back boilers left cement flues behind them. The 60s and 70s redevelopment closer to the centre — maisonettes, low-rise blocks and flat-roofed housing — is where we're most careful, because insulating board around service risers, ducts and heater cupboards is licensable material and it looks like ordinary grey board from a stepladder.",
      "Hamilton also has a substantial commercial estate for a town its size: the retail parks, the older industrial units towards Blantyre and Larkhall, offices, care homes and licensed premises. If you own, lease or manage any non-domestic building here, Regulation 4 of the Control of Asbestos Regulations 2012 puts a duty on you to find out what's in it and manage it — a duty that predates any removal work and doesn't go away because the building looks fine.",
      "Push out to the edges of the town and the work changes character again. Around Quarter, Ferniegair, Meikle Earnock and the farmland running towards Strathaven, the asbestos is agricultural: byre and barn roofs, machinery sheds, stables and old dairy buildings sheeted in corrugated cement, often across hundreds of square metres and often left to weather for fifty years. Big farm roofs are among the more economical jobs we quote, because the rate per square metre falls as the run gets longer and there's usually room to work and to get a vehicle alongside. What pushes the price back up is condition — decades of moss, cracked sheets and rusted-in fixings mean slower, more careful handling and more wrapping.",
    ],
    coverage:
      "Hamilton is a straight run down the M74 from our base, and we cover South Lanarkshire broadly — Blantyre, Bothwell, Uddingston, Larkhall, Strathaven and Lanark included. Domestic jobs are usually quoted within a day or two of your call. For commercial work we'll come out, look at the building properly and put the scope in writing before anybody talks about price.",
    faqs: [
      {
        question: "Do you work on commercial buildings in Hamilton?",
        answer:
          "Yes — shops, offices, industrial units, care homes and licensed premises across the town. Commercial work is planned around your trading hours rather than ours, which often means evenings, weekends or a phased approach that keeps part of the building open. You get the full document pack at the end: waste consignment notes, the work method used and everything your insurer or auditor is going to ask for.",
      },
      {
        question: "My Hamilton house has a corrugated shed roof — is that asbestos?",
        answer:
          "Quite possibly, if the property or the outbuilding dates from before 2000. Grey corrugated sheeting on sheds, garages, coal stores and bin shelters is the most common asbestos material in this part of Scotland, and it's usually asbestos cement — bonded, lower-risk and non-licensed work to remove. You can't confirm it by eye, but a single sample analysed at a lab costs around £25–£60 and settles it before anyone prices anything.",
      },
      {
        question: "How quickly can you get to Hamilton?",
        answer:
          "For a quote, normally within a day or two. If asbestos has actually been damaged or disturbed — a roof come down in a storm, a contractor who cut into something they shouldn't have — call the 24-hour line and we'll triage it with you there and then, free, and get someone out the same day where we can.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "asbestos-removal-east-kilbride",
    town: "East Kilbride",
    council: "South Lanarkshire",
    metaTitle: "Asbestos Removal East Kilbride | Free Quotes",
    metaDescription:
      "Asbestos removal in East Kilbride — a new town built through the asbestos era. Garage roofs, cement panels, Artex and floor tiles removed safely. Free quotes.",
    heroIntro:
      "We cover East Kilbride from our Glasgow base: cement garage and outbuilding roofs, cladding panels, soffits, Artex ceilings and floor tiles, removed under controlled conditions with certified disposal. Non-licensed and NNLW work, quoted free and fixed.",
    stockHeading: "What we find in East Kilbride properties",
    stock: [
      "East Kilbride is, for our purposes, the most predictable town in Scotland. It was designated Scotland's first new town in 1947 and built out through the 50s, 60s and 70s — which is to say almost the whole place went up inside the exact window when asbestos was cheapest, most available and most enthusiastically specified. Anything in the old Village that predates that is the exception rather than the rule, and the arithmetic runs the other way from most towns: here, the question isn't whether the era fits, it's which material you've got.",
      "Standardised designs are the other half of it. Calderwood, Westwood, Murray, Greenhills, St Leonards and Whitehills were built to repeating house types, and repeating house types mean the same materials street after street. Asbestos cement went on outbuilding and garage-court roofs, under eaves as soffits and fascias, and onto gable ends and porch fronts as flat cladding panels. Textured coatings and thermoplastic floor tiles followed indoors as the years went on.",
      "The low-rise and flat-roofed blocks want more care. Insulating board turns up around service risers, ducts, airing cupboards and behind panel heaters in housing of this type, and it reads as plain grey board to anyone on a stepladder. That material is licensable, high-risk work — if you find flat grey board in an East Kilbride block, the right move is to stop and have it identified before anything else happens at all.",
      "The industrial estates were built to the same timetable and carry the same signature at a bigger scale. Nerston, College Milton, Kelvin and the units around them have cement sheet roofing by the thousand square metre, and older plant rooms hold lagging on pipework. Large cement roofs in decent condition are among the most economical asbestos jobs there are, because the rate per square metre drops as the run gets longer.",
    ],
    coverage:
      "East Kilbride is a short run south of the city on the A725, and we cover it along with the rest of South Lanarkshire. Because so much of the town shares the same handful of house types, we can often tell you on the phone what you're most likely looking at and what it typically costs before anyone visits — which saves you a wasted appointment if it turns out you don't need us at all.",
    faqs: [
      {
        question: "My East Kilbride house was built in the 1960s — does it definitely have asbestos?",
        answer:
          "Not definitely, but the odds are meaningfully higher than average and it's worth checking properly. The town was built at the peak of asbestos use, so the era fits almost every property here. What varies is whether the material survived: a house refurbished thoroughly in the last twenty years may have had it removed already, while an untouched one very likely still has cement sheeting on the outbuilding and possibly a textured ceiling. Only a lab test tells you for certain, at around £25–£60 a sample.",
      },
      {
        question: "Are the grey cladding panels on my gable end asbestos?",
        answer:
          "They may well be. Flat cement panels used as cladding, soffits and fascias were routine on new town housing of this vintage, and decades of paint make them harder to tell from later fibre-cement or board products. The useful distinction isn't the look, it's the type: bonded cement panels are non-licensed work and straightforward to remove, whereas insulating board is licensable and handled completely differently. That's exactly the question a sample answers.",
      },
      {
        question: "Do you work on the East Kilbride industrial estates?",
        answer:
          "Yes — cement sheet roofing, cladding, gutters and flues on units across Nerston, College Milton, Kelvin and the rest are squarely non-licensed and NNLW work. Large roofs are quoted per square metre and the rate improves with area, since set-up, decontamination and the run to the transfer station happen once whatever the size. Where a survey turns up lagging or sprayed coating in a plant room, that's licensable material and we'll tell you straight rather than quote for it.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "asbestos-removal-motherwell",
    town: "Motherwell",
    council: "North Lanarkshire",
    metaTitle: "Asbestos Removal Motherwell | Free Fixed Quotes",
    metaDescription:
      "Asbestos removal in Motherwell and North Lanarkshire — cement roofs, sheeting, Artex and floor tiles removed under controlled conditions. Free fixed quotes.",
    heroIntro:
      "We cover Motherwell and North Lanarkshire from our Glasgow base: cement roofing and cladding, garage and outbuilding sheeting, Artex and floor tiles, removed under controlled conditions with certified disposal. Non-licensed and NNLW work, quoted free and fixed.",
    stockHeading: "What we find in Motherwell properties",
    stock: [
      "Steel shaped this town and it shaped its asbestos too. Ravenscraig and the Dalzell works ran on an industry that used the material more intensively than almost any other — sprayed coatings on structural steel, thick lagging on pipework and boilers, insulating board lining control rooms and offices. Much of that estate has gone or been redeveloped, but industrial and commercial units built to the same standards in the same decades are still working buildings across Motherwell, Wishaw and Newarthill, and they still hold the same materials.",
      "The housing is more ordinary and, frankly, easier. Post-war municipal building across Forgewood, Craigneuk, Muirhouse, Jerviston and Knowetop produced four-in-a-block flats, terraces and low-rise from the 1940s through the 1960s, with asbestos cement doing the outdoor work: outhouse and shed roofs, bin stores, garage courts, soffits and gable cladding. Textured ceilings and thermoplastic floor tiles came later, with the refits.",
      "It's worth being straight about the split, because it matters more here than in most towns. A good share of Motherwell's asbestos legacy is licensable material in industrial settings — lagging and sprayed coating — and that work legally requires an HSE licensed contractor. It isn't work we take on. What we do handle is the bonded cement, the coatings and the tiles, which is the overwhelming majority of what's actually sitting in people's homes and in small commercial units around the town.",
    ],
    coverage:
      "Motherwell sits a straightforward run down the M74 from our base, and we cover North Lanarkshire widely — Wishaw, Bellshill, Newarthill, Holytown and Carfin included. If you're clearing an older industrial unit and don't yet know what's in it, start with a refurbishment and demolition survey rather than a removal quote: it tells you what's there, which tier each material falls into, and stops you buying the wrong job.",
    faqs: [
      {
        question: "We're clearing an old industrial unit in Motherwell — can you handle it?",
        answer:
          "Usually a good part of it, and we'll be honest about the rest. Cement sheet roofing, wall cladding, gutters, downpipes and flues are non-licensed or NNLW work and squarely ours. Lagging on pipework, sprayed coatings on steelwork and most insulating board are licensable and legally require an HSE licensed contractor — if a survey finds those, we say so and help you arrange the right firm rather than quoting for work we shouldn't be doing. On a building of unknown history the sensible first step is a refurbishment and demolition survey.",
      },
      {
        question: "Is asbestos in a Motherwell home dangerous if it's just sitting there?",
        answer:
          "Usually not. Asbestos releases fibres when it's cut, drilled, broken or badly weathered — an intact cement shed roof or a sound painted ceiling poses very little day-to-day risk, and the right answer is often to leave it alone and plan removal around your next bit of work. What's never worth doing is disturbing it to check, or stacking broken sheets to tidy up, which turns a straightforward lift into a contaminated-area clean-up.",
      },
      {
        question: "Do you provide the paperwork for a commercial site in Motherwell?",
        answer:
          "Always, and it's not an extra. Waste leaves site on a special waste consignment note recording what it is, who carried it and which licensed facility received it, and you keep a copy — three years is the recommended minimum. Alongside that you get the work method and the site records. That pack is what a landlord, an insurer, a buyer's solicitor or SEPA will ask for, sometimes years after the job.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "asbestos-removal-clydebank",
    town: "Clydebank",
    council: "West Dunbartonshire",
    metaTitle: "Asbestos Removal Clydebank | Free Fixed Quotes",
    metaDescription:
      "Asbestos removal in Clydebank and West Dunbartonshire — cement roofs, cladding, Artex and floor tiles removed under controlled conditions. Free fixed quotes.",
    heroIntro:
      "We cover Clydebank and West Dunbartonshire from our Glasgow base: cement garage and outhouse roofs, cladding and soffits, Artex ceilings and floor tiles, removed under controlled conditions with certified disposal. Non-licensed and NNLW work, quoted free and fixed.",
    stockHeading: "What we find in Clydebank properties",
    stock: [
      "No town in Scotland has a harder history with this material. Clydebank built ships at John Brown's, and asbestos went into them by the tonne — lagging on pipework, insulation in engine rooms, board through the accommodation — while the Singer works and the yards along the river employed most of the town between them. Men carried the dust home on their overalls for decades, and the west of Scotland is still living with the health consequences. We don't write about that lightly and we won't oversell what a removal job can undo.",
      "The housing carries the mark of a different catastrophe. The Blitz of March 1941 destroyed or damaged the overwhelming majority of Clydebank's homes, and the rebuild ran from the late 1940s straight through the 50s and 60s — landing the town's replacement housing squarely in the asbestos era. Radnor Park, Kilbowie, Whitecrook, Linnvale and Drumry are full of the results: cement roofing on outhouses, drying areas and garage courts, cement soffits and cladding panels, textured coatings from the 60s onward and thermoplastic tiles in kitchens and bathrooms.",
      "So the split here is unusually clear, and worth stating plainly. The bonded material — garage and shed roofs, cement panels, textured coatings, floor tiles — is non-licensed and NNLW work, which is what we do, under controlled conditions with the waste consigned to a licensed facility. Sprayed coatings and thermal lagging, the materials most associated with the yards themselves, are licensable and legally require an HSE licensed contractor. In a town with this history, we would far rather point you to the right firm than pretend the line doesn't exist.",
    ],
    coverage:
      "Clydebank is a short run west along the river from our base, and we cover West Dunbartonshire including Dalmuir, Duntocher, Old Kilpatrick, Dumbarton and the Vale of Leven. Advice on the phone costs nothing, and for a lot of Clydebank callers that conversation ends with us telling them the material is fine where it is and doesn't need touching — which is a perfectly good outcome.",
    faqs: [
      {
        question: "Is asbestos still a problem in Clydebank homes?",
        answer:
          "In buildings, yes — it's still there in the ordinary way it's still there across the west of Scotland, because so much of the town was rebuilt during the decades asbestos was standard. In practice that means cement roofs on outbuildings, cladding and soffits, textured ceilings and floor tiles. Most of it is bonded material in reasonable condition, which is low-risk while it's left undisturbed. The risk comes from work done to it, not from its presence.",
      },
      {
        question: "I'm worried about past exposure from the shipyards — can you help?",
        answer:
          "Not with the health side, and we won't pretend otherwise: that's a conversation for your GP, who can refer you properly, and there are specialist support organisations in the west of Scotland for people affected by shipyard and industrial exposure. What we can help with is anything still in your property now — identifying it, telling you honestly whether it needs to come out or can safely be left, and removing it properly if it does.",
      },
      {
        question: "How much does it cost to remove an asbestos garage roof in Clydebank?",
        answer:
          "A single garage roof typically runs £400–£800 including disposal and the consignment note, a double or larger roof £700–£1,200, and a full garage demolition £800–£1,500. The condition of the sheets moves the price more than the size does. Quotes are free and fixed — if we find something on site that genuinely changes the job, we stop and talk to you before any extra work happens.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "asbestos-removal-cumbernauld",
    town: "Cumbernauld",
    council: "North Lanarkshire",
    metaTitle: "Asbestos Removal Cumbernauld | Free Quotes",
    metaDescription:
      "Asbestos removal in Cumbernauld — a new town built at the peak of asbestos use. Cement panels, garage roofs, Artex and floor tiles removed safely. Free quotes.",
    heroIntro:
      "We cover Cumbernauld and North Lanarkshire from our Glasgow base: cement cladding panels, garage and outbuilding roofs, soffits, Artex ceilings and floor tiles, removed under controlled conditions with certified disposal. Non-licensed and NNLW work, quoted free and fixed.",
    stockHeading: "What we find in Cumbernauld properties",
    stock: [
      "Cumbernauld was designated a new town in 1956 and built at pace through the 60s and early 70s, which places practically the entire town at the peak of asbestos use in British construction. Seafar, Kildrum, Abronhill, Carbrain, Condorrat and Ravenswood went up to standardised designs on a tight programme, and standardised designs are good news for identification: the same materials repeat street after street, so once we've been inside one block we generally know what's waiting in the next.",
      "The specifics follow the architecture. Flat and shallow-pitched roofs, timber-framed housing finished with cement panel cladding, soffits and fascias in the same material, communal garage courts and bin stores roofed in corrugated sheet. Indoors, textured coatings on ceilings and thermoplastic tiles on floors are the routine finds. The cladding panels are the ones people ask about most, because they're visible from the street and they weather to an unmistakable grey.",
      "Where we ask for caution is the low-rise blocks and anywhere with communal services. Insulating board was used around risers, ducts and heater cupboards in housing of this type, and it looks like ordinary board once it's been painted a few times. It's licensable material and it's the single most common thing cut through by accident during a DIY kitchen or bathroom refit. If you're in a block with a factor or a housing association, ask for the asbestos register before you start — under Regulation 4 of the Control of Asbestos Regulations 2012 they should already hold one for the common parts.",
      "The commercial side follows the same timetable. The town centre and the industrial estates at Wardpark and Blairlinn were built alongside the housing and carry cement sheet roofing and cladding at scale — large, mostly straightforward non-licensed work where the rate per square metre falls as the area grows.",
    ],
    coverage:
      "Cumbernauld is a run north-east on the M80 and sits inside our normal working area, along with Kilsyth, Moodiesburn, Muirhead and the surrounding North Lanarkshire villages. Because the town's housing types repeat, it's often worth sending us a photo before booking anything — we can usually narrow down what you're looking at and tell you whether it's worth a sample, a quote, or nothing at all.",
    faqs: [
      {
        question: "My Cumbernauld house has grey cladding panels — is that asbestos?",
        answer:
          "It's a fair suspicion on housing of that age and one we get asked weekly. Flat cement panels used as cladding, soffits and fascias were standard on new town construction through the 60s and 70s, and paint plus weathering makes them very hard to tell from later fibre-cement products. Bonded cement panels are non-licensed work and straightforward to remove; insulating board is licensable and handled entirely differently. A single lab-analysed sample tells you which you have for around £25–£60.",
      },
      {
        question: "Who is responsible for asbestos in a Cumbernauld flat's common areas?",
        answer:
          "The dutyholder for the common parts — usually the factor, the housing association or the owners collectively, depending on your title deeds and the management arrangement. Under Regulation 4 of the Control of Asbestos Regulations 2012 they must identify asbestos in those areas, assess it and keep a register. You're entitled to ask to see it, and it's worth doing before any work that touches shared walls, closes, risers or roof spaces — the survey may already exist.",
      },
      {
        question: "Do you cover Kilsyth and the surrounding villages?",
        answer:
          "Yes. Kilsyth, Moodiesburn, Muirhead, Croy and the villages around Cumbernauld are all within our normal working area, priced the same as anywhere else in the region. Tell us the postcode and what you think you're dealing with and we'll confirm coverage and the sensible next step before arranging anything.",
      },
    ],
  },
];

/** Lookup used by each location page file. Throws loudly at build time on typos. */
export function getLocation(slug: string): Location {
  const found = LOCATIONS.find((l) => l.slug === slug);
  if (!found) throw new Error(`Unknown location slug: ${slug}`);
  return found;
}

/** Sibling towns for the cross-link block — every location links to the others. */
export function otherLocations(slug: string): Location[] {
  return LOCATIONS.filter((l) => l.slug !== slug);
}
