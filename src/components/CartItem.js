import { useCart } from "../context";
import React from "react";

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
        <p className="mb-1">{`商品${item.productId}, ${item.size}號, ${item.color}色`}</p>
        <p className="mb-1">{`${item.payType}`}</p>
        <div className="flex space-x-4 items-center">
          <input
            type="number"
            className="
          px-3
          py-1.5
          m-auto
          border border-solid border-gray-300
          "
            value={item.count}
            onChange={(e) =>
              e.target.value > 0
                ? editFromCart(item._id, e.target.value)
                : removeFromCart(item._id)
            }
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            onClick={() => removeFromCart(item._id)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
