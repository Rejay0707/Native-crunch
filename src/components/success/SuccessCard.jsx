import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessCard = ({ order }) => {
  const navigate = useNavigate();

  if (!order) {
    return null;
  }

  const orderNumber =
    order.order_id ||
    order.order_number ||
    order.id;

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
        Thank you for your order. Your payment has been
        successfully received.
      </p>

      {/* Order Number */}
      <p className="mt-4 text-sm text-gray-500">
        Order Number:{" "}
        <span className="font-semibold text-[#C97A34]">
          #{orderNumber}
        </span>
      </p>

      {/* Payment Status */}
      <div className="mx-auto mt-8 max-w-md rounded-2xl bg-[#FFF4E8] p-5">
        <p className="text-sm text-gray-600">
          Payment Status
        </p>

        <p className="mt-1 font-semibold uppercase text-green-600">
          {order.payment_status || "PAID"}
        </p>
      </div>

      {/* Total */}
      {order.total !== undefined && (
        <div className="mx-auto mt-4 max-w-md rounded-2xl bg-[#FAF7F2] p-5">
          <p className="text-sm text-gray-600">
            Amount Paid
          </p>

          <p className="mt-1 text-xl font-bold text-[#2E1E13]">
            ₹{order.total}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">

        <button
          type="button"
          onClick={() => navigate("/shop")}
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
          Continue Shopping
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
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
          Back to Home
        </button>

      </div>
    </div>
  );
};

export default SuccessCard;