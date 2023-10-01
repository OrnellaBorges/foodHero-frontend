import React from "react";

//import style
import "./top.scss";
//import "../../../../index.scss";

//import images
//import img from "../../../../assets/loginImage.jpg";
import user from "../../../../assets/avatar3.jpg";
import video from "../../../../assets/movie.mp4";

//import icons

import { BiSearch } from "react-icons/bi";
import { TbMessageCircle2Filled } from "react-icons/tb";
//import { IoNotificationsCircleSharp } from "react-icons/io";

const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection">
                <div className="title">
                    <h1>Welcome to FoodHero</h1>
                    <p>Hello Ornella</p>
                </div>
                <div className="searchBar flex">
                    <input type="text" placeholder="Search" />
                    <BiSearch className="icon" />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle2Filled className="icon" />
                    <TbMessageCircle2Filled className="icon" />

                    <div className="adminImage flex">
                        <img src={user} alt="adminImage" />
                    </div>
                </div>
            </div>
            <div className="cardSection flex">
                <div className="rightCard">
                    <h1>dfnjknkg</h1>
                    <p>fhrekajkfnre</p>
                    <div className="buttons flex">
                        <button className="btn">Explore</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>
                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
