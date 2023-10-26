import { useState, useEffect } from "react";
//import des action qui chargera les annonce venant d'un back

import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../slices/userSlice";
import { selectAds, loadAds } from "../slices/adSlice";
import { Navigate, useParams } from "react-router-dom";
import { checkMyToken } from "../api/ApiUser";
import { displayAds } from "../api/ApiAds";

//HOC de controle des datas et de la sécurité
const RequireDataAuth = (props) => {
    //on récup les params de la route
    const params = useParams();
    //on récupère la state user dans le store en mode lecture
    const user = useSelector(selectUser);
    const allAds = useSelector(selectAds);
    //on prépare la fonctionnalité pour dispatcher notre action dans le store
    const dispatch = useDispatch();
    //on récupère le composant à afficher qui a été passé en tant que props via App.js
    const Child = props.child;
    //gestion de la redirection
    const [redirect, setRedirect] = useState(false);
    //au chargement de chaque composant
    useEffect(() => {
        //si les bières ne sont pas chargé dans redux, on les charge (action du store)
        if (allAds.ads.length === 0) {
            displayAds()
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(loadAds(res.result));
                    }
                })
                .catch((err) => console.error(err));
        }
        //on va tester si on est connecté via les infos de redux
        //si l'utilisateur n'est pas logged (store)

        if (user.isLogged === false) {
            //on récup le token dans le localStore
            const token = localStorage.getItem("fh-token");
            //si le storagee répond null (pas trouvé) et que la props auth est true (route protégée)
            if (token === null && props.auth) {
                //on demande une redirection
                setRedirect(true);
                //sinon
            } else {
                //sinon
                //on appel notre requète axios qui va vérifier le token dans le back checkToken

                checkMyToken(token)
                    .then((response) => {
                        //si le status de la réponse n'est pas 200
                        if (response.status !== 200) {
                            if (props.auth === true) {
                                //on demande la redirection
                                setRedirect(true);
                            }
                            //sinon
                        } else {
                            //on stock la réponse de la requète axios dans une variable user (retourne un objet)
                            let user = response.user[0];
                            //on peut rajouter une propriété token à user avec le token dedans
                            user.token = token;
                            //appel l'action de connexion de l'utilisateur (store)

                            dispatch(connectUser(user));
                            /* if (myUser.role !== "admin" && props.admin) {
                                    //setRedirectAdmin(true)
                                    window.location.href =
                                        "http://127.0.0.1:5173/";
                                } */
                        }
                    })
                    .catch((err) => console.error(err));
            }
        }
    }, [props]);

    if (redirect) {
        return <Navigate to="/login" />;
    }
    return <Child {...props} params={params} />;
};

export default RequireDataAuth;
