"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useRoyalPriceStore } from "@/hooks/useRoyalPrice";

// 🏺 The Currency Selector: Sovereign Choice
// As a 50-year veteran, I know that Choice is the ultimate luxury.

const currencies = [
  { code: "SAR", name: "ريال سعودي", symbol: "ر.س" },
  { code: "AED", name: "درهم إماراتي", symbol: "د.إ" },
  { code: "KWD", name: "دينار كويتي", symbol: "د.ك" },
  { code: "USD", name: "US Dollar", symbol: "$" }
];

export default function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currency, setCurrency } = useRoyalPriceStore();

  const current = currencies.find(c => c.code === currency) || currencies[0];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-luxury-gold/20 text-xs font-royal text-luxury-gold transition-all hover:border-luxury-gold/50"
      >
        <Globe size={14} />
        <span className="font-bold">{current.code} ({current.symbol})</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full mt-2 left-0 w-48 glass-morphism rounded-2xl border border-luxury-gold/20 shadow-luxury-glow p-2 z-[100] backdrop-blur-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-luxury-obsidian/40 -z-10" />
            <div className="space-y-1">
              {currencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    setCurrency(c.code as any);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-right ${
                    currency === c.code ? 'bg-luxury-gold/20 text-luxury-gold' : 'text-luxury-marble/60 hover:bg-white/5 hover:text-luxury-marble'
                  }`}
                  dir="rtl"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">{c.code}</span>
                    <span className="text-[10px] opacity-60 font-royal">{c.name}</span>
                  </div>
                  {currency === c.code && <Check size={14} className="text-luxury-gold" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
