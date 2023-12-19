import React from "react";
import RNavbar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../../redux/counter/counter";
// import { selectCount } from "../../redux/counter/counter";
import { bag } from "../../redux/Bag/BagSlice";
import { addtobag } from "../../redux/Bag/BagSlice";
import axios from "axios";
export default function Test() {
  const dispatch = useDispatch();
  const bagitems = useSelector(bag);
  const arr = bagitems.items;
  const axiosb = async () => {
    const res = await axios.get("http://127.0.0.1:5000/get-products", {
      params: {
        cat: "Kids",
      },
    });
    console.log(res.data);
  };

  return (
    <>
      <div>
        {/* <RNavbar /> */}
        <h1>bag items : {bagitems.count}</h1>
        <button onClick={() => dispatch(addtobag())}>increment</button>
        {/* <button onClick={() => dispatch(decrement())}>decrement</button> */}
        {arr.map((i) => {
          return <h1>{i.id}</h1>;
        })}
      </div>
      <button onClick={axiosb}>Axioss</button>
    </>
  );
}
