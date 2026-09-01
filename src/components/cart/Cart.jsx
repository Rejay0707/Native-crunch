// import { Minus, Plus, Trash2 } from "lucide-react";
// import { useState, useEffect } from "react";

// const Cart = ({
//   cart,
//   // total,          // You can keep or remove this – it's not used anymore
//   changeVariant,
//   increaseQty,
//   decreaseQty,
//   setQty,
//   removeItem,
//   onCheckout,
//   onShopMore,
// }) => {
//   const [quantityInputs, setQuantityInputs] = useState({});

//   useEffect(() => {
//     const inputs = {};
//     cart.forEach((item) => {
//       if (item.type === "customGiftBox") return;
//       const key = `${item.id}-${item.weight}`;
//       inputs[key] = String(item.quantity || 1);
//     });
//     setQuantityInputs(inputs);
//   }, [cart]);

//   const handleQuantityChange = (id, weight, value) => {
//     const key = `${id}-${weight}`;
//     if (!/^\d*$/.test(value)) return;
//     setQuantityInputs((prev) => ({ ...prev, [key]: value }));
//     if (value !== "") {
//       setQty(id, weight, Number(value));
//     }
//   };

//   const handleQuantityBlur = (id, weight) => {
//     const key = `${id}-${weight}`;
//     const value = quantityInputs[key];
//     if (!value || Number(value) < 1) {
//       setQty(id, weight, 1);
//       setQuantityInputs((prev) => ({ ...prev, [key]: "1" }));
//     }
//   };

//   // ✅ ONE tempTotal – real‑time total based on input values
//   const tempTotal = cart.reduce((sum, item) => {
//     if (item.type === "customGiftBox") {
//       return sum + item.total;
//     }
//     const key = `${item.id}-${item.weight}`;
//     const inputVal = quantityInputs[key];
//     const qty =
//       inputVal !== undefined && inputVal !== ""
//         ? Number(inputVal)
//         : item.quantity;
//     return sum + item.price * qty;
//   }, 0);

//   return (
//     <div className="rounded-3xl bg-white shadow-lg">
//       <div className="border-b p-5">
//         <h2 className="text-2xl font-bold text-[#2E1E13]">Your Cart</h2>
//       </div>

//       <div className="p-5">
//         {cart.length === 0 ? (
//           <p className="py-10 text-center text-gray-500">Your cart is empty.</p>
//         ) : (
//           cart.map((item) => {
//             // Gift box rendering...
//             if (item.type === "customGiftBox") {
//               return (
//                 <div key={item.id} className="mb-6 rounded-3xl border border-[#E8DED3] bg-[#FCFAF8] p-6">
//                   {/* ... (keep your gift box JSX unchanged) */}
//                 </div>
//               );
//             }

//             // Normal product
//             const key = `${item.id}-${item.weight}`;
//             const inputValue =
//               quantityInputs[key] !== undefined
//                 ? quantityInputs[key]
//                 : String(item.quantity || 1);

//             return (
//               <div key={key} className="mb-6 flex gap-4 border-b pb-5">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-40 xl:w-40 rounded-xl object-contain bg-[#faf7f2] p-2"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-base font-semibold text-[#2E1E13] md:text-lg lg:text-xl">
//                     {item.name}
//                   </h3>
//                   <select
//                     value={item.weight}
//                     onChange={(e) =>
//                       changeVariant(item.id, item.weight, e.target.value)
//                     }
//                     className="mt-2 cursor-pointer rounded border border-gray-300 px-3 py-1 text-sm"
//                   >
//                     {item.variants.map((variant) => (
//                       <option key={variant.weight} value={variant.weight}>
//                         {variant.weight}
//                       </option>
//                     ))}
//                   </select>

//                   <div className="mt-3">
//                     <p className="text-base font-bold text-[#2E1E13] md:text-lg">
//                       ₹{item.price} × {inputValue || "0"}
//                     </p>
//                     <p className="text-sm text-gray-500 md:text-base">
//                       Subtotal ₹{item.price * (Number(inputValue) || 0)}
//                     </p>
//                   </div>

