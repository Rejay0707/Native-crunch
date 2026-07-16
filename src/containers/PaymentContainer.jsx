import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PaymentMethods from "../components/payment/PaymentMethods";
import PaymentSummary from "../components/payment/PaymentSummary";

import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";

const PaymentContainer = () => {
  const { cart } = useCart();
  const { shippingDetails } = useCheckout();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <PaymentMethods
              shippingDetails={shippingDetails}
            />
          </div>

          <div>
            <PaymentSummary
              cart={cart}
              total={total}
              shippingDetails={shippingDetails}
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default PaymentContainer;