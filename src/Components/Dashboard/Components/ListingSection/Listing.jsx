import React from "react";
//import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Listing.scss";

import SeeAllBtn from "../../../Buttons/SeeAll/SeeAllBtn";
//import RegisteredAds from "./RegisteredAds/RegisteredAds";
import UserAds from "./UserAds/UserAds";
//import AdsOfUser from "./UserAds/AdsOfUser";
//import pasta from "../../../../assets/pasta.jpg";
//import user from "../../../../assets/users/avatar3.jpg";

const Listing = (props) => {
  const userId = props.userId;
  return (
    <section className="listingSection">
      <div className="listingContent">
        <UserAds userId={userId} />
        {/* <RegisteredAds /> */}
      </div>
    </section>
  );
};

export default Listing;
