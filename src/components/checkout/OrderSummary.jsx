import { Minus, Plus } from "lucide-react";

const OrderSummary = ({
  cart,
  subtotal,
  shippingCharge,
  total,
  increaseQuantity,
  decreaseQuantity,
  isSubmitting,
}) => {
  return (
    <div className="sticky top-28 min-w-0 overflow-hidden rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-[#2E1E13]">Order Summary</h2>

      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={item.product_variant_id}
            className="flex min-w-0 justify-between gap-3"
          >
            <div className="min-w-0 flex-1">
              <p className="break-words font-semibold">{item.name}</p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.product_variant_id)}
                  type="button"
                  className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border hover:bg-[#C97A34] hover:text-white"
                >
                  <Minus size={14} />
                </button>

                <span className="w-6 shrink-0 text-center font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.product_variant_id)}
                  type="button"
                  className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border hover:bg-[#C97A34] hover:text-white"
                >
                  <Plus size={14} />
                </button>

                <span className="ml-2 text-sm text-gray-500">
                  {item.weight}
                </span>
              </div>
            </div>

            <p className="shrink-0 font-semibold">
              ₹{item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* Coupon Code */}
      <div className="mt-6">
        <label className="mb-2 block font-medium text-[#2E1E13]">
          Coupon Code
        </label>

        <div className="flex min-w-0 gap-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C97A34] focus:outline-none"
          />

          <button
            type="button"
            className="shrink-0 cursor-pointer rounded-lg bg-[#C97A34] px-5 py-2 font-medium text-white transition hover:bg-[#b56d2f]"
          >
            Apply
          </button>
        </div>
      </div>

      <hr className="my-6" />

      {/* Subtotal */}
      <div className="flex justify-between gap-4">
        <span>Subtotal</span>
        <span className="shrink-0">₹{subtotal}</span>
      </div>

      {/* Shipping */}
      <div className="mt-3 flex justify-between gap-4">
        <span>Shipping</span>

        {shippingCharge === 0 ? (
          <span className="shrink-0 font-semibold text-green-600">FREE</span>
        ) : (
          <span className="shrink-0">₹{shippingCharge}</span>
        )}
      </div>

      {/* Free Shipping Message */}
      {shippingCharge > 0 && (
        <p className="mt-4 break-words rounded-lg bg-[#FFF4E8] p-3 text-sm text-[#8B5E3C]">
          Add <strong>₹{500 - subtotal}</strong> more to get
          <strong> FREE shipping.</strong>
        </p>
      )}

      <hr className="my-6" />

      {/* Total */}
      <div className="flex justify-between gap-4 text-xl font-bold">
        <span>Total</span>
        <span className="shrink-0">₹{total}</span>
      </div>

      <button
        type="submit"
        form="checkout-form"
        disabled={cart.length === 0 || isSubmitting}
        className="
    mt-8
    w-full
    cursor-pointer
    rounded-full
    bg-[#C97A34]
    py-4
    font-semibold
    text-white
    transition
    hover:bg-[#b56d2f]
    disabled:cursor-not-allowed
    disabled:bg-gray-300
  "
      >
        {isSubmitting ? "Processing Order..." : "Proceed to Payment"}
      </button>
    </div>
  );
};

export default OrderSummary;
