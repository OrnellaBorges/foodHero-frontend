import React from "react";
import "./Card.css"; // Assurez-vous d'ajouter un fichier CSS pour le style

function Card() {
    return (
        <div className="card">
            <div className="image-container">
                <img
                    src="url_de_votre_image.jpg"
                    alt="Image de la carte"
                    className="card-image"
                />
            </div>
            <div className="card-details">
                <h2 className="card-title">Titre de la carte</h2>
                <p className="card-price">Prix : $19.99</p>
                <p className="card-description">
                    Description de la carte. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </p>
                <div className="icon-container">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-share"></i>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    );
}

export default Card;
