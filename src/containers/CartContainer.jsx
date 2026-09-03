// import { useCart } from "../context/CartContext";
// import Cart from "../components/cart/Cart";
// import { useNavigate } from "react-router-dom";

// const CartContainer = () => {
//   const { cart, setCart } = useCart();
//   const navigate = useNavigate();

//   const changeVariant = (id, oldWeight, newWeight) => {
//     setCart((prev) => {
//       const currentItem = prev.find(
//         (item) => item.id === id && item.weight === oldWeight,
//       );

//       if (!currentItem) return prev;

//       const newVariant = currentItem.variants.find(
//         (v) => v.weight === newWeight,
//       );

//       const existing = prev.find(
//         (item) =>
//           item.id === id &&
//           item.weight === newWeight &&
//           item.weight !== oldWeight,
//       );

//       if (existing) {
//         return prev
//           .filter(
//             (item) =>
//               !(
//                 item.id === id &&
//                 (item.weight === oldWeight || item.weight === newWeight)
//               ),
//           )
//           .concat({
//             ...existing,
//             quantity: existing.quantity + currentItem.quantity,
//           });
//       }

//       return prev.map((item) =>
//         item.id === id && item.weight === oldWeight
//           ? {
//               ...item,
//               weight: newVariant.weight,
//               price: newVariant.price,
//             }
//           : item,
//       );
//     });
//   };

//   const increaseQty = (id, weight) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id && item.weight === weight
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item,
//       ),
//     );
//   };

//   const decreaseQty = (id, weight) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id && item.weight === weight
//             ? {
//                 ...item,
//                 quantity: item.quantity - 1,
//               }
//             : item,
//         )
//         .filter((item) => item.quantity > 0),
//     );
//   };

//   const removeItem = (id, weight) => {
//     setCart((prev) =>
//       prev.filter((item) => {
//         if (item.type === "customGiftBox") {
//           return item.id !== id;
//         }

//         return !(item.id === id && item.weight === weight);
//       }),
//     );
//   };

//   const total = cart.reduce((sum, item) => {
//     if (item.type === "customGiftBox") {
//       return sum + item.total;
//     }

//     return sum + item.price * item.quantity;
//   }, 0);

//   return (
//     <Cart
//       cart={cart}
//       total={total}
//       changeVariant={changeVariant}
//       increaseQty={increaseQty}
//       decreaseQty={decreaseQty}
//       removeItem={removeItem}
//       onCheckout={() => navigate("/checkout")}
//       onShopMore={() => navigate("/shop")}
//     />
//   );
// };

// export default CartContainer;

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Cart from "../components/cart/Cart";
import RecommendedProductCard from "../components/product/RecommendedProductCard";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../api/productApi";
import { mapProduct } from "../utils/productMapper";

const CartContainer = () => {
  const { cart, increaseQuantity, decreaseQuantity, setQuantity, removeItem } =
    useCart();

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  // -----------------------------
  // Fetch products
  // -----------------------------
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();

        const mappedProducts = data.map(mapProduct);

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Failed to load recommended products:", error);
      }
    };

    loadProducts();
  }, []);

  // -----------------------------
  // Recommended products
  // -----------------------------
  const cartProductIds = cart
    .filter((item) => item.type !== "customGiftBox")
    .map((item) => Number(item.product_id));

  const recommendedProducts = products
    .filter((product) => !cartProductIds.includes(Number(product.id)))
    .slice(0, 5);

  // -----------------------------
  // Total
  // -----------------------------
  const total = cart.reduce((sum, item) => {
    if (item.type === "customGiftBox") {
      return sum + Number(item.total || 0);
    }

    return sum + Number(item.price || 0) * Number(item.quantity || 0);
  }, 0);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
      {/* =========================
          CART
      ========================== */}
      <div>
        <Cart
          cart={cart}
          total={total}
          increaseQty={increaseQuantity}
          decreaseQty={decreaseQuantity}
          setQty={setQuantity}
          removeItem={removeItem}
          onCheckout={() => {
            if (!isAuthenticated) {
              navigate("/login");
              return;
            }

            navigate("/checkout");
          }}
          onShopMore={() => navigate("/shop")}
        />

        {/* =========================
            MOBILE RECOMMENDATION
        ========================== */}
        {recommendedProducts.length > 0 && (
          <div className="mt-6 lg:hidden">
            <button
              type="button"
              onClick={() => setShowRecommendations((prev) => !prev)}
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                border-[#E7D8CA]
                bg-white
                px-5
                py-4
                text-left
                shadow-sm
                cursor-pointer
              "
            >
              <span className="font-semibold text-[#2E1E13]">
                You Might Also Like
              </span>

              <span className="text-xl text-[#C97A34]">
                {showRecommendations ? "−" : "+"}
              </span>
            </button>

            {showRecommendations && (
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {recommendedProducts.map((product) => (
                  <RecommendedProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* =========================
          DESKTOP RECOMMENDATIONS
      ========================== */}
      {recommendedProducts.length > 0 && (
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <h2 className="mb-5 text-xl font-bold text-[#2E1E13]">
              You Might Also Like
            </h2>

            <div className="space-y-5">
              {recommendedProducts.map((product) => (
                <RecommendedProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default CartContainer;
