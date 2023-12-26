import React from "react";
import Productpage from "../Productspage/Productpage";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Womenpage() {
  const [response, setresponse] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL, {
        params: {
          cat: "Women",
        },
      })
      .then((res) => {
        console.log(res.data);
        setresponse(res.data);
      });
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
        Women
      </h4>
      <Productpage arr={response} />
    </>
  );
}
