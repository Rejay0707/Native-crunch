import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessCard = ({ order }) => {
  const navigate = useNavigate();

  if (!order) {
    return null;
  }

  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-lg md:p-12">
      {/* Success Icon */}
      <div className="flex justify-center">
        <CheckCircle className="h-20 w-20 text-green-500" />
      </div>

      {/* Success Message */}
      <h1 className="mt-6 text-3xl font-bold text-[#2E1E13]">
        Order Confirmed!
      </h1>

      <p className="mt-3 text-gray-600">
        Thank you for your order. Your order has been placed successfully.
      </p>

      {/* Order ID */}
      <p className="mt-4 text-sm text-gray-500">
        Order ID:{" "}
        <span className="font-semibold text-[#C97A34]">#{order.id}</span>
      </p>

      {/* Estimated Delivery */}
      <div className="mx-auto mt-8 max-w-md rounded-2xl bg-[#FFF4E8] p-5">
        <p className="text-sm text-gray-600">Estimated Delivery</p>

        <p className="mt-1 font-semibold text-[#2E1E13]">3 - 5 working days</p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={() => navigate(`/orders/${order.id}`)}
          className="
            w-full
            cursor-pointer
            rounded-full
            bg-[#C97A34]
            py-4
            font-semibold
            text-white
            transition
            hover:bg-[#B66E2F]
          "
        >
          Track Order
        </button>

        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="
            w-full
            cursor-pointer
            rounded-full
            border
            border-[#C97A34]
            py-4
            font-semibold
            text-[#C97A34]
            transition
            hover:bg-[#C97A34]
            hover:text-white
          "
        >
          Continue Shopping
        </button>
      </div>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="mt-5 cursor-pointer text-sm font-medium text-[#8B5E3C] hover:underline"
      >
        Back to Home
      </button>
    </div>
  );
};

export default SuccessCard;
