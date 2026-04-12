const fs = require('fs');
let homeContent = fs.readFileSync('src/components/HomeClient.tsx', 'utf8');

// Looks like the problem is missing closing tag for `<section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">`
// Let's check where it ends.

const heroRegex = /\{\/\* Hero Section \*\/\}[\s\S]*?\{\/\* Recently Viewed: The Royal Memory in action \*\/\}/m;
const heroSection = homeContent.match(heroRegex)[0];

// The heroSection currently starts with <section> but might not have </section>.
// Since I noticed it missing in my previous tail logs:
if (!heroSection.includes("</section>")) {
  homeContent = homeContent.replace(
    "{/* Recently Viewed: The Royal Memory in action */}",
    "</section>\n      {/* Recently Viewed: The Royal Memory in action */}"
  );
  fs.writeFileSync('src/components/HomeClient.tsx', homeContent);
  console.log("Added missing </section> to Hero");
} else {
  console.log("Hero section has </section> already. Let me see.");
}
