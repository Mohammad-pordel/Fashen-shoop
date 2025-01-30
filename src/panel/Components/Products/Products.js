import React, { useState } from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";


export default function Products() {
  const [allProducts, setAllProducts] = useState([]);


  const getAllProducts = () => {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(data => {
        setAllProducts(Object.entries(data));
      });
  };
  return (
    <>
      <Sidebar />
      <Header />
      <AddNewProduct getAllProducts={getAllProducts} />
      <ProductsTable getAllProducts={getAllProducts} allProducts={allProducts} />
    </>
  );
}
