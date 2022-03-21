import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "./features/productSlice";
import "./ProductList.css";

function ProductList() {
  const product = useSelector(selectProduct);
  return (
    <div>
      {product?.map((item, index) => (
        <>
          <h5>Product: {item.productName}</h5>
          <h5>Available: {item.available}</h5>
        </>
      ))}
    </div>
  );
}

export default ProductList;
