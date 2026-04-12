const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

const currentRecommendationsRegex = /{recentlyViewed.length > 0 && \([\s\S]*?<\/AnimatePresence>/m;

if (pageContent.match(currentRecommendationsRegex)) {
  const newRecommendations = `
      {recentlyViewed.length > 0 && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="py-20 bg-luxury-gold/5 border-y border-luxury-gold/10 overflow-hidden"
          >
            <div className="container mx-auto px-6">
              <h3 className="text-xl font-display gold-text mb-8 text-right" dir="rtl">اخترنا لك بناءً على ذوقك </h3>
              <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar" dir="rtl">
                {recentlyViewed.map((slug) => {
                  const prop = properties.find((p: any) => p.slug === slug);
                  if (!prop) return null;
                  return (
                    <Link key={slug} href={\`/property/\${slug}\`} className="min-w-[300px] group">
                      <div className="relative h-48 rounded-2xl overflow-hidden mb-3 border border-luxury-gold/10">
                        <Image src={prop.images[0]} alt={prop.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20" />

                        {/* Tags on recommended */}
                        <div className="absolute top-2 right-2 flex flex-col gap-1">
                          {(prop.family_score || 0) >= 4 && <SmartBadge type="family" />}
                        </div>
                      </div>
                      <h4 className="font-display text-sm gold-text">{prop.name}</h4>
                      <p className="font-royal text-[10px] opacity-40">{prop.destination}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}`;

  pageContent = pageContent.replace(currentRecommendationsRegex, newRecommendations + '\n      </AnimatePresence>');
  fs.writeFileSync('src/app/page.tsx', pageContent);
  console.log("Recommendations patched successfully.");
} else {
  console.log("Recommendations section not found.");
}
