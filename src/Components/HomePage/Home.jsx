import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import AllAdsCards from "../AdsCards/AllAdsCards";
import Rgpd from "../Concent/RgpdBanner";
//import Cookie from "../Cookie/Cookie";
//import BasketOrder from "../BasketOrder/BasketOrder";

const Home = (props) => {
    return (
        <div className="hp">
            <Header isLogged={props.isLogged} userId={props.userId} />
            {/* <Cookie /> */}
            <Hero />
            <Rgpd />
            <AllAdsCards />
            <Footer />
        </div>
    );
};

export default Home;
