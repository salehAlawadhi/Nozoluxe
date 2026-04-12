"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

// 🏺 The Sovereign Badge: The Seal of Absolute Trust
// As a 50-year veteran, I know that for the GCC Elite, Trust 
// is the only currency that matters.

export default function SovereignBadge() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-luxury-gold/10 rounded-full border border-luxury-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] group hover:bg-luxury-gold/20 transition-all cursor-default"
    >
      <div className="relative">
        <ShieldCheck size={14} className="text-luxury-gold relative z-10" />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-luxury-gold rounded-full -z-0"
        />
      </div>
      <span className="text-[9px] font-bold text-luxury-gold font-royal uppercase tracking-widest">
        Nozoluxe Sovereign Verified
      </span>
      <Sparkles size={10} className="text-luxury-gold/50 group-hover:text-luxury-gold transition-colors" />
    </motion.div>
  );
}
