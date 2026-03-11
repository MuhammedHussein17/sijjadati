import { client } from "./sanity";
import { FEATURED_CARPETS_QUERY, CARPETS_QUERY } from "./sanity.queries";
import { mapSanityCarpetToCarpet, type Carpet, type SanityCarpetDoc } from "./sanity.types";

export async function getFeaturedCarpets(): Promise<Carpet[]> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  if (!projectId || !dataset) return [];
  try {
    const docs = await client.fetch<SanityCarpetDoc[]>(FEATURED_CARPETS_QUERY);
    return (docs ?? []).map(mapSanityCarpetToCarpet);
  } catch {
    return [];
  }
}

export async function getCarpets(): Promise<Carpet[]> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  if (!projectId || !dataset) return [];
  try {
    const docs = await client.fetch<SanityCarpetDoc[]>(CARPETS_QUERY);
    return (docs ?? []).map(mapSanityCarpetToCarpet);
  } catch {
    return [];
  }
}
