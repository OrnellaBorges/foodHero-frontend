import React from "react";

import "./body.scss";

import Top from ".././Top section/Top";

/* import FilterIcon from "../../Filter/FilterIcon"; */

import Listing from "../ListingSection/Listing";

import Activity from "../ActivitySection/Activity";

const Body = (props) => {
    return (
        <div className="mainContent">
            <Top />
            {/* <FilterIcon /> */}
            <div className="dashbordBody flex">
                <Listing userId={props.userId} />

                {/* <Activity /> */}
            </div>
        </div>
    );
};

export default Body;
