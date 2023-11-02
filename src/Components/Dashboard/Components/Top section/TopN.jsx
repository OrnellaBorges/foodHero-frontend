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
    return (
        <div className="topSection">
            <div className="headerSection">
                <h1 className="title"> Admin DashBoard</h1>
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
                        </div>
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
