// const ProductWeightSelector = ({
//   variants,
//   selectedVariant,
//   onVariantChange,
// }) => {
//   return (
//     <div className="mt-8">
//       <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#2E1E13]">
//         Select Weight
//       </h3>

//       <div className="flex flex-wrap gap-3">
//         {variants.map((variant) => (
//           <button
//             key={variant.weight}
//             onClick={() => onVariantChange(variant)}
//             className={`
//               rounded-xl
//               border
//               px-6
//               py-3
//               font-medium
//               transition-all
//               cursor-pointer

//               ${
//                 selectedVariant.weight === variant.weight
//                   ? "border-[#C97A34] bg-[#C97A34] text-white shadow-lg"
//                   : "border-[#E7D8CA] bg-white text-[#2E1E13] hover:border-[#C97A34]"
//               }
//             `}
//           >
//             {variant.weight}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductWeightSelector;

const ProductWeightSelector = ({
  variants,
  selectedVariant,
  onVariantChange,
}) => {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#2E1E13]">
        Select Weight
      </h3>

      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => {
          const stock = Number(variant.stock ?? 0);
          const isOutOfStock = stock <= 0;
          const isLimited = stock < 20 && stock > 0;
          const isVeryLimited = stock < 10 && stock > 0;

          return (
            <button
              key={variant.id}
              type="button"
              disabled={isOutOfStock}
              onClick={() => {
                if (!isOutOfStock) {
                  onVariantChange(variant);
                }
              }}
              className={`
                rounded-xl
                border
                px-4
                py-3
                font-medium
                transition-all

                ${
                  selectedVariant.id === variant.id
                    ? "border-[#C97A34] bg-[#C97A34] text-white shadow-lg"
                    : isOutOfStock
                      ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                      : "cursor-pointer border-[#E7D8CA] bg-white text-[#2E1E13] hover:border-[#C97A34]"
                }
              `}
            >
              <div className="flex items-center gap-2">
                <span>{variant.weight}</span>

                {/* Stock message */}
                {isOutOfStock ? (
                  <span
                    className={`
                      text-[10px]
                      font-semibold
                      uppercase
                      ${
                        selectedVariant.id === variant.id
                          ? "text-white/80"
                          : "text-red-500"
                      }
                    `}
                  >
                    Out of stock
                  </span>
                ) : isVeryLimited ? (
                  <span
                    className={`
                      text-[10px]
                      font-semibold
                      ${
                        selectedVariant.id === variant.id
                          ? "text-white"
                          : "text-red-600"
                      }
                    `}
                  >
                    Only {stock} left
                  </span>
                ) : isLimited ? (
                  <span
                    className={`
                      text-[10px]
                      font-semibold
                      ${
                        selectedVariant.id === variant.id
                          ? "text-white"
                          : "text-orange-600"
                      }
                    `}
                  >
                    Limited stock
                  </span>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductWeightSelector;
