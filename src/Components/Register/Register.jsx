import React from "react";
//import "../index.scss";
//import "./Login.css";
import { Link } from "react-router-dom";
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
                        <span className="showMessage">
                            Register Status will go here
                        </span>
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex"></div>
                            <MdMarkEmailRead className="icon" />
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter Username"
                            />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex"></div>
                            <FaUserShield className="icon" />
                            <input
                                type="text"
                                id="email"
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
                            <span>Register</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        <span className="forgotPassword">
                            Forgot your password
                        </span>
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
