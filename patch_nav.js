const fs = require('fs');

let homeContent = fs.readFileSync('src/components/HomeClient.tsx', 'utf8');

const navBar1Regex = /\{\[uiCopy\.nav\.destinations, uiCopy\.nav\.destinations, "المجموعات", "تواصل معنا"\]\.map\(\(item\) => \(/m;
homeContent = homeContent.replace(navBar1Regex, '{[uiCopy.nav.destinations, "المجموعات", "المساعد الذكي"].map((item) => (');

const navBar2Regex = /\{\[uiCopy\.nav\.destinations, uiCopy\.nav\.destinations, "المجموعات", "تواصل معنا"\]\.map\(\(item, i\) => \(/m;
homeContent = homeContent.replace(navBar2Regex, '{[uiCopy.nav.destinations, "المجموعات", "المساعد الذكي"].map((item, i) => (');

fs.writeFileSync('src/components/HomeClient.tsx', homeContent);
console.log("UX refined: minimalist navbar applied.");
