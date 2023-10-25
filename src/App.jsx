import "./App.css";
import Dashboard from "./Components/Dashboard/Components/Dashboard/Dashboard";

import ForgotPassword from "./Components/ForgotPwd/ForgotPassword";
import Home from "./Components/HomePage/Home";

import Infos from "./Components/Intro/Infos";

import Login from "./Components/Forms/Login/Login";
import Register from "./Components/Forms/Register/Register";
import CreateAds from "./Components/Forms/FormsAds/CreateAds";
import UserProfile from "./Components/Forms/Account/UserProfile";

import EditAccount from "./Components/Forms/Account/EditAccount";
import EditAd from "./Components/Forms/FormsAds/EditAd";
import OneAd from "./Components/AdsCards/OneAd/OneAd";
import UserOneAd from "./Components/Dashboard/Components/ListingSection/UserAds/UserOneAd";

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
    const [userInfos, setUserInfos] = useState({}); // infos de l'utilisateur loggué lorsque l'user s'est log dans la page loggin alors on a fait remonté les data dans app
    const [isLogged, setIsLogged] = useState(false);

    console.warn("userInfos", userInfos);

    const handleLoginUser = (userInfos, isLoggedStatus) => {
        setUserInfos(userInfos);
        setIsLogged(isLoggedStatus);
    };

    const handleLogoutUser = () => {
        setUserInfos({});
        setIsLogged(false);
    };

    // creation du router ??? // on met dans un tableau des objets
    const router = createBrowserRouter([
        {
            path: "/userProfile/:cookerId",
            element: (
                <div>
                    <UserProfile
                        logoutUser={handleLogoutUser}
                        userId={userInfos.id}
                    />
                </div>
            ),
        },
        {
            path: "/login",
            element: (
                <div>
                    <Login loginUser={handleLoginUser} />
                </div>
            ),
        },
        {
            path: "/",
            element: (
                <div>
                    <Home
                        isLogged={isLogged}
                        userId={userInfos.id}
                        userName={userInfos.firstName}
                    />
                </div>
            ),
        },
        {
            path: "/editAccount",
            element: (
                <div>
                    <EditAccount isLogged={isLogged} userId={userInfos.id} />
                </div>
            ),
        },
        {
            path: "/dashboard",
            element: (
                <div>
                    <Dashboard
                        isLogged={isLogged}
                        user={userInfos}
                        userId={userInfos.id}
                        firstName={userInfos.firstName}
                        lastName={userInfos.lastName}
                    />
                </div>
            ),
        },
        {
            path: "/register",
            element: (
                <div>
                    <Register />
                </div>
            ),
        },
        {
            path: "/forgotPassword",
            element: (
                <div>
                    <ForgotPassword />
                </div>
            ),
        },

        {
            path: "/infos",
            element: (
                <div>
                    <Infos />
                </div>
            ),
        },

        {
            path: "/editAd/:adId",
            element: (
                <div>
                    <EditAd />
                </div>
            ),
        },

        {
            path: "/oneAd/:adId",
            element: (
                <div>
                    <OneAd />
                </div>
            ),
        },
        {
            path: "/userOneAd",
            element: (
                <div>
                    <UserOneAd />
                </div>
            ),
        },
        {
            path: "/create",
            element: (
                <div>
                    <CreateAds />
                </div>
            ),
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
