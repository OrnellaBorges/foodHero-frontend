import React from "react";

import { Link } from "react-router-dom";

//IMPORT ICONS FROM REACT ICONS
import { GiHamburger } from "react-icons/gi";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
import { BsTrophy, BsCreditCard2Back } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { BiTrendingUp, BiSolidHome } from "react-icons/bi";
//import { IoCalendarNumberOutline } from "react-icons/io";

//import style
import "./sidebar.scss";
import "../../../../index.scss";

//import assets and images
//import logo from "../../../../assets/logo2.png";
import adminImage from "../../../../assets/users/albert4.png";

const Sidebar = () => {
    // useEffect qui permet de recup si l'user est bien connecté et recup ses datas

    //USER DATA
    const userData = [
        {
            firstName: "Albert",
            lastName: "Einstein",
            userImage: { adminImage },
        },
    ];

    return (
        <>
            <div className="sidebar flex">
                <div className="sidebarHeader flex sidebarLogo">
                    <div className="iconContainer">
                        <GiHamburger className="icon sidebarIcon" />
                    </div>
                    <h2 className="brand">FOODIE</h2>
                </div>

                <div className="sidebarUser">
                    <div className="containerImg">
                        <img src={adminImage} alt="Admin image" />
                    </div>
                    <p>Welcom,</p>
                    <p className="userName">
                        `${userData.firstName}${userData.lastName}`
                    </p>
                </div>

                <div className="sidebarMenu">
                    <ul className=" list sideBarList grid">
                        <li className="listItem flex">
                            <Link to="/" className="sidebarMenu-link flex">
                                <BiSolidHome className="iconMenu" />
                                <span className="smallText">Home</span>
                            </Link>
                        </li>
                        <li className="listItem">
                            <Link
                                to="/Orders"
                                className="sidebarMenu-link flex"
                            >
                                <MdDeliveryDining className="iconMenu" />
                                <span className="smallText">My Orders</span>
                            </Link>
                        </li>
                        <li className="listItem">
                            <Link to="/" className="sidebarMenu-link flex">
                                <MdOutlineExplore className="iconMenu" />
                                <span className="smallText">Explore</span>
                            </Link>
                        </li>
                        <li className="listItem">
                            <Link
                                to="/userAds"
                                className="sidebarMenu-link flex"
                            >
                                <BsTrophy className="iconMenu" />
                                <span className="smallText">My ads</span>
                            </Link>
                        </li>
                        <li className="listItem">
                            <Link
                                to="/account"
                                className="sidebarMenu-link flex"
                            >
                                <LuUser2 className="iconMenu" />
                                <span className="smallText">My account</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
