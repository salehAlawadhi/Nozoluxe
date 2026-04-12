const fs = require('fs');

let homeContent = fs.readFileSync('src/components/HomeClient.tsx', 'utf8');
let propertyContent = fs.readFileSync('src/components/PropertyClient.tsx', 'utf8');

// Update images to use sizes for better optimization
homeContent = homeContent.replace(
  /<Image src=\{dest.img\} alt=\{dest.name\} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 blur-\[1px\] group-hover:blur-0" \/>/g,
  '<Image src={dest.img} alt={dest.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 blur-[1px] group-hover:blur-0" />'
);

homeContent = homeContent.replace(
  /<Image src=\{prop.images\?\.\[0\] \|\| '\/placeholder\.jpg'\} alt=\{prop\.name\} fill className="object-cover group-hover:scale-110 transition-transform duration-700" \/>/g,
  '<Image src={prop.images?.[0] || "/placeholder.jpg"} alt={prop.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />'
);

fs.writeFileSync('src/components/HomeClient.tsx', homeContent);

propertyContent = propertyContent.replace(
  /<Image\s*src=\{property\.images\?\.\[currentImageIndex\] \|\| ['"]\/placeholder\.jpg['"]\}\s*alt=\{property\.name \|\| ['"]['"]\}\s*fill\s*className="object-cover"\s*priority\s*\/>/m,
  '<Image src={property.images?.[currentImageIndex] || "/placeholder.jpg"} alt={property.name || ""} fill sizes="100vw" className="object-cover" priority />'
);

fs.writeFileSync('src/components/PropertyClient.tsx', propertyContent);
console.log("Images patched with sizes and priority/lazy loading rules.");
