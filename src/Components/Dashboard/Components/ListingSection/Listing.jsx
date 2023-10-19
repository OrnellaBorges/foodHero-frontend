import React from "react";
//import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Listing.scss";

import SeeAllBtn from "../../../Buttons/SeeAll/SeeAllBtn";
import RegisteredAds from "./RegisteredAds/RegisteredAds";
import UserAds from "./UserAds/UserAds";
//import AdsOfUser from "./UserAds/AdsOfUser";

//import pasta from "../../../../assets/pasta.jpg";
//import user from "../../../../assets/users/avatar3.jpg";

const Listing = () => {
    return (
        <section className="listingSection">
            <header className="linstingHeading flex">
                <h1 className="listingTitle">Listing Section</h1>
                <SeeAllBtn />
            </header>
            <div className="listingContent">
                <UserAds />
                <RegisteredAds />
            </div>
        </section>
    );
};

export default Listing;
