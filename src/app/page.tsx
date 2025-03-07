import AnnouncementBanner from "@/components/announcement-banner";
import AccessoriesSection from "@/components/featured-accessories";
import FeaturedBooks from "@/components/featured-books";
import Hero from "@/components/hero";
import SearchSection from "@/components/search";

export default function Home() {
  return (
    <section>
      <main>
        <div className="bg-gradient-to-b from-blue-50 to-white gap-10 h-80">
          <AnnouncementBanner />
          <Hero />
          <SearchSection />
          <FeaturedBooks />
          <AccessoriesSection />
        </div>
      </main>
    </section>
  );
}
