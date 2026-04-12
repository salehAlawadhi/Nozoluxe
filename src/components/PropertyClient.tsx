"use client";

import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

import { useRoyalMemory } from "@/hooks/useRoyalMemory";
import uiCopy from "../../nozoluxe_starter_pack/nozoluxe_ui_copy_ar.json";
import CurrencySelector from "@/components/CurrencySelector";
import SovereignBadge from "@/components/SovereignBadge";
import { useRoyalPrice } from "@/hooks/useRoyalPrice";

export default function PropertyClient({ property }: { property: { slug: string; name?: string; destination?: string; type?: string; cluster_ar?: string; saudi_fit_reason_ar?: string; content_angle_ar?: string; tags_ar?: string[]; images?: string[]; estimated_price_usd?: number; family_score?: number; honeymoon_score?: number; nature_score?: number; luxury_score?: number; privacy_score?: number; amenities?: string[]; } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewsToday, setViewsToday] = useState(0);
  const { recentlyViewed, saveToMemory } = useRoyalMemory();
  const { convert } = useRoyalPrice();

  useEffect(() => {
    if (property?.slug) {
      const seed = property.slug.charCodeAt(0) + property.slug.charCodeAt(property.slug.length - 1);
      setViewsToday((seed % 15) + 5);
    }
  }, [property?.slug]);

  const generateWhatsAppMessage = () => {
    // Collect the data to act as a CRM entry point
    const priceText = property.estimated_price_usd ? `${convert(property.estimated_price_usd).amount} ${convert(property.estimated_price_usd).symbol}` : "غير محدد";
    const historyText = recentlyViewed.length > 1 ? recentlyViewed.slice(0, 3).join(", ") : "لا يوجد";

    const msg = `أهلاً فريق نُزُل الفخامة 👑،
أرغب بمعرفة التوافر وأفضل العروض المتاحة لطلب الحجز 🛎️
أرغب بمعرفة التوافر والأسعار لطلب الحجز 🛎️

*🏨 العقار:* ${property.name}
*📍 الوجهة:* ${property.destination}
*💰 السعر التقديري لليلة:* ${priceText}

---
*🔍 نظرة سريعة على ملفي:*
- شاهدت مؤخراً: ${historyText}
- أنا أبحث عن: (أرجو تعبئة التفاصيل من قبلك: تواريخ، عدد ضيوف...)

شكراً لكم.`;

    return encodeURIComponent(msg);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (property) {
      saveToMemory(property.slug);
    }
  }, [property, saveToMemory]);

  if (!property) {
    return (
      <div className="min-h-screen bg-luxury-obsidian flex items-center justify-center">
        <h1 className="text-luxury-marble font-display text-2xl">عذراً، هذا الفندق غير متوفر.</h1>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % (property.images?.length || 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + (property.images?.length || 1)) % (property.images?.length || 1));
  };

  return (
    <main className="min-h-screen bg-luxury-obsidian text-luxury-marble selection:bg-luxury-gold/30">
      {/* Dynamic Header */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-obsidian/90 backdrop-blur-xl border-b border-luxury-gold/10 py-4' : 'bg-transparent py-6'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2 text-luxury-marble/70 hover:text-luxury-gold transition-colors font-royal text-sm">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            عودة للمجموعة
          </Link>
          <div className="flex items-center gap-6">
            <CurrencySelector />
            <div className="hidden md:flex items-center gap-2 text-luxury-gold text-sm font-royal">
              <ShieldCheck size={16} />
              <span>{"موثوق من خبراء نُزُل الفخامة"}</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Gallery - Cinematic */}
      <section className="relative h-[85vh] w-full bg-luxury-obsidian">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={property.images?.[currentImageIndex] || '/placeholder.jpg'}
              alt={property.name || ""}
              fill
              className="object-cover"
              priority
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-luxury-obsidian/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-obsidian/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Gallery Controls */}
        {property.images && property.images.length > 1 && (
          <div className="absolute bottom-12 right-12 flex gap-4 z-20">
            <button
              onClick={prevImage}
              className="w-12 h-12 rounded-full border border-luxury-marble/20 bg-luxury-obsidian/50 backdrop-blur-md flex items-center justify-center text-luxury-marble hover:bg-luxury-gold hover:text-luxury-obsidian hover:border-luxury-gold transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={nextImage}
              className="w-12 h-12 rounded-full border border-luxury-marble/20 bg-luxury-obsidian/50 backdrop-blur-md flex items-center justify-center text-luxury-marble hover:bg-luxury-gold hover:text-luxury-obsidian hover:border-luxury-gold transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-12 z-20">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 border border-luxury-gold/30 rounded-full text-luxury-gold text-xs font-royal tracking-widest uppercase bg-luxury-obsidian/40 backdrop-blur-md">
                  {property.cluster_ar}
                </span>
                <SovereignBadge />
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold text-luxury-marble mb-4 leading-tight">
                {property.name}
              </h1>

              <div className="flex items-center gap-6 text-luxury-marble/80 font-royal">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-luxury-gold" />
                  <span className="text-lg">{property.destination}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-luxury-gold/50" />
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-luxury-gold fill-luxury-gold" />
                  <span className="text-lg">{property.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Details (8 cols) */}
          <div className="lg:col-span-8 space-y-20">


            {/* The Nozoluxe DNA */}
            <div className="mb-12">

              {/* Privacy Shield Rating */}
              {(property.privacy_score || 0) >= 4 && (
                <div className="mb-10 bg-gradient-to-l from-luxury-obsidian to-purple-900/10 border border-purple-500/20 p-6 rounded-2xl flex items-center justify-between gap-6 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck size={24} className="text-purple-400" />
                      <h3 className="font-display text-xl text-luxury-marble">موثّق الخصوصية من نُزُل الفخامة</h3>
                    </div>
                    <p className="font-royal text-sm text-luxury-marble/70 m-0">
                      تم التحقق من هذا العقار لتقديمه معايير خصوصية استثنائية، مما يضمن راحة تامة للعائلات المحافظة.
                    </p>
                  </div>
                  <div className="w-16 h-16 shrink-0 rounded-full border-4 border-purple-500/30 flex items-center justify-center relative z-10 bg-luxury-obsidian/50">
                    <span className="font-display text-xl text-purple-400 font-bold">{property.privacy_score}/5</span>
                  </div>
                </div>
              )}

              <h2 className="text-sm font-royal text-luxury-gold uppercase tracking-widest mb-6">الحمض النووي للفندق (DNA)</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
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
                        <div key={star} className={`w-2 h-2 rounded-full ${star <= item.score ? 'bg-luxury-gold' : 'bg-luxury-marble/10'}`} />
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


            {/* Highlights Grid */}
            <div>
              <h3 className="text-sm font-royal text-luxury-gold uppercase tracking-widest mb-8">أبرز المزايا</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {property.tags_ar?.map((tag: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-luxury-charcoal/30 border border-luxury-marble/5 hover:border-luxury-gold/20 transition-colors">
                    <CheckCircle2 className="text-luxury-gold shrink-0 mt-1" size={20} />
                    <span className="font-royal text-luxury-marble/90">{tag}</span>
                  </div>
                ))}
              </div>
            </div>


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


          </div>

          {/* Right Column: Reservation (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 rounded-3xl bg-luxury-charcoal/50 border border-luxury-gold/10 backdrop-blur-xl">
              <div className="mb-8">
                <p className="text-luxury-marble/60 font-royal text-sm mb-2">السعر التقديري لليلة</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-luxury-marble">
                    {convert(property.estimated_price_usd || 0).amount}
                  </span>
                  <span className="text-luxury-gold font-royal">{convert(property.estimated_price_usd || 0).symbol}</span>
                </div>
                <p className="text-xs text-luxury-marble/40 mt-2 font-royal">يختلف حسب الموسم وتوافر الغرف</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-luxury-marble/80 font-royal text-sm p-3 rounded-xl bg-luxury-obsidian/50">
                  <Calendar size={18} className="text-luxury-gold" />
                  <span>دعم كامل لتخطيط الرحلة</span>
                </div>
                <div className="flex items-center gap-3 text-luxury-marble/80 font-royal text-sm p-3 rounded-xl bg-luxury-obsidian/50">
                  <Award size={18} className="text-luxury-gold" />
                  <span>ترقيات حصرية (حسب الإمكانية)</span>
                </div>
              </div>


              {/* Smart Urgency */}
              <div className="flex items-center justify-between mb-6 p-4 rounded-xl bg-luxury-gold/5 border border-luxury-gold/10">
                <div className="flex items-center gap-3">
                  <Eye size={18} className="text-luxury-gold" />
                  <span className="text-sm font-royal text-luxury-marble/80">شوهد {viewsToday} مرة اليوم</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="text-xs text-red-400 font-royal">طلب مرتفع</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905550000000"}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-luxury-gold to-yellow-600 text-luxury-obsidian font-display font-bold text-lg hover:shadow-[0_0_30px_rgba(201,167,74,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {uiCopy.hotel_page.book_cta}
              </a>

              <p className="text-center text-xs text-luxury-marble/40 mt-4 font-royal flex justify-center items-center gap-2">
                <ShieldCheck size={14} />
                {"لا يلزم الدفع الآن"}
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
