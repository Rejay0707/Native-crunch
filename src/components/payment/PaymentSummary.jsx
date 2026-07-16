import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const PaymentSummary = ({
  cart,
  total,
  shippingDetails = { shippingDetails },
}) => {
  const { setCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    setCart([]); // Clear cart
    navigate("/success"); // Go to success page
  };
  return (
    <div className="sticky top-28 rounded-3xl bg-white p-6 shadow-lg">
      <div className="mb-6 rounded-xl border border-[#E8D8C8] bg-[#FAF7F2] p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-[#2E1E13]">Shipping Address</h3>

          <button
            type="button"
            onClick={() => navigate("/checkout")}
            className="cursor-pointer text-sm font-medium text-[#C97A34] hover:underline"
          >
            Edit
          </button>
        </div>

        {shippingDetails && (
          <>
            <p className="font-medium">{shippingDetails.fullName}</p>

            <p className="text-sm text-gray-600">{shippingDetails.mobile}</p>

            <p className="mt-2 text-sm text-gray-600">
              {shippingDetails.address}
            </p>

            <p className="text-sm text-gray-600">
              {shippingDetails.landmark && `${shippingDetails.landmark}, `}
              {shippingDetails.city}, {shippingDetails.state} -{" "}
              {shippingDetails.pincode}
            </p>
          </>
        )}
      </div>
      <h2 className="mb-6 text-2xl font-bold text-[#2E1E13]">Order Summary</h2>
      
      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.weight}`}
            className="flex items-center justify-between"
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

        <span className="font-medium text-green-600">FREE</span>
      </div>
      <hr className="my-6" />
      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>

        <span>₹{total}</span>
      </div>
      <button
        onClick={handlePayment}
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
        Pay Now
      </button>
    </div>
  );
};

export default PaymentSummary;
