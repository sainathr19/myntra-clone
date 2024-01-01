import "./Productpage.scss";
import Product from "../Product/Product";
export default function Productpage({ arr }) {
  return (
    <>
      <div className="products">
        <div className="items">
          {arr.map((i) => {
            return <Product {...i} />;
          })}
        </div>
      </div>
    </>
  );
}
