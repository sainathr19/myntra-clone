import React from "react";
import Productpage from "../Productspage/Productpage";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Womenpage() {
  const [response, setresponse] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/women").then((res) => {
      console.log(res.data);
      setresponse(res.data);
    });
  }, []);
  return <Productpage arr={response} />;
}
