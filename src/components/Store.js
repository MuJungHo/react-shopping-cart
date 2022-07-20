import items from "../items.json";
import Product from "./Product";

const Store = () => {
  return (
    <div style={{ maxWidth: 1200 }} className="flex flex-wrap m-auto">
      {items.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Store;
