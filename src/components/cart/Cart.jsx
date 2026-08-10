// import { Minus, Plus, Trash2 } from "lucide-react";
// import { useState, useEffect } from "react";

// const Cart = ({
//   cart,
//   total,
//   changeVariant,
//   increaseQty,
//   decreaseQty,
//   setQty, // Add this new prop
//   removeItem,
//   onCheckout,
//   onShopMore,
// }) => {
//   // State to track quantity inputs for each item
//   const [quantityInputs, setQuantityInputs] = useState({});

//   // Initialize quantity inputs when cart changes
//   useEffect(() => {
//     const inputs = {};
//     cart.forEach((item) => {
//       // Skip gift boxes as they have different structure
//       if (item.type === "customGiftBox") return;

//       const key = `${item.id}-${item.weight}`;
//       inputs[key] = String(item.quantity || 1);
//     });
//     setQuantityInputs(inputs);
//   }, [cart]);

//   // Handle quantity change in input
//   const handleQuantityChange = (id, weight, value) => {
//     const key = `${id}-${weight}`;

//     console.log("🔹 handleQuantityChange called with:", { id, weight, value });

//     // Numbers only
//     if (!/^\d*$/.test(value)) {
//       console.log("❌ Invalid input (not numbers only)");
//       return;
//     }

//     console.log("✅ Input valid, updating quantityInputs to:", value);

//     // Always update the input state
//     setQuantityInputs((prev) => {
//       console.log("📝 Previous quantityInputs:", prev);
//       const newState = { ...prev, [key]: value };
//       console.log("📝 New quantityInputs:", newState);
//       return newState;
//     });

//     // Only update cart if there's a value
//     if (value !== "") {
//       console.log("🛒 Calling setQty with:", {
//         id,
//         weight,
//         value: Number(value),
//       });
//       setQty(id, weight, Number(value));
//     } else {
//       console.log("⏸️ Value is empty, NOT updating cart");
//     }
//   };

//   // Calculate temporary total based on input values
//   const tempTotal = cart.reduce((sum, item) => {
//     if (item.type === "customGiftBox") {
//       return sum + item.total;
//     }

//     const key = `${item.id}-${item.weight}`;
//     const inputVal = quantityInputs[key];

//     // Use input value if available, otherwise use cart quantity
//     const qty =
//       inputVal !== undefined && inputVal !== ""
//         ? Number(inputVal)
//         : item.quantity;

//     return sum + item.price * qty;
//   }, 0);

//   // Handle blur event to validate input
//   const handleQuantityBlur = (id, weight) => {
//     const key = `${id}-${weight}`;
//     const value = quantityInputs[key];

//     console.log("🔹 handleQuantityBlur called:", { id, weight, value });

//     // Reset empty or invalid to 1
//     if (!value || Number(value) < 1) {
//       console.log("🔄 Resetting to 1 because value is:", value);
//       setQty(id, weight, 1);
//       setQuantityInputs((prev) => ({
//         ...prev,
//         [key]: "1",
//       }));
//     } else {
//       console.log("✅ Value is valid, keeping as:", value);
//     }
//   };

//   return (
//     <div className="rounded-3xl bg-white shadow-lg">
//       {/* Header */}
//       <div className="border-b p-5">
//         <h2 className="text-2xl font-bold text-[#2E1E13]">Your Cart</h2>
//       </div>

//       {/* Cart Items */}
//       <div className="p-5">
//         {cart.length === 0 ? (
//           <p className="py-10 text-center text-gray-500">Your cart is empty.</p>
//         ) : (
//           cart.map((item) => {
//             /* ==========================
//                CUSTOMIZED GIFT BOX
//             =========================== */
//             if (item.type === "customGiftBox") {
//               return (
//                 <div
//                   key={item.id}
//                   className="mb-6 rounded-3xl border border-[#E8DED3] bg-[#FCFAF8] p-6"
//                 >
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <h3 className="text-2xl font-bold text-[#2E1E13]">
//                         🎁 Customized Gift Box
//                       </h3>

//                       <p className="mt-2 text-[#5A4637]">
//                         Recipient:
//                         <span className="ml-2 font-semibold">
//                           {item.recipient.name}
//                         </span>
//                       </p>

