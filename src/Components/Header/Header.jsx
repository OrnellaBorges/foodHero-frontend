import React from "react";

import { BsFillHouseDoorFill } from "react-icons/bs";
import { BiSolidCart } from "react-icons/bi";

import "./header.css";

//import assets

import hero from "../../assets/banner.jpg";

import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
/* import {useSelector} from "react-redux"
import {selectUser} from "../slices/userSlice"
import {selectBasket} from "../slices/basketSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHome, faPersonFalling, faGears, faBeerMugEmpty , faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
 */

const Header = () => {
    return (
        <div>
            <header className="header-nav">
                <nav className="navItems">
                    <div className="list1">
                        <Link to="/">
                            <BsFillHouseDoorFill className="icon" />
                            <p>HOME</p>
                        </Link>
                        <Link to="/dashboard"> Dashboard</Link>
                    </div>

                    <Link to="/">
                        <div className="logo-container">
                            <img src={logo} className="logo" />
                        </div>
                    </Link>
                    {/* cette partie devra etre un ternaire si l'user est connecté ou pas  */}
                    {/* <div className="list2"></div> */}
                    <div className="userNav list2">
                        <Link to="/register">S'enregistrer</Link>
                        <Link to="/login">Se connecter</Link>
                        <Link to="/basket">
                            <BiSolidCart className="icon" />
                            <p>Go to basket</p>
                        </Link>
                    </div>
                </nav>
                <section className="header-pict">
                    <div className="hero">
                        <img src={hero} alt="hero" />
                    </div>
                    <h1>
                        Vous entrez dans un monde merveilleux et savoureux.
                        Bienvenue dans la cuisine de vos voisins
                    </h1>
                </section>
            </header>
        </div>
    );
};

export default Header;
