import React from "react";
//import { useState } from "react";
//import { useEffect } from "react";
//import axios from "axios";

import "./adsCards.css";

//import assets
import pasta from "../../assets/pasta.jpg";
import lasagnes from "../../assets/lasagna1.jpeg";
import cookie from "../../assets/cookie3.jpeg";

//import icons

const AdsCards = () => {
    return (
        <>
            <div className="cards">
                <h1 className="mainTitle">Toutes les annonces</h1>
                {/* Mapper la liste apres le axios.get por recuperer toute les annonces et le mettre dans un useeffect */}
                <div className="cardsContainer">
                    <div className="singleCard">
                        <div className="imgCard-container">
                            <img src={pasta} alt="" />
                        </div>
                        <h4 className="cardTitle">Pâtes au poulet</h4>
                        <h5>Prix : 3€</h5>
                        <p>Lille</p>

                        <div className="buttonContainer flex">
                            <button
                                className="cardBtn"
                                onClick={() => console.log("coucou")}
                            >
                                Voir l'annonce
                            </button>
                        </div>
                    </div>

                    <div className="singleCard">
                        <div className="imgCard-container">
                            <img src={lasagnes} alt="lasagnes végétariennes" />
                        </div>
                        <h4 className="cardTitle">Lasagnes végé</h4>
                        <h5>Prix : 3€</h5>
                        <p>Lille</p>

                        <div className="buttonContainer flex">
                            <button
                                className="cardBtn"
                                onClick={() => console.log("coucou")}
                            >
                                Voir l'annonce
                            </button>
                        </div>
                    </div>

                    <div className="singleCard">
                        <div className="imgCard-container">
                            <img src={cookie} alt="cookies au chocolat" />
                        </div>
                        <h4 className="cardTitle">Cookies</h4>
                        <h5>Prix : 3€</h5>
                        <p>Lille</p>

                        <div className="buttonContainer flex">
                            <button
                                className="cardBtn"
                                onClick={() => console.log("coucou")}
                            >
                                Voir l'annonce
                            </button>
                        </div>
                    </div>
                    <div className="singleCard">
                        <div className="imgCard-container">
                            <img src={pasta} alt="" />
                        </div>
                        <h4 className="cardTitle">Pâtes au poulets</h4>
                        <h5>Prix : 3€</h5>
                        <p>Lille</p>

                        <div className="buttonContainer flex">
                            <button
                                className="cardBtn"
                                onClick={() => console.log("coucou")}
                            >
                                Voir l'annonce
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdsCards;
