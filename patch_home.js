const fs = require('fs');

let homeContent = fs.readFileSync('src/components/HomeClient.tsx', 'utf8');

// There is a missing closing div / motion.div for the mobile menu. Let's fix the structure.
const fixMobileMenuRegex = /<AnimatePresence>[\s\S]*?<\/AnimatePresence>/m;
const newMobileMenu = `<AnimatePresence>
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
        </AnimatePresence>`;

homeContent = homeContent.replace(fixMobileMenuRegex, newMobileMenu);

fs.writeFileSync('src/components/HomeClient.tsx', homeContent);
console.log("Mobile menu layout fixed.");
