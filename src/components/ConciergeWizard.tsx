"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight, ChevronLeft, CheckCircle2, ArrowLeft, Send } from "lucide-react";
import properties from "@/data/properties_enriched.json";

type Step = "audience" | "vibe" | "privacy" | "results";

interface Preferences {
  audience: string;
  vibe: string;
  privacy: boolean;
}

export default function ConciergeWizard() {
  const [step, setStep] = useState<Step>("audience");
  const [prefs, setPrefs] = useState<Preferences>({ audience: "", vibe: "", privacy: false });
  const [recommended, setRecommended] = useState<{slug: string; name: string; destination: string; type: string; saudi_fit_reason_ar: string; images: string[]}[]>([]);

  // 1. Audience
  const handleAudience = (audience: string) => {
    setPrefs({ ...prefs, audience });
    setStep("vibe");
  };

  // 2. Vibe
  const handleVibe = (vibe: string) => {
    setPrefs({ ...prefs, vibe });
    setStep("privacy");
  };

  // 3. Privacy & Calculate
  const handlePrivacy = (privacy: boolean) => {
    const finalPrefs = { ...prefs, privacy };
    setPrefs(finalPrefs);
    calculateRecommendations(finalPrefs);
    setStep("results");
  };

  const calculateRecommendations = (preferences: Preferences) => {
    // Scoring logic based on properties data
    const scoredProps = properties.map((p: any) => {
      let score = 0;

      if (preferences.audience === "family" && (p.family_score || 0) >= 4) score += 3;
      if (preferences.audience === "couple" && (p.honeymoon_score || 0) >= 4) score += 3;

      if (preferences.vibe === "nature" && (p.nature_score || 0) >= 4) score += 3;
      if (preferences.vibe === "sea" && p.tags?.includes("sea_view")) score += 3;
      if (preferences.vibe === "city" && p.tags?.includes("city")) score += 3;

      if (preferences.privacy && (p.privacy_score || 0) >= 4) score += 4;
      if (preferences.privacy && p.tags?.includes("private_pool")) score += 2;

      return { ...p, matchScore: score };
    });

    // Sort and take top 3
    scoredProps.sort((a, b) => b.matchScore - a.matchScore);
    setRecommended(scoredProps.slice(0, 3));
  };

  const resetWizard = () => {
    setStep("audience");
    setPrefs({ audience: "", vibe: "", privacy: false });
    setRecommended([]);
  };

  const generateWhatsAppMessage = () => {
    const audienceAr = prefs.audience === "family" ? "عائلة" : "زوجين";
    const vibeAr = prefs.vibe === "nature" ? "طبيعة وهدوء" : prefs.vibe === "sea" ? "بحر وإطلالة" : "مدينة وحيوية";
    const privacyAr = prefs.privacy ? "نعم، أبحث عن خصوصية عالية" : "لا يشترط";

    let msg = `أهلاً نُزُل الفخامة،\nأرغب بمساعدة في تخطيط رحلتي إلى تركيا.\n\nتفضيلاتي:\n- السفر كـ: ${audienceAr}\n- الأجواء المفضلة: ${vibeAr}\n- خصوصية تامة: ${privacyAr}\n\n`;

    if (recommended.length > 0) {
      msg += `من ترشيحات المساعد الذكي:\n`;
      recommended.forEach((p, i) => {
        msg += `${i+1}. ${p.name} (${p.destination})\n`;
      });
    }

    return encodeURIComponent(msg);
  };

  return (
    <div className="bg-luxury-obsidian/80 backdrop-blur-xl border border-luxury-gold/20 p-8 rounded-3xl max-w-2xl mx-auto min-h-[400px] flex flex-col justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-luxury-gold/10 blur-[80px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {/* Step 1: Audience */}
        {step === "audience" && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
            dir="rtl"
          >
            <div className="text-center">
              <Sparkles className="text-luxury-gold mx-auto mb-4" size={32} />
              <h3 className="text-3xl font-display text-luxury-marble mb-2">من سيسافر معك؟</h3>
              <p className="text-luxury-marble/60 font-royal text-sm">لنبدأ بتصميم تجربتك الملكية في تركيا.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleAudience("family")}
                className="p-6 rounded-2xl border border-luxury-marble/10 bg-luxury-charcoal/30 hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all group text-right"
              >
                <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                <h4 className="text-lg font-display text-luxury-marble mb-1 group-hover:text-luxury-gold transition-colors">عائلة</h4>
                <p className="text-luxury-marble/50 text-xs font-royal">نبحث عن مساحات واسعة وأنشطة تناسب الجميع.</p>
              </button>
              <button
                onClick={() => handleAudience("couple")}
                className="p-6 rounded-2xl border border-luxury-marble/10 bg-luxury-charcoal/30 hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all group text-right"
              >
                <div className="text-2xl mb-2">🥂</div>
                <h4 className="text-lg font-display text-luxury-marble mb-1 group-hover:text-luxury-gold transition-colors">زوجين / شهر عسل</h4>
                <p className="text-luxury-marble/50 text-xs font-royal">نبحث عن الهدوء، الرومانسية، والتجارب الاستثنائية.</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Vibe */}
        {step === "vibe" && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
            dir="rtl"
          >
            <div className="text-center">
              <h3 className="text-3xl font-display text-luxury-marble mb-2">ما هي الأجواء المفضلة؟</h3>
              <p className="text-luxury-marble/60 font-royal text-sm">اختر الطابع الذي تبحث عنه لإقامتك.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onClick={() => handleVibe("nature")} className="p-6 rounded-2xl border border-luxury-marble/10 bg-luxury-charcoal/30 hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all text-center group">
                <div className="text-3xl mb-3">🌲</div>
                <h4 className="text-md font-display text-luxury-marble group-hover:text-luxury-gold">طبيعة وهدوء</h4>
                <p className="text-luxury-marble/50 text-[10px] font-royal mt-2">بحيرات، غابات، وجبال</p>
              </button>
              <button onClick={() => handleVibe("sea")} className="p-6 rounded-2xl border border-luxury-marble/10 bg-luxury-charcoal/30 hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all text-center group">
                <div className="text-3xl mb-3">🌊</div>
                <h4 className="text-md font-display text-luxury-marble group-hover:text-luxury-gold">بحر وإطلالة</h4>
                <p className="text-luxury-marble/50 text-[10px] font-royal mt-2">شواطئ خاصة ومنتجعات ساحلية</p>
              </button>
              <button onClick={() => handleVibe("city")} className="p-6 rounded-2xl border border-luxury-marble/10 bg-luxury-charcoal/30 hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all text-center group">
                <div className="text-3xl mb-3">🏙️</div>
                <h4 className="text-md font-display text-luxury-marble group-hover:text-luxury-gold">مدينة وحيوية</h4>
                <p className="text-luxury-marble/50 text-[10px] font-royal mt-2">قرب الأسواق والمطاعم</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Privacy */}
        {step === "privacy" && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
            dir="rtl"
          >
            <div className="text-center">
              <h3 className="text-3xl font-display text-luxury-marble mb-2">هل تبحث عن خصوصية تامة؟</h3>
              <p className="text-luxury-marble/60 font-royal text-sm">مثل المسابح الخاصة والفيلات المستقلة.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => handlePrivacy(true)}
                className="p-6 rounded-2xl border border-luxury-marble/10 bg-luxury-charcoal/30 hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all text-right group"
              >
                <h4 className="text-lg font-display text-luxury-marble mb-2 group-hover:text-luxury-gold">نعم، خصوصية عالية</h4>
                <p className="text-luxury-marble/50 text-xs font-royal">أفضل الفيلات والمسابح المغلقة بالكامل.</p>
              </button>
              <button
                onClick={() => handlePrivacy(false)}
                className="p-6 rounded-2xl border border-luxury-marble/10 bg-luxury-charcoal/30 hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all text-right group"
              >
                <h4 className="text-lg font-display text-luxury-marble mb-2 group-hover:text-luxury-gold">لا يشترط</h4>
                <p className="text-luxury-marble/50 text-xs font-royal">أبحث عن مرافق ممتازة وخدمة راقية بشكل عام.</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Results */}
        {step === "results" && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
            dir="rtl"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display text-luxury-gold mb-2">ترشيحات المساعد الذكي</h3>
              <p className="text-luxury-marble/60 font-royal text-sm">بناءً على ذوقك، هذه أفضل الخيارات المناسبة لك:</p>
            </div>

            <div className="space-y-4">
              {recommended.map((prop, i) => (
                <Link key={prop.slug} href={`/property/${prop.slug}`} className="flex items-center gap-4 p-4 rounded-2xl border border-luxury-marble/10 bg-luxury-charcoal/40 hover:bg-luxury-gold/10 hover:border-luxury-gold/30 transition-all group">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image src={prop.images?.[0] || '/placeholder.jpg'} alt={prop.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg text-luxury-marble group-hover:text-luxury-gold transition-colors">{prop.name}</h4>
                    <p className="text-sm text-luxury-marble/50 font-royal mb-2">{prop.destination} • {prop.type}</p>
                    <div className="flex items-center gap-2 text-[10px] text-luxury-gold font-royal">
                      <CheckCircle2 size={12} />
                      <span className="truncate">{prop.saudi_fit_reason_ar?.substring(0, 60)}...</span>
                    </div>
                  </div>
                  <ChevronLeft className="text-luxury-marble/30 group-hover:text-luxury-gold shrink-0" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-luxury-gold/10">
              <a
                href={`https://wa.me/905550000000?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-luxury-gold to-yellow-600 text-luxury-obsidian py-4 rounded-xl font-display font-bold hover:shadow-[0_0_20px_rgba(201,167,74,0.3)] transition-all"
              >
                تأكيد الأسعار والتوافر
                <Send size={18} />
              </a>
              <button
                onClick={resetWizard}
                className="px-6 py-4 rounded-xl border border-luxury-marble/20 text-luxury-marble hover:bg-luxury-marble/5 transition-all font-royal text-sm flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                إعادة البحث
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
