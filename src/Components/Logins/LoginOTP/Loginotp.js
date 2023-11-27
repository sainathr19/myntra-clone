import React from "react";
import { Link } from "react-router-dom";
import "./loginotp.scss";

export default function LoginOtp() {
  return (
    <div className="otp-page">
      <div className="otp-form-container">
        <div className="form-container-content">
          <Link className="otp-banner">
            <img
              src="//constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
              alt=""
            />
          </Link>
          <h2 className="verifotp">Verify with OTP</h2>
          <p className="sentto">Sent to 9490863408</p>
          <div className="otp-input">
            <input className="otp-child" type="text" maxLength="1" />
            <input className="otp-child" type="text" maxLength="1" />
            <input className="otp-child" type="text" maxLength="1" />
            <input className="otp-child" type="text" maxLength="1" />
          </div>
          <Link className="resend-otp">Resend OTP</Link>
          <div className="login-with-password">
            <p>Log in using</p>
            <Link to="/loginwpass" className="helplinks">
              Password
            </Link>
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
