// import { useState } from "react";
// import Button from "../common/Button";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/CartContext";

// const ProductCard = ({ product }) => {
//   console.log("PRODUCT FROM BACKEND:", product);
//   console.log("VARIANTS:", product.variants);
//   const [showBack, setShowBack] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);

//   const navigate = useNavigate();

//   const { cart, addToCart, decreaseQuantity, setQuantity } = useCart();

//   // Default variant: 50g -> 40g -> first variant
//   const [selectedVariant, setSelectedVariant] = useState(
//     product.variants.find((v) => v.weight === "50g") ||
//       product.variants.find((v) => v.weight === "40g") ||
//       product.variants[0],
//   );

//   // Find cart item using variant ID
//   const cartItem = cart.find(
//     (item) => item.product_variant_id === selectedVariant.id,
//   );

//   const quantity = cartItem?.quantity || 0;

//   // Used only while typing in the quantity input
//   const [quantityInput, setQuantityInput] = useState(String(quantity));

//   const handleAdd = () => {
//     addToCart({
//       ...product,
//       selectedVariant,
//     });

//     // Immediately update displayed input
//     setQuantityInput(String(quantity + 1));

//     setShowMessage(true);

//     setTimeout(() => {
//       setShowMessage(false);
//     }, 2500);
//   };

//   const handleIncrease = () => {
//     addToCart({
//       ...product,
//       selectedVariant,
//     });

//     setQuantityInput(String(quantity + 1));
//   };

//   const handleDecrease = () => {
//     decreaseQuantity(selectedVariant.id);

//     if (quantity <= 1) {
//       setQuantityInput("");
//     } else {
//       setQuantityInput(String(quantity - 1));
//     }
//   };

//   const handleQuantityChange = (e) => {
//     const value = e.target.value;

//     // Numbers only
//     if (!/^\d*$/.test(value)) {
//       return;
//     }

//     setQuantityInput(value);

//     // Don't update cart while empty
//     if (value === "") {
//       return;
//     }

//     setQuantity(selectedVariant.id, value);
//   };

//   const handleQuantityBlur = () => {
//     if (quantityInput === "" || Number(quantityInput) < 1) {
//       setQuantity(selectedVariant.id, 1);

//       setQuantityInput("1");
//     }
//   };

//   return (
//     <div className="relative pb-16">
//       <div
//         className="
//           bg-white
//           rounded-3xl
//           overflow-hidden
//           border
//           border-[#ece2d7]
//           hover:shadow-2xl
//           transition-all
//           duration-300
//         "
//       >
//         {/* Product Image */}
//         <div className="bg-[#faf7f2] p-3 md:p-5 overflow-hidden">
//           <div
//             onClick={() => {
//               if (window.innerWidth < 768) {
//                 setShowBack((prev) => !prev);
//               } else {
//                 navigate(`/product/${product.id}`);
//               }
//             }}
//             className="
//               relative
//               flex
//               items-center
//               justify-center
//               w-full
//               h-[260px]
//               sm:h-[300px]
//               md:h-[320px]
//               lg:h-[340px]
//               group
//               cursor-pointer
//             "
//           >
//             {/* FRONT */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className={`
//                 absolute
//                 inset-0
//                 w-[95%]
//                 h-[95%]
//                 mx-auto
//                 object-contain
//                 transition-all
//                 duration-500
//                 ${showBack ? "opacity-0" : "opacity-100 group-hover:opacity-0"}
//               `}
//             />

//             {/* BACK */}
//             <img
//               src={product.backImage}
//               alt={`${product.name} Back`}
//               className={`
//                 absolute
//                 inset-0
//                 w-full
//                 h-full
//                 object-contain
//                 transition-all
//                 duration-500
//                 ${
//                   showBack ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//                 }
//               `}
//             />
//           </div>

//           <p className="mt-3 text-center text-xs text-gray-500 md:hidden">
//             Tap image to view back
//           </p>
//         </div>

