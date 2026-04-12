const fs = require('fs');

let fileContent = fs.readFileSync('src/components/PropertyClient.tsx', 'utf8');

// Ensure grid layout works gracefully on mobile
const originalDnaGrid = '<div className="grid grid-cols-2 md:grid-cols-5 gap-6">';
const newDnaGrid = '<div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">';

fileContent = fileContent.replace(originalDnaGrid, newDnaGrid);

const originalGccGrid = '<div className="grid grid-cols-1 md:grid-cols-2 gap-6">';
const newGccGrid = '<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">';

fileContent = fileContent.replace(originalGccGrid, newGccGrid);

fs.writeFileSync('src/components/PropertyClient.tsx', fileContent);
console.log("Mobile grid padding adjusted.");
