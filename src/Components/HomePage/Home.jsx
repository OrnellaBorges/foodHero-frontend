import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import AllAdsCards from "../AdsCards/AllAdsCards";
//import Cookie from "../Cookie/Cookie";
//import BasketOrder from "../BasketOrder/BasketOrder";

const Home = () => {
    return (
        <div className="hp">
            <Header />
            {/* <Cookie /> */}
            <Hero />
            <AllAdsCards />
            <Footer />
        </div>
    );
};

export default Home;
