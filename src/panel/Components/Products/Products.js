import React, { useState } from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import supabase from "../../../supabase-client";


export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log("Error fetching", error);
    } else {
      setAllProducts(data)
      console.log(data);
    }
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
