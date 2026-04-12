"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { useRoyalPrice } from "@/hooks/useRoyalPrice";

// 🏺 The Imperial Itinerary Card: Holistic Vision
// As a 50-year veteran, I know that for the GCC Elite, luxury 
// is not a place, but a journey.

interface ItineraryCardProps {
  itinerary: {
    slug: string;
    name: string;
    duration: string;
    destinations: string[];
    image: string;
    description: string;
    highlights: string[];
    base_price_usd: number;
  };
}

export default function ItineraryCard({ itinerary }: ItineraryCardProps) {
  const { convert } = useRoyalPrice();
  const { amount, symbol } = convert(itinerary.base_price_usd);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-luxury-gold/10 bg-luxury-obsidian/40 backdrop-blur-xl transition-all duration-700 shadow-luxury-glow"
    >
      <Image 
        src={itinerary.image} 
        alt={itinerary.name} 
        fill 
        className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[2s] pointer-events-none" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-luxury-obsidian/20 to-transparent" />
      
      <div className="absolute top-8 right-8 flex flex-col items-end gap-3 z-20">
         <div className="flex gap-2">
            <span className="px-4 py-1.5 glass-morphism rounded-full border border-luxury-gold/20 text-[9px] font-royal tracking-widest text-luxury-gold uppercase bg-luxury-gold/10">
               JOURNEY
            </span>
         </div>
      </div>

      <div className="absolute bottom-10 left-10 right-10 z-20" dir="rtl">
         <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-luxury-gold" size={16} />
            <span className="text-xs font-royal text-luxury-gold/80">{itinerary.duration}</span>
         </div>
         
         <h3 className="text-3xl font-display gold-text mb-4 italic leading-tight">{itinerary.name}</h3>
         
         <p className="text-xs font-royal text-luxury-marble/60 line-clamp-2 mb-8 leading-relaxed">
            {itinerary.description}
         </p>

         <div className="flex items-center justify-between border-t border-luxury-gold/10 pt-6">
            <div className="text-right">
               <div className="text-xl font-bold text-luxury-gold font-royal">{amount} {symbol}</div>
               <div className="text-[8px] opacity-40 uppercase tracking-widest">تبدأ الرحلة من</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-obsidian transition-all group/btn shadow-luxury-glow"
            >
               <ArrowRight className="rotate-180" size={20} />
            </motion.button>
         </div>
      </div>

      {/* Highlights Overlay (Desktop Hover) */}
      <div className="absolute inset-0 bg-luxury-obsidian/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-12 text-center pointer-events-none">
         <Sparkles className="text-luxury-gold mb-6" size={32} />
         <h4 className="text-xl font-display gold-text mb-6">مزايا حصرية</h4>
         <div className="space-y-4">
            {itinerary.highlights.map((h, i) => (
               <div key={i} className="text-xs font-royal text-luxury-marble/80 tracking-widest uppercase">{h}</div>
            ))}
         </div>
         <div className="mt-12 w-12 h-px bg-luxury-gold/30" />
      </div>
    </motion.div>
  );
}
