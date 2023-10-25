import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, Navigate, useParams } from "react-router-dom";
import { getOneUser } from "../../api/ApiUser";

//import components
import Button from "../Buttons/Button";

import "./userProfile.css";

import adminImage from "../../assets/users/albert4.png";

const UserProfile = (props) => {
    const navigate = useNavigate();
    const { cookerId } = useParams();
    const [cooker, setCooker] = useState({});
    console.log("props.userId", props.userId);

    // Les données de l'utilisateur
    /* const user = {
        firstName: "Albert",
        lastName: "Einstein",
        email: "e=mc2@lycos.fr",
        address: "53 rue de la Relativité ",
        phone: "+1 555-123-4567",
        profileImage: { adminImage },
    }; */

    /* useEffect(()=>{
        setFirstName(user.infos.firstName)
        setLastName(user.infos.lastName)
        setAddress(user.infos.address)
        setZip(user.infos.zip)
        setCity(user.infos.city)
        setPhone(user.infos.phone)
    }, [user]) */

    //const [data, setData] = useState(null);
    /* useEffect(() => {
        oneUser(adId)
            .then((res) => {
                console.log("res.data.oneAd[0]", res.data.oneAd[0]);
                setAd(res.data.oneAd[0]);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []); */

    const onLogout = () => {
        props.logoutUser(); // on execute la fonction passé en props (handleLogoutUser)
        localStorage.removeItem("fh-token"); // ici on detruit le token
        navigate("/"); // ici on te redirige vers la home
    };

    useEffect(() => {
        getOneUser(cookerId)
            .then((res) => {
                setCooker(res.data.oneUser[0]);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    return (
        <>
            <section className="profile">
                <aside className="profilSidebar">
                    <h1 className="titleAccount">USER PROFIL</h1>
                    <div className="user-info">
                        <div className="userImage">
                            <img
                                src={adminImage}
                                /* src={user.profileImage} */
                                alt="Profil de l'utilisateur"
                            />
                        </div>

                        <h2>
                            {cooker.firstName} {cooker.lastName}
                        </h2>
                    </div>
                </aside>

                <div className="infoContainer">
                    <div className="user-details">
                        <h3>Your Profil Info:</h3>
                        <ul className="list-container">
                            <li className="listItem">
                                <h4>Email:</h4>
                                <p>{cooker.email}</p>
                            </li>
                            <li className="listItem">
                                <h4>Adresse:</h4>
                                <p>{cooker.address}</p>
                            </li>
                            <li className="listItem">
                                <h4>Téléphone:</h4>
                                <p>{cooker.phoneNumber}</p>
                            </li>
                        </ul>
                    </div>

                    {cookerId === props.userId && (
                        <div className="buttonsContainer">
                            <Link to="/editAccount">
                                <Button text="Modifier le profil" />
                            </Link>
                            <Link to="/dashboard">
                                <Button text="Supprimer le profil" />
                            </Link>
                            <Link to="/dashboard">
                                <Button text="Back to Dashboard" />
                            </Link>
                            <button onClick={() => onLogout()}>
                                {" "}
                                Se deconnecter
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default UserProfile;
