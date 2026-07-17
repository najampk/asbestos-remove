import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SectorCard from "@/components/SectorCard";
import { SECTORS } from "@/lib/sectors";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Asbestos Services by Sector | Glasgow & Scotland",
  titleAbsolute: true,
  description:
    "Asbestos surveys, management and removal tailored to homes, commercial buildings and industrial sites across Glasgow and Scotland. Honest, fixed quotes.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Asbestos Support for Every Kind of Property"
        intro="Homes, occupied workplaces and industrial sites each need a different approach. Explore how we plan safe, practical asbestos work around your building and the people who use it."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
        ]}
      />
      <section className="section-muted py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Choose Your Property Type"
            intro="See the common materials, compliance duties and working methods relevant to your property."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SECTORS.map((sector) => (
              <SectorCard key={sector.slug} sector={sector} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
