import "./Singleproduct.scss";
import { Link, useParams } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Singleproduct() {
  const [Pdata, setPdata] = useState({});
  const [Pimages, setPimages] = useState([]);
  const { productid } = useParams();
  const params = {
    productid: productid,
  };
  useEffect(() => {
    axios.put("http://localhost:5000/getproductdata", params).then((res) => {
      setPdata(res.data);
    });
    axios.put("http://localhost:5000/getproductimages", params).then((res) => {
      setPimages(res.data.images);
    });
    console.log(Pdata);
    console.log(Pimages);
  }, []);
  return (
    <>
      <div className="singlepage">
        <div className="path">
          <p>Path</p>
        </div>
        <div className="productbody">
          <div className="images">
            {Pimages.map((i) => {
              return (
                <div className="image">
                  <img src={i} alt="img" />
                </div>
              );
            })}
          </div>
          <div className="info">
            <div className="infowrap">
              <h3 className="brand">{Pdata.brand}</h3>
              <h4 className="name">{Pdata.productname}</h4>
              <div className="ratings">Ratings</div>
              <hr />
              <div className="price">
                <span className="mainprice">
                  <strong>₹{Pdata.price}</strong>
                </span>
                <div className="mrp">
                  <span className="strikedprice">MRP </span>
                  <span className="strikedprice1">{Pdata.strikedprice}</span>
                </div>
                <span className="pricediscount">({Pdata.discount} OFF)</span>
              </div>
              <h4 className="vatinfo">Inclusive of all taxes</h4>
              <div className="size">
                <div className="sizetop">
                  <h3>Select Size</h3>
                  <Link to="/"> Size Chart</Link>
                </div>
                <div className="sizebottom">
                  <button type="button">XS</button>
                  <button type="button">S</button>
                  <button type="button">M</button>
                  <button type="button">L</button>
                  <button type="button">XL</button>
                </div>
              </div>
              <div className="bagoptions">
                <button className="Linkaddtobag">
                  <div className="imagebg">
                    <ShoppingBagOutlinedIcon />
                  </div>
                  <p>Add to Bag</p>
                </button>
                <button className="Linkwishlist">
                  <FavoriteBorderOutlinedIcon />
                  <p>Wishlist</p>
                </button>
              </div>
              <div className="deliverycheck">
                <div className="deltop">
                  <h3>DELIVERY OPTONS</h3>
                  <LocalShippingOutlinedIcon />
                </div>
                <div className="delbottom">
                  <input placeholder="Enter Pincode" type="text" />
                  <Link className="button">Check</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
