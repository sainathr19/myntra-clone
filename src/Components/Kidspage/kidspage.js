import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Productpage from "../Productspage/Productpage";

export default function Kidspage() {
  const [response, setresponse] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/kids").then((res) => {
      console.log(res.data);
      setresponse(res.data);
    });
  }, []);
  return <Productpage arr={response} />;
}
