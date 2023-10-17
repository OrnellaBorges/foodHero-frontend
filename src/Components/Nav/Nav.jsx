import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// import icons
import { BsFillHouseDoorFill, BsFillGrid3X3GapFill } from "react-icons/bs";

import {
    AiFillCloseCircle,
    AiOutlineUser,
    AiOutlinePlusCircle,
} from "react-icons/ai";

// import assets
import logo from "../../assets/logo2.png";

import Button from "../Buttons/Button";

import "./nav.css";

//navbar event

const Nav = () => {
    //const [isActiv, setIsActiv] = useState("menuList");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(true);

    return (
        <nav className="navMenuDiv">
            <ul
                className={`menuList leftMenu flex ${
                    isMenuOpen ? "" : "closedNav"
                }`}
            >
                <li
                    className="closeNav navItem"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <AiFillCloseCircle className="icon" />
                </li>

                <li className="navItem">
                    <Link to="/" className="navLink">
                        Home
                    </Link>
                </li>

                <li className="navItem">
                    <Link to="/create" className="navLink">
                        <Button text="Creer une annonce" />
                    </Link>
                </li>
            </ul>

            <ul className="menuList centerMenu flex">
                <li className="navItem">
                    <Link to="/" className="navLink">
                        <div className="logo-container">
                            <img src={logo} className="logoNav" />
                            <p className="brand">.FOODHERO</p>
                        </div>
                    </Link>
                </li>

                <li
                    className="navIcon navItem"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <BsFillGrid3X3GapFill className="icon" />
                </li>
            </ul>

            {/* cette partie devra etre un ternaire si l'user est connecté ou pas voir beer4you header */}
            {isLogged ? (
                <ul
                    className={`menuList rightMenu flex ${
                        isMenuOpen ? "" : "closedNav"
                    }`}
                >
                    <li className="navItem">
                        <Link to="/dashboard" className="navLink">
                            Dashboard
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/account" className="navLink">
                            <AiOutlineUser />
                            Mon compte
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/orders" className="navLink">
                            Orders
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul
                    className={`menuList rightMenu flex ${
                        isMenuOpen ? "" : "closedNav"
                    }`}
                >
                    <li className="navItem">
                        <Link to="/login" className="navLink">
                            <Button text="Se connecter" />
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;
