import axios from "axios";
import React, { useEffect, useState } from "react";
import Productpage from "../Productspage/Productpage";

export default function Menpage() {
  const [response, setresponse] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/men").then((res) => {
      console.log(res.data);
      setresponse(res.data);
    });
  }, []);
  return <Productpage arr={response} />;
}
