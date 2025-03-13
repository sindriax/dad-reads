// import AnnouncementBanner from "@/components/announcement-banner";
import AccessoriesSection from "@/components/featured-accessories";
import FeaturedBooks from "@/components/featured-books";
import Hero from "@/components/hero";
import SearchSection from "@/components/search";
import CategoriesSection from "@/components/categories";
import ToyotaYarisCrosAd from "@/components/advertisement";

export default function Home() {
  return (
    <section>
      <main>
        <div className="bg-gradient-to-b from-[#E3D2C3] to-[#8aac92] flex flex-col gap-20 py-10">
          {/* <AnnouncementBanner /> */}
          <Hero />
          <SearchSection />
          <FeaturedBooks />
          <ToyotaYarisCrosAd />
          <CategoriesSection />
          <AccessoriesSection />
        </div>
      </main>
    </section>
  );
}
