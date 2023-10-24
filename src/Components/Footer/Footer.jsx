import React from "react";
import "./Footer.css"; // Assurez-vous d'ajouter un fichier CSS pour le style
import { Link } from "react-router-dom";

import Baner from "./Banner";

/* import footerIcon1 from "../../assets/icons/footerIcon1.png";
import footerIcon2 from "../../assets/icons/citrouille.png";
import footerIcon3 from "../../assets/icons/citron.png";
import footerIcon4 from "../../assets/icons/cake.png";
import footerIcon5 from "../../assets/icons/lasagne.png";
import footerIcon7 from "../../assets/icons/piment.png";
import footerIcon8 from "../../assets/icons/ramen.png";
import footerIcon9 from "../../assets/icons/ravioli.png";
import footerIcon10 from "../../assets/icons/pizza.png"; */

function Footer() {
    return (
        <footer className="footer">
            <Baner />
            <div className="containerFooterMenu">
                <div className="container-menu">
                    <h2>À propos</h2>
                    <ul className="footerList">
                        <li>Qui sommes-nous ?</li>
                        {/* <li>Contactez-nous</li>
                        <li>Blog</li> */}
                    </ul>
                </div>
                <div className="">
                    <h2>Légal</h2>
                    <ul className="footerList">
                        <li>Conditions d'utilisation</li>
                        <li>Politique de confidentialité</li>
                    </ul>
                </div>
            </div>
            <Baner />
        </footer>
    );
}

export default Footer;
/* 
<ul className="containerList">
                <li className="iconItem">
                    <img src={footerIcon1} alt="icon" />
                </li>
                <li className="iconItem">
                    <img src={footerIcon2} alt="icon" />
                </li>
                <li className="iconItem">
                    <img src={footerIcon3} alt="icon" />
                </li>
                <li className="iconItem">
                    <img src={footerIcon4} alt="icon" />
                </li>
                <li className="iconItem">
                    <img src={footerIcon5} alt="icon" />
                </li>

                <li className="iconItem">
                    <img src={footerIcon7} alt="icon" />
                </li>
                <li className="iconItem">
                    <img src={footerIcon8} alt="icon" />
                </li>
                <li className="iconItem">
                    <img src={footerIcon9} alt="icon" />
                </li>
                <li className="iconItem">
                    <img src={footerIcon10} alt="icon" />
                </li>
            </ul>
 */
/* <div className="">
                    <h2>Suivez-nous</h2>
                    <ul className="footerList">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div> */
