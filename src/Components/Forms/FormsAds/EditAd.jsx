import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import components
import SubmitButton from "../../Buttons/submitButton";

import "./editAd.css";
import { editOneAd } from "../../../api/ApiAds";

const EditAd = (props) => {
    const { adId } = useParams();
    console.log("adId", adId);
    //const userId = props.userId;
    //const adId = props.adId

    // STATES des elements d'origine  le champs doivent etre prerempli
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const [disabled, setDisabled] = useState(true); // au depart le bouton est desactivé donc en gris

    //on construit un nouvel objet pour l'envoyer au back
    const newData = {
        title: title,
        description: description,
        quantity: quantity,
        price: price,
    };

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
            editOneAd();

            // On récupère la réponse de l'api et on stock la rep
            const retourDeLapiPositif = true;
            if (retourDeLapiPositif) {
                setIsApiError(false);
                setIsSuccess(true);
                setIsFormError(false);
            } else {
                setIsApiError(true);
                setIsFormError(false);
            }
        }
    };

    useEffect(() => {
        // Récupérez les détails de l'annonce à éditer
        //const adId = props.adId; pas besoin
        getAdDetails(adId)
            .then((adDetails) => {
                // Utilisez les données pour initialiser les états correspondants
                setTitle(adDetails.title);
                setDescription(adDetails.description);
                setPrice(adDetails.price);
                setQuantity(adDetails.quantity);

                // Activez le bouton après avoir pré-rempli les champs
                setDisabled(false);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des détails de l'annonce :",
                    error
                );
            });
    }, []);

    return (
        <>
            <section className="loginPage">
                <div className="formHeader">
                    <h2 className="formTitle">Edit Ad</h2>
                </div>
                <form
                    className="formContainer"
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
                    <div className="input">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Enter Your Price"
                            onChange={(e) => {
                                setPrice(e.currentTarget.value);
                            }}
                        />
                    </div>

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
                    <div className="input">
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
                            placeholder="Votre description"
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
                            Votre annonce à bien été modifié!
                        </p>
                    )}

                    <div className="formButtonContainers">
                        <SubmitButton text="sauvegarder les modifications" />
                        <button
                            type="submit"
                            className={`submit-button ${
                                isFormError ? "submit-button-error" : ""
                            } ${isSuccess ? "submit-button-success" : ""}`}
                        >
                            Sauvegarder les modifications
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default EditAd;
