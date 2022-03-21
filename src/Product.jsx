import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProducts } from "./features/productSlice";
import "./Product.css";

export default function Product() {
  const [productName, setProductName] = useState("");
  const [available, setAvailable] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = () => {
    dispatch(
      addProducts({
        productName: productName,
        available: available,
      })
    );
    navigate("/product-list");
  };

  return (
    <div className="product">
      <h1>Add Product Details</h1>
      <div className="product-input">
        <input
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Product Name"
        />

        <input
          onChange={(e) => setAvailable(e.target.value)}
          type="text"
          placeholder="Available?"
        />
        {/* <label>Available?</label>
        <select name="available">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select> */}
        <button onClick={addProduct}>Add</button>
      </div>
    </div>
  );
}
