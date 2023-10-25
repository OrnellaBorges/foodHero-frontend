import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOneUser } from "../../../api/ApiUser";
import { updateProfil } from "../../../api/ApiUser";

import Button from "../../Buttons/Button";

import "./edit.css";

function EditAccount(props) {
    const userId = props.userId;
    console.log("userId", userId);

    /* const [firstName, setFirstName] = useState(firstName);
    const [lastName, setLastName] = useState(lastName);
    const [email, setEmail] = useState(email);
    const [adress, setAdress] = useState(adress);
    const [phoneNumber, setPhoneNumber] = useState(phoneNumber); */

    const [user, setUser] = useState({
        firstName: "Albert",
        lastName: "Einstein",
        email: "eureka.e=mc2@lycos.fr",
        address: "53 rue de la Relativité ",
        phone: "+1 555-123-4567",
        profileImage: "https://example.com/profile-image.jpg",
    });

    const handleInputChange = (event) => {
        /* const { name, value } = event.target;
        setUser({ ...user, [name]: value }); */
    };

    useEffect(() => {
        getOneUser(userId)
            .then((res) => {
                setCooker(res.data.oneUser[0]);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    return (
        <div className="profile-edit">
            <div className="edit-header">
                <h1>Modifier le profil</h1>
                <Link to="/userProfile">
                    <button>Retour au profil</button>
                </Link>
            </div>
            <div className="edit-form">
                <div className="form-group">
                    <label>Prénom</label>
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInputChange}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
                <div className="form-group">
                    <label>Nom de famille</label>
                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
                <div className="form-group">
                    <label>Adresse</label>
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
                <div className="form-group">
                    <label>Téléphone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
            </div>
            <div className="save-buttonContainer">
                <Button text="Enregistrer les modifications" />
                <Link to="/dashboard">
                    <Button text="Back to Dashboard" />
                </Link>
                <Link to="/userProfile">
                    <Button text="Back to userprofile" />
                </Link>
                <Link to="/account">
                    <Button text="Back to account" />
                </Link>
            </div>
        </div>
    );
}

export default EditAccount;

/*<div className="form-group">
                    <label>Image de profil</label>
                    <input
                        type="url"
                        name="profileImage"
                        value={user.profileImage}
                        onChange={handleInputChange}
                    />
                <FontAwesomeIcon icon={faPencilAlt} />
                </div>*/
