"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Sparkles,
  ChevronDown,
  Filter,
  X,
  Star,
  ArrowUpRight,
  Navigation
} from "lucide-react";
import properties from "@/data/properties_enriched.json";

// 🧠 Mood/AIO Mapping: Mapping simple desires to complex destinations
const MOOD_MAP: Record<string, string[]> = {
  "ثلج": ["Uludag", "Kartalkaya"],
  "برد": ["Uludag", "Sapanca"],
  "بحر": ["Bodrum", "Antalya", "Fethiye"],
  "هدوء": ["Sapanca", "Bolu", "Abant"],
  "تسوق": ["Istanbul"],
  "طبيعة": ["Rize", "Trabzon", "Uzungol", "Sapanca"]
};

export default function RoyalSearch() {
  const [destination, setDestination] = useState("All");
  const [segment, setSegment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [userCity, setUserCity] = useState<string | null>(null);

  // 🌍 GEO Intelligence: Basic city detection (Mocked/Optional)
  useEffect(() => {
    if ("geolocation" in navigator) {
      // In a real production environment, we'd use an IP-to-GEO service
      // Mocking high-end detection for the Masterpiece
      const mockCities = ["الرياض", "جدة", "دبي", "اسطنبول"];
      setTimeout(() => setUserCity(mockCities[Math.floor(Math.random() * mockCities.length)]), 0);
    }
  }, []);

  const destinations = useMemo(() => ["All", ...Array.from(new Set(properties.map((p: any) => p.destination)))], []);
  const segments = ["All", "family", "honeymoon", "wellness"];

  const filteredProperties = useMemo(() => {
    return properties.filter((p: any) => {
      const matchDest = destination === "All" || p.destination === destination;
      const matchSeg = segment === "All" || p.audience_segments.includes(segment);

      // 🧠 Smart Keyword/Mood Search (AIO)
      const moodDestinations = MOOD_MAP[searchQuery] || [];
      const matchMood = moodDestinations.length > 0 ? moodDestinations.includes(p.destination) : false;

      const matchQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         matchMood;

      return matchDest && matchSeg && (searchQuery === "" || matchQuery);
    });
  }, [destination, segment, searchQuery]);

  return (
    <div className="w-full relative z-30" dir="rtl">
      {/* Search Header Info */}
      <AnimatePresence>
        {userCity && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-royal text-luxury-gold/60 tracking-widest uppercase"
          >
            <Navigation size={10} />
            <span>نُرشح لك الأفضل لرحلتك من {userCity}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Search Bar */}
      <motion.div
        layout
        className="glass-morphism rounded-3xl md:rounded-full p-2 border border-luxury-gold/20 shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-5xl mx-auto"
      >
        {/* Destination Dropdown */}
        <div className="relative flex-1 group w-full">
           <div className="flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-white/5 rounded-full transition-all">
              <MapPin className="text-luxury-gold" size={20} />
              <div className="flex-1 text-right">
                 <div className="text-[10px] font-royal opacity-40 uppercase tracking-widest leading-none">الوجهة</div>
                 <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm font-display font-medium w-full appearance-none cursor-pointer"
                 >
                    {destinations.map(d => <option key={d} value={d} className="bg-luxury-obsidian text-luxury-marble">{d === "All" ? "كافة الوجهات" : d}</option>)}
                 </select>
              </div>
              <ChevronDown size={14} className="text-luxury-gold opacity-50" />
           </div>
        </div>

        <div className="hidden md:block h-10 w-[1px] bg-luxury-gold/10" />

        {/* Search Input: Advanced Mood/Query */}
        <div className="relative flex-1 group w-full px-6">
           <div className="flex items-center gap-3 py-4">
              <Search className="text-luxury-gold" size={20} />
              <div className="flex-1 text-right">
                 <div className="text-[10px] font-royal opacity-40 uppercase tracking-widest leading-none">ابحث عن (بحر، ثلج، طبيعة...)</div>
                 <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ما هو شعورك اليوم؟"
                    className="bg-transparent border-none outline-none text-sm font-display font-medium w-full placeholder:text-luxury-marble/20"
                 />
              </div>
           </div>
        </div>

        <div className="hidden md:block h-10 w-[1px] bg-luxury-gold/10" />

        {/* Vibe Dropdown */}
        <div className="relative flex-1 group w-full">
           <div className="flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-white/5 rounded-full transition-all">
              <Sparkles className="text-luxury-gold" size={20} />
              <div className="flex-1 text-right">
                 <div className="text-[10px] font-royal opacity-40 uppercase tracking-widest leading-none">الأجواء</div>
                 <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm font-display font-medium w-full appearance-none cursor-pointer"
                 >
                    {segments.map(s => (
                       <option key={s} value={s} className="bg-luxury-obsidian text-luxury-marble">
                          {s === "All" ? "كافة الأجواء" : s === 'family' ? 'للعائلات' : s === 'honeymoon' ? 'لعرسان نُزل' : 'استرخاء وسبا'}
                       </option>
                    ))}
                 </select>
              </div>
              <ChevronDown size={14} className="text-luxury-gold opacity-50" />
           </div>
        </div>

        <button
           onClick={() => setIsOpen(!isOpen)}
           className="bg-gold-gradient px-12 py-4 rounded-full text-luxury-obsidian font-bold hover:scale-[1.02] active:scale-95 transition-all font-royal shadow-xl flex items-center justify-center gap-2 group w-full md:w-auto"
        >
           {isOpen ? <X size={20} /> : <Search size={20} />}
           <span>{isOpen ? 'إغلاق' : 'بحث ملكي'}</span>
        </button>
      </motion.div>

      {/* Results Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-full left-0 w-full mt-6 bg-luxury-obsidian/95 backdrop-blur-3xl rounded-[3rem] border border-luxury-gold/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden max-h-[70vh] flex flex-col"
          >
             <div className="p-8 border-b border-luxury-gold/5 flex justify-between items-center">
                <div className="flex items-center gap-4">
                   <Filter size={18} className="text-luxury-gold" />
                   <h3 className="text-lg font-display">نتائج البحث المستنيرة ({filteredProperties.length})</h3>
                </div>
                <div className="px-4 py-1 bg-luxury-gold/10 rounded-full text-[10px] text-luxury-gold font-royal tracking-[0.2em] uppercase">
                   Curated for your location
                </div>
             </div>

             <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto custom-scrollbar flex-1">
                {filteredProperties.map((prop, i) => (
                  <Link key={prop.slug} href={`/property/${prop.slug}`} className="group relative h-64 rounded-3xl overflow-hidden border border-luxury-gold/5 block">
                     <Image
                        src={prop.images[0]}
                        alt={prop.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-luxury-obsidian/40 to-transparent" />

                     <div className="absolute bottom-6 right-6 left-6 text-right">
                        <div className="flex items-center justify-end gap-1 mb-1">
                           {[1, 2, 3, 4, 5].map(s => (
                             <Star key={s} size={8} fill={s <= (prop.royal_rating || 4) ? "#D4AF37" : "none"} className="text-luxury-gold" />
                           ))}
                        </div>
                        <h4 className="text-lg font-bold font-display gold-text group-hover:translate-x-2 transition-transform duration-300">{prop.name}</h4>
                        <div className="flex items-center justify-end gap-2 opacity-50 text-[10px] font-royal tracking-widest mt-1">
                           <span>{prop.destination}</span>
                           <MapPin size={10} />
                        </div>
                     </div>

                     <div className="absolute top-4 left-4 bg-black/40 p-2 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} className="text-luxury-gold" />
                     </div>
                  </Link>
                ))}
             </div>

             {filteredProperties.length === 0 && (
               <div className="p-20 text-center space-y-4">
                  <X size={64} className="mx-auto text-luxury-gold/20 stroke-[1]" />
                  <p className="font-royal text-luxury-marble/40">لم نجد عقاراً يطابِق هذه الخيارات الملكية. جرب تصفية مختلفة.</p>
               </div>
             )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
