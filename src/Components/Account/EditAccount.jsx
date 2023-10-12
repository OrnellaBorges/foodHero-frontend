import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";

//import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
//import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "./edit.css";

function EditAccount() {
    const [user, setUser] = useState({
        firstName: "Albert",
        lastName: "Einstein",
        email: "eureka.e=mc2@lycos.fr",
        address: "53 rue de la Relativité ",
        phone: "+1 555-123-4567",
        profileImage: "https://example.com/profile-image.jpg",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

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
                <div className="form-group">
                    <label>Image de profil</label>
                    <input
                        type="url"
                        name="profileImage"
                        value={user.profileImage}
                        onChange={handleInputChange}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
            </div>
            <div className="save-button">
                <button>Enregistrer les modifications</button>
            </div>
        </div>
    );
}

export default EditAccount;
