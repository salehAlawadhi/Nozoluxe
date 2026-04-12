const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/properties_enriched.json');
let content = fs.readFileSync(filePath, 'utf8');

// Remove BOM
if (content.charCodeAt(0) === 0xFEFF) {
  content = content.slice(1);
}

// Remove other potential hidden chars in keys like "﻿id"
content = content.replace(/\uFEFF/g, '');

try {
  const json = JSON.parse(content);
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
  console.log('JSON cleaned successfully');
} catch (e) {
  console.error('Failed to parse JSON after cleaning:', e.message);
}
