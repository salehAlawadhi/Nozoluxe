const fs = require('fs');

// Patch PropertyClient
let propertyContent = fs.readFileSync('src/components/PropertyClient.tsx', 'utf8');
const oldWaMeProp = 'https://wa.me/905550000000?text=';
const newWaMe = 'https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905550000000"}?text=';

propertyContent = propertyContent.replace(oldWaMeProp, newWaMe);
fs.writeFileSync('src/components/PropertyClient.tsx', propertyContent);

// Patch ConciergeWizard
let wizardContent = fs.readFileSync('src/components/ConciergeWizard.tsx', 'utf8');
wizardContent = wizardContent.replace(oldWaMeProp, newWaMe);
fs.writeFileSync('src/components/ConciergeWizard.tsx', wizardContent);

console.log("WhatsApp Environment variable logic integrated.");
