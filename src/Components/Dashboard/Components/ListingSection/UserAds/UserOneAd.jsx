import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { editOneAd } from "../../../../../api/ApiAds";

import "./oneAd.css";

import EditButton from "../../../../Buttons/Button";
import DeleteButton from "../../../../Buttons/Button";

//import assets
import pasta from "../../../../../assets/pasta.jpg";

//import icons

const UserOneAd = () => {
  const ad = {
    id: 30,
    title: "Annonce 30",
    price: 3.5,
    date: "2023-10-03",
    description: "Ceci est la description de l'annonce.",
    auteur: "Auteur 3",
    userId: 2,
  };

  return (
    <>
      <div className="oneAd">
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
            </div>
            <div className="buttonContainer flex">
              <div className="buttonContainer">
                <Link to={`/editAd/${ad.id}`}>
                  <EditButton text="modifier l'annonce" />
                </Link>

                <Link to="">
                  <DeleteButton text="supprimer l'annonce" />
                </Link>
              </div>
              {/* <Link to={`/userProfile/${ad.userId}`}>
                            <Button text="Contacter le cooker" />
                        </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOneAd;
