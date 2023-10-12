import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import AdsCards from "../AdsCards/AdsCards";
//import Cookie from "../Cookie/Cookie";
//import BasketOrder from "../BasketOrder/BasketOrder";

const Home = () => {
    return (
        <div className="hp">
            <Header />
            {/* <Cookie /> */}
            <Hero />
            <AdsCards />
            <Footer />
            {/*
            <p className="test">je suis un test</p>
            <a href="/dashboard">Dashboard</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/basket">Basket</a> */}
        </div>
    );
};

export default Home;
