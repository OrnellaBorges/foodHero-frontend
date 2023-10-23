import React, { useState, useEffect } from "react";
import { allAds } from "../../api/ApiAds";
//import axios from "axios";

import "./AllAdsCards.css";

import Button from "../Buttons/Button";
import Pagination from "../Pagination/Pagination";

//import assets
/* import pasta from "../../assets/pasta.jpg";
import lasagnes from "../../assets/lasagna1.jpeg";
import cookie from "../../assets/cookie3.jpeg"; */
import { Link } from "react-router-dom";

//import icons

const AllAdsCards = () => {
    /* STATES  */
    const [annoncesRecentes, setAnnoncesRecentes] = useState([]);
    const [status, setStatus] = useState(0);
    const [currentPage, setCurrentPage] =
        useState(
            1
        ); /* par defaut on initialise la current page a la page 1 qu'on stock dans un state */
    //ici on recup le nombre total d'annonce et on stock dans la constante total
    const [total, setTotal] = useState(0);

    console.log("total", total);

    // on met ici la limite du nombre d'elements qu'on veut voir à l'ecran
    const limit = 10;
    {
        /* Recup toutes les annonces recentes et stocker dans annonces recentes*/
    }

    function timestampToDate(timestamp) {
        const date = new Date(timestamp * 1000); // Convertir le timestamp Unix en millisecondes
        const day = String(date.getDate()).padStart(2, "0"); // Jour (avec zéro initial si nécessaire)
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Mois (ajouter 1 car les mois commencent à 0)
        const year = date.getFullYear(); // Année

        return `${day}/${month}/${year}`;
    }

    useEffect(() => {
        // appel de la fonction allAds()
        allAds()
            .then((res) => {
                console.log("res.allAds", res.allAds);
                setStatus(res.status);
                setAnnoncesRecentes(res.allAds);
                setTotal(res.allAds.length);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    return (
        <>
            {status === 200 ? (
                <section className="cards-container">
                    <h1 className="mainTitle">Toutes les annonces</h1>

                    {/* Mapper la liste annoncesRecente
                la liste doit faire apparaitre toutes les annonces les plus recentes dans le temps et 10 max */}

                    <div className="mappedList">
                        <h2>
                            Liste d'Annonces mappé de la plus récente à la plus
                            ancienne
                        </h2>
                        <ul className="testUl">
                            {/* .map pour chaque annonce tu retournes un li */}
                            {annoncesRecentes.slice(0, 10).map((annonce) => (
                                <li key={annonce.id} className="testLi">
                                    {/* <img src={annonce.image} alt={annonce.title} /> */}
                                    <h3 className="title-card">
                                        {annonce.title}
                                    </h3>
                                    <p className="text">
                                        Prix : {annonce.price} €
                                    </p>{" "}
                                    {/* ici il n'y a pas d'interpolation ???? */}
                                    <p className="texte">
                                        Date :
                                        {timestampToDate(annonce.creationDate)}
                                    </p>
                                    <p className="texte">
                                        {annonce.description}
                                    </p>
                                    {/* <p className="texte">
                                    Auteur : {annonce.auteur}
                                </p> */}
                                    <Link to={`/oneAd/${annonce.id}`}>
                                        <Button text="More details" />
                                    </Link>
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
                            total={total}
                            limit={limit}
                            onChangePage={(page) => setCurrentPage(page)}
                        />
                    </div>
                </section>
            ) : (
                <section className="cards-container">
                    <h1 className="mainTitle">Toutes les annonces</h1>
                    <div className="containerMessage">
                        <h2 className="statusError">
                            OOPS... Nous avons rencontré un problème.
                        </h2>
                    </div>
                </section>
            )}
        </>
    );
};

export default AllAdsCards;

/* <ul className="cards-list">
                    <li className="singleCard">
                        <div className="imgCard-container">
                            <img className="imageZoom" src={pasta} alt="" />
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
                                <MoreDetailButton text="More details" />
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
                </ul> */
/* const annoncesRecentes = [
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
        {
            id: 27,
            titre: "Annonce 27",
            urlimage: "image3.jpg",
            prix: 3.5,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 3",
        },
        {
            id: 28,
            titre: "Annonce 28",
            urlimage: "image3.jpg",
            prix: 3.5,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 3",
        },
        {
            id: 29,
            titre: "Annonce 29",
            urlimage: "image3.jpg",
            prix: 3.5,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 3",
        },
        {
            id: 30,
            titre: "Annonce 30",
            urlimage: "image3.jpg",
            prix: 3.5,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce.",
            auteur: "Auteur 3",
        },
    ]; */
