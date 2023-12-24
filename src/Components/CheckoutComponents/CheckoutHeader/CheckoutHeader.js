import React from "react";
import logo from "../../../assets/myntra.png";
import "./CheckoutHeader.scss";
import { Link } from "react-router-dom";
export default function CheckoutHeader() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="middle-header">
          <span className="step active">BAG</span>
          <span>------------</span>
          <span className="step">ADDRESS</span>
          <span>------------</span>
          <span className="step">PAYMENT</span>
        </div>
        <div className="right-header">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            class="secureIcon"
            width="26"
            height="28"
            alt=""
          ></img>
          <p>100% Secure</p>
        </div>
      </div>
    </>
  );
}