//                       <p className="text-[#5A4637]">
//                         Occasion:
//                         <span className="ml-2 font-semibold">
//                           {item.recipient.occasion}
//                         </span>
//                       </p>
//                     </div>

//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="text-red-500 cursor-pointer"
//                     >
//                       <Trash2 size={20} />
//                     </button>
//                   </div>

//                   {item.recipient.photo && (
//                     <div className="mt-6">
//                       <img
//                         src={item.recipient.photo}
//                         alt={item.recipient.name}
//                         className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-lg"
//                       />
//                     </div>
//                   )}

//                   {item.recipient.message && (
//                     <div className="mt-6 rounded-2xl bg-white p-5 italic text-[#5A4637]">
//                       "{item.recipient.message}"
//                     </div>
//                   )}

//                   <div className="mt-8">
//                     <h4 className="font-semibold text-[#2E1E13]">
//                       Included Products
//                     </h4>

//                     <div className="mt-4 space-y-3">
//                       {item.products.map((product) => (
//                         <div
//                           key={`${product.id}-${product.weight}`}
//                           className="flex justify-between text-[#5A4637]"
//                         >
//                           <span>
//                             {product.name} ({product.weight})
//                           </span>

//                           <span>x {product.quantity}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-8 flex justify-between border-t pt-5">
//                     <span className="text-lg font-bold">Total</span>

//                     <span className="text-xl font-bold text-[#C97A34]">
//                       ₹{item.total}
//                     </span>
//                   </div>
//                 </div>
//               );
//             }

//             /* ==========================
//                NORMAL PRODUCT
//             =========================== */
//             const key = `${item.id}-${item.weight}`;
//             const inputValue =
//               quantityInputs[key] !== undefined
//                 ? quantityInputs[key]
//                 : String(item.quantity || 1);

//             console.log("🎯 Rendering input for:", {
//               key,
//               quantityInputsValue: quantityInputs[key],
//               cartQuantity: item.quantity,
//               finalInputValue: inputValue,
//             });

//             return (
//               <div key={key} className="mb-6 flex gap-4 border-b pb-5">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="
//                     h-20 w-20
//                     sm:h-24 sm:w-24
//                     md:h-28 md:w-28
//                     lg:h-36 lg:w-36
//                     xl:h-40 xl:w-40
//                     rounded-xl
//                     object-contain
//                     bg-[#faf7f2]
//                     p-2
//                   "
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
//                       ₹{item.price} × {inputValue || "0"}{" "}
//                       {/* Shows 0 when empty */}
//                     </p>

//                     <p className="text-sm text-gray-500 md:text-base">
//                       Subtotal ₹{item.price * (Number(inputValue) || 0)}{" "}
//                       {/* Shows ₹0 when empty */}
//                     </p>
//                   </div>

//                   <div className="mt-4 flex items-center gap-3">
//                     {/* Quantity controls */}
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
//                         handleQuantityChange(
//                           item.id,
//                           item.weight,
//                           e.target.value,
//                         )
//                       }
//                       onBlur={() => handleQuantityBlur(item.id, item.weight)}
//                       className="
//         w-8
//         text-center
//         font-semibold
//         text-[#2E1E13]
//         bg-transparent
//         outline-none
//         border-b-2
//         border-transparent
//         focus:border-[#C97A34]
//         transition-colors
//       "
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

