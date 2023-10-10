import "./App.css";
import Dashboard from "./Components/Dashboard/Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/HomePage/Home";
import Cookie from "./Components/Cookie/Cookie";
import BasketOrder from "./Components/BasketOrder/BasketOrder";
import CreateAds from "./Components/Forms/CreateAds";
import Account from "./Components/Account/Account";

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
        path: "/account",
        element: (
            <div>
                <Account />
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
        path: "/basket",
        element: (
            <div>
                <BasketOrder />
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
