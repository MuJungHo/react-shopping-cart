import React, { useContext, useState } from "react";

export const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = ({ ...args }) => {
    setCart([...cart, { ...args, _id: Date.now() }]);
  };
  const editFromCart = (id, count) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item._id === id) return { ...item, count: count };
        return item;
      });
    });
  };
  const removeFromCart = (id) => {
    setCart((prev) => {
      return prev.filter((item) => item._id !== id);
    });
  };
  const checkout = () => {
    setCart([]);
    alert("已結帳！");
  };
  var value = {
    cart,
    addToCart,
    removeFromCart,
    editFromCart,
    checkout
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
