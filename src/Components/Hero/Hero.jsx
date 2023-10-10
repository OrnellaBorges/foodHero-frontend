import React from "react";

import AdsCards from "../AdsCards/AdsCards";

import "./hero.css";

const Hero = () => {
    return (
        <>
            <section className="hero">
                {/*             <div className="hero-imgContainer">
                <img src={hero} alt="hero" />
            </div>
 */}
                <div className="heroText-container">
                    <span className="spanText">
                        LAAHBD KSKZKZB KSH NJDHHDVC KJ BDGHD .
                    </span>

                    <div className="heroTitle">
                        <strong>Lorem ipsum dolor sit amet consectetur.</strong>
                        <btn className="btn">Get in touch</btn>
                    </div>
                </div>
            </section>
            <AdsCards />
        </>
    );
};

export default Hero;
