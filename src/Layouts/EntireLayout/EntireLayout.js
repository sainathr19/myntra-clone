import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Tester from "../../Components/Tester/Tester";
export default function EntireLayout() {
  return (
    <>
      <Tester />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
