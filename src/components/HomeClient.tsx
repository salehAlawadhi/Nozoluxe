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
  ChevronLeft,
  Sparkles
} from "lucide-react";

import RoyalSearch from "@/components/RoyalSearch";
import { useRoyalMemory } from "@/hooks/useRoyalMemory";
import uiCopy from "../../nozoluxe_starter_pack/nozoluxe_ui_copy_ar.json";
import CurrencySelector from "@/components/CurrencySelector";
import { useRoyalPrice } from "@/hooks/useRoyalPrice";
import SovereignBadge from "@/components/SovereignBadge";
import SmartBadge from "@/components/SmartBadge";
import ItineraryCard from "@/components/ItineraryCard";
import ConciergeWizard from "@/components/ConciergeWizard";

// Shared Shimmer Effect Component
const Shimmer = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
);

export default function HomeClient({ properties, wizardCandidates, itineraries }: { properties: any[], wizardCandidates: any[], itineraries: any[] }) {
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
              {[uiCopy.nav.destinations, "المجموعات", "المساعد الذكي"].map((item) => (
                <Link key={item} href="#" className="hover:text-luxury-gold transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-gold transition-all group-hover:w-full" />
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
                className="flex flex-col gap-8 text-center space-y-8"
              >
                {[uiCopy.nav.destinations, "المجموعات", "المساعد الذكي"].map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="text-2xl font-display font-light text-luxury-marble hover:text-luxury-gold transition-colors block"
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">

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
                    <Link key={slug} href={`/property/${slug}`} className="min-w-[340px] group block rounded-[2rem] overflow-hidden border border-luxury-gold/10 bg-luxury-charcoal/30 hover:border-luxury-gold/30 hover:bg-luxury-charcoal/50 transition-all duration-500">
                      <div className="relative h-56 overflow-hidden">
                        <Image src={prop.images?.[0] || "/placeholder.jpg"} alt={prop.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
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
