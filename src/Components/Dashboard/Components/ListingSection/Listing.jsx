import React from "react";
import "./Listing.scss";
import UserAds from "./UserAds/UserAds";

const Listing = (props) => {
  const userId = props.userId;
  return (
    <section className="listingSection">
      <div className="listingContent">
        <UserAds userId={userId} />
      </div>
    </section>
  );
};

export default Listing;
