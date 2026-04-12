const fs = require('fs');

let homeContent = fs.readFileSync('src/components/HomeClient.tsx', 'utf8');

// There are extra div closures after AnimatePresence that need fixing.
const regex = /<\/AnimatePresence>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/section>/m;
if(homeContent.match(regex)) {
   homeContent = homeContent.replace(regex, `</AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">`);
}

fs.writeFileSync('src/components/HomeClient.tsx', homeContent);
console.log("Nav cleanup applied.");
