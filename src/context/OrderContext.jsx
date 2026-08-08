/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("nativeCrunchOrders");

    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Save orders to localStorage
  useEffect(() => {
    localStorage.setItem("nativeCrunchOrders", JSON.stringify(orders));
  }, [orders]);

  // Create a new order
  const createOrder = ({
    cart,
    shippingDetails,
    subtotal,
    shippingCharge,
    total,
  }) => {
    const order = {
      id: `NC${Date.now()}`,

      orderDate: new Date().toISOString(),

      status: "Order Placed",

      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
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

      tracking: [
        {
          title: "Order Placed",
          description: "Your order has been placed successfully.",
          completed: true,
        },
        {
          title: "Order Confirmed",
          description: "Your order is being confirmed.",
          completed: false,
        },
        {
          title: "Processing",
          description: "Your order is being prepared.",
          completed: false,
        },
        {
          title: "Shipped",
          description: "Your order has been shipped.",
          completed: false,
        },
        {
          title: "Out for Delivery",
          description: "Your order is out for delivery.",
          completed: false,
        },
        {
          title: "Delivered",
          description: "Your order has been delivered.",
          completed: false,
        },
      ],
    };

    setOrders((prev) => [order, ...prev]);

    return order;
  };

  // Find a single order
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

export const useOrders = () => useContext(OrderContext);
