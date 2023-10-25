import React from "react";
import "./Footer.css"; // Assurez-vous d'ajouter un fichier CSS pour le style
import { Link } from "react-router-dom";

import Banner from "./Banner";

function Footer() {
    return (
        <footer className="footer">
            <Banner />
            <div className="containerFooterMenu">
                <div className="container-menu">
                    <h2>À propos</h2>
                    <ul className="footerList">
                        <Link to="/info">
                            <li className="footer-item"> Qui sommes-nous ?</li>
                        </Link>
                        <Link to="/info">
                            <li className="footer-item">Contacter-nous</li>
                        </Link>
                    </ul>
                </div>
                <div className="">
                    <h2>Légal</h2>
                    <ul className="footerList">
                        <li className="footer-item">
                            Conditions d'utilisation
                        </li>
                        <li className="footer-item">
                            Politique de confidentialité
                        </li>
                    </ul>
                </div>
            </div>
            <Banner />
        </footer>
    );
}

export default Footer;
