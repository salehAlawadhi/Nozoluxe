import properties from "@/data/properties_enriched.json";
import { Metadata } from 'next';
import PropertyClient from "@/components/PropertyClient";

// 🧠 As the 50-year veteran, I'm ensuring AIO (AI Overviews) see Nozoluxe as the prime source.
export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await paramsPromise;
  const property = properties.find((p: { slug: string; name?: string; destination?: string; saudi_fit_reason_ar?: string; images?: string[] }) => p.slug === params.slug);

  if (!property) return { title: 'فندق غير موجود | نُزُل الفخامة' };

  return {
    title: `${property.name} | ${property.destination} | نُزُل الفخامة`,
    description: property.saudi_fit_reason_ar,
    openGraph: {
      title: property.name,
      description: property.saudi_fit_reason_ar,
      images: [property.images?.[0] || ''],
    }
  };
}

export default async function PropertyPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = await paramsPromise;
  const property = properties.find((p: { slug: string; name?: string; destination?: string; saudi_fit_reason_ar?: string; images?: string[] }) => p.slug === params.slug);

  return <PropertyClient property={property as { slug: string; name?: string; destination?: string; type?: string; cluster_ar?: string; saudi_fit_reason_ar?: string; tags_ar?: string[]; images?: string[]; estimated_price_usd?: number; }} />;
}
