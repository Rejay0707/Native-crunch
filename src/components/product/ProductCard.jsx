// import { useState, useEffect } from "react";
// import Button from "../common/Button";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/CartContext";

// const ProductCard = ({ product }) => {
//   const [showBack, setShowBack] = useState(false);
//   // const [quantity, setQuantity] = useState(0);
//   const [showMessage, setShowMessage] = useState(false);
//   const navigate = useNavigate();
//   const { cart, addToCart, decreaseQuantity } = useCart();
//   // Default to 50g, otherwise 40g, otherwise the first variant
//   const [selectedVariant, setSelectedVariant] = useState(
//     product.variants.find((v) => v.weight === "50g") ||
//       product.variants.find((v) => v.weight === "40g") ||
//       product.variants[0],
//   );

//   const cartItem = cart.find(
//     (item) => item.id === product.id && item.weight === selectedVariant.weight,
//   );

//   const quantity = cartItem?.quantity || 0;

//   // Only for controlling the input while typing
//   const [quantityInput, setQuantityInput] = useState(String(quantity));

//   // Keep input synchronized with cart
//   useEffect(() => {
//     setQuantityInput(String(quantity));
//   }, [quantity]);

//   return (
//     <div className="relative pb-16 ">
//       <div
//         className="
//         bg-white
//         rounded-3xl
//         overflow-hidden
//         border
//         border-[#ece2d7]
//         hover:shadow-2xl
//         transition-all
//         duration-300
//       "
//       >
//         <div className="bg-[#faf7f2] p-3 md:p-5 overflow-hidden">
//           <div
//             onClick={() => navigate(`/product/${product.id}`)}
//             className="
//   relative
//   flex
//   items-center
//   justify-center
//   w-full
//   h-[260px]
//   sm:h-[300px]
//   md:h-[320px]
//   lg:h-[340px]
//   group
//   cursor-pointer
// "
//           >
//             {/* FRONT */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className={`
//     absolute
//     inset-0
//     w-[95%]
//     h-[95%]
//     mx-auto
//     object-contain
//     transition-all
//     duration-500
//     ${showBack ? "opacity-0" : "opacity-100 group-hover:opacity-0"}
//   `}
//             />

//             {/* BACK */}
//             <img
//               src={product.backImage}
//               alt={`${product.name} Back`}
//               className={`
//   absolute
//   inset-0
//   w-full
//   h-full
//   object-contain
//   transition-all
//   duration-500
//   ${showBack ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
// `}
//             />
//           </div>

//           <p className="mt-3 text-center text-xs text-gray-500 md:hidden">
//             Tap image to view back
//           </p>
//         </div>

//         <div className="p-4 md:p-5">
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-3">
//             {product.tags.slice(0, 2).map((tag) => (
//               <span
//                 key={tag}
//                 className="
//                 text-[10px]
//                 bg-green-50
//                 text-green-700
//                 px-2
//                 py-1
//                 rounded-full
//                 uppercase
//               "
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Name */}
//           <h3
//             onClick={() => navigate(`/product/${product.id}`)}
//             className="
//     text-[#2E1E13]
//     font-semibold
//     text-base
//     min-h-[40px]
//     md:min-h-[52px]
//     cursor-pointer
//     hover:text-[#C97A34]
//   "
//           >
//             {product.name}
//           </h3>

//           {/* Default Weight */}
//           <div className="mt-3 flex flex-wrap gap-2">
//             {product.variants.map((variant) => (
//               <button
//                 key={variant.weight}
//                 onClick={() => setSelectedVariant(variant)}
//                 className={`rounded-lg border px-3 py-1 text-xs font-medium transition cursor-pointer ${
//                   selectedVariant.weight === variant.weight
//                     ? "border-[#C97A34] bg-[#C97A34] text-white"
//                     : "border-[#E7D8CA] bg-white text-[#2E1E13] hover:border-[#C97A34]"
//                 }`}
//               >
//                 {variant.weight}
//               </button>
//             ))}
//           </div>

//           {/* Price + Add */}
//           {/* Price + Cart Action */}
//           <div className="mt-3 md:mt-5 flex items-center justify-between">
//             <span className="text-lg font-bold text-[#2E1E13]">
//               ₹{selectedVariant.price}
//             </span>

//             {quantity === 0 ? (
//               <Button
//                 className="px-4 py-2 cursor-pointer"
//                 onClick={() => {
//                   addToCart({
//                     ...product,
//                     selectedVariant,
//                   });

//                   setShowMessage(true);

//                   setTimeout(() => {
//                     setShowMessage(false);
//                   }, 2500);
//                 }}
//               >
//                 Add
//               </Button>
//             ) : (
//               <div
//                 className="flex items-center gap-3 rounded-xl bg-[#F8F2EA] px-3 py-2"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold cursor-pointer"
//                   onClick={() =>
//                     decreaseQuantity(product.id, selectedVariant.weight)
//                   }
//                 >
//                   -
//                 </button>

