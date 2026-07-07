const OrderSummary = ({ cart, total, onProceedToPayment }) => {
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

              <p className="text-sm text-gray-500">
                {item.weight} × {item.quantity}
              </p>
            </div>

            <p className="font-semibold">₹{item.price * item.quantity}</p>
          </div>
        ))}
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
