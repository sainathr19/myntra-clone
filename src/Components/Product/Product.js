import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
export default function Product(props) {
  return (
    <>
      <Link className="Link" to={`/men/${props.productid}`}>
        <div className="item">
          <div className="photos">
            <img src={props.img} alt="/" />
          </div>
          <div className="bottom">
            <div className="bottomwrapper">
              <h3>{props.brand}</h3>
              <h4>{props.productname}</h4>
              <div className="pricebottom">
                <span className="mainprice">Rs. {props.price}</span>
                <span className="strikedprice">Rs.{props.strikedprice}</span>
                <span className="pricediscount">({props.discount}OFF)</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
