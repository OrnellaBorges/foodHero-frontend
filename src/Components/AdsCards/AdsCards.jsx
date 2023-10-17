import React, { useState } from "react";
//import { useState } from "react";
//import { useEffect } from "react";
//import axios from "axios";

import "./adsCards.css";

import Button from "../Buttons/Button";
import Pagination from "../Pagination/Pagination";

//import assets
import pasta from "../../assets/pasta.jpg";
import lasagnes from "../../assets/lasagna1.jpeg";
import cookie from "../../assets/cookie3.jpeg";
import { Link } from "react-router-dom";

//import icons

const AdsCards = () => {
    /* STATES  */
    const [currentPage, setCurrentPage] =
        useState(
            1
        ); /* par defaut on initialise la current page a la page 1 qu'on stock dans un state */

    {
        /* Recup toutes les annonces recentes et stocker dans annonces recentes*/
    }
    const annoncesRecentes = [
        {
            id: 21,
            titre: "Annonce 21",
            urlimage: "https://xxxxx.com",
            prix: 5,
            date: "2023-10-01",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 1",
        },
        {
            id: 22,
            titre: "Annonce 22",
            urlimage: "image2.jpg",
            prix: 7,
            date: "2023-10-02",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 2",
        },
        {
            id: 23,
            titre: "Annonce 23",
            urlimage: "image3.jpg",
            prix: 12,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 3",
        },

        {
            id: 24,
            titre: "Annonce 24",
            urlimage: "image2.jpg",
            prix: 75,
            date: "2023-10-02",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 2",
        },
        {
            id: 25,
            titre: "Annonce 25",
            urlimage: "image3.jpg",
            prix: 4,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 3",
        },
        {
            id: 26,
            titre: "Annonce 26",
            urlimage: "image3.jpg",
            prix: 3.5,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 3",
        },
    ];
    return (
        <>
            <div className="cards-container">
                <h1 className="mainTitle">Toutes les annonces</h1>

                <ul className="cards-list">
                    <li className="singleCard">
                        <div className="imgCard-container">
                            <img src={pasta} alt="" />
                        </div>
                        <div className="adsCard-content">
                            <h4 className="cardTitle">Pâtes au poulet</h4>
                            <h5>Prix : 3€</h5>
                            <p>Lille</p>
                            <div className="buttonContainer flex">
                                <Button text="More details" />
                            </div>
                        </div>
                    </li>

                    <li className="singleCard">
                        <div className="imgCard-container">
                            <img src={lasagnes} alt="lasagnes végétariennes" />
                        </div>

                        <div className="adsCard-content">
                            <h4 className="cardTitle">Lasagnes végé</h4>
                            <h5>Prix : 3€</h5>
                            <p>Lille</p>
                            <div className="buttonContainer flex">
                                <Button text="More details" />
                            </div>
                        </div>
                    </li>

                    <li className="singleCard">
                        <div className="imgCard-container">
                            <img src={cookie} alt="lasagnes végétariennes" />
                        </div>

                        <div className="adsCard-content">
                            <h4 className="cardTitle">Cookies</h4>
                            <h5>Prix : 3.5€</h5>
                            <p>Lille</p>
                            <div className="buttonContainer flex">
                                <Button text="More details" />
                            </div>
                        </div>
                    </li>
                    <li className="singleCard">
                        <div className="imgCard-container">
                            <img src={pasta} alt="" />
                        </div>
                        <div className="adsCard-content">
                            <h4 className="cardTitle">Pâtes au poulet</h4>
                            <h5>Prix : 3€</h5>
                            <p>Lille</p>
                            <div className="buttonContainer flex">
                                <Button text="More details" />
                            </div>
                        </div>
                    </li>

                    <li className="singleCard">
                        <div className="imgCard-container">
                            <img src={lasagnes} alt="lasagnes végétariennes" />
                        </div>

                        <div className="adsCard-content">
                            <h4 className="cardTitle">Lasagnes végé</h4>
                            <h5>Prix : 3€</h5>
                            <p>Lille</p>
                            <div className="buttonContainer flex">
                                <Button text="More details" />
                            </div>
                        </div>
                    </li>
                    <li className="singleCard">
                        <div className="imgCard-container">
                            <img src={cookie} alt="lasagnes végétariennes" />
                        </div>

                        <div className="adsCard-content">
                            <h4 className="cardTitle">Cookies</h4>
                            <h5>Prix : 3.5€</h5>
                            <p>Lille</p>
                            <div className="buttonContainer flex">
                                <Button text="More details" />
                            </div>
                        </div>
                    </li>
                </ul>

                {/* Mapper la liste annoncesRecente
                la liste doit faire apparaitre toutes les annonces les plus recentes dans le temps et 10 max */}

                <div className="mappedList">
                    <h2>
                        Liste d'Annonces mappé de la plus récente a la plus
                        ancienne
                    </h2>
                    <ul className="testUl">
                        {/* .map pour chaque annonce tu retournes un li */}
                        {annoncesRecentes.slice(0, 6).map((annonce) => (
                            <li key={annonce.id} className="testLi">
                                <img src={annonce.image} alt={annonce.titre} />
                                <h3 className="titre">{annonce.titre}</h3>
                                <p className="texte">
                                    Prix : {annonce.prix} €
                                </p>{" "}
                                {/* ici il n'y a pas d'interpolation ???? */}
                                <p className="texte">Date : {annonce.date}</p>
                                <p className="texte">{annonce.description}</p>
                                <p className="texte">
                                    Auteur : {annonce.auteur}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {/* dans pagination on passe des props qui serviront dans le composant
                    currentPage >> pour l'etat de la page actuelle 
                    total >>est le nombre totale de page existante
                    limit  >> est la limite des elements à afficher sur la page 
                    On affecte aussi un ecouteur d'evenment qui au changement mettra a jour le state currentPage
                    
                    */}
                    <Pagination
                        currentPage={currentPage}
                        total={30}
                        limit={20}
                        onChangePage={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </>
    );
};

export default AdsCards;
