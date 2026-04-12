const fs = require('fs');

let fileContent = fs.readFileSync('src/components/PropertyClient.tsx', 'utf8');

// 1. Expand Property Interface
const oldInterface = '{ property: { slug: string; name?: string; destination?: string; type?: string; cluster_ar?: string; saudi_fit_reason_ar?: string; tags_ar?: string[]; images?: string[]; estimated_price_usd?: number; } }';
const newInterface = '{ property: { slug: string; name?: string; destination?: string; type?: string; cluster_ar?: string; saudi_fit_reason_ar?: string; content_angle_ar?: string; tags_ar?: string[]; images?: string[]; estimated_price_usd?: number; family_score?: number; honeymoon_score?: number; nature_score?: number; luxury_score?: number; privacy_score?: number; amenities?: string[]; } }';
fileContent = fileContent.replace(oldInterface, newInterface);


// 2. Add Visual DNA Component
const iconImports = `
import {
  ChevronRight,
  ChevronLeft,
  MapPin,
  Star,
  ShieldCheck,
  Wind,
  Umbrella,
  ArrowLeft,
  Globe,
  Award,
  Eye,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Calendar,
  Utensils,
  Waves,
  Users,
  Heart,
  Leaf,
  Diamond,
  ShieldAlert
} from "lucide-react";
`;
fileContent = fileContent.replace(/import \{[\s\S]*?\} from "lucide-react";/, iconImports);

// 3. Inject DNA Bars and Trust Shield into Content Grid
const contentGridStart = '{/* Left Column: Details (8 cols) */}';
const theVerdictRegex = /\{\/\* The Nozoluxe Verdict \*\/\}[\s\S]*?<\/div>/;

const newContentLayout = `
            {/* The Nozoluxe DNA */}
            <div className="mb-12">
              <h2 className="text-sm font-royal text-luxury-gold uppercase tracking-widest mb-6">الحمض النووي للفندق (DNA)</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { label: "للعائلات", score: property.family_score || 0, icon: Users },
                  { label: "شهر عسل", score: property.honeymoon_score || 0, icon: Heart },
                  { label: "خصوصية", score: property.privacy_score || 0, icon: ShieldAlert },
                  { label: "طبيعة", score: property.nature_score || 0, icon: Leaf },
                  { label: "فخامة", score: property.luxury_score || 0, icon: Diamond }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-luxury-charcoal/20 border border-luxury-marble/5">
                    <item.icon size={20} className={item.score >= 4 ? "text-luxury-gold" : "text-luxury-marble/30"} />
                    <span className="text-xs font-royal text-luxury-marble/80">{item.label}</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <div key={star} className={\`w-2 h-2 rounded-full \${star <= item.score ? 'bg-luxury-gold' : 'bg-luxury-marble/10'}\`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Nozoluxe Verdict */}
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold text-luxury-gold mb-8 flex items-center gap-4">
                <Sparkles size={28} />
                رؤيتنا الخاصة (لماذا اخترناه لك؟)
              </h2>
              <div className="bg-luxury-charcoal/30 border-r-2 border-luxury-gold p-8 rounded-l-3xl mb-8">
                <p className="text-luxury-marble/90 leading-relaxed font-royal text-xl m-0">
                  {property.saudi_fit_reason_ar}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-emerald-900/10 border border-emerald-500/20 p-6 rounded-2xl">
                  <h3 className="text-emerald-400 font-display text-xl mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    لمن يناسب هذا الفندق؟
                  </h3>
                  <ul className="space-y-3 font-royal text-sm text-luxury-marble/80">
                    {(property.family_score || 0) >= 4 && <li>• مثالي للعائلات الخليجية الكبيرة</li>}
                    {(property.honeymoon_score || 0) >= 4 && <li>• ممتاز للعرسان والباحثين عن الرومانسية</li>}
                    {(property.nature_score || 0) >= 4 && <li>• عشاق الطبيعة والهدوء والاسترخاء</li>}
                    {(property.privacy_score || 0) >= 4 && <li>• للباحثين عن الخصوصية العالية والمسابح المستقلة</li>}
                    {(property.luxury_score || 0) >= 4 && <li>• محبي الفخامة والخدمات الاستثنائية (VIP)</li>}
                  </ul>
                </div>
                <div className="bg-rose-900/10 border border-rose-500/20 p-6 rounded-2xl">
                  <h3 className="text-rose-400 font-display text-xl mb-4 flex items-center gap-2">
                    <ShieldAlert size={20} />
                    قد لا يناسبك إذا...
                  </h3>
                  <ul className="space-y-3 font-royal text-sm text-luxury-marble/80">
                     {(property.family_score || 0) < 3 && <li>• معك أطفال صغار وتحتاج لمرافق ترفيهية واسعة</li>}
                     {(property.nature_score || 0) > 4 && <li>• تبحث عن صخب المدينة والأسواق المركزية</li>}
                     {(property.privacy_score || 0) < 3 && <li>• تبحث عن فلل مغلقة بالكامل للعائلة</li>}
                     {(property.luxury_score || 0) < 3 && <li>• تتوقع خدمات فندقية 5 نجوم على مدار الساعة</li>}
                  </ul>
                </div>
              </div>

              {property.content_angle_ar && (
                <div className="mt-8 p-6 bg-luxury-gold/5 border border-luxury-gold/10 rounded-2xl">
                  <h3 className="text-luxury-gold font-display text-lg mb-2">ملاحظة الكونسيرج:</h3>
                  <p className="text-luxury-marble/70 text-sm font-royal">{property.content_angle_ar}</p>
                </div>
              )}
            </div>
`;

if (fileContent.match(theVerdictRegex)) {
  fileContent = fileContent.replace(theVerdictRegex, newContentLayout);
}


fs.writeFileSync('src/components/PropertyClient.tsx', fileContent);
console.log("Property Landing Phase 1 patched successfully.");
