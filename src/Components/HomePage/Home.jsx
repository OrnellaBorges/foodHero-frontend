import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import AllAdsCards from "../AdsCards/AllAdsCards";
import Rgpd from "../Concent/RgpdBanner";
//import Cookie from "../Cookie/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../slices/userSlice";

const Home = (props) => {
    const user = useSelector(selectUser);

    return (
        <div className="hp">
            {/* <Cookie /> */}
            <Hero />
            {/* <Rgpd /> */}
            <AllAdsCards />
            <Footer />
        </div>
    );
};

export default Home;
