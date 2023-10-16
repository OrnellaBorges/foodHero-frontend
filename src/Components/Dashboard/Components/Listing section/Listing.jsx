import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Listing.scss";

import SeeAllBtn from "../../../Buttons/SeeAll/SeeAllBtn";

import Card from "../Card/Card";

//import pasta from "../../../../assets/pasta.jpg";
import user from "../../../../assets/users/avatar3.jpg";

const Listing = () => {
    return (
        <div className="listingSection">
            <div className="linstingHeading flex">
                <h1 className="listingTitle">Listing Section</h1>
                <SeeAllBtn />
            </div>

            <Card />

            {/* <div className="secContainer flex">
                <div className="singleCard">
                    <AiFillHeart className="singleCard-icon" />
                    <AiOutlineHeart className="icon" />
                    <img src={pasta} alt="image" />
                    <h3>PASTA</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <AiOutlineHeart className="icon" />
                    <img src={pasta} alt="image name" />
                    <h3>PASTA</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <AiOutlineHeart className="icon" />
                    <img src={pasta} alt="image name" />
                    <h3>PASTA</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <AiOutlineHeart className="icon" />
                    <img src={pasta} alt="image name" />
                    <h3>PASTA</h3>
                </div>
            </div> */}
            {/* <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">See All</button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                            <img src={user} alt="user image" />
                            <img src={user} alt="user image" />
                            <img src={user} alt="user image" />
                            <img src={user} alt="user image" />
                        </div>
                        <div className="cardText">
                            <span>
                                Lorem ipsum dolor sit amet consectetur. <br />
                                <small>
                                    21 Sellers
                                    <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className="btn flex">See All</button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                            <img src={user} alt="user image" />
                            <img src={user} alt="user image" />
                            <img src={user} alt="user image" />
                            <img src={user} alt="user image" />
                        </div>
                        <div className="cardText">
                            <span>
                                Lorem ipsum dolor sit amet consectetur. <br />
                                <small>
                                    21 Sellers
                                    <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Listing;
