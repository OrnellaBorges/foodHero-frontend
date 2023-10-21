import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOneUser } from "../../../../api/ApiUser";
import { useParams } from "react-router-dom";

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
    const { userId } = useParams();
    console.log("userId", userId);

    // useEffect qui permet de recup si l'user est bien connecté et recup ses datas
    useEffect(() => {
        //getOneUser()
    }, []);

    // Les données de l'utilisateur
    const user = {
        firstName: "Albert",
        lastName: "Einstein",
        email: "e=mc2@lycos.fr",
        address: "53 rue de la Relativité ",
        phone: "+1 555-123-4567",
        profileImage: { adminImage },
    };

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
                        {user.firstName} {user.lastName}
                    </p>
                </div>

                <div className="sidebarMenu">
                    <ul className=" list sideBarList flex">
                        <li className="listItem flex">
                            <Link to="/" className="sidebarMenu-link flex">
                                <BiSolidHome className="iconMenu" />
                                <p className="smallText">Home</p>
                            </Link>
                        </li>
                        <li className="listItem">
                            <Link
                                to="/Orders"
                                className="sidebarMenu-link flex"
                            >
                                <MdDeliveryDining className="iconMenu" />
                                <p className="smallText">My Orders</p>
                            </Link>
                        </li>
                        <li className="listItem">
                            <Link to="/" className="sidebarMenu-link flex">
                                <MdOutlineExplore className="iconMenu" />
                                <p className="smallText">Exploree</p>
                            </Link>
                        </li>
                        <li className="listItem">
                            <Link
                                to="/userAds"
                                className="sidebarMenu-link flex"
                            >
                                <BsTrophy className="iconMenu" />
                                <p className="smallText">My ads</p>
                            </Link>
                        </li>
                        <li className="listItem">
                            <Link
                                to="/userProfile"
                                className="sidebarMenu-link flex"
                            >
                                <LuUser2 className="iconMenu" />
                                <p className="smallText">My account</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
