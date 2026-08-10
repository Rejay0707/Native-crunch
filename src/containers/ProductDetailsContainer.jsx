import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";

const ProductDetailsContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || null,
  );

  const [quantity, setProductQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const images = [
    {
      id: "front",
      image: product.image,
    },
    {
      id: "back",
      image: product.backImage,
    },
  ];

  const handleIncrease = () => {
    setProductQuantity((prev) => Number(prev || 0) + 1);
  };

  const handleDecrease = () => {
    setProductQuantity((prev) => (Number(prev) > 1 ? Number(prev) - 1 : 1));
  };

  const handleQuantityChange = (value) => {
    setProductQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        selectedVariant,
      },
      Number(quantity) || 1,
    );

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#F8F2EA] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Product Section */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <ProductGallery images={images} />

            <ProductInfo
              product={product}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onQuantityChange={handleQuantityChange}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              showMessage={showMessage}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetailsContainer;
