import React, { useState } from "react";
import { selectCount } from "../../redux/counter/counter";
import { useSelector } from "react-redux";

export default function RNavbar() {
  const [value, setvalue] = useState(0);
  const count = useSelector(selectCount);
  return (
    <div>
      <h1>NavCounter : {count} </h1>
    </div>
  );
}
