import "./Singleproduct.scss";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export default function Singleproduct() {
  return (
    <>
      <div className="singlepage">
        <div className="path">
          <p>Path</p>
        </div>
        <div className="productbody">
          <div className="images">
            <img
              src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/210/views/1/appearances/2,backgroundColor=f2f2f2,modelId=1543,width=800,height=800.png"
              alt="img"
            />
            <img
              src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/210/views/1/appearances/2,backgroundColor=f2f2f2,modelId=1543,width=800,height=800.png"
              alt="img"
            />
            <img
              src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/210/views/1/appearances/2,backgroundColor=f2f2f2,modelId=1543,width=800,height=800.png"
              alt="img"
            />
            <img
              src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/210/views/1/appearances/2,backgroundColor=f2f2f2,modelId=1543,width=800,height=800.png"
              alt="img"
            />
            <img
              src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/210/views/1/appearances/2,backgroundColor=f2f2f2,modelId=1543,width=800,height=800.png"
              alt="img"
            />
          </div>
          <div className="info">
            <div className="infowrap">
              <h3 className="brand">Roadster</h3>
              <h4 className="name">
                Men White Mustard Yellow Colourblocked Round Neck Pure Cotton
                T-shirt
              </h4>
              <div className="ratings">Ratings</div>
              <hr />
              <div className="price">
                <span className="mainprice">
                  <strong>₹999</strong>
                </span>
                <div className="mrp">
                  <span className="strikedprice">MRP </span>
                  <span className="strikedprice1">₹1999</span>
                </div>
                <span className="pricediscount">(90% OFF)</span>
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
                <Link className="Linkaddtobag">
                  <div className="imagebg">
                    <ShoppingBagOutlinedIcon />
                  </div>
                  <p>Add to Bag</p>
                </Link>
                <Link className="Linkwishlist">
                  <FavoriteBorderOutlinedIcon />
                  <p>Wishlist</p>
                </Link>
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
