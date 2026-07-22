import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";

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

  const [quantity, setQuantity] = useState(1);
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
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        ...product,
        selectedVariant,
      });
    }

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  const handleShopMore = () => {
    navigate("/shop");
  };

  return (
    <section className="min-h-screen bg-[#F8F2EA] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm">
          <Link
            to="/"
            className="text-[#6A5B4E] transition hover:text-[#C97A34]"
          >
            Home
          </Link>

          <span className="text-[#9A8B7B]">/</span>

          <Link
            to="/shop"
            className="text-[#6A5B4E] transition hover:text-[#C97A34]"
          >
            Shop
          </Link>

          <span className="text-[#9A8B7B]">/</span>

          <span className="font-semibold text-[#2E1E13]">{product.name}</span>
        </div>

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
            onAddToCart={handleAddToCart}
            onShopMore={handleShopMore}
            showMessage={showMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsContainer;
