import React from "react";

import { Link } from "react-router-dom";

//IMPORT ICONS FROM REACT ICONS
import { GiHamburger } from "react-icons/gi";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
import { BsTrophy, BsCreditCard2Back } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp, BiSolidHome } from "react-icons/bi";
//import { IoCalendarNumberOutline } from "react-icons/io";

//import style
import "./sidebar.scss";
import "../../../../index.scss";

//import assets and images
//import logo from "../../../../assets/logo2.png";
import user from "../../../../assets/albert4.png";

const Sidebar = () => {
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
            <img src={user} alt="votre image" />
          </div>
          <p>Welcom,</p>
          <p className="userName">Albert Einstein</p>
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
              <Link to="/Orders" className="sidebarMenu-link flex">
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
              <Link href="/userAds" className="sidebarMenu-link flex">
                <BsTrophy className="iconMenu" />
                <span className="smallText">My ads</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
