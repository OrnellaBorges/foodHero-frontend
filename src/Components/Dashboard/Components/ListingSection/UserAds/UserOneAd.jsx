import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { oneAd } from "../../../../../api/ApiAds";

import "./oneAd.css";
import { formatDate } from "../../../../../helpers/formatDate";
import EditButton from "../../../../Buttons/Button";
import DeleteButton from "../../../../Buttons/Button";

//import assets
import pasta from "../../../../../assets/pasta.jpg";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../../../../slices/userSlice";

const UserOneAd = (props) => {
    const user = useSelector(selectUser);
    const userId = String(user.infos.id);
    const { adId } = useParams();
    const [ad, setAd] = useState({});

    useEffect(() => {
        oneAd(adId)
            .then((res) => {
                setAd(res.data.oneAd[0]);
            })
            .catch((err) => {
                console.error("err", err);
            });
    }, []);

    return (
        <>
            <section className="oneAd">
                <div className="containerInfo">
                    <div className="imageCard-container">
                        <img
                            className="
                    imgAd"
                            src={pasta}
                            alt="pates au poulet et aux champignons"
                        />
                    </div>

                    {/* //loader a mettre */}
                    {/* {Object.keys(ad).length === 0 && <p>fetch en cours</p>} */}

                    {Object.keys(ad).length !== 0 && (
                        <div className="adInfo">
                            <h4 className="adTitle">{ad.title}</h4>
                            <div className="jesaispas">
                                <p className="adDescription">
                                    {ad.description}
                                </p>
                                <p className="price">prix : {ad.price} €</p>
                                <p className="price">
                                    Date : {formatDate(ad.creationDate)}
                                </p>
                            </div>
                            {ad.userId !== userId && (
                                <div className="buttonContainer flex">
                                    <Link
                                        to={`/userProfile/${ad.userId}`}
                                        className="btn"
                                    >
                                        Contacter le cookers
                                    </Link>
                                </div>
                            )}
                            {ad.userId === userId && (
                                <div className="buttonContainer flex">
                                    <div className="buttonContainer">
                                        <Link
                                            to={`/editAd/${adId}`}
                                            className="btn"
                                        >
                                            modifier l'annonce
                                        </Link>

                                        <Link to="" className="btn">
                                            supprimer l'annonce
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default UserOneAd;
