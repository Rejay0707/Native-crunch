import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CustomizationHero from "../components/customization/CustomizationHero";
import ProductSelection from "../components/customization/ProductSelection";
// import SelectedProducts from "../components/customization/SelectedProducts";
// import SelectedGiftBox from "../components/customization/SelectedGiftBox";

const CustomizationContainer = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Add Product
  const addProduct = (product) => {
    console.log("Before:", selectedProducts);
    const defaultVariant = product.variants[0];

    const existing = selectedProducts.find(
      (item) => item.id === product.id && item.weight === defaultVariant.weight,
    );

    if (existing) {
      setSelectedProducts((prev) =>
        prev.map((item) =>
          item.id === product.id && item.weight === defaultVariant.weight
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );

      return;
    }

    setSelectedProducts((prev) => [
      ...prev,
      {
        ...product,
        weight: defaultVariant.weight,
        price: defaultVariant.price,
        quantity: 1,
      },
    ]);
  };

  // Increase Quantity
  const increaseQty = (id, weight) => {
    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.weight === weight
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // Decrease Quantity
  const decreaseQty = (id, weight) => {
    setSelectedProducts((prev) =>
      prev
        .map((item) =>
          item.id === id && item.weight === weight
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Remove Product
  const removeProduct = (id, weight) => {
    setSelectedProducts((prev) =>
      prev.filter((item) => !(item.id === id && item.weight === weight)),
    );
  };

  // Change Variant
  const changeVariant = (id, oldWeight, newWeight) => {
    setSelectedProducts((prev) => {
      const current = prev.find(
        (item) => item.id === id && item.weight === oldWeight,
      );

      if (!current) return prev;

      const variant = current.variants.find((v) => v.weight === newWeight);

      return prev.map((item) =>
        item.id === id && item.weight === oldWeight
          ? {
              ...item,
              weight: variant.weight,
              price: variant.price,
            }
          : item,
      );
    });
  };
  console.log("Selected Products:", selectedProducts);
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F1E7] py-14">
        <div className="mx-auto  px-5 sm:px-6 lg:px-8">
          <CustomizationHero />

          <ProductSelection addProduct={addProduct} />

          
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomizationContainer;
