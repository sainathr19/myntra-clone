import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

export default function EntireLayout() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
