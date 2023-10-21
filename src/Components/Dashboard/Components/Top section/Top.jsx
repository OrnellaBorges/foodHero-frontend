import React from "react";

import { Link } from "react-router-dom";

//import style
import "./top.scss";

//import images
//import user from "../../../../assets/users/avatar3.jpg";
import video from "../../../../assets/movie.mp4";

//import icons

import { BiSearch } from "react-icons/bi";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { LuConciergeBell } from "react-icons/lu";

//import { IoNotificationsCircleSharp } from "react-icons/io";

const Top = () => {
    const totalAmount = 12;
    return (
        <div className="topSection">
            <div className="headerSection">
                <div className="title">
                    <h1> Admin DashBoard</h1>
                </div>
                <div className="searchBar flex">
                    <input type="text" placeholder="Search" />
                    <BiSearch className="icon" />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle2Filled className="icon" />
                    <LuConciergeBell className="icon" />
                </div>
            </div>
            <div className="cardSection flex">
                <div className="rightCard flex">
                    <div className="cardContent">
                        <h1>Au four et au moulin.</h1>
                        <p>Faites bouillir la marmite!.</p>
                        <div className="topCardButtons flex">
                            <Link to="/">
                                <button className="fillBtn">Explore</button>
                            </Link>
                            {/* <Link to="/">
                            <button className="transparentBtn">
                                Top Sellers
                            </button>
                            </Link> */}
                        </div>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>
                {/* <div className="TopCard rightCard">
                    <div className="cardContent-right ">
                        <div className="statContainer">
                            <div className="statItems flex">
                                <div className="statInfo">
                                    <h2>My Stat</h2>
                                    <p
                                        className="
                                info"
                                    >
                                        Today <br /> <small>4 Orders</small>
                                    </p>
                                    <p className="info">
                                        This Month <br />{" "}
                                        <small>127 Orders</small>
                                    </p>
                                </div>

                                <div className="statInfo">
                                    <h2>My money</h2>

                                    <p className="ammount">
                                        {`${totalAmount} $`}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to="/orders">
                            <button className="flex orderButton">
                                Go to my orders
                            </button>
                        </Link>
                    </div>

                    {/* <div className="helpCard">
            <BsQuestionCircle className="icon" />
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>

              <h3>Help Center</h3>
              <p>Having trouble in Planti, contact us.</p>
              <button className="btn">Go to help center</button>
            </div>
          </div> 
                </div> */}
            </div>
        </div>
    );
};

export default Top;
