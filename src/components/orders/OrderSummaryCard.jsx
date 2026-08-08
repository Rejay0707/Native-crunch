const OrderSummaryCard = ({ order }) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-[#2E1E13]">Order Summary</h2>

      <div className="mt-6 space-y-5">
        {order.items.map((item) => (
          <div
            key={`${item.id}-${item.weight}`}
            className="flex justify-between gap-4"
          >
            <div>
              <p className="font-semibold text-[#2E1E13]">{item.name}</p>

              <p className="mt-1 text-sm text-[#6A5B4E]">
                {item.weight} × {item.quantity}
              </p>
            </div>

            <p className="font-semibold text-[#2E1E13]">
              ₹{item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-6" />

      <div className="flex justify-between text-sm">
        <span className="text-[#6A5B4E]">Subtotal</span>

        <span>₹{order.subtotal}</span>
      </div>

      <div className="mt-3 flex justify-between text-sm">
        <span className="text-[#6A5B4E]">Shipping</span>

        {order.shippingCharge === 0 ? (
          <span className="font-semibold text-green-600">FREE</span>
        ) : (
          <span>₹{order.shippingCharge}</span>
        )}
      </div>

      <hr className="my-6" />

      <div className="flex justify-between text-xl font-bold text-[#2E1E13]">
        <span>Total</span>

        <span>₹{order.total}</span>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