//                 {/* ONLY CHANGE: quantity text → input */}
//                 <input
//                   type="text"
//                   inputMode="numeric"
//                   value={quantityInput}
//                   onClick={(e) => e.stopPropagation()}
//                   onChange={(e) => {
//                     const value = e.target.value;

//                     // Numbers only
//                     if (!/^\d*$/.test(value)) {
//                       return;
//                     }

//                     setQuantityInput(value);

//                     // Don't update cart while empty
//                     if (value === "") {
//                       return;
//                     }

//                     setQuantity(product.id, selectedVariant.weight, value);
//                   }}
//                   onBlur={() => {
//                     // Reset empty / zero to 1
//                     if (quantityInput === "" || Number(quantityInput) < 1) {
//                       setQuantity(product.id, selectedVariant.weight, 1);

//                       setQuantityInput("1");
//                     }
//                   }}
//                   className="font-semibold text-[#2E1E13] text-center bg-transparent outline-none w-5 cursor-text"
//                   aria-label="Quantity"
//                 />

//                 <button
//                   className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold cursor-pointer"
//                   onClick={() => {
//                     addToCart({
//                       ...product,
//                       selectedVariant,
//                     });
//                   }}
//                 >
//                   +
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
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

import { useState, useEffect } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const [showBack, setShowBack] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();
  const { cart, addToCart, decreaseQuantity, setQuantity } = useCart(); // ✅ Import setQuantity from context

  // Default to 50g, otherwise 40g, otherwise the first variant
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find((v) => v.weight === "50g") ||
      product.variants.find((v) => v.weight === "40g") ||
      product.variants[0],
  );

  const cartItem = cart.find(
    (item) => item.id === product.id && item.weight === selectedVariant.weight,
  );

  const quantity = cartItem?.quantity || 0;

  // Only for controlling the input while typing
  const [quantityInput, setQuantityInput] = useState(String(quantity));

  // Keep input synchronized with cart
  useEffect(() => {
    setQuantityInput(String(quantity));
  }, [quantity]);

  return (
    <div className="relative pb-16 ">
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
  ${showBack ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
`}
            />
          </div>

          <p className="mt-3 text-center text-xs text-gray-500 md:hidden">
            Tap image to view back
          </p>
        </div>

        <div className="p-4 md:p-5">
          {/* Tags */}
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

          {/* Name */}
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

          {/* Default Weight */}
          <div className="mt-3 flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.weight}
                onClick={() => setSelectedVariant(variant)}
                className={`rounded-lg border px-3 py-1 text-xs font-medium transition cursor-pointer ${
                  selectedVariant.weight === variant.weight
                    ? "border-[#C97A34] bg-[#C97A34] text-white"
                    : "border-[#E7D8CA] bg-white text-[#2E1E13] hover:border-[#C97A34]"
                }`}
              >
                {variant.weight}
              </button>
            ))}
          </div>

          {/* Price + Cart Action */}
          <div className="mt-3 md:mt-5 flex items-center justify-between">
            <span className="text-lg font-bold text-[#2E1E13]">
              ₹{selectedVariant.price * (quantity || 1)}
            </span>

            {quantity === 0 ? (
              <Button
                className="px-4 py-2 cursor-pointer"
                onClick={() => {
                  addToCart({
                    ...product,
                    selectedVariant,
                  });

                  setShowMessage(true);

                  setTimeout(() => {
                    setShowMessage(false);
                  }, 2500);
                }}
              >
                Add
              </Button>
            ) : (
              <div
                className="flex items-center gap-3 rounded-xl bg-[#F8F2EA] px-3 py-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold cursor-pointer"
                  onClick={() =>
                    decreaseQuantity(product.id, selectedVariant.weight)
                  }
                >
                  -
                </button>

                <input
                  type="text"
                  inputMode="numeric"
                  value={quantityInput}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    const value = e.target.value;

                    // Numbers only
                    if (!/^\d*$/.test(value)) {
                      return;
                    }

                    setQuantityInput(value);

                    // Don't update cart while empty
                    if (value === "") {
                      return;
                    }

                    setQuantity(product.id, selectedVariant.weight, value);
                  }}
                  onBlur={() => {
                    // Reset empty / zero to 1
                    if (quantityInput === "" || Number(quantityInput) < 1) {
                      setQuantity(product.id, selectedVariant.weight, 1);
                      setQuantityInput("1");
                    }
                  }}
                  className="font-semibold text-[#2E1E13] text-center bg-transparent outline-none w-5 cursor-text"
                  aria-label="Quantity"
                />

                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold cursor-pointer"
                  onClick={() => {
                    addToCart({
                      ...product,
                      selectedVariant,
                    });
                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {showMessage && (
        <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Product successfully added
          <br />
          Check your cart
        </div>
      )}
    </div>
  );
};

export default ProductCard;