//       {/* Footer */}
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
  // total,          // You can keep or remove this – it's not used anymore
  changeVariant,
  increaseQty,
  decreaseQty,
  setQty,
  removeItem,
  onCheckout,
  onShopMore,
}) => {
  const [quantityInputs, setQuantityInputs] = useState({});

  useEffect(() => {
    const inputs = {};
    cart.forEach((item) => {
      if (item.type === "customGiftBox") return;
      const key = `${item.id}-${item.weight}`;
      inputs[key] = String(item.quantity || 1);
    });
    setQuantityInputs(inputs);
  }, [cart]);

  const handleQuantityChange = (id, weight, value) => {
    const key = `${id}-${weight}`;
    if (!/^\d*$/.test(value)) return;
    setQuantityInputs((prev) => ({ ...prev, [key]: value }));
    if (value !== "") {
      setQty(id, weight, Number(value));
    }
  };

  const handleQuantityBlur = (id, weight) => {
    const key = `${id}-${weight}`;
    const value = quantityInputs[key];
    if (!value || Number(value) < 1) {
      setQty(id, weight, 1);
      setQuantityInputs((prev) => ({ ...prev, [key]: "1" }));
    }
  };

  // ✅ ONE tempTotal – real‑time total based on input values
  const tempTotal = cart.reduce((sum, item) => {
    if (item.type === "customGiftBox") {
      return sum + item.total;
    }
    const key = `${item.id}-${item.weight}`;
    const inputVal = quantityInputs[key];
    const qty =
      inputVal !== undefined && inputVal !== ""
        ? Number(inputVal)
        : item.quantity;
    return sum + item.price * qty;
  }, 0);

  return (
    <div className="rounded-3xl bg-white shadow-lg">
      <div className="border-b p-5">
        <h2 className="text-2xl font-bold text-[#2E1E13]">Your Cart</h2>
      </div>

      <div className="p-5">
        {cart.length === 0 ? (
          <p className="py-10 text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => {
            // Gift box rendering...
            if (item.type === "customGiftBox") {
              return (
                <div key={item.id} className="mb-6 rounded-3xl border border-[#E8DED3] bg-[#FCFAF8] p-6">
                  {/* ... (keep your gift box JSX unchanged) */}
                </div>
              );
            }

            // Normal product
            const key = `${item.id}-${item.weight}`;
            const inputValue =
              quantityInputs[key] !== undefined
                ? quantityInputs[key]
                : String(item.quantity || 1);

            return (
              <div key={key} className="mb-6 flex gap-4 border-b pb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-40 xl:w-40 rounded-xl object-contain bg-[#faf7f2] p-2"
                />
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#2E1E13] md:text-lg lg:text-xl">
                    {item.name}
                  </h3>
                  <select
                    value={item.weight}
                    onChange={(e) =>
                      changeVariant(item.id, item.weight, e.target.value)
                    }
                    className="mt-2 cursor-pointer rounded border border-gray-300 px-3 py-1 text-sm"
                  >
                    {item.variants.map((variant) => (
                      <option key={variant.weight} value={variant.weight}>
                        {variant.weight}
                      </option>
                    ))}
                  </select>

                  <div className="mt-3">
                    <p className="text-base font-bold text-[#2E1E13] md:text-lg">
                      ₹{item.price} × {inputValue || "0"}
                    </p>
                    <p className="text-sm text-gray-500 md:text-base">
                      Subtotal ₹{item.price * (Number(inputValue) || 0)}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id, item.weight)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:bg-[#C97A34] hover:text-white cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={inputValue}
                      onChange={(e) =>
                        handleQuantityChange(item.id, item.weight, e.target.value)
                      }
                      onBlur={() => handleQuantityBlur(item.id, item.weight)}
                      className="w-8 text-center font-semibold text-[#2E1E13] bg-transparent outline-none border-b-2 border-transparent focus:border-[#C97A34] transition-colors"
                      aria-label="Quantity"
                    />
                    <button
                      onClick={() => increaseQty(item.id, item.weight)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:bg-[#C97A34] hover:text-white cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id, item.weight)}
                      className="ml-auto text-red-500 cursor-pointer"
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

      {/* Footer – now uses tempTotal */}
      <div className="border-t p-5">
        <div className="mb-5 flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{tempTotal}</span>
        </div>
        <button
          onClick={onShopMore}
          className="mb-3 w-full rounded-full border border-[#C97A34] py-3 font-semibold text-[#C97A34] transition hover:bg-[#F8F2EA] cursor-pointer"
        >
          ← Shop More
        </button>
        <button
          disabled={cart.length === 0}
          onClick={onCheckout}
          className="w-full rounded-full bg-[#C97A34] py-3 font-semibold text-white transition hover:bg-[#b56d2f] disabled:cursor-not-allowed disabled:bg-gray-300 cursor-pointer"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