//         {/* Product Details */}
//         <div className="p-4 md:p-5">
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-3">
//             {product.tags.slice(0, 2).map((tag) => (
//               <span
//                 key={tag}
//                 className="
//                   text-[10px]
//                   bg-green-50
//                   text-green-700
//                   px-2
//                   py-1
//                   rounded-full
//                   uppercase
//                 "
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Name */}
//           <h3
//             onClick={() => navigate(`/product/${product.id}`)}
//             className="
//               text-[#2E1E13]
//               font-semibold
//               text-base
//               min-h-[40px]
//               md:min-h-[52px]
//               cursor-pointer
//               hover:text-[#C97A34]
//             "
//           >
//             {product.name}
//           </h3>

//           {/* Variants */}
//           <div className="mt-3 flex flex-wrap gap-2">
//             {product.variants.map((variant) => (
//               <button
//                 key={variant.id}
//                 onClick={() => setSelectedVariant(variant)}
//                 className={`
//                   rounded-lg
//                   border
//                   px-3
//                   py-1
//                   text-xs
//                   font-medium
//                   transition
//                   cursor-pointer
//                   ${
//                     selectedVariant.id === variant.id
//                       ? "border-[#C97A34] bg-[#C97A34] text-white"
//                       : "border-[#E7D8CA] bg-white text-[#2E1E13] hover:border-[#C97A34]"
//                   }
//                 `}
//               >
//                 {variant.weight}
//               </button>
//             ))}
//           </div>

//           {/* Price + Cart Action */}
//           <div className="mt-3 md:mt-5 flex items-center justify-between">
//             {/* Price */}
//             <span className="text-lg font-bold text-[#2E1E13]">
//               ₹{selectedVariant.price * (quantity || 1)}
//             </span>

//             {/* ADD */}
//             {quantity === 0 ? (
//               <Button className="px-4 py-2 cursor-pointer" onClick={handleAdd}>
//                 Add
//               </Button>
//             ) : (
//               /* QUANTITY CONTROLS */
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   rounded-xl
//                   bg-[#F8F2EA]
//                   px-3
//                   py-2
//                 "
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* MINUS */}
//                 <button
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-white
//                     text-lg
//                     font-bold
//                     cursor-pointer
//                   "
//                   onClick={handleDecrease}
//                 >
//                   -
//                 </button>

//                 {/* QUANTITY */}
//                 <input
//                   type="text"
//                   inputMode="numeric"
//                   value={quantityInput}
//                   onClick={(e) => e.stopPropagation()}
//                   onChange={handleQuantityChange}
//                   onBlur={handleQuantityBlur}
//                   className="
//                     font-semibold
//                     text-[#2E1E13]
//                     text-center
//                     bg-transparent
//                     outline-none
//                     w-5
//                     cursor-text
//                   "
//                   aria-label="Quantity"
//                 />

//                 {/* PLUS */}
//                 <button
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-white
//                     text-lg
//                     font-bold
//                     cursor-pointer
//                   "
//                   onClick={handleIncrease}
//                 >
//                   +
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Success Message */}
//       {showMessage && (
//         <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
//           ✓ Product successfully added
//           <br />
//           Check your cart
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;

