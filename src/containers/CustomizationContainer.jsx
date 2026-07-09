import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CustomizationHero from "../components/customization/CustomizationHero";
import ProductSelection from "../components/customization/ProductSelection";

import { useCustomization } from "../context/CustomizationProvider";

const CustomizationContainer = () => {
  const { addProduct } = useCustomization();

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F1E7] py-14">
        <div className="mx-auto px-5 sm:px-6 lg:px-8">
          <CustomizationHero />

          <ProductSelection addProduct={addProduct} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomizationContainer;