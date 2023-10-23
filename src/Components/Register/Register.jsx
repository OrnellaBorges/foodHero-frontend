import React from "react";
//import "../index.scss";
//import "./Login.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createOneUser } from "../../api/ApiUser";

//import './Register.css'
//import './App.css'

//import "../Login/Login.scss";

import "../Login/form.css";

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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true); // au depart le bouton est desactivé donc en gris
    const [errorMsg, setErrorMsg] = useState("");
    const [isError, setIsError] = useState(null);
    const [successMsg, setSuccessMsg] = useState("");

    const onSubmitForm = (e) => {
        e.preventDefault(); // on block le rechargement de la page

        // ICI ON RECUP LES DATA DU FORMULAIRE ET ON LES STOCK DANS UN OBJET DATAFORMlogin pret a etre envoyé au back
        const dataFormRegister = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        // on doit l'envoyer au back on utilise la fonction qui fait cette action et on lui passe en argument dataFormLogin
        createOneUser(dataFormRegister)
            .then((res) => {
                // 1-si le status est différent de 200 alors on va chercher le msg d'erreur
                if (res.status === 200) {
                    setErrorMsg("");
                    setSuccessMsg(res.msg);
                } else {
                    // 2-on stock se msg d'erreur dans un state
                    setErrorMsg(res.msg); // on receptionne une string dans le state qu'on actualise
                    setSuccessMsg("");
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    useEffect(() => {
        if (
            email !== "" &&
            password !== "" &&
            firstName !== "" &&
            lastName !== ""
        )
            setDisabled(false);
        else setDisabled(true);
    }, [email, password]);

    return (
        <>
            <section className="registerPage">
                <div className="formHeader">
                    <h1>Form Header Register</h1>
                    <h3 className="formTitle">Welcome!</h3>
                </div>

                <form
                    onSubmit={(e) => onSubmitForm(e)}
                    className="formContainer"
                    name="registerForm"
                >
                    <h1>Form container</h1>
                    {/* // INFO > En cas de soucis on fait un ternaire qui
                        renvoi le msg d'erreur en rouge si ça rentre dans le
                        catch de l'axios au dessus comme isError sera a true*/}

                    {successMsg && <p className="successMsg">{successMsg}</p>}
                    {errorMsg && <p className="errorMsg">{errorMsg}</p>}

                    {isError && (
                        <p className="errorMsg">
                            Il y a eu un problème lors de la connexion
                        </p>
                    )}
                    <div className="input">
                        <label htmlFor="firstName">Firstname</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter Your firstName"
                            onChange={(event) => {
                                setFirstName(event.target.value);
                            }}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="lastName">Lastname</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter Your lastName"
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        {/* <MdMarkEmailRead className="icon" /> */}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        {/* <BsShieldLockFill className="icon" /> */}
                        <input
                            name="password"
                            type="password"
                            id="passeword"
                            placeholder="Enter Password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>
                    <button
                        disabled={disabled}
                        type="submit"
                        //className="btn flex"
                    >
                        Register
                    </button>
                    <div className="loginFooter">
                        <h2>footer container</h2>
                        <p className="text">Have an account?</p>
                        <Link to={"/login"}>
                            <button className="btn">Sign in</button>
                        </Link>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Register;
