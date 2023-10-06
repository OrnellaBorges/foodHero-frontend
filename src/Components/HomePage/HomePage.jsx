import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Footer />
            HOME PAGE
            <a href="/dashboard">Dashboard</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    );
};

export default HomePage;
