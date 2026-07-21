import LocationPage from "@/components/LocationPage";
import { buildMetadata } from "@/lib/seo";
import { getLocation } from "@/lib/locations";

// SPEC.md §7.1 location page. Every word of copy lives in lib/locations.ts.
const location = getLocation("asbestos-removal-east-kilbride");

export const metadata = buildMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/${location.slug}`,
});

export default function AsbestosRemovalEastKilbridePage() {
  return <LocationPage location={location} />;
}
