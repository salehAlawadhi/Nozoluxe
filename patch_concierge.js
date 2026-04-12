const fs = require('fs');

let fileContent = fs.readFileSync('src/components/ConciergeWizard.tsx', 'utf8');

// Remove direct import of properties.json to avoid shipping the entire database to the client bundle
const importRegex = /import properties from "@\/data\/properties_enriched\.json";\n/m;
if (fileContent.match(importRegex)) {
  fileContent = fileContent.replace(importRegex, '');
}

// Add properties as a prop to ConciergeWizard so it can be passed from the Server Component
const componentSignatureRegex = /export default function ConciergeWizard\(\) \{/m;
if (fileContent.match(componentSignatureRegex)) {
  fileContent = fileContent.replace(
    componentSignatureRegex,
    `export default function ConciergeWizard({ properties }: { properties: any[] }) {`
  );
  fs.writeFileSync('src/components/ConciergeWizard.tsx', fileContent);
  console.log("ConciergeWizard.tsx patched: removed direct json import and added properties prop.");
} else {
  console.log("Could not find ConciergeWizard component signature.");
}
