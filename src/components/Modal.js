import ReactModal from "react-modal";
import React, { useState } from "react";
import ToggleButtonGroup from "./ToggleButtonGroup";
import { useCart } from "../context";

const Modal = ({ open, closeModal, product }) => {
  const { addToCart } = useCart();
  const Sizes = [23, 24, 25, 26, 27];
  const Colors = ["白", "黑", "灰", "紫", "綠"];
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [payType, setPayType] = useState();
  const [count, setCount] = useState(1);
  const colorInitData = Colors.map((color) => ({
    value: color,
    disabled: !product.colors.includes(color)
  }));
  const sizeInitData = Sizes.map((size) => ({
    value: size,
    disabled: !product.sizes.includes(size)
  }));
  const payWithPointInitData = product.payWithPoint.map((item) => ({
    value: `${item.point ? `${item.point}點 ＋ ` : ""}NT$${item.price}`,
    disabled: false
  }));
  const disabledToSubmit =
    color === undefined || size === undefined || payType === undefined;
  return (
    <ReactModal
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)"
        },
        content: {
          width: 900,
          margin: 10,
          inset: "auto",
          overflow: "auto"
        }
      }}
      isOpen={open}
      onRequestClose={closeModal}
    >
      <div className="w-full">
        <div className="flex space-between border-b pb-4 mb-3">
          <img alt="" className="w-40 h-40 block" src={product.image} />
          <div className="ml-4">
            <div className="mb-2">{product.title}</div>
            <p className="line-through text-gray-500">{product.price}</p>
            <p className="font-bold">{product.sale}</p>
          </div>
        </div>
        <p className="font-bold">尺寸</p>
        <ToggleButtonGroup
          data={sizeInitData}
          value={size}
          onChange={setSize}
        />
        <p className="font-bold">顏色</p>
        <ToggleButtonGroup
          data={colorInitData}
          value={color}
          onChange={setColor}
        />
        <p className="font-bold">請選擇購買方式</p>
        <ToggleButtonGroup
          data={payWithPointInitData}
          value={payType}
          onChange={setPayType}
        />
        <div className="w-full flex justify-between items-center mt-10 pt-4 border-t">
          <div className="flex justify-between items-center w-1/4">
            <button
              className="text-gray-500 border border-gray-500 py-2 px-4 text-lg rounded-full"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <span>{count}</span>

            <button
              className="text-gray-500 border border-gray-500 py-2 px-4 text-lg rounded-full"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </div>
          <button
            disabled={disabledToSubmit}
            className={`
            rounded
            w-1/4
            py-2 px-4 text-lg ${
              disabledToSubmit
                ? "opacity-75 bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-green-500 text-white"
            }`}
            onClick={() => {
              addToCart({ productId: product.id, count, color, size, payType });
              closeModal();
            }}
          >
            加入
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
