"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, MapPin, Star, Shield, Award, Menu, X } from "lucide-react";

// Mock property data from our processed JSON (First 3 for the Hero/Featured)
const featuredProperties = [
  {
    id: "1",
    name: "NG Sapanca",
    location: "سابانجا، تركيا",
    type: "منتجع فاخر (Resort)",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "ملاذ عائلي وسط الطبيعة الخلابة لبحيرة سابانجا.",
  },
  {
    id: "26",
    name: "Mandarin Oriental Bodrum",
    location: "بودروم، تركيا",
    type: "فيلا ملكية (Luxury Village)",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "الخصوصية المطلقة على شواطئ البحر الإيجي.",
  },
  {
    id: "51",
    name: "Maxx Royal Belek",
    location: "بيليك، أنطاليا",
    type: "جولف ومنتجع (Golf Resort)",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "تجربة فخامة لا تضاهى مع مرافق عالمية المستوى.",
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-luxury-obsidian text-luxury-marble selection:bg-luxury-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold gold-text tracking-widest font-display">NOZOLUXE</h1>
            <div className="hidden md:flex items-center gap-6 text-sm font-royal">
              <a href="#" className="hover:text-luxury-gold transition-colors">الرئيسية</a>
              <a href="#" className="hover:text-luxury-gold transition-colors">اكتشف العقارات</a>
              <a href="#" className="hover:text-luxury-gold transition-colors">عن الشركة</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 rounded-full border border-luxury-gold/50 text-sm hover:bg-luxury-gold/10 transition-all font-royal">
              تسجيل الدخول
            </button>
            <button className="px-6 py-2 rounded-full bg-gold-gradient text-luxury-obsidian text-sm font-bold shadow-luxury-glow hover:scale-105 transition-all font-royal">
              احجز الآن
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-luxury-obsidian/60 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover grayscale-[30%] opacity-40"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-with-swimming-pool-and-palm-trees-4375-large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-luxury-gold font-royal tracking-widest mb-4">حصرياً للنخبة</h2>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8">
              الفخامة كما <br /> <span className="gold-text">لم تراها من قبل</span>
            </h1>
            
            <div className="max-w-3xl mx-auto glass-morphism p-2 rounded-full flex items-center gap-2 mt-12">
              <div className="flex-1 flex items-center px-4 gap-3">
                <Search className="text-luxury-gold" size={20} />
                <input 
                  type="text" 
                  placeholder="ابحث عن وجهتك التالية، فيلتك المفضلة..." 
                  className="bg-transparent border-none outline-none w-full text-sm font-royal placeholder:text-luxury-marble/50"
                />
              </div>
              <button className="bg-gold-gradient px-8 py-3 rounded-full text-luxury-obsidian font-bold hover:scale-105 transition-all font-royal">
                بحث ملكي
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-20 bg-gradient-to-b from-luxury-gold to-transparent" />
        </div>
      </section>

      {/* Featured Listing */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-luxury-gold font-royal mb-2">مجموعة مختارة</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold">عقاراتنا الأكثر بريقاً</h2>
          </div>
          <button className="text-luxury-gold flex items-center gap-2 hover:gap-4 transition-all font-royal">
            شاهد الكل <span>←</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProperties.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image 
                src={property.image} 
                alt={property.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-transparent z-10" />
              
              <div className="absolute bottom-0 w-full p-8 z-20">
                <div className="flex items-center gap-2 text-luxury-gold mb-3">
                  <MapPin size={16} />
                  <span className="text-xs uppercase tracking-widest font-royal">{property.location}</span>
                </div>
                <h4 className="text-2xl font-bold mb-2 font-display">{property.name}</h4>
                <p className="text-sm text-luxury-marble/70 mb-6 font-royal">{property.description}</p>
                <div className="glass-morphism p-4 rounded-2xl flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-luxury-gold font-bold">بدءاً من $1,200 / ليلة</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="#D4AF37" className="text-luxury-gold" />)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Destination Clusters - Powered by Jules Analysis */}
      <section className="py-24 bg-luxury-obsidian/50">
        <div className="container mx-auto px-6">
          <h3 className="text-luxury-gold font-royal text-center mb-16 tracking-[0.3em]">اكتشف الوجهات الملكية</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["سابانجا والطبيعة", "ملاذات الجبال", "طبيعة البحر الأسود", "بودروم الإيجية", "غوجك وفتحية"].map((cluster, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-xl glass-morphism border-luxury-gold/30 hover:border-luxury-gold transition-all font-royal text-sm"
              >
                {cluster}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 glass-morphism border-y border-luxury-gold/10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <Shield className="text-luxury-gold" size={48} />
            <h5 className="text-xl font-bold font-display">أمان مطلق</h5>
            <p className="text-luxury-marble/60 text-sm font-royal">حماية كاملة لبياناتك وخصوصية حجوزاتك.</p>
          </div>
          <div className="flex flex-col items-center gap-4 border-luxury-gold/10 md:border-x px-12">
            <Award className="text-luxury-gold" size={48} />
            <h5 className="text-xl font-bold font-display">جودة ملكية</h5>
            <p className="text-luxury-marble/60 text-sm font-royal">فنادق مختارة بعناية فائقة لتروي فخامة ذوقك.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Star className="text-luxury-gold" size={48} />
            <h5 className="text-xl font-bold font-display">24/7 خدمات كونسيرج</h5>
            <p className="text-luxury-marble/60 text-sm font-royal">فريقنا متاح دائماً لتلبية كافة احتياجاتك.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 container mx-auto px-6 border-t border-luxury-gold/10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <h1 className="text-3xl font-bold gold-text mb-6">NOZOLUXE</h1>
            <p className="text-luxury-marble/50 text-sm leading-relaxed font-royal">
              نصنع تجارب السفر الفاخرة ونوفر لك فرصة الإقامة في أكثر العقارات تميزاً حول العالم.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm font-royal">
            <div className="flex flex-col gap-4">
              <span className="text-luxury-gold font-bold">الروابط</span>
              <a href="#" className="hover:text-luxury-gold transition-colors">عقاراتنا</a>
              <a href="#" className="hover:text-luxury-gold transition-colors">الوجهات</a>
              <a href="#" className="hover:text-luxury-gold transition-colors">الأسئلة الشائعة</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-luxury-gold font-bold">قانوني</span>
              <a href="#" className="hover:text-luxury-gold transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-luxury-gold transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-luxury-gold/5 text-center text-xs text-luxury-marble/30 font-royal">
          © 2026 Nozoluxe. جميع الحقوق محفوظة لشركة جوجل. تصميم بواسطة Antigravity AI.
        </div>
      </footer>
    </main>
  );
}
