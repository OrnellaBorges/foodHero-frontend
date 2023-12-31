import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./editAd.css";
import { createOneAd } from "../../../api/ApiAds";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../../slices/userSlice";
const CreateAds = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userId = user.infos.id;

  // STATES
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // State pour faire apparaitre un msg en rouge  si user n'a pas rempli les champs
  const [isFormError, setIsFormError] = useState(false);
  const [isApiError, setIsApiError] = useState(false);

  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  //const [isValidForm, setIsValidForm] = useState(false);

  //State pour changer de couleur le bouton submit en vert lorsque l'annonce a bien été crée donc on doit recevoir reponse positiv de l'api apiError a true
  //const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitForm = (e) => {
    // ici on accroche cette FONCTION a la balise form directement via l'attribut onSubmit={onSubmitForm} comme un onclick elle va permettre de:

    // 1-prevenir le comportement par défaut du navigateur lorsqu'on clique sur submit
    e.preventDefault();
    // 2-de renvoyer un msg d'erreur si l'user n'a pas rempli tous les champs obligatoirs

    if (title === "" || description === "" || price === "") {
      setIsApiError(true);
      setIsFormError(true);
    } else {
      // creation d'un objet a envoyer dans la fonction createOneAd
      const datas = {
        title,
        price,
        description,
        userId,
      };
      // Partir vers l'api...demande des datas par ne requete ajax axios qui est dans la fonction :
      createOneAd(datas)
        .then((res) => {
          // 1-si le status est différent de 200 alors on va chercher le msg d'erreur
          if (res.status === 200) {
            setIsError("");
            setIsSuccess(res.msg);
          } else {
            // 2-on stock se msg d'erreur dans un state
            setIsError(res.msg);
            setIsSuccess(res.msg);
          }
        })
        .catch((err) => {
          console.error("err", err);
        });
    }
  };

  return (
    <>
      <section className="loginPage">
        <div className="formHeader">
          <h2 className="formTitle">Create New Ad</h2>
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
          <div className="inputDiv">
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
          </div>
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
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="formButtonContainer">
            {isSuccess && <p className="successMsg">{isSuccess}</p>}

            {isError && <p className="errorMsg">{isError}</p>}
            <button type="submit" className="btn">
              Envoyer
            </button>
            <Link to="/dashboard" className="btn">
              Back to Dashboard
            </Link>
            <Link to="/" className="btn">
              Back to Home
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateAds;
