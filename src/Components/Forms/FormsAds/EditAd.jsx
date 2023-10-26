import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
// import components
import SubmitButton from "../../Buttons/submitButton";

import "./editAd.css";
import { oneAd, editOneAd } from "../../../api/ApiAds";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../../slices/userSlice";

const EditAd = () => {
  const user = useSelector(selectUser);
  const userId = String(user.infos.id);
  const { adId } = useParams();

  // STATES des elements d'origine  le champs doivent etre prerempli
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [disabled, setDisabled] = useState(true); // au depart le bouton est desactivé donc en gris
  const [isSuccess, setIsSuccess] = useState(false);
  // State pour faire apparaitre un msg en rouge  si user n'a pas rempli les champs
  const [isFormError, setIsFormError] = useState(false);
  const [isApiError, setIsApiError] = useState(false);
  //State pour changer de couleur le bouton submit en vert lorsque l'annonce a bien été crée donc on doit recevoir reponse positiv de l'api apiError a true
  const [successMsg, setSuccessMsg] = useState(false);
  const [adUserId, setAdUserId] = useState("");

  const onSubmitForm = (e) => {
    // ici on accroche cette FONCTION a la balise form directement via l'attribut onSubmit={onSubmitForm} comme un onclick elle va permettre de:

    // 1-prevenir le comportement par défaut du navigateur lorsqu'on clique sur submit
    e.preventDefault();
    // 2-de renvoyer un msg d'erreur si l'user n'a pas rempli tous les champs obligatoirs

    if (title === "" || description === "" || price === "") {
      setIsFormError(true);
    } else {
      const datas = {
        title,
        description,
        price,
      };

      // Partir vers l'api...demande des datas par ne requete ajax axios qui est dans la fonction :
      editOneAd(datas, adId)
        .then((res) => {
          // 1-si le status est différent de 200 alors on va chercher le msg d'erreur
          if (res.status === 200) {
            setIsFormError(false);
            setIsApiError(false);
            setErrorMsg("");
            setSuccessMsg(res.msg);
            setIsSuccess(true);
          } else {
            // 2-on stock se msg d'erreur dans un state
            setIsFormError(false);
            setIsApiError(true);
            setErrorMsg(res.msg);
            setSuccessMsg("");
            setIsSuccess(false);
          }
        })
        .catch((err) => {
          console.error("err", err);
        });
    }
  };

  useEffect(() => {
    // Récupérez les détails de l'annonce à éditer
    //const adId = props.adId; pas besoin
    oneAd(adId)
      .then((res) => {
        const adRetrieved = res.data.oneAd[0];
        // Utilisez les données pour initialiser les états correspondants
        setTitle(adRetrieved.title);
        setDescription(adRetrieved.description);
        setPrice(adRetrieved.price);
        setAdUserId(adRetrieved.userId);

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

  if (adUserId !== "" && adUserId !== userId && userId !== undefined)
    return <Navigate to="/" />;

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
                name="title"
                value={title}
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
              name="price"
              value={price}
              type="number"
              id="price"
              placeholder="Enter Your Price"
              onChange={(e) => {
                setPrice(e.currentTarget.value);
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="description">Descriptions</label>
            <textarea
              className="input flex"
              type="text"
              id="description"
              name="description"
              value={description}
              rows="4"
              cols="50"
              placeholder="Votre description"
              onChange={(e) => setDescription(e.target.value)}
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
          {isApiError && <p className="errorMsg">{errorMsg}</p>}
          {successMsg && <p className="successMsg">{successMsg}</p>}

          <div className="formButtonContainers">
            <button
              type="submit"
              className={`btn ${isFormError ? "submit-button-error" : ""} ${
                isSuccess ? "submit-button-success" : ""
              }`}
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
