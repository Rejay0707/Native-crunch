/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [shippingDetails, setShippingDetails] = useState(null);

  return (
    <CheckoutContext.Provider
      value={{
        shippingDetails,
        setShippingDetails,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);