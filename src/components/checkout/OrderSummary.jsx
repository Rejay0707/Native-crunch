import { Minus, Plus } from "lucide-react";

const OrderSummary = ({
  cart,
  total,
  onProceedToPayment,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="sticky top-28 rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-[#2E1E13]">Order Summary</h2>

      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.weight}`}
            className="flex justify-between"
          >
            <div>
              <p className="font-semibold">{item.name}</p>

              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id, item.weight)}
                  type="button"
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border hover:bg-[#C97A34] hover:text-white"
                >
                  <Minus size={14} />
                </button>

                <span className="w-6 text-center font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id, item.weight)}
                  type="button"
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border hover:bg-[#C97A34] hover:text-white"
                >
                  <Plus size={14} />
                </button>

                <span className="ml-2 text-sm text-gray-500">
                  {item.weight}
                </span>
              </div>
            </div>

            <p className="font-semibold">₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      {/* Coupon Code */}
      <div className="mt-6">
        <label className="mb-2 block font-medium text-[#2E1E13]">
          Coupon Code
        </label>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C97A34] focus:outline-none"
          />

          <button
            type="button"
            className="cursor-pointer rounded-lg bg-[#C97A34] px-5 py-2 font-medium text-white transition hover:bg-[#b56d2f]"
          >
            Apply
          </button>
        </div>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between">
        <span>Subtotal</span>

        <span>₹{total}</span>
      </div>

      <div className="mt-3 flex justify-between">
        <span>Shipping</span>

        <span className="text-green-600">FREE</span>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>

        <span>₹{total}</span>
      </div>

      <button
        type="submit"
        form="checkout-form"
        disabled={cart.length === 0}
        className="
    mt-8
    w-full
    rounded-full
    bg-[#C97A34]
    py-4
    font-semibold
    text-white
    transition
    hover:bg-[#b56d2f]

    disabled:bg-gray-300
    disabled:cursor-not-allowed
    cursor-pointer
  "
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default OrderSummary;
