import "./App.css";
import Dashboard from "./Components/Dashboard/Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

// import React react dom

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// creation du router ??? // on met dans un tableau des objets
const router = createBrowserRouter([
    {
        path: "/",
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
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
