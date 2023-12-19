import "./Singleproduct.scss";
import { Link, useParams } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { addtobag } from "../../redux/Bag/BagSlice";
import { useDispatch } from "react-redux";

export default function Singleproduct() {
  const [isLoading, SetisLoading] = useState(true);
  const [Pdata, setPdata] = useState({});
  const [Pimages, setPimages] = useState([]);
  const [Similar, setSimilar] = useState([]);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [curSize, setcurSize] = useState("XS");
  const { productid } = useParams();
  const dispatch = useDispatch();
  const params = {
    productid: productid,
  };
  const addtobagb = () => {
    const item = {
      id: Pdata.productid,
      size: curSize,
      quantity: "1",
    };
    dispatch(addtobag({ item }));
  };
  useEffect(() => {
    axios.put("http://localhost:5000/getproductdata", params).then((res) => {
      setPdata(res.data);
      if (Pdata != []) {
        axios
          .get(process.env.REACT_APP_API_URL, {
            params: { cat: Pdata.category },
          })
          .then((res) => {
            setSimilar(res.data.slice(0, 10));
          });
      }
    });
    axios.put("http://localhost:5000/getproductimages", params).then((res) => {
      setPimages(res.data.images);
    });
    SetisLoading(false);
  }, []);
  return (
    <>
      {/* {isLoading && <p>Loading...</p>} */}
      <div className="singlepage">
        <div className="productbody">
          <div className="images">
            {Pimages.map((i, index) => {
              return (
                <div key={index} className="image">
                  <img src={i} alt="img" />
                </div>
              );
            })}
          </div>
          <div className="info">
            <div className="infowrap">
              <h3 className="brand">{Pdata.brand}</h3>
              <h4 className="name">{Pdata.productname}</h4>
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
                  {sizes.map((i, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => setcurSize(i)}
                        className={
                          curSize === i ? "sizebutton active" : "sizebutton"
                        }
                      >
                        {i}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="bagoptions">
                <button onClick={addtobagb} className="Linkaddtobag">
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
      <div className="similarproducts">
        <span className="sim-head">SIMILAR PRODUCTS</span>
        <hr />
        <div className="items">
          {Similar.map((i) => {
            return <Product {...i} />;
          })}
        </div>
      </div>
    </>
  );
}
