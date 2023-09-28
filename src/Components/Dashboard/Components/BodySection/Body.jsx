import React from "react";

import "./body.scss";
import Top from "../Top section/Top";
import Listing from "../Listing section/Listing";

const Body = () => {
    return (
        <div className="mainContent">
            <Top />
            <div className="bottom flex">
                <Listing />
            </div>
        </div>
    );
};

export default Body;
