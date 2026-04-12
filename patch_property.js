const fs = require('fs');

let fileContent = fs.readFileSync('src/components/PropertyClient.tsx', 'utf8');

// Replace everything from `export default function PropertyClient` to `useEffect(() => {\n    if (property) {`
const fixRegex = /export default function PropertyClient[\s\S]*?useEffect\(\(\) => \{\n    if \(property\) {/m;

const correctCode = `export default function PropertyClient({ property }: { property: { slug: string; name?: string; destination?: string; type?: string; cluster_ar?: string; saudi_fit_reason_ar?: string; tags_ar?: string[]; images?: string[]; estimated_price_usd?: number; } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewsToday, setViewsToday] = useState(0);
  const { recentlyViewed, saveToMemory } = useRoyalMemory();
  const { convert } = useRoyalPrice();

  useEffect(() => {
    if (property?.slug) {
      const seed = property.slug.charCodeAt(0) + property.slug.charCodeAt(property.slug.length - 1);
      setViewsToday((seed % 15) + 5);
    }
  }, [property?.slug]);

  const generateWhatsAppMessage = () => {
    const msg = \`أهلاً نُزُل الفخامة،\\nأرغب بمعرفة التوافر والأسعار لـ: \\n*\${property.name}* (\${property.destination})\\n\\nشكراً لك.\`;
    return encodeURIComponent(msg);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (property) {`;

fileContent = fileContent.replace(fixRegex, correctCode);
fs.writeFileSync('src/components/PropertyClient.tsx', fileContent);
