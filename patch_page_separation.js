const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// The Home component currently holds the entire page UI.
// To preserve the motion logic, we can rename the current file to `HomeClient.tsx`
// and create a new `page.tsx` that is a Server Component fetching the data and passing it down.

fs.writeFileSync('src/components/HomeClient.tsx', pageContent.replace('export default function Home(', 'export default function HomeClient({ properties, wizardCandidates, itineraries }: { properties: any[], wizardCandidates: any[], itineraries: any[] }) {'));

// Create the new server page
const serverPage = `import HomeClient from "@/components/HomeClient";
import properties from "@/data/properties_enriched.json";
import itineraries from "@/data/itineraries.json";
import { getPropertiesList, getWizardCandidates } from "@/lib/api";

export default function Home() {
  const lightProps = getPropertiesList();
  const wizardCands = getWizardCandidates();

  return <HomeClient properties={lightProps} wizardCandidates={wizardCands} itineraries={itineraries} />;
}
`;

fs.writeFileSync('src/app/page.tsx', serverPage);

console.log("Separated page.tsx into HomeClient.tsx and server-side page.tsx.");
