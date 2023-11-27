import React from "react";
import "./loginpage.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Loginpage() {
  const navigate = useNavigate();
  const loginsubmit = () => {
    setTimeout(() => {
      navigate(`/loginotp`);
    }, 1000);
  };
  return (
    <div className="loginpage">
      <div className="formcontainer">
        <Link className="banner">
          <img
            src="//assets.myntassets.com/dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
            alt=""
          />
        </Link>
        <div className="form">
          <p className="head">
            <b>Login </b>or
            <b> Signup</b>
          </p>
          <div className="mobileinput">
            <p>+91</p>
            <p className="p2">|</p>
            <input type="text" placeholder="Mobile number" />
          </div>
          <div className="terms">
            <p>By continuing,i agree to the</p>
            <Link className="helplinks">Terms if Use</Link>
            <p>&</p>
            <Link className="helplinks">Privacy Policy</Link>
          </div>
          <button onClick={loginsubmit} className="loginbutton">
            Continue
          </button>
          <div className="trouble">
            <p>Have trouble logging in?</p>
            <Link className="helplinks">Get help</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
