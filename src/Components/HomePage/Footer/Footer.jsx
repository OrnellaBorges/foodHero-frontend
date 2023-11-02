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
            <Link to="/infos" className="footer-item">
              Qui sommes-nous ?
            </Link>
            <Link to="/infos" className="footer-item">
              Contacter-nous
            </Link>
          </ul>
        </div>
      </div>
      <Banner />
    </footer>
  );
}

export default Footer;
