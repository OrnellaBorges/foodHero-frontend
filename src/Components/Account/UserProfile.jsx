import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//import components
import Button from "../Buttons/Button";

import "./userProfile.css";

import adminImage from "../../assets/users/albert4.png";

function UserProfile() {
    // Les données de l'utilisateur
    const user = {
        firstName: "Albert",
        lastName: "Einstein",
        email: "e=mc2@lycos.fr",
        address: "53 rue de la Relativité ",
        phone: "+1 555-123-4567",
        profileImage: { adminImage },
    };

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

    return (
        <>
            <div className="profile">
                <div className="profilSidebar">
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
                            {user.firstName} {user.lastName}
                        </h2>
                    </div>
                </div>

                <div className="infoContainer">
                    <div className="user-details">
                        <h3>Your Profil Info:</h3>
                        <ul className="list-container">
                            <li className="listItem">
                                <h4>Email:</h4>
                                <p>{user.email}</p>
                            </li>
                            <li className="listItem">
                                <h4>Adresse:</h4>
                                <p>{user.address}</p>
                            </li>
                            <li className="listItem">
                                <h4>Téléphone:</h4>
                                <p>{user.phone}</p>
                            </li>
                        </ul>
                    </div>

                    <div className="buttonsContainer">
                        <Link to="/editAccount">
                            <Button text="Modifier le profil" />
                        </Link>
                        <Link to="/dashboard">
                            <Button text="Back to Dashboard" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;
