import "./App.css";
import Dashboard from "./Components/Dashboard/Components/Dashboard/Dashboard";
import Container from "./Components/Dashboard/Components/Container";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/HomePage/Home";
import Cookie from "./Components/Cookie/Cookie";
import Orders from "./Components/Orders/Orders";
import CreateAds from "./Components/Dashboard/Forms/CreateAds";
import Account from "./Components/Account/Account";
import OneAd from "./Components/OneAd/OneAd";

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
    path: "/container",
    element: (
      <div>
        <Container />
      </div>
    ),
  },
  {
    path: "/OneAd",
    element: (
      <div>
        <OneAd />
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
