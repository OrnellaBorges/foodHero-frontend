import { useState, useEffect } from "react";
import { allUserAds } from "../../../../../api/ApiAds";
//import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// ICI ON A UN COMPOSANT QUI FAIT
//APPARAITRE TOUTES LES ANNONCES D'un USER sur sa page donc toutes les annonces dont l'userId est === id de l'user connecté

import "./userAds2.css";

import Button from "../../../../Buttons/MoreDetailButton";

//import assets
/* import pasta from "../../assets/pasta.jpg";
import lasagnes from "../../assets/lasagna1.jpeg";
import cookie from "../../assets/cookie3.jpeg"; */
//import image from "../../../../../assets/food/riz.jpg";

const UserAds = (props) => {
  //const { userId } = useParams();

  //ici on stock grace a useParams l'id de l'utilisateur connecté qui a été mis dans le link de allAdsCard

  const userId = props.userId;

  console.log("userId", userId);

  //const { userId } = useParams(3);

  //const userId = 1;

  const [userAds, setUserAds] = useState([]);
  const [isError, setIsError] = useState(false);
  //const [status, setStatus] = useState(0);

  console.log("userAds", userAds);
  console.log("userAds.length", userAds.length);
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
        <h2 className="title-container">Vos annonces :</h2>
        {userAds.length > 0 ? (
          <ul className="testUl">
            {/* .map pour chaque annonce tu retournes un li */}
            {userAds.map((annonce) => (
              <li key={annonce.id} className="testLi">
                <h3 className="title-card">{annonce.title}</h3>
                <p className="text-card">Prix : {annonce.price} €</p>{" "}
                <p className="text-card">Date : {annonce.creationDate}</p>
                <p className="texte-card">{annonce.description}</p>
                <Link to="/userOneAd">
                  <Button text="More details" />
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
