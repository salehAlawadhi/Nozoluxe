import HomeClient from "@/components/HomeClient";
import properties from "@/data/properties_enriched.json";
import itineraries from "@/data/itineraries.json";
import { getPropertiesList, getWizardCandidates } from "@/lib/api";

export default function Home() {
  const lightProps = getPropertiesList();
  const wizardCands = getWizardCandidates();

  return <HomeClient properties={lightProps} wizardCandidates={wizardCands} itineraries={itineraries} />;
}
