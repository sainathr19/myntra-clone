import React from "react";
import "./Error404.scss";
export default function Error404() {
  return (
    <>
      <div className="error">
        <img
          src="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png"
          alt="img"
        />
        <p className="head1">We couldn't find any matches!</p>
        <p className="head2">
          Please check the spelling or try searching something else
        </p>
        <div className="search-bar">
          <input type="text" placeholder="   Shoes,T-shirts,Tops etc.." />
          <span>
            <button>Search</button>
          </span>
        </div>
      </div>
    </>
  );
}
