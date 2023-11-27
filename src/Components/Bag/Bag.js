import React from "react";
import "./Bag.scss";
import logo from "./myntra.png";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
export default function Bag() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" />
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
      <div className="cart-container">
        <div className="cart">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"
            alt=""
          />
        </div>
        <div className="footer-right">
          <span>Need Help? </span>
          <Link className="helplinks" to="/">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
