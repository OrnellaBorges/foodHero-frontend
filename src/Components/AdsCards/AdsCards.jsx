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
        <div className="Cards">
            {/* Mapper la liste apres le axios.get por recuperer toute les annonces et le mettre dans un useeffect */}
            <div className="cardContainer container grid">
                <div className="singleCard">
                    <div className="imgCard-container">
                        <img src={pasta} alt="" />
                    </div>
                    <h4 className="textTitle">Lasagna</h4>
                </div>

                <div className="singleCard">
                    <div className="imgCard-container">
                        <img src={lasagnes} alt="lasagnes végétariennes" />
                    </div>
                    <h4 className="textTitle">Lasagna</h4>
                </div>

                <div className="singleCard">
                    <div className="imgCard-container">
                        <img src={cookie} alt="cookies au chocolat" />
                    </div>
                    <h4 className="textTitle">Lasagna</h4>
                </div>
            </div>
        </div>
    );
};

export default AdsCards;
