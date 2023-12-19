import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="total">
        <div className="footer">
          <div className="f">
            <h4>Online Shopping</h4>
            <div className="fitems">
              <Link to="/" className="fitem">
                Men
              </Link>
              <Link to="/" className="fitem">
                Women
              </Link>
              <Link to="/" className="fitem">
                Women
              </Link>
              <Link to="/" className="fitem">
                Kids
              </Link>
              <Link to="/" className="fitem">
                Home & Living
              </Link>
              <Link to="/" className="fitem">
                Beauty
              </Link>
              <Link to="/" className="fitem">
                Gift Cards
              </Link>
              <Link to="/" className="fitem">
                Myntra Insider
              </Link>
            </div>
          </div>
          <div className="f">
            <h4>Customer Policies</h4>
            <div className="fitems">
              <Link to="/" className="fitem">
                Contact us
              </Link>
              <Link to="/" className="fitem">
                FAQ
              </Link>
              <Link to="/" className="fitem">
                T&C
              </Link>
              <Link to="/" className="fitem">
                Terms of Use
              </Link>
              <Link to="/" className="fitem">
                Track Orders
              </Link>
              <Link to="/" className="fitem">
                Shipping
              </Link>
              <Link to="/" className="fitem">
                Cancellation
              </Link>
              <Link to="/" className="fitem">
                Returns
              </Link>
              <Link to="/" className="fitem">
                Privacy Policy
              </Link>
              <Link to="/" className="fitem">
                Grievance Officer
              </Link>
            </div>
          </div>
          <div className="f2-3">
            <div className="f2">
              <h4>Experince Myntra App on Mobile</h4>
              <div className="imgs">
                <Link to="/">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                    alt="appstore"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                    alt="playstore"
                  />
                </Link>
              </div>
            </div>
            <div className="f3">
              <h4>Keep in Touch</h4>
              <div className="socials">
                <Link to="/">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZhY2Vib29rIj48cGF0aCBkPSJNMTggMmgtM2E1IDUgMCAwIDAtNSA1djNIN3Y0aDN2OGg0di04aDNsMS00aC00VjdhMSAxIDAgMCAxIDEtMWgzeiIvPjwvc3ZnPg=="
                    alt="fb"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluc3RhZ3JhbSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiByeD0iNSIgcnk9IjUiLz48cGF0aCBkPSJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3eiIvPjxsaW5lIHgxPSIxNy41IiB4Mj0iMTcuNTEiIHkxPSI2LjUiIHkyPSI2LjUiLz48L3N2Zz4="
                    alt="insta"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="twitter"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXR3aXR0ZXIiPjxwYXRoIGQ9Ik0yMiA0cy0uNyAyLjEtMiAzLjRjMS42IDEwLTkuNCAxNy4zLTE4IDExLjYgMi4yLjEgNC40LS42IDYtMkMzIDE1LjUuNSA5LjYgMyA1YzIuMiAyLjYgNS42IDQuMSA5IDQtLjktNC4yIDQtNi42IDctMy44IDEuMSAwIDMtMS4yIDMtMS4yeiIvPjwvc3ZnPg=="
                    alt="twitter"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="yt"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXlvdXR1YmUiPjxwYXRoIGQ9Ik0yLjUgMTdhMjQuMTIgMjQuMTIgMCAwIDEgMC0xMCAyIDIgMCAwIDEgMS40LTEuNCA0OS41NiA0OS41NiAwIDAgMSAxNi4yIDBBMiAyIDAgMCAxIDIxLjUgN2EyNC4xMiAyNC4xMiAwIDAgMSAwIDEwIDIgMiAwIDAgMS0xLjQgMS40IDQ5LjU1IDQ5LjU1IDAgMCAxLTE2LjIgMEEyIDIgMCAwIDEgMi41IDE3Ii8+PHBhdGggZD0ibTEwIDE1IDUtMy01LTN6Ii8+PC9zdmc+"
                    alt="yt"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="f4">
            <div className="one">
              <img
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                alt="img"
              />
              <p>
                <b>100% ORIGINAL</b> gurantee for all products at myntra.com
              </p>
            </div>
            <div className="two">
              <img
                src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                alt="img"
              />
              <p>
                <b>Return within 14days</b> of receiving your order
              </p>
            </div>
          </div>
        </div>
        <div className="fbottom">
          <div className="one">
            <p>In case of any concern,</p>
            <Link className="Link" to="">
              Contact us
            </Link>
          </div>
          <div className="two">
            <p>© 2023 www.myntra.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
