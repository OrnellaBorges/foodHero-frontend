import React from "react";
//import { useState } from "react";
//import { useEffect } from "react";
//import axios from "axios";

import "./adsCards.css";

import Button from "../Buttons/Button";

//import assets
import pasta from "../../assets/pasta.jpg";
import lasagnes from "../../assets/lasagna1.jpeg";
import cookie from "../../assets/cookie3.jpeg";
import { Link } from "react-router-dom";

//import icons

const AdsCards = () => {
    return (
        <>
            <div className="cards-container">
                <h1 className="mainTitle">Toutes les annonces</h1>
                {/* Mapper la liste apres le axios.get por recuperer toute les annonces et le mettre dans un useeffect */}
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
            </div>
        </>
    );
};

export default AdsCards;
