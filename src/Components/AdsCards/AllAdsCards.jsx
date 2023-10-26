import React, { useState, useEffect } from "react";

import "./AllAdsCards.css";

import Button from "../Buttons/Button";
import Pagination from "../Pagination/Pagination";

//import assets
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

          <div className="mappedList">
            <ul className="testUl">
              {visibleProducts.map((annonce) => (
                <li key={annonce.id} className="testLi">
                  <h3 className="title-card">{annonce.title}</h3>
                  <p className="text">Prix : {annonce.price} €</p>
                  <p className="texte">
                    Date : {formatDate(annonce.creationDate)}
                  </p>
                  <p className="texte">{annonce.description}</p>

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
