import AnnouncementBanner from "@/components/announcement-banner";
import AccessoriesSection from "@/components/featured-accessories";
import FeaturedBooks from "@/components/featured-books";
import Hero from "@/components/hero";
import SearchSection from "@/components/search";

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-200">
      <main>
        <AnnouncementBanner />
        <Hero />
        <SearchSection />
        <FeaturedBooks />
        <AccessoriesSection />
      </main>
    </section>
  );
}
