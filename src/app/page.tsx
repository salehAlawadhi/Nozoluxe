"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Search,
  MapPin,
  Star,
  Shield,
  ShieldCheck,
  Award,
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Sparkles
} from "lucide-react";
import properties from "@/data/properties_enriched.json";

import RoyalSearch from "@/components/RoyalSearch";
import { useRoyalMemory } from "@/hooks/useRoyalMemory";
import uiCopy from "../../nozoluxe_starter_pack/nozoluxe_ui_copy_ar.json";
import CurrencySelector from "@/components/CurrencySelector";
import { useRoyalPrice } from "@/hooks/useRoyalPrice";
import SovereignBadge from "@/components/SovereignBadge";
import ItineraryCard from "@/components/ItineraryCard";
import itineraries from "@/data/itineraries.json";
import ConciergeWizard from "@/components/ConciergeWizard";

// Shared Shimmer Effect Component
const Shimmer = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const { recentlyViewed } = useRoyalMemory();
  const { convert } = useRoyalPrice();

  // Elite Filter: Top 6 properties by Royal Rating
  const featuredProperties = properties
    .filter((p: { slug: string; name: string; destination: string; images: string[] }) => p.images && p.images.length > 0)
    .sort((a: any, b: any) => (b.royal_rating || 0) - (a.royal_rating || 0))
    .slice(0, 6);

  // 🔄 Auto-rotation logic for the "Living Hero"
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % 3); // Rotate top 3
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Bento Destinations
  const destinations = [
    { name: "سابانجا", ar: "سابانجا والطبيعة", img: "https://images.unsplash.com/photo-1549111440-4530d95966fb?auto=format&fit=crop&w=800&q=80", col: "col-span-2", row: "row-span-2" },
    { name: "بودروم", ar: "بودروم الإيجية", img: "https://images.unsplash.com/photo-1544819667-9750f991bb33?auto=format&fit=crop&w=800&q=80", col: "col-span-1", row: "row-span-1" },
    { name: "أنطاليا", ar: "أنطاليا المتلألئة", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", col: "col-span-1", row: "row-span-2" },
    { name: "إسطنبول", ar: "إسطنبول التاريخية", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80", col: "col-span-1", row: "row-span-1" },
  ];

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  if (!mounted) return null;

  const currentHero = featuredProperties[activeHero] || featuredProperties[0];

  return (
    <main className="min-h-screen bg-luxury-obsidian text-luxury-marble selection:bg-luxury-gold/30 scroll-smooth">

      {/* Dynamic Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-luxury-gold/10 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gold-text tracking-[0.2em] font-display cursor-pointer"
            >
              NOZOLUXE
            </motion.h1>
            <div className="hidden lg:flex items-center gap-8 text-sm font-royal font-light tracking-wide">
              {[uiCopy.nav.destinations, uiCopy.nav.destinations, "المجموعات", "تواصل معنا"].map((item) => (
                <Link key={item} href="#" className="hover:text-luxury-gold transition-all duration-300 relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <CurrencySelector />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-2.5 rounded-full border border-luxury-gold/30 text-xs font-royal hover:border-luxury-gold transition-all"
            >
              عضوية النخبة
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
              className="px-8 py-3 rounded-full bg-gold-gradient text-luxury-obsidian text-sm font-bold shadow-luxury-glow transition-all font-royal"
            >
              {uiCopy.nav.book_now}
            </motion.button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <CurrencySelector />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-luxury-gold relative z-[60]">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Royal Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[55] glass-morphism backdrop-blur-3xl flex flex-col items-center justify-center gap-12"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-luxury-obsidian/40 -z-10" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center space-y-8"
              >
                {[uiCopy.nav.destinations, uiCopy.nav.destinations, "المجموعات", "تواصل معنا"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Link
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-display gold-text hover:tracking-widest transition-all duration-500 block"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-4 w-full px-12"
              >
                <button className="w-full py-4 rounded-full border border-luxury-gold/30 text-luxury-gold font-royal">
                  عضوية النخبة
                </button>
                <button className="w-full py-4 rounded-full bg-gold-gradient text-luxury-obsidian font-bold font-royal">
                  {uiCopy.nav.book_now}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section: Cinematic Foundation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHero}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
             <Image
                src={currentHero.images[0]}
                alt={currentHero.name}
                fill
                className="object-cover grayscale-[20%] brightness-50"
                priority
                sizes="100vw"
                quality={90}
             />
             <div className="absolute inset-0 bg-gradient-to-b from-luxury-obsidian/40 via-transparent to-luxury-obsidian" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            key={activeHero}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-luxury-gold/50" />
              <span className="text-luxury-gold font-royal tracking-[0.4em] text-xs uppercase underline underline-offset-8">Featured Gem: {currentHero.name}</span>
              <div className="h-[1px] w-12 bg-luxury-gold/50" />
            </div>

            <h1 className="text-6xl md:text-9xl font-display font-medium leading-[0.9] mb-12 tracking-tighter shadow-luxury-glow">
              {uiCopy.hero.title_main.split('...')[0]} <span className="gold-text italic">{uiCopy.hero.title_main.split('...')[1]}</span>
            </h1>

            <p className="max-w-2xl mx-auto text-luxury-marble/60 font-royal mb-12 text-lg tracking-wide leading-relaxed">
               {uiCopy.hero.title_sub}
            </p>

            <div className="max-w-4xl mx-auto">
               <RoyalSearch />
            </div>
          </motion.div>
        </div>
      </section>


      {/* AI Concierge CTA */}
      <section className="py-20 container mx-auto px-6">
        {!isWizardOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-luxury-obsidian/80 backdrop-blur-md border border-luxury-gold/20 p-12 rounded-[2rem] text-center max-w-4xl mx-auto relative overflow-hidden group"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-luxury-gold/5 blur-[100px] pointer-events-none group-hover:bg-luxury-gold/10 transition-colors duration-700" />
            <Sparkles className="text-luxury-gold mx-auto mb-6" size={40} />
            <h2 className="text-3xl md:text-5xl font-display font-light text-luxury-marble mb-6">مساعد نُزُلُكس الذكي</h2>
            <p className="text-luxury-marble/60 font-royal text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              دع الذكاء الاصطناعي يرشح لك أفضل الفنادق والمنتجعات الملكية التي تتناسب تماماً مع ذوقك وميزانيتك.
            </p>
            <button
              onClick={() => setIsWizardOpen(true)}
              className="bg-gradient-to-r from-luxury-gold to-yellow-600 text-luxury-obsidian px-10 py-4 rounded-xl font-display font-bold text-lg hover:shadow-[0_0_30px_rgba(201,167,74,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
            >
              ساعدني أختار
              <ChevronRight size={20} />
            </button>
          </motion.div>
        ) : (
          <div id="concierge-wizard">
            <ConciergeWizard />
          </div>
        )}
      </section>

      {/* Bento Discovery: The Visual Map */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-display font-light mb-4 text-luxury-marble">
              {uiCopy.homepage_sections.destinations_title.split(' ')[0]} <span className="gold-text">{uiCopy.homepage_sections.destinations_title.split(' ').slice(1).join(' ')}</span>
           </h2>
           <p className="font-royal text-luxury-marble/40 tracking-widest text-sm max-w-2xl mx-auto">{uiCopy.homepage_sections.destinations_subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
           {destinations.map((dest, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               whileHover={{ scale: 1.01 }}
               className={`${dest.col} ${dest.row} relative rounded-[2rem] overflow-hidden group cursor-pointer border border-luxury-gold/10`}
             >
                <Image src={dest.img} alt={dest.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 blur-[1px] group-hover:blur-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 right-10 flex flex-col items-end">
                   <h3 className="text-3xl font-display gold-text mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{dest.name}</h3>
                   <p className="font-royal text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-widest">{dest.ar}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Imperial Journeys: The Holistic Vision */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
           <div className="space-y-4 text-right md:text-left">
              <div className="flex items-center gap-2 text-luxury-gold font-royal text-xs tracking-[0.3em] uppercase">
                 <Globe size={14} />
                 <span>Curated Experiences</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-light">
                 الرحلات <span className="gold-text">الملكية</span>
              </h2>
              <p className="font-royal text-luxury-marble/40 tracking-widest text-sm max-w-xl">
                 نحن لا نرسم مساراً، بل نصنع إرثاً. اكتشف رحلاتنا المصممة بدقة لتجمع بين أروع الممالك التركية في تجربة واحدة لا تُنسى.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {itineraries.map((itinerary: any, idx: number) => (
             <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
           ))}
        </div>
      </section>

      {/* Featured Masterpieces: Elite Listing */}
      <section className="py-32 bg-luxury-obsidian/30">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-20">
            <div className="space-y-4 text-right md:text-left">
               <div className="flex items-center gap-2 text-luxury-gold font-royal text-xs tracking-[0.3em] uppercase">
                  <Sparkles size={14} />
                  <span>Elite Collection</span>
               </div>
               <h2 className="text-4xl md:text-7xl font-display font-light">
                  {uiCopy.homepage_sections.featured_title.split(' ')[0]} <span className="gold-text">{uiCopy.homepage_sections.featured_title.split(' ').slice(1).join(' ')}</span>
               </h2>
               <p className="font-royal text-luxury-marble/40 tracking-widest text-sm">{uiCopy.homepage_sections.featured_subtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence>
              {featuredProperties.map((property: any, idx: number) => (
                <Link key={property.slug} href={`/property/${property.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group relative h-[650px] rounded-[3rem] overflow-hidden border border-luxury-gold/5 bg-luxury-obsidian shadow-2xl"
                  >
                    <div className="relative h-[80%] overflow-hidden">
                       <Image
                          src={property.images[0]}
                          alt={property.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                          sizes="(max-width: 768px) 100vw, 33vw"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-transparent opacity-60" />
                       <div className="absolute top-8 left-8 flex flex-col items-start gap-3">
                          <div className="flex gap-2">
                             <div className="glass-morphism p-3 rounded-2xl border border-luxury-gold/20 backdrop-blur-xl group-hover:bg-luxury-gold/20 transition-all">
                                <ArrowUpRight className="text-luxury-gold" size={24} />
                             </div>
                             {property.sovereign_verified && <SovereignBadge />}
                          </div>
                          {/* 🏺 Imperial Price Anchor */}
                          <div className="glass-morphism px-3 py-1.5 rounded-xl border border-luxury-gold/20 text-[10px] font-bold text-luxury-gold font-royal tracking-widest shadow-luxury-glow">
                             {convert(property.base_price_usd || 500).amount} {convert(property.base_price_usd || 500).symbol}
                          </div>
                       </div>

                       {/* Floating Luxury Tag */}
                       <div className="absolute bottom-8 right-8">
                          <div className="px-5 py-2 glass-morphism rounded-full border border-luxury-gold/20 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
                             <span className="text-[10px] font-royal tracking-widest text-luxury-gold uppercase">{property.type}</span>
                          </div>
                       </div>
                    </div>

                    <div className="p-8 text-right" dir="rtl">
                      <div className="flex items-center justify-end gap-2 text-luxury-gold/60 mb-2">
                        <span className="text-[10px] font-royal tracking-[0.2em]">{property.destination}</span>
                        <MapPin size={12} />
                      </div>
                      <h4 className="text-2xl font-bold mb-3 font-display gold-text">{property.name}</h4>

                      <div className="flex items-center justify-end gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map(s => (
                          <Star key={s} size={12} fill={s <= (property.royal_rating || 4) ? "#D4AF37" : "none"} className="text-luxury-gold" />
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                         <div className="text-xs font-royal text-luxury-gold italic">{property.special_offer}</div>
                         <ChevronRight className="text-luxury-gold" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Recently Viewed: The Royal Memory in action */}
      <AnimatePresence>
        {mounted && recentlyViewed.length > 0 && (
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
                    <Link key={slug} href={`/property/${slug}`} className="min-w-[300px] group">
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
        )}
      </AnimatePresence>

      {/* Sovereign Trust: The Charter of Authority */}
      <section className="py-40 bg-luxury-obsidian/50 relative overflow-hidden border-y border-luxury-gold/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
             <div className="flex justify-center mb-6">
                <SovereignBadge />
             </div>
             <h2 className="text-4xl md:text-6xl font-display font-light text-luxury-marble">
                {uiCopy.sovereign_trust.title.split(' ')[0]} <span className="gold-text">{uiCopy.sovereign_trust.title.split(' ').slice(1).join(' ')}</span>
             </h2>
             <div className="w-24 h-px bg-luxury-gold/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {uiCopy.sovereign_trust.pillars.map((pillar: { title: string; description: string }, i: number) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.2, duration: 0.8 }}
                 viewport={{ once: true }}
                 className="glass-morphism p-12 rounded-[3.5rem] border border-luxury-gold/10 text-center hover:border-luxury-gold/40 transition-all group relative overflow-hidden"
                 dir="rtl"
               >
                  <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
                  <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-luxury-gold/20 group-hover:scale-110 transition-transform duration-500 shadow-luxury-glow">
                     <ShieldCheck className="text-luxury-gold" size={40} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-display gold-text mb-6 group-hover:tracking-wider transition-all duration-500">{pillar.title}</h3>
                  <p className="font-royal text-luxury-marble/50 leading-[2] text-sm font-light">
                     {pillar.description}
                  </p>
               </motion.div>
             ))}
          </div>
        </div>
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-luxury-gold/5 blur-[180px] rounded-full pointer-events-none -z-10" />
      </section>

      {/* Footer: The Final Impression */}
      <footer className="py-32 bg-black/50">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between gap-20">
              <div className="flex-1 space-y-10">
                 <h1 className="text-4xl font-bold font-display gold-text tracking-widest">NOZOLUXE</h1>
                 <p className="font-royal text-luxury-marble/30 max-w-md leading-loose">
                   نحن لا نبيع إقامات، نحن نصنع ذكريات ملكية في أكثر الوجهات تميزاً. انضم لعالم نُزُل الفخامة واكتشف المعنى الحقيقي للاستجمام.
                 </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 font-royal">
                 <div className="space-y-6 text-right" dir="rtl">
                    <h5 className="text-luxury-gold text-lg mb-8 outline-none">الاستكشاف</h5>
                    {["الوجهات", "عقارات بودروم", "ملاذات سابانجا", "إسطنبول"].map(link => (
                      <Link key={link} href="#" className="block opacity-40 hover:opacity-100 transition-all">{link}</Link>
                    ))}
                 </div>
                 <div className="space-y-6 text-right" dir="rtl">
                    <h5 className="text-luxury-gold text-lg mb-8">الشركة</h5>
                    {["عن نُزُل", "وظائف ملكية", "الصحافة", "اتصل بنا"].map(link => (
                      <Link key={link} href="#" className="block opacity-40 hover:opacity-100 transition-all">{link}</Link>
                    ))}
                 </div>
              </div>
           </div>

           <div className="mt-32 pt-10 border-t border-luxury-gold/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[10px] font-royal">
              <p>© 2026 NOZOLUXE. ALL RIGHTS RESERVED. DESIGNED BY ANTIGRAVITY AI.</p>
              <div className="flex gap-8">
                 <Link href="#">PRIVACY POLICY</Link>
                 <Link href="#">TERMS OF SERVICE</Link>
              </div>
           </div>
        </div>
      </footer>
    </main>
  );
}
