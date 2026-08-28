const DeliveryAddress = ({ order }) => {
  if (!order) {
    return null;
  }

  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-[#2E1E13]">Delivery Address</h2>

      <div className="mt-5 space-y-2 text-[#6A5B4E]">
        {/* Customer Name */}
        <p className="font-semibold text-[#2E1E13]">{order.full_name}</p>

        {/* Mobile */}
        {order.mobile && <p>{order.mobile}</p>}

        {/* Email */}
        {order.email && <p>{order.email}</p>}

        {/* Address */}
        {order.address && <p className="mt-3">{order.address}</p>}

        {/* Landmark */}
        {order.landmark && <p>{order.landmark}</p>}

        {/* City / State / Pincode */}
        <p>
          {order.city}
          {order.city && order.state ? ", " : ""}
          {order.state}
          {order.pincode ? ` - ${order.pincode}` : ""}
        </p>
      </div>
    </div>
  );
};

export default DeliveryAddress;
