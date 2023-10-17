import React from "react";
import { Link } from "react-router-dom";

//IMPORT ICONS FROM REACT ICONS
import { GiHamburger } from "react-icons/gi";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
import { BsTrophy, BsCreditCard2Back } from "react-icons/bs";
//import { AiOutlinePieChart } from "react-icons/ai";
//import { BiTrendingUp } from "react-icons/bi";
//import { IoCalendarNumberOutline } from "react-icons/io";

//import style
import "./sidebar.scss";
import "../../../../index.scss";

//import assets and images
import logo from "../../../../assets/logo2.png";

const SideMenu = () => {
    return (
        <>
            <div className="">
                <GiHamburger className="" />
            </div>
            <h2 className="">FOODIE</h2>

            <div className="">
                <h3 className="">QUICK MENU</h3>
                <ul className="">
                    <li className="">
                        <Link href="#" className="">
                            <MdDeliveryDining className="" />
                            <p className="">My Orders</p>
                        </Link>
                    </li>
                    <li className="">
                        <a href="#" className="">
                            <MdOutlineExplore className="" />
                            <p className="">Explore</p>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="">
                            <BsTrophy className="" />
                            <p className="">My ads</p>
                        </a>
                    </li>
                    <li className="">
                        <a href="/" className="">
                            Home Page
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SideMenu;
