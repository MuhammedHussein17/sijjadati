/** Carpet as returned from Sanity (after mapping images to URLs) — matches former products.json shape */
export interface Carpet {
  id: string;
  name_he: string;
  name_ar: string;
  description_he: string;
  description_ar: string;
  category: string;
  sizes: string[];
  colors: string[];
  price_range: string;
  featured: boolean;
  images: string[];
}

export interface SanityCarpetDoc {
  _id: string;
  name_he: string;
  name_ar: string;
  description_he?: string;
  description_ar?: string;
  category: string;
  sizes?: string[];
  colors?: string[];
  price_range?: string;
  featured?: boolean;
  /** GROQ returns images[].asset->url → string[] */
  images?: (string | null)[];
}

export function mapSanityCarpetToCarpet(doc: SanityCarpetDoc): Carpet {
  return {
    id: doc._id,
    name_he: doc.name_he ?? "",
    name_ar: doc.name_ar ?? "",
    description_he: doc.description_he ?? "",
    description_ar: doc.description_ar ?? "",
    category: doc.category ?? "",
    sizes: Array.isArray(doc.sizes) ? doc.sizes : [],
    colors: Array.isArray(doc.colors) ? doc.colors : [],
    price_range: doc.price_range ?? "mid",
    featured: Boolean(doc.featured),
    images: (doc.images ?? []).filter((url): url is string => Boolean(url)),
  };
}
