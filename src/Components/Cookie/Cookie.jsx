import React from "react";

//import style
import "./cookie.css";

//import assets
import cookies from "../../assets/cookie.jpg";

const Cookie = () => {
    return (
        <div className="container">
            <div className="cookie">
                <div className="cookie-img-container">
                    <img src={cookies} alt="image de cookies" />
                </div>
                <div className="content">
                    <h1>Cookies Consent</h1>
                    <p>
                        This website use Cookies to ensure you get the best
                        experience on your website.
                    </p>
                    <div className="buttons flex">
                        <button className="btn">I understand</button>
                        <a className="btn transparent">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookie;
