import axios from "axios";
import React, { useEffect, useState } from "react";
import Productpage from "../Productspage/Productpage";

export default function Menpage() {
  const [response, setresponse] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/get-products", {
        params: { cat: "Men" },
      })
      .then((res) => {
        setresponse(res.data);
      });
    console.log(response);
  }, []);
  return (
    <>
      <h4
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "300",
          // fontFamily: "Assistant, sans-serif",
        }}
      >
        Men
      </h4>
      <Productpage arr={response} />
    </>
  );
}

// axios.get("http://127.0.0.1:5000/get-products", {params: {cat: "Kids",},})
