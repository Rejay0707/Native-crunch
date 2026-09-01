// const QuantitySelector = ({
//   quantity,
//   onIncrease,
//   onDecrease,
//   onQuantityChange,
// }) => {
//   return (
//     <div className="mt-6">
//       {/* Label */}
//       <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#2E1E13]">
//         Quantity
//       </p>

//       {/* Quantity Control */}
//       <div className="inline-flex items-center rounded-xl border border-[#E7D8CA] bg-white p-1 shadow-sm">
//         {/* Minus */}
//         <button
//           type="button"
//           onClick={onDecrease}
//           className="
//             flex
//             h-10
//             w-10
//             items-center
//             justify-center
//             rounded-lg
//             text-lg
//             font-medium
//             text-[#2E1E13]
//             transition
//             hover:bg-[#F8F2EA]
//             hover:text-[#C97A34]
//             cursor-pointer
//           "
//           aria-label="Decrease quantity"
//         >
//           −
//         </button>

//         {/* Quantity Input */}
//         <input
//           type="text"
//           inputMode="numeric"
//           value={quantity}
//           onChange={(e) => {
//             const value = e.target.value;

//             // Allow numbers only
//             if (!/^\d*$/.test(value)) {
//               return;
//             }

//             onQuantityChange(value);
//           }}
//           className="
//             h-10
//             w-12
//             border-x
//             border-[#E7D8CA]
//             bg-transparent
//             text-center
//             text-base
//             font-semibold
//             text-[#2E1E13]
//             outline-none
//           "
//           aria-label="Quantity"
//         />

//         {/* Plus */}
//         <button
//           type="button"
//           onClick={onIncrease}
//           className="
//             flex
//             h-10
//             w-10
//             items-center
//             justify-center
//             rounded-lg
//             text-lg
//             font-medium
//             text-[#2E1E13]
//             transition
//             hover:bg-[#F8F2EA]
//             hover:text-[#C97A34]
//             cursor-pointer
//           "
//           aria-label="Increase quantity"
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuantitySelector;

const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  onQuantityChange,
  maxStock = 0,
}) => {
  const numericStock = Number(maxStock) || 0;
  const numericQuantity = Number(quantity) || 0;

  const isOutOfStock = numericStock <= 0;
  const isMaxReached = numericQuantity >= numericStock;

  return (
    <div className="mt-6">
      {/* Label */}
      <div className="mb-3 flex items-center gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#2E1E13]">
          Quantity
        </p>

        {numericStock > 0 && numericStock < 20 && (
          <span className="text-xs font-medium text-[#C97A34]">
            {numericStock < 10 ? `Only ${numericStock} left` : "Limited stock"}
          </span>
        )}
      </div>

      {/* Quantity Control */}
      <div
        className={`
          inline-flex
          items-center
          rounded-xl
          border
          border-[#E7D8CA]
          bg-white
          p-1
          shadow-sm
          ${isOutOfStock ? "opacity-50" : ""}
        `}
      >
        {/* Minus */}
        <button
          type="button"
          onClick={onDecrease}
          disabled={isOutOfStock || numericQuantity <= 1}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            text-lg
            font-medium
            text-[#2E1E13]
            transition
            hover:bg-[#F8F2EA]
            hover:text-[#C97A34]
            cursor-pointer
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
          aria-label="Decrease quantity"
        >
          −
        </button>

        {/* Quantity Input */}
        <input
          type="text"
          inputMode="numeric"
          value={quantity}
          disabled={isOutOfStock}
          onChange={(e) => {
            const value = e.target.value;

            if (!/^\d*$/.test(value)) {
              return;
            }

            if (value === "") {
              onQuantityChange("");
              return;
            }

            const numberValue = Number(value);

            // Don't allow quantity greater than available stock
            if (numberValue > numericStock) {
              onQuantityChange(String(numericStock));
              return;
            }

            onQuantityChange(value);
          }}
          className="
            h-10
            w-12
            border-x
            border-[#E7D8CA]
            bg-transparent
            text-center
            text-base
            font-semibold
            text-[#2E1E13]
            outline-none
            disabled:cursor-not-allowed
          "
          aria-label="Quantity"
        />

        {/* Plus */}
        <button
          type="button"
          onClick={onIncrease}
          disabled={isOutOfStock || isMaxReached}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            text-lg
            font-medium
            text-[#2E1E13]
            transition
            hover:bg-[#F8F2EA]
            hover:text-[#C97A34]
            cursor-pointer
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Maximum stock message */}
      {numericStock > 0 && isMaxReached && (
        <p className="mt-2 text-xs text-[#C97A34]">
          Maximum available quantity reached.
        </p>
      )}
    </div>
  );
};

export default QuantitySelector;
