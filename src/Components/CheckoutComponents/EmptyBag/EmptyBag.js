import React from "react";
import "./Emptybag.scss";
import { Link } from "react-router-dom";
export default function EmptyBag() {
  return (
    <div className="empty-bag">
      <img
        src="https://constant.myntassets.com/checkout/assets/img/empty-bag.png"
        alt="img"
      />
      <p className="text-1">Hey,it feels so light!</p>
      <p className="text-2">
        There is nothing in your bag.Let's add some items.
      </p>
      <Link to="/wishlist" className="add-items">
        ADD ITEMS FROM WISHLIST
      </Link>
    </div>
  );
}
