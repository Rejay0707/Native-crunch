const OrderDetailsCard = ({
  orderId,
  items = [],
  subtotal = 0,
  shippingCharge = 0,
  total = 0,
}) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      {/* Heading */}
      <h3 className="mb-6 text-xl font-bold text-[#2E1E13]">Order Details</h3>

      {/* Order ID */}
      <div className="mb-6 flex items-center justify-between border-b border-[#E8D8C8] pb-5">
        <span className="text-gray-500">Order ID</span>

        <span className="font-semibold text-[#C97A34]">#{orderId}</span>
      </div>

      {/* Products */}
      <div className="space-y-5">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={`${item.id}-${item.weight}`}
              className="flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-semibold text-[#2E1E13]">{item.name}</p>

                <p className="mt-1 text-sm text-gray-500">
                  {item.weight} × {item.quantity}
                </p>
              </div>

              <p className="shrink-0 font-semibold text-[#2E1E13]">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No products found.</p>
        )}
      </div>

      <hr className="my-6" />

      {/* Subtotal */}
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Subtotal</span>

        <span className="font-medium">₹{subtotal}</span>
      </div>

      {/* Shipping */}
      <div className="mt-3 flex justify-between text-sm">
        <span className="text-gray-600">Shipping</span>

        {shippingCharge === 0 ? (
          <span className="font-semibold text-green-600">FREE</span>
        ) : (
          <span className="font-medium">₹{shippingCharge}</span>
        )}
      </div>

      <hr className="my-6" />

      {/* Total */}
      <div className="flex justify-between text-xl font-bold">
        <span className="text-[#2E1E13]">Total</span>

        <span className="text-[#C97A34]">₹{total}</span>
      </div>

      {/* Delivery */}
      <div className="mt-6 rounded-xl bg-[#FFF4E8] p-4">
        <p className="font-semibold text-[#2E1E13]">Estimated Delivery</p>

        <p className="mt-1 text-sm text-[#8B5E3C]">3 - 5 working days</p>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
