const fs = require('fs');
let homeContent = fs.readFileSync('src/components/HomeClient.tsx', 'utf8');

// Update Navbar to match spec safely
homeContent = homeContent.replace(
  '{[uiCopy.nav.destinations, uiCopy.nav.destinations, "المجموعات", "تواصل معنا"].map((item) => (',
  '{[uiCopy.nav.destinations, "المجموعات", "المساعد الذكي"].map((item) => ('
);

homeContent = homeContent.replace(
  '{[uiCopy.nav.destinations, uiCopy.nav.destinations, "المجموعات", "تواصل معنا"].map((item, i) => (',
  '{[uiCopy.nav.destinations, "المجموعات", "المساعد الذكي"].map((item, i) => ('
);

fs.writeFileSync('src/components/HomeClient.tsx', homeContent);
console.log("UX refined: minimalist navbar applied.");
