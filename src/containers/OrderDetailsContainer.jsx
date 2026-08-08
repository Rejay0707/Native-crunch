import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import OrderTracking from "../components/orders/OrderTracking";
import OrderSummaryCard from "../components/orders/OrderSummaryCard";
import DeliveryAddress from "../components/orders/DeliveryAddress";

import { useOrders } from "../context/OrderContext";

const OrderDetailsContainer = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const { orders, getOrderById } = useOrders();

  /*
   * ============================================================
   * INDIVIDUAL ORDER / TRACKING PAGE
   * URL: /orders/:orderId
   * ============================================================
   */

  if (orderId) {
    const order = getOrderById(orderId);

    if (!order) {
      return (
        <>
          <Navbar />

          <section className="min-h-screen bg-[#F8F2EA] px-6 py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-[#2E1E13]">
                Order Not Found
              </h1>

              <p className="mt-3 text-[#6A5B4E]">
                We couldn't find this order.
              </p>

              <button
                type="button"
                onClick={() => navigate("/orders")}
                className="mt-8 cursor-pointer rounded-full bg-[#C97A34] px-8 py-3 font-semibold text-white transition hover:bg-[#B66E2F]"
              >
                Back to My Orders
              </button>
            </div>
          </section>

          <Footer />
        </>
      );
    }

    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] py-16">
          <div className="mx-auto max-w-7xl px-6">
            {/* Header */}
            <div>
              <button
                type="button"
                onClick={() => navigate("/orders")}
                className="mb-5 cursor-pointer text-sm font-medium text-[#C97A34] hover:underline"
              >
                ← Back to My Orders
              </button>

              <h1 className="text-4xl font-bold text-[#2E1E13]">
                Track Your Order
              </h1>

              <p className="mt-2 text-[#6A5B4E]">
                Order ID: <span className="font-semibold">#{order.id}</span>
              </p>
            </div>

            {/* Tracking + Summary */}
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {/* Tracking */}
              <div className="lg:col-span-2">
                <OrderTracking tracking={order.tracking} />
              </div>

              {/* Order Summary */}
              <OrderSummaryCard order={order} />
            </div>

            {/* Delivery Address */}
            <DeliveryAddress shippingDetails={order.shippingDetails} />
          </div>
        </section>

        <Footer />
      </>
    );
  }

  /*
   * ============================================================
   * MY ORDERS PAGE
   * URL: /orders
   * ============================================================
   */

  if (orders.length === 0) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-[#2E1E13]">
              No Orders Found
            </h1>

            <p className="mt-3 text-[#6A5B4E]">
              You haven't placed any orders yet.
            </p>

            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="mt-8 cursor-pointer rounded-full bg-[#C97A34] px-8 py-3 font-semibold text-white transition hover:bg-[#B66E2F]"
            >
              Start Shopping
            </button>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Page Header */}
          <h1 className="text-4xl font-bold text-[#2E1E13]">My Orders</h1>

          <p className="mt-2 text-[#6A5B4E]">
            View and track your recent orders.
          </p>

          {/* Orders */}
          <div className="mt-8 space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-3xl bg-white p-6 shadow-lg"
              >
                {/* Order Header */}
                <div className="flex flex-col justify-between gap-4 border-b border-[#E9DED2] pb-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>

                    <p className="mt-1 font-bold text-[#C97A34]">#{order.id}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>

                    <p className="mt-1 font-medium text-[#2E1E13]">
                      {new Date(order.orderDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-[#FFF4E8] px-4 py-2 text-sm font-semibold text-[#C97A34]">
                    {order.status}
                  </span>
                </div>

                {/* Products */}
                <div className="mt-5 space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={`${item.id}-${item.weight}`}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-16 w-16 rounded-xl object-contain"
                          />
                        )}

                        <div>
                          <p className="font-semibold text-[#2E1E13]">
                            {item.name}
                          </p>

                          <p className="mt-1 text-sm text-[#6A5B4E]">
                            {item.weight} × {item.quantity}
                          </p>
                        </div>
                      </div>

                      <p className="font-semibold text-[#2E1E13]">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-6 flex flex-col gap-4 border-t border-[#E9DED2] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-[#6A5B4E]">Total Amount</p>

                    <p className="text-xl font-bold text-[#2E1E13]">
                      ₹{order.total}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate(`/orders/${order.id}`)}
                    className="cursor-pointer rounded-full bg-[#C97A34] px-7 py-3 font-semibold text-white transition hover:bg-[#B66E2F]"
                  >
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OrderDetailsContainer;
