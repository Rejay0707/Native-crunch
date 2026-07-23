import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/hero/HeroSection";

import ProductTabs from "../components/product/ProductTabs";
import ProductGrid from "../components/product/ProductGrid";
// import BestSellerSection from "../components/product/BestSellerSection";
import PromoBanner from "../components/banner/PromoBanner";
import TestimonialSection from "../components/testimonial/TestimonialSection";
import WhyNativeCrunch from "../components/brand/WhyNativeCrunch";
import { useCart } from "../context/CartContext";
import { useHomeContainer } from "../containers/HomeContainer";

const Home = () => {
  const { addToCart, message } = useCart();

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

      {message && (
        <div className="fixed top-24 right-6 z-50 rounded-lg bg-green-600 px-5 py-3 text-white shadow-xl">
          {message}
        </div>
      )}

      <HeroSection />

      {/* <BestSellerSection products={bestSellers} /> */}

      <section id="categories" className="bg-[#ecdcd0] py-20">
        <div className="w-full px-4 xl:px-8">
          <div className="text-center">
            <h2
              className="
              whitespace-nowrap
              text-xl
              font-black
              uppercase
              tracking-wide
              text-[#8B5E3C]
              md:text-5xl
            "
            >
              Discover Our Collection
            </h2>
            <p
              className="
    mt-3
    text-sm
    md:text-lg
    font-medium
    tracking-wide
    text-[#8B5E3C]
    italic
  "
            >
              NAMMA TRADITION, NAMMA TASTE.
            </p>
          </div>

          <div className="mt-8">
            <ProductTabs
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <div className="mt-12">
            <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
          </div>
        </div>
      </section>

      <PromoBanner />

      <TestimonialSection />

      <WhyNativeCrunch />

      <Footer />
    </>
  );
};

export default Home;
