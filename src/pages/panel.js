import React from "react";
import { useRoutes } from "react-router-dom";
import Sidebar from "./../panel/Components/Sidebar/Sidebar";
import Header from "./../panel/Components/Header/Header";


export default function App() {
  return (
    <>
      <Sidebar />
      <Header />
    </>
  );
}
