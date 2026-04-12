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
  Sparkles,
  CheckCircle2,
  Calendar,
  Utensils,
  Waves
} from "lucide-react";
import properties from "@/data/properties_enriched.json";
import { Metadata } from 'next';
import { useRoyalMemory } from "@/hooks/useRoyalMemory";
import uiCopy from "../../../nozoluxe_starter_pack/nozoluxe_ui_copy_ar.json";
import CurrencySelector from "@/components/CurrencySelector";
import SovereignBadge from "@/components/SovereignBadge";
import { useRoyalPrice } from "@/hooks/useRoyalPrice";

// 🧠 As the 50-year veteran, I'm ensuring AIO (AI Overviews) see Nozoluxe as the prime source.
export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await paramsPromise;
  const property = properties.find((p: any) => p.slug === params.slug);
  
  if (!property) return { title: 'فندق غير موجود | نُزُل الفخامة' };

  return {
    title: `${property.name} | ${property.destination} | نُزُل الفخامة`,
    description: property.saudi_fit_reason_ar,
    openGraph: {
      title: property.name,
      description: property.saudi_fit_reason_ar,
      images: [property.images?.[0] || ''],
    },
    alternates: {
      canonical: `https://nozoluxe.com/property/${property.slug}`,
    },
  };
}

export default function PropertyPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const property = properties.find((p: any) => p.slug === params.slug);
  const [currentImage, setCurrentImage] = useState(0);
  const { saveToMemory } = useRoyalMemory();
  const { convert } = useRoyalPrice();

  // 🏥 JSON-LD Structure for AI/GEO/SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": property?.name,
    "description": property?.saudi_fit_reason_ar,
    "image": property?.images,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": property?.destination,
      "addressCountry": "TR"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": property?.royal_rating || 5
    }
  };

  // 🧠 Save visit to memory
  useEffect(() => {
    if (property) {
      saveToMemory(property.slug);
    }
  }, [property]);

  if (!property) {
    return (
      <div className="min-h-screen bg-luxury-obsidian flex items-center justify-center text-luxury-marble">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">العقار غير موجود</h1>
          <Link href="/" className="text-luxury-gold hover:underline">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  const images = property.images && property.images.length > 0 ? property.images : [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main className="min-h-screen bg-luxury-obsidian text-luxury-marble selection:bg-luxury-gold/30 pb-20 scroll-smooth">
      {/* 🔮 AIO/SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Royal Nav */}
      <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-luxury-gold hover:text-luxury-marble transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-royal text-xs uppercase tracking-widest">العودة للرئيسية</span>
          </Link>
          <h1 className="text-xl font-bold gold-text tracking-[0.25em] font-display">NOZOLUXE</h1>
          <CurrencySelector />
        </div>
      </nav>

      {/* Hero Animated Slider */}
      <section className="relative h-[85vh] overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={images[currentImage]} 
              alt={`${property.name} - image ${currentImage}`}
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* 💎 Platinum Scarcity Badge */}
        <div className="absolute top-24 left-8 flex flex-col gap-3 z-30">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-luxury-gold text-luxury-obsidian text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl font-royal uppercase tracking-widest"
          >
            <Sparkles size={14} className="animate-pulse" />
            Elite Availability
          </motion.div>
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-morphism text-white text-[10px] font-royal px-4 py-2 rounded-full flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            {Math.floor(Math.random() * 6) + 3} Travelers Viewing
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-transparent" />

        {/* Slider Controls */}
        <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <button onClick={prevImage} className="p-4 glass-morphism rounded-full border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/20 transition-all">
              <ChevronLeft size={32} strokeWidth={1} />
           </button>
           <button onClick={nextImage} className="p-4 glass-morphism rounded-full border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/20 transition-all">
              <ChevronRight size={32} strokeWidth={1} />
           </button>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
           {images.map((_: any, i: number) => (
             <button 
               key={i} 
               onClick={() => setCurrentImage(i)}
               className={`h-1.5 transition-all duration-500 rounded-full ${i === currentImage ? 'w-8 bg-luxury-gold' : 'w-2 bg-white/30 hover:bg-white/50'}`} 
             />
           ))}
        </div>

        {/* Floating Content Banner */}
        <div className="absolute bottom-24 w-full container mx-auto px-6 text-right" dir="rtl">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 text-luxury-gold mb-6 font-royal text-xs tracking-widest uppercase">
               <MapPin size={16} />
               <span>{property.destination} — {property.cluster_ar}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 leading-none italic">{property.name}</h1>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-1 bg-black/40 px-4 py-2 rounded-xl backdrop-blur-md">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={14} fill={s <= (property.royal_rating || 4) ? "#D4AF37" : "none"} className="text-luxury-gold" />
                ))}
              </div>
              <span className="px-5 py-2 glass-morphism rounded-2xl border border-luxury-gold/20 text-[10px] font-royal tracking-[0.3em] uppercase underline-offset-4 underline decoration-luxury-gold">
                {property.type}
              </span>
              {property.sovereign_verified && <SovereignBadge />}
              {/* 🏺 Imperial Price Anchor */}
              <div className="px-5 py-2 bg-luxury-gold/10 rounded-2xl border border-luxury-gold/30 text-sm font-bold text-luxury-gold font-royal">
                {convert(property.base_price_usd || 500).amount} {convert(property.base_price_usd || 500).symbol} <span className="text-[10px] opacity-60">/ ليلة</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Details Section */}
      <div className="container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Detail Column (Left in visual flow, right in RTL logic) */}
        <div className="lg:col-span-2 space-y-20">
          
          {/* Royal Offer Banner - Filling the "sparse data" gap */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden p-10 rounded-[3rem] border border-luxury-gold/30 bg-gold-gradient group"
          >
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full" />
             <div className="relative z-10 text-luxury-obsidian flex flex-col md:flex-row items-center justify-between gap-6 font-royal">
                <div className="text-center md:text-right">
                   <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Exclusive Royal Offer</span>
                   </div>
                   <h2 className="text-3xl font-display font-bold leading-tight">{property.special_offer}</h2>
                </div>
                <button className="bg-luxury-obsidian text-luxury-gold px-10 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all text-sm">
                   استفد من العرض
                </button>
             </div>
          </motion.section>

          {/* Expert Insight */}
          <section className="space-y-8" dir="rtl">
             <div className="flex items-center gap-4">
                < Award className="text-luxury-gold" size={32} />
                <h2 className="text-4xl font-display gold-text">{uiCopy.hotel_page.why_we_chose_it}</h2>
             </div>
             <p className="text-2xl leading-[1.8] text-luxury-marble/80 font-royal font-light">
               {property.saudi_fit_reason_ar}
             </p>
          </section>

          {/* Amenities Grid */}
          <section className="space-y-8" dir="rtl">
             <h3 className="text-xl font-display italic text-luxury-gold">{uiCopy.hotel_page.highlights}</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {(property.amenities || ["تكييف", "خدمة غرف", "انترنت فائق"]).map((amen: string, i: number) => (
                  <div key={i} className="glass-morphism p-6 rounded-3xl border border-luxury-gold/10 flex flex-col items-center gap-4 text-center group hover:border-luxury-gold transition-all">
                     <div className="bg-luxury-gold/20 p-4 rounded-full text-luxury-gold group-hover:scale-110 transition-transform">
                        {amen.includes("Spa") ? <Sparkles size={24} /> : 
                         amen.includes("Pool") ? <Waves size={24} /> : 
                         amen.includes("WiFi") ? <Globe size={24} /> : 
                         amen.includes("Concierge") ? <Award size={24} /> : <CheckCircle2 size={24} />}
                     </div>
                     <span className="text-sm font-royal font-light">{amen}</span>
                  </div>
                ))}
             </div>
          </section>

          {/* Scores Breakdown */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6" dir="rtl">
             {[
               { label: uiCopy.filters.family, score: property.family_score, icon: ShieldCheck },
               { label: uiCopy.filters.honeymoon, score: property.honeymoon_score, icon: Star },
               { label: uiCopy.filters.privacy || 'خصوصية', score: property.privacy_score, icon: Umbrella },
               { label: uiCopy.filters.nature || 'طبيعة', score: property.nature_score, icon: Wind },
             ].map((item, i) => (
               <div key={i} className="text-center group">
                  <div className="relative w-24 h-24 mx-auto mb-4 p-1 rounded-full border border-luxury-gold/20 flex items-center justify-center">
                     <div className="absolute inset-0 bg-luxury-gold/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                     <div className="text-2xl font-display gold-text">{item.score}/5</div>
                  </div>
                  <div className="text-[10px] font-royal opacity-40 uppercase tracking-widest">{item.label}</div>
               </div>
             ))}
          </section>

        </div>

        {/* Conversion Column */}
        <aside className="space-y-8" dir="rtl">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="glass-morphism p-10 rounded-[3rem] border border-luxury-gold/30 sticky top-24 shadow-2xl"
           >
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-3xl font-display gold-text italic">احجز رحلة العمر</h3>
                 <div className="text-right">
                    <div className="text-2xl font-bold text-luxury-gold font-royal">
                       {convert(property.base_price_usd || 500).amount} {convert(property.base_price_usd || 500).symbol}
                    </div>
                    <div className="text-[10px] opacity-40 uppercase tracking-widest">فقط لهذه الليلة</div>
                 </div>
              </div>
              <p className="text-sm font-royal text-luxury-marble/40 mb-10">استمتع بتجربة مخصصة تبدأ باتصال بسيط بكبار منسقينا.</p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-luxury-gold/50 group">
                   <Calendar size={20} className="group-hover:text-luxury-gold transition-colors" />
                   <span className="text-sm font-royal">تخصيص كامل للموعد</span>
                </div>
                <div className="flex items-center gap-4 text-luxury-gold/50 group">
                   <Utensils size={20} className="group-hover:text-luxury-gold transition-colors" />
                   <span className="text-sm font-royal">تجارب طعام حصرية</span>
                </div>
              </div>

              <a 
                href={property.official_url} 
                target="_blank"
                className="block w-full text-center bg-gold-gradient py-5 rounded-2xl text-luxury-obsidian font-bold hover:scale-[1.03] active:scale-95 transition-all font-royal shadow-luxury-glow mb-6"
              >
                تواصل مع منسق الرحلة
              </a>
              
              <div className="flex items-center justify-center gap-4 border-t border-luxury-gold/10 pt-8 opacity-40">
                 <ShieldCheck size={20} />
                 <span className="text-[10px] font-royal uppercase tracking-widest leading-none">Best Price Guaranteed</span>
              </div>
           </motion.div>

           <div className="glass-morphism p-8 rounded-[2rem] border border-luxury-gold/10 text-center space-y-4">
              <Sparkles className="mx-auto text-luxury-gold" size={32} />
              <h4 className="text-sm font-display font-medium tracking-widest">التفاصيل التي تهم الروح</h4>
              <p className="text-[10px] font-royal opacity-40 leading-relaxed italic">"في نُزُل الفخامة، نحن لا نحجز لك غرفة، نحن ننقلك إلى عالم آخر."</p>
           </div>
        </aside>

      </div>
    </main>
  );
}
