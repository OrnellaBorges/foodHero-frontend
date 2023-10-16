import React from "react";

import { useState, useEffect } from "react";

// import components
import SubmitButton from "../Buttons/submitButton";

import "./form.css";
//import { createOneAd } from "../../api/ApiAds";

const CreateAds = () => {
    // STATES
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    // State pour faire apparaitre un msg en rouge  si user n'a pas rempli les champs
    const [isFormError, setIsFormError] = useState(false);
    const [isApiError, setIsApiError] = useState(false);

    //const [isValidForm, setIsValidForm] = useState(false);

    //State pour changer de couleur le bouton submit en vert lorsque l'annonce a bien été crée donc on doit recevoir reponse positiv de l'api apiError a true
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmitForm = (e) => {
        // ici on accroche cette FONCTION a la balise form directement via l'attribut onSubmit={onSubmitForm} comme un onclick elle va permettre de:

        // 1-prevenir le comportement par défaut du navigateur lorsqu'on clique sur submit
        e.preventDefault();
        // 2-de renvoyer un msg d'erreur si l'user n'a pas rempli tous les champs obligatoirs

        if (
            title === "" ||
            description === "" ||
            price === "" ||
            quantity === ""
        ) {
            setIsFormError(true);
        } else {
            // Partir vers l'api...demande des datas par ne requete ajax axios qui est dans la fonction :
            //createOneAd()

            // On récupère la réponse de l'api et on stok la rep
            const retourDeLapiPositif = true;
            if (retourDeLapiPositif) {
                setIsApiError(false);
                setIsSuccess(true);
                setIsFormError(false);
            } else {
                setIsApiError(true);
                setIsFormError(false);
            }

            // doit mettre le bouton en vert quand l'annonce est bien créé dans la BDD.
        }
        // 3-faire appel a la fonction saveCompleteAd qui permet de :
    };

    /*/FONCTION qui fait appel aux useEffect
    const createAd = () => {
        //cette fonction fait appel a la fonction qui fait la requete au back 
    };*/

    return (
        <>
            <div className="formContainer">
                <div className="formHeader">
                    <h2 className="formTitle">Create New Ad</h2>
                </div>
                <form
                    className="Adsform"
                    name="createForm"
                    onSubmit={onSubmitForm}
                >
                    <div className="inputDiv">
                        <div className="input">
                            <label htmlFor="Title">Title</label>
                            <input
                                type="text"
                                id="Title"
                                placeholder="Enter Title"
                                onChange={(e) => {
                                    setTitle(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <div className="input">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                id="price"
                                placeholder="Enter Your Price"
                                onChange={(e) => {
                                    /* console.log(e);
                                    console.log(
                                        "e.target.value",
                                        e.target.value
                                    ) */ setPrice(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <div className="input ">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                id="quantity"
                                placeholder="Enter quantity"
                                onChange={(e) => {
                                    /* console.log(e);
                                    console.log(
                                        "e.target.value",
                                        e.target.value
                                    ); */
                                    setQuantity(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    {/*   IMAGE <div>
                        <label for="imageUpload">
                            Sélectionnez une image :
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            name="image"
                            accept="image/*"
                        ></input>
                    </div> */}
                    <div className="inputDiv">
                        <label htmlFor="description">Descriptions</label>
                        <textarea
                            className="
                        input flex"
                            type="text"
                            id="description"
                            name="description"
                            value={description}
                            rows="4"
                            cols="50"
                            placeholder="Enter description"
                            onChange={(e) => {
                                /* console.log(e);
                                console.log("e.target.value", e.target.value); */
                                setDescription(e.target.value);
                            }}
                        ></textarea>
                    </div>
                    {/* ICI il y aurra un conditionnement du msg d'erreur si le mec
                    a pas saisie les champs */}

                    {/* // INFO > En cas de soucis on fait un ternaire qui
                        renvoi le msg d'erreur en rouge si isError est a true >>> isError sera "true"*/}

                    {isFormError && (
                        <p className="errorMsg">
                            Veuillez saisir les informations requises.
                        </p>
                    )}
                    {isApiError && (
                        <p className="errorMsg">
                            il y eu une erreur veuillez réessayer ultérieurement
                        </p>
                    )}

                    {isSuccess && (
                        <p className="successMsg">
                            Votre annonce à bien été créé!
                        </p>
                    )}

                    <div className="formButtonContainer flex">
                        <SubmitButton text="SUBMIT" />
                        <button
                            type="submit"
                            className={`submit-button ${
                                isFormError ? "submit-button-error" : ""
                            } ${isSuccess ? "submit-button-success" : ""}`}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateAds;
