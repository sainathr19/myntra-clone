import React from "react";
import "./Tester.scss";
import logo from "./myntra.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { bag } from "../../redux/Bag/BagSlice";

export default function Tester() {
  const bagitems = useSelector(bag);
  console.log("Testerr");
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" typeof="png/text" />
        </Link>
        <div className="left">
          <div className="category">
            <Link to="/shop/men" className="catitems">
              MEN
            </Link>
            <Link to="/shop/women" className="catitems">
              WOMEN
            </Link>
            <Link to="/shop/kids" className="catitems">
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
            <p className="bagcount">{bagitems.count}</p>
            <img
              className="bagimage"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtc2hvcHBpbmctYmFnIj48cGF0aCBkPSJNNiAyIDMgNnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNmwtMy00WiIvPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTYgMTBhNCA0IDAgMCAxLTggMCIvPjwvc3ZnPg=="
              alt=""
            />
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
