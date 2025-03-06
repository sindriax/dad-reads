import FeaturedBooks from "@/components/featured-books";
import Hero from "@/components/hero";
import SearchSection from "@/components/search";

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchSection />
      <FeaturedBooks />
    </main>
  );
}