import { useEffect, useState } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const [showBack, setShowBack] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const navigate = useNavigate();

  const { cart, addToCart, decreaseQuantity, setQuantity } = useCart();

  // --------------------------------------------------
  // DEFAULT VARIANT
  // 50g -> 40g -> first variant
  // --------------------------------------------------
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find((v) => v.weight === "50g") ||
      product.variants.find((v) => v.weight === "40g") ||
      product.variants[0],
  );

  // --------------------------------------------------
  // CURRENT CART ITEM
  // --------------------------------------------------
  const cartItem = cart.find(
    (item) => item.product_variant_id === selectedVariant.id,
  );

  const quantity = cartItem?.quantity || 0;

  // --------------------------------------------------
  // STOCK
  // --------------------------------------------------
  const stock = Number(selectedVariant.stock ?? 0);

  // --------------------------------------------------
  // QUANTITY INPUT
  // --------------------------------------------------
  const [quantityInput, setQuantityInput] = useState(String(quantity));

  // Keep input synchronized when cart quantity changes
  // or when user switches variant.
  useEffect(() => {
    setQuantityInput(String(quantity));
  }, [quantity, selectedVariant.id]);

  // --------------------------------------------------
  // STOCK MESSAGE
  // --------------------------------------------------
  const getStockMessage = () => {
    if (stock <= 0) {
      return "Out of stock";
    }

    if (stock < 10) {
      return `Only ${stock} available`;
    }

    if (stock < 20) {
      return "Limited stock available";
    }

    return null;
  };

  const stockMessage = getStockMessage();

  // --------------------------------------------------
  // ADD PRODUCT
  // --------------------------------------------------
  const handleAdd = () => {
    // Don't allow adding if there is no stock
    if (stock <= 0) {
      return;
    }

    addToCart({
      ...product,
      selectedVariant,
    });

    setQuantityInput(String(quantity + 1));

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  // --------------------------------------------------
  // INCREASE QUANTITY
  // --------------------------------------------------
  const handleIncrease = () => {
    // Don't allow quantity above available stock
    if (quantity >= stock) {
      return;
    }

    addToCart({
      ...product,
      selectedVariant,
    });

    setQuantityInput(String(quantity + 1));
  };

  // --------------------------------------------------
  // DECREASE QUANTITY
  // --------------------------------------------------
  const handleDecrease = () => {
    decreaseQuantity(selectedVariant.id);

    if (quantity <= 1) {
      setQuantityInput("");
    } else {
      setQuantityInput(String(quantity - 1));
    }
  };

  // --------------------------------------------------
  // QUANTITY INPUT
  // --------------------------------------------------
  const handleQuantityChange = (e) => {
    const value = e.target.value;

    // Numbers only
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Allow empty input while typing
    if (value === "") {
      setQuantityInput("");
      return;
    }

    let newQuantity = Number(value);

    // Don't allow quantity above stock
    if (newQuantity > stock) {
      newQuantity = stock;
    }

    setQuantityInput(String(newQuantity));

    setQuantity(selectedVariant.id, newQuantity);
  };

  // --------------------------------------------------
  // QUANTITY INPUT BLUR
  // --------------------------------------------------
  const handleQuantityBlur = () => {
    // If stock is zero, quantity must be zero
    if (stock <= 0) {
      setQuantityInput("");
      return;
    }

    // Empty / invalid quantity becomes 1
    if (quantityInput === "" || Number(quantityInput) < 1) {
      setQuantity(selectedVariant.id, 1);

      setQuantityInput("1");

      return;
    }

    // Make sure quantity never exceeds stock
    if (Number(quantityInput) > stock) {
      setQuantity(selectedVariant.id, stock);

      setQuantityInput(String(stock));
    }
  };

  // --------------------------------------------------
  // CHANGE VARIANT
  // --------------------------------------------------
  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="relative pb-16">
      <div
        className="
          bg-white
          rounded-3xl
          overflow-hidden
          border
          border-[#ece2d7]
          hover:shadow-2xl
          transition-all
          duration-300
        "
      >
        {/* ==================================================
            PRODUCT IMAGE
        ================================================== */}
        <div className="bg-[#faf7f2] p-3 md:p-5 overflow-hidden">
          <div
            onClick={() => {
              if (window.innerWidth < 768) {
                setShowBack((prev) => !prev);
              } else {
                navigate(`/product/${product.id}`);
              }
            }}
            className="
              relative
              flex
              items-center
              justify-center
              w-full
              h-[260px]
              sm:h-[300px]
              md:h-[320px]
              lg:h-[340px]
              group
              cursor-pointer
            "
          >
            {/* FRONT */}
            <img
              src={product.image}
              alt={product.name}
              className={`
                absolute
                inset-0
                w-[95%]
                h-[95%]
                mx-auto
                object-contain
                transition-all
                duration-500
                ${showBack ? "opacity-0" : "opacity-100 group-hover:opacity-0"}
              `}
            />

            {/* BACK */}
            <img
              src={product.backImage}
              alt={`${product.name} Back`}
              className={`
                absolute
                inset-0
                w-full
                h-full
                object-contain
                transition-all
                duration-500
                ${
                  showBack ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }
              `}
            />
          </div>

          <p className="mt-3 text-center text-xs text-gray-500 md:hidden">
            Tap image to view back
          </p>
        </div>

        {/* ==================================================
            PRODUCT DETAILS
        ================================================== */}
        <div className="p-4 md:p-5">
          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-3">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="
                  text-[10px]
                  bg-green-50
                  text-green-700
                  px-2
                  py-1
                  rounded-full
                  uppercase
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* NAME */}
          <h3
            onClick={() => navigate(`/product/${product.id}`)}
            className="
              text-[#2E1E13]
              font-semibold
              text-base
              min-h-[40px]
              md:min-h-[52px]
              cursor-pointer
              hover:text-[#C97A34]
            "
          >
            {product.name}
          </h3>

          {/* Variants + Stock Message */}
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            {/* Variants */}
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => handleVariantChange(variant)}
                  className={`
          rounded-lg
          border
          px-3
          py-1
          text-xs
          font-medium
          transition
          cursor-pointer
          ${
            selectedVariant.id === variant.id
              ? "border-[#C97A34] bg-[#C97A34] text-white"
              : "border-[#E7D8CA] bg-white text-[#2E1E13] hover:border-[#C97A34]"
          }
        `}
                >
                  {variant.weight}
                </button>
              ))}
            </div>

            {/* Stock Message */}
            {stockMessage && (
              <span
                className={`
        text-[11px]
        font-medium
        whitespace-nowrap
        ${stock <= 0 ? "text-red-600" : "text-[#C97A34]"}
      `}
              >
                {stockMessage}
              </span>
            )}
          </div>

          {/* ==================================================
              PRICE + CART ACTION
          ================================================== */}
          <div className="mt-3 md:mt-5 flex items-center justify-between">
            {/* PRICE */}
            <span className="text-lg font-bold text-[#2E1E13]">
              ₹{selectedVariant.price * (quantity || 1)}
            </span>

            {/* ==================================================
                OUT OF STOCK
            ================================================== */}
            {stock <= 0 ? (
              <span
                className="
                  rounded-lg
                  bg-gray-100
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-gray-500
                "
              >
                Out of Stock
              </span>
            ) : quantity === 0 ? (
              /* ==================================================
                  ADD
              ================================================== */
              <Button className="px-4 py-2 cursor-pointer" onClick={handleAdd}>
                Add
              </Button>
            ) : (
              /* ==================================================
                  QUANTITY CONTROLS
              ================================================== */

              <div
                className="
    flex
    items-center
    gap-3
    rounded-xl
    bg-[#F8F2EA]
    px-3
    py-2
  "
                onClick={(e) => e.stopPropagation()}
              >
                {/* MINUS */}
                <button
                  type="button"
                  className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-white
      text-lg
      font-bold
      cursor-pointer
      transition
      hover:bg-[#C97A34]
      hover:text-white
    "
                  onClick={handleDecrease}
                >
                  -
                </button>

                {/* QUANTITY */}
                <input
                  type="text"
                  inputMode="numeric"
                  value={quantityInput}
                  onClick={(e) => e.stopPropagation()}
                  onChange={handleQuantityChange}
                  onBlur={handleQuantityBlur}
                  className="
      h-8
      w-10
      rounded-md
      border
      border-[#E7D8CA]
      bg-white
      text-center
      font-semibold
      text-[#2E1E13]
      outline-none
      cursor-text
      transition-all
      focus:border-[#C97A34]
      focus:ring-2
      focus:ring-[#C97A34]/20
    "
                  aria-label="Quantity"
                />

                {/* PLUS */}
                <button
                  type="button"
                  disabled={quantity >= stock}
                  className={`
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-white
      text-lg
      font-bold
      transition
      ${
        quantity >= stock
          ? "cursor-not-allowed opacity-40"
          : "cursor-pointer hover:bg-[#C97A34] hover:text-white"
      }
    `}
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ==================================================
          SUCCESS MESSAGE
      ================================================== */}
      {showMessage && (
        <div
          className="
            mt-4
            rounded-xl
            bg-green-50
            px-4
            py-3
            text-sm
            text-green-700
          "
        >
          ✓ Product successfully added
          <br />
          Check your cart
        </div>
      )}
    </div>
  );
};

export default ProductCard;
