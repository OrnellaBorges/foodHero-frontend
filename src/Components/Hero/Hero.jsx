import React from "react";

import hero from "../../assets/banner.jpg";

import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-imgContainer">
        <img src={hero} alt="hero" />
      </div>
      <h1 className="hero-title">
        Vous entrez dans un monde merveilleux et savoureux. Bienvenue dans la
        cuisine de vos voisins.
      </h1>
    </section>
  );
};

export default Hero;
