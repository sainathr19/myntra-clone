import React from "react";
import "./Bag.scss";
import { bag } from "../../redux/Bag/BagSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CheckoutHeader from "../CheckoutComponents/CheckoutHeader/CheckoutHeader";
import CheckoutFooter from "../CheckoutComponents/CheckoutFooter/CheckoutFooter";
import EmptyBag from "../CheckoutComponents/EmptyBag/EmptyBag";
import Bagdisplay from "../CheckoutComponents/BagDisplay/Bagdisplay";
export default function Bag() {
  const bagitems = useSelector(bag);
  return (
    <>
      <CheckoutHeader />
      {bagitems.count === 0 ? <EmptyBag /> : <Bagdisplay />}
      <CheckoutFooter />
    </>
  );
}
