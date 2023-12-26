import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Productpage from "../Productspage/Productpage";

export default function Kidspage() {
  const [response, setresponse] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL, {
        params: {
          cat: "Kids",
        },
      })
      .then((res) => {
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
        Kids
      </h4>
      <Productpage arr={response} />
    </>
  );
}
