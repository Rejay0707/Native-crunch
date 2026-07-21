import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = ({
  cart,
  total,
  changeVariant,
  increaseQty,
  decreaseQty,
  removeItem,
  onCheckout,
  onShopMore,
}) => {
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
            /* ==========================
               CUSTOMIZED GIFT BOX
            =========================== */
            if (item.type === "customGiftBox") {
              return (
                <div
                  key={item.id}
                  className="mb-6 rounded-3xl border border-[#E8DED3] bg-[#FCFAF8] p-6"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E1E13]">
                        🎁 Customized Gift Box
                      </h3>

                      <p className="mt-2 text-[#5A4637]">
                        Recipient:
                        <span className="ml-2 font-semibold">
                          {item.recipient.name}
                        </span>
                      </p>

                      <p className="text-[#5A4637]">
                        Occasion:
                        <span className="ml-2 font-semibold">
                          {item.recipient.occasion}
                        </span>
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  {item.recipient.photo && (
                    <div className="mt-6">
                      <img
                        src={item.recipient.photo}
                        alt={item.recipient.name}
                        className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  )}

                  {item.recipient.message && (
                    <div className="mt-6 rounded-2xl bg-white p-5 italic text-[#5A4637]">
                      "{item.recipient.message}"
                    </div>
                  )}

                  <div className="mt-8">
                    <h4 className="font-semibold text-[#2E1E13]">
                      Included Products
                    </h4>

                    <div className="mt-4 space-y-3">
                      {item.products.map((product) => (
                        <div
                          key={`${product.id}-${product.weight}`}
                          className="flex justify-between text-[#5A4637]"
                        >
                          <span>
                            {product.name} ({product.weight})
                          </span>

                          <span>x {product.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between border-t pt-5">
                    <span className="text-lg font-bold">Total</span>

                    <span className="text-xl font-bold text-[#C97A34]">
                      ₹{item.total}
                    </span>
                  </div>
                </div>
              );
            }

            /* ==========================
               NORMAL PRODUCT
            =========================== */

            return (
              <div
                key={`${item.id}-${item.weight}`}
                className="mb-6 flex gap-4 border-b pb-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-20 w-20
                    sm:h-24 sm:w-24
                    md:h-28 md:w-28
                    lg:h-36 lg:w-36
                    xl:h-40 xl:w-40
                    rounded-xl
                    object-contain
                    bg-[#faf7f2]
                    p-2
                  "
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
                      ₹{item.price} × {item.quantity}
                    </p>

                    <p className="text-sm text-gray-500 md:text-base">
                      Subtotal ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id, item.weight)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:bg-[#C97A34] hover:text-white cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

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

      {/* Footer */}
      <div className="border-t p-5">
        <div className="mb-5 flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
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
