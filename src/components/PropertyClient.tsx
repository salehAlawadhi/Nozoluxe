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
  Waves
} from "lucide-react";
import { useRoyalMemory } from "@/hooks/useRoyalMemory";
import uiCopy from "../../nozoluxe_starter_pack/nozoluxe_ui_copy_ar.json";
import CurrencySelector from "@/components/CurrencySelector";
import SovereignBadge from "@/components/SovereignBadge";
import { useRoyalPrice } from "@/hooks/useRoyalPrice";

export default function PropertyClient({ property }: { property: { slug: string; name?: string; destination?: string; type?: string; cluster_ar?: string; saudi_fit_reason_ar?: string; tags_ar?: string[]; images?: string[]; estimated_price_usd?: number; } }) {
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
    const msg = `أهلاً نُزُل الفخامة،\nأرغب بمعرفة التوافر والأسعار لـ: \n*${property.name}* (${property.destination})\n\nشكراً لك.`;
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

            {/* The Nozoluxe Verdict */}
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-display font-bold text-luxury-gold mb-8 flex items-center gap-4">
                <Sparkles size={28} />
                لماذا اخترناه لك؟
              </h2>
              <p className="text-luxury-marble/80 leading-relaxed font-royal text-xl border-r-2 border-luxury-gold/50 pr-6 py-2">
                {property.saudi_fit_reason_ar}
              </p>
            </div>

            {/* Highlights Grid */}
            <div>
              <h3 className="text-sm font-royal text-luxury-gold uppercase tracking-widest mb-8">أبرز المزايا</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.tags_ar?.map((tag: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-luxury-charcoal/30 border border-luxury-marble/5 hover:border-luxury-gold/20 transition-colors">
                    <CheckCircle2 className="text-luxury-gold shrink-0 mt-1" size={20} />
                    <span className="font-royal text-luxury-marble/90">{tag}</span>
                  </div>
                ))}
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
                href={`https://wa.me/905550000000?text=${generateWhatsAppMessage()}`}
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
