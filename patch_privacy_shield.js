const fs = require('fs');

let fileContent = fs.readFileSync('src/components/PropertyClient.tsx', 'utf8');

// Look for the "The Nozoluxe DNA" section
const contentGridRegex = /<h2 className="text-sm font-royal text-luxury-gold uppercase tracking-widest mb-6">الحمض النووي للفندق \(DNA\)<\/h2>/m;

if (fileContent.match(contentGridRegex)) {
  const replacement = `
              {/* Privacy Shield Rating */}
              {(property.privacy_score || 0) >= 4 && (
                <div className="mb-10 bg-gradient-to-l from-luxury-obsidian to-purple-900/10 border border-purple-500/20 p-6 rounded-2xl flex items-center justify-between gap-6 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck size={24} className="text-purple-400" />
                      <h3 className="font-display text-xl text-luxury-marble">موثّق للخصوصية العالية</h3>
                    </div>
                    <p className="font-royal text-sm text-luxury-marble/70 m-0">
                      هذا العقار يضمن لك أعلى معايير الخصوصية، مناسب للعائلات المحافظة والباحثين عن مسابح وفيلات خاصة.
                    </p>
                  </div>
                  <div className="w-16 h-16 shrink-0 rounded-full border-4 border-purple-500/30 flex items-center justify-center relative z-10 bg-luxury-obsidian/50">
                    <span className="font-display text-xl text-purple-400 font-bold">{property.privacy_score}/5</span>
                  </div>
                </div>
              )}

              <h2 className="text-sm font-royal text-luxury-gold uppercase tracking-widest mb-6">الحمض النووي للفندق (DNA)</h2>`;

  fileContent = fileContent.replace(contentGridRegex, replacement);
  fs.writeFileSync('src/components/PropertyClient.tsx', fileContent);
  console.log("Privacy Shield component integrated in PropertyClient.tsx");
} else {
  console.log("Could not find the target location to inject Privacy Shield.");
}
