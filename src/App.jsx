import "./App.css";
import Dashboard from "./Components/Dashboard/Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ForgotPassword from "./Components/ForgotPwd/ForgotPassword";
import Register from "./Components/Register/Register";
import Home from "./Components/HomePage/Home";
import Cookie from "./Components/Cookie/Cookie";
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

// import React react dom

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// creation du router ??? // on met dans un tableau des objets
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Home />
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
        path: "/login",
        element: (
            <div>
                <Login />
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
        path: "/account",
        element: (
            <div>
                <Account />
            </div>
        ),
    },
    {
        path: "/editAccount",
        element: (
            <div>
                <EditAccount />
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
        path: "/userProfile",
        element: (
            <div>
                <UserProfile />
            </div>
        ),
    },
    {
        path: "/dashboard",
        element: (
            <div>
                <Dashboard />
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

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
