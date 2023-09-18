import React from "react";
//import "../index.scss";
//import "./Login.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

//import './Register.css'
//import './App.css'

import "../Login/Login.scss";

//import Icons
import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

//import assets:
//import video from "../../assets/movie.mp4";
//import loginImage from "../../assets/loginImage.jpg";
//import { Logo } from "../../assets/vite.svg";

const Register = () => {
    //Need UseState to hold our inputs = memorisation des inputs
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [isError, setIsError] = useState(false);

    // Stockage de l'url
    const apiUrl = "http://localhost:9600";

    //ONCLICK Variable
    const createUser = () => {
        // ici on met un fetch qui va permettre de faire appel a la route d'enregistrement d'un utilisateur
        // mais on a a besoin de la librairie axios

        // INFO > on peut creer les axios dans une autre page a part mais on le garde ici pour l'instant
        Axios.post(`${apiUrl}/create`, {
            Email: email,
            UserName: userName,
            Password: password,
        })
            //on utilise le .then en cas de succes il utilise cette methode et on passe en argument
            .then(() => {
                console.log("User has been created");
            })

            // en cas d' erreur ça passe dans le catch et ça renvoit
            .catch(() => {
                // on cree un state error au dessus pour l'initialiser a false au départ
                // lorsqu'il y aura un soucis celui- ci permettra de l'utiliser afin de renvoyer un composant d'avertissement à l'utilisateur afin d'avertur qu'il y a eu un soucis
                setIsError(true);
            });
    };

    return (
        <div className="loginPage flex ">
            <div className="container">
                <div className="titleDiv">
                    <h1>Register PAGE</h1>
                    <h2 className="title">FOODHERO</h2>
                    <p>Un hero se cache en vous</p>
                    {/*                <img src="loginImage.jpg" alt="" /> */}
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        {/* <img src={Logo} alt="logo" /> */}
                        <h3>HI !</h3>
                    </div>
                    <form className="form grid" name="loginForm">
                        {/* // INFO > En cas de soucis on fait un ternaire qui
                        renvoi le msg d'erreur en rouge si ça rentre dans le
                        catch de l'axios au dessus comme isError sera a true*/}
                        {isError ? (
                            <p className="showMessage errorMessage">
                                La création de votre compte a echoué. Veuillez
                                essayer ultérieurement.
                            </p>
                        ) : null}
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex"></div>
                            <MdMarkEmailRead className="icon" />
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter Your Email"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>
                        <div className="inputDigv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex"></div>
                            <FaUserShield className="icon" />
                            <input
                                type="text"
                                id="email"
                                placeholder="Enter Username"
                                onChange={(event) => {
                                    setUserName(event.target.value);
                                }}
                            />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex"></div>
                            <BsShieldLockFill className="icon" />
                            <input
                                type="text"
                                id="passeword"
                                placeholder="Enter Password"
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn flex"
                            onClick={createUser}
                        >
                            <span>Register</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>
                        {/* //INFO > Faire une route forgot dans le back */}
                        <p className="forgotPassword">Forgot your password</p>
                        <a href="">Click here</a>
                    </form>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Have an account?</span>
                    <Link to={"/"}>
                        <button className="btn">Sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
