import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessCard = () => {
  const navigate = useNavigate();

  const orderId = `NC${Date.now().toString().slice(-8)}`;

  return (
    <div className="rounded-3xl bg-white p-10 shadow-lg text-center">

      <CheckCircle
        size={90}
        className="mx-auto text-green-600"
      />

      <h1 className="mt-6 text-4xl font-bold text-[#2E1E13]">
        Order Placed Successfully!
      </h1>

      <p className="mt-4 text-gray-600">
        Thank you for shopping with Native Crunch.
      </p>

      <div className="mt-10 rounded-2xl bg-[#F8F2EA] p-6">

        <p className="text-gray-500">
          Order ID
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#C97A34]">
          {orderId}
        </h2>

        <div className="mt-8">

          <p className="text-gray-500">
            Estimated Delivery
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[#2E1E13]">
            3 - 5 Business Days
          </h3>

        </div>

      </div>

      <button
        onClick={() => navigate("/")}
        className="
          mt-10
          rounded-full
          bg-[#C97A34]
          px-8
          py-4
          font-semibold
          text-white
          transition
          hover:bg-[#b56d2f]
          cursor-pointer
        "
      >
        Continue Shopping
      </button>

    </div>
  );
};

export default SuccessCard;