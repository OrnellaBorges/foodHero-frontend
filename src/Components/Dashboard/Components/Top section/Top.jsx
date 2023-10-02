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
import { BsArrowRightShort } from "react-icons/bs";

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
                <div className="rightCard flex">
                    <h1>Au four et au moulin.</h1>
                    <p>Faites bouillir la marmite!.</p>
                    <div className="buttons flex">
                        <button className="btn">Explore</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>
                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>
                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>My Stat</h1>
                            <div className="flex">
                                <span>
                                    Today <br /> <small>4 Orders</small>
                                </span>
                                <span>
                                    This Month <br /> <small>127 Orders</small>
                                </span>
                                <span className="flex link">
                                    Go to my orders
                                    <BsArrowRightShort className="icon" />
                                </span>
                            </div>
                        </div>

                        <div className="imgDiv">
                            <img src={user} alt="Image name" />
                        </div>

                        {/* <div className="sidebarCard">
                            <BsQuestionCircle className="icon" />
                            <div className="cardContent">
                                <div className="circle1"></div>
                                <div className="circle1"></div>

                                <h3>Help Center</h3>
                                <p>Having trouble in Planti, contact us.</p>
                                <button className="btn">
                                    Go to help center
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
