import { Minus, Plus, Trash2 } from "lucide-react";

const GiftBoxItem = ({
  item,
  increaseQty,
  decreaseQty,
  removeProduct,
  changeVariant,
}) => {
  return (
    <div className="rounded-3xl border border-[#EFE3D8] bg-[#FCFAF8] p-5">
      <div className="flex flex-col gap-5 lg:flex-row">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="h-28 w-28 rounded-2xl bg-white object-contain p-2"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#2E1E13]">{item.name}</h3>

          <div className="mt-4 flex flex-wrap gap-4">
            <select
              value={item.weight}
              onChange={(e) =>
                changeVariant(item.id, item.weight, e.target.value)
              }
              className="rounded-xl border border-[#DDD] px-4 py-2"
            >
              {item.variants.map((variant) => (
                <option key={variant.weight} value={variant.weight}>
                  {variant.weight}
                </option>
              ))}
            </select>

            <div className="flex items-center rounded-xl border">
              <button
                onClick={() => decreaseQty(item.id, item.weight)}
                className="px-4 py-2 hover:bg-[#F5EFE9]"
              >
                <Minus size={18} />
              </button>

              <span className="px-5 font-semibold">{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id, item.weight)}
                className="px-4 py-2 hover:bg-[#F5EFE9]"
              >
                <Plus size={18} />
              </button>
            </div>

            <button
              onClick={() => removeProduct(item.id, item.weight)}
              className="ml-auto text-red-500 hover:text-red-600"
            >
              <Trash2 />
            </button>
          </div>
        </div>

        {/* Price */}

        <div className="flex items-center">
          <p className="text-2xl font-bold text-[#C97A34]">
            ₹{item.price * item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftBoxItem;
