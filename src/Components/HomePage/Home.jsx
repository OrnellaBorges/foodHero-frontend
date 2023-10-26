import React from "react";
import Hero from "./Hero/Hero";

import AllAdsCards from "../AdsCards/AllAdsCards";
import Rgpd from "../Concent/RgpdBanner";
//import Cookie from "../Cookie/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../slices/userSlice";

const Home = (props) => {
  const user = useSelector(selectUser);

  return (
    <div className="hp">
      <Hero />
      <Rgpd />
      <AllAdsCards />
    </div>
  );
};

export default Home;
