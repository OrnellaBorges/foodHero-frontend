import React from "react";
import "./body.scss";
import Top from ".././Top section/Top";
import Listing from "../ListingSection/Listing";
const Body = (props) => {
  return (
    <div className="mainContent">
      <Top />
      <div className="dashbordBody flex">
        <Listing userId={props.userId} />
      </div>
    </div>
  );
};

export default Body;
