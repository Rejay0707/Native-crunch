const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#2E1E13]">
        Quantity
      </h3>

      <div
        className="
          flex
          w-fit
          items-center
          gap-5
          rounded-2xl
          bg-white
          border
          border-[#E7D8CA]
          px-5
          py-3
        "
      >
        <button
          onClick={onDecrease}
          disabled={quantity === 1}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-[#F8F2EA]
            text-xl
            cursor-pointer
          "
        >
          -
        </button>

        <span className="min-w-5 text-center font-semibold text-[#2E1E13]">
          {quantity}
        </span>

        <button
          onClick={onIncrease}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-[#F8F2EA]
            text-xl
            cursor-pointer
          "
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
