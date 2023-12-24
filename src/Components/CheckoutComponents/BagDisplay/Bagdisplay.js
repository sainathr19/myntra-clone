import React from "react";
import CartItem from "../../CartItem/CartItem";
import { bag } from "../../../redux/Bag/BagSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import "./BagDisplay.scss";
export default function Bagdisplay() {
  const bagitems = useSelector(bag);
  const arr = Object.keys(bagitems.items);
  return (
    <>
      <div className="cart-container">
        <div className="cart">
          {arr.map((i) => {
            return <CartItem id={i} />;
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
    </>
  );
}
