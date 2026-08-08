/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("nativeCrunchOrders");

    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("nativeCrunchOrders", JSON.stringify(orders));
  }, [orders]);

  const createOrder = ({
    cart,
    shippingDetails,
    subtotal,
    shippingCharge,
    total,
  }) => {
    const order = {
      id: `NC${Date.now()}`,
      createdAt: new Date().toISOString(),

      status: "Processing",

      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        weight: item.weight,
        price: item.price,
        quantity: item.quantity,
      })),

      shippingDetails: {
        fullName: shippingDetails?.fullName || "",
        mobile: shippingDetails?.mobile || "",
        address: shippingDetails?.address || "",
        landmark: shippingDetails?.landmark || "",
        city: shippingDetails?.city || "",
        state: shippingDetails?.state || "",
        pincode: shippingDetails?.pincode || "",
      },

      subtotal,
      shippingCharge,
      total,

      estimatedDelivery: "3 - 5 working days",
    };

    setOrders((prev) => [order, ...prev]);

    return order;
  };

  const getOrderById = (orderId) => {
    return orders.find((order) => order.id === orderId);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
