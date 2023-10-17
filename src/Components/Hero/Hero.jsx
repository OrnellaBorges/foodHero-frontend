import React from "react";

import hero from "../../assets/hero.jpg";

import "./hero.css";

const Hero = () => {
    return (
        <>
            <section className="hero">
                {/* <div className="hero-imgContainer">
                    <img src={hero} alt="hero" />
                </div> */}
                <div className="heroText-container">
                    <p className="heroText">
                        LAAHBD KSKZKZB KSH NJDHHDVC KJ BDGHD .
                    </p>

                    <div className="heroTitle">
                        <strong>Lorem ipsum dolor sit amet consectetur.</strong>
                    </div>

                    <button className="heroBtn">Get in touch</button>
                </div>
            </section>
        </>
    );
};

export default Hero;
