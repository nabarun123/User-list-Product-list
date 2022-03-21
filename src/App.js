import React from "react";
import "./App.css";
import Nav from "./Nav";
import Users from "./Users";
import UsersList from "./UsersList";
import Product from "./Product";
import ProductList from "./ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="users-list" element={<UsersList />} />
            <Route path="product" element={<Product />} />
            <Route path="product-list" element={<ProductList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
