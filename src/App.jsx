import "./App.css";
import Dashboard from "./Components/Dashboard/Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import HomePage from "./Components/HomePage/HomePage";
import Cookie from "./Components/Cookie/Cookie";
import BasketOrder from "./Components/BasketOrder/BasketOrder";

// import React react dom

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// creation du router ??? // on met dans un tableau des objets
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <HomePage />
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
