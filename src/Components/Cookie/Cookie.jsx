import React from "react";

//import style
import "./cookie.css";

//import assets
import cookie from "../../assets/cookie.jpg";

const Cookie = () => {
    return (
        <div className="wrapper">
            <img src={cookies} alt="image de cookies" />

            <div className="content">
                <h1>Cookies Consent</h1>
                <p>
                    This website use Cookies to ensure you get the best
                    experience on your website.
                </p>
                <div className="buttons flex">
                    <button className="btn">I understand</button>
                    <button className="btn transparent">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Cookie;
