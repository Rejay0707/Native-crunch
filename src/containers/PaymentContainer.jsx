import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PaymentMethods from "../components/payment/PaymentMethods";
import PaymentSummary from "../components/payment/PaymentSummary";

import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";

const PaymentContainer = () => {
  const navigate = useNavigate();

  const { cart } = useCart();
  const { shippingDetails } = useCheckout();

  const [paymentMethod, setPaymentMethod] = useState("upi");

  useEffect(() => {
    if (!shippingDetails) {
      navigate("/checkout", { replace: true });
    }
  }, [shippingDetails, navigate]);


  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shippingCharge = subtotal >= 499 ? 0 : 50;

  const total = subtotal + shippingCharge;

  if (!shippingDetails || cart.length === 0) {
    return null;
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PaymentMethods
              shippingDetails={shippingDetails}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>

          <div>
            <PaymentSummary
              cart={cart}
              subtotal={subtotal}
              shippingCharge={shippingCharge}
              total={total}
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
