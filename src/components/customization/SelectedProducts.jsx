import { Minus, Plus, Trash2 } from "lucide-react";

const SelectedProducts = ({
  selectedProducts,
  increaseQty,
  decreaseQty,
  removeProduct,
  changeVariant,
}) => {
  if (selectedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 rounded-[32px] bg-white p-8 shadow-lg">
      <p className="font-semibold uppercase tracking-[0.2em] text-[#C97A34]">
        Step 02
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#2E1E13]">
        Customize Your Gift Box
      </h2>

      <p className="mt-2 text-[#5A4637]">
        Choose the quantity and variant for every selected product.
      </p>

      <div className="mt-10 space-y-6">
        {selectedProducts.map((item) => (
          <div
            key={`${item.id}-${item.weight}`}
            className="flex flex-col gap-5 rounded-2xl border border-[#EFE5DA] p-5 lg:flex-row"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-36 w-36 rounded-xl bg-[#F8F2EA] object-contain p-4"
            />

            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#2E1E13]">{item.name}</h3>

              <div className="mt-5 flex flex-wrap gap-5">
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Variant
                  </p>

                  <select
                    value={item.weight}
                    onChange={(e) =>
                      changeVariant(item.id, item.weight, e.target.value)
                    }
                    className="rounded-xl border px-4 py-2"
                  >
                    {item.variants.map((variant) => (
                      <option key={variant.weight} value={variant.weight}>
                        {variant.weight}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Quantity
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id, item.weight)}
                      className="rounded-full border p-2 hover:bg-[#C97A34] hover:text-white cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="w-6 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id, item.weight)}
                      className="rounded-full border p-2 hover:bg-[#C97A34] hover:text-white cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Product Total</p>

                  <h3 className="text-2xl font-bold text-[#C97A34]">
                    ₹{item.price * item.quantity}
                  </h3>
                </div>

                <button
                  onClick={() => removeProduct(item.id, item.weight)}
                  className="flex items-center gap-2 rounded-full border border-red-200 px-5 py-2 text-red-500 hover:bg-red-50 cursor-pointer"
                >
                  <Trash2 size={18} />
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedProducts;
