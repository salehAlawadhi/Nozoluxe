const fs = require('fs');

let fileContent = fs.readFileSync('src/components/PropertyClient.tsx', 'utf8');

// Add "GCC Comfort & Practical Fit" Section
const gccComfortSection = `
            {/* GCC Comfort & Practical Fit */}
            <div className="mt-20">
              <h2 className="text-3xl font-display font-bold text-luxury-gold mb-8 flex items-center gap-4">
                <Globe size={28} />
                الراحة والعملية (مناسب للخليجيين)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-luxury-charcoal/20 border border-luxury-marble/5 rounded-2xl">
                  <h4 className="text-lg font-display text-luxury-marble mb-3 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-luxury-gold" />
                    مستوى الخصوصية
                  </h4>
                  <p className="text-sm font-royal text-luxury-marble/70">
                    {(property.privacy_score || 0) >= 4 ? "ممتاز ومناسب للعائلات المحافظة." : "يوفر خصوصية جيدة مع بعض المناطق المشتركة."}
                  </p>
                </div>
                <div className="p-6 bg-luxury-charcoal/20 border border-luxury-marble/5 rounded-2xl">
                  <h4 className="text-lg font-display text-luxury-marble mb-3 flex items-center gap-2">
                    <Users size={18} className="text-luxury-gold" />
                    الراحة العائلية
                  </h4>
                  <p className="text-sm font-royal text-luxury-marble/70">
                    {(property.family_score || 0) >= 4 ? "تصميم واسع وخيارات متعددة للغرف المتصلة أو الفلل." : "مناسب للعائلات الصغيرة أو الأزواج بشكل أكبر."}
                  </p>
                </div>
                <div className="p-6 bg-luxury-charcoal/20 border border-luxury-marble/5 rounded-2xl">
                  <h4 className="text-lg font-display text-luxury-marble mb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-luxury-gold" />
                    التنقل والموقع
                  </h4>
                  <p className="text-sm font-royal text-luxury-marble/70">
                    يوصى بترتيب خدمات التوصيل الخاصة أو استئجار سيارة لضمان راحة التنقل في هذه المنطقة.
                  </p>
                </div>
                <div className="p-6 bg-luxury-charcoal/20 border border-luxury-marble/5 rounded-2xl">
                  <h4 className="text-lg font-display text-luxury-marble mb-3 flex items-center gap-2">
                    <Utensils size={18} className="text-luxury-gold" />
                    خيارات الطعام
                  </h4>
                  <p className="text-sm font-royal text-luxury-marble/70">
                    تتوفر خيارات طعام متنوعة تراعي الذوق العربي، مع إمكانية طلب تجهيزات خاصة في الفلل.
                  </p>
                </div>
              </div>
            </div>
`;

// Insert the GCC Comfort section right after the Highlights Grid
const highlightsGridRegex = /\{property\.tags_ar\?\.map\(\(tag: string, index: number\) => \([\s\S]*?<\/div>\n            <\/div>/m;

if (fileContent.match(highlightsGridRegex)) {
  fileContent = fileContent.replace(highlightsGridRegex, match => match + '\n\n' + gccComfortSection);
}

// Modify the WhatsApp Handoff logic slightly to be cleaner
fileContent = fileContent.replace(
  'const msg = `أهلاً نُزُل الفخامة،',
  'const msg = `أهلاً فريق نُزُل الفخامة 👑،\nأرغب بمعرفة التوافر وأفضل العروض المتاحة لطلب الحجز 🛎️'
);

fs.writeFileSync('src/components/PropertyClient.tsx', fileContent);
console.log("Phase 2 (GCC Comfort & Copy Refinements) applied.");
