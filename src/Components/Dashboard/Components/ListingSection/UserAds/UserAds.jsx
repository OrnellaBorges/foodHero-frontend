import React from "react";
//import { useState } from "react";
//import { useEffect } from "react";
//import axios from "axios";

// ICI ON A UN COMPOSANT QUI FAIT
//APPARAITRE TOUTES LES ANNONCES D'un USER sur sa page donc toutes les annonces dont l'userId est === id de l'user connecté

import "./userAds.css";

import MoreDetailButton from "../../../../Buttons/MoreDetailButton";

//import assets
/* import pasta from "../../assets/pasta.jpg";
import lasagnes from "../../assets/lasagna1.jpeg";
import cookie from "../../assets/cookie3.jpeg"; */

import image from "../../../../../assets/food/riz.jpg";

const UserAds = () => {
    // ici on va faire un fetch
    const recupUserAnnonces = [
        {
            id: 1,
            title: "Lasagnes",
            price: 3,
            description: "description du plat",
            date: "12/03/2023",
            ville: "LILLE",
            image: { image },
            userId: 3,
            userPseudo: "mika4ever",
        },
        {
            id: 2,
            title: "Lasagnes",
            price: 3,
            description: "description du plat",
            date: "12/03/2023",
            ville: "LILLE",
            image: { image },
            userId: 3,
            userPseudo: "mika4ever",
        },
    ];
    return (
        <>
            <section className="mappedList-container">
                <h2>Annonces de l'user</h2>
                <ul className="testUl">
                    {/* .map pour chaque annonce tu retournes un li */}
                    {recupUserAnnonces.slice(0, 6).map((annonce) => (
                        <li key={annonce.id} className="testLi">
                            <img src={annonce.image} alt={annonce.titre} />
                            <h3 className="titre">{annonce.titre}</h3>
                            <p className="texte">
                                Prix : {annonce.prix} €
                            </p>{" "}
                            {/* ici il n'y a pas d'interpolation ???? */}
                            <p className="texte">Date : {annonce.date}</p>
                            <p className="texte">{annonce.description}</p>
                            <p className="texte">Auteur : {annonce.auteur}</p>
                            <MoreDetailButton text="More details" />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default UserAds;

/* <>
            // si l'utilisateur a >= 1 annonces on affiche les annonces sinon il a === 0 alors on affiche un message sur la page:
         "vous n'avez pas d'annonce"

            <section className="userCards">
                 Mapper la liste apres le axios.get pour recuperer toute les annonces et le mettre dans un useeffect

                <h2>Annonces de l'user mappé</h2>
                <p>dans l'ordre de plus ancienne a plus récente</p>
                <ul className="userCards-container">
                    .map pour chaque annonce tu retournes un li avec les datas dedans
                    {recupUserAnnonces.slice(0, 6).map((annonce) => (
                        <li key={annonce.id} className="userCards-item">
                            <img src={annonce.image} alt={annonce.title} />
                            <h3 className="userCard-title">{annonce.title}</h3>
                            <p className="userCard-price">
                                Prix : {annonce.price} €
                            </p>{" "}
                             ici il n'y a pas d'interpolation ????
                            <p className="texte">Date : {annonce.date}</p>
                            <p className="texte">{annonce.description}</p>
                            <p className="texte">
                                Auteur : {annonce.userPseudo}
                            </p>
                            <MoreDetailButton text="More details" />
                             // ici ce bouton affiche l'annonce de l'user qu'il peut modifier ou compléter 
                        </li>
                    ))}
                </ul>
            </section>
        </> */

/* <div className="cardsContainer">
                    <div className="singleCard">
                        <div className="imgCard-container">
                            <img src={pasta} alt="" />
                        </div>
                        <h4 className="textTitle">Pâtes au poulet</h4>
                        <h5>`Prix : ${recupUserAnnonces.price}`</h5>
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
                        <h4 className="textTitle">Lasagnes végé</h4>
                    </div>

                    <div className="singleCard">
                        <div className="imgCard-container">
                            <img src={cookie} alt="cookies au chocolat" />
                        </div>
                        <h4 className="textTitle">Cookies</h4>
                    </div>
                    <div className="singleCard">
                        <div className="imgCard-container">
                            <img src={pasta} alt="" />
                        </div>
                        <h4 className="textTitle">Pâtes au poulet</h4>
                    </div>

                    <div className="singleCard">
                        <div className="imgCard-container">
                            <img src={lasagnes} alt="lasagnes végétariennes" />
                        </div>
                        <h4 className="textTitle">Lasagnes végé</h4>
                    </div>

                    <div className="singleCard">
                        <div className="imgCard-container">
                            <img src={cookie} alt="cookies au chocolat" />
                        </div>
                        <h4 className="textTitle">Cookies</h4>
                    </div> 
                </div>*/
