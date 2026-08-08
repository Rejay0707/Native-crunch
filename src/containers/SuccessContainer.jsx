import { useSearchParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SuccessCard from "../components/success/SuccessCard";

import { useOrders } from "../context/OrderContext";

const SuccessContainer = () => {
  const [searchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");

  const { getOrderById } = useOrders();

  const order = getOrderById(orderId);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] py-16">
        <div className="mx-auto max-w-4xl px-6">
          {order ? (
            <SuccessCard order={order} />
          ) : (
            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
              <h1 className="text-2xl font-bold text-[#2E1E13]">
                Order Not Found
              </h1>

              <p className="mt-3 text-gray-600">
                We couldn't find the order you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SuccessContainer;