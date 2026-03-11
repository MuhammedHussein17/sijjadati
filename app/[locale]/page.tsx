import { getFeaturedCarpets } from "@/lib/sanity.data";
import HomePageClient from "@/components/HomePageClient";

export default async function HomePage() {
  const featuredCarpets = await getFeaturedCarpets();

  return <HomePageClient featuredCarpets={featuredCarpets} />;
}
