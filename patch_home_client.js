const fs = require('fs');

let content = fs.readFileSync('src/components/HomeClient.tsx', 'utf8');

// Replace the direct JSON imports inside HomeClient.tsx
content = content.replace('import properties from "@/data/properties_enriched.json";\n', '');
content = content.replace('import itineraries from "@/data/itineraries.json";\n', '');

// Replace the references to properties and itineraries
// In HomeClient, properties is already passed as a prop, but there was an internal use of `properties` mapping
// that needs to adapt to the new structure, especially inside recentlyViewed mapping.
// Let's replace the <ConciergeWizard properties={properties} /> to use wizardCandidates
content = content.replace('<ConciergeWizard properties={properties} />', '<ConciergeWizard properties={wizardCandidates} />');

fs.writeFileSync('src/components/HomeClient.tsx', content);
console.log("HomeClient.tsx patched.");