//                   <div className="mt-4 flex items-center gap-3">
//                     <button
//                       onClick={() => decreaseQty(item.id, item.weight)}
//                       className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:bg-[#C97A34] hover:text-white cursor-pointer"
//                     >
//                       <Minus size={16} />
//                     </button>
//                     <input
//                       type="text"
//                       inputMode="numeric"
//                       value={inputValue}
//                       onChange={(e) =>
//                         handleQuantityChange(item.id, item.weight, e.target.value)
//                       }
//                       onBlur={() => handleQuantityBlur(item.id, item.weight)}
//                       className="w-8 text-center font-semibold text-[#2E1E13] bg-transparent outline-none border-b-2 border-transparent focus:border-[#C97A34] transition-colors"
//                       aria-label="Quantity"
//                     />
//                     <button
//                       onClick={() => increaseQty(item.id, item.weight)}
//                       className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:bg-[#C97A34] hover:text-white cursor-pointer"
//                     >
//                       <Plus size={16} />
//                     </button>
//                     <button
//                       onClick={() => removeItem(item.id, item.weight)}
//                       className="ml-auto text-red-500 cursor-pointer"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>

//       {/* Footer – now uses tempTotal */}
//       <div className="border-t p-5">
//         <div className="mb-5 flex justify-between text-xl font-bold">
//           <span>Total</span>
//           <span>₹{tempTotal}</span>
//         </div>
//         <button
//           onClick={onShopMore}
//           className="mb-3 w-full rounded-full border border-[#C97A34] py-3 font-semibold text-[#C97A34] transition hover:bg-[#F8F2EA] cursor-pointer"
//         >
//           ← Shop More
//         </button>
//         <button
//           disabled={cart.length === 0}
//           onClick={onCheckout}
//           className="w-full rounded-full bg-[#C97A34] py-3 font-semibold text-white transition hover:bg-[#b56d2f] disabled:cursor-not-allowed disabled:bg-gray-300 cursor-pointer"
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { Minus, Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

const Cart = ({
  cart,
  increaseQty,
  decreaseQty,
  setQty,
  removeItem,
  onCheckout,
  onShopMore,
}) => {
  const [quantityInputs, setQuantityInputs] = useState({});

  // Sync quantity inputs with cart
  useEffect(() => {
    const inputs = {};

    cart.forEach((item) => {
      if (item.type === "customGiftBox") return;

      const key = `${item.product_variant_id}`;

      inputs[key] = String(item.quantity || 1);
    });

    setQuantityInputs(inputs);
  }, [cart]);

  // Handle manual quantity input
  const handleQuantityChange = (productVariantId, value) => {
    const key = `${productVariantId}`;

    // Allow only numbers
    if (!/^\d*$/.test(value)) return;

    setQuantityInputs((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (value !== "") {
      setQty(productVariantId, Number(value));
    }
  };

  // Handle quantity input blur
  const handleQuantityBlur = (productVariantId) => {
    const key = `${productVariantId}`;
    const value = quantityInputs[key];

    if (!value || Number(value) < 1) {
      setQty(productVariantId, 1);

      setQuantityInputs((prev) => ({
        ...prev,
        [key]: "1",
      }));
    }
  };

  // Calculate total
  const tempTotal = cart.reduce((sum, item) => {
    // Custom gift box
    if (item.type === "customGiftBox") {
      return sum + Number(item.total || 0);
    }

    const key = `${item.product_variant_id}`;

    const inputVal = quantityInputs[key];

    const qty =
      inputVal !== undefined && inputVal !== ""
        ? Number(inputVal)
        : Number(item.quantity || 0);

    return sum + Number(item.price || 0) * qty;
  }, 0);

  return (
    <div className="rounded-3xl bg-white shadow-lg">
      {/* Header */}
      <div className="border-b p-5">
        <h2 className="text-2xl font-bold text-[#2E1E13]">Your Cart</h2>
      </div>

      {/* Cart Items */}
      <div className="p-5">
        {cart.length === 0 ? (
          <p className="py-10 text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => {
            // --------------------------------
            // Custom Gift Box
            // --------------------------------
            if (item.type === "customGiftBox") {
              return (
                <div
                  key={item.id}
                  className="mb-6 rounded-3xl border border-[#E8DED3] bg-[#FCFAF8] p-6"
                >
                  <h3 className="text-lg font-semibold text-[#2E1E13]">
                    Personalized Gift Box
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">Custom Gift Box</p>

                  <p className="mt-3 font-bold text-[#2E1E13]">₹{item.total}</p>
                </div>
              );
            }

            // --------------------------------
            // Normal Product
            // --------------------------------

            const key = `${item.product_variant_id}`;

            const inputValue =
              quantityInputs[key] !== undefined
                ? quantityInputs[key]
                : String(item.quantity || 1);

            return (
              <div key={key} className="mb-6 flex gap-4 border-b pb-5">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-20
                    w-20
                    rounded-xl
                    bg-[#faf7f2]
                    object-contain
                    p-2
                    sm:h-24
                    sm:w-24
                    md:h-28
                    md:w-28
                    lg:h-36
                    lg:w-36
                    xl:h-40
                    xl:w-40
                  "
                />

                {/* Product Details */}
                <div className="flex-1">
                  {/* Product Name */}
                  <h3
                    className="
                      text-base
                      font-semibold
                      text-[#2E1E13]
                      md:text-lg
                      lg:text-xl
                    "
                  >
                    {item.name}
                  </h3>

                  {/* Weight */}
                  <p className="mt-2 text-sm text-gray-500">
                    Weight: {item.weight}
                  </p>

                  {/* Price */}
                  <div className="mt-3">
                    <p className="text-base font-bold text-[#2E1E13] md:text-lg">
                      ₹{item.price} × {inputValue || "0"}
                    </p>

                    <p className="text-sm font-bold text-black-500 md:text-base">
                      Subtotal ₹
                      {Number(item.price || 0) * (Number(inputValue) || 0)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="mt-4 flex items-center gap-3">
                    {/* Decrease */}
                    <button
                      type="button"
                      onClick={() => decreaseQty(item.product_variant_id)}
                      className="
      flex
      h-8
      w-8
      cursor-pointer
      items-center
      justify-center
      rounded-full
      border
      transition
      hover:bg-[#C97A34]
      hover:text-white
    "
                    >
                      <Minus size={16} />
                    </button>

                    {/* Quantity Input */}
                    <input
                      type="text"
                      inputMode="numeric"
                      value={inputValue}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.product_variant_id,
                          e.target.value,
                        )
                      }
                      onBlur={() => handleQuantityBlur(item.product_variant_id)}
                      className="
      h-8
      w-12
      rounded-md
      border
      border-[#E7D8CA]
      bg-white
      text-center
      font-semibold
      text-[#2E1E13]
      outline-none
      transition-all
      focus:border-[#C97A34]
      focus:ring-2
      focus:ring-[#C97A34]/20
    "
                      aria-label="Quantity"
                    />

                    {/* Increase */}
                    <button
                      type="button"
                      onClick={() => increaseQty(item.product_variant_id)}
                      className="
      flex
      h-8
      w-8
      cursor-pointer
      items-center
      justify-center
      rounded-full
      border
      transition
      hover:bg-[#C97A34]
      hover:text-white
    "
                    >
                      <Plus size={16} />
                    </button>

                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.product_variant_id)}
                      className="
      ml-auto
      cursor-pointer
      text-red-500
      transition
      hover:text-red-700
    "
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Cart Footer */}
      <div className="border-t p-5">
        {/* Total */}
        <div className="mb-5 flex justify-between text-xl font-bold">
          <span>Total</span>

          <span>₹{tempTotal}</span>
        </div>

        {/* Shop More */}
        <button
          type="button"
          onClick={onShopMore}
          className="
            mb-3
            w-full
            cursor-pointer
            rounded-full
            border
            border-[#C97A34]
            py-3
            font-semibold
            text-[#C97A34]
            transition
            hover:bg-[#F8F2EA]
          "
        >
          ← Shop More
        </button>

        {/* Checkout */}
        <button
          type="button"
          disabled={cart.length === 0}
          onClick={onCheckout}
          className="
            w-full
            cursor-pointer
            rounded-full
            bg-[#C97A34]
            py-3
            font-semibold
            text-white
            transition
            hover:bg-[#b56d2f]
            disabled:cursor-not-allowed
            disabled:bg-gray-300
          "
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
