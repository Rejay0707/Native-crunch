// import { useState, useEffect } from "react";
// import { useParams, Navigate, useNavigate } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import { products } from "../data/products";
// import { useCart } from "../context/CartContext";
// import ProductGallery from "../components/product/ProductGallery";
// import ProductInfo from "../components/product/ProductInfo";

// const ProductDetailsContainer = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { addToCart } = useCart();

//   const product = products.find((item) => item.id === Number(id));

//   const [selectedVariant, setSelectedVariant] = useState(
//     product?.variants?.[0] || null,
//   );

//   const [quantity, setProductQuantity] = useState(1);
//   const [showMessage, setShowMessage] = useState(false);

//   if (!product) {
//     return <Navigate to="/shop" replace />;
//   }

//   const images = [
//     {
//       id: "front",
//       image: product.image,
//     },
//     {
//       id: "back",
//       image: product.backImage,
//     },
//   ];

//   const handleIncrease = () => {
//     setProductQuantity((prev) => Number(prev || 0) + 1);
//   };

//   const handleDecrease = () => {
//     setProductQuantity((prev) => (Number(prev) > 1 ? Number(prev) - 1 : 1));
//   };

//   const handleQuantityChange = (value) => {
//     setProductQuantity(value);
//   };

//   const handleAddToCart = () => {
//     addToCart(
//       {
//         ...product,
//         selectedVariant,
//       },
//       Number(quantity) || 1,
//     );

//     setShowMessage(true);

//     setTimeout(() => {
//       setShowMessage(false);
//     }, 2500);
//   };

//   const handleBuyNow = () => {
//     handleAddToCart();
//     navigate("/cart");
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="min-h-screen bg-[#F8F2EA] py-20 lg:py-24">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           {/* Product Section */}
//           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
//             <ProductGallery images={images} />

//             <ProductInfo
//               product={product}
//               selectedVariant={selectedVariant}
//               onVariantChange={setSelectedVariant}
//               quantity={quantity}
//               onIncrease={handleIncrease}
//               onDecrease={handleDecrease}
//               onQuantityChange={handleQuantityChange}
//               onAddToCart={handleAddToCart}
//               onBuyNow={handleBuyNow}
//               showMessage={showMessage}
//             />
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default ProductDetailsContainer;

import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { useCart } from "../context/CartContext";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";

import { fetchProducts } from "../api/productApi";
import { mapProduct } from "../utils/productMapper";

const ProductDetailsContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setProductQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const stock = Number(selectedVariant?.stock) || 0;
  const isOutOfStock = stock <= 0;

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);

        const data = await fetchProducts();
        console.log("API products:", data);

        const mappedProducts = data.map(mapProduct);
        console.log("Mapped products:", mappedProducts);

        const foundProduct = mappedProducts.find(
          (item) => item.id === Number(id),
        );

        setProduct(foundProduct || null);

        if (foundProduct?.variants?.length > 0) {
          setSelectedVariant(foundProduct.variants[0]);
        }
      } catch (error) {
        console.error("Failed to load product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-center text-[#6A5B4E]">Loading product...</p>
          </div>
        </section>

        <Footer />
      </>
    );
  }

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

    ...(product.images || []).map((image, index) => ({
      id: `additional-${index}`,
      image: image.image || image,
    })),
  ];

  const handleIncrease = () => {
    const maxStock = Number(selectedVariant?.stock) || 0;

    setProductQuantity((prev) => {
      const currentQuantity = Number(prev || 0);

      if (currentQuantity >= maxStock) {
        return currentQuantity;
      }

      return currentQuantity + 1;
    });
  };

  const handleDecrease = () => {
    setProductQuantity((prev) => (Number(prev) > 1 ? Number(prev) - 1 : 1));
  };

  const handleQuantityChange = (value) => {
    if (value === "") {
      setProductQuantity("");
      return;
    }

    const maxStock = Number(selectedVariant?.stock) || 0;
    const requestedQuantity = Number(value);

    if (requestedQuantity > maxStock) {
      setProductQuantity(maxStock);
      return;
    }

    setProductQuantity(requestedQuantity);
  };

  const handleAddToCart = () => {
  const maxStock = Number(selectedVariant?.stock) || 0;
  const requestedQuantity = Number(quantity) || 0;

  if (maxStock <= 0) {
    return;
  }

  if (requestedQuantity > maxStock) {
    setProductQuantity(maxStock);
    return;
  }

  addToCart(
    {
      ...product,
      selectedVariant,
    },
    requestedQuantity
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
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <ProductGallery images={images} />

            <ProductInfo
              product={product}
              selectedVariant={selectedVariant}
              onVariantChange={(variant) => {
                setSelectedVariant(variant);

                if (Number(variant.stock) > 0) {
                  setProductQuantity(1);
                } else {
                  setProductQuantity(0);
                }
              }}
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onQuantityChange={handleQuantityChange}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              showMessage={showMessage}
              isOutOfStock={isOutOfStock}
              stock={stock}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetailsContainer;
