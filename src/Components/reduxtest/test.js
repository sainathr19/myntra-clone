import React from "react";
import RNavbar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../../redux/counter/counter";
// import { selectCount } from "../../redux/counter/counter";
import { bag } from "../../redux/Bag/BagSlice";
import { addtobag } from "../../redux/Bag/BagSlice";
export default function Test() {
  const dispatch = useDispatch();
  const bagitems = useSelector(bag);
  const arr = bagitems.items;

  return (
    <div>
      {/* <RNavbar /> */}
      <h1>bag items : {bagitems.count}</h1>
      <button onClick={() => dispatch(addtobag())}>increment</button>
      {/* <button onClick={() => dispatch(decrement())}>decrement</button> */}
      {arr.map((i) => {
        return <h1>{i.id}</h1>;
      })}
    </div>
  );
}
