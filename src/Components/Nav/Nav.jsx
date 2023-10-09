import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// import icons
import { BsFillHouseDoorFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiSolidCart } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

// import assets
import logo from "../../assets/logo2.png";

import "./nav.css";

//navbar event
//const [isActiv, setIsActiv] = useState("menuList");
const [isClosed, setIsClosed] = useState("navMenuDiv");

const showNav = () => {
  console.log("first");
  setIsActiv("menuList activNav");
};

const handleClickClose = () => {
  console.log("je suis fermé");
  setIsClosed("navMenuDiv activNav ");
};

const Nav = () => {
  return (
    <nav className={isClosed}>
      <ul className="menuList leftMenu flex">
        <li className="closeNav navItem" onClick={() => handleClickClose()}>
          <AiFillCloseCircle className="icon" />
        </li>

        <li className="navItem">
          <Link to="/" className="menuLink">
            {/* <BsFillHouseDoorFill className="icon" /> */}
            Home
          </Link>
        </li>

        <li className="navItem">
          <Link to="/register" className="menuLink">
            S'enregistrer
          </Link>
        </li>
        <li className="navItem">
          <Link to="/login" className="menuLink">
            Se connecter
          </Link>
        </li>
      </ul>

      <ul className="menuList centerMenu flex">
        <li className="navItem">
          <Link to="/" className="menuLink">
            <div className="logo-container">
              <img src={logo} className="logo" />
              <p className="brand">FOODHERO</p>
            </div>
          </Link>
        </li>

        <li className="menuIcon navItem" onClick={() => showNav()}>
          <BsFillGrid3X3GapFill className="icon" />
        </li>
      </ul>

      {/* cette partie devra etre un ternaire si l'user est connecté ou pas voir beer4you header */}

      <ul className="menuList rightMenu flex">
        <li className="navItem">
          <Link to="/dashboard" className="menuLink">
            Dashboard
          </Link>
        </li>
        <li className="navItem">
          <Link to="/account" className="menuLink">
            Mon compte
          </Link>
        </li>
        <li className="navItem">
          <Link to="/basket" className="menuLink">
            {/* <BiSolidCart className="icon" /> */}
            Panier
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
