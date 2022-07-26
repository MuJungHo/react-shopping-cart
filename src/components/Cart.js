import { useCart } from "../context";
import React from "react";
import CartItem from "./CartItem";
const Cart = () => {
  const { cart, checkout, isCartOpen, setCartOpen } = useCart();
  return (
    <>
      {isCartOpen && (
        <div
          style={{ maxHeight: "60vh" }}
          className={
            " fixed bg-white w-66 p-5 right-2 bottom-20 shadow-lg borderinset-0 transform ease-in-out overflow-auto" +
            (isCartOpen
              ? " transition-opacity opacity-100 duration-500 translate-x-0  "
              : " transition-all delay-500 opacity-0 translate-x-full  ")
          }
        >
          {cart.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
          <button
            onClick={checkout}
            className="
            rounded
            w-full
            mt-2
            py-2 px-4 text-lg bg-green-500 text-white"
          >
            結帳
          </button>
        </div>
      )}
      <button
        disabled={cart.length === 0}
        onClick={() => setCartOpen((pre) => !pre)}
        class={`fixed right-2 bottom-2 w-16 h-16 ${
          cart.length === 0
            ? "text-gray-300 bg-gray-200"
            : "text-white bg-blue-500"
        } transition-colors duration-150 rounded-full`}
      >
        <span class="relative inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 -1 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cart.length > 0 && (
            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {cart.length}
            </span>
          )}
        </span>
      </button>
    </>
  );
};

export default Cart;
