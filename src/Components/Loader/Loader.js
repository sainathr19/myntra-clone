import React from "react";
import "./Loader.scss";
import { ClipLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className="loader">
      <ClipLoader color="#ff3f6c" />
    </div>
  );
}
