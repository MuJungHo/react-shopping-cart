import { useCart } from "../context";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <div
        style={{ maxHeight: "40vh" }}
        className="fixed bg-white w-44 right-2 bottom-20 shadow-lg border rounded-lg"
      >
        12312321
      </div>
      <button class="fixed right-2 bottom-2 w-16 h-16 text-white transition-colors duration-150 bg-blue-500 rounded-full hover:bg-blue-800">
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
