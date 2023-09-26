import React from "react";

//import style
import "./sidebar.css";

//import assets
import logo from "../../../../assets/logo.png";

const Sidebar = () => {
    return (
        <div className="sidebar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="logo" />
            </div>
            <h2 className="">FOODHERO</h2>
        </div>
    );
};

export default Sidebar;
