import React from "react";
import "./Bag.scss";
import logo from "./myntra.png";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
export default function Bag() {
  const bag = [
    { value: 12 },
    { value: 123 },
    { value: 1234 },
    { value: 12345 },
  ];
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
          {bag.map((i) => {
            return <CartItem {...i} />;
          })}
        </div>
        <div className="cart-price-details">
          <div className="coupons">
            <p className="details-head">COUPONS</p>
            <div className="coupons-line">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRhZyI+PHBhdGggZD0iTTEyIDJIMnYxMGw5LjI5IDkuMjljLjk0Ljk0IDIuNDguOTQgMy40MiAwbDYuNTgtNi41OGMuOTQtLjk0Ljk0LTIuNDggMC0zLjQyTDEyIDJaIi8+PHBhdGggZD0iTTcgN2guMDEiLz48L3N2Zz4="
                alt="coup"
              />
              <h5>APPLY COUPONS</h5>
              <button>APPLY</button>
            </div>
          </div>
          <div className="donate">
            <p className="details-head">Donate and make a difference</p>
            <div className="donate-buttons">
              <button className="donate-button">₹10</button>
              <button className="donate-button">₹50</button>
              <button className="donate-button">₹100</button>
            </div>
            <Link className="helplinks">KNOW MORE</Link>
          </div>
          <div className="price-breakdown">
            <p className="details-head">PRICE DETAILS</p>
            <div className="breakdown-element">
              <p>Total MRP</p>
              <p>₹499</p>
            </div>
            <div className="breakdown-element">
              <p>Discount on MRP</p>
              <p>₹199</p>
            </div>
            <div className="breakdown-element">
              <p>
                Plotform Fee <Link className="helplinks">Know more</Link>
              </p>
              <p>₹20</p>
            </div>
            <div className="breakdown-element">
              <p>
                Shipping Fee <Link className="helplinks">Know more</Link>
              </p>
              <p>Free</p>
            </div>
            <div className="total-element">
              <p>Total</p>
              <p>₹320</p>
            </div>
            <button className="loginbutton">PLACE ORDER</button>
          </div>
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
