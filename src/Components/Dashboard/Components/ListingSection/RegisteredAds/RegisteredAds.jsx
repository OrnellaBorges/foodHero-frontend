import React, { useState } from "react";
import "./Card.css"; // Assurez-vous d'ajouter un fichier CSS pour le style

//import testImage from "../../../assets/food/riz.jpg";
import Button from "../../../../Buttons/Button";
import Pagination from "../../../../Pagination/Pagination";

const RegisteredCards = (props) => {
    const [currentPage, setCurrentPage] =
        useState(
            1
        ); /* par defaut on initialise la current page a la page 1 qu'on stock dans un state */
    //ici on recup le nombre total d'annonce et on stock dans la constante total
    const total = 500;

    // on met ici la limite du nombre d'elements qu'on veut voir à l'ecran
    const limit = 20;

    const annonces = [
        {
            id: 1,
            titre: "Annonce 1",
            urlimage: "url de l'image",
            prix: 100,
            date: "2023-10-01",
            description: "Ceci est la description de l'annonce 1.",
            auteur: "Auteur 1",
        },
        {
            id: 2,
            titre: "Annonce 2",
            urlimage: "image2.jpg",
            prix: 75,
            date: "2023-10-02",
            description: "Ceci est la description de l'annonce 2.",
            auteur: "Auteur 2",
        },
        {
            id: 3,
            titre: "Annonce 3",
            urlimage: "image3.jpg",
            prix: 120,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce 3.",
            auteur: "Auteur 3",
        },

        {
            id: 4,
            titre: "Annonce 4",
            urlimage: "image2.jpg",
            prix: 75,
            date: "2023-10-02",
            description: "Ceci est la description de l'annonce 2.",
            auteur: "Auteur 2",
        },
        {
            id: 5,
            titre: "Annonce 5",
            urlimage: "image3.jpg",
            prix: 120,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce 3.",
            auteur: "Auteur 3",
        },
        {
            id: 6,
            titre: "Annonce 6",
            urlimage: "image3.jpg",
            prix: 120,
            date: "2023-10-03",
            description: "Ceci est la description de l'annonce 3.",
            auteur: "Auteur 3",
        },
    ];

    /*  const userAdList = {
        title: "Test",
        id: "1",
        description: " 1 portion de 200 grames de paella réalisé hier soir. ",
        price: 3,
        userPseudo: "Marie.S",
        date: "12 mai 2023",
        profileImage: { testImage },
    }; */

    return (
        <>
            <section className="mappedList-container">
                <h2>Annonces enregistrées</h2>
                <ul className="testUl">
                    {/* .map pour chaque annonce tu retournes un li */}
                    {annonces.slice(0, 6).map((annonce) => (
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
                            <Button text="More details" />
                        </li>
                    ))}
                </ul>
                <Pagination
                    currentPage={currentPage}
                    total={total}
                    limit={limit}
                    onChangePage={(page) => setCurrentPage(page)}
                />
            </section>
        </>
    );
};

export default RegisteredCards;

{
    /* <ul className="card">
                <div className="image-container">
                    <img
                        src={testImage}
                        alt="Image de la carte"
                        className="card-image"
                    />
                </div>
                <div className="card-details">
                    <div className="card-content">
                        <h2 className="card-title">{userAdList.title}</h2>
                        <p className="card-price">{`${userAdList.price} €`}</p>
                        <p className="card-description">{`${userAdList.description}`}</p>
                        <p className="cardAuthor">{`${userAdList.userPseudo}`}</p>{" "}
                        ici on doit pouvoir consulter le profil du cuisinier qui a realisé le plat en cliquant sur son nom
                        <p className="date">{`${userAdList.date}`}</p>
                    </div>

                    <div className="buttonContainer">
                        <Button text="More details" />
                    </div>
                    <div className="icon-container">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-share"></i>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                </div>
            </ul> */
}
