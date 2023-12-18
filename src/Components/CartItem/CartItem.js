import React from "react";
import "./CartItem.scss";
export default function CartItem(props) {
  const buttonclick = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="cart-item">
        <button className="item-remove">X</button>
        <div className="cart-item-preview">
          <img
            className="cart-item-image"
            src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/210/views/1/appearances/2,backgroundColor=f2f2f2,modelId=1543,width=800,height=800.png"
            alt="/"
          />
        </div>
        <div className="cart-item-data">
          <h3>Roadster</h3>
          <h4>Men Navy Solid Round Neck T-Shirt</h4>
          <p className="sold-by">Sold by : Trunet Commerce</p>
          <div className="item-selectors">
            <button className="cart-item-button">
              Size : M <path fill-rule="evenodd" d="M0 0h6L3 3z"></path>
            </button>
            <button
              value={props.value}
              onClick={buttonclick}
              className="cart-item-button"
            >
              Qty : 1
            </button>
          </div>
          <div className="item-price">
            <p className="mainprice">₹999</p>
            <p className="strikedprice">₹1999</p>
            <p className="pricediscount">53% OFF</p>
          </div>
          <div className="item-return-info">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.63639 6.99013C6.84386 7.1976 6.84386 7.53397 6.63639 7.74143L5.7725 8.60533H8.27232C9.21251 8.60533 9.97949 7.84333 9.97949 6.89824C9.97949 5.95914 9.21859 5.19824 8.27949 5.19824H6.89116C6.59776 5.19824 6.35991 4.96039 6.35991 4.66699C6.35991 4.37359 6.59776 4.13574 6.89116 4.13574H8.27949C9.80539 4.13574 11.042 5.37234 11.042 6.89824C11.042 8.43232 9.79722 9.66783 8.27241 9.66783H5.77242L6.63639 10.5318C6.84386 10.7393 6.84386 11.0756 6.63639 11.2831C6.42893 11.4906 6.09256 11.4906 5.88509 11.2831L4.11426 9.51227C4.0417 9.43971 3.99452 9.35138 3.97271 9.25831C3.96352 9.21922 3.95866 9.17846 3.95866 9.13658C3.95866 9.05996 3.97488 8.98713 4.00407 8.92134C4.02519 8.87367 4.05366 8.82847 4.08949 8.78745C4.09828 8.77738 4.10745 8.76764 4.11697 8.75826L5.88509 6.99013C6.09256 6.78267 6.42893 6.78267 6.63639 6.99013Z"
                fill="#282C3F"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.416992 7.50033C0.416992 3.58831 3.58831 0.416992 7.50033 0.416992C11.4123 0.416992 14.5837 3.58831 14.5837 7.50033C14.5837 11.4123 11.4123 14.5837 7.50033 14.5837C3.58831 14.5837 0.416992 11.4123 0.416992 7.50033ZM7.50033 1.47949C4.17511 1.47949 1.47949 4.17511 1.47949 7.50033C1.47949 10.8255 4.17511 13.5212 7.50033 13.5212C10.8255 13.5212 13.5212 10.8255 13.5212 7.50033C13.5212 4.17511 10.8255 1.47949 7.50033 1.47949Z"
                fill="#282C3F"
              ></path>
            </svg>
            <span className="return-info-text">
              <span className="return-time">14 days</span> return available
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
