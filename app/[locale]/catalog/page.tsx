import { getCarpets } from "@/lib/sanity.data";
import { CatalogClient } from "./CatalogClient";

type Props = {
  searchParams?: {
    category?: string;
  };
};

export default async function CatalogPage({ searchParams }: Props) {
  const carpets = await getCarpets();
  const category = typeof searchParams?.category === "string" ? searchParams.category : undefined;
  return <CatalogClient carpets={carpets} initialCategory={category} />;
}
