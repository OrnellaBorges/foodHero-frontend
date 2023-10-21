import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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

    //ici on stock grace a useParams qui provient de la librairie react router dom l'id de l'annonce qui est dans la barre url du navigateur
    /* const { adId } = useParams();
    console.log("adId", adId);

    const [ad, setAd] = useState([]);
    console.log("ad.userId", ad.userId);

    useEffect(() => {
        oneAd(adId)
            .then((res) => {
                console.log("res.data.oneAd[0]", res.data.oneAd[0]);
                setAd(res.data.oneAd[0]);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []); */
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

                            {/* <p className="cooker">
                            Cuisiné par : <a href="">Marie.S</a>
                        </p> */}
                        </div>
                        <div className="buttonContainer flex">
                            <div className="buttonContainer">
                                <Link to="/editAd">
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

/*<>
            <div className="oneAd">
             Mapper la liste apres le axios.get por recuperer toute les annonces et le mettre dans un useeffect

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
                        <h4 className="adTitle">Pene au poulet</h4>
                        <div className="jesaispas">
                            <p className="adDescription">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam veritatis dolores
                                praesentium corrupti eius? Neque ipsam maiores
                                nulla quod sed.
                            </p>
                            <p className="price">prix: 3€</p>

                            <p className="cooker">
                                Cuisiné par : <a href="">Marie.S</a>
                            </p>
                            <a href="">Contacter</a>
                        </div>

                       Mapper la liste pour generer des li
                        <div className="ingredientContainer">
                            <h5>Ingredients:</h5>
                            <ul className=" list ingredientsList flex">
                                <li className="ingredient">Pene</li>
                                <li className="ingredient">Volaille</li>

                                <li className="ingredient">Champignons</li>
                                <li className="ingredient">Oignon</li>
                                <li className="ingredient">Persil</li>
                                <li className="ingredient">Crème fraiche</li>

                                <li className="ingredient">sel</li>

                                <li className="ingredient">poivre</li>
                            </ul>
                        </div>

                        
                    </div>
                </div>
            </div>
        </>*/
