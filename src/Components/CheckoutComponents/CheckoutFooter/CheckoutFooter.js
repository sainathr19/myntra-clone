import React from "react";
import "./CheckoutFooter.scss";
import { Link } from "react-router-dom";

export default function CheckoutFooter() {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
            alt=""
          />
          <img
            class="payments"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"
            alt=""
          />
        </div>
        <div className="footer-right">
          <span>Need Help? </span>
          <Link className="helplinks" to="/">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
