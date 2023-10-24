import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

import video from "../../assets/banana.mp4";

const Hero = () => {
    return (
        <>
            <section className="hero">
                {/* <div className="hero-imgContainer">
                    <img src={hero} alt="hero" />
                </div> 
                <div className="heroText-container">
                    <p className="heroText">Vous êtes le chef en cuisine!</p>

                    <div className="heroTitle">
                        <strong>
                            Partagez, cuisinez, economisez... et si votre frigo
                            pouvais parler? Il dirait quoi ?
                        </strong>
                    </div>
                    <Link to="/presentation">
                        <button className="heroBtn">En savoir plus</button>
                    </Link>
                </div>*/}
                <div className="cardSection ">
                    <div className="rightCard ">
                        <div className="cardContent">
                            <h1>Ne jetez plus vendez !</h1>
                            <p>
                                Partagez, cuisinez, economisez... et si votre
                                frigo pouvais parler? Il dirait quoi ?
                            </p>
                            <div className="topCardButtons flex">
                                {/* <Link to="/">
                                    <button className="fillBtn">Explore</button>
                                </Link> */}
                                <Link to="/infos">
                                    <button className="fillBtn">
                                        En savoir plus
                                    </button>
                                </Link>
                                {/* <Link to="/">
                            <button className="transparentBtn">
                                Top Sellers
                            </button>
                            </Link> */}
                            </div>
                        </div>

                        <div className="videoDiv">
                            <video src={video} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
