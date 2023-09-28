import React from "react";

//IMPORT ICONS FROM REACT ICONS
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
//import { IoCalendarNumberOutline } from "react-icons/io";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

//import style
import "./sidebar.scss";
import "../../../../index.scss";

//import assets and images
import logo from "../../../../assets/logo.png";

const Sidebar = () => {
    return (
        <div className="sidebar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="logo" />
            </div>
            {/* <h2 className="">FOODHERO</h2> */}

            <div className="menuDiv">
                <h3 className="divTitle">QUICK MENU</h3>
                <ul className="menuList grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">Dash board</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdDeliveryDining className="icon" />
                            <span className="smallText">My Orders</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdOutlineExplore className="icon" />
                            <span className="smallText">Explore</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BsTrophy className="icon" />
                            <span className="smallText">Products</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">SETTINGS</h3>
                <ul className="menuList grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <AiOutlinePieChart className="icon" />
                            <span className="smallText">Charts</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BiTrendingUp className="icon" />
                            <span className="smallText">Trends</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            {/* <IoCalendarNumberOutline className="icon" /> */}
                            <span className="smallText">Contact</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BsCreditCard2Back className="icon" />
                            <span className="smallText">Billing</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebarCard">
                <BsQuestionCircle className="icon" />
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle1"></div>

                    <h3>Help Center</h3>
                    <p>Having trouble in Planti, contact us.</p>
                    <button className="btn">Go to help center</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
