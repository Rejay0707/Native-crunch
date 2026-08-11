const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  onQuantityChange,
}) => {
  return (
    <div className="mt-6">
      {/* Label */}
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#2E1E13]">
        Quantity
      </p>

      {/* Quantity Control */}
      <div className="inline-flex items-center rounded-xl border border-[#E7D8CA] bg-white p-1 shadow-sm">
        {/* Minus */}
        <button
          type="button"
          onClick={onDecrease}
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
          onChange={(e) => {
            const value = e.target.value;

            // Allow numbers only
            if (!/^\d*$/.test(value)) {
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
          "
          aria-label="Quantity"
        />

        {/* Plus */}
        <button
          type="button"
          onClick={onIncrease}
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
          "
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
