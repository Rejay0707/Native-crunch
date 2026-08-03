import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CustomizationHero from "../components/customization/CustomizationHero";
import ProductSelection from "../components/customization/ProductSelection";
import PersonalizationSelector from "../components/customization/PersonalizationSelector";
import PersonalizationPreview from "../components/customization/PersonalizationPreview";
import { useCustomization } from "../context/CustomizationProvider";

const CustomizationContainer = () => {
  const { addProduct, customizationType } = useCustomization();
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F1E7] py-14">
        <div className="mx-auto px-5 sm:px-6 lg:px-8">
          <CustomizationHero />

          <PersonalizationSelector onSelect={() => setShowProducts(false)} />

          {customizationType && (
            <>
              <PersonalizationPreview
                onContinue={() => setShowProducts(true)}
              />

              {showProducts && <ProductSelection addProduct={addProduct} />}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomizationContainer;
