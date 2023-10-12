import React from "react";
import "./Footer.css"; // Assurez-vous d'ajouter un fichier CSS pour le style

function Footer() {
    return (
        <footer className="footer">
            <h1 className="footerTitle">Footer</h1>
            <section className="footer-section">
                <h2>À propos</h2>
                <ul className="footerList">
                    <li>Qui sommes-nous ?</li>
                    <li>Contactez-nous</li>
                    <li>Blog</li>
                </ul>

                <h2>Légal</h2>
                <ul className="footerList">
                    <li>Conditions d'utilisation</li>
                    <li>Politique de confidentialité</li>
                </ul>
                <h2>Suivez-nous</h2>
                <ul className="footerList">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;
