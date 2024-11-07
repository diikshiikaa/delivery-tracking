import React, { createContext, useContext, useState } from "react";

const DeliveriesContext = createContext();

export const DeliveriesProvider = ({ children }) => {
  const [deliveries, setDeliveries] = useState([]);

  const addDelivery = (newDelivery) => {
    setDeliveries([...deliveries, newDelivery]);
  };

  return (
    <DeliveriesContext.Provider value={{ deliveries, addDelivery }}>
      {children}
    </DeliveriesContext.Provider>
  );
};

export const useDeliveries = () => useContext(DeliveriesContext);
