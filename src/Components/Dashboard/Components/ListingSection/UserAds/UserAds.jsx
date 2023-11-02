import { useState, useEffect } from "react";
import { allUserAds } from "../../../../../api/ApiAds";

import { Link } from "react-router-dom";

import "./userAds2.css";
import { formatDate } from "../../../../../helpers/formatDate";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../../../../slices/userSlice";

const UserAds = (props) => {
  const user = useSelector(selectUser);
  const userId = user.infos.id;
  const [userAds, setUserAds] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
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
            {userAds.map((annonce) => (
              <li key={annonce.id} className="testLi">
                <h3 className="title-card">{annonce.title}</h3>
                <p className="text-card">Prix : {annonce.price} €</p>{" "}
                <p className="text-card">
                  Date : {formatDate(annonce.creationDate)}
                </p>
                <p className="texte-card">{annonce.description}</p>
                <Link to={`/userOneAd/${annonce.id}`} className="btn">
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
