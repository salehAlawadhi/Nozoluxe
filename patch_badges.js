const fs = require('fs');

// Patch Page.tsx
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!pageContent.includes('import SmartBadge from "@/components/SmartBadge";')) {
    pageContent = pageContent.replace(
        'import SovereignBadge from "@/components/SovereignBadge";',
        'import SovereignBadge from "@/components/SovereignBadge";\nimport SmartBadge from "@/components/SmartBadge";'
    );
}

const badgeRegex = /<div className="flex flex-wrap gap-2 mb-4">[\s\S]*?<\/div>/m;
const newBadgeRender = `
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prop.tags_ar?.slice(0, 2).map((tag: string, i: number) => (
                      <span key={i} className="px-3 py-1 rounded-full border border-luxury-marble/20 text-[10px] font-royal text-luxury-marble/60 bg-luxury-obsidian/50 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                    {(prop.family_score || 0) >= 4 && <SmartBadge type="family" />}
                    {prop.tags?.includes("private_pool") && <SmartBadge type="private_pool" />}
                  </div>`;

if (pageContent.match(badgeRegex)) {
    pageContent = pageContent.replace(badgeRegex, newBadgeRender);
} else if (pageContent.includes('key={prop.id || index}')) {
    // Manually inject if regex didn't work and the structure is slightly different
    pageContent = pageContent.replace(
        /<h3 className="text-2xl font-display text-luxury-marble mb-2 group-hover:text-luxury-gold transition-colors">/g,
        newBadgeRender + '\n                  <h3 className="text-2xl font-display text-luxury-marble mb-2 group-hover:text-luxury-gold transition-colors">'
    );
}

fs.writeFileSync('src/app/page.tsx', pageContent);

console.log("Badges patched into page.tsx");
