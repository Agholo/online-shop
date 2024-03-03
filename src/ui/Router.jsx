import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home.jsx";
import About from "../screens/about/About.jsx";
import Connect from "../screens/connect/Connect.jsx";
import Credit from "../screens/credit/Credit.jsx";
import Delivery from "../screens/delivery/Delivery.jsx";
import Categories from "../screens/categories/Categories.jsx";
import Category from "../screens/category/Category.jsx";
import React from "react";
import Product from "../screens/product/Product.jsx";
import Deal from "../screens/deal/Deal.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Credit />} path="/credit" />
        <Route element={<Delivery />} path="/sell" />
        <Route element={<Categories />} path="/categories" />
        <Route element={<Connect />} path="/connect" />
        <Route element={<Category />} path="/categories/category/:id" />
        <Route element={<Product />} path="/categories/category/:id/:name" />
        <Route element={<Deal />} path="/deal" />

        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
