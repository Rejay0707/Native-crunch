import { Minus, Plus, Trash2 } from "lucide-react";

const GiftBoxItem = ({
  item,
  increaseQty,
  decreaseQty,
  removeProduct,
  changeVariant,
}) => {
  return (
    <div className="rounded-[32px] border border-[#E8DED3] bg-white p-8 shadow-sm transition hover:shadow-xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-[#F8F2EA]">
            <img
              src={item.image}
              alt={item.name}
              className="h-32 w-32 object-contain transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#2E1E13]">
                {item.name}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F8F2EA] px-3 py-1 text-xs font-medium text-[#8B5E3C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-left lg:text-right">
              <p className="text-sm text-gray-400">Subtotal</p>

              <h2 className="text-3xl font-bold text-[#C97A34]">
                ₹{item.price * item.quantity}
              </h2>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            {/* Weight */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2E1E13]">
                Weight
              </label>

              <select
                value={item.weight}
                onChange={(e) =>
                  changeVariant(item.id, item.weight, e.target.value)
                }
                className="rounded-2xl border border-[#DDD] bg-white px-5 py-3 font-medium outline-none focus:border-[#C97A34]"
              >
                {item.variants.map((variant) => (
                  <option key={variant.weight} value={variant.weight}>
                    {variant.weight}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2E1E13]">
                Quantity
              </label>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQty(item.id, item.weight)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border hover:bg-[#F8F2EA]"
                >
                  <Minus size={18} />
                </button>

                <span className="w-8 text-center text-xl font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id, item.weight)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border hover:bg-[#F8F2EA]"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeProduct(item.id, item.weight)}
              className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftBoxItem;