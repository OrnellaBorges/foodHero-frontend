import React, { useState, useEffect } from "react";
//import { allAds } from "../../api/ApiAds";
//import axios from "axios";

import "./AllAdsCards.css";

import Button from "../Buttons/Button";
import Pagination from "../Pagination/Pagination";

//import assets
/* import pasta from "../../assets/pasta.jpg";
import lasagnes from "../../assets/lasagna1.jpeg";
import cookie from "../../assets/cookie3.jpeg"; */
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectAds } from "../../slices/adSlice";

import { formatDate } from "../../helpers/formatDate";

const AllAdsCards = () => {
    const products = useSelector(selectAds);

    /* par defaut on initialise la current page a la page 1 qu'on stock dans un state */
    const [currentPage, setCurrentPage] = useState(1);

    //ici on recup le nombre total d'annonce et on stock dans la constante total qui est initialisé a 0 au départ car il n'y a rien
    const [total, setTotal] = useState(products.ads.length);

    // on met ici la limite du nombre d'elements qu'on veut voir à l'ecran
    const limit = 5;

    useEffect(() => {
        setTotal(products.ads.length);
    }, [products]);

    const visibleProducts = products.ads.slice(
        (currentPage - 1) * limit,
        (currentPage - 1) * limit + limit
    );

    return (
        <>
            {products.ads.length > 0 ? (
                <section className="cards-container">
                    <h1 className="mainTitle">Toutes les annonces</h1>

                    {/* Mapper la liste annoncesRecente
                la liste doit faire apparaitre toutes les annonces les plus recentes dans le temps et 10 max */}

                    <div className="mappedList">
                        <ul className="testUl">
                            {/* .map pour chaque annonce tu retournes un li */}
                            {visibleProducts.map((annonce) => (
                                <li key={annonce.id} className="testLi">
                                    {/* <img src={annonce.image} alt={annonce.title} /> */}
                                    <h3 className="title-card">
                                        {annonce.title}
                                    </h3>
                                    <p className="text">
                                        Prix : {annonce.price} €
                                    </p>
                                    <p className="texte">
                                        Date :{" "}
                                        {formatDate(annonce.creationDate)}
                                    </p>
                                    <p className="texte">
                                        {annonce.description}
                                    </p>

                                    <Link to={`/userOneAd/${annonce.id}`}>
                                        <Button text="More details" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
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

//Fonction ne fonctionne pas

/* Recup toutes les annonces recentes et stocker dans annonces recentes*/

//fonction de conversion du timeStamp
/* function timestampToDate(timestamp) {
    const date = new Date(timestamp * 1000); // Convertir le timestamp Unix en millisecondes
    const day = String(date.getDate()).padStart(2, "0"); // Jour (avec zéro initial si nécessaire)
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Mois (ajouter 1 car les mois commencent à 0)
    const year = date.getFullYear(); // Année

    return `${day}/${month}/${year}`;
} */
