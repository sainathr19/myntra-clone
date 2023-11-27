import React from "react";
import "./LoginWPass.scss";
import { Link } from "react-router-dom";

export default function LoginWPass() {
  return (
    <div className="loginpage">
      <div className="formcontainer">
        <div className="form">
          <p className="head">Login to your Account</p>
          <div className="mobileinput">
            <input type="text" placeholder="Email or phone number" />
          </div>
          <div className="mobileinput">
            <input type="text" placeholder="Password" />
          </div>
          <button className="loginbutton">Login</button>
          <div className="trouble">
            <p>Forgot your password?</p>
            <Link className="helplinks">Reset here</Link>
          </div>
          <div className="trouble">
            <p>Have trouble logging in?</p>
            <Link className="helplinks">Get help</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
