import { useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import "./form.css";
import { loginUser } from "../../../api/ApiUser";

// import components
import Button from "../../Buttons/Button";
import SubmitButton from "../../Buttons/submitButton";

//import Icons
/* import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs"; */

//import assets:
//import logginMovie from "../../assets/movie.mp4";
//import loginImage from "../../assets/loginImage.jpg";
//import Logo from "../../assets/logo2.png";

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true); // au depart le bouton est desactivé donc en gris
    const [isError, setIsError] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const onSubmitForm = (e) => {
        e.preventDefault(); // on block le rechargement de la page

        // ICI ON RECUP LES DATA DU FORMULAIRE ET ON LES STOCK DANS UN OBJET DATAFORMlogin pret a etre envoyé au back
        const dataFormLogin = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        // Fonction envoyer a back les data recupéré des champs : on doit l'envoyer au back on utilise la fonction qui fait cette action et on lui passe en argument dataFormLogin
        loginUser(dataFormLogin) //on passe l'objet dataFormLogin
            .then((res) => {
                // 1-si le status est différent de 200 alors on va chercher le msg d'erreur
                if (res.status === 200) {
                    //const { email, id, firstName, lastName } = res.user; // ici on fait une destructuration

                    // 1.1 -on construit un objet userInfo
                    /* const userInfos = {
                        id: String(id),
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                    }; */

                    // 1.2 -on declare une constante isLoggedStatu qu'on met a true
                    //const isLoggedStatus = true;

                    //props.loginUser(userInfos, isLoggedStatus);

                    // 1.3 ICI ON ENVOI DAND LE LS le token qui a été fait par le back lors du submit
                    localStorage.setItem("fh-token", res.token);

                    //  1.4 on redirige l'user vers la home lorsqu'il s'est connecté
                    navigate("/");
                } else {
                    // 2-on stock se msg d'erreur dans un state
                    setErrorMsg(res.msg); // on receptionne une string dans le state qu'on actualise
                }
            })
            .catch((err) => {
                console.error("err", err);
            });
    };

    useEffect(() => {
        if (email !== "" && password !== "") setDisabled(false);
        else setDisabled(true);
    }, [email, password]);

    return (
        <>
            <section className="loginPage ">
                <div className="formHeader">
                    <h1>Log in </h1>
                    <h3 className="formTitle">Welcome Back!</h3>
                </div>

                <form
                    className="formContainer"
                    name="loginForm"
                    onSubmit={(e) => onSubmitForm(e)}
                >
                    {/* // 3- on reutilise ce state errorMsg pour l'afficher dans le jsx */}

                    {errorMsg && <p className="errorMsg">{errorMsg}</p>}

                    <div className="input">
                        <label htmlFor="username">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="input">
                        {/* <BsShieldLockFill className="icon" /> */}
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="btnContainer">
                        {/* <button disabled={disabled} type="submit">
                        {" "}
                        Se connecter
                    </button> */}
                        <SubmitButton
                            text="Se connecter"
                            disabled={disabled}
                            type="submit"
                        />

                        {successMsg && (
                            <p className="successMsg">{successMsg}</p>
                        )}

                        {isError && (
                            <p className="errorMsg">
                                Il y a eu un problème lors de la connexion
                            </p>
                        )}
                    </div>

                    <div className="loginFooter">
                        <p className="text">Or create account</p>
                        <Link to={"/register"}>
                            <Button text="Sign up" />
                        </Link>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;

// Stockage de l'url
//const apiUrl = "http://localhost:9600/";

//ONCLICK Variable
/* const loginUser = () => {
        // ici on met une requete Ajax qui va permettre de faire appel a la route d'enregistrement d'un utilisateur
        // mais on a a besoin de la librairie axios alorq il faut installer axios

        // INFO > on peut creer les axios dans une autre page a part mais on le garde ici pour l'instant
        axios.post(`${apiUrl}api/v1/user/login`, {
            loginUserName: loginUserName,
            loginPassword: loginPassword,
        })
            //on utilise le .then en cas de succes il utilise cette methode et on passe en argument
            .then(() => {
            })

            // en cas d' erreur ça passe dans le catch et ça renvoit
            .catch(() => {
                // on cree un state error au dessus pour l'initialiser a false au départ
                // lorsqu'il y aura un soucis celui- ci permettra de l'utiliser afin de renvoyer un composant d'avertissement à l'utilisateur afin d'avertur qu'il y a eu un soucis
                setIsError(true);
            });
    }; */
