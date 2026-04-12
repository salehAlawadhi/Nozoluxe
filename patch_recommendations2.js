const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /{mounted && recentlyViewed\.length > 0 && \([\s\S]*?<\/motion\.section>\s*}/m;

if (pageContent.match(regex)) {
  const newRecommendations = `{mounted && recentlyViewed.length > 0 && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="py-20 bg-luxury-gold/5 border-y border-luxury-gold/10 overflow-hidden"
          >
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between mb-8" dir="rtl">
                 <h3 className="text-2xl font-display gold-text flex items-center gap-3">
                    <Sparkles size={24} />
                    مختارات نُزُلُكس لك
                 </h3>
                 <span className="text-xs font-royal text-luxury-marble/40 tracking-widest">مبنية على اختياراتك</span>
              </div>

              <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar" dir="rtl">
                {recentlyViewed.map((slug) => {
                  const prop = properties.find((p: any) => p.slug === slug);
                  if (!prop) return null;
                  return (
                    <Link key={slug} href={\`/property/\${slug}\`} className="min-w-[320px] group block rounded-[2rem] overflow-hidden border border-luxury-gold/10 bg-luxury-charcoal/30">
                      <div className="relative h-48 overflow-hidden mb-3">
                        <Image src={prop.images[0]} alt={prop.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20" />

                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                          {(prop.family_score || 0) >= 4 && <SmartBadge type="family" className="bg-luxury-obsidian/80 backdrop-blur-sm" />}
                        </div>
                      </div>
                      <div className="p-5 pt-2">
                        <h4 className="font-display text-lg text-luxury-marble group-hover:text-luxury-gold transition-colors mb-1">{prop.name}</h4>
                        <p className="font-royal text-xs opacity-60 flex items-center gap-1">
                          <MapPin size={10} className="text-luxury-gold" />
                          {prop.destination}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}`;

  pageContent = pageContent.replace(regex, newRecommendations);
  fs.writeFileSync('src/app/page.tsx', pageContent);
  console.log("Recommendations patched successfully.");
} else {
  console.log("Recommendations section not found.");
}
