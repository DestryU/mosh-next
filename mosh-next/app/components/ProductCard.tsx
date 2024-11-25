import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="p-4 my-4 bg-sky-400 text-white text-2xl hover:bg-sky-600">
      <AddToCart />
    </div>
  );
};
export default ProductCard;
