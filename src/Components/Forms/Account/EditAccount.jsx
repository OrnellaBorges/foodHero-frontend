import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOneUser } from "../../../api/ApiUser";
import { updateProfil } from "../../../api/ApiUser";
import Button from "../../Buttons/Button";
import "./edit.css";

const EditAccount = (props) => {
  const userId = props.userId;

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(() => {
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
        console.log("err", err);
      });
  }, []);

  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "") {
      setIsError("Veuillez remplir les champs obligatoires");
    } else {
      const datas = {
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
      };
      updateProfil(datas, userId)
        .then((res) => {
          // 1-si le status est différent de 200 alors on va chercher le msg d'erreur
          if (res.status === 200) {
            setIsError("");
            setIsSuccess(res.msg);
          } else {
            // 2-on stock se msg d'erreur dans un state
            setIsError(res.msg);
            setIsSuccess("");
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  return (
    <div className="profile-edit">
      <div className="edit-header">
        <h1>Modifier le profil</h1>
        <Link to="/userProfile">
          <button>Retour au profil</button>
        </Link>
      </div>
      <form className="edit-form" onSubmit={onSubmitForm}>
        <div className="form-group">
          <label>Prénom</label>
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
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
        </div>
        <div className="form-group">
          <label>Adresse</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
        </div>
        <div className="form-group">
          <label>Téléphone</label>
          <input
            type="tel"
            name="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
        </div>
        <button type="submit">Envoyer</button>
      </form>

      {isSuccess && <p className="successMsg">{isSuccess}</p>}

      {isError && <p className="errorMsg">{isError}</p>}
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
};

export default EditAccount;
