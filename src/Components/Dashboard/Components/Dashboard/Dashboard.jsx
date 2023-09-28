import React from "react";
import Sidebar from "../SideBar Section/Sidebar";
import Body from "../BodySection/Body";

//IMPORT STYLE
import "./dashboard.scss";
import "../../../../index.scss";

const Dashboard = () => {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                {/* <h1>DASHBOARD PAGE</h1> */}
                <Sidebar />
                <Body />
                {/* <a href="/">Log Out</a> */}
            </div>
        </div>
    );
};

export default Dashboard;
