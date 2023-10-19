import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.scss";

// import components
import Button from "../Buttons/Button";

//import Icons
/* import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs"; */

//import assets:
//import logginMovie from "../../assets/movie.mp4";
//import loginImage from "../../assets/loginImage.jpg";
//import Logo from "../../assets/logo2.png";

const Login = () => {
    //USESTATES HOOK to store input // pour les input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true); // au depart le bouton est desactivé donc en gris
    const [isError, setIsError] = useState(null);

    // Stockage de l'url
    const apiUrl = "http://localhost:9600/";

    //ONCLICK Variable
    /* const loginUser = () => {
        // ici on met une requete Ajax qui va permettre de faire appel a la route d'enregistrement d'un utilisateur
        // mais on a a besoin de la librairie axios alorq il faut installer axios

        // INFO > on peut creer les axios dans une autre page a part mais on le garde ici pour l'instant
        Axios.post(`${apiUrl}api/v1/user/login`, {
            loginUserName: loginUserName,
            loginPassword: loginPassword,
        })
            //on utilise le .then en cas de succes il utilise cette methode et on passe en argument
            .then(() => {
                console.log("User has been loged");
            })

            // en cas d' erreur ça passe dans le catch et ça renvoit
            .catch(() => {
                // on cree un state error au dessus pour l'initialiser a false au départ
                // lorsqu'il y aura un soucis celui- ci permettra de l'utiliser afin de renvoyer un composant d'avertissement à l'utilisateur afin d'avertur qu'il y a eu un soucis
                setIsError(true);
            });
    }; */

    const onSubmitForm = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        console.log("data", data);
    };

    useEffect(() => {
        if (email !== "" && password !== "") setDisabled(false);
        else setDisabled(true);
    }, [email, password]);

    return (
        <div className="loginPage ">
            <div className="hheader">
                <h1>header container</h1>
                {/* <div className="img-container">
                    <img src={Logo} alt="logo" />
                </div> */}
                <h3>Welcome Back!</h3>
            </div>

            <div className="formContainer">
                <form
                    className="logform"
                    name="loginForm"
                    onSubmit={(e) => onSubmitForm(e)}
                >
                    <h1>form container</h1>
                    <p className="showMessage">Login Status will go here</p>
                    <div className="inputDiv">
                        <label htmlFor="username">Email</label>
                        <div className="input flex">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            {/* <BsShieldLockFill className="icon" /> */}
                            <input
                                type="text"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <button disabled={disabled} type="submit">
                        {" "}
                        Se connecter
                    </button>
                </form>
                {isError && (
                    <p style={{ color: "red" }}>
                        Il y a eu un problème lors de la connexion
                    </p>
                )}

                {/* <div className="login-linkContainer">
                    <h1>link container</h1>
                    <Button text="Login" />

                    <button type="submit" className="btnn" onClick={loginUser}>
                        Login bouton a remplacer qui fait l'axios de requete
                    </button>

                    <Link to={"/dashboard"}>go to dashboard</Link>
                    <Link to={"/forgotPassword"}>Forgot your password?</Link>
                    <Link to={"/"}>Continue without login</Link>
                </div> */}
                <div className="loginFooter">
                    <h1>footer container</h1>
                    <p className="text">Create account</p>
                    <Link to={"/register"}>
                        <Button text="Sign up" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
