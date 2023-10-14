import React from "react";

import { useState, useEffect } from "react";

// import components
import SubmitButton from "../Buttons/SubmitButton";

import "./form.css";

const CreateAds = () => {
    // STATES
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    // renvoyer msg d'erreur si user n'a pas rempli les champs
    const [isError, setIsError] = useState("");

    //State pour changer de couleur le bouton submir en vert
    //const [isSubmit, setIsSubmit] = useState(false);

    const onSubmitForm = (e) => {
        // ici on accroche cette fonction a la balise form directement via l'attribut onSubmit={onSubmitForm} comme un onclick elle va permettre de:
        // 1-prevenir le comportement par défaut du navigateur lorsqu'on clique sur submit
        e.preventDefault();
        // 2-de renvoyer un msg d'erreur si l'user n'a pas rempli tous les champs obligatoirs

        if (
            title === "" ||
            description === "" ||
            price === "" ||
            quantity === ""
        ) {
            setIsError(true);
        }
        // 3-faire appel a la fonction saveCompleteAd qui permet de :
    };

    /*/FONCTION qui font appel aux useEffect
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
                        <label htmlFor="Title">Title</label>
                        <div className="input flex">
                            <input
                                type="text"
                                id="Title"
                                placeholder="Enter Title"
                                onChange={(e) => {
                                    console.log("event", e);
                                    console.log("event", e.target.value);
                                    setTitle(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="price">Price</label>
                        <div className="input flex">
                            <input
                                type="number"
                                id="price"
                                placeholder="Enter Your Price"
                                onChange={(e) => {
                                    console.log(e);
                                    console.log(
                                        "e.target.value",
                                        e.target.value
                                    );
                                    setPrice(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="part">Quantity</label>
                        <div className="input flex">
                            <input
                                type="number"
                                id="number"
                                placeholder="Enter quantity"
                                onChange={(e) => {
                                    console.log(e);
                                    console.log(
                                        "e.target.value",
                                        e.target.value
                                    );
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
                        <label htmlFor="price">Descriptions</label>
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
                                console.log(e);
                                console.log("e.target.value", e.target.value);
                                setDescription(e.target.value);
                            }}
                        ></textarea>
                    </div>
                    {/* ICI il y aurra un conditionnement du msg d'erreur si le mec
                    a pas saisie les champs */}

                    {/* // INFO > En cas de soucis on fait un ternaire qui
                        renvoi le msg d'erreur en rouge si isError est a true >>> isError sera "true"*/}

                    <p className={isError ? "showMessage" : "hideMessage"}>
                        Veuillez saisir les informations requises.
                    </p>

                    <div className="formButtonContainer flex">
                        <SubmitButton text="SUBMIT" />
                        <button
                            type="submit"
                            className="formBtn"
                            onClick={console.log("coucou")} //ici il fa executer la fonction ligne 22
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
