"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, Calendar, Sparkles } from "lucide-react";

// 🏛️ The Platinum Footer: Ergonometric Majesty for Mobile
// As a 50-year veteran, I know that for GCC luxury, WhatsApp (MessageSquare)
// and Voice (Phone) are the primary conversion channels.

export default function PlatinumFooter() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 w-full z-[100] md:hidden p-4 pointer-events-none"
    >
      <div className="glass-morphism rounded-full p-2 flex items-center gap-2 pointer-events-auto border border-luxury-gold/30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-luxury-obsidian/80 backdrop-blur-2xl">

        {/* Contact Concierge */}
        <div className="flex gap-1 ml-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold"
          >
            <MessageSquare size={20} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold"
          >
            <Phone size={20} />
          </motion.button>
        </div>

        {/* Primary CTA: Seize the Legacy */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 bg-gold-gradient h-12 rounded-full flex items-center justify-center gap-3 text-luxury-obsidian font-bold font-royal text-sm shadow-luxury-glow"
        >
          <Calendar size={18} />
          <span>اغتنم التجربة الملكية</span>
          <Sparkles size={14} className="animate-pulse" />
        </motion.button>
      </div>
    </motion.div>
  );
}
