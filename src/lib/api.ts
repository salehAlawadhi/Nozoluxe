import propertiesData from "@/data/properties_enriched.json";

export function getPropertiesList() {
  return propertiesData.map((p: any) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    destination: p.destination,
    images: p.images?.slice(0, 1) || [], // Only top image
    cluster_ar: p.cluster_ar,
    type: p.type,
    tags_ar: p.tags_ar?.slice(0, 3) || [],
    family_score: p.family_score || 0,
    tags: p.tags || [],
    royal_rating: p.royal_rating || 0
  }));
}

export function getPropertyBySlug(slug: string) {
  const property = propertiesData.find((p: any) => p.slug === slug);
  return property || null;
}

export function getWizardCandidates() {
  return propertiesData.map((p: any) => ({
    slug: p.slug,
    name: p.name,
    destination: p.destination,
    images: p.images?.slice(0, 1) || [], // Only top image
    type: p.type,
    saudi_fit_reason_ar: p.saudi_fit_reason_ar,
    family_score: p.family_score || 0,
    honeymoon_score: p.honeymoon_score || 0,
    nature_score: p.nature_score || 0,
    privacy_score: p.privacy_score || 0,
    luxury_score: p.luxury_score || 0,
    tags: p.tags || [],
    tags_ar: p.tags_ar || [],
    estimated_price_usd: p.estimated_price_usd || 0
  }));
}
