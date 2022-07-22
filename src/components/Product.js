import { useState } from "react";
import Modal from "./Modal";
const Product = ({ product }) => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }
  return (
    <div className="lg:w-1/6 w-1/4 p-2">
      <div className="border hover:shadow-md p-2">
        <div style={{ height: 120 }} className="w-full flex bg-gray-100">
          <img
            alt=""
            className="m-auto"
            style={{ maxHeight: 120 }}
            src={`/images/${product.id}.jpg`}
          />
        </div>
        <div className="p-1">
          <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="line-through text-gray-500">{product.price}</p>
              <p className="font-bold">{product.sale}</p>
            </div>
            <button
              onClick={openModal}
              className="text-white py-2 px-4 bg-blue-500 rounded hover:bg-blue-700"
            >
              購買
            </button>
          </div>
        </div>
      </div>
      <Modal product={product} open={open} closeModal={closeModal} />
    </div>
  );
};

export default Product;
