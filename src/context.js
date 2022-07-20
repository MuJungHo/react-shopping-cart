import React, { useContext, useState } from "react";

export const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = ({ ...args }) => {
    setCart([...cart, { ...args }]);
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return [];
    });
  };

  var value = {
    cart,
    addToCart,
    removeFromCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
