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
        {variants.map((variant) => (
          <button
            key={variant.weight}
            onClick={() => onVariantChange(variant)}
            className={`
              rounded-xl
              border
              px-6
              py-3
              font-medium
              transition-all
              cursor-pointer

              ${
                selectedVariant.weight === variant.weight
                  ? "border-[#C97A34] bg-[#C97A34] text-white shadow-lg"
                  : "border-[#E7D8CA] bg-white text-[#2E1E13] hover:border-[#C97A34]"
              }
            `}
          >
            {variant.weight}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductWeightSelector;
