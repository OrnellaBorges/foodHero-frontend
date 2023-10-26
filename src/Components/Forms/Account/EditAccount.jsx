import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOneUser } from "../../../api/ApiUser";
import { updateProfil } from "../../../api/ApiUser";
import Button from "../../Buttons/Button";
import "./edit.css";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../../slices/userSlice";

const EditAccount = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const userId = user.infos.id;

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    useEffect(() => {
        if (userId) {
            getOneUser(userId)
                .then((res) => {
                    const userRetrieved = res.data.oneUser[0];
                    setFirstName(userRetrieved.firstName);
                    setLastName(userRetrieved.lastName);
                    setEmail(userRetrieved.email);
                    setAddress(userRetrieved.address);
                    setPhoneNumber(userRetrieved.phoneNumber);
                })
                .catch((err) => {
                    console.error("err", err);
                });
        }
    }, [userId]);

    const [isError, setIsError] = useState("");
    const [isSuccess, setIsSuccess] = useState("");

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (firstName === "" || email === "" || password === "") {
            setIsError("Veuillez remplir les champs obligatoires");
        } else {
            const datas = {
                firstName,
                lastName,
                email,
                password,
            };
            const token = localStorage.getItem("fh-token");
            updateProfil(datas, userId, token)
                .then((res) => {
                    // 1-si le status est différent de 200 alors on va chercher le msg d'erreur
                    if (res.status === 200) {
                        setIsError("");
                        setIsSuccess(res.msg);
                        const user = res.userUpdated;
                        user.token = token;
                        dispatch(connectUser(user));
                    } else {
                        // 2-on stock se msg d'erreur dans un state
                        setIsError(res.msg);
                        setIsSuccess("");
                    }
                })
                .catch((err) => {
                    console.error("err", err);
                });
        }
    };

    return (
        <div className="profile-edit">
            <div className="edit-header">
                <h1>Modifier le profil</h1>
            </div>
            <form className="edit-form" onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label>Prénom *</label>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
                <div className="form-group">
                    <label>Nom de famille</label>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
                <div className="form-group">
                    <label>Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
                <div className="form-group">
                    <label>Password *</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
                </div>
                <button type="submit" className="btn">
                    Enregistrer les modifications
                </button>
            </form>

            {isSuccess && <p className="successMsg">{isSuccess}</p>}

            {isError && <p className="errorMsg">{isError}</p>}
            <div className="save-buttonContainer">
                <Link to="/dashboard" className="btn">
                    Back to Dashboard
                </Link>
                <Link to={`/userProfile/${userId}`} className="btn">
                    Back to userprofile
                </Link>
            </div>
        </div>
    );
};

export default EditAccount;
