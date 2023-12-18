import "./Productpage.scss";
import Product from "../Product/Product";
export default function Productpage({ arr }) {
  return (
    <>
      <div className="products">
        <div className="upper">
          <h4>
            Home / Clothing{" "}
            {window.location.pathname.toString().charAt(0) +
              " " +
              window.location.pathname.toString().charAt(1).toUpperCase() +
              window.location.pathname.toString().toLowerCase().slice(2)}
          </h4>
        </div>
        <div className="wrapper">
          <div className="filter">
            <p>Filter</p>
          </div>
          <div className="innerwrap">
            <div className="sort">
              <div className="select">
                <select name="sortby" id="sortby">
                  <option value="1" selected>
                    Recommended
                  </option>
                  <option className="option" value="2">
                    What's new
                  </option>
                  <option className="option" value="3">
                    Populariy
                  </option>
                  <option className="option" value="4">
                    Price: High to Low
                  </option>
                  <option className="option" value="5">
                    Price: Low to High
                  </option>
                  <option className="option" value="5">
                    Price: Low to High
                  </option>
                  <option className="option" value="5">
                    Customer Rating
                  </option>
                </select>
              </div>
            </div>
            <div className="items">
              {arr.map((i) => {
                return <Product {...i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
