const DeliveryAddress = ({ shippingDetails }) => {
  if (!shippingDetails) {
    return null;
  }

  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-[#2E1E13]">Delivery Address</h2>

      <div className="mt-5 space-y-2 text-[#6A5B4E]">
        <p className="font-semibold text-[#2E1E13]">
          {shippingDetails.fullName}
        </p>

        <p>{shippingDetails.mobile}</p>

        <p className="mt-3">{shippingDetails.address}</p>

        {shippingDetails.landmark && <p>{shippingDetails.landmark}</p>}

        <p>
          {shippingDetails.city}, {shippingDetails.state} -{" "}
          {shippingDetails.pincode}
        </p>
      </div>
    </div>
  );
};

export default DeliveryAddress;
