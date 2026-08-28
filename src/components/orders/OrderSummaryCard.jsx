const OrderSummaryCard = ({ order }) => {
  const items = Array.isArray(order?.items) ? order.items : [];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-[#2E1E13]">Order Summary</h2>

      {/* Order Items */}
      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="border-b border-[#E9DED2] pb-5 last:border-b-0 last:pb-0"
          >
            <div className="flex justify-between gap-4">
              <div>
                <p className="font-semibold text-[#2E1E13]">
                  {item.product_name}
                </p>

                <p className="mt-1 text-sm text-[#6A5B4E]">
                  {item.variant_weight} × {item.quantity}
                </p>

                <p className="mt-1 text-xs text-[#8A796A]">
                  ₹{item.unit_price} each
                </p>
              </div>

              <p className="font-semibold text-[#2E1E13]">₹{item.subtotal}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <hr className="my-6" />

      <div className="flex justify-between text-sm">
        <span className="text-[#6A5B4E]">Subtotal</span>

        <span className="font-medium text-[#2E1E13]">₹{order.subtotal}</span>
      </div>

      <div className="mt-3 flex justify-between text-sm">
        <span className="text-[#6A5B4E]">Shipping</span>

        {Number(order.shipping_charge) === 0 ? (
          <span className="font-semibold text-green-600">FREE</span>
        ) : (
          <span className="font-medium text-[#2E1E13]">
            ₹{order.shipping_charge}
          </span>
        )}
      </div>

      <hr className="my-6" />

      {/* Total */}
      <div className="flex justify-between text-xl font-bold text-[#2E1E13]">
        <span>Total</span>

        <span>₹{order.total}</span>
      </div>

      {/* Payment Status */}
      <div className="mt-6 rounded-2xl bg-[#FFF4E8] p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-[#6A5B4E]">Payment Status</span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
              order.payment_status === "paid"
                ? "bg-[#EAF4E6] text-[#3F8C4F]"
                : order.payment_status === "failed"
                  ? "bg-red-100 text-red-600"
                  : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order.payment_status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
