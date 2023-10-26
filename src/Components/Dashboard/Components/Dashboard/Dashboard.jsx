import React from "react";
//import Sidebar from "../SideBar Section/Sidebar";
import Body from "../BodySection/Body";

//IMPORT STYLE
import "./dashboard.scss";
import "../../../../index.scss";
import Sidebar from "../SideBar Section/Sidebar";
import Footer from "../../../HomePage/Footer/Footer";

const Dashboard = (props) => {
    const user = props.user;

    return (
        <>
            <div className="dashboard">
                <div className="dashboardContainer flex">
                    <Sidebar />
                    <Body userId={props.userId} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
