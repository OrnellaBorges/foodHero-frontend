import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

//import Icons
import { FaUserShield } from "react-icons/fa";

// import assets:
import video from "../../assets/movie.mp4";
import loginImage from "../../assets/loginImage.jpg";

const Login = () => {
    return (
        <div className="loginPage flex ">
            <h1>LOGIN PAGE</h1>
            <div className="textdiv">
                <h2 className="title">FOODHERO</h2>
                <p>Un hero se cache en vous</p>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    {/* <img src="" alt="" /> */} {/* LOGO */}
                    <h3>Welcome Back!</h3>
                </div>
                <form className="form grid">
                    <span>Login Status will go here</span>
                    <div className="inpuDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex"></div>
                        <FaUserShield className="icon" />
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter Username"
                        />
                    </div>
                </form>
            </div>

            <div className="footerDiv flex">
                <span className="text">Create account</span>
                <Link to={"/register"}>
                    <button className="btn">Sign up</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;

{
    /* <div className="container flex">
                {/* <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    
                </div>
            </div>
            <a href="/register">To Register</a>
            <a href="/dashboard">To Dashboard</a> 

            {<button>To Register</button>
            <button>To Dashboard</button> } */
}
