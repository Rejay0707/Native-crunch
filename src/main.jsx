import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartProvider } from "./context/CartContext";
import { CheckoutProvider } from "./context/CheckoutContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <CheckoutProvider>
        <App />
      </CheckoutProvider>
    </CartProvider>

    <ToastContainer
      position="top-right"
      autoClose={2500}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>,
);
