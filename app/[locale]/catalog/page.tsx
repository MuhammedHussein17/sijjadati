import { getCarpets } from "@/lib/sanity.data";
import { CatalogClient } from "./CatalogClient";

export default async function CatalogPage() {
  const carpets = await getCarpets();
  return <CatalogClient carpets={carpets} />;
}
