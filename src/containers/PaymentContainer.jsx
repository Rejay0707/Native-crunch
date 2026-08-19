import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PaymentMethods from "../components/payment/PaymentMethods";
import PaymentSummary from "../components/payment/PaymentSummary";

import { useCheckout } from "../context/CheckoutContext";

const getStoredOrder = () => {
  const storedOrder = localStorage.getItem("latestOrder");

  if (!storedOrder) {
    return null;
  }

  try {
    return JSON.parse(storedOrder);
  } catch (error) {
    console.error("Failed to parse latest order:", error);
    localStorage.removeItem("latestOrder");
    return null;
  }
};

const PaymentContainer = () => {
  const navigate = useNavigate();

  const { shippingDetails } = useCheckout();

  const [order] = useState(getStoredOrder);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  // No order → go back to checkout
  if (!order) {
    navigate("/checkout", { replace: true });
    return null;
  }

  // No shipping details → go back to checkout
  if (!shippingDetails) {
    navigate("/checkout", { replace: true });
    return null;
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">

          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <PaymentMethods
              shippingDetails={shippingDetails}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>

          {/* Payment Summary */}
          <div>
            <PaymentSummary
              order={order}
              shippingDetails={shippingDetails}
              paymentMethod={paymentMethod}
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default PaymentContainer;