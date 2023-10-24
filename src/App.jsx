import "./App.css";
import Dashboard from "./Components/Dashboard/Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ForgotPassword from "./Components/ForgotPwd/ForgotPassword";
import Register from "./Components/Register/Register";
import Home from "./Components/HomePage/Home";
import Cookie from "./Components/Concent/Cookie";
import Infos from "./Components/Intro/Infos";
import Orders from "./Components/Orders/Orders";
import CreateAds from "./Components/AdsCards/FormsAds/CreateAds";
import Account from "./Components/Account/Account";
import UserProfile from "./Components/Account/UserProfile";
import SearchBar from "./Components/SearchBar/SearchBarContainer";
import Filter from "./Components/FilterComponent/FilterContainer";
import EditAccount from "./Components/Account/EditAccount";
import EditAd from "./Components/AdsCards/FormsAds/EditAd";
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
            path: "/searchBar",
            element: (
                <div>
                    <SearchBar />
                </div>
            ),
        },

        {
            path: "/filter",
            element: (
                <div>
                    <Filter />
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
            path: "/account",
            element: (
                <div>
                    <Account />
                </div>
            ),
        },

        {
            path: "/editAd",
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
            path: "/cookie",
            element: (
                <div>
                    <Cookie />
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
        {
            path: "/orders",
            element: (
                <div>
                    <Orders />
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
