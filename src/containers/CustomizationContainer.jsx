import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CustomizationHero from "../components/customization/CustomizationHero";
import ProductSelection from "../components/customization/ProductSelection";
import PersonalizationSelector from "../components/customization/PersonalizationSelector";
import PersonalizationPreview from "../components/customization/PersonalizationPreview";

import { useCustomization } from "../context/CustomizationProvider";

import { fetchProducts } from "../api/productApi";
import { mapProduct } from "../utils/productMapper";

const CustomizationContainer = () => {
  const { addProduct, customizationType } = useCustomization();

  const [showProducts, setShowProducts] = useState(false);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const productsData = await fetchProducts();

        const mappedProducts = productsData.map(mapProduct);

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Failed to load customization products:", error);

        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

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

              {showProducts && (
                <>
                  {loading ? (
                    <div className="flex min-h-[300px] items-center justify-center">
                      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#E7D8CA] border-t-[#C97A34]" />
                    </div>
                  ) : error ? (
                    <div className="py-12 text-center text-red-600">
                      {error}
                    </div>
                  ) : (
                    <ProductSelection
                      products={products}
                      addProduct={addProduct}
                    />
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomizationContainer;
