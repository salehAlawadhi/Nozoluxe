const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldRecommendations = `{mounted && recentlyViewed.length > 0 && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="py-20 bg-luxury-gold/5 border-y border-luxury-gold/10 overflow-hidden"
          >
            <div className="container mx-auto px-6">
              <h3 className="text-xl font-display gold-text mb-8 text-right" dir="rtl">شُوهدت مؤخراً</h3>
              <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar" dir="rtl">
                {recentlyViewed.map((slug) => {
                  const prop = properties.find((p: { slug: string; name: string; destination: string; images: string[] }) => p.slug === slug);
                  if (!prop) return null;
                  return (
                    <Link key={slug} href={\`/property/\${slug}\`} className="min-w-[300px] group">
                      <div className="relative h-48 rounded-2xl overflow-hidden mb-3 border border-luxury-gold/10">
                        <Image src={prop.images[0]} alt={prop.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20" />
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


const newRecommendations = `{mounted && recentlyViewed.length > 0 && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="py-20 bg-luxury-gold/5 border-y border-luxury-gold/10 overflow-hidden"
          >
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4" dir="rtl">
                 <h3 className="text-3xl font-display text-luxury-marble flex items-center gap-3">
                    <Sparkles size={28} className="text-luxury-gold" />
                    مختارات نُزُلُكس لك
                 </h3>
                 <span className="text-xs font-royal text-luxury-marble/50 tracking-widest uppercase border border-luxury-gold/20 px-4 py-2 rounded-full bg-luxury-obsidian/50 backdrop-blur-sm">بناءً على اهتماماتك</span>
              </div>

              <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar" dir="rtl">
                {recentlyViewed.map((slug) => {
                  const prop = properties.find((p: any) => p.slug === slug);
                  if (!prop) return null;
                  return (
                    <Link key={slug} href={\`/property/\${slug}\`} className="min-w-[340px] group block rounded-[2rem] overflow-hidden border border-luxury-gold/10 bg-luxury-charcoal/30 hover:border-luxury-gold/30 hover:bg-luxury-charcoal/50 transition-all duration-500">
                      <div className="relative h-56 overflow-hidden">
                        <Image src={prop.images?.[0] || '/placeholder.jpg'} alt={prop.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-luxury-obsidian/20 to-transparent" />

                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          {(prop.family_score || 0) >= 4 && <SmartBadge type="family" className="bg-luxury-obsidian/80 backdrop-blur-md" />}
                          {prop.tags?.includes("private_pool") && <SmartBadge type="private_pool" className="bg-luxury-obsidian/80 backdrop-blur-md" />}
                          {prop.tags?.includes("honeymoon") && <SmartBadge type="honeymoon" className="bg-luxury-obsidian/80 backdrop-blur-md" />}
                        </div>
                      </div>
                      <div className="p-6 relative -mt-4 bg-gradient-to-b from-transparent to-luxury-charcoal/10">
                        <h4 className="font-display text-xl text-luxury-marble group-hover:text-luxury-gold transition-colors mb-2">{prop.name}</h4>
                        <div className="flex items-center justify-between">
                          <p className="font-royal text-xs text-luxury-marble/60 flex items-center gap-1">
                            <MapPin size={12} className="text-luxury-gold" />
                            {prop.destination}
                          </p>
                          <div className="flex items-center gap-1 text-luxury-gold font-royal text-xs">
                            <span>اكتشف المزيد</span>
                            <ChevronLeft size={12} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}`;

pageContent = pageContent.replace(oldRecommendations, newRecommendations);
fs.writeFileSync('src/app/page.tsx', pageContent);
console.log("Recommendations patched successfully.");
