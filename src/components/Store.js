import items from "../items.json";
import Product from "./Product";

const Store = () => {
  return (
    <div className="w-full flex flex-wrap">
      {items.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Store;
