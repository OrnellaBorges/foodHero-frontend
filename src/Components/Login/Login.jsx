import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.scss";

//import Icons
/* import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai"; */

//import assets:
//import logginMovie from "../../assets/movie.mp4";
//import loginImage from "../../assets/loginImage.jpg";
import Logo from "../../assets/logo2.png";

const Login = () => {
    //USESTATES HOOK to store input // pour les input
    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [isError, setIsError] = useState(false);

    // Stockage de l'url
    const apiUrl = "http://localhost:9600";

    //ONCLICK Variable
    const loginUser = () => {
        // ici on met une requete Ajax qui va permettre de faire appel a la route d'enregistrement d'un utilisateur
        // mais on a a besoin de la librairie axios alorq il faut installer axios

        // INFO > on peut creer les axios dans une autre page a part mais on le garde ici pour l'instant
        Axios.post(`${apiUrl}/api/v1/user/login`, {
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
        <div className="loginPage flex ">
            <div className="hheader">
                <div className="img-container">
                    <img src={Logo} alt="logo" />
                </div>
                <h3>Welcome Back!</h3>
            </div>

            <div className="formContainer flex">
                <form className="form grid" name="loginForm">
                    <span className="showMessage">
                        Login Status will go here
                    </span>
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            {/* <FaUserShield className="icon" /> */}
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter Username"
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
                    <button
                        type="submit"
                        className="btn flex"
                        onClick={loginUser}
                    >
                        <span>Login</span>
                        {/* <AiOutlineSwapRight className="icon" /> */}
                    </button>

                    <a href="/dashboard">Dashboard</a>

                    <span className="forgotPassword">Forgot your password</span>
                    <a href="">Click here</a>

                    <a href="">Continue without login</a>
                </form>
                <div className="footer">
                    <span className="text">Create account</span>
                    <Link to={"/register"}>
                        <button className="btn">Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
