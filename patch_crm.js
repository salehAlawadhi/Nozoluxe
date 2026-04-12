const fs = require('fs');

let fileContent = fs.readFileSync('src/components/PropertyClient.tsx', 'utf8');

const oldGenerateWhatsApp = /const generateWhatsAppMessage = \(\) => \{\n[\s\S]*?return encodeURIComponent\(msg\);\n  \};/m;

const newGenerateWhatsApp = `const generateWhatsAppMessage = () => {
    // Collect the data to act as a CRM entry point
    const priceText = property.estimated_price_usd ? \`\${convert(property.estimated_price_usd).amount} \${convert(property.estimated_price_usd).symbol}\` : "غير محدد";
    const historyText = recentlyViewed.length > 1 ? recentlyViewed.slice(0, 3).join(", ") : "لا يوجد";

    const msg = \`أهلاً نُزُل الفخامة،
أرغب بمعرفة التوافر والأسعار لطلب الحجز 🛎️

*🏨 العقار:* \${property.name}
*📍 الوجهة:* \${property.destination}
*💰 السعر التقديري لليلة:* \${priceText}

---
*🔍 نظرة سريعة على ملفي:*
- شاهدت مؤخراً: \${historyText}
- أنا أبحث عن: (أرجو تعبئة التفاصيل من قبلك: تواريخ، عدد ضيوف...)

شكراً لكم.\`;

    return encodeURIComponent(msg);
  };`;

if (fileContent.match(oldGenerateWhatsApp)) {
  fileContent = fileContent.replace(oldGenerateWhatsApp, newGenerateWhatsApp);
  fs.writeFileSync('src/components/PropertyClient.tsx', fileContent);
  console.log("WhatsApp CRM Logic for PropertyClient patched.");
}

let wizardContent = fs.readFileSync('src/components/ConciergeWizard.tsx', 'utf8');

const oldWizardWhatsApp = /const generateWhatsAppMessage = \(\) => \{\n[\s\S]*?return encodeURIComponent\(msg\);\n  \};/m;

const newWizardWhatsApp = `const generateWhatsAppMessage = () => {
    const audienceAr = prefs.audience === "family" ? "عائلة" : "زوجين / شهر عسل";
    const vibeAr = prefs.vibe === "nature" ? "طبيعة وهدوء" : prefs.vibe === "sea" ? "بحر وإطلالة" : "مدينة وحيوية";
    const privacyAr = prefs.privacy ? "نعم، أبحث عن خصوصية عالية (مسبح خاص/فيلا)" : "لا يشترط، أبحث عن فخامة عامة";

    let msg = \`أهلاً فريق نُزُل الفخامة 👑،
استخدمت المساعد الذكي وأحتاج مساعدتكم في تخطيط رحلتي إلى تركيا.

*📋 تفضيلاتي (My Profile):*
- *السفر كـ:* \${audienceAr}
- *الأجواء المفضلة:* \${vibeAr}
- *الخصوصية:* \${privacyAr}

---
*✨ ترشيحات النظام لي:*
\`;

    if (recommended.length > 0) {
      recommended.forEach((p, i) => {
        msg += \`\${i+1}. \${p.name} (\${p.destination}) - نسبة المطابقة: \${p.matchScore} نقطة\\n\`;
      });
    } else {
      msg += "لم يقم النظام باختيار ترشيحات، أرجو ترشيح خيارات مناسبة لي.\\n";
    }

    msg += \`\\nالرجاء إخباري بالتوافر والأسعار وأفضل الخيارات. شكراً.\`;
    return encodeURIComponent(msg);
  };`;

if (wizardContent.match(oldWizardWhatsApp)) {
  wizardContent = wizardContent.replace(oldWizardWhatsApp, newWizardWhatsApp);
  fs.writeFileSync('src/components/ConciergeWizard.tsx', wizardContent);
  console.log("WhatsApp CRM Logic for ConciergeWizard patched.");
}
