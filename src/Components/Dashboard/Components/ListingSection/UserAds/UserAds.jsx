import { useState, useEffect } from "react";
import { allUserAds } from "../../../../../api/ApiAds";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import { useState } from "react";
//import { useEffect } from "react";
//import axios from "axios";

// ICI ON A UN COMPOSANT QUI FAIT
//APPARAITRE TOUTES LES ANNONCES D'un USER sur sa page donc toutes les annonces dont l'userId est === id de l'user connecté

import "./userAds2.css";

import Button from "../../../../Buttons/MoreDetailButton";

//import assets
/* import pasta from "../../assets/pasta.jpg";
import lasagnes from "../../assets/lasagna1.jpeg";
import cookie from "../../assets/cookie3.jpeg"; */
//import image from "../../../../../assets/food/riz.jpg";

const UserAds = () => {
    // ici on va faire un fetch
    /* const recupUserAnnonces = [
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
    ]; */

    //ici on stock grace a useParams l'id de l'utilisateur connecté qui a été mis dans le link de allAdsCard

    const userId = 1;

    //const { userId } = useParams(3);

    const [userAds, setUserAds] = useState([]);
    const [isError, setIsError] = useState(false);
    //const [status, setStatus] = useState(0);

    console.log("userAds", userAds);

    useEffect(() => {
        //console.log("userId", userId);
        // appel de la fonction allUserAds()
        allUserAds(userId)
            .then((res) => {
                /* console.log("res", res.userAds);
                console.log("res", res); */
                if (res.status === 200) {
                    if (res.userAds.length > 0) {
                        setUserAds(res.userAds);
                    }
                }

                if (res.status !== 200) {
                    setIsError(true);
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    return (
        <>
            <section className="cardsContainer">
                <h2 className="title-container">Annonces de l'user</h2>
                {userAds.length > 0 ? (
                    <ul className="testUl">
                        {/* .map pour chaque annonce tu retournes un li */}
                        {userAds.map((annonce) => (
                            <li key={annonce.id} className="testLi">
                                {/* <img src={annonce.image} alt={annonce.titre} /> */}
                                <h3 className="titre">{annonce.title}</h3>
                                <p className="texte">
                                    Prix : {annonce.price} €
                                </p>{" "}
                                {/* ici il n'y a pas d'interpolation ???? */}
                                <p className="texte">
                                    Date : {annonce.creationDate}
                                </p>
                                <p className="texte">{annonce.description}</p>
                                {/* <p className="texte">
                                    Auteur : {annonce.auteur}
                                </p> */}
                                <Link to="userOneAd">
                                    <Button text="More details" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Pas d'annonces</p>
                )}
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
