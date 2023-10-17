import React from "react";
import { useState } from "react";
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
    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [isError, setIsError] = useState(false);

    // Stockage de l'url
    const apiUrl = "http://localhost:9600/";

    //ONCLICK Variable
    const loginUser = () => {
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
    };

    const handleClick = () => {
        axios
            .get(`${apiUrl}/api/v1/user/test`)
            .then((res) => {
                console.log("succès");
                console.log("res.data", res.data);
            })
            .catch(() => {
                console.log("error");
            });
    };

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
                <form className="logform" name="loginForm">
                    <h1>form container</h1>
                    <p className="showMessage">Login Status will go here</p>
                    <div className="inputDiv">
                        <label htmlFor="username">Email</label>
                        <div className="input flex">
                            {/* <FaUserShield className="icon" /> */}
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your email"
                                onChange={(event) => {
                                    console.log("event", event);
                                    console.log("event", event.target.value);
                                    setLoginUserName(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            {/* <BsShieldLockFill className="icon" /> */}
                            <input
                                type="text"
                                id="passeword"
                                placeholder="Enter Password"
                                onChange={(e) => {
                                    console.log(e);
                                    console.log(
                                        "e.target.value",
                                        e.target.value
                                    );
                                    setLoginPassword(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </form>

                <div className="login-linkContainer">
                    <h1>link container</h1>
                    <Button text="Login" />

                    <button type="submit" className="btnn" onClick={loginUser}>
                        Login bouton a remplacer qui fait l'axios de requete
                    </button>

                    <Link to={"/dashboard"}>go to dashboard</Link>
                    <Link to={"/forgotPassword"}>Forgot your password?</Link>
                    <Link to={"/"}>Continue without login</Link>
                </div>
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
