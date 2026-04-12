const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

const conciergeRegex = /<ConciergeWizard \/>/g;
if (pageContent.match(conciergeRegex)) {
  pageContent = pageContent.replace(
    conciergeRegex,
    '<ConciergeWizard properties={featuredProperties} />' // Assuming featuredProperties is the lightweight list
  );
  fs.writeFileSync('src/app/page.tsx', pageContent);
  console.log("Page.tsx patched to pass properties to ConciergeWizard.");
} else {
  console.log("Could not find <ConciergeWizard /> in page.tsx.");
}
