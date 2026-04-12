const fs = require('fs');

const pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// Insert the Concierge CTA right before the Bento Discovery section
const sectionToInsertBefore = '{/* Bento Discovery: The Visual Map */}';
const conciergeCTA = `
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

`;

if (pageContent.includes(sectionToInsertBefore) && !pageContent.includes("AI Concierge CTA")) {
    const updatedContent = pageContent.replace(sectionToInsertBefore, conciergeCTA + '      ' + sectionToInsertBefore);
    fs.writeFileSync('src/app/page.tsx', updatedContent);
    console.log("Concierge CTA injected successfully.");
} else {
    console.log("Section not found or already injected.");
}
