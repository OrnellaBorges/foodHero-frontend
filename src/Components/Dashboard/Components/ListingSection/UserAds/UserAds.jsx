import { useState, useEffect } from "react";
import { allUserAds } from "../../../../../api/ApiAds";
//import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// ICI ON A UN COMPOSANT QUI FAIT
//APPARAITRE TOUTES LES ANNONCES D'un USER sur sa page donc toutes les annonces dont l'userId est === id de l'user connecté

import "./userAds2.css";
import { formatDate } from "../../../../../helpers/formatDate";
import Button from "../../../../Buttons/MoreDetailButton";

//import assets
/* import pasta from "../../assets/pasta.jpg";
import lasagnes from "../../assets/lasagna1.jpeg";
import cookie from "../../assets/cookie3.jpeg"; */
//import image from "../../../../../assets/food/riz.jpg";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../../../../slices/userSlice";

const UserAds = (props) => {
    const user = useSelector(selectUser);
    const userId = user.infos.id;
    const [userAds, setUserAds] = useState([]);
    const [isError, setIsError] = useState(false);
    //const [status, setStatus] = useState(0);

    //ici on stock grace a useParams l'id de l'utilisateur connecté qui a été mis dans le link de allAdsCard

    //const userId = props.userId;

    useEffect(() => {
        // appel de la fonction allUserAds()

        if (userId) {
            allUserAds(userId)
                .then((res) => {
                    if (res.status === 200 && res.userAds.length > 0)
                        setUserAds(res.userAds);
                    if (res.status !== 200) setIsError(true);
                })
                .catch((err) => {
                    console.error("err", err);
                });
        }
    }, [userId]);

    return (
        <>
            <section className="cardsContainer">
                <h2 className="title-container">Vos annonces :</h2>
                {userAds.length > 0 ? (
                    <ul className="testUl">
                        {/* .map pour chaque annonce tu retournes un li */}
                        {userAds.map((annonce) => (
                            <li key={annonce.id} className="testLi">
                                <h3 className="title-card">{annonce.title}</h3>
                                <p className="text-card">
                                    Prix : {annonce.price} €
                                </p>{" "}
                                <p className="text-card">
                                    Date : {formatDate(annonce.creationDate)}
                                </p>
                                <p className="texte-card">
                                    {annonce.description}
                                </p>
                                <Link
                                    to={`/userOneAd/${annonce.id}`}
                                    className="btn"
                                >
                                    More details
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="message">Vous n'avez pas d'annonces</p>
                )}
            </section>
        </>
    );
};

export default UserAds;
