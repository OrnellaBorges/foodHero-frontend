import React from "react";

import "./Login.css";
import { Link } from "react-router-dom";
import "./Login.scss";

//import Icons
import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

//import assets:
//import video from "../../assets/movie.mp4";
//import loginImage from "../../assets/loginImage.jpg";
//import { Logo } from "../../assets/vite.svg";

const Login = () => {
    return (
        <div className="registerPage flex ">
            <div className="container">
                <div className="titleDiv">
                    <h1>LOGIN PAGE</h1>
                    <h2 className="title">FOODHERO</h2>
                    <p>Un hero se cache en vous</p>
                    {/*                <img src="loginImage.jpg" alt="" /> */}
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        {/* <img src={Logo} alt="logo" /> */}
                        <h3>Welcome Back!</h3>
                    </div>
                    <form className="form grid" name="loginForm">
                        <span className="showMessage">
                            Login Status will go here
                        </span>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex"></div>
                            <FaUserShield className="icon" />
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter Username"
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
                            />
                        </div>
                        <button type="submit" className="btn flex">
                            <span>Login</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        <a href="/dashboard">Dashboard</a>

                        <span className="forgotPassword">
                            Forgot your password
                        </span>
                        <a href="">Click here</a>

                        <a href="">Continue without login</a>
                    </form>
                </div>

                <div className="footerDiv flex">
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
