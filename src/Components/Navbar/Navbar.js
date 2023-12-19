import React from "react";
import "./Navbar.scss";
import logo from "./myntra.png";
import { Link } from "react-router-dom";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" typeof="png/text" />
        </Link>
        <div className="left">
          <div className="category">
            <Link to="/men" className="catitems">
              MEN
            </Link>
            <Link to="/women" className="catitems">
              WOMEN
            </Link>
            <Link to="/kids" className="catitems">
              KIDS
            </Link>
            <Link to="/" className="catitems">
              HOME
            </Link>
            <Link to="/" className="catitems">
              BEAUTY
            </Link>
            <Link to="/" className="catitems">
              STUDIO
            </Link>
          </div>
        </div>
        <div className="search">
          <Link className="searchicon">
            <SearchOutlinedIcon />
          </Link>
          <input
            placeholder="Search for products,brands and more"
            type="text"
          />
        </div>

        <div className="rightbar">
          <Link to="/" className="rightitem">
            <Person2OutlinedIcon />
            <span>Profile</span>
          </Link>
          <Link to="/" className="rightitem">
            <FavoriteBorderOutlinedIcon />
            <span>Wishlist</span>
          </Link>
          <Link to="/bag" className="rightitem">
            {/* <div className="fake-div"> */}
            {/* <p className="bagcount">0</p> */}
            <ShoppingBagOutlinedIcon />
            {/* </div> */}
            <span>Bag</span>
          </Link>
        </div>
      </div>
      <div className="menudown">
        <p>Menudown</p>
      </div>
      {/* <div className="main">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div> */}
    </>
  );
}
