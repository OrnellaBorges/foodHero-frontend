import React from "react";
import "./Footer.css"; // Assurez-vous d'ajouter un fichier CSS pour le style
import { Link } from "react-router-dom";

import Banner from "./Banner";
import BannerImage from "./BannerImage";

function Footer() {
    return (
        <footer className="footer">
            <Banner />
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
            <Banner />
            <BannerImage />
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
