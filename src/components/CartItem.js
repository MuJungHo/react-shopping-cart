import { useCart } from "../context";
import React, { useState } from "react";

const CartItem = ({ item }) => {
  const { editFromCart, removeFromCart } = useCart();
  return (
    <div className="flex mb-2">
      <div
        style={{ width: 100, height: 100 }}
        className="flex bg-gray-100 mr-2"
      >
        <img
          alt=""
          className="m-auto"
          style={{ maxHeight: 100, maxWidth: 100 }}
          src={`/images/${item.productId}.jpg`}
        />
      </div>
      <div className="text-xs">
        <p>{`商品${item.productId}, ${item.size}號, ${item.color}色`}</p>
        <p>{`${item.payType}`}</p>
        <input
          type="number"
          value={item.count}
          onChange={(e) =>
            e.target.value > 0
              ? editFromCart(item._id, e.target.value)
              : removeFromCart(item._id)
          }
        />
      </div>
    </div>
  );
};

export default CartItem;
