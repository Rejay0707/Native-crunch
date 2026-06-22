import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/hero/HeroSection";

import ProductTabs from "../components/product/ProductTabs";
import ProductGrid from "../components/product/ProductGrid";
import BestSellerSection from "../components/product/BestSellerSection";
import PromoBanner from "../components/banner/PromoBanner";
import TestimonialSection from "../components/testimonial/TestimonialSection";
import WhyNativeCrunch from "../components/brand/WhyNativeCrunch";
import { useHomeContainer } from "../containers/HomeContainer";

const Home = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    bestSellers,
  } = useHomeContainer();

  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <HeroSection />

      <BestSellerSection products={bestSellers} />

      <PromoBanner />

      <section id="categories" className="bg-[#ecdcd0] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">

            <h2 className="text-4xl font-bold mt-3 text-[#2E1E13]">
              Snacks For Every Craving
            </h2>
          </div>

          <div className="mt-8">
            <ProductTabs
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <div className="mt-12">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>

      <TestimonialSection />

      <WhyNativeCrunch />

      <Footer />
    </>
  );
};

export default Home;
