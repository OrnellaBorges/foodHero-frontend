import React from "react";

//import hero from "../../assets/banner.jpg";

import "./hero.css";

const Hero = () => {
    return (
        <section className="hero">
            {/*             <div className="hero-imgContainer">
                <img src={hero} alt="hero" />
            </div>
 */}
            <div className="heroText-container">
                <span className="spanText">
                    A TEAM OF PROFESSIONAL TRAVEL EXPERTS
                </span>

                <div className="heroTitle">
                    <strong>Trust Our Experience</strong>
                    <btn className="btn">Get in touch</btn>
                </div>
            </div>
        </section>
    );
};

export default Hero;
