import React from "react";

import "./body.scss";

import Top from ".././Top section/Top";

/* import FilterIcon from "../../Filter/FilterIcon"; */

import Listing from "../Listing section/Listing";

import Activity from "../ActivitySection/Activity";

const Body = () => {
    return (
        <div className="mainContent">
            <Top />
            {/* <FilterIcon /> */}
            <div className="dashbordBody flex">
                <Listing />

                <Activity />
            </div>
        </div>
    );
};

export default Body;
