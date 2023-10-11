import React from "react";
//import { useState } from "react";
//import { useEffect } from "react";
//import axios from "axios";

import "./oneAd.css";

//import assets
import pasta from "../../assets/pasta.jpg";

//import icons

const OneAd = () => {
    return (
        <>
            <div className="oneAd">
                {/* Mapper la liste apres le axios.get por recuperer toute les annonces et le mettre dans un useeffect */}

                <div className="containerInfo">
                    <div className="imgCard-container">
                        <img src={pasta} alt="" />
                    </div>

                    <div className="adInfo">
                        <h4 className="adTitle">Pene au poulet</h4>
                        <div className="jesaispas">
                            <p className="adDescription">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam veritatis dolores
                                praesentium corrupti eius? Neque ipsam maiores
                                nulla quod sed.
                            </p>
                            <p className="price">prix: 3€</p>

                            <p className="cooker">
                                Cuisiné par : <a href="">Marie.S</a>
                            </p>
                            <a href="">Contacter</a>
                        </div>

                        {/*Mapper la liste pour generer des li*/}
                        <div className="ingredientContainer">
                            <h5>Ingredients:</h5>
                            <ul className=" list ingredientsList flex">
                                <li className="ingredient">Pene</li>
                                <li className="ingredient">Volaille</li>

                                <li className="ingredient">Champignons</li>
                                <li className="ingredient">Oignon</li>
                                <li className="ingredient">Persil</li>
                                <li className="ingredient">Crème fraiche</li>

                                <li className="ingredient">sel</li>

                                <li className="ingredient">poivre</li>
                            </ul>
                        </div>

                        <div className="buttonContainer flex">
                            <button
                                className="addCart-btn"
                                onClick={() => console.log("coucou")}
                            >
                                Reserver le plat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OneAd;
