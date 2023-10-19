import React from "react";
//import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Listing.scss";

import SeeAllBtn from "../../../Buttons/SeeAll/SeeAllBtn";
import RegisteredAds from "./RegisteredAds/RegisteredAds";
import UserAds from "./UserAds/UserAds";

//import pasta from "../../../../assets/pasta.jpg";
//import user from "../../../../assets/users/avatar3.jpg";

const Listing = () => {
    return (
        <div className="listingSection">
            <div className="linstingHeading flex">
                <h1 className="listingTitle">Listing Section</h1>
                <SeeAllBtn />
            </div>
            <UserAds />
            <RegisteredAds />
        </div>
    );
};

export default Listing;
