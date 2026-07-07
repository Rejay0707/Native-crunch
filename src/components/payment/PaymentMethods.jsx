import { useState } from "react";
import {
  CreditCard,
  Smartphone,
  Building2,
  Banknote,
  MapPin,
} from "lucide-react";

const PaymentMethods = ({ shippingDetails }) => {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const methods = [
    {
      id: "upi",
      title: "UPI",
      icon: <Smartphone size={20} />,
    },
    {
      id: "card",
      title: "Credit / Debit Card",
      icon: <CreditCard size={20} />,
    },
    {
      id: "netbanking",
      title: "Net Banking",
      icon: <Building2 size={20} />,
    },
    {
      id: "cod",
      title: "Cash On Delivery",
      icon: <Banknote size={20} />,
    },
  ];

  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      {/* Shipping Address */}
      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center gap-2">
          <MapPin className="text-[#C97A34]" />
          <h2 className="text-2xl font-bold text-[#2E1E13]">
            Delivery Address
          </h2>
        </div>

        {shippingDetails ? (
          <div className="space-y-2 text-[#444]">
            <p className="font-semibold text-lg">
              {shippingDetails.fullName}
            </p>

            <p>{shippingDetails.mobile}</p>

            <p>{shippingDetails.email}</p>

            <p>
              {shippingDetails.address}
              {shippingDetails.landmark &&
                `, ${shippingDetails.landmark}`}
            </p>

            <p>
              {shippingDetails.city},{" "}
              {shippingDetails.state} -{" "}
              {shippingDetails.pincode}
            </p>
          </div>
        ) : (
          <p className="text-red-500">
            Shipping details not found.
          </p>
        )}
      </div>

      {/* Payment Methods */}
      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="mb-8 text-2xl font-bold text-[#2E1E13]">
          Select Payment Method
        </h2>

        <div className="space-y-4">
          {methods.map((method) => (
            <label
              key={method.id}
              className={`flex cursor-pointer items-center justify-between rounded-2xl border p-5 transition ${
                paymentMethod === method.id
                  ? "border-[#C97A34] bg-[#FFF8F1]"
                  : "border-gray-200 hover:border-[#C97A34]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-[#C97A34]">
                  {method.icon}
                </div>

                <span className="font-medium">
                  {method.title}
                </span>
              </div>

              <input
                type="radio"
                value={method.id}
                checked={paymentMethod === method.id}
                onChange={() =>
                  setPaymentMethod(method.id)
                }
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;