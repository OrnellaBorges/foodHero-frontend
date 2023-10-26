import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import { getOneUser } from "../../api/ApiAds";

// import icons
import { BsFillGrid3X3GapFill } from "react-icons/bs";

import { AiFillCloseCircle } from "react-icons/ai";

// import assets
import logo from "../../../assets/logo2.png";

import Button from "../../Buttons/Button";

import "./nav.css";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../../slices/userSlice";

const Nav = () => {
    const user = useSelector(selectUser);
    const userId = user.infos.id;
    const { firstName } = user.infos;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        Bienvenue sur FoodHero
                    </Link>
                </li>
                {user.isLogged && (
                    <li className="navItem">
                        <Link to="/create" className="navLink create">
                            Creer une annonce
                        </Link>
                    </li>
                )}
            </ul>

            <ul className="menuList centerMenu flex">
                <li className="navItem">
                    <Link to="/" className="logo-homeLink">
                        <div className="logo-container">
                            <img src={logo} className="logoNav" />
                        </div>
                        <p className="brand">.FOODHERO</p>
                    </Link>
                </li>

                <li
                    className="navIcon navItem"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <BsFillGrid3X3GapFill className="icon" />
                </li>
            </ul>

            {user.isLogged ? (
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
                        <Link to={`/userProfile/${userId}`} className="navLink">
                            Mon compte
                        </Link>
                    </li>
                    <li className="navItem">
                        <p className="">Bonjour {firstName}</p>
                    </li>
                </ul>
            ) : (
                <ul
                    className={`menuList rightMenu flex ${
                        isMenuOpen ? "" : "closedNav"
                    }`}
                >
                    <li className="navItem">
                        <Link to="/register" className="navLink">
                            Créér un compte
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/login" className="navLink">
                            Se connecter
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;
