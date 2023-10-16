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
/* import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md"; */

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
        // ici on met une requete Ajax qui va permettre de faire appel a la route d'enregistrement d'un utilisateur
        // mais on a a besoin de la librairie axios alorq il faut installer axios

        // INFO > on peut creer les axios dans une autre page a part mais on le garde ici pour l'instant
        Axios.post(`${apiUrl}/api/v1/user/create`, {
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
        <>
            <div className="registerPage">
                {/* <div className="container">
                <div className="titleDiv">
                    <h1>Register PAGE</h1>
                    <h2 className="title">FOODHERO</h2>
                    <p>Un hero se cache dans votre frigo!</p>
                    <img src="loginImage.jpg" alt="" />
                </div> */}

                <div className="logform">
                    <div className="hheader">
                        {/* <img src={Logo} alt="logo" /> */}
                        <h3>Welcome !</h3>
                    </div>
                    <form className="formContainer" name="loginForm">
                        {/* // INFO > En cas de soucis on fait un ternaire qui
                        renvoi le msg d'erreur en rouge si ça rentre dans le
                        catch de l'axios au dessus comme isError sera a true*/}
                        {isError ? (
                            <p className="showMessage">
                                La création de votre compte a echoué. Veuillez
                                essayer ultérieurement.
                            </p>
                        ) : null}
                        <div className="logForm">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                {/* <MdMarkEmailRead className="icon" /> */}
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="logForm">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                {/*  <FaUserShield className="icon" /> */}
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Enter Username"
                                    onChange={(event) => {
                                        setUserName(event.target.value);
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
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="login-linkContainer">
                    <button
                        type="submit"
                        className="btn flex"
                        onClick={createUser}
                    >
                        <span>Register</span>
                    </button>
                    {/* //INFO > Faire une route forgot dans le back */}
                    <Link to={"/"}>Or continue without register</Link>
                </div>
                <div className="loginFooter">
                    <p className="text">Have an account?</p>
                    <Link to={"/login"}>
                        <button className="btn">Sign in</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Register;
