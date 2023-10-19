import { useEffect, useState } from "react";
//import { useState } from "react";

//import axios from "axios";

import { useParams } from "react-router-dom";

import "./oneAd.css";

import Button from "../../Buttons/Button";

//import assets
import pasta from "../../../assets/pasta.jpg";

//import icons
import { oneAd } from "../../../api/ApiAds";

const OneAd = () => {
    //ici on stock grace a useParams l'id de l'annonce qui a été mis dans le link de allAdsCard
    const { adId } = useParams();
    console.log("adId", adId);

    const [ad, setAd] = useState([]);

    useEffect(() => {
        oneAd(adId)
            .then((res) => {
                console.log("res.data.oneAd[0]", res.data.oneAd[0]);
                setAd(res.data.oneAd[0]);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    return (
        <>
            <div className="oneAd">
                {/* Mapper la liste apres le axios.get por recuperer toute les annonces et le mettre dans un useeffect */}

                <div className="containerInfo">
                    <div className="imageCard-container">
                        <img
                            className="
                        imgAd"
                            src={pasta}
                            alt="pates au poulet et aux champignons"
                        />
                    </div>

                    <div className="adInfo">
                        <h4 className="adTitle">{ad.title}</h4>
                        <div className="jesaispas">
                            <p className="adDescription">{ad.description}</p>
                            <p className="price">prix: {ad.price} €</p>

                            {/* <p className="cooker">
                                Cuisiné par : <a href="">Marie.S</a>
                            </p> */}
                            <a href="">Contacter</a>
                        </div>

                        {/*Mapper la liste pour generer des li*/}
                        {/*  <div className="ingredientContainer">
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
                        </div> */}

                        <div className="buttonContainer flex">
                            <Button text="Reserver le plat" />
                            {/* <button
                                className="addCart-btn"
                                onClick={() => console.log("coucou")}
                            >
                                Reserver le plat
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OneAd;
