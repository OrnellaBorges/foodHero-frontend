import React from "react";
import "./button.css";

const MoreDetailButton = () => {
  return (
    <button className="btn" type="button" onClick={onClickDetailAd}>
      {text}
    </button>
  );
};

export default MoreDetailButton;
