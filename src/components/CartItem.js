import { useCart } from "../context";
import React, { useState } from "react";

const CartItem = ({ item }) => {
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
        <p>{`尺寸${item.size}`}</p>
        <p>{`顏色${item.color}`}</p>
        <p>{`數量${item.count}`}</p>
        <p>{`購買方式${item.payType}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
